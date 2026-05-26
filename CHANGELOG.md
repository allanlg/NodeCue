# Changelog

## Node:Cue 0.18.30 - Cuelist Overlap and Workflow Fixes

### New Features

- Added Cuelist auto-follow overlap, allowing the next cue to start before the current cue reaches its trimmed end. This makes it possible to build asymmetric crossfades using the existing per-cue fade-in and fade-out settings.

### Fixes

- Fixed a Cuelist navigation issue where using Previous cue after an Enter-triggered GO could move the armed/selected cue back by two positions instead of one in some conditions.
- Fixed Playlist multi-selection editing so selected playlist tracks show playlist-relevant controls instead of Cuelist cue options.
- Fixed multi-item drag behavior in the Cuelist and Playlist so selected items move together as a block instead of only moving the item under the pointer.

## Node:Cue 0.18.29 - Tooltip Polish

This release focuses on clearer native tooltips and a simple way to disable them when they are not needed.

### Improvements

- Added an Enable tooltips option in Preferences.
- Standardized native tooltips across Cuelist, Pads, Playlist, sidebar transport controls, and editor normalization controls.

## Node:Cue 0.18.28 - Initial Public Release

Node:Cue is a Windows show-control application designed for live audio playback, cue sequencing, pads, playlists, and professional event operation.

This first public release provides the core Node:Cue experience:

- Cuelist, Pads, and Playlist cover the three common live playback needs from one computer: follow a show rundown, fire jingles or one-shot elements on demand, and keep longer music playlists ready.
- Several views can stay active at the same time, including Remote Views, so one machine can support local operation, secondary displays, or remote control positions while keeping the show context visible.
- MIDI control and independent output buses allow the Cuelist, Pads, and Playlist to be triggered and routed separately, including sending cues, jingles, and playlist playback to different physical outputs or mixes.
- Now Playing monitoring with active playback cards and bus metering.
- Audio output support for WASAPI and ASIO devices.
- Dense simultaneous playback support for demanding show-control scenarios.
- Per-item audio controls including gain, fades, trim markers, normalization, and DSP editing.
- Project/session restore workflows for reopening previous work.
- Manual in-app update checks from `Info` -> `Check for updates`.
- Bundled Stream Deck plugin resources in the official installer.

The Windows installer includes the application, required license notices, the dynamically linked `soxr.dll` component, libsoxr LGPL notices, and the bundled Stream Deck plugin resources.

Updates are never installed automatically. Node:Cue only installs an update after explicit user confirmation.
