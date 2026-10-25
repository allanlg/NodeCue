(() => {
  const guideGoDemos = Array.from(document.querySelectorAll("[data-guide-go-demo]"));
  const setGuideGoAltHeld = (held) => {
    guideGoDemos.forEach((demo) => {
      demo.classList.toggle("is-alt-held", held);
    });
  };

  guideGoDemos.forEach((demo) => {
    const status = demo.querySelector("[data-guide-go-status]");
    const toggle = demo.querySelector("[data-guide-go-toggle]");
    const toggleLabel = demo.querySelector("[data-guide-go-toggle-label]");
    const buttons = Array.from(demo.querySelectorAll("[data-guide-go-demo-button]"));
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (status) {
          status.hidden = false;
          const alternate = event.altKey || !!event.target.closest?.("[data-alt-go]");
          status.textContent = `${button.dataset.guideGoDemoButton} ${alternate ? "Alternate GO" : "GO"} activated.`;
        }
      });
    });
    toggle?.addEventListener("click", () => {
      const visible = toggle.getAttribute("aria-checked") !== "true";
      toggle.setAttribute("aria-checked", String(visible));
      if (toggleLabel) toggleLabel.textContent = visible ? "On" : "Off";
      demo.classList.toggle("is-alt-hidden", !visible);
      if (status) {
        status.hidden = false;
        status.textContent = `Show ALT GO on GO button ${visible ? "enabled" : "disabled"}.`;
      }
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Alt") setGuideGoAltHeld(true);
  });
  window.addEventListener("keyup", (event) => {
    if (event.key === "Alt") setGuideGoAltHeld(false);
  });
  window.addEventListener("blur", () => setGuideGoAltHeld(false));

  const guidePlayModeCards = Array.from(document.querySelectorAll("[data-guide-play-mode-card]"));
  const guidePlaybackFlowPage = document.getElementById("playback-flow");
  const guidePlaybackFlowTemplate = document.getElementById("guide-playback-flow-mockup-template");
  if (guidePlaybackFlowPage && guidePlaybackFlowTemplate) {
    const flowMatrix = guidePlaybackFlowPage.querySelector(".flow-demo");
    if (flowMatrix && !guidePlaybackFlowPage.querySelector("[data-guide-flow-mockup]")) {
      const flowMockup = guidePlaybackFlowTemplate.content.firstElementChild.cloneNode(true);
      const flowSection = flowMatrix.closest("section");
      const flowHeading = flowSection?.querySelector("h2");
      (flowHeading || flowMatrix).before(flowMockup);
    }
    const flowExampleDescription = flowMatrix?.nextElementSibling;
    if (flowExampleDescription?.textContent.trim().startsWith("Dans cet exemple")) {
      flowExampleDescription.remove();
    }
    flowMatrix?.remove();
  }
  const guidePlaybackFlowMockup = guidePlaybackFlowPage?.querySelector("[data-guide-flow-mockup]");
  if (guidePlaybackFlowMockup) {
    const flowPanel = guidePlaybackFlowMockup.querySelector(".guide-flow-mockup-panel");
    const flowToggle = guidePlaybackFlowMockup.querySelector(".guide-flow-mockup-toggle");
    const flowToggleChrome = guidePlaybackFlowMockup.querySelector(".guide-flow-mockup-toggle-chrome");
    const flowPanelFrame = guidePlaybackFlowMockup.querySelector(".guide-flow-mockup-panel-chrome");
    const flowPanelOutline = guidePlaybackFlowMockup.querySelector(".guide-flow-mockup-panel-outline-overlay");
    const flowRules = guidePlaybackFlowMockup.querySelector(".guide-flow-mockup-rules");
    const flowTargetButtons = Array.from(guidePlaybackFlowMockup.querySelectorAll("[data-guide-flow-target]"));
    const flowRows = Array.from(guidePlaybackFlowMockup.querySelectorAll(".guide-flow-mockup-rule"));
    const flowEnabledSwitch = guidePlaybackFlowMockup.querySelector('[data-guide-flow-switch="enabled"]');

    const syncGuidePlaybackFlowFrame = () => {
      if (!flowPanel || !flowToggle || !flowToggleChrome || !flowPanelFrame || !flowPanelOutline) return;
      const panelRect = flowPanel.getBoundingClientRect();
      const toggleRect = flowToggleChrome.getBoundingClientRect();
      const mockupRect = guidePlaybackFlowMockup.getBoundingClientRect();
      if (!(panelRect.width > 0 && panelRect.height > 0)) return;
      const left = toggleRect.left - panelRect.left;
      const right = toggleRect.right - panelRect.left;
      const scaleX = (right - left) / 105;
      const scaleY = toggleRect.height / 30;
      const radiusX = 7 * scaleX;
      const controlX = 3.866 * scaleX;
      const buttonTop = toggleRect.top - panelRect.top + 6;
      const buttonJoinY = buttonTop + 22 * scaleY;
      const connectorControlY = buttonJoinY + (6 - buttonJoinY) * 3.866 / 7;
      const bottom = panelRect.height + 6 - 0.5;
      const outline = `M${left + radiusX} ${buttonJoinY}`
        + ` V${buttonTop + 7 * scaleY} Q${left + radiusX} ${buttonTop} ${left + 14 * scaleX} ${buttonTop}`
        + ` H${left + 91 * scaleX} Q${left + 98 * scaleX} ${buttonTop} ${left + 98 * scaleX} ${buttonTop + 7 * scaleY}`
        + ` V${buttonJoinY} C${right - radiusX} ${connectorControlY} ${right - controlX} 6 ${right} 6`
        + ` H${panelRect.width - 3.5} Q${panelRect.width - 0.5} 6 ${panelRect.width - 0.5} 9`
        + ` V${bottom - 3} Q${panelRect.width - 0.5} ${bottom} ${panelRect.width - 3.5} ${bottom}`
        + ` H3.5 Q0.5 ${bottom} 0.5 ${bottom - 3}`
        + ` V9 Q0.5 6 3.5 6 H${left}`
        + ` C${left + controlX} 6 ${left + radiusX} ${connectorControlY} ${left + radiusX} ${buttonJoinY} Z`;
      flowPanelFrame.setAttribute("viewBox", `0 0 ${panelRect.width} ${panelRect.height + 6}`);
      flowPanelFrame.querySelector(".guide-flow-mockup-panel-surface")?.setAttribute("d", outline);
      flowPanelOutline.style.left = `${panelRect.left - mockupRect.left}px`;
      flowPanelOutline.style.top = `${panelRect.top - mockupRect.top - 6}px`;
      flowPanelOutline.style.width = `${panelRect.width}px`;
      flowPanelOutline.style.height = `${panelRect.height + 6}px`;
      flowPanelOutline.setAttribute("viewBox", `0 0 ${panelRect.width} ${panelRect.height + 6}`);
      flowPanelOutline.querySelector("path")?.setAttribute("d", outline);
    };

    const syncGuidePlaybackFlowMockup = () => {
      const enabled = flowEnabledSwitch?.getAttribute("aria-pressed") === "true";
      flowRules?.classList.toggle("is-disabled", !enabled);
      flowTargetButtons.forEach((target) => {
        const active = target.getAttribute("aria-pressed") === "true";
        target.disabled = !enabled;
        target.classList.toggle("is-active", active);
        ["cuelist", "pads", "playlist"].forEach((targetName) => {
          target.classList.toggle(`is-${targetName}`, active && target.dataset.guideFlowTarget === targetName);
        });
      });
      flowRows.forEach((row) => {
        const source = row.dataset.source;
        const active = row.querySelector('[data-guide-flow-target][aria-pressed="true"]') !== null;
        const alternateMode = row.querySelector(`[data-guide-flow-field="${source}:alternate-mode"]`);
        const mainMode = row.querySelector(`[data-guide-flow-field="${source}:main-mode"]`);
        row.querySelectorAll("[data-guide-flow-field]").forEach((field) => {
          const isAlternateMode = field.dataset.guideFlowField.endsWith("alternate-mode");
          const isAlternateDuration = field.dataset.guideFlowField.endsWith("alternate-duration");
          const noAlternateTransition = ["none", "immediate"].includes(alternateMode?.value);
          const isMainDuration = field.dataset.guideFlowField.endsWith("main-duration");
          field.disabled = !enabled || !active || (isAlternateDuration && noAlternateTransition) || (isMainDuration && mainMode?.value === "immediate");
          if (isAlternateMode && !enabled) field.disabled = true;
        });
      });
      guidePlaybackFlowMockup.querySelectorAll('[data-guide-flow-switch]:not([data-guide-flow-switch="enabled"])').forEach((control) => {
        control.disabled = !enabled;
      });
      const handoffMode = guidePlaybackFlowMockup.querySelector('[data-guide-handoff-mode]');
      const handoffDuration = guidePlaybackFlowMockup.querySelector('[data-guide-handoff-duration]');
      handoffMode.disabled = !enabled;
      handoffDuration.disabled = !enabled || handoffMode.value === 'immediate';
    };
    guidePlaybackFlowMockup.querySelector('[data-guide-handoff-mode]').addEventListener('change', syncGuidePlaybackFlowMockup);

    flowTargetButtons.forEach((target) => {
      target.addEventListener("click", () => {
        const active = target.getAttribute("aria-pressed") !== "true";
        target.setAttribute("aria-pressed", String(active));
        target.classList.remove("is-toggling-on", "is-toggling-off");
        target.classList.add(active ? "is-toggling-on" : "is-toggling-off");
        syncGuidePlaybackFlowMockup();
        window.setTimeout(() => target.classList.remove("is-toggling-on", "is-toggling-off"), 220);
      });
    });
    guidePlaybackFlowMockup.querySelectorAll("[data-guide-flow-field]").forEach((field) => {
      field.addEventListener("change", syncGuidePlaybackFlowMockup);
    });
    guidePlaybackFlowMockup.querySelectorAll("[data-guide-flow-switch]").forEach((control) => {
      control.addEventListener("click", () => {
        if (control.disabled) return;
        const active = control.getAttribute("aria-pressed") !== "true";
        control.setAttribute("aria-pressed", String(active));
        control.classList.toggle("is-on", active);
        syncGuidePlaybackFlowMockup();
      });
    });
    guidePlaybackFlowMockup.querySelector("[data-guide-flow-save]")?.addEventListener("click", (event) => {
      const save = event.currentTarget;
      save.textContent = "Saved as default";
      save.classList.add("is-saved");
      window.setTimeout(() => {
        save.textContent = "Use as new-project default";
        save.classList.remove("is-saved");
      }, 1800);
    });
    syncGuidePlaybackFlowMockup();
    syncGuidePlaybackFlowFrame();
    if (typeof ResizeObserver === "function") {
      new ResizeObserver(syncGuidePlaybackFlowFrame).observe(guidePlaybackFlowMockup);
    }
    window.addEventListener("resize", syncGuidePlaybackFlowFrame);
  }

  const guideSyncPage = document.getElementById("sync");
  const guideSyncStatusTemplate = document.getElementById("guide-sync-status-template");
  if (guideSyncPage && guideSyncStatusTemplate && !guideSyncPage.querySelector("[data-guide-sync-status-mockup]")) {
    const syncSection = Array.from(guideSyncPage.querySelectorAll("section")).find((section) => section.querySelector("h2")?.textContent.trim() === (document.documentElement.lang === "en" ? "The roles" : "Les rôles"));
    const syncMockup = guideSyncStatusTemplate.content.firstElementChild.cloneNode(true);
    const rolesList = syncSection?.querySelector(".feature-list");
    (rolesList || syncSection || guideSyncPage).before(syncMockup);
  }
  const guideSyncStatusMockup = guideSyncPage?.querySelector("[data-guide-sync-status-mockup]");
  if (guideSyncStatusMockup) {
    const syncButton = guideSyncStatusMockup.querySelector("[data-guide-sync-status-button]");
    const syncStates = [
      { label: "SYNC", role: "disabled", status: "disabled", title: "Sync disabled" },
      { label: "PRI", role: "primary", status: "syncing", title: "Sync: primary / syncing" },
      { label: "PRI", role: "primary", status: "degraded", title: "Sync: primary / degraded" },
      { label: "PRI", role: "primary", status: "needs_resync", title: "Sync: primary / needs resync" },
      { label: "PRI", role: "primary", status: "primary_lost", title: "Sync: primary / primary lost" },
      { label: "BKP", role: "backup", status: "following", title: "Sync: backup / following" },
      { label: "BKP", role: "backup", status: "media_missing", title: "Sync: backup / media missing" },
      { label: "BKP", role: "backup", status: "project_available", title: "Sync: backup / project available" },
      { label: "BKP", role: "backup", status: "transferring", title: "Sync: backup / transferring" },
      { label: "BKP", role: "backup", status: "synced", title: "Sync: backup / synced" },
      { label: "BKP", role: "backup", status: "diverged", title: "Sync: backup / diverged" },
      { label: "SYNC", role: "disabled", status: "standalone", title: "Sync: standalone" },
    ];
    let syncStateIndex = 0;
    let syncStateTimer;
    const applySyncState = (nextIndex) => {
      syncStateIndex = (nextIndex + syncStates.length) % syncStates.length;
      const state = syncStates[syncStateIndex];
      syncButton.textContent = state.label;
      syncButton.className = `guide-sync-status-button sync-status-${state.status}`;
      syncButton.title = state.title;
      syncButton.setAttribute("aria-label", state.title);
      syncButton.setAttribute("aria-pressed", String(["synced", "following", "syncing"].includes(state.status)));
      syncButton.classList.add("is-changing");
      window.clearTimeout(syncStateTimer);
      syncStateTimer = window.setTimeout(() => syncButton.classList.remove("is-changing"), 180);
    };
    syncButton?.addEventListener("click", () => applySyncState(syncStateIndex + 1));
    window.setInterval(() => {
      if (!guideSyncPage.hidden) applySyncState(syncStateIndex + 1);
    }, 1200);
    applySyncState(0);
  }

  const guideSyncConfigurationPage = document.getElementById("sync-configuration");
  const guideSyncPreferencesTemplate = document.getElementById("guide-sync-preferences-template");
  const initGuideSyncPreferencesMockup = (mockup) => {
    const roleOptions = Array.from(mockup.querySelectorAll("[data-sync-demo-role-option]"));
    const roleFields = Array.from(mockup.querySelectorAll("[data-sync-demo-fields]"));
    const stateLabel = mockup.querySelector("[data-sync-demo-state]");
    const roleLabel = mockup.querySelector("[data-sync-demo-role]");
    const latencyLabel = mockup.querySelector("[data-sync-demo-latency]");
    const connectActions = mockup.querySelector("[data-sync-demo-connect-actions]");
    const action = mockup.querySelector("[data-sync-demo-action]");
    const stopAction = mockup.querySelector("[data-sync-demo-stop]");
    let role = mockup.dataset.role === "backup" ? "backup" : "primary";
    let connected = true;
    const syncRole = () => {
      const roleName = role === "backup" ? "Backup" : "Primary";
      roleOptions.forEach((option) => {
        const active = option.dataset.syncDemoRoleOption === role;
        option.classList.toggle("is-active", active);
        option.setAttribute("aria-pressed", String(active));
      });
      roleFields.forEach((fields) => {
        fields.hidden = fields.dataset.syncDemoFields !== role;
      });
      roleLabel.textContent = connected ? roleName : "Standalone";
      stateLabel.textContent = connected ? "Synced" : "Standalone";
      connectActions.hidden = connected;
      if (action) action.textContent = role === "backup" ? "Connect to Primary" : "Start Primary";
      if (stopAction) stopAction.hidden = !connected;
      mockup.querySelector('.guide-sync-meta').hidden = !connected;
      mockup.querySelector('.guide-sync-readiness').hidden = !connected;
      latencyLabel.disabled = !connected;
      roleOptions.forEach(option => { option.disabled = connected; });
      mockup.querySelectorAll('.guide-sync-connection-card input, .guide-sync-connection-card select').forEach(control => {
        control.disabled = connected && !control.hasAttribute('data-sync-demo-rate');
      });
      mockup.classList.toggle("is-connected", connected);
    };
    roleOptions.forEach((option) => {
      option.addEventListener('click', () => { role = option.dataset.syncDemoRoleOption; syncRole(); });
    });
    const maxRate = mockup.querySelector('[data-sync-demo-rate="max"]');
    const playbackRate = mockup.querySelector('[data-sync-demo-rate="playback"]');
    const syncRates = () => {
      maxRate.value = String(Math.max(1, Math.min(10000, parseInt(maxRate.value, 10) || 1)));
      playbackRate.max = maxRate.value;
      playbackRate.value = String(Math.max(1, Math.min(Number(maxRate.value), parseInt(playbackRate.value, 10) || 1)));
    };
    [maxRate, playbackRate].forEach(input => input.addEventListener('change', syncRates));
    action?.addEventListener("click", () => {
      connected = true;
      syncRole();
    });
    stopAction?.addEventListener("click", () => {
      connected = false;
      syncRole();
    });
    latencyLabel?.addEventListener("click", () => {
      const waiting = latencyLabel.textContent.includes("Waiting");
      latencyLabel.textContent = waiting ? "Latency - 18 ms" : "Latency - Waiting";
    });
    syncRole();
  };
  if (guideSyncConfigurationPage && guideSyncPreferencesTemplate && !guideSyncConfigurationPage.querySelector("[data-guide-sync-preferences-mockup]")) {
    ["primary", "backup"].forEach((role) => {
      const headingText = document.documentElement.lang === "en" ? (role === "primary" ? "Configure Primary" : "Configure Backup") : (role === "primary" ? "Configurer le Primary" : "Configurer le Backup");
      const heading = Array.from(guideSyncConfigurationPage.querySelectorAll("h2")).find((candidate) => candidate.textContent.trim() === headingText);
      if (!heading) return;
      const mockup = guideSyncPreferencesTemplate.content.firstElementChild.cloneNode(true);
      mockup.dataset.role = role;
      const introduction = heading.nextElementSibling;
      (introduction || heading).after(mockup);
      initGuideSyncPreferencesMockup(mockup);
    });
  }

  const positionGuidePlayModeMenu = (card) => {
    const menu = card.querySelector("[data-guide-play-mode-menu]");
    if (!menu) return;

    // On narrow layouts the responsive rule centers the menu. Desktop layouts
    // use the production right alignment, with a left flip only when the
    // sidebar would cover the menu.
    if (window.innerWidth <= 520) {
      menu.classList.remove("is-menu-flipped");
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const menuWidth = menu.getBoundingClientRect().width;
    const sidebar = document.getElementById("guide-sidebar");
    const sidebarRight = sidebar?.getBoundingClientRect().right ?? 0;
    const safeGap = 8;
    const rightAlignedLeft = cardRect.right - menuWidth;
    const wouldOverlapSidebar = rightAlignedLeft < sidebarRight + safeGap;
    const wouldOverflowViewport = cardRect.right > window.innerWidth - safeGap;
    const leftAlignedRight = cardRect.left + menuWidth;
    const canFlipLeft = leftAlignedRight <= window.innerWidth - safeGap;

    menu.classList.toggle(
      "is-menu-flipped",
      (wouldOverlapSidebar || wouldOverflowViewport) && canFlipLeft,
    );
  };
  const closeGuidePlayModeMenu = (card) => {
    const menu = card.querySelector("[data-guide-play-mode-menu]");
    const menuToggle = card.querySelector(".guide-play-mode-menu-toggle");
    if (!menu || !menuToggle) return;
    menu.classList.remove("is-open");
    menu.classList.remove("is-menu-flipped");
    menu.setAttribute("aria-hidden", "true");
    menu.inert = true;
    menuToggle.setAttribute("aria-expanded", "false");
    card.classList.remove("is-menu-open");
  };
  const openGuidePlayModeMenu = (card) => {
    const row = card.querySelector(".guide-play-mode-row");
    const menu = card.querySelector(".guide-play-mode-menu");
    const menuToggle = card.querySelector(".guide-play-mode-menu-toggle");
    if (!row || !menu || !menuToggle || row.classList.contains("transport-menu-unavailable")) return;
    guidePlayModeCards.forEach((otherCard) => {
      if (otherCard !== card) closeGuidePlayModeMenu(otherCard);
    });
    menuToggle.setAttribute("aria-haspopup", "true");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menu.inert = false;
    menuToggle.setAttribute("aria-expanded", "true");
    card.classList.add("is-menu-open");
    positionGuidePlayModeMenu(card);
  };
  const setGuidePlayModeMenuAvailability = (card, unavailable) => {
    const row = card.querySelector(".guide-play-mode-row");
    const menuToggle = card.querySelector(".guide-play-mode-menu-toggle");
    if (!row || !menuToggle) return;
    row.classList.toggle("transport-menu-unavailable", unavailable);
    menuToggle.disabled = unavailable;
    menuToggle.tabIndex = unavailable ? -1 : 0;
    menuToggle.setAttribute("aria-haspopup", "true");
    menuToggle.setAttribute("aria-hidden", String(unavailable));
    if (unavailable) closeGuidePlayModeMenu(card);
  };

  guidePlayModeCards.forEach((card) => {
    const modeToggle = card.querySelector(".guide-play-mode-toggle");
    const menuToggle = card.querySelector(".guide-play-mode-menu-toggle");
    const altMode = card.querySelector('[data-guide-play-mode-field="alt-mode"]');
    const altDuration = card.querySelector('[data-guide-play-mode-field="alt-duration"]');
    const mainMode = card.querySelector('[data-guide-play-mode-field="main-mode"]');
    const mainDuration = card.querySelector('[data-guide-play-mode-field="main-duration"]');
    const syncDurations = () => {
      mainDuration.disabled = mainMode.value === 'immediate';
      altDuration.disabled = ['none', 'immediate'].includes(altMode.value);
    };
    mainMode.addEventListener('change', syncDurations);
    modeToggle?.addEventListener("click", () => {
      const single = modeToggle.dataset.mode !== "single";
      modeToggle.dataset.mode = single ? "single" : "multi";
      modeToggle.textContent = single ? "SINGLE" : "MULTI";
      modeToggle.setAttribute("aria-pressed", String(single));
      modeToggle.classList.toggle("active", single);
      setGuidePlayModeMenuAvailability(card, !single);
    });
    menuToggle?.addEventListener("click", () => {
      if (menuToggle.getAttribute("aria-expanded") === "true") closeGuidePlayModeMenu(card);
      else openGuidePlayModeMenu(card);
    });
    altMode?.addEventListener("change", () => {
      syncDurations();
    });
    setGuidePlayModeMenuAvailability(card, modeToggle?.dataset.mode !== "single");
    closeGuidePlayModeMenu(card);
    syncDurations();
  });

  window.addEventListener("resize", () => {
    guidePlayModeCards.forEach((card) => {
      if (card.classList.contains("is-menu-open")) positionGuidePlayModeMenu(card);
    });
  });

  document.addEventListener("pointerdown", (event) => {
    guidePlayModeCards.forEach((card) => {
      if (!card.contains(event.target)) closeGuidePlayModeMenu(card);
    });
  });
  document.addEventListener("focusin", (event) => {
    guidePlayModeCards.forEach((card) => {
      if (!card.contains(event.target)) closeGuidePlayModeMenu(card);
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") guidePlayModeCards.forEach(closeGuidePlayModeMenu);
  });


})();
