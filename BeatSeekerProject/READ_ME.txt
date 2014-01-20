BeatSeeker requires Mac OS X.

Place the MaxExternals in to the Max file path 
(suggested: Applications->Max->Cycling'74->max-externals)

Use the current beatseeker~.mxo object

the beatseeker_v1.1~ is for instance older.


WARNING - potentials bug - opening beatseeker2.als straight seems to cause bug but opening it after having another max for live patch going is fine. Need to investigate this.


_ _ _ _ 
Instructions:

Open Live and the project.

use the Max window (right click on the BeatSeeker5.amxd device) to check that the object loads okay.


Testing:
try using the "recorded" setting, click "open" to open a wav file and "play" to start. Then use the controls below to launch live, tap tempo to launch in time with the track.

Use the "live input" to sync Live to a band.


Controls:

tap: sets the beat to NOW
second tap sets the tempo to the interval between taps

Live's tap tempo can also be used to cure Live to enter (as usual) and beatseeker~ will start with the same tempo.

The "tap" button in the device is useful for when you want to set the beat tracker's rate once Live is playing.

best_guess : has a go at guessing the tempo and sets the beat to NOW
this could be useful one tap function to set it off. Often for rock the tempo is pretty clear.

jump_to_downbeat : tells Live to adjust so that the nearest is on the ONE

click latency: there will be some difference between the time for Live's click (almost immediate) and an external kick event that needs to go through the audio buffer. A setting of +10 sec, compensates by adding ten sec to Live's click time, thereby making Live 10 sec later. A negative setting will bring Live forward with respect to external audio. A simple test might be feed the click of live back in to itself and find the optimal setting where there is no speeding up or slowing down. then there is no net latency. This will depend on individual buffer settings.



Dev ideas:

tempo before live has started - should we see that?

We currently show how the tap tempo has adjusted the internal tempo for the beat tracker, but it subsequently does some tracking (so tempo might drift but it is also tracking, so useful)

Look at using tap tempo during a song. Should not be too hard.

Check underlying tempo does not change too quickie - eg in a breakdown, if we start losing the pulse, there could be a tempo swing. Whilst this is partially prevented at present, could be looked at further.
