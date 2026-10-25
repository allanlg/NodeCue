// Standalone guide illustration. Controls affect only this panel's local state.
(() => {
  const root = document.documentElement;
  root.dataset.theme = new URLSearchParams(location.search).get('theme') === 'light' ? 'light' : 'dark';
  const choose = (attribute) => document.querySelectorAll(`[data-${attribute}]`).forEach(button => {
    button.addEventListener('click', () => {
      const pressed = button.getAttribute('aria-pressed') === 'true';
      document.querySelectorAll(`[data-${attribute}]`).forEach(other => other.setAttribute('aria-pressed', String(other === button && (attribute === 'tap' || !pressed))));
    });
  });
  choose('tap'); choose('source');
  const level = document.getElementById('level');
  const updateLevel = () => {
    document.querySelector('output').textContent = `${Number(level.value).toFixed(1)} dB`;
    level.setAttribute('aria-valuetext', `${level.value} dB`);
    level.setAttribute('aria-valuenow', level.value);
    level.style.setProperty('--knob-angle', `${-135 + (Number(level.value) + 60) * 4.5}deg`);
  };
  const setLevel = value => {
    level.value = String(Math.round(Math.max(-60, Math.min(0, value)) * 10) / 10);
    updateLevel();
  };
  level.addEventListener('input', updateLevel);
  level.addEventListener('wheel', event => {
    if (!event.deltaY) return;
    event.preventDefault(); event.stopPropagation();
    setLevel(Number(level.value) + (event.deltaY < 0 ? 1 : -1) * (event.shiftKey ? .1 : .5));
  }, {passive:false});
  level.addEventListener('keydown', event => {
    const value = Number(level.value), step = event.shiftKey ? .1 : .5;
    const values = {ArrowUp:value + step, ArrowRight:value + step, ArrowDown:value - step,
      ArrowLeft:value - step, PageUp:value + 5, PageDown:value - 5, Home:-60, End:0};
    if (!(event.key in values)) return;
    event.preventDefault(); event.stopPropagation(); setLevel(values[event.key]);
  });
  let drag = null;
  level.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    event.preventDefault(); level.focus();
    drag = { y:event.clientY, value:Number(level.value), delta:0, moved:false }; level.setPointerCapture(event.pointerId);
  });
  level.addEventListener('pointermove', event => {
    if (!drag) return;
    const delta = event.clientY - drag.y;
    drag.y = event.clientY;
    if (!drag.moved && Math.abs(delta) > 40) return;
    drag.moved = true;
    drag.delta += Math.max(-24, Math.min(24, delta));
    setLevel(drag.value - drag.delta * 60 / 180);
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => level.addEventListener(type, () => { drag = null; }));
  level.addEventListener('dblclick', () => setLevel(-18));
  document.getElementById('preview').addEventListener('change', event => {
    const send = document.getElementById('send');
    send.disabled = event.target.value !== 'scenario';
    if (send.disabled) send.checked = false;
  });
  window.addEventListener('message', event => {
    if (event.origin === location.origin && event.source === parent && event.data?.type === 'theme') root.dataset.theme = event.data.theme === 'light' ? 'light' : 'dark';
  });
  updateLevel();
})();
