# Node:Cue OSC Commands

This document lists the OSC input commands currently supported by Node:Cue.

OSC input is configured in `Configuration > OSC`. Add a receive endpoint, choose the network interface to listen on, set the port, then send OSC messages to that IP address and port.

## Conventions

- All command addresses are lowercase.
- Addresses start with `/nodecue`.
- Values can be sent as OSC arguments.
- Boolean-style triggers are accepted. A first trigger argument of `false`, `0`, `0.0`, or `nil` is ignored.
- Fade commands accept an optional fade duration in milliseconds as the first argument.
- Pad and bus commands can take their target ID either in the OSC address or as the first argument.

## Cuelist

| Action | Recommended OSC address | Accepted aliases | Arguments |
| --- | --- | --- | --- |
| Play armed cue | `/nodecue/cuelist/go` | `/nodecue/cue/go`, `/nodecue/cues/go`, `/nodecue/cuelist/play`, `/nodecue/cue/play`, `/nodecue/cues/play` | Optional trigger |
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
| Play selected / current track | `/nodecue/playlist/go` | `/nodecue/playlist/play` | Optional trigger |
| Pause / resume playlist playback | `/nodecue/playlist/pause` | `/nodecue/playlist/resume`, `/nodecue/playlist/pause_resume` | Optional trigger |
| Stop playlist playback | `/nodecue/playlist/stop` | - | Optional trigger |
| Previous track | `/nodecue/playlist/back` | `/nodecue/playlist/previous` | Optional trigger |
| Next track | `/nodecue/playlist/next` | - | Optional trigger |
| Fade out playlist playback | `/nodecue/playlist/fade_out` | `/nodecue/playlist/fade/out` | Optional fade duration in ms, optional trigger |

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

