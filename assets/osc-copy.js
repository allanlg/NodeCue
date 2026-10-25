(() => {
  'use strict';
  const icon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4"/></svg>';
  const check = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
  const status = document.createElement('span');
  status.className = 'osc-copy-status';
  status.setAttribute('role', 'status');
  document.body.append(status);
  document.querySelectorAll('.doc-content code').forEach(code => {
    const text = code.textContent;
    const matches = [...text.matchAll(/\/nodecue\/[^\s]+/g)];
    if (!matches.length) return;
    const fragment = document.createDocumentFragment();
    let offset = 0;
    matches.forEach(match => {
      fragment.append(document.createTextNode(text.slice(offset, match.index)));
      const command = match[0];
      const wrapper = document.createElement('span');
      wrapper.className = 'osc-copy-command';
      const address = document.createElement('span');
      address.textContent = command;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'osc-copy-button';
      button.setAttribute('aria-label', `Copy ${command}`);
      button.title = 'Copy command';
      button.innerHTML = icon;
      let reset;
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(command);
          clearTimeout(reset);
          button.innerHTML = check;
          button.title = 'Copied';
          status.textContent = `Copied ${command}`;
          reset = setTimeout(() => { button.innerHTML = icon; button.title = 'Copy command'; }, 1600);
        } catch {
          status.textContent = 'Copy unavailable. Select the command and copy it manually.';
          button.title = 'Copy unavailable';
        }
      });
      wrapper.append(address, button);
      fragment.append(wrapper);
      offset = match.index + command.length;
    });
    fragment.append(document.createTextNode(text.slice(offset)));
    code.replaceChildren(fragment);
  });
})();
