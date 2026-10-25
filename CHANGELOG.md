# Changelog

## Node:Cue 1.1.7

Published: 2026-10-25

### New Features

- Added OSC commands and updated the OSC Command Reference.
- Added French and English user guides on the website.

### Improvements

- Standardized OSC fade durations to a range of 0 to 60000 milliseconds (60 seconds), including AUX. An omitted duration uses the configured duration, capped at 60 seconds.
- Standardized Project Browser list IDs: CL for Cuelists, PS for Pad Sets and PL for Playlists. Older projects migrate to the new prefixes while preserving their lists and contents.
- Made Enter (Go), Ctrl+Enter (Go Monitor), Space (Pause / Resume), Tab (Sidebar), Ctrl+D (Deselect), Delete and Ctrl+G (Group selected cues) fixed shortcuts. Alt+Enter remains fixed.

### Compatibility Notes

- OSC addresses now have one supported spelling, with compound actions written without underscores, such as stopall, fadeout and altgo. Previous aliases, including panic and go_id variants, have been removed. Existing controller configurations may need updating against the OSC Command Reference.
- Previous custom assignments for the newly fixed keyboard actions no longer apply.

## Node:Cue 1.1.6

Published: 2026-10-24

### New Features

- Added a floating Global Pads Hotkeys widget that remains visible above other applications while Node:Cue is in the background. Switch Pad hotkeys off and on without returning to Node:Cue, and see a visual pulse when a shortcut is accepted. The widget can be moved and can be disabled in Local Preferences.

### Improvements

- Reduced CPU overhead from the playback display and improved responsiveness when resizing the Sidebar, including its extended two-column layout. Playback information and animations are preserved.
- Improved playback display continuity during short crossfades and after heavy simultaneous playback.
- Moved the Global Pads Hotkeys switch from Local Preferences to the status bar, keeping its actual state visible and directly accessible.
- Right-click a Pad in the main Pads view to select it without starting playback in either Edit or Show mode, matching the Sidebar.
- Refined the Playing panel with integrated Playing/Paused counters, the full Paused label in split columns, and animated icons for fade-in, fade-out and crossfade phases in both full-size and ultra-compact cards.
- Harmonized Group Cue name emphasis between the main Cuelist and Sidebar.

### Fixes

- Fixed the Sidebar Cuelist showing a play icon for a selected cue that was not actually playing.

### Notes

- Global Pads Hotkeys remains a local setting and retains its saved state. The floating widget is enabled by default when the hotkeys are active and hides whenever Node:Cue regains focus.

## Node:Cue 1.1.5

Published: 2026-10-20

### New Features

- Added an optional two-column Sidebar so two different views can remain visible together, such as Pads beside Bus meters. Resize each column independently and place Now Playing and Project Browser across both columns or in either column. The layout adapts to available width and remembers your arrangement.
- Added Global hotkeys in Local Preferences > Pads to trigger assigned Pad hotkeys while Node:Cue is in the background. Disabled by default.
- Added a Follow playhead button to each waveform. Automatic following remains enabled by default and can be turned off to inspect or edit a zoomed waveform during playback.
- Added magnetic snapping of Start, End, Fade In and Fade Out markers to the playhead when playback is stopped or paused. Hold Shift while dragging to bypass snapping.

### Improvements

- Refined Sidebar Pad layouts, title sizing, hotkey visibility, label contrast and playback information at compact sizes. Added the single/double-click launch control and mouse-wheel page navigation to Sidebar Pads.
- Added a keyboard indicator to the selection bar when hotkeys are being used elsewhere.
- Added Hide Project Browser in Local Preferences to give Sidebar views more height. Project Browser remains visible by default and is still accessible from Project Properties.
- Improved Sidebar view exchanges and Monitor placement stability, tab and Remote View button feedback, and border continuity in both themes and at increased display scaling.
- Removed the redundant Stop Selected Cue transport buttons and hotkey entry. GO Monitor is now editable in Hotkeys, with Ctrl+Enter assigned by default.

### Fixes

- Restored the five-second Next cue preview for cues launched by Play Next inside Sequence groups.
- Fixed the waveform playhead remaining at an edited position after resuming paused playback. Improved position accuracy, pause stability and zoomed follow behavior, and reduced changes in waveform density between playback and pause.
- Fixed paused items incorrectly causing Single Play or Playback Flow transitions, including Group launches and transitions between Cuelist, Pads and Playlist.
- Fixed stuttering progress displays on main and Sidebar Pads and in Cuelist and Playlist duration cells.
- Fixed Playlist Name rows briefly flashing when toggled with the ON/OFF button.
- Fixed decimal Fade In and Fade Out entry with a period or comma, and restored switch animations in Project Properties.

### Notes

- Global hotkeys, waveform following and Sidebar layout are local preferences. Existing projects retain their playback settings.
- The Sidebar split becomes available when both columns can retain their minimum width. Narrowing the Sidebar temporarily rejoins the views without losing the saved arrangement.

## Node:Cue 1.1.4

Published: 2026-10-16

### New Features

- Added automatic recovery when a configured audio output is lost and becomes available again, for Cuelist, Pads, Playlist and Monitor. A device-disconnection dialog identifies the affected buses; persistent warnings in the status bar and bus cards open Audio Preferences directly. WASAPI settings show the current Windows default output and identify unavailable System default routes.
- Added separate default Pad and Pad Text colors for newly created pads. Save as Default stores the selected color locally for both themes; the Default button previews and applies it. Select Auto and Save as Default to restore the built-in adaptive colors. Existing pads keep their colors.

### Improvements

- Expanded Pad and Text Color palettes to 16 presets, including Auto, White and Black. Auto text chooses a light or dark neutral for contrast against each pad background. Improved label separation from large hotkeys, pad borders and Light-theme presentation.
- Reorganized Pad and Text Color pickers with Save as Default, Cancel and Apply. Colors preview immediately, presets keep the picker open, and Cancel restores the original colors of the targeted pad or selection.
- Harmonized Properties and Preferences button feedback in both themes, refined Pad customization icons, and made hotkey assignment visibly indicate when it is waiting for a key. Added concise confirmations for color-default actions and EQ/compressor Copy, Paste and Reset.
- Improved waveform playhead motion at playback start, including short files and repeated Stop/GO actions.
- Added audio bitrate to waveform file information when available, for all supported formats.
- Made compressor input, output and gain-reduction meters respond consistently, with a proportional reduction scale that makes light compression easier to assess.
- Added publication dates to release headers in the in-app changelog and website changelog, including previous releases.

### Fixes

- Fixed seeks made on an incoming item during Fade out, then GO being ignored when playback starts. The chosen position is now used without extending the transition delay.
- Fixed Playlist rows losing their column layout while being dragged, including the track ID, title and duration.
- Fixed incomplete hover and pressed areas in compound Properties rows and inconsistent active-button colors and label contrast.
- Fixed alignment and border artifacts in Playlist Random, Shuffle and Auto controls at increased display scaling.
- Fixed Report a Bug preparation unexpectedly moving keyboard focus away from the operator's current field.
- Fixed a completed waveform sometimes remaining partially displayed until the item was reselected or the application reopened.

### Notes

- Audio recovery restores the configured output when it returns. It does not restart interrupted playback or automatically switch to a different Windows default device.
- Audio files analyzed before this update may not show bitrate until they are analyzed again. Existing waveform caches are preserved without automatic reanalysis.

## Node:Cue 1.1.3

Published: 2026-10-13

### New Features

- Added **Report a bug** in Help, with optional contact email and selected session logs. Reports include local and project settings. Reports queued offline are retried automatically while Node:Cue is open.

### Improvements

- Improved dropdown readability and consistency across Preferences, audio routing, playback settings and cue editors, keeping option labels clear of the dropdown arrow.

### Fixes

- Fixed waveform file information retaining values from a previous selection, including incorrect Mono/Stereo, format, sample rate and bit depth labels.
- Fixed waveform file information overlapping the lower border at increased display scaling.

## Node:Cue 1.1.2

Published: 2026-10-10

### New Features

- Added an optional setting in Local Preferences > General to automatically switch the active view when a GO command is triggered from Stream Deck. Disabled by default.

### Changes

- Removed the Linked Play Mode option for Cuelist and Pads. Introduced during the alpha for an earlier, more limited version of Playback Flow, this overlapping control had become unnecessary and confusing. Cuelist and Pads now always have independent Play Modes; Playback Flow manages interactions between them.
- Support logs now include local preferences and project playback settings to help diagnose playback, transition and routing problems. Repetitive logging is reduced and automatic rotation limits disk usage.

### Fixes

- Fixed accelerated playback of mono M4A/MP4 audio files and incorrect duration information for affected files.
- Fixed the Playlist waveform view sometimes returning to the previous track after an overlap.

### Compatibility

- Existing Linked projects now use independent Play Modes. Their saved Single/Multi settings, transitions and Playback Flow configuration are retained. Interruption between Cuelist and Pads now follows Playback Flow only; review these rules if your project previously relied on Linked Single Play.

## Node:Cue 1.1.1 - Monitor, Timecode and Playback Refinements

Published: 2026-10-05

Node:Cue 1.1.1 adds private listening and show rehearsal alongside public playback, with new Monitor controls supported by Stream Deck plugin 2.1.

### New Features

- Added a local Monitor output with independent level, mute, routing and transport controls for Cuelist, Pads, Playlist and Auxiliary In.
- Added Single item preview to audition an item once, and Show simulation to rehearse groups, waits, repetitions, Play Next and Playback Flow through the Monitor output.
- Added PFL listening for items already playing, without restarting them, and Bus Monitoring with PFL/AFL listening points.
- Added explicit MIDI/OSC output arming for one Show simulation session. Messages are simulated by default, so rehearsal does not trigger external devices unless the operator enables sending.
- Added current-view and all-view scopes for Pause and Stop. Pause, Stop and Fade Out transport buttons now include the corresponding PFL previews.
- Added Monitor/PFL, Capture Trigger and Return Playhead to Start commands in Stream Deck plugin 2.1.
- Added names and colors for Timecode triggers, clearer timeline labels, undo for trigger deletion, and an optional Launch Cue on capture setting when Timecode is armed.
- Added manual ownership for each Playlist trim edge. Editing a marker or its Start/End field protects that edge from Auto Trim changes; a blue M label offers Switch to Auto Trim independently for Trim In and Trim Out.

### Improvements

- Added remaining-play counts and Infinite Play indicators to Now Playing, including compact cards and Monitor previews. Finite counts include the current pass.
- Improved readability of compact Now Playing cards, with clearer wait and fade labels.
- Improved continuity between repeated Cuelist and Pad playback. Operator Fade Out now continues across repetitions until its full duration ends, while cancelling Play Next and pending subsequent starts.
- Allowed local cue inspection on a following Backup without moving the Primary selection or its next GO target.
- Refreshed the Stream Deck Timecode and Sync buttons with clearer status displays.

### Fixes

- Fixed Playlist Auto Trim toggles resetting manually edited trim edges. Manual ownership is preserved through save/load, Undo/Redo, copy/paste and Sync.
- Fixed Cuelist Play Count displaying 1 instead of its configured value after stopping repeated playback.
- Fixed stale wait indicators, playback-card resets and crossfade feedback during transport changes.
- Improved Timecode multi-trigger shifting across frame rates and kept trigger deletion focused on the selected triggers rather than a previously selected cue.

### Notes

- Monitor settings and preview sessions are local. Monitoring commands are unavailable on a following Backup while the Primary controls the show.
- Single item preview ignores Play Count and Play Next. Groups and complete playback sequences use Show simulation; MIDI/OSC sending must be explicitly armed for that session.
- Some manually edited Playlist trims in older projects may not be recognised as manual. Changing Auto Trim can reset those trim points; review them on a copy of the project before changing Auto Trim.
- Stream Deck plugin 2.1 requires Node:Cue 1.1.1 or later and is distributed separately through the official Elgato Marketplace.

## Node:Cue 1.1.0 - Project Properties and Playlist Random + Stream Deck Plugin 2.0

Published: 2026-09-24

The new Node:Cue Stream Deck plugin 2.0 is now available on the official [Elgato Marketplace](https://marketplace.elgato.com/product/nodecue-80402450-4deb-4399-9f52-6a81f0e7c088). Install it from Marketplace to receive future plugin updates automatically in the Stream Deck app, with automatic updates enabled.

### New Features

- Added Project Properties alongside Local Preferences, with project naming, playback settings, list management and MIDI/OSC patching.
- Added project MIDI and OSC patch points. Cues refer to named patch points, while each computer maps them to its own MIDI output or OSC endpoint, including on the Backup.
- Added Playlist Random, Shuffle and Auto controls. Random displays a shuffled playback order without changing track IDs; disabling it restores the normal order. Next and Back follow the visible order, and manual reordering remains available.
- Auto reshuffles at the end of a looping random playlist, avoiding an immediate repeat of the previous cycle's final track when multiple tracks are available. Playlist order and settings are saved with the project and synchronized.
- Added live bypass for Trim In, Trim Out, Fade In and Fade Out on audio cues, Pads and Playlist tracks, including Show mode. Use the waveform buttons or right-click a marker; bypassed settings remain available to restore.
- Added bypass indicators to Cuelist and Playlist display options and to Pads, with compact indicators for small Pads.
- Added fade repetition modes for audio cues and Pads with Play Count or Infinite Play: first fade in/last fade out, every fade in/every fade out, every fade in/last fade out, or first fade in/every fade out.
- Added Copy, Paste and Reset for EQ and compressor settings, including their enabled states and individual EQ-band states.
- Added a customizable Return playhead to start shortcut, defaulting to W, for stopped, paused and playing items.
- Added Open last project on startup, restoring the last known project state from the previous session.
- Added separate project download transfer limits for idle and playback operation in Primary/Backup Sync.

### Improvements

- Separated project playback settings from local defaults for new projects. General application hotkeys, display preferences and physical device assignments stay local; Pad shortcuts, MIDI mappings and cue Timecode triggers stay with the project.
- Added a warning when the selected or detected Timecode frame rate is incompatible with existing project triggers.
- Added an optional large hotkey display on Pads, with consistent text colors and improved text contrast and sizing.
- Added distinct waveform cursors for trims, fades and fade curves. Seeking updates header timing and, while paused, Now Playing and duration gauges; a position label appears during dragging.
- Improved Resume visibility, MIDI/OSC Destination controls and Show-mode filename truncation. Overlap offers a three-second duration when first enabled without an existing positive value.
- Available updates are presented at startup, after the supporter reminder when it is shown.
- Install Stream Deck plugin now opens the official Elgato Marketplace page. The plugin is distributed separately and is no longer included in the Node:Cue installer.

### Reliability and Fixes

- Fixed overlapping Cuelist launch requests and Backup automatic continuation competing with synchronized launches.
- Improved ASIO selection and recovery after audio-device or sample-rate changes, retiring invalid players and making configuration failures visible in Preferences.
- Fixed missing-media restoration and project alignment after adding audio or Pad images on the Primary. Restored files are checked, and switching projects releases retired media readers.
- Improved Sync updates for waveform bypass states, EQ editing and randomized Playlist playback, including reshuffling at the start of a new cycle's overlap.
- Fixed navigation shortcuts losing their active-view target after interacting with a bus fader or Project Browser, and corrected customizable hotkey validation.
- Fixed Preferences Apply skipping pending changes when invoked from Sync or Timecode.
- Fixed frozen Show-mode RTA displays after playback; the spectrum now decays progressively.
- Fixed F11 fullscreen leaving space for the Windows taskbar and unnecessary resize transitions.

### Notes

- MIDI and OSC cues now use project patch points. Review their assignments when opening projects created before this release, and configure local destinations on each computer.
- Random playback follows the visible list. Manual GO, Back or reshuffling can intentionally replay tracks; a full automatic pass follows the current order.

## Node:Cue 1.0.2 - Auxiliary Input and Show Operation

Published: 2026-09-14

### New Features

- Added Auxiliary In to the Playlist: route a physical input or an external application through a compatible virtual audio device into the Playlist bus, with an input selector, source name, level knob and meters.
- Integrated AUX into the Playlist and Sidebar as a pinned source. Playlist GO opens the selected track or AUX, while Stop and Fade Out use the existing transport controls. Configurable transitions handle the handoff between AUX and tracks.
- Added a Playlist GO preference for Immediate or Fade In, with an adjustable duration. Immediate remains the default; the setting also applies to Resume without restarting the GO fade when seeking during playback.
- Added dedicated AUX GO, Stop, Level and Fade Out commands for OSC and MIDI. Updated the included Stream Deck plugin to 1.3.0 with a dedicated AUX GO action and a dynamic Playlist GO key showing the selected track or AUX name.
- Added duplication for Cuelists, Pad Sets and Playlists in Project Browser, plus Ctrl+G to group selected cues.
- Added customizable Edit and Show shortcuts, defaulting to F7 and F8.

### Improvements

- Refined Show mode with cue-specific monitors, consistent typography and smoother transitions between Edit and Show. Node:Cue now always opens in Edit mode.
- Made the global Timecode timeline accessible from the transport timer in Show mode, with a chronological trigger list and dimmed past triggers. Explicit cue navigation returns to cue details; automatic playback can continue without leaving the timeline.
- Improved MIDI mapping with a note selector, MIDI Learn inside the mapping editor, reliable editing of existing mappings and direct mapping of Playlist Fade Out.
- Refined transport controls and Fade Out duration interactions, aligned compact Fade Out icons with the main transport, and improved Project Browser actions and light/dark presentation. Auto Normalize stays visible and read-only in Show mode, while the Pad click-mode control remains available.

### Reliability and Fixes

- Improved Primary/Backup synchronization under rapid continuous changes to bus levels, AUX level, EQ and compressor controls, reducing redundant traffic and preventing sequence or project-hash mismatches.
- Kept Backup fader displays current during rapid level changes and stabilized Playlist GO availability during synchronized updates.
- Preserved Stop Cue fade priority when a launched group targets a playing cue outside the group, while retaining normal play-mode transitions for other interrupted cues.
- Improved fullscreen transitions and prevented title-bar dragging while in F11 fullscreen.
- Fixed Pad background and text color popovers remaining open after changing selection.
- Fixed brightness adjustments using the previous color after selecting a preset or recent color.
- Fixed Cuelist Play Count and Infinite Play indicators not refreshing until the view was reopened, and removed the extra delay when toggling Play Next.

### Auxiliary Input Notes

- AUX name, enabled state, level and transition settings are saved with the project and synchronized. Input-device selection remains local to each computer. AUX starts closed when opening the application or loading a project, and after input reconnection.
- An open AUX remains visibly active at zero level, with the knob percentage shown in Now Playing. Raising its level restores the sound; Stop closes it.
- External application audio requires a compatible virtual audio device configured by the operator. VB-CABLE is a suggested option and is obtained separately from VB-Audio under its own licensing terms. A physical recording input can be selected directly.
- Primary/Backup Sync carries AUX settings and commands, not the external audio itself. Route the intended source to each computer separately.

## Node:Cue 1.0.1 - Live Playback and Reliability

Published: 2026-09-09

### Improvements

- Improved responsiveness when triggering Pads and Playlist tracks in rapid succession, including during fade transitions.
- Smoother progress bars, playheads and countdowns across Cuelist, Pads, Playlist and Now Playing when another playback starts, including short audio files.
- Refined Playback Flow controls and kept Playlist transitions independently editable when Cuelist and Pads use Linked Single Play.

### Fixes

- Fixed pending Single Play and Playlist starts accumulating during rapid GO commands. The latest valid request replaces a conflicting pending start, and Stop cancels queued starts.
- Fixed Group Cue sequence timing around repeats, waits, overlaps, pause and seeking. Audio-source failures now stop the affected group's automatic continuation while allowing healthy siblings to finish.
- Fixed control-cue Stop, restart and pause handling during delayed starts, post-waits and timed continuations.
- Fixed multi-selection Properties edits applying unwanted defaults or changing unrelated Play Count and Infinite Play settings.
- Fixed trimmed Pad playhead positioning and refined Sidebar selection and Project Browser keyboard navigation.
- Fixed Save As references to collected media and Pad images when changing project folders.
- Strengthened autosave and backup recovery so failed restores preserve the active project and recovery source, including when the original project folder is unavailable.
- Fixed a Primary/Backup project mismatch after replacing a Pad's audio file.

## Node:Cue 1.0.0 - First Official Release

Published: 2026-09-07

Node:Cue 1.0.0 is the first official release of the application. It brings the complete live-show workflow together in one Windows application: plan a show in the Cuelist, trigger live elements from Pads, keep background music running in the Playlist, and control the whole system from the same operator workspace.

### Major Changes

- **Multiple lists in one project.** Project Browser organizes multiple Cuelists, Pad Sets, and Playlists. Browse and edit another list while the current scenario continues, including repeats and automatic sequences. Starting playback in another list of the same player applies the project's Cross Project List transition; Stop All remains available across lists.
- **FLOW overhaul.** Interactions between Cuelist, Pads, and Playlist have moved out of Preferences and into the core of Node:Cue. FLOW is now a dedicated, project-level feature for defining what happens when one view starts while another is active: stop, pause, fade out, crossfade, or continue. Each view can use its own transition rules, making FLOW a central part of the show's playback design rather than a collection of hidden application settings.
- **ALT GO.** Added an alternate transition path for live operation. Holding Alt, or using the alternate GO shortcut, lets the operator trigger a different transition profile without changing the project's normal GO behavior. ALT GO is available across the main and Sidebar controls, with clear held-state feedback and focus protection so a quick live action cannot leak into the Windows system menu.
- **Group Cues.** Introduced a new grouped-cue model with three explicit playback modes: Group Play for parallel playback, Sequence for ordered automatic continuation, and Sublist for a contained cue list. Parent waits, repetitions, Play Next, fades, mixed audio and control cues, external triggers, and Sync all follow the selected group mode while preserving ordinary internal-cue behavior.
- **Timecode Trigger V1.** Timecode scheduling has been consolidated into a project timeline with armed-state monitoring, timed MIDI support, trigger-list diagnostics, and consistent behavior across ordinary cues and the wider transport model.
- **Primary/Backup Sync completion.** Sync has grown from a mirrored transport link into a complete recovery workflow: project changes and live playback remain aligned, the Primary can transfer a portable project to the Backup, and the Backup can leave read-only mode when the physical Primary computer drops out of the show.

### New Features

- Added a compact, resizable Project Browser with folder navigation, list creation, renaming, drag-and-drop ordering, deletion confirmation, and undo/redo for deleted lists.
- Added editable Cuelist, Pad Set, and Playlist IDs with fixed C/P/T prefixes, values up to 99.9, duplicate protection, and stable internal project identities. Contextual keyboard, MIDI, OSC, Stream Deck, and Remote View controls target the opened list.
- Added Cross Project List transitions and an Immediate option to Playback Flow and Cuelist/Pad play-mode transition settings.
- Added the opened list's ID and name to the transport bar, with a compact hover expansion when space is limited.
- Added Playlist resume after an interruption and a single-track loop mode for keeping one selected track running continuously.
- Added persistent Cue, Group Cue, and Playlist-track enable/disable controls, with disabled-state handling carried through targeting, playback, and Sync.
- Added per-bus Mono/Stereo routing, including true stereo fold-down for mono outputs and route-aware metering.
- Added native system-style menus and expanded Preferences controls for themes, tooltips, transport behavior, audio routing, MIDI mappings, and operator shortcuts.
- Added structural undo support for cue, group, and playlist editing workflows.
- Added channel-aware waveform detail with balance control and Compact or L/R display modes, while preserving the existing trim and zoom workflow.

### Improvements

- Unified Remote View presentation with the main workspace; Remote Views now follow the main window's Show/Edit mode changes.
- Refined sidebar resizing and snap behavior, Project Browser contrast, light-theme headers, disabled controls, and inline ID/name editing.
- Refined startup feedback with a smooth, sequential three-color logo animation.
- Improved control and display responsiveness during simultaneous playback, including faders, scrolling, waveforms, countdowns, and Now Playing.
- Preserved sample-accurate trim placement at high waveform zoom, with aligned drag markers and clearer operator-facing errors.
- Improved transport behavior across pre-waits, post-waits, Play Next, repeats, loops, fades, crossfades, Stop, Stop All, pause, resume, and Single Play.
- Improved Primary/Backup state convergence so project changes, transport actions, waiting phases, transitions, and takeover behavior remain aligned without adding acknowledgement delays to normal operator commands.
- Improved audio startup, device discovery, route recovery, progressive streaming, and terminal fade handling for demanding live sessions.
- Improved waveform rendering and navigation with bounded reusable geometry, multiresolution data, progressive drawing, and smoother playback-follow updates.
- Improved Now Playing cards, countdowns, duration gauges, playheads, waiting states, fade states, and bus meters so live feedback stays current and readable.
- Improved Cuelist, Pads, Playlist, Sidebar, Properties, EQ/Compressor, Timecode, and Preferences layouts across display sizes and Windows scaling settings.
- Improved keyboard shortcuts and Hotkeys behavior, including one command per physical key press, reliable Alt-held GO behavior, and safer focus handling around system menus.
- Improved Pad image loading and caching, color editing, page changes, grid controls, and empty-state presentation.
- Improved project/session restore, recent-project identity, persistence paths, autosave revision handling, and installed `.ncue` handoff.
- Improved dark and light themes, compact controls, active-state indicators, disabled-state presentation, resize hit areas, and native Windows framing.

### Reliability and Fixes

- Added predictable admission for up to 64 simultaneous audio voices without replacing older playback, plus advance capacity warnings for oversized Group Play cues.
- Strengthened playback preparation and repeated-launch handling while preserving real-time streaming and bounded memory use.
- Fixed stale or missing updates in Now Playing, countdowns, waveform playheads, duration progress, realtime analysis, and bus metering.
- Fixed playback ordering and state drift during Sync, Playback Flow transitions, Group Cue waits, Play Next, repeated launches, and interrupted fades.
- Fixed pause, resume, Stop, Stop All, pre-wait, post-wait, loop, and Single Play edge cases across Cuelist, Pads, Playlist, and control cues.
- Fixed Playlist navigation and resume behavior after interruptions, including navigation during active overlaps and stopped or paused playback.
- Fixed project-transfer and Sync issues involving missing media, portable OSC endpoints, runtime-only Playlist history, media-derived metadata, network interfaces, and reconnects.
- Fixed audio-device loss and recovery cases affecting ASIO, WASAPI, USB devices, generic Windows device names, and system-default route changes.
- Fixed mono output isolation, bus mute and fader feedback, output identity preservation, and route-aware meter presentation.
- Fixed Pad image gaps during page changes and resizing, hidden-grid restoration, targeted paste behavior, re-click loop handling, and color-update inconsistencies.
- Fixed cue and track selection, multi-item drag operations, cue targeting, Group Cue editing, disabled rows, identity colors, and editor focus retention.
- Fixed keyboard shortcut repeat, Alt/system-menu focus leakage, modal focus, window geometry restoration, and native menu interaction issues.
- Fixed light/dark contrast, scroll behavior, tooltip consistency, transport indicators, empty states, editor scaling, and compact-control layout issues.

## Node:Cue 0.21.0 - Primary/Backup Sync and Live Reliability

Published: 2026-07-16

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

Published: 2026-06-25

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

Published: 2026-06-22

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

Published: 2026-06-12

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

Published: 2026-06-10

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

Published: 2026-06-09

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

Published: 2026-05-27

### Improvements

- Added a Preferences setting for choosing whether Now Playing cards display remaining time or playhead position.
- Editor headers now show the current source playhead position and total source duration, including idle items and manual waveform playhead moves.

### Fixes

- Improved WASAPI output device discovery so newly connected USB audio interfaces are more reliably listed without restarting Node:Cue.
- Reapplying System Default now detects when the underlying Windows default output endpoint has changed and reopens the output stream accordingly.

## Node:Cue 0.18.30 - Cuelist Overlap and Workflow Fixes

Published: 2026-05-26

### New Features

- Added Cuelist auto-follow overlap, allowing the next cue to start before the current cue reaches its trimmed end. This makes it possible to build asymmetric crossfades using the existing per-cue fade-in and fade-out settings.

### Fixes

- Fixed a Cuelist navigation issue where using Previous cue after an Enter-triggered GO could move the armed/selected cue back by two positions instead of one in some conditions.
- Fixed Playlist multi-selection editing so selected playlist tracks show playlist-relevant controls instead of Cuelist cue options.
- Fixed multi-item drag behavior in the Cuelist and Playlist so selected items move together as a block instead of only moving the item under the pointer.

## Node:Cue 0.18.29 - Tooltip Polish

Published: 2026-05-23

This release focuses on clearer native tooltips and a simple way to disable them when they are not needed.

### Improvements

- Added an Enable tooltips option in Preferences.
- Standardized native tooltips across Cuelist, Pads, Playlist, sidebar transport controls, and editor normalization controls.

## Node:Cue 0.18.28 - Initial Public Release

Published: 2026-05-23

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
