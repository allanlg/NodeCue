# Node:Cue

Official public distribution repository for Node:Cue.

This repository is used to publish official Node:Cue installers, release notes, update metadata, and public documentation. It does not contain the application source code and Node:Cue is not distributed as an open-source project.

## Download

Installers are published from the [latest GitHub release](https://github.com/allanlg/NodeCue/releases/latest).

For Windows, download the latest `NodeCue_<version>_x64-setup.exe` installer from the release assets, then run it normally.

Installer binaries are distributed as GitHub Release assets. They are not committed directly to this repository.

## Stream Deck Plugin

When available, the official Stream Deck plugin is bundled with the Node:Cue installer. Use only the plugin distributed through official Node:Cue releases.

## Updates

Node:Cue can check for updates manually from the app menu: `Info` -> `Check for updates`.

Node:Cue does not install updates automatically. When an update is available, the app points to the official GitHub Release assets published here and requires explicit confirmation before download, install, and restart.

Updater metadata may be published as release assets, including `latest.json` and matching `.sig` signature files. Download builds only from official releases published here.

Release notes are tracked in [CHANGELOG.md](CHANGELOG.md) and mirrored in GitHub Release descriptions.

OSC input commands are documented in [OSC_COMMANDS.md](OSC_COMMANDS.md).

## Repository Contents

This repository may contain public distribution files only:

- release notes and update metadata;
- `CHANGELOG.md`, the public release notes;
- `OSC_COMMANDS.md`, the public OSC command reference;
- `NodeCue logo.png`, the public Node:Cue app logo asset;
- updater manifest examples or public manifests;
- `LICENSE.txt`, the Node:Cue end-user license;
- `THIRD_PARTY_LICENSES.txt`, the third-party dependency notice file;
- `licenses/libsoxr/`, the bundled libsoxr notice files;
- release process notes that do not expose source code, secrets, or build internals.

## License

Node:Cue is free to use and may be shared for free, but it remains proprietary software. See [LICENSE.txt](LICENSE.txt) for the Node:Cue license.

Third-party notices are listed in [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt).

Node:Cue includes `soxr.dll`, a dynamically linked libsoxr component distributed under LGPL-2.1-or-later. Its notice files are included under [licenses/libsoxr](licenses/libsoxr).

The automatically generated GitHub `Source code` archives contain only this public distribution repository, not the Node:Cue application source code.

## Security

Do not install Node:Cue from unofficial mirrors or repackaged installers. If a release asset looks suspicious or unexpected, do not run it.

## Support

Node:Cue is currently distributed for free. If it helps your work and you want to support ongoing development, optional donations are welcome:

[Support development via PayPal](https://paypal.me/allanleguyader)
