# Changelog

## Node:Cue 0.21.0 - Primary/Backup Sync and Live Reliability

### New Features

- Added Primary/Backup Sync for mirroring live operation between two Node:Cue systems over a dedicated IP network. The Backup follows accepted transport and project changes in read-only mode and automatically returns to Standalone operation if the Primary connection is lost.
- Added project validation and alignment for Sync, including media checks, per-instance MIDI output mapping, network-interface selection, link-resilience profiles, and live latency monitoring.
- Added an operator Logs panel with concise playback, control, device, Sync, warning, and error events, plus unread severity feedback in the status bar.

### Improvements

- Improved audio startup and device recovery so output streams are prepared earlier and playback can recover after a disconnected ASIO or WASAPI device becomes available again.
- Refined Pads with faster image caching, more responsive page changes, adaptive labels, clearer duration progress, improved image and color editing, and more consistent grid controls.
- Improved the Properties and EQ/Compressor editors with responsive narrow layouts, clearer controls, realtime analysis feedback, updated meters, and modernized parameter knobs.
- Improved Cuelist, Pads, Playlist, Now Playing, sidebar, waveform, countdown, and progress feedback for active, paused, waiting, and transition states.
- Renamed the Configuration window to Preferences, clarified its tabs, and improved modal sizing across display resolutions and Windows scaling settings.
- Enlarged internal resize hit areas and refined compact controls, status-bar actions, themes, icons, and light/dark contrast throughout the interface.

### Reliability

- Hardened command application, project persistence, autosave revision handling, frontend update delivery, and Sync reconciliation without adding acknowledgement delays to normal operator commands.
- Improved pre-wait, post-wait, Play next, fade, crossfade, loop, Stop, Stop All, and single-play state consistency across Cuelist, Pads, Playlist, and Primary/Backup operation.
- Improved missing-media, unavailable MIDI output, audio-device loss, failed playback, and Sync divergence reporting so failures remain visible and actionable.

### Fixes

- Fixed several cases where Now Playing cards, duration gauges, countdowns, waveform playheads, or realtime analysis could stop updating or show stale state.
- Fixed Pad image loading gaps during page changes and prevented images from disappearing during window or panel resizing.
- Fixed project and transport drift caused by ordering, page selection, pad re-click, MIDI mapping, and repeated transition events during Sync.
- Fixed unnecessary project revisions when unchanged audio settings are applied.
- Fixed multiple layout, selection, drag-and-drop, missing-media, theme contrast, and compact-control inconsistencies.

## Node:Cue 0.20.1 - Show Mode and Interface Reliability

### New Features

- Added Show Mode, a live-operation lock that keeps playback controls, Now Playing, bus monitoring, view switching, and panel controls usable while hiding or blocking editing actions.
- Added a read-only Show Mode monitor in the bottom panel, with waveform display for audio items and compact command summaries for MIDI, OSC, and Stop cues.
- Added an optional EQ/Compressor drawer in Show Mode for audio items, while narrow windows automatically stay in waveform-only mode.

### Improvements

- Improved Cuelist and Playlist row selection, armed indicators, playing-state markers, and sidebar list alignment so live states are easier to read at a glance.
- Improved sidebar Cuelist and Playlist rows with firmer separators, aligned ID/duration columns, progress fills inside the Duration column, and sharper text rendering.
- Improved modal keyboard handling so `Tab` cycles through modal controls and `Enter` activates the focused action button.
- Improved window geometry recovery so Node:Cue avoids restoring windows outside the available monitor area.
- Improved status-bar Edit/Show controls and Show Mode Fade Out duration editing.

### Fixes

- Fixed command-cue editing and Show Mode display for MIDI, OSC, and Stop cues.
- Fixed Playlist sidebar selection visibility after the pointer leaves the selected track.
- Fixed waveform time labeling at the start of the timeline.
- Fixed dark-mode Stop cue icon contrast in the sidebar.

## Node:Cue 0.20.0 - Supporter License, MIDI Map, and Live Operation Polish

### New Features

- Added the optional Node:Cue Supporter License flow. Node:Cue remains free to use, and playback, projects, and show operation are never limited by license state.
- Added license activation and deactivation inside the application, with offline persistence after a successful activation.
- Added a startup reminder for the optional supporter license, shown before session recovery prompts.
- Added a startup splash screen so the application gives immediate launch feedback while the main window initializes.
- Added a compact MIDI Map panel for viewing, adding, editing, and deleting MIDI assignments directly from the main interface.
- Added a bottom status bar with view status information and quick access to interface, MIDI, remote view, theme, and settings controls.

### Improvements

- Refreshed the main Cuelist, Pads, and Playlist headers, transport controls, item title displays, sidebar tabs, and empty-state behavior.
- Improved Pad image loading and caching so pad pages and pad color edits remain more responsive with image-heavy sessions.
- Improved session loading feedback by keeping the loading flow active until the frontend is usable.
- Improved Cuelist, Playlist, and sidebar scrolling with more compact overlay scrollbars.
- Improved light and dark palettes, table headers, row styling, pad grid contrast, sidebar lists, and selected/playing state visibility.
- Added clearer armed-cue and armed-stop indicators in the Cuelist and sidebar.
- Added a persistent per-view item display showing the currently armed or selected cue, pad, or track.

### Fixes

- Fixed pause handling during pre-wait and post-wait so waiting cards and countdowns remain consistent while paused.
- Fixed post-wait Play next progress glitches that could briefly fill duration gauges incorrectly.
- Fixed Stop Selected behavior for cues in pre-wait or post-wait so related Now Playing cards are cleared immediately.
- Fixed Pad re-click stop so active loop counts are cancelled instead of advancing to the next loop.
- Fixed hidden Pads being lost when reducing the visible grid size and reopening a session.
- Fixed bus fader and mute changes causing Now Playing progress cards to jump backward.
- Fixed Playlist empty-state scrolling when no tracks are present.
- Fixed several transport-button, tab-border, modal-layering, and layout consistency issues across light and dark mode.

## Node:Cue 0.19.2 - Audio Format Support and Interface Polish

### New Features

- Added support for AAC and MP4/M4A audio files.
- Added support for AIFF/AIFC audio files.
- Added support for ALAC audio files.

### Improvements

- Refined the DSP, transport, Configuration, and editor control styling for a more cohesive Node:Cue interface.
- Improved waveform navigation and editor interaction polish while preserving the existing workflow.

### Fixes

- Fixed paused pre-wait cleanup after Stop All so Cuelist cues can be launched reliably again afterward.
- Fixed Playlist double-click playback so the selected track starts consistently.
- Fixed paused Cuelist, Pads, and Playlist launches so single-play transitions are not triggered incorrectly.

## Node:Cue 0.19.1 - Fade Transitions and Update Notes

### Improvements

- Added Now Playing waiting cards for playback queued behind a Fade out only transition. The card becomes the normal playback card when the queued item starts.
- Improved update-note rendering in the update window so Markdown headings and lists display correctly.
- The latest changelog can now be opened from `Info` -> `Check for updates` even when no newer version is available.
- Recent pad and text colors are now saved when closing the color picker after live preview, even without pressing Apply.
- Renamed the update dialog's `Later` button to `Close` when it only dismisses the window.

### Fixes

- Fixed Cuelist single-play Fade out only so the next cue waits for the interrupted cue's configured fade-out before starting.
- Kept item fade-ins intact during single-play Fade out only and Crossfade transitions for Cuelist, Pads, and Playlist playback.

## Node:Cue 0.19.0 - MIDI/OSC Cues, Waveform Navigation, and Playback Polish

### New Features

- Added MIDI cues for sending Note, Control Change, and Program Change messages to configured MIDI outputs.
- Added OSC cues for sending OSC commands to configured local or network endpoints.
- Added OSC input commands so external controllers can trigger Node:Cue transport, Cuelist, Pads, Playlist, bus, and fade actions.
- Added Play next support across audio, MIDI, OSC, and Stop cues, with overlap timing where applicable.
- Added a waveform overview strip for zoomed navigation, visible-range resizing, and trim-aware inactive regions.
- Added editable Start and End fields for audio cues, pads, and playlist tracks.
- Added an OSC command reference document for configuring external controllers.
- Added a public Node:Cue logo asset for users who need to identify the app in show files, controller layouts, or documentation.

### Improvements

- Improved Now Playing feedback with clearer pre-wait, post-wait, next-cue, next-track, fade-out, MIDI, OSC, and Stop cue cards.
- Improved Cuelist Pre-wait, Duration, and Post-wait countdown displays so they update consistently during playback.
- Reduced UI refresh cost during playback for bus meters, editor meters, Cuelist, Pads, Playlist, Now Playing, and waveform updates.
- Improved audio device selection by showing both the friendly device name and the technical device name when available.
- Reworked pad text and pad background color selection with a compact color palette, presets, recent colors, default reset, and live pad preview while editing.
- Refined Configuration styling, editor fields, normalization buttons, cue status icons, pad color behavior, bus mute styling, and transport tooltips.
- Improved diagnostic logging so user commands, backend responses, and playback state transitions are easier to follow when troubleshooting sessions.

### Fixes

- Fixed Cuelist and Pads default play mode application when opening Node:Cue without recovering a previous session.
- Fixed several Play next, loop, pre-wait, post-wait, pause, and Stop All edge cases across audio and control cues.
- Fixed pad pause/resume transport highlighting so the Resume state matches the Cuelist and Playlist behavior.

## Node:Cue 0.18.31 - Playback Time Display and Device Discovery

### Improvements

- Added a Preferences setting for choosing whether Now Playing cards display remaining time or playhead position.
- Editor headers now show the current source playhead position and total source duration, including idle items and manual waveform playhead moves.

### Fixes

- Improved WASAPI output device discovery so newly connected USB audio interfaces are more reliably listed without restarting Node:Cue.
- Reapplying System Default now detects when the underlying Windows default output endpoint has changed and reopens the output stream accordingly.

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
