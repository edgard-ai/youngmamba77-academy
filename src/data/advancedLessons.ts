import type { Lesson } from '../types'

export const ADVANCED_LESSONS: Lesson[] = [

  // ─── TRACK 2: MECHANICS MASTERY ─────────────────────────────────────────────

  {
    id: 'pick-and-roll',
    title: 'The Pick and Roll',
    emoji: '🔄',
    category: 'Advanced Offense',
    track: 2,
    explanation: `The pick and roll (also called the "ball screen") is the single most run play in the history of basketball at every level. It is two players creating a math problem for the defense that has no perfect answer.

How it works: The ball handler dribbles toward a stationary teammate (the screener). The screener plants their feet wide, makes contact with the defender, and creates a wall. The ball handler uses that wall to get past their defender. After setting the screen, the screener immediately "rolls" to the basket (or "pops" to the perimeter for a shot).

The four defensive coverages and how to attack them:

1. Hard hedge (big steps up aggressively): The screener's defender shoots out to stop the ball handler at the top. Read: quickly pass to the rolling screener who now has a clear path to the basket. The screener's defender is out of position.

2. Drop coverage (big drops back to protect the rim): Your defender goes under the screen and the big stays home. Read: come off the screen and pull up immediately for a mid-range jumper or 3. The defense gave you the shot — take it.

3. Switch (defenders swap assignments): Your defender now has the big guarding you, and their defender has the ball. Read: immediately attack the mis-match. Drive the big, or post them up.

4. Blitz/trap (two defenders both crowd the ball handler): Read: the roller is wide open AND one of your four other teammates is also open. Find the open man immediately — this is a 5-on-3 advantage if you make the right pass.

The ball handler's job: Read the coverage BEFORE the screen comes. Know where you are going based on what the defense is showing. Hesitate at the screen to let the screener make contact (do not run past the screen too fast), then attack the advantage.

The screener's job: Set a legal screen (stationary feet, vertical body — no leaning). Make hard contact with your BODY, not your arms. Roll with purpose — sprint to the basket with your hands up ready to catch. If the defense switches, post up immediately.`,
    coachingPoints: [
      'Read the defense BEFORE the screen arrives — your decision should already be made when you come off it',
      'The best pick and roll players have at least two reads automatic: roll pass and pull-up jumper',
      'As the screener, make contact with your shoulder and hip — the more contact, the better the screen',
      'John Stockton and Karl Malone ran it 10 times per game because they had every read automatic',
    ],
    commonMistakes: [
      'Running past the screen too fast — the screen only creates an advantage if you use it. Rub your defender off',
      'Screener rolling before making full contact — a moving screen is a turnover',
      'Forcing the roll pass when the defense is taking it away — read what they give and take it',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=pick+and+roll+basketball+tutorial+reads',
    videoTitle: 'Pick and Roll Reads Tutorial',
    highlightAssignment: 'Watch any Jazz-era Stockton and Malone highlights. Count how many times they run the exact same pick and roll — but each time, Stockton makes a different read based on the defense. Same play, different decision, always the right one.',
    drills: [
      {
        id: 'pnr-d1', name: 'Two-Man Pick and Roll Reads', duration: '8 min',
        instructions: 'With a partner: set pick and roll 20 times. Defense calls out coverage each time (hedge, drop, switch, trap). Ball handler reads and makes the correct play: hedge → roll pass, drop → pull-up, switch → attack mismatch, trap → kick out. Read and react every rep.',
        type: 'ball-handling',
      },
      {
        id: 'pnr-d2', name: 'Screen Setting Quality', duration: '5 min',
        instructions: 'Practice setting screens on a stationary object (chair). Your body must make contact on every screen. Wide feet, vertical body. Set 15 screens on the chair — your position must be perfect each time. Weak screens help nobody.',
        type: 'footwork',
      },
      {
        id: 'pnr-d3', name: 'Pull-Up Jumper Off Screen', duration: '5 min',
        instructions: 'Dribble toward a stationary chair (screen). Come off it tightly (rub the chair), take one gather step, and pull up for a jumper from 15-17 feet. The chair represents the hedge defender — you are practicing the "drop coverage" read. 15 makes.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'When the defense "hedges" hard on a pick and roll, what is the correct read?',
      options: [
        { text: 'Drive hard past the hedging defender', correct: false },
        { text: 'Pull up for a mid-range jumper immediately', correct: false },
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
    explanation: `Post moves are the most technical skill set in basketball — and the most valuable in a youth game where size creates mismatches. Even as an SG/SF, learning post footwork makes you unstoppable when a smaller player guards you.

Catch and read: When you receive the ball in the post, do not rush. Feel the defender's pressure. They are telling you what move to make. If they are on your right — go left. If they push you baseline — take the middle. The defense reveals the move.

The Drop Step: Catch on the right block. Defender pushes you toward baseline. Plant your left foot, drop your right foot behind the defender (step through them), and score with a power move. The "drop step" gets you completely free for an uncontested finish.

The Up-and-Under: Fake the drop step. The defender jumps. Step through in the opposite direction for a scoop or short pull-up. This counter works ONLY when the drop step is established. Set up your counters with your primary moves first.

The Spin Move: Dribble into the post. Plant your pivot foot, spin 180 degrees away from the defender's reach hand, and finish before they can recover. The spin must be tight and low — wide spins lose the ball.

The Face-Up: Catch in the post, turn to face the basket (pivot either direction to face up), and attack from triple threat from close range. Faster defenders cannot guard you inside — use your size. Post up, face up, attack.

Hakeem Olajuwon's Dream Shake: The greatest post player ever used a series of pump fakes and pivots to completely freeze defenders before making his final move. The principle: every fake must be 100% real or the defender does not bite. Sell every fake with your full body.`,
    coachingPoints: [
      'Read the defender\'s pressure before you move — they are always telling you which direction to go',
      'Every post move needs a counter — the drop step sets up the up-and-under, the up-and-under sets up the drop step',
      'Power through contact in the post — take the foul or finish through it. Both outcomes win for you',
      'Establish your post position BEFORE the ball arrives — catching outside your spot means you start weak',
    ],
    commonMistakes: [
      'Rushing the first move — patience in the post creates better opportunities than attacking immediately',
      'Not having a counter — if the defense figures out your primary move, you need the counter ready',
      'Losing your pivot foot — once your pivot foot moves, you must shoot or pass immediately',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=hakeem+olajuwon+post+moves+tutorial',
    videoTitle: 'Post Move Footwork Tutorial',
    highlightAssignment: 'Watch "Hakeem Olajuwon Dream Shake tutorial" on YouTube. Study how every single fake is committed — full extension, full sell — before the actual move. The defense must believe every fake or none of them work.',
    drills: [
      {
        id: 'post-d1', name: 'Drop Step Both Sides', duration: '6 min',
        instructions: 'Catch on the right block. Drop step baseline: plant left foot, step through with right, power finish. Then from the left block: plant right, step with left, finish. 10 drop steps each side. Every rep must be powerful — this is a contact move.',
        type: 'footwork',
      },
      {
        id: 'post-d2', name: 'Up-and-Under Series', duration: '5 min',
        instructions: 'From the block: fake the drop step (complete selling the move), hold until the "defender" reacts, step through the other direction and finish with a scoop or short pull-up. The fake must be completely committed or the counter will not work. 10 reps each side.',
        type: 'shooting',
      },
      {
        id: 'post-d3', name: 'Face-Up From Close Range', duration: '4 min',
        instructions: 'Catch at the mid-post (free throw line area). Pivot to face the basket in triple threat. You are now an elite scorer in close range — attack the basket, pump fake and draw contact, or step back and shoot. 15 face-up possessions.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'In the post, if the defender is pushing you toward the baseline, what is the correct move?',
      options: [
        { text: 'Push back toward the middle forcefully', correct: false },
        { text: 'Take the baseline direction they are giving you with a drop step', correct: true },
        { text: 'Always spin to the middle regardless of pressure', correct: false },
        { text: 'Immediately pass out of the post', correct: false },
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
    explanation: `Shot creation is the ability to manufacture a high-quality shot against a set defense without help from a play or a screen. It is what separates good scorers from elite scorers.

The step-back: The most dangerous move in modern basketball. Drive at the defender, plant your lead foot, push off explosively backward (2 steps back), and rise up for a jumper before the defender can recover. The key is the plant and explosion — it must happen fast enough that the defender's momentum carries them forward while you step back. James Harden, Luka Doncic, and Kevin Durant built entire careers around this move.

The Euro step: Instead of going straight at the basket, plant one foot and step laterally in a new direction before finishing. The Euro step exploits the defender's momentum — they go one way, you finish the other. Two legal steps, two directions. Manu Ginobili made it famous in the NBA; now every elite guard uses it.

The floater: When a shot-blocking big is protecting the rim, the floater goes OVER them before they can jump. Explode toward the basket, plant your inside foot 5-8 feet from the rim, and push the ball high into the air with your shooting hand in a scooping motion. The ball floats softly over the defender and into the basket. Tony Parker's floater was virtually unblockable because he released it before the shot-blocker could time the jump.

Pull-up jumper off the dribble: Stop on a dime (1-2 step stop from a full dribble), catch your balance, and shoot. The footwork of stopping is the skill — if your feet are wrong, the shot is wrong. Practice the stop separately from the shot at first.

The key to all shot creation: Every move must be built on the foundation of triple threat, proper footwork, and dribble control. You cannot create shots without the base skills. Shot creation is fundamentals applied in combinations.`,
    coachingPoints: [
      'The step-back only works if you have shown the drive first — set it up with 2-3 drive attempts before using the counter',
      'The floater release point is critical — too close to the rim and it gets blocked, too far and you miss the touch',
      'Great shot creators always have two moves per possession: a primary and a counter ready',
      'Kobe could hit a stepback, turnaround, fade-away, and drive-and-finish from any spot — build your full arsenal',
    ],
    commonMistakes: [
      'Using step-backs without establishing the drive — a step-back with no drive setup is a difficult shot with no purpose',
      'Releasing the floater too late — by the time the big has elevated, it is too late. Release before they leave the ground',
      'Stopping too upright on pull-up jumpers — your knees must be bent when you stop so you have power to rise',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=step+back+jumper+basketball+tutorial',
    videoTitle: 'Step-Back and Shot Creation Tutorial',
    highlightAssignment: 'Watch "Kobe Bryant shot creation and footwork" in slow motion. For every shot, pause before his final move and guess what he is about to do. Then watch. How often were you right? The unpredictability is what makes him elite.',
    drills: [
      {
        id: 'sc-d1', name: 'Step-Back Series', duration: '6 min',
        instructions: 'Dribble hard toward the free throw line. Plant your inside foot and push backward 2 steps. Rise up and shoot before you land. The explosion backward must be as powerful as the drive forward. 15 step-backs from both wings and the top of the key. Make 8 of 15.',
        type: 'shooting',
      },
      {
        id: 'sc-d2', name: 'Euro Step Finish', duration: '5 min',
        instructions: 'Drive from the wing at game speed. At the final step before the basket, plant and step laterally in a new direction. Finish the layup. Right side: plant right, step left, left hand finish. Left side: plant left, step right, right hand finish. 10 each side.',
        type: 'footwork',
      },
      {
        id: 'sc-d3', name: 'Floater Practice', duration: '5 min',
        instructions: 'Drive from the wing, plant 5-7 feet from the basket, and push a high-arc floater over an imaginary defender. The ball must reach at least 15 feet high at its peak. Start without a defender, then add a chair as the "big." 20 floaters each side.',
        type: 'shooting',
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
    explanation: `Elite defense is a system, not just individual effort. The best defensive players understand the whole scheme, not just their own assignment.

On-ball defense advanced principles: Do not give up the first step — your positioning determines whether the ball handler even gets a good drive. Stay one step to their strong-hand side (taking away their strength) without cheating too far that they can blow by with the weak hand. Maintain 1-2 feet of cushion on explosive players — you need reaction time.

Help defense — the key to team defense: When the ball handler drives, you must decide instantly: help or stay? Help side positioning means you are standing on the weak side, one step off your player, angled to see both the ball and your player. When the drive comes, step into the gap at the charge circle to take the charge, or contest the pass. After helping, immediately find your player — this is called "help and recover."

Taking charges: The most underrated play in basketball. Step in front of a driving player, establish your feet before they leave the ground on the final step, and absorb the contact by leaning back. If your feet are set, it is a charge on the offense — you get the ball and they get a foul. This takes courage and positioning. The best defensive teams manufacture 3-5 charges per game.

Switching: Modern NBA teams switch screens constantly. When you switch, you must (1) communicate loudly so your teammate knows you have their assignment, and (2) immediately engage the new player at arm's length — do not give them room to shoot.

Forcing turnovers vs. staying disciplined: Gambling for steals leads to fouls and layups. The disciplined defender forces bad shots and difficult passes — turnovers happen naturally. The gambling defender gives up easy baskets trying for highlights.`,
    coachingPoints: [
      'Help defense is a team responsibility — if everyone helps correctly, the ball handler runs out of options',
      'Take charges whenever legally possible — they shift momentum and score you and your team a foul on the opponent',
      'Communicate EVERY defensive possession: switch calls, screen calls, help calls — talk constantly',
      'The best defensive teams practice defense as much as offense — it is never an afterthought',
    ],
    commonMistakes: [
      'Not knowing your help position — standing directly behind your player instead of in help-side position',
      'Helping and not recovering — after helping, you must sprint back to your player before they get the pass',
      'Reaching for steals instead of staying disciplined — reaching gives up fouls and easy baskets',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=advanced+basketball+defense+help+side+tutorial',
    videoTitle: 'Help-Side Defense and Advanced Defensive Principles',
    highlightAssignment: 'Watch "San Antonio Spurs defense highlights" — any era, any game. Notice how every Spurs defender moves when the ball moves, even if they are on the opposite side of the court. That coordinated help defense is what made them one of the greatest defensive teams ever.',
    drills: [
      {
        id: 'ad-d1', name: 'Help Side Positioning Walk-Through', duration: '5 min',
        instructions: 'Walk through all 5 defensive positions on the court as the ball moves. Every time the ball moves, every defender must adjust. Practice the correct help-side position for each ball location. Slow and deliberate — this is conceptual. Then do it at game speed.',
        type: 'footwork',
      },
      {
        id: 'ad-d2', name: 'Charge Practice', duration: '5 min',
        instructions: 'Have a partner slowly walk at you while you establish your feet in the restricted area circle edge. They make contact. You absorb and go down (safely, controlled). Your feet must be set BEFORE contact. 10 charge practices. Build the courage and technique simultaneously.',
        type: 'footwork',
      },
      {
        id: 'ad-d3', name: 'Switch Communication Drill', duration: '4 min',
        instructions: 'With a partner: one plays offense with the ball, one cuts without the ball. You guard the ball handler. When the cutter tries to set a screen, yell "SWITCH!" and both defenders swap assignments instantly. 10 switches. The yell must happen before the screen makes contact.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'What is "help-side" positioning in basketball defense?',
      options: [
        { text: 'Standing directly behind your assigned player', correct: false },
        { text: 'Positioning on the weak side where you can see both the ball and your player to help when the ball drives', correct: true },
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
    explanation: `The Triangle Offense is the most misunderstood and most successful offensive system in NBA history. Phil Jackson ran it with the Bulls (6 championships) and the Lakers (5 championships). 11 total championships with one offensive system.

The core concept: Three players form a triangle on one side of the court — corner, wing, and post. Two players fill the weak side. The triangle creates passing angles to every spot on the court and makes it impossible for the defense to cover everyone simultaneously.

The sideline triangle: The ball is on the wing. One player is in the corner (baseline). One player is in the post (block). These three form the triangle. The spacing between them is critical — typically 15 feet between each player, creating maximum passing lanes and drive angles.

Why it works: The triangle offense has NO predetermined play caller, no set plays, and no dominant ball handler running the offense. Instead, every player reads the defense and makes the correct decision — pass, cut, shoot, or drive — based on what the defense gives. This makes it impossible to scout because there is no set play to take away.

Decision-making in the triangle: The post player receives the ball. They read: if their defender is behind them, they drop-step and score. If the defense double-teams, the post player passes to the open perimeter player. If the defender steps out, the post player attacks. Every read has a correct answer.

Player movement: The triangle is not a static system. Players constantly cut, fill spots, and exchange positions. When you cut, someone fills your spot. The spacing is maintained by MOVEMENT, not by standing still.

Why it requires elite players: The triangle requires every player to make correct decisions instantly — there is no play to fall back on. This is why Phil Jackson called it "the system that requires the most basketball intelligence." Michael Jordan initially HATED it because he could not just create his own shot. But he learned it and became unstoppable within it.`,
    coachingPoints: [
      'The triangle is a decision-making system, not a set of plays — every player must be able to read all five positions',
      'Spacing is maintained by movement — when one player moves, all four others must adjust simultaneously',
      'The system is predicated on reading the defender — the defense always tells you what to do',
      'Phil Jackson said: "The triangle is not for every team — it requires unselfishness and basketball intelligence above all"',
    ],
    commonMistakes: [
      'Treating it as a set play — the triangle has no predetermined sequencing. It is entirely read-and-react',
      'Breaking the spacing to help a teammate — movement that collapses the triangle destroys its advantage',
      'Forcing your read — if the defense takes away your option, the next player in the triangle has the advantage',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=triangle+offense+explained+basketball',
    videoTitle: 'Triangle Offense Explained',
    highlightAssignment: 'Find "Chicago Bulls triangle offense highlights 1990s" and watch 10 minutes. Pause every possession and identify: Where is the triangle? Who is reading the defense? When the ball moves, how do all 5 players adjust? This is the most complex team offense ever run.',
    drills: [
      {
        id: 'tri-d1', name: 'Three-Man Triangle Passing', duration: '6 min',
        instructions: 'Set up 3 players (or cones) in triangle formation: corner, wing, post. Pass around the triangle continuously — corner to wing to post to corner. After 10 passes, the post player "reads" an attack move and goes to the basket. This builds the triangle passing rhythm.',
        type: 'ball-handling',
      },
      {
        id: 'tri-d2', name: 'Post Read Drill', duration: '5 min',
        instructions: 'Receive the ball in the post. A partner plays defense. Read and react: defender behind you → drop step, defender doubles → pass to wing immediately, defender steps out → face up and attack. 10 reads. The defense must show different looks.',
        type: 'shooting',
      },
      {
        id: 'tri-d3', name: 'Fill the Spot', duration: '5 min',
        instructions: 'Start in the triangle. When one player cuts to the basket, the nearest other player must immediately fill their vacated spot. Practice the cutting and filling pattern until it is automatic. 5 minutes of continuous movement.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'What made the triangle offense impossible to fully scout and neutralize?',
      options: [
        { text: 'It had over 100 different plays', correct: false },
        { text: 'It had no predetermined plays — decisions were based on reading the defense in real time', correct: true },
        { text: 'Michael Jordan was always the ball handler', correct: false },
        { text: 'It only worked with the tallest players', correct: false },
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
    explanation: `The Run and Gun offense — also called "Seven Seconds or Less" — is the polar opposite of the Triangle. Where the triangle is methodical and patient, the Run and Gun is explosive and immediate.

The philosophy: Shoot within seven seconds of getting the ball — every possession. Get the ball in transition before the defense can set up. Push the pace to 90+ possessions per game (typical NBA game is 70-80). Force the defense to play the entire game at an uncomfortable pace.

Steve Nash and Mike D'Antoni's Suns: The 2004-2008 Phoenix Suns revolutionized basketball with this system. Steve Nash — a two-time MVP — was not the fastest or most athletic player. He was the smartest. His ability to make the right decision in 2 seconds, every time, made the system work.

Key principles: Push every rebound immediately — do not wait for the play to be called. Space the floor with shooters at every position. The point guard must be able to read the defense in the first three seconds and either shoot, drive, or advance to a teammate who has the better position. Never let the defense set up.

Why it works: Most defenses are designed for half-court basketball. They have positioning, rotations, and schemes for set situations. A team that pushes the pace and gets there before those defensive rotations can be set up exploits this — the defense is always one step behind.

The evolution into today's NBA: Every NBA team now plays fast. The Golden State Warriors combined the pace of Run and Gun with the spacing of the Triangle and the precision of the Spurs system. Understanding Run and Gun principles explains why modern basketball looks the way it does.

The trade-off: Run and Gun teams give up more points because they take more shots. The philosophy is: we will outscore you, not out-defend you. This requires elite offensive players and elite shooting percentages.`,
    coachingPoints: [
      'The point guard\'s decision speed is the most critical factor — slow decisions end fast breaks',
      'Running the floor hard every possession, even when tired, is what creates the system\'s advantage',
      'Shooting percentages matter more in Run and Gun — bad shots are especially costly when volume is this high',
      'Nash said: "In run and gun, there are no bad shots if the shot was open when it was taken"',
    ],
    commonMistakes: [
      'Slowing down in the fourth quarter — the pace must be maintained all 48 minutes or the system fails',
      'Taking low-percentage shots just to take them — run and gun means fast good shots, not fast bad shots',
      'Not sprinting back on defense — run and gun teams that do not sprint back give up easy baskets constantly',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=phoenix+suns+run+and+gun+seven+seconds+or+less',
    videoTitle: '7 Seconds or Less — Steve Nash Suns Offense',
    highlightAssignment: 'Watch "Steve Nash Phoenix Suns offense highlights." Count how many seconds pass between getting the ball and shooting or making a decisive pass. Most will be under 7 seconds. Notice how Nash already knows his decision before catching the ball.',
    drills: [
      {
        id: 'rng-d1', name: '7-Second Possession Drill', duration: '6 min',
        instructions: 'Start with the ball at half court. You have 7 seconds to dribble, read, and take a quality shot. Someone counts out loud from 1 to 7. If you have not shot by 7, that possession was wasted. 15 possessions. Build the urgency and the read-and-decide speed.',
        type: 'shooting',
      },
      {
        id: 'rng-d2', name: 'Transition Sprint', duration: '5 min',
        instructions: 'Simulate getting a rebound. Sprint to the other end in 3 dribbles or fewer and finish with a layup or pull-up jumper. The goal is maximum speed from rebound to shot in under 5 seconds. 10 transition reps. This is run and gun in practice.',
        type: 'footwork',
      },
      {
        id: 'rng-d3', name: 'Decision at Full Speed', duration: '5 min',
        instructions: 'Dribble at game speed toward the basket. At the free throw line, make an instant decision: shoot, drive left, drive right, or kick out (simulate pass). A partner can call "Left! Right! Shoot!" randomly and you must react and execute immediately. 15 reps.',
        type: 'ball-handling',
      },
    ],
    quiz: {
      question: 'What was the core principle of the "Seven Seconds or Less" offense?',
      options: [
        { text: 'Run only fast breaks and never set plays', correct: false },
        { text: 'Shoot within seven seconds of getting the ball — every possession, every time', correct: true },
        { text: 'Only the point guard is allowed to shoot', correct: false },
        { text: 'Play only zone defense to save energy for offense', correct: false },
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
    explanation: `Motion offense is the foundation of most youth and college basketball programs — and the basis for much of what the Golden State Warriors do at the NBA level. It teaches players to play the game, not run plays.

The core rules of motion offense: (1) Never stand still — if you do not have the ball, you must be moving. (2) Always have a purpose for your movement — cut, screen, or space. (3) Pass and immediately move — never watch your pass; cut, screen, or relocate after passing. (4) Read what the defense gives — do not force a predetermined action.

The five actions of motion offense: Cut (backdoor, V-cut, flex cut), screen (on-ball, off-ball, back screen), pass and relocate (pass and move to a new spot), dribble penetration (attack the basket, kick to open teammates), and drive and kick (drive, draw the defense, pass to the open shooter).

Ball movement and the "extra pass": The Warriors became the most dominant offensive team in modern NBA history by taking "one more pass" — when a teammate is open, look for the teammate who is MORE open. This creates the best possible shot. Draymond Green's basketball IQ to find the extra pass is what made Steph Curry's shot easier.

The "4-out 1-in" motion: Four players spread the perimeter (corners and wings), one player in the post. This creates maximum spacing for drives and passes. The most common modern motion structure.

Why coaches love motion offense: It teaches basketball thinking, not memorized plays. Players who grow up in motion offense understand the game at a conceptual level — they can play in any system because they understand WHY everything happens.`,
    coachingPoints: [
      'Pass and move — every time you pass, your next action should already be decided: cut, screen, or relocate',
      'The extra pass wins championships — always look for the teammate who is MORE open, not just open',
      'Space creates offense — if you are crowding a cutter or driver, move away and give them the lane',
      'Motion offense has no "go-to" player — every player must be a scoring and passing threat simultaneously',
    ],
    commonMistakes: [
      'Standing still after passing — this is the most common motion offense mistake at every level of basketball',
      'Cutting when the lane is occupied — your cut must have a clear path or you are hurting the spacing',
      'Forcing a set play within motion — trust the system and read the defense instead',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=motion+offense+basketball+explained+youth',
    videoTitle: 'Motion Offense Explained for Youth Basketball',
    highlightAssignment: 'Watch "Golden State Warriors offense ball movement" — any recent season. Count the passes per possession. Notice how the ball movement is not random — every pass is purposeful, and every player moves after passing. That is elite motion offense in action.',
    drills: [
      {
        id: 'mo-d1', name: 'Pass and Cut Habit', duration: '5 min',
        instructions: 'With a partner: pass the ball, then immediately cut to the basket for a return pass and layup. Every single rep — pass, cut, receive, finish. This builds the "pass and move" automatic habit. 20 pass-and-cut sequences. Stop if you EVER hold the ball without moving after the catch.',
        type: 'footwork',
      },
      {
        id: 'mo-d2', name: 'Extra Pass Drill', duration: '5 min',
        instructions: 'Dribble to the wing with an open look at the basket. But before shooting, make one more pass to a simulated open teammate (or toss the ball to a spot). Then you receive the pass back and shoot. This builds the "extra pass" habit — looking for the best shot, not the first shot.',
        type: 'shooting',
      },
      {
        id: 'mo-d3', name: '3-on-0 Motion', duration: '6 min',
        instructions: 'Three players, no defense. Run motion offense for 5 minutes — constant cutting, screening, passing, and relocating. Every player must touch the ball every 2-3 passes. Nobody stands still. Score when a truly open shot presents itself. Build the flow.',
        type: 'ball-handling',
      },
    ],
    quiz: {
      question: 'In motion offense, what should you do immediately after passing the ball?',
      options: [
        { text: 'Watch to see if your teammate makes a good play', correct: false },
        { text: 'Stay in your spot and wait for the ball to come back', correct: false },
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
    explanation: `Phil Jackson won 11 NBA championships as a head coach — more than anyone in history. His coaching philosophy was not just about basketball. It was about human beings and how to get the best out of them.

The Zen Master approach: Phil Jackson studied Zen Buddhism, Native American philosophy, and team psychology before he ever became a coach. He believed that basketball was a microcosm of life — that the same principles that create inner peace and wisdom also create team chemistry and championship performance.

Mindfulness and presence: Jackson taught his players to be fully present in the moment — not thinking about the last play or the next possession, but THIS play. He introduced mindfulness meditation to the Chicago Bulls in 1993 — elite athletes meditating before games was unheard of. The practice helped Rodman, Pippen, and Jordan stay calm in fourth-quarter pressure situations.

Trust and roles: Jackson believed deeply in the triangle offense partly because it required EVERY player to be trusted with the ball. He consistently gave Horace Grant, John Paxson, Steve Kerr, and other "role players" the game-winning opportunity — and they delivered. His philosophy: "When every player believes they matter, every player plays at their highest level."

Managing egos: Phil Jackson managed Michael Jordan, Kobe Bryant, Dennis Rodman, and Shaquille O'Neal — four of the most difficult personalities in sports history. His method: never publicly criticize, always give credit to the team, privately demand accountability. He once benched Michael Jordan in a critical situation to prove the team mattered more than any individual.

The sacred hoop: Jackson's most famous book is "Sacred Hoops." His central belief: a basketball team at its best is a single organism with five minds and one purpose. Individual talent is necessary but insufficient — only when players sacrifice individual glory for team success does championship basketball become possible.`,
    coachingPoints: [
      'Mindfulness — being fully present on each possession — is a skill that can be trained, not a personality trait',
      'Jackson proved that managing personalities is as important as drawing up plays',
      'Trust in role players creates a team where everyone is invested in winning, not just the stars',
      'Eleven championships came from one philosophy: "Not me — us." Selflessness is a competitive advantage',
    ],
    commonMistakes: [
      'Thinking championship culture is about one great player — Jackson won with Jordan AND with Kobe, proving it is a system',
      'Ignoring the mental game — Jackson\'s meditation practices are now standard in elite sports psychology',
      'Confusing mindfulness with passivity — Phil Jackson\'s teams were fierce competitors who happened to be mentally clear',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=phil+jackson+coaching+philosophy+basketball',
    videoTitle: 'Phil Jackson — Coaching Philosophy and Leadership',
    highlightAssignment: 'Find any Phil Jackson interview on YouTube. Listen specifically for how he describes his players — he always talks about their CHARACTER, not their statistics. What does that tell you about what he valued in a basketball player?',
    drills: [
      {
        id: 'pj-d1', name: 'Pre-Practice Mindfulness', duration: '5 min',
        instructions: 'Before you pick up a basketball: sit or stand still for 3 minutes. Eyes closed. Focus entirely on your breathing. When your mind wanders to school, friends, or games — return to the breath. Then spend 2 minutes visualizing your best basketball self making perfect plays. This is Phil Jackson\'s pre-practice routine adapted for you.',
        type: 'stretch',
      },
      {
        id: 'pj-d2', name: 'Present-Moment Play', duration: '8 min',
        instructions: 'Play 1-on-1 for 8 minutes. Rule: after every possession — make or miss — you must reset completely. Stand still for 3 seconds, breathe, then play the next possession as if it is the first. No carrying a mistake into the next play. This is mindfulness applied to basketball.',
        type: 'ball-handling',
      },
      {
        id: 'pj-d3', name: 'Role Player Appreciation', duration: '5 min',
        instructions: 'Practice one skill specifically designed to help your TEAMMATE, not yourself: (1) Set 20 screens that get your teammate open, (2) Make 20 outlet passes that start the fast break for someone else, (3) Take 20 charges. These are Phil Jackson "role" stats — they win championships without ever showing on a box score.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'What was the central belief behind Phil Jackson\'s "Sacred Hoop" coaching philosophy?',
      options: [
        { text: 'The best player should control every possession', correct: false },
        { text: 'Only defense and rebounding win championships', correct: false },
        { text: 'When players sacrifice individual glory for team success, championship basketball becomes possible', correct: true },
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
    explanation: `Gregg Popovich has won 5 NBA championships with the San Antonio Spurs and is widely regarded as the greatest coach in NBA history. His philosophy is simple, consistent, and brutally demanding.

The Spurs system — ball movement above all: The Spurs under Popovich became famous for moving the ball until they created the best possible shot. Their offense averaged 300+ passes per game — double the league average. The principle: "Good teams take good shots. Great teams take great shots." A good shot is passed up for a great shot every time.

Culture over talent: Popovich consistently outperformed teams with more talented rosters. His method: establish a culture of accountability, unselfishness, and professionalism that makes every player perform better than they would elsewhere. Tony Parker, Manu Ginobili, and Tim Duncan were very good when they arrived — they became all-time greats in Popovich's system.

Demanding honesty: Popovich is famous for his brutal honesty with players. He does not coddle. He holds everyone — including Tim Duncan, his franchise player — to the same standard. When Duncan made a mistake, Popovich called it out in front of the team. This equal accountability created a culture where nobody was above the system.

The quiet superstar: Popovich actively sought players who did not need the spotlight. Tim Duncan, one of the 15 greatest players in NBA history, was famously quiet and team-first. Popovich believed this personality type was the most valuable — extreme talent combined with extreme humility and coachability.

International players and global basketball: Popovich was decades ahead of the league in valuing international players. Tony Parker (French), Manu Ginobili (Argentine), and dozens of others showed that basketball excellence is global — style, creativity, and fundamentals from around the world.`,
    coachingPoints: [
      '"The best shot" versus "a good shot" — Popovich\'s teams were always willing to take one more pass for the better look',
      'Accountability without ego — Pop holds everyone to the same standard. Stars do not get free passes',
      'Process over outcome — Popovich cares about how you play, not just whether you win. Right execution leads to winning',
      'Popovich said: "Our system demands that you care about the man next to you." Culture IS the system',
    ],
    commonMistakes: [
      'Thinking the Spurs won on talent — they were repeatedly outtalented and won anyway, because of culture',
      'Confusing toughness with cruelty — Popovich is demanding because he believes every player can improve',
      'Ignoring the Spurs\' ball movement — they are the template for how unselfish offense wins championships',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=gregg+popovich+coaching+philosophy+interview',
    videoTitle: 'Gregg Popovich — Greatest Coach Interview',
    highlightAssignment: 'Watch "San Antonio Spurs ball movement" highlights and count the passes per possession. Try to find a possession where the Spurs took the first open shot they saw. You will struggle to find one. That is what "great shot over good shot" looks like.',
    drills: [
      {
        id: 'pop-d1', name: 'Great Shot Standard', duration: '6 min',
        instructions: 'Shoot 30 shots — but for each one, you must assess: "Is this a GREAT shot or just a good shot?" If it is just good, pass it up (toss it to a simulated teammate) and find a better one. You are building the judgment to distinguish between acceptable and optimal. Popovich\'s players develop this judgment automatically.',
        type: 'shooting',
      },
      {
        id: 'pop-d2', name: 'Accountability Review', duration: '5 min',
        instructions: 'After every drill in today\'s session, honestly rate your performance: 1 (below standard), 2 (met standard), 3 (exceeded standard). Write it down. This self-accountability — being honest about your performance without making excuses — is the mental habit Popovich builds in every Spur.',
        type: 'stretch',
      },
      {
        id: 'pop-d3', name: 'The Spurs Passing Circuit', duration: '8 min',
        instructions: '3 players, 5 cones in spacing positions. Pass the ball for 8 minutes straight. Rules: no dribbling, move after every pass, every third pass must be a skip pass (cross-court). Count total passes made. The Spurs average 300+ passes per game. This circuit builds the habit.',
        type: 'ball-handling',
      },
    ],
    quiz: {
      question: 'What principle separated Popovich\'s Spurs offense from other teams?',
      options: [
        { text: 'They always ran the same play for Tim Duncan', correct: false },
        { text: 'They passed up good shots to take great shots — consistently taking one more pass', correct: true },
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
    explanation: `Basketball has evolved dramatically across six distinct eras. Understanding this history makes you a more complete student of the game — and helps you understand why today's game looks the way it does.

Era 1 — The Original Game (1946-1960s): Centers dominated. Bigger was better. George Mikan, Wilt Chamberlain, and Bill Russell defined basketball as a big-man game. The 3-point line did not exist. The game was slower, more physical, and built around the post.

Era 2 — The Showtime and Star Era (1970s-1980s): Magic Johnson and Larry Bird revolutionized basketball by adding playmaking, passing, and team concepts. Meanwhile, Julius Erving (Dr. J) introduced aerial athleticism that nobody had seen before. Michael Jordan emerged as the transition to the next era.

Era 3 — The Jordan Era (1984-1998): Individual excellence at its peak. Michael Jordan redefined what a basketball player could do — athleticism, skill, competitiveness, and will combined in one person. Defense was more physical; players were more individual; the mid-range jumper was the premier weapon.

Era 4 — The Physicality Era (1990s): The "Bad Boy" Pistons and the "Jordan Rules" made basketball an intensely physical game. Hand-checking (defenders touching ball handlers) was legal, making penetration harder. Big, physical players dominated. Shaquille O'Neal was the most dominant force in the game.

Era 5 — Rule Changes and Globalization (2000s): In 2004, the NBA eliminated hand-checking and implemented new rules protecting offensive players. This opened the lane and created space for skill players. International stars — Steve Nash, Dirk Nowitzki, Manu Ginobili — showed the world's talent was equal to America's.

Era 6 — The Analytics and Spacing Revolution (2010s-present): The 3-point revolution. Stephen Curry redefined what was a "good shot" and where players could score from. Analytics proved that corner 3-pointers and layups were the most efficient shots in basketball. The mid-range jumper nearly disappeared from elite play. Speed, shooting, and spacing dominate everything.`,
    coachingPoints: [
      'Every era produced different "best players" — the game\'s rules and style shape which skills matter most',
      'The players who dominated in every era were those who could adapt — studying all eras makes you more adaptable',
      'The 2004 rule changes directly created the NBA you watch today — rules drive style, style drives what you practice',
      'International players proved that basketball intelligence and fundamentals can match any level of athleticism',
    ],
    commonMistakes: [
      'Thinking the NBA has always looked the way it does today — the 3-point revolution is less than 15 years old',
      'Comparing players across eras directly — rules, pace, and available information were completely different',
      'Ignoring the pre-Jordan era — the fundamentals of the game — passing, spacing, cutting — were taught better then',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=NBA+history+evolution+basketball+eras',
    videoTitle: 'The Evolution of NBA Basketball — All Eras',
    highlightAssignment: 'Watch one game highlight from each era: 1960s (Wilt Chamberlain), 1980s (Magic Johnson or Larry Bird), 1990s (Jordan), and 2020s (any current player). Note 3 specific differences in how the game is played. You are watching 60 years of evolution in 30 minutes.',
    drills: [
      {
        id: 'ne-d1', name: 'Era Shooting Challenge', duration: '8 min',
        instructions: 'Shoot like each era: (1) Post-up and short jumper (1960s), (2) Mid-range pull-up from elbow (Jordan era), (3) 3-pointer from the wing and corner (modern era). 10 shots from each spot. Which era\'s shot is your strongest? Where do you need work?',
        type: 'shooting',
      },
      {
        id: 'ne-d2', name: 'Spacing vs. Physical Play', duration: '5 min',
        instructions: 'Play 1-on-1 first with "hand-checking" allowed (simulated — defender can put hand on your hip). Note how it affects your drive. Then play without any contact. Note the difference. This is what the 2004 rule change felt like to players who adapted versus those who could not.',
        type: 'footwork',
      },
      {
        id: 'ne-d3', name: 'Your Best Shot in Today\'s NBA', duration: '5 min',
        instructions: 'The modern NBA rewards corner 3s and layups above all. Shoot 10 corner 3s from each corner. Then 10 straight-line drives to layups from each wing. Track your percentages. These are the two highest-value shots in the modern game — they should be your best shots.',
        type: 'shooting',
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
    explanation: `In 2011, Daryl Morey — GM of the Houston Rockets — changed basketball forever by applying data science to basketball decisions. The result: the analytics revolution that reshaped every team, every offense, and every player's shot selection in the modern NBA.

The key discovery: Expected value per shot. Analytics revealed that the three best shots in basketball — ranked by points per attempt — are: (1) Corner 3-pointers: worth 1.5 expected points per attempt, (2) Layups and dunks: worth 1.3-1.6 expected points, (3) Any shot other than these: significantly less efficient.

The death of the mid-range: The mid-range jumper — 12-20 feet from the basket — was the signature shot of the Jordan era. Analytics revealed it was the least efficient shot in basketball: worth about 0.8-0.9 expected points per attempt. Teams that relied on mid-range shooting were being outscored by teams taking corner 3s and layups. Within 10 years, mid-range shots declined by 40% across the league.

Stephen Curry and the redefinition of range: Curry proved that the deep 3-pointer (25-28 feet from the basket) could be nearly as efficient as the corner 3 when the shooter was accurate enough. His 40%+ shooting from 27+ feet redefined what "long range" meant and forced every defense in the league to change their positioning.

The analytics-resistant players: Some elite players — Kobe Bryant, LeBron James — refused to give up the mid-range entirely and remained elite because their overall skill level was exceptional. Analytics does not replace skill — it optimizes shot selection for players who can make multiple shot types.

What this means for Thomas: At 8 years old, the best investment is perfect fundamentals — especially the corner 3, the floater, and the straight-line drive to the basket. These are the three shots that analytics says will be most valuable throughout your career at every level.`,
    coachingPoints: [
      'Corner 3s and layups are the two most valuable shot types at every level — they should be your most-practiced shots',
      'Analytics gives you information — your skill development determines how you use that information',
      'Understanding "expected value" helps you choose which shots to work on in practice most intensively',
      'The Rockets\' "no mid-range" philosophy was an extreme — most teams now minimize mid-range, not eliminate it',
    ],
    commonMistakes: [
      'Thinking analytics means robots play basketball — analytics tells you WHAT, players and coaches decide HOW',
      'Abandoning the mid-range entirely — some situations (clock running out, specific defender) make it the right call',
      'Using analytics to avoid hard work — knowing the right shots to take does not shoot them for you',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=basketball+analytics+explained+3+point+revolution',
    videoTitle: 'The 3-Point Revolution and Analytics in Basketball',
    highlightAssignment: 'Find your own shot chart: for one week, track every shot you take in practice. Mark where it was taken, whether it went in, and count the total. Calculate your percentage from: corner 3s, wing 3s, mid-range, and layups/close shots. Where are you most efficient? Where do you need work?',
    drills: [
      {
        id: 'ar-d1', name: 'Corner 3 Volume Training', duration: '8 min',
        instructions: 'Shoot ONLY corner 3-pointers for 8 minutes — left corner and right corner, alternating. Track total attempts and makes. Calculate your percentage. The corner 3 is the single most valuable shot in analytics-era basketball. Your goal: 35%+ from each corner. This takes hundreds of sessions.',
        type: 'shooting',
      },
      {
        id: 'ar-d2', name: 'Layup Percentage Tracking', duration: '5 min',
        instructions: 'Shoot 20 right-hand layups and 20 left-hand layups. Track misses. Your target: 95%+ on both sides. NBA players miss 5% of layups — elite high school players miss 15-20%. The gap between 80% and 95% on layups is a significant competitive advantage.',
        type: 'shooting',
      },
      {
        id: 'ar-d3', name: 'Shot Value Assessment', duration: '5 min',
        instructions: 'Take 10 shots from each of these spots: corner 3 (highest value), wing 3 (high value), 17-foot mid-range (lower value), layup (highest value). Calculate your percentage from each. Multiply percentage by point value (3, 3, 2, 2). Which spot creates the most expected points for you? That is your go-to shot.',
        type: 'shooting',
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
    title: 'The GOAT Debate — What Makes the Greatest?',
    emoji: '🐐',
    category: 'Basketball History',
    track: 5,
    explanation: `The Greatest Of All Time debate — Michael Jordan vs. LeBron James, with others in the conversation — is one of the most enduring arguments in sports. Understanding what it takes to even enter this conversation tells you everything about what basketball greatness actually means.

Michael Jordan's case: 6 championships, 6 Finals MVPs (never lost in the Finals), 5 regular-season MVPs, Defensive Player of the Year, 14 All-Star selections. Jordan never lost in the Finals. His argument is "perfection" — he won every time the biggest stage required him to win. Statistically, his scoring average (30.1 career), defensive ability, and clutch performance are unmatched.

LeBron James's case: 4 championships across THREE different franchises (Cleveland, Miami, Los Angeles) — showing he could build a championship team anywhere. 4 Finals MVPs, 4 regular-season MVPs, the all-time leading scorer. LeBron is a more complete basketball player in terms of statistics — he leads all players in points, assists, and games played simultaneously.

Others in the conversation: Kareem Abdul-Jabbar (the all-time scoring leader before LeBron, 6 championships), Bill Russell (11 championships — the most in NBA history), Magic Johnson (5 championships, transformed the point guard position), Kobe Bryant (5 championships, closest in mentality and skill set to Jordan).

What the debate actually reveals: There is no objective answer because greatness is measured by different values: Championships (Jordan, Russell), Longevity and consistency (LeBron, Kareem), Skill level at peak (Jordan, Kobe), Overall impact on the game (Magic, LeBron, Jordan), Excellence of teammates (varies widely).

What this means for you: Every GOAT was obsessively competitive, dedicated to improvement, physically gifted AND skilled, and deeply studied the game. You cannot control which physical gifts you were born with. You can control the obsession, the study, and the skill development. That is what every GOAT controlled.`,
    coachingPoints: [
      'Every GOAT had a defining characteristic: Jordan\'s competitive will, LeBron\'s court vision, Kobe\'s work ethic',
      'Find your own defining characteristic and develop it to the highest possible level',
      'The debate will never be settled because greatness has no single definition — that is what makes it interesting',
      'All GOAT candidates shared one trait: they made every teammate better while also being the best individual on the court',
    ],
    commonMistakes: [
      'Thinking the GOAT debate has a factual answer — it is a values question, not a statistics question',
      'Dismissing players from other eras without understanding the rule differences and available training',
      'Using the GOAT debate as an excuse not to study your own game — studying greatness should inspire action',
    ],
    videoUrl: 'https://www.youtube.com/results?search_query=michael+jordan+vs+lebron+james+goat+debate',
    videoTitle: 'The GOAT Debate — Jordan vs. LeBron',
    highlightAssignment: 'Watch 5 minutes of Jordan highlights and 5 minutes of LeBron highlights back-to-back. For each player, write: (1) What skill do I want to steal? (2) What habit do I want to copy? Do not answer who is better — answer what you can learn from both.',
    drills: [
      {
        id: 'goat-d1', name: 'Jordan Drill — Competitive Standard', duration: '6 min',
        instructions: 'Set a personal scoring challenge: make 15 consecutive mid-range jumpers before you can stop. Miss one, start over from zero. This drill simulates Jordan\'s personal competitive standard — he refused to leave the gym until he hit a certain number. Adjust the number to your current level.',
        type: 'shooting',
      },
      {
        id: 'goat-d2', name: 'LeBron Drill — Complete Game', duration: '6 min',
        instructions: 'In 6 minutes, score in 6 different ways: layup (right), layup (left), pull-up jumper, corner 3, post-up move, and no-dribble catch-and-shoot. Then on defense: take a charge, block a shot (or contest), and force a turnover. LeBron\'s greatness is completeness — train completeness.',
        type: 'footwork',
      },
      {
        id: 'goat-d3', name: 'Your GOAT Trait', duration: '5 min',
        instructions: 'Identify YOUR defining trait — the skill that will be your signature. Dedicate these 5 minutes entirely to that one skill. 5 minutes of perfect, focused reps on your best skill. Build what makes you uniquely excellent — not what makes you average at everything.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'What characteristic did ALL GOAT candidates share regardless of era?',
      options: [
        { text: 'They all played for the same team at some point', correct: false },
        { text: 'They all won exactly 6 championships', correct: false },
        { text: 'They made every teammate better while also being the best individual on the court', correct: true },
        { text: 'They were all point guards', correct: false },
      ],
    },
    xpReward: 90,
  },
]
