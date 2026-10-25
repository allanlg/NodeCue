(() => {
  const marker = document.querySelector('[data-guide-monitor-mockup]');
  if (!marker) return;
  const base = new URL('.', document.currentScript.src);
  const frame = document.createElement('iframe');
  frame.title = document.documentElement.lang === 'en' ? 'Node:Cue Monitor panel' : 'Panneau Monitor de Node:Cue';
  frame.className = 'guide-monitor-demo';
  const url = new URL('monitor-demo.html', base);
  url.searchParams.set('theme', document.documentElement.dataset.theme || 'dark');
  frame.src = url.href;
  const wrapper = document.createElement('div');
  wrapper.className = 'guide-monitor-wrapper';
  wrapper.append(frame);
  marker.replaceWith(wrapper);
  const fit = () => {
    if (!wrapper.clientWidth) return;
    const scale = Math.min(1, wrapper.clientWidth / 484);
    frame.style.transform = `scale(${scale})`;
    wrapper.style.height = `${287 * scale}px`;
  };
  new ResizeObserver(fit).observe(wrapper);
  fit();
  new MutationObserver(() => frame.contentWindow?.postMessage({type:'theme', theme:document.documentElement.dataset.theme}, location.origin))
    .observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
})();
