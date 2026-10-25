# Node:Cue OSC Commands

## Setup

OSC input is configured in `Preferences > Control > OSC`. Add a receive endpoint, choose the network interface to listen on, set the port, then send OSC messages to that IP address and port.

For more details on OSC integration in Node:Cue, see the user guide: [English](guide/en/index.html#page=osc) or [Français](guide/fr/index.html#page=osc).

## Active view

These commands control only the active view, like its playback controls.

| Action | OSC address | Arguments |
| --- | --- | --- |
| Go on the active view's selected element | `/nodecue/go` | Optional `alt` (string, value: alt) |
| Alt Go on the active view's selected element | `/nodecue/altgo` | None |
| Pause the active view | `/nodecue/pause` | None |
| Resume the active view | `/nodecue/resume` | None |
| Stop the active view | `/nodecue/stop` | None |
| Fade out the active view | `/nodecue/fadeout` | Optional fade duration in milliseconds (integer 0-60000) |
| Select the previous element in the active view | `/nodecue/back` | None |
| Select the next element in the active view | `/nodecue/next` | None |
| Return the active view's selected audio element to its effective start | `/nodecue/rewind` | None |


## Cuelist

| Action | OSC address | Arguments |
| --- | --- | --- |
| Open a Cuelist | `/nodecue/cuelist/open/{listid}` | None |
| Go on the selected cue | `/nodecue/cuelist/go` | Optional `alt` (string, value: alt) |
| Go on a cue by ID | `/nodecue/cuelist/go/{id}` | Optional `alt` (string, value: alt) |
| Alt Go on the selected cue | `/nodecue/cuelist/altgo` | None |
| Alt Go on a cue by ID | `/nodecue/cuelist/altgo/{id}` | None |
| Stop Cuelist playback | `/nodecue/cuelist/stop` | None |
| Stop a cue by ID | `/nodecue/cuelist/stop/{id}` | None |
| Pause / resume Cuelist playback | `/nodecue/cuelist/pause` | None |
| Pause / resume a cue by ID | `/nodecue/cuelist/pause/{id}` | None |
| Select the previous cue | `/nodecue/cuelist/back` | None |
| Select the next cue | `/nodecue/cuelist/next` | None |
| Fade out Cuelist playback | `/nodecue/cuelist/fadeout` | Optional fade duration in milliseconds (integer 0-60000) |
| Return the selected audio cue to its effective start | `/nodecue/cuelist/rewind` | None |
## Pads

| Action | OSC address | Arguments |
| --- | --- | --- |
| Open a Pad Set | `/nodecue/pads/open/{listid}` | None |
| Go on the selected pad | `/nodecue/pads/go` | Optional `alt` (string, value: alt) |
| Go on a pad by ID | `/nodecue/pads/go/{id}` | Optional `alt` (string, value: alt) |
| Alt Go on the selected pad | `/nodecue/pads/altgo` | None |
| Alt Go on a pad by ID | `/nodecue/pads/altgo/{id}` | None |
| Stop Pads playback | `/nodecue/pads/stop` | None |
| Pause / resume Pads playback | `/nodecue/pads/pause` | None |
| Select the previous pad | `/nodecue/pads/back` | None |
| Select the next pad | `/nodecue/pads/next` | None |
| Fade out Pads playback | `/nodecue/pads/fadeout` | Optional fade duration in milliseconds (integer 0-60000) |
| Return the selected audio pad to its effective start | `/nodecue/pads/rewind` | None |
## Playlist

| Action | OSC address | Arguments |
| --- | --- | --- |
| Open a Playlist | `/nodecue/playlist/open/{listid}` | None |
| Go on the selected track or AUX | `/nodecue/playlist/go` | Optional `alt` (string, value: alt) |
| Go on a track by ID | `/nodecue/playlist/go/{id}` | Optional `alt` (string, value: alt) |
| Alt Go on the selected track or AUX | `/nodecue/playlist/altgo` | None |
| Alt Go on a track by ID | `/nodecue/playlist/altgo/{id}` | None |
| Pause / resume Playlist playback | `/nodecue/playlist/pause` | None |
| Stop Playlist playback | `/nodecue/playlist/stop` | None |
| Select the previous track | `/nodecue/playlist/back` | None |
| Select the next track | `/nodecue/playlist/next` | None |
| Fade out Playlist playback | `/nodecue/playlist/fadeout` | Optional fade duration in milliseconds (integer 0-60000) |
| Return the selected audio track to its effective start | `/nodecue/playlist/rewind` | None |
## Auxiliary In

These commands target AUX directly, regardless of the selected Playlist track.
AUX Stop/Fade Out close only AUX; they do not stop a Playlist track.

| Action | OSC address | Arguments |
| --- | --- | --- |
| Go AUX | `/nodecue/aux/go` | Optional `alt` (string, value: alt) |
| Alt Go AUX | `/nodecue/aux/altgo` | None |
| Stop AUX | `/nodecue/aux/stop` | None |
| Fade Out AUX | `/nodecue/aux/fadeout` | Optional fade duration in milliseconds (integer 0-60000) |
| Set the AUX knob level | `/nodecue/aux/level` | Number (integer or float 0-1) |
| Set the AUX level in dB | `/nodecue/aux/leveldb` | Level in dB (integer or float <= 0), or `-inf` (string) |

GO uses the Playlist GO preference and the normal AUX/Playlist handoff transition.
Repeated GO does not restart an already open AUX. Input enable/device settings must
be configured first; GO never enables or reroutes an unavailable input.

Fade Out accepts 0 to 60000 ms. Omitting its duration uses the existing AUX
command fade duration (1000 ms by default), capped at 60000 ms.

Level uses the knob's 0-100% scale, not decibels: `0.5` means 50%.
Setting the level to zero keeps an open AUX open; raising it restores its sound.
Use Stop to close AUX. Values outside the stated ranges are rejected.
The external application's own playback remains unchanged.

Commands respect the same Backup read-only guard and Sync replication as local AUX controls.
Playlist Stop and Playlist Fade Out also close AUX. Dedicated AUX commands target
only AUX. Fade In, Mute and Unmute are not separate external commands; use GO and Stop.

## Global

Global Stop All and Global Fade Out affect all playback in the project, including lists that are no longer opened. Player-specific commands affect only that player's opened list. Bus controls act on the shared output bus.

| Action | OSC address | Arguments |
| --- | --- | --- |
| Stop all playback | `/nodecue/stopall` | None |
| Fade out all playback | `/nodecue/fadeoutall` | Optional fade duration in milliseconds (integer 0-60000) |

## Bus

OSC bus IDs:

- `1`: Cuelist bus
- `2`: Pads bus
- `3`: Playlist bus
- `4`: Monitor bus

| Action | OSC address | Arguments |
| --- | --- | --- |
| Toggle bus mute | `/nodecue/bus/mute/{id}` | None |
| Set the bus fader level | `/nodecue/bus/level/{id}` | Number (integer or float 0-1) |
| Set the bus level in dB | `/nodecue/bus/leveldb/{id}` | Level in dB (integer or float <= 0), or `-inf` (string) |
Bus level uses the fader's normalized 0-1 scale, not decibels. These are shared output buses; their level and mute affect every playback routed to them.

## Timecode

| Action | OSC address | Arguments |
| --- | --- | --- |
| Arm Timecode cue triggering | `/nodecue/timecode/arm` | None |
| Disarm Timecode cue triggering | `/nodecue/timecode/disarm` | None |

Arm and Disarm control cue triggering from the received Timecode. Disarm does not stop playback that has already started.

## List targeting

Each player can have only one list open at a time. Cuelist, Pads and Playlist commands target that player's opened list, regardless of which view is displayed. Cue, pad and track IDs are resolved within that list.

To open another list, use `/nodecue/cuelist/open/{listid}`, `/nodecue/pads/open/{listid}` or `/nodecue/playlist/open/{listid}`. `{listid}` is its Project Browser ID, for example `CL2`, `PS3` or `PL2`.

Opening a list does not launch playback or stop the previously opened list. An unknown ID or an ID belonging to another player is rejected. Global Stop All and Fade Out also cover playback in previously opened lists.

Disarm Timecode before opening another Cuelist. Opening a Cuelist does not arm Timecode.

## Levels in dB

`leveldb` accepts a finite numeric level up to 0 dB. For silence, send the OSC string `-inf`. Positive dB values, non-finite numbers and other strings are rejected. The optional press/release trigger follows the level argument. Setting a level does not change mute or transport state.

Bus, Monitor and AUX faders use the same curve: amplitude gain equals the square of the normalized fader value. Use `level` for a normalized fader position or `leveldb` for a level in decibels.

| Level in dB | Normalized fader value |
| --- | --- |
| 0 | 1 |
| -3 | 0.8414 |
| -6 | 0.7079 |
| -12 | 0.5012 |
| -20 | 0.3162 |
| Silence (-inf) | 0 |

## Examples

Go on the selected Cuelist cue:

```text
/nodecue/cuelist/go
```

Play cuelist cue ID `12.5`:

```text
/nodecue/cuelist/go/12.5
```

Play pad 7:

```text
/nodecue/pads/go/7
```

Stop all playback:

```text
/nodecue/stopall
```

Fade out all playback over 3 seconds:

```text
Address: /nodecue/fadeoutall
Argument: 3000
```

Open Cuelist CL2, then launch its selected cue:

```text
/nodecue/cuelist/open/CL2
/nodecue/cuelist/go
```

Go with Alt Go behavior using an argument:

```text
Address: /nodecue/cuelist/go/12.5
Argument: alt
```

Set Monitor to -12 dB:

```text
Address: /nodecue/bus/leveldb/4
Argument: -12
```

Set AUX to silence without closing it:

```text
Address: /nodecue/aux/leveldb
Argument: -inf
```
