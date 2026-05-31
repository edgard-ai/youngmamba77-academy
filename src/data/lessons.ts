import type { Lesson } from '../types'

export const LESSONS: Lesson[] = [
  {
    id: 'rules',
    title: 'Rules of Basketball',
    emoji: '📋',
    category: 'Basics',
    explanation: `Basketball is played between two teams of 5 players each. The goal is to score more points than the other team before time runs out.

How scoring works: A basket inside the 3-point arc is worth 2 points. A basket from behind the 3-point arc is worth 3 points. Free throws (awarded after fouls) are worth 1 point each.

Moving with the ball: You MUST dribble (bounce) the ball to move. If you pick up your dribble, you can only pivot — you cannot start dribbling again (this is called "double-dribble" and turns the ball over). You cannot carry the ball — your hand must stay on top or the side of the ball, never underneath while moving.

Fouls: When a defender hits, pushes, or grabs an offensive player illegally, that's a personal foul. After a set number of fouls per quarter, teams go into the "bonus" — every foul results in free throws. Players foul out after 5 fouls (NBA: 6).

Violations: Traveling (more than 1.5 steps without dribbling), double-dribble, 3-second lane violation (staying in the paint too long on offense), and backcourt violations all result in a turnover.

Game structure: NBA: 4 quarters of 12 minutes. Youth games vary — know your league's rules.`,
    coachingPoints: [
      'Knowing the rules prevents costly turnovers and fouls — use your knowledge as an advantage',
      'A smart player knows when the team is in the bonus and attacks the basket to get to the free throw line',
      'Understanding the 3-second rule helps you use the paint efficiently — get in, score or pass, get out',
      'Knowing when the shot clock is running low is a key IQ advantage — force a bad shot or get a steal',
    ],
    commonMistakes: [
      'Picking up your dribble then trying to dribble again (double-dribble) — plan your move BEFORE picking it up',
      'Staying in the paint too long on offense — the 3-second rule forces continuous movement',
      'Not tracking your own fouls — know your foul count and adjust your defense accordingly',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=oyjYgmsM00Q',
    videoTitle: 'Rules of Basketball for Beginners',
    highlightAssignment: 'Watch any NBA game on YouTube. Every time the referee blows the whistle, pause and figure out what call was made. Study 10 calls. You\'ll start reading the game completely differently.',
    drills: [
      {
        id: 'rules-d1', name: 'Dribble & Freeze', duration: '3 min',
        instructions: 'Dribble while moving. When someone yells FREEZE — stop dead without traveling. This trains the instinct to stop cleanly when you pick up your dribble. 10 freezes with full stops.',
        type: 'ball-handling',
      },
      {
        id: 'rules-d2', name: 'Free Throw Routine', duration: '5 min',
        instructions: 'Shoot 10 free throws with a consistent pre-shot routine: step to the line, 2 dribbles, bend knees, sight the rim, shoot. Same routine every single time. Consistency is the point.',
        type: 'shooting',
      },
      {
        id: 'rules-d3', name: 'Paint Touch & Clear', duration: '3 min',
        instructions: 'Touch the paint, simulate receiving a pass, and clear out within 3 seconds. Build the automatic habit of not camping in the lane. 10 reps.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'How many points is a basket from behind the 3-point arc?',
      options: [
        { text: '1 point', correct: false },
        { text: '2 points', correct: false },
        { text: '3 points', correct: true },
        { text: '4 points', correct: false },
      ],
    },
    xpReward: 30,
  },

  {
    id: 'positions',
    title: 'Basketball Positions',
    emoji: '🗺️',
    category: 'Basics',
    explanation: `Each position has a primary role — but elite players do multiple things. Here is what each position is responsible for:

Point Guard (PG) — The Floor General: Handles the ball most. Runs the offense, calls plays, sets up teammates. Best passers and ball-handlers on the team. They read the defense before anyone else touches the ball. Think Steph Curry, Chris Paul, Magic Johnson.

Shooting Guard (SG) — The Scorer: YOUR position. Primary off-ball scorer and perimeter threat. Must be able to create their own shot, use screens, and shoot off catches. Kobe Bryant and Michael Jordan are the gold standard. Allen Iverson proved size doesn't limit this position.

Small Forward (SF) — The Versatile Weapon: ALSO YOUR POSITION. The most versatile spot on the floor. Can guard multiple positions, score from multiple spots, and defend the opponent's best player. LeBron James plays SF.

Power Forward (PF) — The Physical Force: Works near the basket and at the elbow. Boards, defends bigger players, scores with power moves. Giannis Antetokounmpo is the modern PF.

Center (C) — The Anchor: Biggest player. Protects the paint on defense, finishes inside on offense, screens for guards. Shaquille O'Neal, Hakeem Olajuwon, Joel Embiid.

Why YOU play SG/SF: These positions require athleticism, versatility, and skill. Playing both means developing a complete game — scoring, defending, rebounding, and playmaking.`,
    coachingPoints: [
      'As an SG/SF, the most important skill is learning to get open — use screens, cuts, and spacing to create shots',
      'Study your opponents\' positions before games — knowing who you\'re guarding changes how you play defense',
      'The best SGs also pass well — Kobe averaged 5+ assists per game. Don\'t be a player who never passes',
      'Build skills that work regardless of matchup: footwork, IQ, and shooting form never depend on your size',
    ],
    commonMistakes: [
      'Thinking your position limits what you can do — the best players ignore labels and do what the team needs',
      'Not learning to play off the ball — great SGs score 60%+ of their points without dribbling into their shot',
      'Ignoring defense — Kobe won Defensive Player of the Year AND led the league in scoring in the same career',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=D9ih1KR1EkU',
    videoTitle: 'Basketball Positions Explained for Beginners',
    highlightAssignment: 'Watch a full quarter of any NBA game. Pick one player and follow ONLY them — not the ball. See what they do off the ball, how they position, how they move without the ball. That is real basketball education.',
    drills: [
      {
        id: 'pos-d1', name: 'SG 5-Spot Shooting', duration: '5 min',
        instructions: 'Shoot from the 5 classic SG spots: left corner, left wing, top of key, right wing, right corner. 3 shots each spot = 15 total. Track makes from each spot. This maps out your current shooting range.',
        type: 'shooting',
      },
      {
        id: 'pos-d2', name: 'Off-Ball Cut to Shot', duration: '4 min',
        instructions: 'Start on the weak side. Cut hard to the wing or corner, receive a pass (or simulate), square up in your shooting stance, shoot. This is how SGs score in a real offense. 10 cuts each side.',
        type: 'footwork',
      },
      {
        id: 'pos-d3', name: 'Ball-You-Man Triangle', duration: '3 min',
        instructions: 'Off the ball, position yourself so you can see both the ball AND your player at the same time — this is the "ball-you-man" triangle. Walk through 5 defensive positions slowly, practicing this triangle. Then do it at game speed.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'What two positions does Thomas play?',
      options: [
        { text: 'Point Guard and Center', correct: false },
        { text: 'Shooting Guard and Small Forward', correct: true },
        { text: 'Power Forward only', correct: false },
        { text: 'Center and Point Guard', correct: false },
      ],
    },
    xpReward: 30,
  },

  {
    id: 'spacing',
    title: 'Court Spacing',
    emoji: '📐',
    category: 'IQ & Strategy',
    explanation: `Spacing is the foundation of modern basketball offense. When your team is properly spread across the court, each defender must cover too much ground — that creates open shots and driving lanes.

The 5-out spacing: Two players in the corners, two on the wings, one at the top of the key. This stretches the defense to the edges and opens the paint for drives. When the ball-handler drives, the four other players must stay wide and ready to shoot the kick-out pass.

Why spacing matters: If three players crowd the same area, one defender can almost guard two of them. But when you are 15+ feet from your nearest teammate, the defense has to guard everyone honestly. This is why the NBA now prioritizes 3-point shooting — keeping shooters on the perimeter spaces the floor.

Your role in the spacing: As an off-ball player, be in a spot where: (1) your defender would leave a gap in the defense if they helped, and (2) you can catch and shoot immediately. The right spot is usually the corner or the wing — NOT clustered near the ball.

Reading spacing in real time: When your teammate drives, read the defense. If your defender helps on the drive, you are open — call for the ball and shoot. If they stay on you, your teammate has a clear path.

Corner threes: The corner 3-pointer is the most valuable shot in basketball — same distance as a wing 3 but from an angle that is easier to make because you are close to the backboard.`,
    coachingPoints: [
      'Always know where your defender is — if they help on the drive, you are open. React immediately',
      'The hardest part of spacing is STAYING in your spot when nothing is happening. Discipline wins games',
      'Never crowd the dribble-penetrator — give them a lane. If you collapse in, you destroy the spacing',
      'Corner three is your best friend as an SG — when in doubt, fill the corner and be ready to shoot',
    ],
    commonMistakes: [
      'Drifting toward the ball (ball-watching) instead of holding your spacing spot',
      'Standing flat-footed in your spot instead of on the balls of your feet ready to catch and shoot',
      'Not reading when your defender helps — that is the open shot most players miss',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=OhUjYBVEYIQ',
    videoTitle: 'Teaching Court Spacing for Kids',
    highlightAssignment: 'Watch a Steph Curry game. Every time Draymond or another Warrior drives, pause. Look at where Steph is standing — corner or wing, already in his shooting stance, ready to shoot. That is perfect spacing.',
    drills: [
      {
        id: 'space-d1', name: '5-Out Spot Sprint', duration: '4 min',
        instructions: 'Place 5 cones in the 5-out spacing spots. Sprint from spot to spot as called: "Corner left! Wing right! Top!" Your feet must know these spots automatically without thinking. 2 minutes random called movement.',
        type: 'footwork',
      },
      {
        id: 'space-d2', name: 'Corner Catch & Shoot', duration: '5 min',
        instructions: 'Stand in the corner. Simulate receiving a kick-out pass — catch with feet already set — and shoot immediately. No extra dribbles. 15 catch-and-shoots from each corner. The catch-to-release must be under 1 second.',
        type: 'shooting',
      },
      {
        id: 'space-d3', name: 'Help Defender Read', duration: '3 min',
        instructions: 'Have a "defender" stand between you and the basket. When they step toward the ball handler, you are open — move to the open spot and call for the ball. When they stay, hold your ground. 10 reads. Build the reflex.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'What is the most valuable shot in basketball based on spacing principles?',
      options: [
        { text: 'Long mid-range jumper', correct: false },
        { text: 'Corner 3-pointer', correct: true },
        { text: 'Half-court shot', correct: false },
        { text: 'Floater in the lane', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'triple-threat',
    title: 'Triple Threat Position',
    emoji: '⚡',
    category: 'Fundamentals',
    explanation: `Triple threat is the most important offensive position in basketball. When you catch the ball before you dribble, you are in triple threat — and you have three equal options: shoot, pass, or drive.

The position mechanics: Feet slightly wider than shoulder-width apart. Knees deeply bent — this is your power source. Weight on the balls of your feet, not your heels. Ball held at your hip on your shooting side, about waist height. Both hands on the ball. Eyes up, reading the defense.

Why it works: The defender does not know which option you will use. If they step back expecting the drive, you shoot. If they crowd you expecting the shot, you drive past them. If they help off your teammate, you pass. Every move starts from the same position.

The jab step: From triple threat, step sharply with your non-pivot foot (fake a drive). If the defender reacts: (a) They backed up — pull back and shoot. (b) They stepped with you — crossover in the opposite direction. (c) They did not move — drive straight at them. The jab step reads the defense for you automatically.

The pump fake: Bring the ball up to your full shooting position — complete shooting motion. If the defender jumps, drive past them while they are in the air. The pump fake only works if it looks exactly like your real shot. This takes hundreds of repetitions to perfect.

Progression: Triple threat → read defender → jab step → react to what they give you. This is how elite scorers create their shots. Not by running plays, but by reading the defense from one position.`,
    coachingPoints: [
      'Low and balanced is more important than upright — your power and quickness both come from bent knees',
      'The jab step direction matters less than selling it — your eyes and body language sell the fake',
      'Do not hold triple threat more than 2-3 seconds or the advantage disappears as defenders recover',
      'Keep your pivot foot planted until you decide. Once it lifts, you must shoot or pass — no more dribbling',
    ],
    commonMistakes: [
      'Straight legs — you have zero explosion from a standing position. Knees must be deeply bent',
      'Ball too high or too far from your body — this slows your ability to shoot, pass, or drive',
      'Pump faking without your knees bending — the defender will not bite on a fake that looks different from your real shot',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=C0YjBpKsTXI',
    videoTitle: 'Triple Threat Coaching for Youth Basketball',
    highlightAssignment: 'Find "Kobe Bryant triple threat and jab steps" on YouTube. Watch how every touch starts with him getting low and reading the defense before he moves. Notice he already knows his move before he catches the ball.',
    drills: [
      {
        id: 'tt-d1', name: 'Triple Threat Hold & Read', duration: '3 min',
        instructions: 'Get in triple threat. Have someone stand 5 feet away as defense. Hold position and READ their body: where are their feet, where are their hands, which direction are they leaning? Call out what you see before moving. 10 reps. Build the read-before-react habit.',
        type: 'footwork',
      },
      {
        id: 'tt-d2', name: 'Jab Series — 3 Reads', duration: '5 min',
        instructions: 'Jab right. If defender stays — drive right and finish. If defender steps with you — crossover left and shoot pull-up. If defender backs up — pull back and shoot. 5 reps each = 15 total. React to what the defense gives, not what you planned.',
        type: 'footwork',
      },
      {
        id: 'tt-d3', name: 'Shot vs. Pump Fake Mirror', duration: '4 min',
        instructions: 'Take a real shot. Then do an identical pump fake from the exact same position. Video yourself — if there is any visual difference between your shot and fake, find it and fix it. 10 real shots alternating with 10 pump fakes. The fake must be indistinguishable.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'What are the three options from triple threat position?',
      options: [
        { text: 'Run, jump, or fall', correct: false },
        { text: 'Shoot, pass, or drive', correct: true },
        { text: 'Dribble, spin, or sit', correct: false },
        { text: 'Block, steal, or rebound', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'dribbling',
    title: 'Dribbling Fundamentals',
    emoji: '🤜',
    category: 'Fundamentals',
    explanation: `Dribbling is controlled ball movement — not just bouncing. Elite ball-handlers use the dribble as a weapon, not just transportation.

Hand mechanics: Use your FINGERTIPS, not your palm. Spread your fingers wide — more surface contact means more control. Your wrist snaps down to push the ball and snaps back up to guide it. Never slap the ball — feel it through your fingertips on every single bounce.

Body position: Stay low — bent knees, back slightly forward, free arm up as a shield. The lower you are, the shorter the dribble distance, which means faster and harder to steal. Elite ball-handlers dribble at shin to knee height in traffic.

Eyes up, always: The best ball-handlers do not look at the ball. You cannot see defenders, teammates, or openings if you are watching the ball. Start slow with your eyes up, then build speed over weeks. Tape a card to your forehead as a reminder in practice.

Basic moves: Crossover — change hands in front of your body, low and fast, ball below your knee. High crossovers get stolen every time. Between the legs — protect the ball from defenders who overplay. Behind the back — change direction when a defender cuts off your path. Hesitation (hesi) — slow down like you are stopping, then EXPLODE past. Changes the defender's momentum.

Weak hand development: Spend equal time on your non-dominant hand. Right-handed players who cannot go left are predictable — every defender takes away the right after 2-3 possessions. Allen Iverson crossed Michael Jordan with his left hand.

Speed vs. control: Control comes first, speed comes automatically. If you are losing the ball at 70% speed, slow to 50% until control is automatic, then increase.`,
    coachingPoints: [
      'Low dribble in traffic, higher only in open court — the defender\'s reach height determines the safe dribble height',
      'Change of pace is more dangerous than pure speed. Slow-slow-FAST freezes defenders better than just being faster',
      'Your weak hand is a secret weapon — most defenders assume you will not go that way and give it to you for free',
      'Protect the ball with your body and off-arm — your body is a legal screen between the ball and the defender',
    ],
    commonMistakes: [
      'Looking down at the ball during dribbling — you are training yourself to be blind on a basketball court',
      'Dribbling too high in traffic — any defender can reach in and steal a thigh-high dribble',
      'Only going to your strong side — defenders notice after 2-3 possessions and eliminate your only move',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=0_56e5GKKwA',
    videoTitle: 'Dribbling Basics for Young Players',
    highlightAssignment: 'Find "Allen Iverson crossover on Michael Jordan 1997 NBA Playoffs" on YouTube. Watch it in slow motion 5 times. Notice (1) AI\'s low body position, (2) the ball never goes above his knee on the cross, (3) Michael Jordan\'s feet actually move — AI sold the fake perfectly.',
    drills: [
      {
        id: 'drib-d1', name: 'Two-Ball Stationary Circuit', duration: '4 min',
        instructions: 'Dribble two balls simultaneously: (1) both at the same time, (2) alternating, (3) one high one low, (4) both low. 30 seconds each variation. This forces your hands to work independently and builds weak-hand strength and coordination.',
        type: 'ball-handling',
      },
      {
        id: 'drib-d2', name: 'Change of Pace Full Court', duration: '4 min',
        instructions: 'Dribble full court using: jog 3 steps → SPRINT 5 steps → jog 3 → SPRINT 5. This is the change of pace that freezes defenders. No crossing over — pure speed change only. 4 full court lengths. The jog must be slow enough to look like you\'re stopping.',
        type: 'ball-handling',
      },
      {
        id: 'drib-d3', name: 'Eyes-Up Cone Slalom', duration: '4 min',
        instructions: 'Set 5 cones in a line 3 feet apart. Slalom through them keeping your head completely up — have someone hold up different numbers of fingers and call them out while dribbling. This builds the automatic dribble that operates without your eyes. 3 minutes continuous.',
        type: 'ball-handling',
      },
    ],
    quiz: {
      question: 'What part of your hand should you use when dribbling?',
      options: [
        { text: 'Your palm', correct: false },
        { text: 'Your wrist only', correct: false },
        { text: 'Your fingertips', correct: true },
        { text: 'Your knuckles', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'passing',
    title: 'Passing Fundamentals',
    emoji: '➡️',
    category: 'Fundamentals',
    explanation: `Passing is the fastest way to move the ball and the fastest way to score. A great pass beats any defender because the ball travels faster than any player can run.

The three fundamental passes:

Chest Pass: Elbows in, ball at chest height. Step toward your target. Extend your arms and snap your wrists — the ball should arrive chest-high to your teammate. Your thumbs end pointing down on release. Use for medium distances with no defenders in the passing lane.

Bounce Pass: Aim for the floor about two-thirds of the way to your receiver — it should bounce up to their waist. Harder to steal because it goes beneath a defender's hands. Use when driving defenders are in the passing lane, or for feeding the post.

Overhead Pass: Hold the ball above your head with both hands. Use to pass over a shorter defender or for a quick outlet pass after a rebound. Do not bring it behind your head — that telegraphs the pass.

Advanced passing rules: Pass to where they are going, not where they are. Lead your receiver into space. A pass thrown behind a cutting player is always out of rhythm. Look away from where you are passing — if your eyes lock on the target, the defender follows your eyes. Fake before you pass — a shot fake or jab step moves the defender, then you pass into the space they vacated.

When NOT to pass: Do not force a pass into traffic. A turnover is worse than a bad shot. If no pass is open, use your dribble to find a better angle, or reset.`,
    coachingPoints: [
      'A perfectly timed pass creates an easier shot than any individual move — assists turn into championships',
      'Your eyes are the most powerful fake you have — look left, pass right, and the defender has no chance',
      'Step into every pass — stepping adds velocity and accuracy. A lazy pass from your spot gets deflected',
      'Practice skip passes (cross-court passes) — they move the defense faster than anything else in basketball',
    ],
    commonMistakes: [
      'Throwing the pass to where the receiver IS — they have moved by the time the ball arrives',
      'Looking directly at the target before passing — a good defender reads your eyes before the ball moves',
      'Rushing the pass in traffic — one half-second to read the defense prevents 80% of turnovers',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=AWVgKM_9Yq4',
    videoTitle: 'Basketball Passing Drills for Kids (Jr. NBA / MOJO)',
    highlightAssignment: 'Watch "Steph Curry best assists and passes" on YouTube. Count how many times he looks LEFT and passes RIGHT. That eye deception is a skill you can train today. Try it in practice.',
    drills: [
      {
        id: 'pass-d1', name: 'Wall Pass Circuit', duration: '4 min',
        instructions: 'Against a wall: 20 chest passes (step into each), 20 bounce passes (aim 2/3 of the way), 20 overhead passes. Focus on your wrist snap — your thumbs must end pointing DOWN at the wall. Time yourself and try to beat your time next session.',
        type: 'ball-handling',
      },
      {
        id: 'pass-d2', name: 'Lead Pass in Stride', duration: '4 min',
        instructions: 'Place a cone 15 feet away. Sprint past it, then receive a "lead pass" (toss the ball ahead of where you are running). Catch in stride without slowing down and finish at the basket. This trains both throwing and catching on the move. 10 reps each direction.',
        type: 'footwork',
      },
      {
        id: 'pass-d3', name: 'Eye Fake Pass', duration: '3 min',
        instructions: 'Stand with two targets. Look directly at Target A for 1 full second — then pass to Target B. Build the habit of separating your eyes from your hands. 20 eye-fake passes alternating targets. This is the most advanced passing skill and it starts here.',
        type: 'ball-handling',
      },
    ],
    quiz: {
      question: 'When making a bounce pass, where should the ball hit the floor?',
      options: [
        { text: 'Right in front of your feet', correct: false },
        { text: 'Right in front of your receiver', correct: false },
        { text: 'About two-thirds of the way to your receiver', correct: true },
        { text: 'Exactly halfway between you and your receiver', correct: false },
      ],
    },
    xpReward: 30,
  },

  {
    id: 'shooting-form',
    title: 'Shooting Form',
    emoji: '🎯',
    category: 'Fundamentals',
    explanation: `Shooting is a skill built through thousands of CORRECT repetitions. One bad habit repeated 10,000 times is harder to fix than starting with zero. Here are the full mechanics.

BEEF — the foundation:

B — Balance: Feet shoulder-width apart or slightly wider. Shooting-side foot slightly ahead of the other. Knees bent — this is your power source. Weight on the balls of your feet, balanced evenly. No leaning forward or backward on your shot.

E — Eyes: Pick your target EARLY — before you even catch the ball, your eyes find the rim. Focus on the back of the rim (the far edge). Your eyes lead your hands. Keep them on the target through the entire shot and follow-through.

E — Elbow: Shooting elbow directly under the ball, pointing at the basket — NOT flared out to the side. Your shooting hand's wrist is bent back (loaded). The ball rests on your fingertips and the pad of your palm, NOT flat in your palm. Your guide hand (non-shooting) is on the SIDE of the ball — it is a shelf, not a pusher.

F — Follow Through: As you release, your wrist snaps DOWN — your fingers end up pointing at the floor in a goose-neck position. HOLD this follow-through until the ball lands. This ensures full wrist snap and proper arc.

The release: As your legs straighten (power comes from your legs, not your arms), the ball rolls off your fingertips from pinky to index finger, creating backspin. Backspin softens the ball and increases makes off the rim.

Shot arc: Aim for a 45-degree arc minimum. Flat shots hit the front of the rim. High-arc shots hit near the back of the rim and fall in far more consistently.`,
    coachingPoints: [
      'Build the shot from the ground up every single day: feet → knees → elbow → eyes → follow-through. Check each piece',
      'Your guide hand is NOT a shooter — if it pushes, your shot goes sideways. Discipline your guide hand first',
      'The follow-through hold is non-negotiable — players who drop their arm early have inconsistent shooting every time',
      'Shoot 100 close-range makes daily with perfect form before worrying about extending your range',
    ],
    commonMistakes: [
      'Flat palm instead of fingertip release — you lose backspin and accuracy completely',
      'Guide hand thumb pushing the ball forward or sideways — causes the shot to go left for right-handed shooters',
      'Dropping your arm before the ball hits — the snap of the wrist creates 30% of the shot\'s accuracy and arc',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=2f9YBKAxmqQ',
    videoTitle: 'B.E.E.F. — The Proper Way to Shoot a Basketball',
    highlightAssignment: 'Search "Kobe Bryant shooting form slow motion" and "Steph Curry shooting form slow motion." Watch each one 3 times and compare their elbow position, follow-through, and arc. Notice what they share. That is the mechanics you are building.',
    drills: [
      {
        id: 'shoot-d1', name: 'One-Hand Form Shooting', duration: '5 min',
        instructions: 'Remove your guide hand completely. Shoot with ONLY your shooting hand from 3-4 feet away. This forces correct mechanics — without the guide hand you must use fingertips and proper wrist snap to reach the basket. 25 one-hand makes before moving.',
        type: 'shooting',
      },
      {
        id: 'shoot-d2', name: 'Follow-Through Hold', duration: '4 min',
        instructions: 'Shoot from the free throw line. After EVERY shot, hold your follow-through (arm up, wrist snapped, fingers pointing floor) until the ball HITS THE FLOOR — not the rim, the floor. 20 shots. This builds the habit permanently into muscle memory.',
        type: 'shooting',
      },
      {
        id: 'shoot-d3', name: 'Footwork Catch & Shoot', duration: '4 min',
        instructions: 'Start 15 feet away. Toss the ball toward the basket, sprint to catch it before it lands, set your feet in a 1-2 step, and shoot. This trains your shooting footwork — the most undercoached skill for wing players. 15 reps from various angles.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'What does BEEF stand for in shooting mechanics?',
      options: [
        { text: 'Ball, Energy, Elbow, Feet', correct: false },
        { text: 'Balance, Eyes, Elbow, Follow-through', correct: true },
        { text: 'Bounce, Extend, Exhale, Finish', correct: false },
        { text: 'Body, Elevation, Effort, Form', correct: false },
      ],
    },
    xpReward: 40,
  },

  {
    id: 'layups',
    title: 'Layups',
    emoji: '🏃',
    category: 'Fundamentals',
    explanation: `The layup is the closest and most efficient shot in basketball. A missed layup is the most costly mistake you can make — you had a near-certain 2 points and gave it away.

Right-hand layup — step by step:
1. Approach from the right side (or straight ahead)
2. The last two steps before you jump are: LEFT foot plant → RIGHT foot plant
3. On the RIGHT foot, explode UP — not forward
4. Your RIGHT knee comes up to add height and protect the ball from defenders
5. Lay the ball SOFTLY off the TOP SQUARE of the backboard with your right hand
6. Land balanced on both feet, ready to follow your own shot

Left-hand layup (mirror): Approach from left side → RIGHT foot → LEFT foot plant → explode up → LEFT knee up → left hand off the backboard.

The backboard is your friend: The top square of the backboard is your target — not the rim directly. Banking the ball significantly increases makes because it softens the approach angle. Only go straight at the rim on direct-front layups.

Finishing through contact: In games, defenders will hit you. The layup must be finished regardless. Practice absorbing contact before you release — do not flinch or your shot changes. Step through the contact, protect the ball, finish soft.

The reverse layup: When a defender is under the basket, go under the rim and finish on the other side using the backboard for protection. Harder to block, harder to master, but necessary.

Common layup upgrades: Euro step (two-step move under a defender), floater (high-arc shot over a taller defender in the lane), scoop shot (underhand finish). All start with perfect basic layup mechanics.`,
    coachingPoints: [
      'Never — EVER — miss a layup in practice. Every missed practice layup makes game-layup misses more likely',
      'The Mikan Drill should be done every single practice without exception — it is not optional',
      'Use the backboard on all angled layups — it is there to help you increase your make percentage',
      'Practice layups at FULL GAME SPEED — slow layup practice does not prepare you for a defender chasing you',
    ],
    commonMistakes: [
      'Jumping forward instead of UP — you run into the backboard and lose your angle and control',
      'Using the wrong hand for the side you are attacking — left side always gets left hand, right always gets right',
      'Not using the backboard on angled layups — direct rim layups miss far more often than banked layups',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=YYLvlPQgPrs',
    videoTitle: 'How to Teach the Layup to Youth Players in 5 Minutes',
    highlightAssignment: 'Find "Michael Jordan layup compilation" on YouTube. Count how many he banks off the glass versus going straight to the rim. Notice how he goes UP, not forward, and how he finishes through contact from defenders on every rep.',
    drills: [
      {
        id: 'lay-d1', name: 'Mikan Drill', duration: '5 min',
        instructions: 'Under the basket: right-hand layup from the right side, catch the ball before it hits the floor, step to the left, left-hand layup from the left side. Non-stop for 5 minutes. Left-right-left-right without stopping. This is the most important layup drill in basketball. Count your makes.',
        type: 'footwork',
      },
      {
        id: 'lay-d2', name: 'Full Speed Game Layup', duration: '5 min',
        instructions: 'Start at half court. Dribble at full game speed. Lay it up with the correct hand and correct footwork. No slowing down on the last two steps — attack the basket at game speed. Right-hand from right wing: 10 makes. Left-hand from left wing: 10 makes.',
        type: 'footwork',
      },
      {
        id: 'lay-d3', name: 'Contact Finish', duration: '3 min',
        instructions: 'Drive to the basket. Have someone bump your arm or shoulder as you finish — controlled contact, not hard. Practice finishing the layup through the bump without changing your shot. This is what separates players who score in traffic from those who do not. 10 contact finishes.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'On a right-hand layup from the right side, which foot do you jump off of?',
      options: [
        { text: 'Right foot', correct: false },
        { text: 'Left foot', correct: true },
        { text: 'Both feet together', correct: false },
        { text: 'Whichever feels comfortable', correct: false },
      ],
    },
    xpReward: 40,
  },

  {
    id: 'defense-stance',
    title: 'Defensive Stance',
    emoji: '🛡️',
    category: 'Defense',
    explanation: `Defense is a choice. Offense requires talent — defense requires will. The player who chooses to defend wins more than the player who is only skilled.

The defensive stance — full mechanics: Feet wider than shoulder-width (wider than your offensive stance). Knees deeply bent — get LOW. Your hip crease should be below your knees. Back flat and chest up so you can see the whole court. Weight on the BALLS of your feet — not your heels. Heels mean you are slow to react. Arms out to the sides, palms up — one hand in the passing lane, one hand low near the dribble. Eyes on the offensive player's chest — the ball moves faster than feet, but the chest never fakes.

Defensive footwork — the slide: Never cross your feet. EVER. Crossed feet means 0.5 seconds to recover, which equals an open lane. Instead: slide by pushing off your back foot to move laterally, bringing your front foot to reset. Stay low throughout the entire slide. The slide keeps you between the ball-handler and the basket at all times.

Positioning principles: Stay between your player and the basket — not just the ball. Give a step of cushion to fast players — do not let them blow by you immediately on the first step. Take away their strong hand by overplaying one direction.

Contesting shots: Sprint to close out. As you approach the shooter, CHOP your steps (short, quick steps) to stop your momentum — if you fly past, they step through you for an easy shot. One hand up contesting. Do not reach — that is a foul. Stay on your feet when they pump fake.

The stance is exhausting: Great defenders are in better shape than their opponents. You cannot maintain the stance for 40 minutes if you are not conditioned. Conditioning IS defense.`,
    coachingPoints: [
      'Your defensive stance must be lower than your offensive stance — it is harder and that is exactly the point',
      'Never gamble for steals — stay disciplined. Reaching creates fouls and easy layups from your mistakes',
      'Communicate every second on defense: "Ball!" when guarding the dribbler, "Help left!" when your player cuts',
      'The best defenders study offensive players tendencies before games — defense preparation starts in film study',
    ],
    commonMistakes: [
      'Standing straight up — you have zero explosion from an upright, flat-footed position',
      'Crossing your feet when sliding — creates a gap the ball-handler will hit every single time',
      'Watching the ball instead of the offensive player\'s chest — ball fakes fool you, chest movement does not',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=HHFzW6lhjmM',
    videoTitle: 'Defensive Stance and Defensive Slides Tutorial',
    highlightAssignment: 'Find "Kobe Bryant defense highlights" on YouTube. Watch specifically for: (1) how low he gets, (2) he never crosses his feet while sliding, and (3) his hands are always moving and active. Watch it twice.',
    drills: [
      {
        id: 'def-d1', name: 'Wall Sit Into Defensive Stance', duration: '3 min',
        instructions: 'Sit against the wall at 90 degrees. Now take your back off the wall and hold the defensive stance position with no support. Hold 30 seconds, rest 15, repeat 4 times. This builds the exact quad strength required to hold a low defensive stance for 40 minutes of game play.',
        type: 'strength',
      },
      {
        id: 'def-d2', name: 'Defensive Slide Gauntlet', duration: '4 min',
        instructions: 'Slide from one sideline to the other — DO NOT stand up between reps. Touch the sideline with your hand each time. 6 lengths = 1 set. Do 3 sets with 20 seconds rest. Your legs should be burning by set 2. That is the position that wins defensive battles.',
        type: 'footwork',
      },
      {
        id: 'def-d3', name: 'Mirror Drill', duration: '4 min',
        instructions: 'Face a partner. They move — you mirror them in full defensive stance, never crossing your feet. 45 seconds on, 15 seconds rest. The partner tries to get past you by changing direction. You maintain position without reaching. 4 rounds.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'In a proper defensive stance, where should your weight be?',
      options: [
        { text: 'Back on your heels for balance', correct: false },
        { text: 'On the balls of your feet with knees bent', correct: true },
        { text: 'Evenly on flat feet', correct: false },
        { text: 'Leaning forward on your toes', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'rebounding',
    title: 'Rebounding',
    emoji: '💪',
    category: 'Fundamentals',
    explanation: `Every rebound your team gets is one fewer offensive possession for the opponent. Controlling the boards directly controls the game's tempo and final score.

Box out — the fundamental: When a shot goes up, your FIRST move is to find your man and get between them and the basket. Step into them with your back, make contact, and create a wall. Feet wide, knees bent, elbows out. You do not jump yet — you hold position until you know where the ball is going.

Reading the miss: Most players do not know where missed shots go — great rebounders do. General rule: shots from the right side bounce to the left side. Shots from the left side bounce to the right. Long shots miss long. Short shots miss short. Study where shots miss from different spots and be there BEFORE the ball arrives.

The jump: After boxing out, go GET the ball — both hands, at the peak of your jump. Do not wait for it to come to you. Jump through the defender if needed within the rules. Catch it with two hands in a W grip — thumbs pointing toward each other.

Securing the rebound: The moment you catch it: (1) pull it to your CHIN immediately with elbows flared out wide — this protects the ball from rip-through attempts, (2) keep your feet wide for balance, (3) pivot to face the outlet direction before moving.

Offensive rebounding: You must read the shooter's arc and body language to predict the miss BEFORE it happens. Crash hard to the weak side (opposite side of the shot). The offensive rebounder does not need a box-out — they need faster instincts.

The mental game: Every rebound is a 50/50 ball. The player who WANTS it more wins those battles. Dennis Rodman won 7 rebounding titles because he was obsessed — not because he was the most athletic.`,
    coachingPoints: [
      'Box out on EVERY shot — not just the ones you think are going to miss. Most "sure makes" miss too',
      'Two hands always — one-handed rebounds get stripped. Secure possession before you think about the outlet',
      'Chin the ball the moment you catch it — the most common turnover after a rebound is a strip from behind',
      'Communicate rebounding assignments before the game with teammates — crashes happen without communication',
    ],
    commonMistakes: [
      'Watching the shot instead of finding your man — by the time the shot misses, you are already out of position',
      'Going for the ball before boxing out — faster players get around you every time',
      'Holding the ball low after catching it — elbows at chin level is non-negotiable in traffic situations',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=fvu-QCVfBzU',
    videoTitle: 'Rebounding Tips, Skills and Drills — USA Basketball',
    highlightAssignment: 'Find "Dennis Rodman rebounding highlights and technique" on YouTube. Notice how he positions himself BEFORE the shot goes up — he is already in rebounding position while the shooter is still in the air. That is film study in action.',
    drills: [
      {
        id: 'reb-d1', name: 'Box Out Hold', duration: '4 min',
        instructions: 'Partner tries to get to the basket. You box out for 5 seconds — back contact, wide base, elbows out. No jumping yet, just hold position. If they get around you, reset immediately. 10 box-out holds each side. This builds the habit of finding your man BEFORE going for the ball.',
        type: 'strength',
      },
      {
        id: 'reb-d2', name: 'Tip Drill', duration: '4 min',
        instructions: 'Stand under the basket. Toss the ball off the backboard, jump and tip it back up without catching it — keep it alive for 10 consecutive tips. Right hand 10 tips, left hand 10 tips. Builds explosive rebounding hands and directional control for when you cannot fully catch the ball.',
        type: 'strength',
      },
      {
        id: 'reb-d3', name: 'Catch and Chin', duration: '4 min',
        instructions: 'Throw the ball off the backboard at various angles. Catch it with two hands at the peak of your jump, bring it IMMEDIATELY to your chin with elbows flared. Hold 1 second. Release. 15 reps. Build the muscle memory: catch → chin → protect. Every single time.',
        type: 'strength',
      },
    ],
    quiz: {
      question: 'Where does a missed shot from the right side of the court typically bounce?',
      options: [
        { text: 'Back to the right side', correct: false },
        { text: 'Straight out to the perimeter', correct: false },
        { text: 'To the left (weak) side', correct: true },
        { text: 'Always straight back to the shooter', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'cutting',
    title: 'Cutting to Get Open',
    emoji: '✂️',
    category: 'IQ & Strategy',
    explanation: `Cutting is how you score WITHOUT dribbling. The best off-ball scorers in basketball history got most of their baskets from intelligent cuts, not individual dribble moves.

The V-Cut — your most used cut:
1. Walk toward the defender — get them moving WITH you (2-3 slow steps)
2. When within 2-3 steps of them, PLANT your outside foot
3. EXPLODE in the opposite direction — 100% max speed
4. Sprint to your spot (wing or corner), hands already up and ready to catch
The key: your first 2-3 steps must be slow enough to trick the defender, then your explosion must be maximum speed.

The Backdoor Cut — most dangerous cut:
1. The set-up: the defender is overplaying you between you and the ball, or they are watching the ball
2. Take 1-2 steps toward the ball handler — defender follows
3. Plant your inside foot and cut HARD toward the basket BEHIND the defender
4. Your teammate immediately throws a direct bounce pass to the basket
5. Catch in stride and finish with a layup
Use this any time your defender's eyes go to the ball.

The L-Cut: Start in the corner, cut straight up toward the elbow, then cut 90 degrees hard to the wing. Creates separation with a sharp directional change.

Selling the cut: The cut only works if you sell the fake first. Slow-slow-EXPLOSION. If you sprint from the beginning, the defender adjusts. Deception comes first, then speed.

Timing your cut: Cut when your teammate is about to make a decision — as they pump fake, as they drive, as a defender's attention shifts to the ball. The window for a good cut is 1-2 seconds. Miss the window and the advantage is gone.`,
    coachingPoints: [
      'Every possession off-ball, look for the backdoor cut first — if your defender is not watching, punish them immediately',
      'Hand placement as you cut is critical — reach for the ball with both hands, palms facing the passer, before you arrive',
      'After receiving from a cut, immediately look to shoot or drive — hesitating kills the advantage the cut created',
      'Cut at 100% speed — a half-speed cut fools nobody. Either fully commit or do not cut',
    ],
    commonMistakes: [
      'Cutting at the same speed throughout — no deception equals no separation from the defender',
      'Not having your hands up and ready before you reach the catch point — good defenders deflect unprepared catches',
      'Cutting and stopping in the paint — keep moving through the cut, which keeps the defense moving with you',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=ygn9ktSdaMM',
    videoTitle: 'Backdoor Cut Drills for Kids Basketball',
    highlightAssignment: 'Watch "Boston Celtics offense off-ball movement" or "Golden State Warriors off-ball movement." Pause every time a player scores without dribbling. Count how many of those were cuts. You will be surprised how many baskets come from intelligent cutting.',
    drills: [
      {
        id: 'cut-d1', name: 'V-Cut Sell and Explode', duration: '5 min',
        instructions: 'Start on the wing. Walk 2-3 steps toward the key SLOWLY — sell the approach. Plant and EXPLODE to the corner. Catch in your shooting stance and shoot immediately. 10 V-cuts to the corner, 10 V-cuts back to the wing. The slow walk is as important as the explosion — both must be authentic.',
        type: 'footwork',
      },
      {
        id: 'cut-d2', name: 'Backdoor Reading Drill', duration: '4 min',
        instructions: 'Have a partner play you overplayed on the wing. Take 2 steps toward them, plant, and cut backdoor to the basket. Your partner tries to stay with you. Catch the bounce pass and finish with a layup. 10 reps each side. Practice reading the overplay and punishing it.',
        type: 'footwork',
      },
      {
        id: 'cut-d3', name: 'Deceptive Speed Change', duration: '3 min',
        instructions: 'Full court: jog 4 steps (genuinely slow down) → SPRINT 6 steps → jog 4 → SPRINT 6. Four lengths. Your legs must know how to go from 40% to 100% instantly. The deception only works when the slow truly looks like a stop and the fast truly looks like an explosion.',
        type: 'footwork',
      },
    ],
    quiz: {
      question: 'When is the best time to use a backdoor cut?',
      options: [
        { text: 'Whenever you want to run to the basket', correct: false },
        { text: 'When your defender is looking at the ball or overplaying you', correct: true },
        { text: 'Only on fast breaks', correct: false },
        { text: 'When the shot clock is expiring', correct: false },
      ],
    },
    xpReward: 40,
  },

  {
    id: 'fast-breaks',
    title: 'Fast Breaks',
    emoji: '⚡',
    category: 'IQ & Strategy',
    explanation: `The fast break is the highest-efficiency play in basketball — more players than defenders means mathematically better shots. But most players waste fast breaks by over-dribbling or making the wrong decision.

Push immediately: The fast break starts the MOMENT your team gets the ball — rebound, steal, or made basket. The outlet pass must happen within 1-2 seconds. Every second of delay gives the defense time to sprint back.

Lane running: Three players running a fast break take three lanes: left sideline, middle, right sideline. The ball handler is in the middle (easiest to pass either direction). Wing players run AHEAD of the ball — do not wait for the ball to come to you first.

Decision-making in a 3-on-2: The middle player attacks at the rim — forcing both defenders to react. Read: if a defender drops to stop the drive, pass to the open wing for the layup. If a defender steps up to stop the pass, drive straight to the basket. If both defenders collapse, kick to the trailing player for the 3.

Decision-making in a 2-on-1: Attack at the defender. Force them to choose. If they stop the ball, pass. If they go to the pass, drive. Do not make the pass too early — make the defender commit first, then pass into the space they vacated.

Do not force it: A fast break that becomes a turnover is worse than slowing down and running a set play. If the defense gets back and is set, pull it out and run your offense.

Sprint back on defense: The moment your fast break possession ends — make or miss — sprint back immediately. The team that sprints back hardest prevents the most fast breaks against them.`,
    coachingPoints: [
      'The outlet pass is the most important fast break skill — practice it after every rebound in every drill',
      'Never dribble when you can pass on a fast break — the ball moves faster than your feet',
      'The middle player controls everything on the break — their decision affects all three options for your team',
      'Communicate on the break: "Ball! Left! Right!" so everyone knows lane assignments instantly',
    ],
    commonMistakes: [
      'Dribbling too many times before deciding — the defense uses every extra dribble to recover position',
      'All three players running the same lane — this destroys the spacing and lets one defender guard two of you',
      'Passing too early in the 2-on-1 — the single defender has not committed yet, so the pass goes to a covered player',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=JQVV40UO_Hs',
    videoTitle: '7 Fast Break Basketball Drills for Youth',
    highlightAssignment: 'Find "Golden State Warriors fast break highlights." Notice how within 1-2 seconds of getting the ball they are already in transition. Count the dribbles from rebound to finished shot — it is almost always 4 or fewer total dribbles.',
    drills: [
      {
        id: 'fb-d1', name: 'Outlet to Finish', duration: '4 min',
        instructions: 'Simulate a rebound under your basket. Outlet pass to the wing (or throw it yourself), sprint to the middle, receive the return pass, dribble to the other end, and finish with a layup. Total dribbles allowed: 5 maximum. 8 full-court transitions.',
        type: 'footwork',
      },
      {
        id: 'fb-d2', name: '3-Lane Sprint Pattern', duration: '4 min',
        instructions: 'Run a 3-lane fast break pattern without a ball: left lane sprints to the left side of the rim, middle to the free throw line, right to the right side of the rim. Learn exactly where each lane goes before you ever have a ball in your hands. 6 full-court runs.',
        type: 'footwork',
      },
      {
        id: 'fb-d3', name: '2-on-1 Decision Drill', duration: '4 min',
        instructions: 'You and a partner vs. one defender (or simulate). Ball handler in the middle attacks. The defender shows their choice — react: pass if they stop the ball, drive if they go to the pass. The correct decision must happen in 2 seconds or fewer. 10 possessions.',
        type: 'ball-handling',
      },
    ],
    quiz: {
      question: 'In a 2-on-1 fast break, when should you make the pass to your teammate?',
      options: [
        { text: 'Immediately when you cross half court', correct: false },
        { text: 'After the defender has committed to stopping you', correct: true },
        { text: 'Only if you are too tired to finish', correct: false },
        { text: 'Always — passing is always better than driving', correct: false },
      ],
    },
    xpReward: 40,
  },

  {
    id: 'bball-iq',
    title: 'Basketball IQ',
    emoji: '🧠',
    category: 'IQ & Strategy',
    explanation: `Basketball IQ is the ability to make the right decision faster than anyone else on the court. It cannot be measured in athleticism — it is built through watching, studying, and playing with intention every day.

The four pillars of high basketball IQ:

1. See the floor before you need to: Before you catch the ball, scan the court. Know where your teammates are, where the defense is, and what your options are. When you catch the ball, you should not need to figure it out — you should already know.

2. Read the defense: Is your defender sagging off? Stay, shoot immediately. Are they overplaying one direction? Go the other way. Is help defense set on one side? Attack the side with no help. Every defensive setup has a weakness — IQ is finding it before the defense fixes it.

3. Make the simple play: The highest-IQ play is almost never the flashy play. It is the easy basket, the right pass, the smart foul drawn. Michael Jordan said: "Take what the defense gives you." High-IQ players never force anything the defense has taken away.

4. Know the game situation: Score, time, fouls, and shot clock all change what the right play is. Down 3 with 10 seconds: you MUST shoot threes, not twos. Up 5 with the ball: do not risk a turnover going for a highlight. These situations must become automatic responses, not things you calculate in the moment.

Building your IQ daily: Watch game film with a specific question. When you watch, pause every few seconds and ask: "What would I do here?" Then watch what the player does. If they chose differently, figure out what they saw that you missed. This is the fastest way to build IQ — faster than any drill.

IQ vs. Athleticism: A high-IQ player with average athleticism beats a low-IQ player with great athleticism every time. Because IQ compounds — it gets better every game, every year. Athleticism peaks and declines. Build your mind.`,
    coachingPoints: [
      'Slow down your decision-making in practice — force yourself to find the best play, not the first play',
      'Talk on the court constantly — communication is basketball IQ made audible',
      'Watch 30+ minutes of basketball film per week with a notebook — write down what you notice',
      'After every game, replay 3 possessions in your head and ask what you should have done differently',
    ],
    commonMistakes: [
      'Making the first read instead of the best read — your first thought is usually the obvious one the defense expects',
      'Playing at one speed — high-IQ players know when to push the pace and when to slow it down',
      'Not learning from repeated mistakes — low-IQ players make the same error over and over without asking why',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=fDo8Oh6-LEc',
    videoTitle: 'The Ultimate Guide to Basketball IQ',
    highlightAssignment: 'Pick any NBA game. Watch ONLY the Point Guard for one full quarter — not the ball, the POINT GUARD. Watch where they move before the play begins, how they position, what they see. Write down 3 things they did that you would not have thought to do.',
    drills: [
      {
        id: 'iq-d1', name: 'Slow Motion Decision Making', duration: '5 min',
        instructions: 'Play 1-on-1, but at 50% speed. Before every single move, pause for 2 seconds and call out exactly what you see: "Defender\'s right foot is forward — I drive left." The slow speed forces you to articulate your reads. In a real game, those same reads then happen automatically at full speed.',
        type: 'footwork',
      },
      {
        id: 'iq-d2', name: 'Defensive Read and React', duration: '4 min',
        instructions: 'Get in triple threat. Have a partner SHOW you a defensive position: sag back, overplay right, or straight up. You must react correctly and instantly: sag = shoot immediately, overplay right = go left, straight up = your best move. 15 reads. Build automatic responses.',
        type: 'ball-handling',
      },
      {
        id: 'iq-d3', name: 'Situation Basketball', duration: '4 min',
        instructions: 'Play 1-on-1 with game scenarios called out: "Down 2, 15 seconds left." "Up 4, 30 seconds." "Tied, need a stop." Make the smart play for the specific situation. This trains the game-situation IQ that never develops in regular drills.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'What is basketball IQ?',
      options: [
        { text: 'How fast you can run', correct: false },
        { text: 'The ability to make the right decision faster than anyone else on the court', correct: true },
        { text: 'How many points you average per game', correct: false },
        { text: 'Your height and wingspan measurements', correct: false },
      ],
    },
    xpReward: 45,
  },

  {
    id: 'teamwork',
    title: 'Teamwork & Leadership',
    emoji: '🤝',
    category: 'Mindset',
    explanation: `Every championship team in history won because of teamwork — not because of the best individual player. Michael Jordan did not win until Scottie Pippen made the team better. LeBron James built multiple dynasties by raising his teammates' level of play.

What teamwork actually looks like on the court:

Screening: Set HARD screens for your teammates. Step into the screen (do not just stand there), hold the angle, let them use your body to get open. A well-set screen creates a guaranteed open shot or drive. Screens appear in no stat column — but coaches notice every single one.

Communication: Talk on every possession. "Screen left!" "Help side!" "I have ball!" These words prevent defensive breakdowns. Teams that communicate give up fewer points than more athletic teams who play in silence. Communication equals trust.

Celebrate your teammates: Run to your teammate when they make a great play. Point at the passer when you score. When you celebrate others, they play better for you — and they play harder for YOU the next possession.

Take responsibility: When your turnover leads to a fast break layup against your team, acknowledge it immediately: "My fault." Never point at a teammate for your mistake. Players who take responsibility earn trust faster than anyone else.

Be the hardest worker: Teammates follow the player who works hardest in practice — not necessarily the most talented player. When you sprint back on defense, set your feet on charges, and dive for loose balls, your entire team raises their standard.

Sacrifice for the team: Sometimes the right play hurts your individual statistics. Pass up a good shot for your teammate's great shot. Guard the opponent's best player even when you are exhausted. These sacrifices are how championships are built.`,
    coachingPoints: [
      'Your team\'s success is your most important stat. If your team wins and you scored 4 points, that is a great game',
      'Set one great screen per possession — your teammates will reciprocate and you will get more open looks',
      'The player who communicates the most on defense is usually the best defender on the floor',
      'Ask your coach: "Who do you need me to guard tonight?" Great team players take on roles, not just stats',
    ],
    commonMistakes: [
      'Celebrating your own points but not your teammates\' — this is noticed immediately by coaches and every player on both teams',
      'Not setting screens because it does not feel like a big play — screens directly create open shots every time',
      'Blaming teammates for mistakes publicly — even if they made the mistake, public blame destroys trust permanently',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=DdeeIRiCb94',
    videoTitle: 'Easy Basketball Teamwork Drills',
    highlightAssignment: 'Watch 2016 Golden State Warriors highlights. For every basket, find the player who made the PASS that led to the assist. Usually there are 2-3 passes before the final shot. Count all the passes. That is what team basketball looks like at its highest level.',
    drills: [
      {
        id: 'team-d1', name: 'Screen and Read', duration: '5 min',
        instructions: 'Set a proper screen (using a chair). Run off the screen at full speed and read: (1) Curl if the defender goes behind the screen, (2) Fade if the defender fights through, (3) Flare if they switch. Practice all three reads. 10 reps each. One great screen per possession wins games.',
        type: 'footwork',
      },
      {
        id: 'team-d2', name: 'Defensive Communication', duration: '4 min',
        instructions: 'Guard imaginary offense and talk out loud EVERY second: "Ball! Ball! Ball!" when guarding the dribbler, "Help left!" when your player cuts toward you, "Screen right!" when a screen is set. 4 full minutes of continuous defensive communication. Make it automatic.',
        type: 'footwork',
      },
      {
        id: 'team-d3', name: 'No-Dribble Scoring', duration: '4 min',
        instructions: 'Score without dribbling at all. Receive a pass — immediately shoot (catch and shoot) or pass back immediately and cut to get the return pass and shoot. Zero dribbles allowed. This forces off-ball movement and creates the habits that make you an elite teammate. 10 no-dribble scores.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'What do great teammates do when a teammate makes a great play?',
      options: [
        { text: 'Ignore it and focus on their own game', correct: false },
        { text: 'Get jealous and try to top it immediately', correct: false },
        { text: 'Celebrate it genuinely and make the teammate feel valued', correct: true },
        { text: 'Ask the coach why they did not get the play instead', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'watch-film',
    title: 'Study the Game Like a Pro',
    emoji: '🎬',
    category: 'Mindset',
    explanation: `Kobe Bryant woke up at 4 AM to watch film. LeBron James has a full film room in his house. The players who study the game the most become the smartest players — and smart players get more playing time, make better decisions, and have longer careers.

How to watch film with purpose:

Method 1 — Pick one player: For a full quarter, watch ONLY one player. Not the ball. Follow their movement, spacing, cuts, screens, and positioning between every possession. You will see the game at a completely different level.

Method 2 — Study your opponents: Before a game, watch film of the team you are playing. Find the players you will guard: Do they prefer going left or right? Do they shoot off the dribble or the catch? Do they look off help before driving? Use this information to predict and prepare before tip-off.

Method 3 — Self-film: Record yourself playing or practicing. This is the most powerful tool and the most uncomfortable. You will see exactly what your coach sees — the good and the bad. Watch your shooting form, your defensive positioning, your decision-making. Fix what you actually see, not what you think you are doing.

Method 4 — Steal moves: Watch your favorite player. Find ONE move you want to add to your game. Go to the gym immediately after and practice that exact move 20 times. Film study → practice → integration into your game.

What to watch for: Footwork on every play (not just big moments), spacing and positioning off the ball, how players get open (cutting patterns and timing), decision-making with the ball (pass vs. shoot vs. drive), defensive positioning and communication patterns.

The film session habit: 20-30 minutes, 2-3 times per week, with a specific question you are trying to answer. "How does Steph use screens to get his shot?" "How does Kobe create his shot off the dribble?" Focused watching beats passive watching every single time.`,
    coachingPoints: [
      'Have a notebook when watching film — write down what you notice. Writing makes insights stick 10x longer',
      'Pause constantly — a 10-minute clip studied with pauses teaches more than 2 hours of passive watching',
      'Watch film of players at YOUR position and your similar skill level, not just the most famous player',
      'After self-film review, write 3 things to fix and 1 thing you are already doing well. Fix the 3, keep the 1',
    ],
    commonMistakes: [
      'Watching film passively without analyzing — this is just entertainment with a basketball, not studying',
      'Only watching highlight reels — highlights show finished plays. Study possessions that do not end in highlights',
      'Never watching yourself play — the most actionable film you can watch is always film of yourself',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=NLkB65KIPIM',
    videoTitle: 'How to Study Film as a Basketball Player',
    highlightAssignment: 'Watch the video above, then immediately find a 5-minute clip of your favorite player. Watch it using the pause-analyze-resume method from the video. Write down 3 specific things you want to add to your game from what you saw.',
    drills: [
      {
        id: 'film-d1', name: '20-Minute Focused Film Session', duration: '20 min',
        instructions: 'Watch 20 minutes of your favorite player in a full game (not highlights). Every time you see something you want to copy, pause and write it down. Target: find at least 3 specific moves or habits you want to practice this week. This session IS the drill.',
        type: 'stretch',
      },
      {
        id: 'film-d2', name: 'Copy One Move', duration: '5 min',
        instructions: 'Take the number one move from your film session and go to the court right now. Practice it exactly as you saw it — same footwork, same setup, same finish. 20 repetitions. The move does not have to be perfect today. Start building the reps.',
        type: 'footwork',
      },
      {
        id: 'film-d3', name: 'Self-Record and Compare', duration: '8 min',
        instructions: 'Record yourself doing 10 free throws. Watch it back and compare to your ideal form. Find ONE specific thing to fix. Fix it in 10 more free throws, record again. Compare. This self-coaching loop is exactly how professionals develop their craft between seasons.',
        type: 'shooting',
      },
    ],
    quiz: {
      question: 'What is the most useful film you can study as a player?',
      options: [
        { text: 'Only NBA highlight reels of famous plays', correct: false },
        { text: 'Film of yourself playing', correct: true },
        { text: 'Animated basketball strategy tutorials', correct: false },
        { text: 'Basketball video game replays', correct: false },
      ],
    },
    xpReward: 40,
  },
]
