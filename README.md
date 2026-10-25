# Node:Cue

Official public distribution repository for Node:Cue.

This repository is used to publish official Node:Cue installers, release notes, update metadata, and public documentation. It does not contain the application source code and Node:Cue is not distributed as an open-source project.

Website: [nodecue.app](https://nodecue.app/)

Support email: [support@nodecue.app](mailto:support@nodecue.app)

## Download

Installers are published from the [latest GitHub release](https://github.com/allanlg/NodeCue/releases/latest).

For Windows, download the latest `NodeCue_<version>_x64-setup.exe` installer from the release assets, then run it normally.

Installer binaries are distributed as GitHub Release assets. They are not committed directly to this repository.

## Node:Cue 1.1.7

Node:Cue 1.1.7 adds OSC commands and updates the [OSC Command Reference](OSC_COMMANDS.md). French and English user guides are now available on the [website](https://nodecue.app/#guides). See [the changelog](CHANGELOG.md).

## Node:Cue 1.1.6

Node:Cue 1.1.6 makes the playback interface lighter and more responsive, including Sidebar resizing and short transitions. Waveforms, playback information and the extended two-column layout remain available.

The new floating Global Pads Hotkeys widget lets you suspend and restore Pad hotkeys while working in another application. The update also adds right-click Pad selection and clearer Playing indicators. See [the changelog](CHANGELOG.md).

## Node:Cue 1.1.5

Node:Cue 1.1.5 adds an optional two-column Sidebar, so Pads and bus meters can remain visible together. Place Now Playing and Project Browser across both columns or in either column, and resize the layout to suit your screen.

The update also adds optional Global Pad hotkeys, waveform-follow controls and marker snapping to the playhead. Playback-position feedback, paused transitions and compact Sidebar controls are refined. See [the changelog](CHANGELOG.md).

## Node:Cue 1.1.4

Node:Cue 1.1.4 restores configured audio outputs when they become available again, with clear device and bus warnings. Recovery keeps the configured route and does not automatically switch to another Windows default output.

The update also adds local Pad and Pad Text color defaults, audio bitrate in waveform file information, and refinements to waveform feedback, compressor meters and Properties controls. See [the changelog](CHANGELOG.md).

## Node:Cue 1.1.3

Node:Cue 1.1.3 adds **Help > Report a bug**, with optional contact email and session logs. Reports include local and project settings and retry automatically while the application is open if they cannot be sent immediately. If you provide a contact email, you receive a confirmation copy and support can contact you.

The update also corrects stale waveform file information, including Mono/Stereo labels, and improves metadata placement at increased display scaling and dropdown readability throughout the application. See [the changelog](CHANGELOG.md).

## Node:Cue 1.1.2

Node:Cue 1.1.2 fixes accelerated playback of affected mono M4A/MP4 files and keeps the Playlist waveform focused on the incoming track after an overlap. An optional setting in **Local Preferences > General** switches the active view when a GO command is triggered from Stream Deck; it is disabled by default.

Cuelist and Pads now always have independent Play Modes, with cross-view transitions managed by Playback Flow. Review those FLOW rules when opening a project that previously used Linked Single Play. Support logs also include more useful session configuration while limiting repetitive output and disk usage. See [the changelog](CHANGELOG.md).

## Node:Cue 1.1.1

Node:Cue 1.1.1 adds a local Monitor output for private preview, PFL/AFL bus listening and Show simulation alongside public playback. Configure Monitor in **Local Preferences > Audio**. Use **Single item** for one audition or **Show simulation** for groups, waits, repeats and Playback Flow. MIDI/OSC messages are simulated unless sending is explicitly armed for that simulation session.

The update also adds Timecode trigger names and colors, remaining-play indicators, and independent manual Playlist trim edges. A manually edited edge is marked with a blue **M** and remains protected from Auto Trim until **Switch to Auto Trim** is selected. See [the changelog](CHANGELOG.md) for details and the note about trim ownership in older projects.

## Stream Deck Plugin

The official Stream Deck plugin is available on [Elgato Marketplace](https://marketplace.elgato.com/product/nodecue-80402450-4deb-4399-9f52-6a81f0e7c088). In Node:Cue, **Install Stream Deck plugin** opens that page. The plugin is no longer bundled with the application installer.

Plugin 2.1 adds Monitor/PFL, Capture Trigger and Return Playhead to Start controls for Node:Cue 1.1.1 or later. The application and plugin have separate version numbers and update channels.

## Updates

Node:Cue presents available updates at startup. You can also check manually from the app menu: `Info` -> `Check for updates`.

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

The optional official supporter license supports development and removes in-app supporter reminders. It does not unlock or restrict playback, projects, show operation, or audio features.

Third-party notices are listed in [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt).

Node:Cue includes `soxr.dll`, a dynamically linked libsoxr component distributed under LGPL-2.1-or-later. Its notice files are included under [licenses/libsoxr](licenses/libsoxr).

The automatically generated GitHub `Source code` archives contain only this public distribution repository, not the Node:Cue application source code.

## Security

Do not install Node:Cue from unofficial mirrors or repackaged installers. If a release asset looks suspicious or unexpected, do not run it.

## Supporter License

Node:Cue is free to use. If it helps your work, you can support ongoing development with an optional supporter license.

[Get the optional supporter license](https://buy.polar.sh/polar_cl_3qQV0sqOwt6LvKFfmtN0CWsvdRYKmk0GKHq1a01hk98)

For support requests, contact [support@nodecue.app](mailto:support@nodecue.app).
