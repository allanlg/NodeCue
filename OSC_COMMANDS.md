# Node:Cue OSC Commands

This document lists the OSC input commands supported by Node:Cue 1.0.2.

OSC input is configured in `Preferences > Control > OSC`. Add a receive endpoint, choose the network interface to listen on, set the port, then send OSC messages to that IP address and port.

## Conventions

- All command addresses are lowercase.
- Addresses start with `/nodecue`.
- Values can be sent as OSC arguments.
- Boolean-style triggers are accepted. A first trigger argument of `false`, `0`, `0.0`, or `nil` is ignored.
- Required values and IDs are consumed before checking optional trigger arguments.
  In particular, AUX Level `0` sets the level to zero; it is not ignored.
- Fade commands accept an optional fade duration in milliseconds as the first argument.
- Pad and bus commands can take their target ID either in the OSC address or as the first argument.
- Cuelist cue IDs are the visible IDs shown in the `ID` column. For custom IDs,
  using an OSC argument is the safest form.
- `/nodecue/cuelist/go` always launches the currently armed cue. Its arguments are trigger
  arguments only; they are not interpreted as a cue ID. To launch a cue by visible ID, use
  `/nodecue/cuelist/go_id` with the ID as first argument, or `/nodecue/cuelist/go/{cue_id}`.

## Cuelist

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Play armed cue | `/nodecue/cuelist/go` | `/nodecue/cue/go`, `/nodecue/cues/go`, `/nodecue/cuelist/play`, `/nodecue/cue/play`, `/nodecue/cues/play` | Optional trigger |
| Play cue by visible ID | `/nodecue/cuelist/go_id` | `/nodecue/cue/go_id`, `/nodecue/cues/go_id`, `/nodecue/cuelist/go_number`, `/nodecue/cuelist/play_id`, `/nodecue/cuelist/play_number` | `cue_id`, optional trigger |
| Play cue by visible ID | `/nodecue/cuelist/go/{cue_id}` | `/nodecue/cue/go/{cue_id}`, `/nodecue/cues/go/{cue_id}`, `/nodecue/cuelist/play/{cue_id}`, `/nodecue/cuelist/go_id/{cue_id}`, `/nodecue/cuelist/go_number/{cue_id}` | Optional trigger |
| Stop all cuelist playback | `/nodecue/cuelist/stop` | `/nodecue/cue/stop`, `/nodecue/cues/stop`, `/nodecue/cuelist/stop_all`, `/nodecue/cue/stop_all`, `/nodecue/cues/stop_all` | Optional trigger |
| Pause / resume cuelist playback | `/nodecue/cuelist/pause` | `/nodecue/cue/pause`, `/nodecue/cues/pause`, `/nodecue/cuelist/resume`, `/nodecue/cuelist/pause_resume` | Optional trigger |
| Previous cue | `/nodecue/cuelist/back` | `/nodecue/cuelist/previous`, `/nodecue/cue/back`, `/nodecue/cue/previous`, `/nodecue/cues/back`, `/nodecue/cues/previous` | Optional trigger |
| Next cue | `/nodecue/cuelist/next` | `/nodecue/cue/next`, `/nodecue/cues/next` | Optional trigger |
| Panic / stop all playback | `/nodecue/panic` | `/nodecue/stop_all`, `/nodecue/cuelist/panic`, `/nodecue/cue/panic`, `/nodecue/cues/panic` | Optional trigger |
| Fade out cuelist playback | `/nodecue/cuelist/fade_out` | `/nodecue/cue/fade_out`, `/nodecue/cues/fade_out`, `/nodecue/cuelist/fade/out` | Optional fade duration in ms, optional trigger |

## Pads

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Play pad | `/nodecue/pads/play/{pad_id}` | `/nodecue/pad/play/{pad_id}` | Optional trigger |
| Play pad | `/nodecue/pads/play` | `/nodecue/pad/play` | `pad_id`, optional trigger |
| Stop pads playback | `/nodecue/pads/stop` | `/nodecue/pad/stop`, `/nodecue/pads/stop_all`, `/nodecue/pad/stop_all` | Optional trigger |
| Pause / resume pads playback | `/nodecue/pads/pause` | `/nodecue/pad/pause`, `/nodecue/pads/resume`, `/nodecue/pads/pause_resume` | Optional trigger |
| Fade out pads playback | `/nodecue/pads/fade_out` | `/nodecue/pad/fade_out`, `/nodecue/pads/fade/out` | Optional fade duration in ms, optional trigger |

## Playlist

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Play selected track or AUX | `/nodecue/playlist/go` | `/nodecue/playlist/play` | Optional trigger |
| Pause / resume playlist playback | `/nodecue/playlist/pause` | `/nodecue/playlist/resume`, `/nodecue/playlist/pause_resume` | Optional trigger |
| Stop playlist playback | `/nodecue/playlist/stop` | - | Optional trigger |
| Previous track | `/nodecue/playlist/back` | `/nodecue/playlist/previous` | Optional trigger |
| Next track | `/nodecue/playlist/next` | - | Optional trigger |
| Fade out playlist playback | `/nodecue/playlist/fade_out` | `/nodecue/playlist/fade/out` | Optional fade duration in ms, optional trigger |

## Auxiliary In

These commands target AUX directly, regardless of the selected Playlist track.
AUX Stop/Fade Out close only AUX; they do not stop a Playlist track.

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Select and open AUX | `/nodecue/aux/go` | `/nodecue/aux/play` | Optional trigger |
| Close AUX immediately | `/nodecue/aux/stop` | - | Optional trigger |
| Fade AUX out | `/nodecue/aux/fade_out` | `/nodecue/aux/fade/out` | Optional integer duration in ms, optional trigger |
| Set the AUX knob level | `/nodecue/aux/level` | - | Number from 0 to 1, optional trigger |

GO uses the Playlist GO preference and the normal AUX/Playlist handoff transition.
Repeated GO does not restart an already open AUX. Input enable/device settings must
be configured first; GO never enables or reroutes an unavailable input.

Fade Out accepts 0 to 600000 ms. Omitting its duration uses the existing AUX
command fade duration (1000 ms by default), matching the dedicated MIDI Fade Out action.

Level uses the knob's 0-100% scale, not decibels: `0.5` means 50%.
Setting the level to zero keeps an open AUX open; raising it restores its sound.
Use Stop to close AUX. Values outside the stated ranges are rejected.
The external application's own playback remains unchanged.

Commands respect the same Backup read-only guard and Sync replication as local AUX controls.
Playlist Stop and Playlist Fade Out also close AUX. Dedicated AUX commands target
only AUX. Fade In, Mute and Unmute are not separate external commands; use GO and Stop.

## Global

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Stop all playback / panic | `/nodecue/panic` | `/nodecue/stop_all` | Optional trigger |
| Fade out all playback | `/nodecue/global/fade_out` | `/nodecue/fade_out` | Optional fade duration in ms, optional trigger |

## Bus

Bus IDs are zero-based:

- `0`: Cuelist bus
- `1`: Pads bus
- `2`: Playlist bus

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Toggle bus mute | `/nodecue/bus/mute/{bus_id}` | `/nodecue/bus/mute/toggle/{bus_id}`, `/nodecue/bus/{bus_id}/mute`, `/nodecue/bus/{bus_id}/mute/toggle` | Optional trigger |
| Toggle bus mute | `/nodecue/bus/mute` | `/nodecue/bus/mute/toggle` | `bus_id`, optional trigger |

## Examples

Play the armed cuelist cue:

```text
/nodecue/cuelist/go
```

Play cuelist cue ID `12.5`:

```text
Address: /nodecue/cuelist/go_id
Argument: 12.5
```

Or:

```text
/nodecue/cuelist/go/12.5
```

Play pad 7:

```text
/nodecue/pads/play/7
```

Play pad 7 using an argument:

```text
Address: /nodecue/pads/play
Argument: 7
```

Fade out all playback over 3 seconds:

```text
Address: /nodecue/global/fade_out
Argument: 3000
```

Toggle mute on the Pads bus:

```text
/nodecue/bus/mute/1
```

Select and open AUX using the configured GO and handoff behavior:

```text
/nodecue/aux/go
```

Set the AUX knob to 50% without changing its open/closed state:

```text
Address: /nodecue/aux/level
Argument: 0.5 (OSC Float)
```

Fade AUX out over 3 seconds:

```text
Address: /nodecue/aux/fade_out
Argument: 3000 (OSC Int)
```
