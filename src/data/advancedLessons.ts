import type { Lesson } from '../types'

export const ADVANCED_LESSONS: Lesson[] = [

  // ─── TRACK 2: MECHANICS MASTERY ─────────────────────────────────────────────

  {
    id: 'pick-and-roll',
    title: 'The Pick and Roll',
    emoji: '🔄',
    category: 'Advanced Offense',
    track: 2,
    tagline: 'The most-run play in basketball history',
    chapters: [
      {
        title: 'How the Pick and Roll Works',
        content: `The pick and roll — also called the "ball screen" — is the single most-run play in the history of basketball at every level, from youth leagues to the NBA Finals. It is a two-player action that creates a mathematical problem for the defense: one screen, four possible defensive responses, and a correct offensive read for each one.

The mechanics: The ball handler dribbles toward a stationary teammate (the screener). The screener plants their feet wide, makes solid body contact with the ball handler's defender, and creates a wall. The ball handler "comes off" the screen — rubbing their shoulder against the screener's body to maximize the separation created. After setting the screen, the screener immediately "rolls" toward the basket with their hands up ready to catch (or "pops" to the perimeter if they are a 3-point shooter).

Why it creates an unsolvable problem: The screen creates a situation where the screener's defender must decide in a fraction of a second: do I stay with my player (the screener) and let the ball handler run free, or do I step out to slow the ball handler and leave the screener open? There is no defensive choice that covers both players simultaneously. This is why every NBA team runs pick-and-roll actions dozens of times per game.

The screener's responsibility: Set the screen on the ball handler's DEFENDER — not the ball handler. Your shoulder should make contact with the center of the defender's body. Feet wider than shoulder-width. Body completely vertical — no leaning. Once you make contact, explode into the roll immediately. Sprint toward the basket with your hands up. If you roll slowly or casually, the defense has time to recover.

The ball handler's responsibility: Time your approach so you arrive at the screen when the screener is fully set. "Rub" the screen — stay as close to the screener's body as possible so the defender cannot squeeze through the gap between you and the screen. Then read the coverage and make the correct decision.`,
        videoUrl: 'https://www.youtube.com/results?search_query=pick+and+roll+basketball+reads+tutorial',
        videoTitle: 'Pick and Roll Reads Tutorial',
      },
      {
        title: 'Reading All Four Defensive Coverages',
        content: `Every defensive coverage on the pick and roll has a specific correct read. This is what Stockton and Malone meant when coaches said they "ran the same play a thousand times" — the play was the same, but the read was different every time based on how the defense lined up.

Coverage 1 — Hard Hedge (Big Steps Out Aggressively): The screener's defender jumps out above the screen to cut off the ball handler's path. This is the most common coverage in modern basketball. Your read: the rolling screener's defender has just left their player. Pass immediately to the rolling screener who has a clear path to the basket. The timing must be crisp — pass it before the hedging defender can recover.

Coverage 2 — Drop Coverage (Big Drops to Protect the Rim): The screener's defender drops back, protecting the basket, while the ball handler's defender fights through the screen. Your read: they are giving you the mid-range or 3-point jumper. Come off the screen and immediately pull up for the open shot at the free throw line or beyond. This is why great pick-and-roll ball handlers are also great pull-up shooters — the open pull-up is the counter.

Coverage 3 — Switch (Defenders Trade Assignments): Both defenders call "switch!" and trade their assignments. Your read: you now have the screener's defender on you (typically a larger, slower player). Attack this mismatch aggressively — drive the big, post them up, or isolate and score. Alternatively, call a post-up for the screener who now has the ball handler's defender (a smaller, slower player in the post).

Coverage 4 — Blitz/Trap (Both Defenders Crowd the Ball Handler): The most extreme coverage. Two defenders collapse on the ball handler. Your read: one of your teammates is wide open. Your job is to find them before the trap tightens. Usually, it is the screener rolling to the basket or a player who has relocated. This is a 5-on-3 situation if you make the right decision — do not waste it by hesitating or panicking.`,
      },
    ],
    quiz: {
      question: 'When the defense "hedges" hard on a pick and roll, what is the correct read?',
      options: [
        { text: 'Drive hard past the hedging defender', correct: false },
        { text: 'Pull up for a mid-range immediately', correct: false },
        { text: 'Pass to the rolling screener who is now open at the basket', correct: true },
        { text: 'Reset and run the play again', correct: false },
      ],
    },
    xpReward: 55,
  },

  {
    id: 'post-moves',
    title: 'Post Moves & Footwork',
    emoji: '🦶',
    category: 'Advanced Offense',
    track: 2,
    tagline: 'Inside power that cannot be stopped',
    chapters: [
      {
        title: 'The Art of the Post Game',
        content: `Post moves are the most technically demanding skill set in basketball — and the most valuable in youth and high school basketball where physical mismatches are common. As an SG/SF, developing post skills means that when a smaller player guards you, you can post them up and score automatically. It also means that as you grow, your game expands downward while maintaining your perimeter skills.

Establishing post position: Before the ball arrives, you must establish where you want to catch it. Plant your inside foot on or near the block. Use your back to feel where the defender is and make yourself as wide as possible. Get your hands up as a target — show the passer where to throw. A player who catches the ball in the wrong spot — too far from the basket, too close to the help defense, out of their ideal shooting or finishing range — starts the possession already compromised.

Reading the defender: The moment the ball is in your hands, stop. Do not immediately attack. Take one second to feel exactly where the defender's pressure is coming from. This is not hesitation — this is intelligence. The pressure tells you where to go. Defender pushing you baseline? Take the baseline. Defender pressing you toward the middle? Take the middle. Defender directly behind you? Drop step in either direction. The defense is always revealing the correct move. Your job is to read it.

The physical positioning battle: Post play is physical. Defenders will push, hold, bump, and grab to try to move you off your spot. You must hold your ground with wide feet, low hips, and a strong base. Use your body — legally — to shield the ball. You will get bumped every possession. The ones who succeed are the ones who do not move their pivot foot and do not panic under physical contact.`,
        videoUrl: 'https://www.youtube.com/results?search_query=hakeem+olajuwon+post+moves+tutorial+dream+shake',
        videoTitle: 'Post Move Footwork Tutorial',
      },
      {
        title: 'The Essential Post Moves',
        content: `Every post player needs a primary move, a counter to the primary, and a face-up option. These three tools cover every defensive scenario and make you unpredictable.

The Drop Step — Primary Move: Catch on the right block with the defender behind you. They are leaning or pushing you toward the baseline. Plant your left foot (the inside foot), swing your right foot behind the defender (the "drop step"), and power toward the basket with the defender on your back. This is a pure power move — you are stepping THROUGH the defender's defensive position with your body shielding the ball.

The Up-and-Under — Primary Counter: This works ONLY when the drop step is established. Fake the drop step completely — committed, full-speed. The defender bites and jumps over your back. Step THROUGH in the opposite direction while they are in the air and finish with a soft scoop or short pull-up. The counter cannot exist without the primary — you must show the drop step first.

The Face-Up — Versatility Move: Catch in the mid-post or high post. Pivot to face the basket (in either direction — choose based on where the defender's foot is). Now you are in triple threat from 10-15 feet, and you have size on the defender. Read: if they step back, shoot. If they crowd, drive. If they overplay one direction, go the other. The face-up game is where your perimeter skills and post positioning combine — it is your most dangerous position as an SG/SF because most defenses are not prepared for it.

Hakeem Olajuwon's Dream Shake: The greatest post player in history used a series of pump fakes, pivots, and directional changes to completely freeze defenders. His principle: every single fake must be a REAL fake — 100% committed, no hesitation, no "half-fake." A real fake freezes the defender. A half-fake does nothing. Build your fakes the same way you build your real moves: with complete commitment to each one.`,
      },
    ],
    quiz: {
      question: 'In the post, if the defender is pushing you toward the baseline, what is the correct move?',
      options: [
        { text: 'Push back toward the middle', correct: false },
        { text: 'Take the baseline direction they are giving you with a drop step', correct: true },
        { text: 'Always spin to the middle regardless of pressure', correct: false },
        { text: 'Pass out of the post immediately', correct: false },
      ],
    },
    xpReward: 60,
  },

  {
    id: 'shot-creation',
    title: 'Creating Your Own Shot',
    emoji: '💫',
    category: 'Advanced Offense',
    track: 2,
    tagline: 'Make a shot when no shot is given',
    chapters: [
      {
        title: 'The Step-Back and Euro Step',
        content: `Shot creation is the ability to manufacture a high-quality shot against a set defense without help from a screen or a play. It is what makes elite scorers elite — they can score whenever they need to, not just when the offense creates them an opening.

The Step-Back Jumper: The most dangerous move in modern basketball. You drive hard at the defender, creating their forward momentum. At the last moment, plant your lead foot explosively and push BACKWARD — two steps back, already in your shooting motion. The defender's momentum carries them toward you while you are stepping away. By the time they stop and recover, you have already released.

Why it requires setup: A step-back with no preceding drive attempt is simply a difficult shot taken from further back. The move works because the drive establishes the defender's commitment to stopping the drive. Show the drive 2-3 times per game to force the defender to respect it. Then, when they are leaning forward in anticipation, use the step-back. The contrast is what creates space.

James Harden, Luka Doncic, Kevin Durant: Three of the best modern scorers built entire offensive arsenals around the step-back. Study their footwork specifically — the plant and the push-back are explosive and precise. The step-back is not a slow, casual move backward. It is a violent, athletic explosion in the opposite direction.

The Euro Step: Drive at the basket from the wing. Take your first step in the expected direction — this commits the defender's momentum. Take your second step in a completely different direction, around the defender's body. Finish the layup from the new angle. Manu Ginobili popularized this in the NBA; it is now standard at every level. The key: both steps must be at game speed. A slow Euro step gives the defender time to adjust. At full speed, the defender's body cannot change direction fast enough.`,
        videoUrl: 'https://www.youtube.com/results?search_query=step+back+jumper+euro+step+basketball+tutorial',
        videoTitle: 'Step-Back and Shot Creation Tutorial',
      },
      {
        title: 'The Floater and Pull-Up Jumper',
        content: `The floater and pull-up jumper complete the shot-creator's arsenal. Together with the step-back and Euro step, they give you an answer for every defensive situation you will face.

The Floater: When you drive into the lane and a shot-blocking center is protecting the rim, the standard layup gets blocked. The floater is your solution — a high-arc shot released from 5-8 feet before the basket, before the shot-blocker can time their jump. You plant your inside foot, push the ball high in a scooping motion with your shooting hand, and let it drop softly into the basket from above the defender's reach.

Tony Parker's floater was virtually unguardable in his prime because he released it so quickly and at such a difficult angle. The shot-blocker was always a half-second late — Parker had already released before they could elevate. Practice the floater from both sides, on the move, at game speed. The touch required (soft enough to drop in, hard enough to reach the basket) develops only through repetition.

The Pull-Up Jumper: Stop on a dime from a full dribble and shoot. The footwork of the stop is the entire skill — your body is traveling at speed and must decelerate into a stable shooting platform in one fluid motion. The "1-2 step stop": your inside foot plants (1) and your outside foot comes up alongside it (2), instantly in your shooting stance. The gather must be low enough that your knees are bent upon stopping, giving you immediate power to rise.

Players who use the pull-up poorly do so because they stop upright — no knee bend on the stop. The result is a flat, arm-only shot that misses short or clangs off the front of the rim. Stop low, knees bent, and rise up into the shot. The deceleration and acceleration into the shot must feel like one smooth motion, not a stop-then-shoot.`,
      },
    ],
    quiz: {
      question: 'Why must you establish the drive BEFORE using the step-back?',
      options: [
        { text: 'Step-backs are only legal after a drive', correct: false },
        { text: 'The drive makes the defender commit forward, which creates the space the step-back needs', correct: true },
        { text: 'It does not matter — the step-back works regardless', correct: false },
        { text: 'Coaches only allow it after driving attempts', correct: false },
      ],
    },
    xpReward: 65,
  },

  {
    id: 'advanced-defense',
    title: 'Advanced Defensive Principles',
    emoji: '🛡️',
    category: 'Advanced Defense',
    track: 2,
    tagline: 'Defense is a system, not just effort',
    chapters: [
      {
        title: 'Help Defense and Team Concepts',
        content: `Individual defense stops individual players. Team defense stops offenses. The best defensive teams in NBA history — the Jordan-era Bulls, the Spurs, the Warriors — won because every player understood the team defensive scheme and executed it with precision.

Help-side positioning: When you are not guarding the ball, you are in "help-side" position. This means you are standing in a spot where you can see both your assigned player AND the ball simultaneously. Your body is angled to keep both in view. You are one step off the passing lane (so you can deny) but close enough to help if the ball handler drives. The "ball-you-man" triangle is the mental image — you are the middle of a triangle with the ball and your player at the two ends.

When to help and when to stay: When the ball handler beats their defender off the dribble, you must decide instantly: help or stay? Help means leaving your player to step in front of the drive. Stay means trusting your teammate to recover. The correct answer depends on: how dangerous your assigned player is (an open 3-point shooter in the corner demands you stay), how bad the drive is (a clear path to the basket demands you help), and what your team's defensive scheme calls for.

The help-and-recover: When you leave your player to help on a drive, you must recover IMMEDIATELY to your player once the ball is passed. This help-and-recover cycle — help on the drive, recover when the ball leaves — is the foundation of team defense. Players who help but do not recover leave shooters open. Players who recover but did not help properly give up easy baskets. Both parts of the cycle are mandatory.

Taking charges: One of the most undervalued plays in basketball. Step in front of a driving player, establish your feet before they leave the ground on their final step, and absorb the contact by leaning back and going to the floor. The official awards the charge: ball goes to your team, foul goes on the offensive player. Teams that consistently take 3-4 charges per game are essentially getting free possessions. The courage and correct technique to take charges defines elite defensive teams.`,
        videoUrl: 'https://www.youtube.com/results?search_query=advanced+basketball+help+side+defense+tutorial',
        videoTitle: 'Help-Side Defense and Team Defensive Principles',
      },
      {
        title: 'Switching, Trapping, and Pressure Defense',
        content: `Modern basketball demands defensive versatility. The pick-and-roll, off-ball screens, and complex spacing force defenses to communicate and switch constantly. Understanding how to defend all these situations makes you an elite defender at any level.

Switching on screens: When your teammate's player sets a screen on you, you have the option to switch — you take their player, they take yours. The switch must be communicated LOUDLY and early: "Switch!" before the screen makes contact, so your teammate is already turning to guard your original player. Silent switches result in the offense being completely uncovered for a moment.

After the switch: The moment you call switch and take the new assignment, engage them at arm's length immediately. Never give a receiver space after a switch — they will catch and shoot before you close. One arm's length of space while you take stock of the situation. Then tighten your coverage.

Trapping the pick-and-roll: When both defenders crowd the ball handler simultaneously at the screen, this creates a trap. The goal is a rushed, panicked pass. Your two defenders must communicate to arrive simultaneously — one arriving before the other lets the ball handler escape the side of the late defender. Traps work when they are perfect. They backfire when they are sloppy.

Full-court pressure: When you apply pressure on the ball from baseline to baseline, you are trying to force turnovers before the offense can run a play. Effective pressure requires every player playing higher-intensity defense than normal and communicating on every trap and rotation. Pressure loses its effect immediately when players rest — the moment one defender lets up, the press is broken. Press defense is a conditioning statement as much as a tactical one.`,
      },
    ],
    quiz: {
      question: 'What is "help-side" positioning in basketball defense?',
      options: [
        { text: 'Standing directly behind your assigned player', correct: false },
        { text: 'Positioning where you can see both the ball and your player to help when the drive comes', correct: true },
        { text: 'Always guarding the closest player to the basket', correct: false },
        { text: 'Doubling the ball handler every possession', correct: false },
      ],
    },
    xpReward: 55,
  },

  // ─── TRACK 3: SYSTEMS & OFFENSES ────────────────────────────────────────────

  {
    id: 'triangle-offense',
    title: 'The Triangle Offense',
    emoji: '🔺',
    category: 'Team Systems',
    track: 3,
    tagline: '11 championships. One offense.',
    chapters: [
      {
        title: 'The Architecture of the Triangle',
        content: `Phil Jackson used the Triangle Offense to win 11 NBA championships — 6 with the Chicago Bulls and 5 with the Los Angeles Lakers. No other coach has come close to that number. No other offensive system has won that many. The Triangle is not a collection of plays. It is a decision-making framework.

The core structure: Three players form a triangle on one side of the court — one player in the corner, one on the wing, one in the post (or at the block). Two players fill the weak side. The triangle creates passing angles to every area of the court simultaneously, making it impossible for the defense to take away all options at once.

The sideline triangle positioning: The post player is at the block. The wing player is at the elbow (15 feet from the post). The corner player is in the corner, 15 feet from the wing. Each player is approximately 15 feet from their triangle neighbor — far enough that one defender cannot guard two, close enough to pass to each other easily.

Why no play caller is needed: Unlike most offenses where a coach or point guard dictates every action, the Triangle tells players to read the defense and make the correct decision based on what they see. The post player reads: if the defender is behind me, drop step. If the double team comes, pass to the open perimeter player. The wing reads: if my defender leaves to double, I shoot. If they stay, I pass to the open corner. Every read has a correct answer. Players learn the reads, and the offense runs itself.

The role of basketball intelligence: Phil Jackson chose the Triangle partly as a personnel filter. The system requires high basketball IQ from every player — not just the star. When he installed it with the Bulls, Michael Jordan initially hated it because it limited his individual ball-handling. Jackson convinced Jordan that the system would make him MORE dangerous — because defenders could not key exclusively on him. Jordan learned the system, trusted it, and won 6 championships.`,
        videoUrl: 'https://www.youtube.com/results?search_query=triangle+offense+explained+basketball+phil+jackson',
        videoTitle: 'Triangle Offense Explained',
      },
      {
        title: 'Running the Triangle — Decision-Making',
        content: `The Triangle's reads are specific and learnable. Understanding them transforms you from a player who runs plays into a player who understands why offense works.

The post entry and reads: The triangle begins when the ball enters the post. The post player catches and immediately reads their defender: (1) Defender behind you — drop step baseline or middle, finish. (2) Defender beside you — face up and attack from close range. (3) Defense doubles — the double team means two of your four teammates are open. Find the open player before the defense recovers. (4) Defender steps out — drop the ball to the cutter sneaking behind them.

The dribble-entry read: When the ball handler dribbles toward the post player (a "dribble entry"), the post player reads this as a signal to cut away from the ball. This creates movement and forces the defense to choose: follow the post player cutting away, or help on the driving ball handler. Either choice creates an open player.

Weak-side reads: Two players are always on the weak side of the Triangle. They read the post action and move to fill gaps: if the post player scores, they fill positions. If the double team comes, the weak-side players are the targets of the kick-out pass. The weak-side players must be ready to shoot, drive, or pass immediately — their read must happen before the ball arrives.

Player movement principles: In the Triangle, the rule is simple: if you pass the ball, you move. If you hold the ball, you use it (drive, shoot, or pass and cut). Standing still after passing collapses the system — you must immediately cut to create a new action. This non-stop movement is why Triangle teams can often score even without specific plays — the movement itself creates opportunities.`,
      },
    ],
    quiz: {
      question: 'What made the Triangle Offense impossible to fully scout?',
      options: [
        { text: 'It had over 100 different set plays', correct: false },
        { text: 'It had no predetermined plays — decisions were based entirely on reading the defense in real time', correct: true },
        { text: 'Michael Jordan always controlled the ball', correct: false },
        { text: 'It only worked with the tallest players available', correct: false },
      ],
    },
    xpReward: 70,
  },

  {
    id: 'run-and-gun',
    title: 'Run & Gun Offense',
    emoji: '🏃💨',
    category: 'Team Systems',
    track: 3,
    tagline: 'Seven seconds or less. Every possession.',
    chapters: [
      {
        title: 'The Seven Seconds or Less Philosophy',
        content: `In 2004, the Phoenix Suns hired Mike D'Antoni as head coach and drafted Steve Nash with the Amaare Stoudemire already on the roster. The resulting offense — "Seven Seconds or Less" — changed basketball permanently by proving that pace and space could dominate even without a traditional post presence.

The principle: Shoot within seven seconds of gaining possession — every possession, every time, all 48 minutes. The reasoning: most defensive schemes are designed for half-court basketball. They have specific rotations, specific coverages, and specific positions for every player based on a deliberate, half-court offensive set. A team that attacks before the defense can set those positions exploits the gap between the defensive ideal and the defensive reality.

What seven seconds actually means: The clock starts the moment your team gains possession — a rebound, a steal, a made basket inbound. From that instant, you have seven seconds to get to a quality shot. A quality shot in this system is not any shot — it is an open shot from a spacing position, or a drive created before the defense can set their defensive assignments.

Steve Nash's role: Nash — a two-time MVP — was the perfect operator for this system. He was not the fastest player. He was not the most athletic. He was the most decisive. His ability to make the correct decision in 2 seconds, every time, against any defense, turned the system from a theory into a dynasty-level offense. Study Nash's decision-making specifically: he catches, surveys in one second, and delivers the perfect pass before a second has been wasted.

Why it exhausted defenses: Playing defense against a team that never lets you set up is physically and mentally exhausting. Defensive rotations require verbal communication, physical repositioning, and mental concentration. A team that attacks within 7 seconds forces all of that — setting rotations, communicating, physically running — to happen at a pace the defense cannot sustain for 48 minutes.`,
        videoUrl: 'https://www.youtube.com/results?search_query=phoenix+suns+seven+seconds+or+less+steve+nash',
        videoTitle: '7 Seconds or Less — Steve Nash Suns Offense',
      },
      {
        title: 'Pace, Space, and Decision Speed',
        content: `The Run and Gun requires three things from every player: pace (the physical ability to play fast), space (the positioning discipline to maintain spacing at high speed), and decision speed (the mental ability to read and react in under 2 seconds).

Pace — the physical demand: Running and gunning for 48 minutes is one of the most demanding things a basketball team can do physically. Players must sprint back on defense after every possession (misses AND makes), sprint in transition on every possession, and maintain defensive effort while executing offense at this speed. The D'Antoni Suns trained specifically for this pace — their conditioning work was designed around game-speed intensity, not traditional basketball workouts.

Space — the tactical discipline: At high pace, spacing breaks down easily. Players run to the wrong spots, crowd drives, and collapse the offensive structure. The 5-out spacing (corners, wings, top) must be maintained even during transition — players must know their spacing assignments and fill them at a sprint. A team that runs fast but loses its spacing has simply increased the pace of its turnovers.

Decision speed — the mental skill: The decision you take 4 seconds to make in half-court basketball must be made in 1.5 seconds in run-and-gun. This is not about being smarter — it is about having your reads so deeply trained that they are automatic. Nash could look at a defense and instantly see: "their help defender is one step too far left — drive and dish to the corner." That read took him a fraction of a second because he had trained it thousands of times.

The evolution into today's NBA: Every modern NBA team plays faster than pre-D'Antoni basketball. The Golden State Warriors combined Run and Gun pace with precision passing and 3-point shooting. The Houston Rockets took the analytics logic of Run and Gun (take fast, high-value shots) to its mathematical extreme. Understanding D'Antoni's Suns explains why the entire NBA looks the way it does today.`,
      },
    ],
    quiz: {
      question: 'What was the core principle of the "Seven Seconds or Less" offense?',
      options: [
        { text: 'Run only fast breaks and never set half-court plays', correct: false },
        { text: 'Shoot within seven seconds of getting the ball — every possession', correct: true },
        { text: 'Only the point guard is allowed to initiate offense', correct: false },
        { text: 'Play zone defense to save energy for offense', correct: false },
      ],
    },
    xpReward: 65,
  },

  {
    id: 'motion-offense',
    title: 'Motion Offense & Ball Movement',
    emoji: '🔄',
    category: 'Team Systems',
    track: 3,
    tagline: 'The ball moves faster than any defender',
    chapters: [
      {
        title: 'The Principles of Motion Offense',
        content: `Motion offense is the foundation of most youth, college, and professional basketball programs — and the basis for what the Golden State Warriors do at the NBA level. It teaches players to understand basketball principles rather than memorize plays. Players who grow up in motion offense become basketball thinkers, not basketball robots.

The five rules of motion offense: (1) Never stand still — if you do not have the ball, you are moving. (2) Every movement has a purpose — cut, screen, or relocate. (3) Pass and move — after passing, you immediately do something productive. (4) Read the defense — do not force a predetermined action, do what the defense gives you. (5) Find the extra pass — look for the teammate who is MORE open, not just open.

The "pass and cut" default: The simplest motion action. You pass the ball. Immediately after releasing it, you cut hard toward the basket. Your teammate hits you with a return pass for a layup — or, if they cannot, you fill a new spacing position on the weak side. This is the default action when nothing else is called. Pass and cut, pass and cut. The constant movement creates constant problems for the defense.

The importance of "the extra pass": The most revolutionary concept in motion offense. When a teammate is open, look for the teammate who is MORE open before shooting. A wide-open corner 3 is a good shot. The teammate who is completely alone because the defense over-helped on the drive is an even better shot. Taking the extra pass requires unselfishness — the willingness to give up a good shot for a great shot. The Warriors built their dynasty on the extra pass. Their offense is motion offense executed at the highest possible level.

Why coaches love motion offense: Set plays can be scouted and taken away. Motion offense reads — because it is based on reading the defense rather than running a predetermined sequence — cannot be taken away. A team that truly understands motion offense adapts to whatever defense throws at them.`,
        videoUrl: 'https://www.youtube.com/results?search_query=motion+offense+basketball+explained+principles',
        videoTitle: 'Motion Offense Basketball — Principles and Execution',
      },
      {
        title: 'Executing Motion Offense at a High Level',
        content: `Understanding motion offense principles is the first step. Executing them under game conditions — at speed, against physical defenders, with the game on the line — is the second step and the much harder one.

Cutting with purpose: Every cut in motion offense has a specific purpose and a specific destination. The backdoor cut punishes an overplaying defender. The V-cut creates separation for a catch. The post cut (from the perimeter to the block) exploits a mismatch. The flare cut (away from the basket, toward the corner) creates a spacing outlet. Know which cut is correct for each defensive situation — do not cut randomly. Random cutting moves bodies without creating advantages.

Screening discipline: Off-ball screens in motion offense must be set legally and precisely. An illegal screen (moving, leaning, extending arms) negates the entire action. A screen set at the wrong angle misses the defender entirely. The screener must read which direction their teammate will use them — curl? fade? straight? — and roll or pop accordingly. Screening is a discipline that takes weeks of practice to develop.

Five-out spacing in motion: When all five players are on the perimeter (5-out), the spacing creates maximum driving lanes and the maximum number of kick-out opportunities. This is the base structure of most motion offenses. From 5-out, any player can attack from any position — the offense is completely fluid and unpredictable.

The Golden State Warriors as the model: The Warriors run motion offense as precisely as any professional team in history. Study their ball movement — they average the most passes per game in the NBA consistently. Every pass is purposeful. Every player moves after passing. The result is open shots for whoever makes the correct read. This is motion offense at its highest expression.`,
      },
    ],
    quiz: {
      question: 'In motion offense, what should you do immediately after passing the ball?',
      options: [
        { text: 'Watch to see if your teammate makes a good play', correct: false },
        { text: 'Stay in your spot and wait for the ball to return', correct: false },
        { text: 'Immediately cut, screen, or relocate to a new position', correct: true },
        { text: 'Call out the next play to run', correct: false },
      ],
    },
    xpReward: 65,
  },

  // ─── TRACK 4: COACHING PHILOSOPHIES ─────────────────────────────────────────

  {
    id: 'phil-jackson',
    title: 'Phil Jackson — The Zen Master',
    emoji: '☯️',
    category: 'Coaching Legends',
    track: 4,
    tagline: '11 championships. One philosophy.',
    chapters: [
      {
        title: 'The Philosophy Behind 11 Championships',
        content: `Phil Jackson won 11 NBA championships as a head coach — more than any coach in professional basketball history. His secret was not the Triangle Offense, though that helped. It was not the talent of his rosters, though Jordan, Pippen, Shaq, and Kobe were extraordinary. His secret was a philosophy of human beings — how to get the most out of competitive athletes operating under enormous pressure.

Mindfulness and presence: Jackson studied Zen Buddhism, Native American philosophy, and sports psychology before he coached a single NBA game. He introduced mindfulness meditation to the Chicago Bulls in the early 1990s — elite athletes meditating before games was unheard of and considered bizarre at the time. Jackson believed that players who were fully present — not thinking about the last missed shot, not worrying about the upcoming press conference — performed better in high-pressure moments.

The practice: Before practice and games, Jackson had players sit in silence for 5-10 minutes. Eyes closed. Focus on breathing. When thoughts arose, acknowledge them and return to breath. The goal was not emptiness — it was presence. Players who mastered this practice reported that the game "slowed down" for them in crunch time, that decisions came more clearly, that panic was replaced by clarity.

The scientific backing: What Jackson intuited in the 1980s-90s has since been validated extensively by sports psychology research. The ability to focus attention on the present moment — to not be hijacked by anxiety about outcomes or regret about past mistakes — is one of the most powerful predictors of performance under pressure in any competitive domain.

Why it matters for you: You will miss shots in games. You will turn the ball over. You will get beaten off the dribble. The question is not whether these things happen — they happen to every player including Jordan and Kobe. The question is how fast you recover. The "next-play mentality" — the ability to immediately reset after a mistake — is a trainable skill that Phil Jackson made central to his coaching philosophy.`,
        videoUrl: 'https://www.youtube.com/results?search_query=phil+jackson+coaching+philosophy+zen+master+basketball',
        videoTitle: 'Phil Jackson — Coaching Philosophy and Leadership',
      },
      {
        title: 'Trust, Ego, and Championship Culture',
        content: `Jackson's most remarkable coaching achievement was not winning championships. It was winning them with rosters that included Michael Jordan, Kobe Bryant, Dennis Rodman, and Shaquille O'Neal — four of the largest personalities and egos in sports history. Managing these personalities was, in many ways, a harder challenge than any offensive or defensive scheme.

Trust in every player: Jackson ran the Triangle Offense in part because it required EVERY player to be trusted with the ball in important moments. A system where only Michael Jordan or only Kobe Bryant made decisions makes those teams easier to defend — shut down one player, shut down the team. A system where John Paxson, Steve Kerr, and Robert Horry could hit game-winning shots because the system TRUSTED them with those shots — that team is impossible to shut down.

Handling superstar egos: Jackson never publicly criticized Jordan or Kobe. He held them accountable in private, consistently and without exceptions. When Jordan complained about not getting enough touches in the Triangle, Jackson met with him privately and showed him the statistics — Jordan was more efficient within the Triangle than out of it. The evidence, not the argument, changed Jordan's mind.

The sacred hoop — team above individual: Jackson's most famous book is "Sacred Hoops." His central message: a basketball team at its best is not five individuals cooperating — it is a single organism with five separate minds and one unified purpose. The team's achievement is the individual's achievement. Dennis Rodman was worth more as the world's most committed rebounder and defender within a team than as an individual scorer chasing his own highlights. Jordan was worth more as the centerpiece of a team system than as an individual scorer playing isolation basketball.

Your takeaway: Phil Jackson teaches that competitive excellence and personal unselfishness are not opposites. The most competitive players, in the most competitive situations, win by being the best teammates. Sacrifice for the team is not a compromise of your competitive drive — it IS your competitive drive, properly directed.`,
      },
    ],
    quiz: {
      question: 'What was Phil Jackson\'s central belief in "Sacred Hoops"?',
      options: [
        { text: 'The best player should control every possession', correct: false },
        { text: 'Only defense and rebounding win championships', correct: false },
        { text: 'A team at its best is a single organism — team achievement is individual achievement', correct: true },
        { text: 'Running set plays eliminates individual decision-making errors', correct: false },
      ],
    },
    xpReward: 80,
  },

  {
    id: 'gregg-popovich',
    title: 'Gregg Popovich — The Standard',
    emoji: '🏆',
    category: 'Coaching Legends',
    track: 4,
    tagline: 'Culture is the system.',
    chapters: [
      {
        title: 'The Spurs System and Ball Movement',
        content: `Gregg Popovich has coached the San Antonio Spurs to 5 NBA championships and is widely considered the greatest coach in NBA history. Unlike Phil Jackson's mystical Zen approach, Popovich's coaching philosophy is blunt, honest, and relentlessly practical. His results speak louder than any philosophy.

Ball movement as a moral statement: The Spurs under Popovich were famous for averaging 300+ passes per game — roughly double the league average. This was not a tactical choice alone. It was a values statement. Popovich believes that unselfishness — finding the better shot rather than taking the good one — is both the right way to play basketball and the right way to compete. The principle: "Take what the defense gives you, and when the defense gives you a good shot, take one more pass for the great shot."

Building culture over talent: Popovich consistently outperformed teams with more talented rosters. In 2014, the Spurs dismantled the Miami Heat — LeBron James, Dwyane Wade, and Chris Bosh — in a Finals widely considered the most beautiful offensive performance in NBA history. The Spurs won not because they were more talented. They won because 15 players executing a system with perfect unselfishness beat three stars operating as individuals.

The Spurs way — accountability without excuses: Popovich holds every player, including Tim Duncan and Tony Parker, to the exact same standard. When Duncan committed a foul he should not have committed, Popovich called it out in the film session, in front of the team. Equal accountability creates a culture where nobody — not the franchise player, not the rookie — gets a free pass. This environment, paradoxically, creates deep loyalty. Players trust a coach who is consistently fair.

Why international players thrived: Popovich was decades ahead of the league in recognizing and developing international talent. Tony Parker (French), Manu Ginobili (Argentine), and dozens of others were not chosen for their athleticism — they were chosen for their basketball IQ, their unselfishness, and their skill. Popovich believed that players who had been taught the fundamentals of the game in different basketball cultures often had better basketball minds than highly athletic American players who had been told their talent would carry them.`,
        videoUrl: 'https://www.youtube.com/results?search_query=gregg+popovich+coaching+philosophy+leadership+interview',
        videoTitle: 'Gregg Popovich — Coaching Philosophy and Culture',
      },
      {
        title: 'Lessons from the Spurs for Every Player',
        content: `The San Antonio Spurs won 5 championships over 15 years with completely different rosters. The only constant was Popovich and the culture he created. This longevity — maintaining excellence through decades and personnel changes — is the most remarkable achievement in modern NBA history.

Process over outcome: Popovich cares how you play, not just whether you win. A team that plays correctly and loses teaches him more — and teaches the players more — than a team that wins sloppily. He believes that if the process is right (the right decisions, the right execution, the right effort), the outcomes take care of themselves. Players who are obsessed only with winning tend to take shortcuts; players who are obsessed with getting it right develop.

Honest communication: Popovich is famous for his blunt honesty. In his press conferences, with players, with the media — he says exactly what he thinks without softening it for comfort. Players who thrive in his system appreciate that there is no ambiguity: he tells you directly what you did wrong and what you need to do better. Players who need constant encouragement and gentle feedback struggle. You choose which kind of player you want to be.

"Our team needs you to do THIS": Popovich's consistent message to every player — from Duncan to the 15th man — is specific and role-defining: "Our team needs you to do this specific thing. If you do this thing at the highest level, we win. That is your championship contribution." This specificity removes the ambiguity and excuse of "not knowing my role." Every Spur knows exactly what is expected, exactly why it matters, and exactly how it contributes to winning.

Your standard: Popovich's teams maintain the same standard in November as in Game 7 of the Finals. They execute the same way in the fourth quarter of a blowout loss as in a one-point game. The standard does not change with the situation. Build your own standard — in practice, in games, in losses — and hold it regardless of the moment. That consistency over a season is what separates good players from championship-caliber players.`,
      },
    ],
    quiz: {
      question: 'What principle separated Popovich\'s Spurs offense from other teams?',
      options: [
        { text: 'They always ran the same play for Tim Duncan', correct: false },
        { text: 'They passed up good shots to take great shots — one more pass every time', correct: true },
        { text: 'They ran the fastest pace in the league', correct: false },
        { text: 'They shot more 3-pointers than any other team', correct: false },
      ],
    },
    xpReward: 80,
  },

  // ─── TRACK 5: THE GAME'S EVOLUTION ──────────────────────────────────────────

  {
    id: 'nba-eras',
    title: 'NBA Eras — How the Game Changed',
    emoji: '📅',
    category: 'Basketball History',
    track: 5,
    tagline: 'Understand the past to master the present',
    chapters: [
      {
        title: 'From Centers to Guards — The First 50 Years',
        content: `Basketball has transformed more dramatically in its 130-year history than any other major sport. Understanding this transformation explains why the game looks the way it does today — and gives you a framework for understanding how it might change again in your lifetime.

The Original Game (1891 — 1950s): James Naismith invented basketball in 1891 with 13 rules, two peach baskets, and a soccer ball. The early professional game in the 1940s-50s was dominated entirely by big men. George Mikan — 6'10", dominant in the post — was so individually superior that the NBA widened the lane from 6 to 12 feet specifically to limit his dominance. This would happen again with Wilt Chamberlain. The 3-point line did not exist. The game was slow, physical, and built around one player doing damage near the basket.

The Showtime Era (1970s-80s): Magic Johnson and Larry Bird revolutionized basketball not with athleticism but with basketball intelligence and team play. Magic — 6'9" and a point guard — combined size with court vision that had never been seen. Bird — white, slow by athletic standards — made every teammate around him better with passing and positioning. They took basketball from a big-man game to a team sport. Julius Erving (Dr. J) added aerial athleticism and creativity that changed what players attempted. Michael Jordan emerged as the transition to the next era — combining Bird's competitiveness, Magic's court awareness, and unprecedented individual athleticism.

The Physical Era (1990s): The Bad Boy Pistons under Chuck Daly made contact the defensive standard. Hand-checking — defenders placing a hand on the ball handler's hip to control their movement — was legal and universal. The physical style made penetration harder, rewarded bigger, stronger guards, and made Shaquille O'Neal almost unstoppable inside. Jordan won in this era because he was strong enough to survive the contact and skilled enough to finish through it.

The Opening (2004 — present): Rule changes in 2004 eliminated hand-checking and introduced new offensive protection rules. Overnight, the lane opened. Quick, skilled guards who had been physically manhandled could now showcase their skills. Nash, Gilbert Arenas, Dwyane Wade — players who might have been dominated in the physical era — flourished. International players who had been taught skill over physicality proved to be perfectly suited for the new rules.`,
        videoUrl: 'https://www.youtube.com/results?search_query=NBA+history+evolution+basketball+eras+documentary',
        videoTitle: 'The Evolution of NBA Basketball — All Eras',
      },
      {
        title: 'The Modern Revolution and What It Means for You',
        content: `The period from 2010 to today represents the most dramatic change in basketball strategy since the game was invented. Understanding the analytics revolution and the 3-point evolution explains everything about how the modern game is played and what skills you should prioritize developing.

The analytics revolution (2010s): Teams began hiring statisticians and data scientists to analyze which actions produced the most points per possession. The findings were surprising and, for some traditionalists, unwelcome: the most efficient shots in basketball are corner 3-pointers and layups. The least efficient shots are mid-range pull-up jumpers between 16-22 feet. This statistical reality has driven every major strategic change in the modern game.

The Stephen Curry effect: Curry proved that a player with historically elite shooting could extend the value of 3-point shooting beyond the corner — that a 40% shooter from 27 feet generates more expected points than a 47% shooter from 22 feet. His play forced every defense in the league to guard the perimeter 5+ feet further from the basket than before, opening driving lanes for everyone. One player changed the geometry of basketball defense for the entire sport.

Pace and space: The combination of (1) faster pace (pushing before defenses set) and (2) spread spacing (shooters in all five positions) creates the most efficient offensive conditions in basketball history. Teams score more points per 100 possessions today than at any point in NBA history. The game has become more skilled, more open, and faster.

What this means for your development: At 8 years old, your investment priorities should reflect where the game is and where it is going. Corner 3-pointers and straight-line drives to layups are the two highest-value shot types at every level. Developing shooting range and 3-point accuracy is a long-term investment that pays off enormously as you grow. Understanding the "why" behind these priorities helps you practice with purpose rather than just following instructions.`,
      },
    ],
    quiz: {
      question: 'What was the biggest rule change that created the modern spacing-focused NBA?',
      options: [
        { text: 'Adding the 3-point line in 1979', correct: false },
        { text: 'Eliminating hand-checking in 2004, opening the lane for skill players', correct: true },
        { text: 'Expanding the shot clock from 30 to 24 seconds', correct: false },
        { text: 'Adding a fourth referee to every game', correct: false },
      ],
    },
    xpReward: 85,
  },

  {
    id: 'analytics-revolution',
    title: 'Analytics & The 3-Point Revolution',
    emoji: '📊',
    category: 'Basketball History',
    track: 5,
    tagline: 'Numbers changed everything',
    chapters: [
      {
        title: 'How Data Transformed Basketball Strategy',
        content: `In the early 2010s, teams began applying data science to basketball at an unprecedented scale. The Houston Rockets under GM Daryl Morey led this movement, using expected value calculations to determine which shots created the most points per attempt. The conclusions reshaped basketball strategy everywhere from the NBA to youth leagues.

Expected value per shot: Every shot type in basketball has an expected value — the average points it produces per attempt based on shooting percentages. The analysis: Corner 3-pointers (average 38% shooting × 3 points = 1.14 expected points per attempt). Layups and dunks (55-65% × 2 = 1.1-1.3 expected points). Mid-range pull-up jumpers (40% × 2 = 0.8 expected points). The mid-range is significantly less efficient than either the 3-pointer or the layup.

The death of the mid-range: For the Jordan generation, the mid-range pull-up was the premier offensive weapon. Jordan's 16-foot baseline fadeaway. Kobe's step-back from the elbow. These were signature shots of the greatest scorers ever. Analytics showed they were also the least efficient shots those players attempted. Teams that stopped taking mid-range shots and replaced them with corner 3s scored more points — even when the players were shooting slightly worse percentages from 3.

The Rockets' extreme application: Under Morey, the Rockets applied this logic to its most extreme conclusion: they essentially eliminated the mid-range entirely. James Harden went entire seasons shooting zero intentional mid-range shots. He took 3-pointers or drove to the basket. The strategy worked — Houston became one of the most efficient offensive teams in NBA history. They also demonstrated that the logic has limits: elite execution of "worse shots" can outperform mediocre execution of "better shots."

The broader lesson: Analytics does not replace skill. It informs how skill should be prioritized and applied. A player who is mediocre at corner 3s does not benefit from taking more of them. But a player who develops elite shooting from the corner and elite finishing at the basket — the two highest-value skills in the modern game — maximizes the return on their developmental investment.`,
        videoUrl: 'https://www.youtube.com/results?search_query=basketball+analytics+revolution+3+point+explained',
        videoTitle: 'The 3-Point Revolution and Analytics in Basketball',
      },
      {
        title: 'What Analytics Means for Young Players',
        content: `The analytics revolution changes how you should think about skill development. You are growing up in a data-informed basketball world. Understanding the data helps you make smarter choices about where to invest your practice time.

The skills that analytics validates: Corner 3-point shooting. Straight-line drives finishing at the basket (layups and floaters). Free throw shooting. These three areas represent the highest expected-value plays at every level. If you spend 60% of your shooting practice on these three areas, you are investing in the most valuable skills in the modern game.

The skills analytics does not eliminate: Mid-range shooting still matters — in game situations where the clock is running down, where spacing prevents a 3, or where a mid-range pull-up is the best available option among bad options. The analytics argument is that mid-range should not be a primary offensive tool. It does not argue that mid-range should never be used. Elite players like Kawhi Leonard and Kevin Durant have shown that mid-range excellence, combined with 3-point range and finishing ability, creates a complete and devastating offensive game.

Shot selection as a habit: The goal of understanding analytics is not to become a robot who only takes "approved" shots. It is to develop good shot selection as an automatic habit — to recognize in real time when a shot is a good value versus a low value, and to consistently choose the higher-value option. This judgment, built through years of intentional practice, becomes one of your most important basketball skills.

Your development priority list: (1) Layup finishing with both hands (highest value, most fundamental). (2) Corner 3-point shooting (highest value among 3s). (3) Free throw shooting (uncontested, always available). (4) Wing 3-point shooting (high value). (5) Floater and pull-up from free throw line (addresses the gap between the rim and the 3). (6) Mid-range as a complement, not a primary weapon. Build in this order. Be patient.`,
      },
    ],
    quiz: {
      question: 'According to basketball analytics, which two shot types have the highest expected value?',
      options: [
        { text: 'Mid-range jumpers and post-up shots', correct: false },
        { text: 'Wing 3-pointers and half-court shots', correct: false },
        { text: 'Corner 3-pointers and layups/dunks', correct: true },
        { text: 'Free throws and step-back jumpers', correct: false },
      ],
    },
    xpReward: 85,
  },

  {
    id: 'goat-debate',
    title: 'The GOAT Debate',
    emoji: '🐐',
    category: 'Basketball History',
    track: 5,
    tagline: 'What does greatness actually mean?',
    chapters: [
      {
        title: 'Michael Jordan — The Case',
        content: `The Greatest Of All Time debate is the most enduring argument in sports. It is also one of the most instructive — because analyzing what makes greatness reveals exactly what you should be building toward.

Michael Jordan's case — the perfection argument: 6 championships. 6 Finals MVPs. He never lost in the Finals. 5 regular-season MVPs. 1 Defensive Player of the Year (while leading the league in scoring — an unprecedented combination). 14 All-Star selections. Career scoring average of 30.1 points per game — the highest in NBA history. Jordan's argument is built on an idea of perfection: he won every single time the biggest moment demanded it. Six championships, six perfect Finals series.

What made Jordan statistically dominant: Jordan combined scoring efficiency (high points per shot attempt), defensive excellence (Defensive Player of the Year), and clutch performance (the best "clutch" stats of any player in the era). He was the best player in the world on both sides of the ball simultaneously — something almost no other player in history has achieved.

The competitive will argument: Jordan is often cited as the most competitive player in NBA history. He turned everything into a competition — practice shooting games, card games, golf, conversations about who would win a footrace. This competitive obsession was not a personality quirk. It was a training tool. By competing at everything with maximum intensity, Jordan kept his competitive instincts sharp and automatic. When game situations arose that required maximum competitiveness, his body and mind already knew what maximum felt like.

The mental fortitude argument: Jordan was cut from his high school varsity team as a sophomore. He was underdrafted (third pick overall, preceded by Hakeem Olajuwon and Sam Bowie). He lost in the first round of the playoffs multiple times before winning his first championship at age 28. Each obstacle became fuel. His ability to transform adversity into motivation rather than discouragement is a defining characteristic of his greatness.`,
        videoUrl: 'https://www.youtube.com/results?search_query=michael+jordan+greatest+ever+documentary+highlights',
        videoTitle: 'Michael Jordan — The Greatest of All Time Case',
      },
      {
        title: 'LeBron James and the Complete Player Argument',
        content: `LeBron James represents a different argument for greatness — one built on longevity, completeness, and adaptability across different eras, different rosters, and different challenges.

LeBron's case — the completeness argument: 4 championships across THREE different franchises (Cleveland, Miami, Los Angeles). 4 Finals MVPs. 4 regular-season MVPs. The all-time leading scorer, surpassing Kareem Abdul-Jabbar in 2023. Simultaneously leading active players in points, assists, and games played. LeBron's argument is that no player in NBA history has been as complete — scoring, playmaking, defending, rebounding — for as long as he has.

The versatility argument: LeBron has played every position in the NBA during his career. He has guarded every position. He has led teams in scoring, rebounding, and assists — sometimes all three simultaneously. His basketball IQ is considered by many coaches and analysts to be the highest in NBA history — his ability to process the entire court in real time, see plays 3 possessions before they happen, and make the correct decision against any defensive alignment.

The longevity argument: Jordan retired twice voluntarily and played 15 seasons. LeBron at 40 years old is still playing at an All-Star level — an unprecedented feat of physical maintenance, skill development, and competitive drive. Longevity at this level suggests complete mastery of the physical and mental demands of the game.

Others in the conversation: Kareem Abdul-Jabbar held the all-time scoring record for 38 years and won 6 championships. Bill Russell won 11 championships in 13 seasons — a team-winning record that dwarfs everyone. Magic Johnson reinvented the point guard position. Larry Bird was the greatest competitor who was never physically elite. Each player represents a different dimension of greatness.

The lesson: The GOAT debate has no correct answer because greatness is not a single dimension. Each player maximized different aspects of the game at the highest level. Your job is not to become Jordan or LeBron — it is to identify your OWN dimensions of potential greatness and develop them relentlessly. What is your defining skill? Your defining mentality? Build those with the same obsession that every GOAT brought to their version of excellence.`,
      },
    ],
    quiz: {
      question: 'What characteristic did ALL GOAT candidates share regardless of era?',
      options: [
        { text: 'They all played for the same team at some point', correct: false },
        { text: 'They all won exactly 6 championships', correct: false },
        { text: 'They made every teammate better while being the best individual on the court', correct: true },
        { text: 'They were all point guards', correct: false },
      ],
    },
    xpReward: 90,
  },
]
