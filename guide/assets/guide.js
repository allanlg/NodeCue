(() => {
  "use strict";

  const root = document.documentElement;
  const english = root.lang === "en";
  const labels = english ? {
    guide: "User guide", openNav: "Open navigation", closeNav: "Close navigation",
    light: "Use light theme", dark: "Use dark theme", enter: "Enter a search term.",
    minimum: "Enter at least two characters.", empty: "No results."
  } : {
    guide: "Guide utilisateur", openNav: "Ouvrir la navigation", closeNav: "Fermer la navigation",
    light: "Utiliser le thème clair", dark: "Utiliser le thème sombre", enter: "Saisissez un terme.",
    minimum: "Saisissez au moins deux caractères.", empty: "Aucun résultat."
  };
  document.querySelectorAll('[data-guide-language]').forEach(button => {
    const language = button.dataset.guideLanguage;
    button.setAttribute('aria-pressed', String(language === (english ? 'en' : 'fr')));
    button.addEventListener('click', () => {
      if (language === (english ? 'en' : 'fr')) return;
      const target = new URL(root.dataset[language === 'en' ? 'languageEn' : 'languageFr'], location.href);
      target.search = location.search;
      target.searchParams.set('edition', 'final');
      target.hash = routedHash(activePageId);
      location.assign(target.href);
    });
  });
  const pages = Array.from(document.querySelectorAll(".guide-page"));
  const navigationLinks = Array.from(document.querySelectorAll("[data-page]"));
  const pageOrder = navigationLinks.map((link) => link.dataset.page);
  const pageById = new Map(pages.map((page) => [page.id, page]));
  const linkById = new Map(navigationLinks.map((link) => [link.dataset.page, link]));
  const content = document.getElementById("guide-content");
  const topbar = document.querySelector(".topbar");
  const guideShell = document.querySelector(".guide-shell");
  const sidebar = document.getElementById("guide-sidebar");
  const navToggle = document.getElementById("mobile-nav-toggle");
  const previousPage = document.getElementById("previous-page");
  const nextPage = document.getElementById("next-page");
  const progressBar = document.getElementById("reading-progress-bar");
  const themeToggle = document.getElementById("theme-toggle");
  const themeColor = document.getElementById("theme-color");
  const searchTrigger = document.getElementById("search-trigger");
  const searchDialog = document.getElementById("search-dialog");
  const searchInput = document.getElementById("guide-search");
  const searchResults = document.getElementById("search-results");
  let activePageId = "welcome";
  let selectedSearchResult = -1;
  let progressFramePending = false;

  function normalizeText(value) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function currentHashPage() {
    const rawHash = decodeURIComponent(window.location.hash.slice(1));
    const id = (rawHash.startsWith("page=") ? rawHash.slice(5) : rawHash).split("&")[0];
    const pageAliases = {
      "single-play": "play-mode",
      "edit-show": "interface",
      "cue-timing": "cuelist",
      "control-cues": "cuelist",
      "group-cues": "group-cues",
      "pad-behavior": "pads",
      "playlist-playback": "playlist",
      "transport": "transport",
      "editor-dsp": "audio-properties",
      "buses-routing": "audio-properties",
      "timecode": "timecode",
      "shortcuts-midi": "shortcuts",
      "stream-deck": "stream-deck",
      "remote-views": "monitor",
      "now-playing": "monitor",
      "quick-reference": "shortcuts"
    };
    const pageAlias = pageAliases[id] || id;
    return pageById.has(pageAlias) ? pageAlias : "welcome";
  }

  function routedHash(pageId) {
    return `#page=${encodeURIComponent(pageId)}`;
  }

  function updatePagination(pageId) {
    const index = pageOrder.indexOf(pageId);
    const previousId = index > 0 ? pageOrder[index - 1] : null;
    const nextId = index >= 0 && index < pageOrder.length - 1 ? pageOrder[index + 1] : null;

    previousPage.hidden = !previousId;
    nextPage.hidden = !nextId;

    if (previousId) {
      previousPage.href = routedHash(previousId);
      previousPage.querySelector("strong").textContent = pageById.get(previousId).dataset.title;
    }
    if (nextId) {
      nextPage.href = routedHash(nextId);
      nextPage.querySelector("strong").textContent = pageById.get(nextId).dataset.title;
    }
  }

  function activatePage(pageId, options = {}) {
    const next = pageById.get(pageId) || pageById.get("welcome");
    activePageId = next.id;

    pages.forEach((page) => {
      const active = page === next;
      page.hidden = !active;
      page.classList.toggle("is-active", active);
    });

    navigationLinks.forEach((link) => {
      const active = link.dataset.page === activePageId;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.title = `${next.dataset.title} - Node:Cue - ${labels.guide}`;
    updatePagination(activePageId);
    closeMobileNavigation();

    if (!options.keepScroll) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: options.instant || reducedMotion ? "auto" : "smooth" });
    }
    updateReadingProgress();
  }

  function closeMobileNavigation() {
    sidebar.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", labels.openNav);
  }

  function toggleMobileNavigation() {
    const open = sidebar.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? labels.closeNav : labels.openNav);
  }

  function updateReadingProgress() {
    const activePage = pageById.get(activePageId);
    if (!activePage) return;
    const pageTop = activePage.getBoundingClientRect().top + window.scrollY;
    const scrollable = Math.max(1, activePage.offsetHeight - window.innerHeight + 150);
    const position = Math.min(scrollable, Math.max(0, window.scrollY - pageTop + 80));
    progressBar.style.width = `${(position / scrollable) * 100}%`;
  }

  function scheduleReadingProgress() {
    if (progressFramePending) return;
    progressFramePending = true;
    window.requestAnimationFrame(() => {
      progressFramePending = false;
      updateReadingProgress();
    });
  }

  function setTheme(theme, persist = true) {
    const resolved = theme === "light" ? "light" : "dark";
    root.dataset.theme = resolved;
    themeColor.content = resolved === "dark" ? "#151f27" : "#f3f6f6";
    themeToggle.setAttribute("aria-label", resolved === "dark" ? labels.light : labels.dark);
    if (persist) {
      try {
        localStorage.setItem("nodecue-guide-review-theme", resolved);
      } catch (_error) {
        // The guide remains usable when storage is unavailable.
      }
    }
  }

  function openSearch() {
    searchDialog.hidden = false;
    topbar.inert = true;
    guideShell.inert = true;
    document.body.style.overflow = "hidden";
    selectedSearchResult = -1;
    searchInput.value = "";
    searchResults.innerHTML = `<p>${labels.enter}</p>`;
    window.requestAnimationFrame(() => searchInput.focus());
  }

  function closeSearch() {
    if (searchDialog.hidden) return;
    searchDialog.hidden = true;
    topbar.inert = false;
    guideShell.inert = false;
    document.body.style.overflow = "";
    searchTrigger.focus();
  }

  function excerptFor(page, normalizedQuery) {
    const paragraphs = Array.from(page.querySelectorAll("p, li, dd"));
    const match = paragraphs.find((node) => normalizeText(node.textContent).includes(normalizedQuery));
    const text = (match || page.querySelector(".lead") || page).textContent.trim().replace(/\s+/g, " ");
    return text.length > 170 ? `${text.slice(0, 167).trim()}…` : text;
  }

  function readablePage(page) {
    const copy = page.cloneNode(true);
    copy.querySelectorAll(".review-tools").forEach(node => node.remove());
    return copy;
  }

  function renderSearch(query) {
    const normalizedQuery = normalizeText(query.trim());
    selectedSearchResult = -1;
    if (normalizedQuery.length < 2) {
      searchResults.innerHTML = `<p>${labels.minimum}</p>`;
      return;
    }

    const matches = pages
      .filter((page) => normalizeText(readablePage(page).textContent).includes(normalizedQuery))
      .map((page) => ({
        id: page.id,
        title: page.dataset.title,
        group: linkById.get(page.id)?.closest(".nav-group")?.querySelector("h2")?.textContent || "Guide",
        excerpt: excerptFor(readablePage(page), normalizedQuery),
        titleMatch: normalizeText(page.dataset.title).includes(normalizedQuery)
      }))
      .sort((left, right) => Number(right.titleMatch) - Number(left.titleMatch));

    if (!matches.length) {
      searchResults.innerHTML = `<p>${labels.empty}</p>`;
      return;
    }

    searchResults.replaceChildren(...matches.map((match) => {
      const result = document.createElement("a");
      result.className = "search-result";
      result.href = routedHash(match.id);
      result.setAttribute("role", "option");
      result.innerHTML = `<span>${match.group}</span><div><strong>${match.title}</strong><small>${match.excerpt}</small></div>`;
      result.addEventListener("click", closeSearch);
      return result;
    }));
  }

  function moveSearchSelection(direction) {
    const results = Array.from(searchResults.querySelectorAll(".search-result"));
    if (!results.length) return;
    selectedSearchResult = (selectedSearchResult + direction + results.length) % results.length;
    results.forEach((result, index) => result.classList.toggle("is-selected", index === selectedSearchResult));
    results[selectedSearchResult].scrollIntoView({ block: "nearest" });
  }

  function followSelectedSearchResult() {
    const results = Array.from(searchResults.querySelectorAll(".search-result"));
    if (!results.length) return;
    const selected = results[selectedSearchResult >= 0 ? selectedSearchResult : 0];
    selected.click();
  }

  const initialPageId = currentHashPage();
  navigationLinks.forEach((link) => {
    link.href = routedHash(link.dataset.page);
  });
  if (!window.location.hash.startsWith("#page=")) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${routedHash(initialPageId)}`);
  }

  window.addEventListener("hashchange", () => activatePage(currentHashPage()));
  window.addEventListener("load", () => {
    activatePage(currentHashPage(), { instant: true });
    window.scrollTo(0, 0);
  });
  window.addEventListener("scroll", scheduleReadingProgress, { passive: true });
  window.addEventListener("resize", scheduleReadingProgress);

  navToggle.addEventListener("click", toggleMobileNavigation);
  themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  searchTrigger.addEventListener("click", openSearch);
  searchInput.addEventListener("input", () => renderSearch(searchInput.value));

  document.querySelectorAll("[data-search-close]").forEach((control) => control.addEventListener("click", closeSearch));

  document.addEventListener("keydown", (event) => {
    const editing = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement;
    if (event.key === "/" && !editing && searchDialog.hidden) {
      event.preventDefault();
      openSearch();
      return;
    }
    if (event.key === "Escape") {
      if (!searchDialog.hidden) {
        event.preventDefault();
        closeSearch();
      } else if (sidebar.classList.contains("is-open")) {
        event.preventDefault();
        closeMobileNavigation();
      }
      return;
    }
    if (!searchDialog.hidden && event.key === "Tab") {
      const focusable = Array.from(searchDialog.querySelectorAll("button:not([disabled]), input:not([disabled]), a[href]"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }
    if (!searchDialog.hidden && event.key === "ArrowDown") {
      event.preventDefault();
      moveSearchSelection(1);
    } else if (!searchDialog.hidden && event.key === "ArrowUp") {
      event.preventDefault();
      moveSearchSelection(-1);
    } else if (!searchDialog.hidden && event.key === "Enter") {
      event.preventDefault();
      followSelectedSearchResult();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!sidebar.classList.contains("is-open")) return;
    if (sidebar.contains(event.target) || navToggle.contains(event.target)) return;
    closeMobileNavigation();
  });

  const previewTheme = new URLSearchParams(window.location.search).get("theme");
  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem("nodecue-guide-review-theme");
  } catch (_error) {
    storedTheme = null;
  }
  setTheme(previewTheme || storedTheme || "dark", false);
  activatePage(initialPageId, { instant: true });
})();
