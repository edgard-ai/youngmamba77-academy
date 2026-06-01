import type { Lesson } from '../types'

export const LESSONS: Lesson[] = [
  {
    id: 'rules',
    title: 'Rules of Basketball',
    emoji: '📋',
    category: 'Basics',
    track: 1,
    tagline: 'Know the game before you play the game',
    chapters: [
      {
        title: 'How Points Are Scored',
        content: `Basketball is a game of points. Every time the ball goes through the basket, your team scores. But not every basket is worth the same amount — and understanding this is your first strategic advantage.

A regular basket — any shot taken from inside the 3-point arc — is worth 2 points. A shot from behind the 3-point arc is worth 3 points. Free throws, awarded after certain fouls, are worth 1 point each.

Here is where strategy enters: a player who shoots 40% from the 3-point line is actually more valuable than a player who shoots 50% from the mid-range, because the 3-point shooter generates more points per attempt. This is why modern basketball has become dominated by 3-point shooting — the math proves it is worth more.

The free throw is the most efficient play in basketball. No defense. No defender. Just you and the rim. The best teams in history draw the most free throws because they know that 80% shooting from the line beats almost any field goal percentage. Attack the basket. Get to the line. Make your free throws.

The shot clock adds urgency: NBA teams have 24 seconds to shoot after gaining possession. College teams have 30 seconds. Most youth leagues vary — know your league's shot clock. Running out the shot clock without shooting is a turnover. Smart players track the clock automatically.`,
        videoUrl: 'https://www.youtube.com/watch?v=oyjYgmsM00Q',
        videoTitle: 'Rules of Basketball for Beginners',
      },
      {
        title: 'Moving With the Ball',
        content: `The ball handler — the player holding the ball — has specific rules about how they can move. Understanding these rules prevents turnovers and gives you a legal advantage.

The dribble: You must bounce (dribble) the ball while moving. Once you pick up your dribble — stopping the bounce — you may only pivot (rotate on one planted foot). You cannot start dribbling again. This is called a "double-dribble" and the ball is turned over to the other team. The solution: know what you are going to do BEFORE you pick up your dribble.

The travel: After catching the ball or picking up your dribble, you may take up to 1.5 gathering steps before you must shoot or pass. Taking more than that without dribbling is traveling — a turnover. The NBA allows a "gather step" that effectively makes it 2.5 steps in practice. Know the rule for your league specifically.

The carry (palming): Your hand must stay on top or the side of the ball while dribbling. If your hand goes underneath and you cup the ball, that is a carry — a violation. Good ball handlers dribble with their fingertips and never their palms, which prevents carrying automatically.

The pivot: When you have stopped your dribble, you have one legal pivot foot — the foot you planted when you stopped. You can rotate in any direction, but you cannot lift and replant that pivot foot. Lifting the pivot foot is traveling. This pivot is your best friend — it lets you create angles and find passing lanes without losing your position.`,
      },
      {
        title: 'Fouls and the Free Throw Line',
        content: `Fouls are illegal physical contact. Every foul matters — both for your team and for you personally.

Personal fouls: When a defender hits, pushes, holds, or impedes an offensive player illegally, the referee calls a personal foul. The offensive player either gets the ball back (if the foul happened away from the act of shooting) or gets free throws (if fouled while shooting). Players foul out after 5 fouls in most leagues (6 in the NBA) — losing them for the rest of the game.

The bonus: When a team accumulates a certain number of team fouls per period, the other team enters the "bonus" (or "one-and-one" in college ball). In the bonus, every foul — even non-shooting fouls — results in free throws. Smart teams attack the basket MORE aggressively when the opponent is in foul trouble, because every drive either results in a basket or free throws.

Offensive fouls: You can also foul while on offense. The most common: charging (running into a defender who has established their position), setting an illegal screen (moving or leaning while screening), or elbowing a defender. These are turnovers AND fouls on you.

Technical fouls: Given for unsportsmanlike conduct — arguing with officials, taunting opponents, delaying the game. Two technical fouls in the NBA means ejection. In youth basketball, a technical foul can change the entire momentum of a game. Never argue with a referee. Make your next play.

Flagrant fouls: Excessive or violent contact. The most serious foul in the game. Flagrant 2s result in automatic ejection. These have no place in basketball at any level.`,
      },
      {
        title: 'Violations and Game Flow',
        content: `Beyond fouls, there are violations — rule breaks that result in a turnover but no personal foul. Knowing violations lets you stay out of trouble and exploit them in opponents.

The 3-second rule: An offensive player cannot remain in the paint (the rectangular area under the basket) for more than 3 consecutive seconds while their team has the ball. The moment the ball goes up for a shot, the count resets. The solution: constant movement through the lane. Never camp in the paint — get in, make your move, get out.

The 5-second rule: When inbounding the ball or being closely guarded (in some leagues), you have 5 seconds to pass or dribble. On a throw-in, 5 seconds to get the ball in bounds. This is a common youth basketball violation — always have a plan before you receive the inbound pass.

Backcourt violation: Once your team has brought the ball across half court, you cannot dribble or pass it back across the midcourt line. This is a turnover. Be aware of where the midcourt line is at all times when you have the ball near it.

Shot clock violation: Let it expire without a shot that hits the rim. Turnover. Know the clock.

Game structure for your level: Your games likely run 6-8 minute quarters. Know whether your league uses a running clock or stops on fouls and out-of-bounds. Know how timeouts work in your league. The players who understand the rules of their specific game — not just basketball generally — make smarter decisions in the final minutes.`,
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
    track: 1,
    tagline: 'Know your role — then exceed it',
    chapters: [
      {
        title: 'The Five Positions',
        content: `Basketball is played 5-on-5. Each player has a primary position, a primary role, and a primary area of the court. Understanding all five positions makes you a better player at YOUR position, because you understand what your teammates need from you.

Point Guard (1) — The Floor General: The point guard handles the ball most. They run the offense, call plays, set the tempo, and set up teammates to succeed. Great PGs have elite court vision — they see the whole floor while everyone else sees only their defender. Think Steph Curry, Chris Paul, Magic Johnson, Isiah Thomas, Steve Nash. The PG is basketball's quarterback.

Shooting Guard (2) — The Scorer: THIS IS YOUR POSITION. The SG is the primary perimeter scorer. They must be able to create their own shot (off dribble or the catch), use screens to get open, shoot with range, and be a reliable secondary ball handler. Michael Jordan, Kobe Bryant, Allen Iverson, Dwyane Wade, James Harden. The greatest scorers in NBA history played shooting guard.

Small Forward (3) — The Versatile Weapon: ALSO YOUR POSITION. The most versatile position on the court. SFs score from the perimeter and the post, defend multiple positions, rebound, and can handle the ball in transition. LeBron James, Kevin Durant, Scottie Pippen, Larry Bird. The SF's value is adaptability.

Power Forward (4) — The Physical Presence: Interior scoring, rebounding, physical defense. Modern PFs also shoot 3-pointers (stretch fours). Giannis Antetokounmpo, Tim Duncan, Karl Malone, Charles Barkley. The PF and center work together to control the paint.

Center (5) — The Anchor: Tallest player. Protects the rim, dominates the boards, finishes inside. Shot-blocking and rebounding. Shaquille O'Neal, Hakeem Olajuwon, David Robinson, Joel Embiid. The great centers made everyone around them better by drawing double-teams.`,
        videoUrl: 'https://www.youtube.com/watch?v=D9ih1KR1EkU',
        videoTitle: 'Basketball Positions Explained',
      },
      {
        title: 'Playing Shooting Guard and Small Forward',
        content: `You play the two most skill-intensive positions in basketball. Here is what that means for your development.

The SG scoring toolkit: Catch-and-shoot (receive a pass in your shooting stance and release immediately), pull-up jumper (stop on a dime off the dribble and shoot), drive-and-finish (take defenders off the dribble to the basket), and the mid-range game (12-18 feet pull-up). The elite SG is equally dangerous from all four positions. A defender cannot take away all four options simultaneously.

The SG off-ball game: 60% of your points as a shooting guard will come WITHOUT dribbling. You will cut, use screens, relocate, and catch passes already in your shooting stance. The best SGs move constantly — they are never stationary on offense. A stationary SG is easy to guard. A SG who reads the defense and moves purposefully is impossible to guard.

The SF's job: As a small forward, you are the connector. You can post smaller players, shoot over bigger players, guard multiple positions on defense, and create opportunities in transition. The SF position demands the most complete basketball skill set. LeBron James is the most powerful player in basketball at this position because he mastered every facet — scoring, passing, defending, rebounding — simultaneously.

Your development path: At your age, your most important investments are shooting form, ball handling, footwork, and basketball IQ. Physical attributes — strength, size, speed — develop naturally. Skill must be trained. The work you do now on fundamentals becomes your permanent foundation. Everything added later is built on top of what you build now.`,
      },
      {
        title: 'Learning From the Greats at Your Position',
        content: `Every elite SG/SF has a signature — a skill or habit that defines them. Studying these players is not about copying their exact moves. It is about learning the PRINCIPLES behind what makes them great.

Michael Jordan — The Competitive Standard: Jordan's greatest attribute was not athleticism or skill alone. It was his obsession with winning. He studied opponents obsessively, found their weaknesses, and exploited them relentlessly. He competed in practice the same way he competed in playoff games. "The ceiling is the roof" was his philosophy — he never stopped trying to get better. Study Jordan to understand what competitive excellence looks like.

Kobe Bryant — The Worker: Kobe is famous for the "4 AM" story — arriving at the gym before anyone else, leaving after everyone left. He outworked every opponent. But what made Kobe exceptional was not just the hours — it was the INTENTIONALITY. He worked on specific weaknesses. He analyzed film. He practiced moves until they were automatic under pressure. Study Kobe to understand how to practice.

Allen Iverson — The Heart: AI was 6 feet tall and 165 pounds in a league of giants. He was told repeatedly he was too small, too weak, too much of a risk. He won four scoring titles and an MVP by making up for every inch with heart, toughness, and handles that nobody could stop. Study AI to understand that determination and skill overcome physical limitations.

Stephen Curry — The Evolution: Curry was underdrafted and told he was too small and too weak. He worked on his shot, his conditioning, and his ball-handling until he became the player who changed what basketball looks like. He extended the 3-point line by 5 feet for the entire league. Study Curry to understand that skill development has no ceiling.

Your assignment: Pick ONE player from this list. Watch their early career highlight videos. Look for moments when they were YOUR AGE (8-10 years old in youth footage if available). Study how they moved on and off the ball. Find ONE thing they do that you want to add to your game this month.`,
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
    id: 'triple-threat',
    title: 'Triple Threat Position',
    emoji: '⚡',
    category: 'Fundamentals',
    track: 1,
    tagline: 'The most important position in basketball',
    chapters: [
      {
        title: 'What Triple Threat Is and Why It Wins',
        content: `Triple threat is the offensive position that gives you three simultaneous options. When you catch the ball and have not yet dribbled, you are in triple threat. The name comes from the three weapons you hold: the shot, the pass, and the drive. The defender has to respect all three — they cannot take away any single option without giving you another.

This is why triple threat is the most important position in basketball. It is not a move — it is a STATE of readiness. From triple threat, every offensive action begins. Miss triple threat and you are already compromised.

The physical position: Feet slightly wider than shoulder-width. Shooting-side foot is slightly ahead (right foot ahead for right-handed players). Knees are DEEPLY bent — not slightly bent, not a little crouch. Deeply bent, like you are sitting in a chair. This is your power source. Weight on the balls of your feet. Back straight, chest up, eyes level. Ball held at your hip on your shooting side, waist to hip height, both hands on the ball.

Why each element matters: The wide stance gives you lateral explosion — you can drive left or right instantly. The bent knees give you vertical power — you can rise and shoot without a visible gathering step that telegraphs the move. The ball at your hip keeps it protected and in shooting position simultaneously. The eyes-up position means you can see the entire floor before you make a decision.

The defenders' problem: From correct triple threat, they genuinely do not know what you will do. If they step back to prevent the drive, you shoot. If they step up to prevent the shot, you drive. If they help off your teammate, you pass. Every defensive choice opens a different opportunity.`,
        videoUrl: 'https://www.youtube.com/watch?v=C0YjBpKsTXI',
        videoTitle: 'Triple Threat Position Tutorial',
      },
      {
        title: 'The Jab Step — Your First Read',
        content: `The jab step is a fake drive that comes out of triple threat. You take one sharp step with your non-pivot foot as if you are driving, then return to triple threat. Its purpose is not to actually drive — it is to TEST the defender and READ their reaction.

Defenders have limited options when they see the jab step. They must choose in a fraction of a second how to respond. Their reaction tells you what move to make:

If they step BACK (giving you space): They fear the drive and are protecting the lane. This is the moment to pull back and shoot. Take one step back into your shot, rise up, and fire. They cannot close out in time.

If they step WITH you (matching your direction): They are trying to stay in front of the drive. Plant hard and crossover to the opposite direction. They have committed their momentum the wrong way — you have a clear lane.

If they DO NOT MOVE: Either they are disciplined or they have been caught flat-footed. If they are close, drive straight at their outside shoulder — a step in any direction beats a stationary defender with bent knees. If they are giving you space with no reaction, you can shoot or drive based on what the rest of the defense shows.

The key: Your jab step must be committed. A slow, tentative jab fools nobody. Your foot must hit the floor hard, your body weight must shift convincingly in that direction, and your eyes should look like you are about to drive. The deception is what creates the read.

Kobe Bryant's jab step was arguably the most feared single move in NBA history. He took it from the exact same position every time, making his shot, drive, and pull-back look identical until the last possible moment. That consistency — same setup, different outcomes — is what made defenders helpless.`,
      },
      {
        title: 'The Pump Fake — Your Second Read',
        content: `The pump fake is a complete shooting motion designed to make the defender leave their feet. When a defender jumps, they cannot adjust their body in the air — and the offensive player can drive past them or draw a foul.

A pump fake that works must be IDENTICAL to your real shot. Same lift, same extension, same wrist snap. If there is any visual difference between your fake and your real shot, defenders will not bite. This is why the pump fake requires significant repetition — you must train the fake until it matches your shot perfectly.

The mechanics: From triple threat, lift the ball through your complete shooting motion (the same motion as a real shot, including your knees beginning to straighten). The moment the ball reaches its peak and the defender leaves their feet, stop. Bring the ball down. Your pivot foot must remain planted. Now drive past the airborne defender, or step back for a clean look.

The draw-a-foul application: When the defender is in the air and you make contact with them on a shooting motion, that is a shooting foul — free throws. Some of the greatest scorers in history built their game on drawing fouls: Paul Pierce, James Harden, Manu Ginobili. The pump fake is the primary tool for this.

When to use the pump fake: When a defender is close and aggressive. Defenders who are giving you space are not likely to jump on a fake. But an aggressive, close-out defender who is panicking is an ideal target. Drive to the basket, spot the aggressive close-out coming at you, pump fake, draw the foul.

The rule: Never pump fake unless you plan to do something with it. An empty pump fake that nobody bites on wastes time. If the fake gets no reaction, drive immediately — at least you have forced the defender to make a decision.`,
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
    id: 'shooting-form',
    title: 'Shooting Form',
    emoji: '🎯',
    category: 'Fundamentals',
    track: 1,
    tagline: 'Perfect form repeated thousands of times',
    chapters: [
      {
        title: 'BEEF — The Foundation of Every Shot',
        content: `Every great shooter in basketball history — from Jerry West to Ray Allen to Stephen Curry — built their shot on a foundation of consistent mechanics. The acronym BEEF captures the four elements every shot must have.

B — Balance: Your feet are the beginning of every shot. Feet shoulder-width apart or slightly wider. Shooting-side foot is an inch ahead of the other. Knees bent — not slightly, bent. Your power comes from your legs, not your arms. Most shooters who miss short or hit the front of the rim have not bent their knees sufficiently. Weight distributed evenly on the balls of both feet. No leaning forward or backward. You should be able to freeze at any point in your shot and feel completely stable.

E — Eyes: Pick your target before the ball arrives in your hands. As the pass is coming to you, your eyes should already be locked on the back edge of the rim — the far side of the basket's opening. The back of the rim is your target for every shot except bank shots. Keep your eyes on this target from the moment you see the pass through the moment the ball reaches its peak. Players who look at the ball during the release lose their target and miss consistently.

E — Elbow: Your shooting elbow must be directly under the ball, pointed at the basket. Not flared to the side, not tucked into your body — directly beneath the ball, creating a 90-degree angle with your forearm parallel to the floor when you hold the ball at shoulder height. Your guide hand (non-shooting hand) sits on the side of the ball — it is a shelf that holds the ball in position. It must NOT push the ball. This is the most common mistake young shooters make, and it causes shots to spray left or right inconsistently.

F — Follow Through: After the ball leaves your hand, your wrist snaps fully down — your fingers end up pointing directly at the floor in a "goose neck" position. HOLD this follow-through until the ball reaches its destination. Do not drop your hand early. Dropping early consistently creates flat, inconsistent shots. The follow-through is what puts backspin on the ball. Backspin softens the ball's contact with the rim and backboard, turning borderline shots into makes.`,
        videoUrl: 'https://www.youtube.com/watch?v=2f9YBKAxmqQ',
        videoTitle: 'B.E.E.F. — The Proper Way to Shoot a Basketball',
      },
      {
        title: 'The Release and Arc',
        content: `The actual release of the ball — the moment it leaves your fingertips — is where most shooting problems either exist or get fixed. Understanding the release at a physical and mechanical level separates shooters who plateau from shooters who keep improving.

The fingertip roll: As the ball leaves your hand, it rolls from the heel of your palm across your fingertips — pinky to ring to middle to index finger. The last point of contact is your index finger. This rolling motion creates backspin naturally. A ball without backspin or with top spin bounces erratically off the rim. A ball with backspin bounces back toward the basket from the back of the rim.

The wrist snap: Simultaneously with the fingertip roll, your wrist snaps down and forward — this adds power and spin to the shot. The snap is the "follow through" you hold. Players with weak wrists often cannot generate enough spin or power on longer shots. Wrist strength is trainable.

Shot arc: The ball should travel at roughly a 45-degree angle at its lowest point and reach its apex approximately 2-3 feet above the rim. A flat shot (under 40 degrees) hits the front of the rim and bounces away. A high-arc shot (over 50 degrees) can fall straight down into the basket from above — the most forgiving trajectory. Ray Allen and Steph Curry both shoot with very high arc, which increases their make percentage on near-misses.

Backspin and the "soft" shot: Players with good backspin and arc produce "soft" shots — shots that hit the rim and fall in rather than clanging off. Developing soft touch is a combination of proper arc, proper backspin, and experience calibrating how much force different distances require. This calibration comes only from repetition — thousands of shots over months and years.

The guide hand discipline: This deserves its own paragraph because it is SO commonly wrong. Your guide hand touches the side of the ball only to stabilize it before the shot. The moment your shooting motion begins, your guide hand should come OFF the ball — it should add zero force to the shot. Film yourself shooting. If your shot goes to the left (for right-handed shooters), your guide hand thumb is pushing. Fix this before you practice another 1,000 shots.`,
      },
      {
        title: 'Building Your Shot From Scratch',
        content: `The path to becoming an elite shooter is not complicated. It requires patience, correct repetition, and discipline to stay close to the basket until your form is automatic.

Close-range foundation work: Every single shooting session should start with close-range makes (3-5 feet from the basket). This is not a warm-up — this is where you build and maintain mechanical habits. At close range, you are not thinking about making the shot. You are thinking about your elbow, your follow-through, your guide hand. You are programming your body. Kobe Bryant shot 100 close-range form shots every practice day of his career, including the last season of his career. He never outgrew the fundamentals.

One-hand shooting: Remove your guide hand. Shoot with your shooting hand only from close range. This is the most effective drill for building correct form because it forces you to use only your shooting mechanics — the guide hand cannot compensate for bad form. If you cannot make a one-hand shot consistently from 4 feet, your mechanics need work before you extend your range.

Extending range correctly: Only move further from the basket when your form stays consistent at the current distance. Most young players extend their range before their form is strong enough. The result: they develop shooting habits from 15 feet that involve using their body to compensate for lack of strength, which creates bad habits that are then reinforced by thousands of reps. Stay at 8 feet until your form is automatic, then 10 feet, then 12 feet. Patience now creates a shooter who can extend range to 30+ feet as they grow.

Volume and quality: 200 makes with perfect form beats 500 makes with sloppy form. Count MAKES, not attempts. When you miss, diagnose WHY before you shoot again. Was it the elbow? The guide hand? The follow-through? Diagnose, correct, and shoot. Unconscious repetition of bad mechanics creates bad shooters. Conscious, corrective repetition creates elite shooters.`,
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
    id: 'dribbling',
    title: 'Dribbling Fundamentals',
    emoji: '🤜',
    category: 'Fundamentals',
    track: 1,
    tagline: 'The ball is an extension of your hand',
    chapters: [
      {
        title: 'The Mechanics of Ball Control',
        content: `Dribbling is not bouncing the ball. Dribbling is CONTROLLING the ball with your hand while it moves up and down. The difference between these two definitions is the difference between a good ball handler and an elite one.

Fingertips, not palm: Your fingers should be spread wide — all five fingers making contact with the ball, no part of your palm touching it. The ball should feel like it has suction to your fingertips. Players who dribble with their palm cannot feel the ball properly, cannot control speed or height with precision, and are more likely to carry (palm the ball illegally).

The wrist: As the ball bounces up, your wrist flexes upward to meet it and cushion the catch. As you push the ball down, your wrist snaps downward to add force and control the direction. This wrist action — cushion up, snap down — is what gives elite ball handlers their feel for the ball.

Dribble height: In open court, you can dribble at waist height for speed and comfort. In traffic, with defenders nearby, your dribble must drop to below the knee. A thigh-high dribble in traffic is a turnover waiting to happen — any defender can reach in and knock it away. Lower dribble = shorter distance the ball travels = less time exposed to defenders.

Body position while dribbling: Knees bent, back flat, head and eyes UP. You must see the floor to make decisions. Players who look at the ball while dribbling are blind to open teammates, approaching defenders, and developing opportunities. This is the hardest habit to build — keep your eyes up even when the dribble feels uncomfortable. It will feel uncomfortable for weeks. Then it becomes automatic.

The free arm: Your non-dribbling arm should be up and out, creating space between you and the defender. This arm is a legal shield — you can use your body to protect the ball without pushing. It also helps you feel where the defender is without looking at them.`,
        videoUrl: 'https://www.youtube.com/watch?v=0_56e5GKKwA',
        videoTitle: 'Dribbling Basics for Young Players',
      },
      {
        title: 'Essential Dribble Moves',
        content: `Every elite ball handler has a vocabulary of moves — a set of techniques they can deploy in any situation. These are not tricks. They are functional tools for getting past defenders, protecting the ball, and creating scoring opportunities.

The Crossover: The ball is switched from one hand to the other in front of your body. The ball must stay low — below your knee — to prevent the defender from reaching in and stealing it. The crossover creates separation by moving the ball to the opposite side of your body from the defender's reach. Allen Iverson's crossover was the most devastating in NBA history because it was so fast and so low that defenders had no chance to react.

Between the Legs: The ball passes through your legs from one hand to the other. More protected than the crossover because the defender has to reach through your body to get the ball. Use this when a defender is overplaying to your strong side — step into it and attack the weak side.

Behind the Back: The ball goes around your body from one hand to the other. Use when changing direction and a defender is blocking your path forward. The behind-the-back is slower than the crossover but protects the ball better on certain angles. Requires significant practice before it is reliable in games.

The Hesitation (Hesi): You are dribbling at speed. You dramatically slow down — almost stopping — then immediately explode back to full speed in the same or different direction. The change of pace is the move, not the footwork. The defender's body adjusts to match your speed; when you hesitate, they slow; when you explode, they cannot keep up. James Harden's hesitation before his step-back is one of the most effective offensive sequences in modern basketball.

The In-and-Out: A crossover fake. You push the ball toward your non-dominant side, pull it back, and continue in the original direction. No actual crossover happens — you dribble with the same hand throughout. This fakes the defender into shifting weight, and you attack the original direction with their momentum going wrong.`,
      },
      {
        title: 'Developing Your Weak Hand',
        content: `The weak hand is the single most overlooked area of ball-handling development. A player with only one reliable hand is completely predictable. After 2-3 possessions, every defender knows your tendency and takes it away.

The statistics: NBA research shows that players who are equally capable with both hands score significantly more points per game than one-handed dribblers, even at the same skill level overall. The reason is simple — they can never be taken away from. Every drive lane stays open.

Allen Iverson's left hand: Iverson was right-hand dominant. He crossed Michael Jordan with his LEFT hand in one of the most famous plays in NBA playoff history. He did not suddenly develop a left hand — he trained it obsessively for years until it was nearly indistinguishable from his right. The reward: MJ could not take away his right hand because his left was just as dangerous.

How to train the weak hand: Start stationary. Dribble with your weak hand only for 5 minutes per session. Stationary first — fingertips, eyes up, proper mechanics. Then walking. Then jogging. Then full speed. Then add moves: crossover with weak hand leading, between-legs from weak to strong. This progression takes months, not days. Expect frustration — that is the feeling of your brain building new neural pathways.

The time investment: Elite ball handlers spend EQUAL time on both hands in their developmental years. If you do 10 minutes of ball-handling work, 5 minutes is weak hand only. Not some of the time — EQUAL time, every session, for years. Players who shortcut the weak hand spend the rest of their careers playing with a predictable limitation.

The test: In your next game, count how many times you go right versus left. If it is more than 70-30 in either direction, you have a scouting tendency. Defenders will find it by the fourth possession.`,
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
    id: 'defense-stance',
    title: 'Defensive Stance & Principles',
    emoji: '🛡️',
    category: 'Defense',
    track: 1,
    tagline: 'Defense is a choice. Make it.',
    chapters: [
      {
        title: 'The Defensive Stance',
        content: `Defense is not instinct — it is a trained physical position and a set of mental habits. The player who CHOOSES to defend, who practices it with the same intensity as their offense, is the player coaches trust with the game on the line.

The stance: Feet wider than shoulder-width — significantly wider than your offensive stance. This creates a stable, low base that is hard to push around. Knees bent deeply — not slightly, deeply. Your hips should drop below your knees. This is uncomfortable when you are new to it. That discomfort is the feeling of building the muscle strength to hold this position for 40 minutes. Back flat, chest up, head level. Arms out to the sides, palms facing the offensive player — one hand in the passing lane, one hand low near the dribble. Weight ENTIRELY on the balls of your feet. The moment weight goes to your heels, your reaction speed drops by half.

Eyes on the chest, not the ball: The ball moves faster than any human can track. Ball-fakes will fool you every time if you watch the ball. The offensive player's chest, however, does not lie — their body must follow the direction their chest points. Watch the chest. The ball will follow.

The stance is exhausting: Hold a proper defensive stance right now for 60 seconds. Your legs should be burning. Now imagine holding that for 40 minutes across 8 possessions per quarter. This is why defensive excellence requires conditioning. You cannot choose to defend in the fourth quarter if you do not have the physical capacity to hold the stance. Defensive conditioning is a fitness goal, not just a skill goal.

Why most players avoid the stance: It is uncomfortable. It requires strength and endurance that take months to build. Players who are very talented offensively often rely on their offensive ability and coast on defense. This is fine until they face elite competition — at every level above youth basketball, coaches who see coasting on defense simply stop playing those players. Kobe Bryant was a Defensive Player of the Year winner AND the greatest scorer of his generation. Defense was never optional for him.`,
        videoUrl: 'https://www.youtube.com/watch?v=HHFzW6lhjmM',
        videoTitle: 'Defensive Stance and Slides Tutorial',
      },
      {
        title: 'Defensive Footwork and Movement',
        content: `The defensive slide is the most important footwork skill in individual defense. It keeps you between the offensive player and the basket without crossing your feet, which would eliminate your ability to change directions quickly.

The slide mechanics: Push off your back foot to move laterally. Bring the front foot to a new position. Reset. Your feet should never come closer together than shoulder-width during the slide. The moment your feet cross, you have lost your defensive stance and you cannot change directions without first uncrossing — a half-second gap that any experienced ball handler will exploit.

The rule: NEVER cross your feet on defense. This rule is absolute. Crossing your feet is the defensive equivalent of picking up your dribble prematurely on offense — it eliminates your options and gives the opponent an advantage.

Drop step on drives: When the ball handler drives past you, resist the instinct to reach or chase. Instead, take a drop step — a quick pivot step back in the direction of the drive — and sprint to beat them to the spot in the lane. This keeps you between them and the basket rather than trailing hopelessly behind.

Closing out: When the ball is passed to an open perimeter player, you must sprint to close the gap. But as you approach, chop your steps — take short, quick steps to decelerate before you reach the shooter. If you sprint full speed with your momentum going forward, they step through you for an even better look. Chop steps let you stop, contest, and recover to contain the drive.

Recovery after being beaten: You will get beaten off the dribble. Every defender does. The question is how fast you recover. The best defenders have a short memory — they recover their stance immediately and make the offensive player earn every subsequent inch.`,
      },
      {
        title: 'Team Defense and Communication',
        content: `Individual defense, no matter how good, is not enough. Basketball is 5-on-5, and the best offensive teams exploit individual defense by attacking the worst defender repeatedly. Team defense — coordinated communication and coverage — is what creates championship-level defense.

Help defense: When the ball handler drives and beats your teammate, your responsibility is to "help" — step into the driving lane to slow the ball handler, force a pass, or take a charge. But you must return to your own player the moment the ball handler stops or passes. Help-and-recover is the foundation of every elite defensive scheme. The help is instinctive; the recovery is discipline.

The defensive conversation: Great defensive teams talk constantly. "Ball!" when guarding the dribbler. "Screen right!" when a screen is about to come. "Switch!" when changing assignments. "Help left!" when your player drives toward a teammate. "I've got ball!" when rotating to cover a driving player. This communication is not optional — it is what turns five individual defenders into one defensive unit.

The charge: Taking a charge is one of the most impactful defensive plays in basketball. You step in front of a driving player, establish your feet before they leave the ground, and absorb the contact. The result: a turnover for them and a personal foul on the offensive player. Great defensive teams manufacture 3-4 charges per game. The courage to step in front of a driving player — knowing contact is coming — is a mentality that separates committed defenders.

Studying film defensively: Before playing any opponent, watch how they score. Does their best player drive left or right? Do they prefer mid-range or 3-pointers? Do they attack best out of the pick-and-roll or in isolation? Preparation makes defense smarter — you are not just reacting, you are anticipating. Kobe Bryant studied film of his opponent for hours before every game. He knew every tendency before tip-off.`,
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
    id: 'bball-iq',
    title: 'Basketball IQ',
    emoji: '🧠',
    category: 'IQ & Strategy',
    track: 1,
    tagline: 'The smartest player in the room wins',
    chapters: [
      {
        title: 'What Basketball IQ Actually Is',
        content: `Basketball IQ is the ability to make the right decision faster than anyone else on the court. It is not reaction time. It is not athleticism. It is not even experience, though experience contributes to it. Basketball IQ is pattern recognition — seeing the situation, matching it to patterns you have studied, and selecting the correct response before defenders can react.

The highest-IQ plays are almost never the flashiest plays. The highest-IQ play is usually: take the easy basket, make the simple pass, find the open teammate, take the open shot. Michael Jordan — the greatest scorer in NBA history — said repeatedly: "Take what the defense gives you." High-IQ players trust this principle. They do not force plays that require them to overcome the defense. They find the plays where the defense has already made an error.

Reading the defense before you touch the ball: Elite players scan the entire floor before they catch the pass. They read: where is my defender (close or sagging)? Where is the help defense (set or rotating)? Who is open? What are my options in order? By the time the ball reaches their hands, the decision is already made. They are executing, not deciding. Deciding while holding the ball costs tenths of seconds. Those tenths cost possessions.

The "next play" mentality: High-IQ players do not dwell on mistakes. A missed shot or a turnover is processed in a fraction of a second — diagnose why, make the mental correction, and focus entirely on the next play. Players who carry mistakes into the next possession make more mistakes. The reset between plays is a trainable skill.

Basketball IQ is cumulative: Every game you watch, every possession you study, every mistake you diagnose adds to your pattern recognition library. A player who watches 50 games analytically (studying decisions, not just enjoying the action) develops faster than a player who plays 50 more pickup games. Both matter — the combination of studied watching and intentional playing is what builds IQ fastest.`,
        videoUrl: 'https://www.youtube.com/watch?v=fDo8Oh6-LEc',
        videoTitle: 'Basketball IQ — Ultimate Guide',
      },
      {
        title: 'Reading the Game — What to Look For',
        content: `Reading the game is a skill with specific things to look for. Players who know what to look for develop IQ faster than players who "just play" without specific targets.

Your defender: Before every catch, know where your defender is. Is their weight on their heels (you can drive)? Are they overplaying your right (go left)? Are they sagging off 6 feet (shoot the open shot immediately)? Your defender is communicating what to do on every possession — you just have to read them.

The help defense: Help defenders are the most important read for penetrating players. When you drive, two things happen simultaneously: your defender gets beaten, and a help defender shifts to stop you. The moment the help defender commits to you, your teammate is open. The decision is: finish if you can, or find the open teammate. This decision must happen in under a second.

Transition reads: In transition (fast break), read the numbers. 3-on-2: you have an advantage — attack and find the open player. 2-on-2: you are equal — attack the defensive weakness. 2-on-1: you have an advantage — attack until the defender commits, then pass. 1-on-0: just go score.

Passing lanes: Before every pass, see the entire path from your hand to your target. Is there a defender in the lane? Is the defender's hand position blocking one angle but opening another? A good passer always has a second option ready — a redirect if the first lane closes.

Game situation awareness: Score, time, fouls, and timeouts all change the correct play. Down 5 with 3 minutes: you need 3-pointers, not 2s. Up 8 with 2 minutes: do not gamble for steals, take care of the ball. Fouling situation: know how many fouls key players have. These situational variables must become automatic — you cannot afford to calculate them under pressure.`,
      },
      {
        title: 'Building Your IQ — The Study Habits',
        content: `Basketball IQ is built through intentional study, not passive watching. Here are the specific habits that develop IQ fastest.

Game film with a question: Before you watch any game film, write down ONE specific question: "How does Steph Curry get open off screens?" "How does LeBron use his body to shield the ball on drives?" "How do the Spurs read the pick-and-roll?" Watching with a specific question focuses your attention and builds specific knowledge, not general enjoyment.

The pause-and-predict method: While watching game film, pause the video before the offensive player makes their move. Look at the situation: read the defense, read the positioning, read the time and score. Now predict: what is the right play here? Press play. Compare. Over time, your predictions become more accurate — and your in-game decision-making improves because you have trained your pattern recognition.

Self-film analysis: Film yourself playing. Watch your defensive positioning, your shot mechanics, your decision-making. The gap between how you think you played and what the film shows is where your improvement lives. Most players are surprised by what they see — things they thought they were doing well, they are not. Things they thought were fine, the film shows clearly wrong. The film is honest in a way that memory is not.

The post-game mental replay: After every game or practice, replay 3 specific possessions in your head. One where you made a great decision (understand why it was right). One where you made a mistake (diagnose the error). One where you are unsure if you made the right call (reason through it). This 5-minute mental habit accelerates development faster than almost any drill.

Journal your basketball thinking: Keep a notebook. After watching film, write what you observed. After games, write what you learned. Writing forces your brain to organize and retain information. Players who journal their basketball observations develop IQ measurably faster than those who do not. Kobe Bryant kept detailed notes from his film sessions throughout his entire career.`,
      },
    ],
    quiz: {
      question: 'What is basketball IQ?',
      options: [
        { text: 'How fast you can run', correct: false },
        { text: 'Pattern recognition that lets you make the right decision faster than anyone else', correct: true },
        { text: 'How many points you score per game', correct: false },
        { text: 'Your height and wingspan measurements', correct: false },
      ],
    },
    xpReward: 45,
  },

  {
    id: 'spacing',
    title: 'Court Spacing',
    emoji: '📐',
    category: 'IQ & Strategy',
    track: 1,
    tagline: 'Space is the weapon. Use it.',
    chapters: [
      {
        title: 'Why Spacing Wins Games',
        content: `Court spacing is the strategic use of the basketball court's dimensions to create offensive advantages. It is invisible to casual viewers but central to every professional coach's offense design. Understanding spacing is the first step to understanding why the game looks the way it does.

The fundamental problem spacing solves: Five defenders can guard five offensive players if those players are clustered together. One defender can almost guard two players who are within 5 feet of each other. But when five offensive players are spread across the full width of the court — each separated by 15 feet or more — each defender can only guard their assignment. The defense is stretched and cannot help without leaving another player open.

The 5-out spacing: The modern standard. Two players in the corners, two players on the wings, one player at the top of the key. This configuration places all five offensive players at the 3-point line or beyond, creating maximum space in the paint for drives. When a ball handler drives, every defender faces a choice: help on the drive (leaving their player open for a 3) or stay on their player (the driver gets to the basket). There is no perfect answer. That is why it works.

Spacing as a team responsibility: One player in the wrong spot destroys spacing for the entire team. If four players are spread correctly and one crowds the ball handler, a single defender can cover two players. The drive lane closes. The passing angles disappear. Great teams practice spacing constantly because it requires all five players to maintain discipline simultaneously, possession after possession.

The analytics proof: Corner 3-pointers are the most valuable shots in modern basketball because they represent perfect spacing — a player who has drawn the defense to them by threatening from the corner, receiving a kick-out pass, and shooting immediately. The expected value of a corner 3 (40% shooter × 3 points = 1.2 expected points per attempt) is higher than almost any other shot in the game. Spacing creates corner 3s. Corner 3s win games.`,
        videoUrl: 'https://www.youtube.com/watch?v=OhUjYBVEYIQ',
        videoTitle: 'Teaching Court Spacing for Kids',
      },
      {
        title: 'Your Role in Team Spacing',
        content: `Spacing requires every player to know where to be at all times, even when they do not have the ball. For an SG/SF, your off-ball positioning determines whether your team's offense functions.

The spacing spots: Learn the five primary spacing positions — left corner, left wing, top of the key, right wing, right corner. When your team runs its offense, you should occupy one of these positions unless you are in the middle of a cut. Standing elsewhere — in the lane, drifting in from the corner — collapses the spacing.

The catch-and-shoot position: When you are in a spacing spot, stand on the balls of your feet in a slight ready stance. Not standing flat-footed, not moving, not watching the ball with entertainment interest — on the balls of your feet, prepared to catch and shoot instantly. The moment the pass comes to you in your spot, you should be able to catch, set your feet (they should already mostly be set), and shoot in one fluid motion. Receivers who catch flat-footed need extra time to set up — defenders close in that time.

Reading when to move: Spacing is not about being stationary. It is about being in the right spot. When the ball handler drives, your read is: if your defender helps, sprint to the open spot they vacated and call for the ball. If your defender stays, hold your spot and wait — you are the pressure release valve if the drive collapses. If your defender is between you and the ball (overplaying), backdoor cut immediately.

The mental discipline: The hardest part of spacing is staying in your spot when you have no involvement in the play. When a teammate is driving, every instinct says to move toward the action — to help, to follow the ball, to get involved. The spacing discipline says: hold your position. Your value in that moment is in maintaining the threat that keeps your defender from helping. Invisible offense — holding spacing — is often more valuable than any visible action.`,
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
    id: 'passing',
    title: 'Passing Fundamentals',
    emoji: '➡️',
    category: 'Fundamentals',
    track: 1,
    tagline: 'The best pass beats any defense',
    chapters: [
      {
        title: 'The Three Essential Passes',
        content: `Passing is the fastest way to move the ball and the fastest way to create scoring opportunities. A well-executed pass beats any defense because the ball travels faster than any defender can run. Understanding the mechanics and applications of each pass type is fundamental basketball literacy.

The Chest Pass: Hold the ball at your chest with both hands, elbows in, thumbs pointing toward your body. Step toward your target. Extend your arms fully and snap both wrists simultaneously — your thumbs end pointing DOWN and AWAY from your body at the completion of the pass. The ball should spiral slightly and arrive at your receiver's chest height. Use the chest pass for medium distances with no defenders directly in the passing lane. It is your most accurate pass when used correctly.

The Bounce Pass: Aim for a spot on the floor approximately two-thirds of the way to your receiver. The ball should bounce up to their waist. The mechanics are identical to the chest pass (step, extend, snap wrists) except your release angle is lower. Bounce passes are harder to intercept because they travel below a defender's hands. Use them for feeding post players, making passes to cutters who are running past a defender, and delivering ball in traffic where passing at chest height would be deflected.

The Overhead Pass: Hold the ball above your head with both hands, elbows slightly bent (not behind your head — that telegraphs the pass and is slower). Step toward your target and release. Use for skip passes (cross-court passes), outlet passes after rebounds, and passes over shorter defenders. The overhead pass allows you to see the full court while releasing, which improves decision-making on longer passes.

The one-hand push pass (advanced): A compact, deceptive pass that delivers the ball with one hand in a punching motion. Faster to release than a two-hand pass, harder to read. Used in tight spaces by elite playmakers. Build two-hand mechanics first — the one-hand pass is an advanced tool for when fundamentals are automatic.`,
        videoUrl: 'https://www.youtube.com/watch?v=AWVgKM_9Yq4',
        videoTitle: 'Basketball Passing Drills for Kids (Jr. NBA)',
      },
      {
        title: 'The Art of the Pass',
        content: `Technical passing mechanics are necessary but insufficient. The great passers in basketball history — Magic Johnson, Steve Nash, LeBron James — did not just pass accurately. They passed at the right time, to the right spot, with the right deception. This is the art behind the mechanics.

Lead the receiver: A pass thrown to where your receiver IS will arrive where they WERE. A perfect pass goes to where they are going — ahead of their movement, at the exact height for a catch-and-shoot or catch-and-drive, delivered at a speed that lets them catch without breaking stride. Learning to throw ahead of receivers requires practice with a specific mental focus: track their feet and project where they will be when the ball arrives.

Eye deception: The eyes telegraph passes. If you lock your eyes on the target and pass, every alert defender sees the pass coming. Elite passers look away from their target — they look left, the eyes of help defenders follow, and the pass goes right. This is a trainable skill. Practice looking one way and passing the other. The no-look pass is not a trick — it is the logical extreme of eye deception discipline.

Fake before passing: A pass fake — the same motion as a pass but with the ball retained — moves defenders and opens passing lanes. A good pass fake moves a defender's arm out of a passing lane, creating the opening for the actual pass. Used most often when the direct passing lane is guarded: fake to move the defender, then pass to the now-open lane.

Don't force the pass: The highest-IQ rule in passing. A pass that you are not fully confident in should not be thrown. Reset — dribble to a better angle, pump fake, or find another option. Turnovers generated by forced passes are the most demoralizing plays in basketball because they were completely preventable. The discipline to not make the flashy pass that is not quite open is a mark of a high-IQ player.`,
      },
    ],
    quiz: {
      question: 'When making a bounce pass, where should the ball hit the floor?',
      options: [
        { text: 'Right in front of your feet', correct: false },
        { text: 'Right in front of your receiver', correct: false },
        { text: 'About two-thirds of the way to your receiver', correct: true },
        { text: 'Exactly halfway', correct: false },
      ],
    },
    xpReward: 30,
  },

  {
    id: 'layups',
    title: 'Layups',
    emoji: '🏃',
    category: 'Fundamentals',
    track: 1,
    tagline: 'The most important shot in basketball',
    chapters: [
      {
        title: 'Layup Mechanics — The Complete Breakdown',
        content: `The layup is the closest shot to the basket in basketball and should be the most reliable shot in your arsenal. A missed layup is the most costly mistake in the game — you had a near-certain 2 points and gave them away. At elite levels, coaches track layup percentage and have been known to reduce player minutes for missing layups consistently.

Right-hand layup from the right side — full mechanics: Approach the basket at an angle from the right. In the final two steps before jumping, your footwork is LEFT foot → RIGHT foot → jump. That last right-foot plant is your jumping foot — you explode UPWARD off this foot, not forward. Your right knee comes up as you jump, adding height and protecting the ball from a potential block. Your right hand lifts the ball toward the top square of the backboard — the small marked square above the rim. Release the ball at the peak of your jump with a soft touch, not a hard push. Land with both feet, balanced, in position to follow your own shot.

Left-hand layup from the left side — the mirror: RIGHT foot → LEFT foot → jump. Same mechanics, opposite hand, opposite side of the court. This is not optional — it is mandatory. Approaching from the left side with your right hand means your body is between you and the basket on the wrong angle. You will miss more and draw more blocks.

The backboard is your tool: The backboard's top square is your aiming point for all angled layups. Banking the ball off the glass — with the right touch — guides the ball into the basket from angles that would miss on a direct attempt. Shooting straight at the rim works only on shots taken directly in front of the basket. For anything off to the side, use the backboard.

The fundamentals of soft touch: Layups require touch — the ability to release the ball with just enough force that it reaches the basket without bouncing hard off the glass or rim. Too hard and it bounces out. Too soft and it falls short. Touch is developed through repetition — the body learns calibration through experience. This is why the Mikan Drill (alternating layups under the basket for extended periods) is the most important individual drill in basketball.`,
        videoUrl: 'https://www.youtube.com/watch?v=YYLvlPQgPrs',
        videoTitle: 'Teaching the Layup to Youth Players in 5 Minutes',
      },
      {
        title: 'Advanced Layup Finishes',
        content: `The basic layup is the foundation. But the game demands more. Defenders close fast, shot-blockers lurk in the lane, and the simple angled layup is not always available. These advanced finishes extend your ability to score in the paint in every situation.

The Reverse Layup: When a defender has positioned themselves under the basket to block your standard layup, take the ball under the rim and finish on the opposite side, using the backboard (now on the other side of you) as protection. The rim and backboard shield the ball from the shot-blocker completely — they cannot get to the ball without fouling you. Requires comfort going under the rim and banking with the off-hand from an unusual angle.

The Euro Step: Take two steps toward the basket — but the second step goes in a different direction than the first. The first step draws the defender's momentum one way; the second step takes you the other way, around their body. Two legal steps, but in different directions. Manu Ginobili popularized this in the NBA; now it is standard. Works best against defenders who have committed their weight in one direction.

The Floater (or Push Shot): When you are in the lane but a shot-blocking center is between you and the basket, do not take the ball all the way to the rim — you will get blocked. Instead, release the ball 5-8 feet from the basket on a high arc, floating it over the shot-blocker before they can time their jump. The ball arcs high and drops softly into the basket from above. Tony Parker's floater was virtually unblockable because he released it before the defender could react.

The Scoop Shot: Similar to the floater but released with an underhand scooping motion, allowing the ball to travel alongside the backboard rather than over the defender. Most effective from tight angles where a direct shot is impossible. Requires the most practice of any layup variant but creates the most unique angle in the paint.

Finishing through contact: In games, you will be fouled on layup attempts. The ball must be released BEFORE you adjust for the contact — a flinch or hesitation at the moment of contact results in a missed shot without a made basket. Practice absorbing contact with your body while your shooting hand continues its motion. Finishing through contact earns and-1s (the basket plus the free throw). It is one of the most valuable skills at every level.`,
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
    id: 'rebounding',
    title: 'Rebounding',
    emoji: '💪',
    category: 'Fundamentals',
    track: 1,
    tagline: 'Possession is everything',
    chapters: [
      {
        title: 'Box Out — The Foundation of Rebounding',
        content: `Every missed shot is a contest. Two teams simultaneously pursue the same object. The team that wins this contest consistently wins the possession battle — and the possession battle wins games. Rebounding is not a mystical skill reserved for tall players. It is a technique and a mentality available to any player willing to develop them.

The box-out: When a shot goes up, every defender must immediately find their offensive assignment and establish position between them and the basket. This is the box-out. You step into them, make contact with your back and backside, and create a wall. Your feet are wide, your knees are bent, your elbows are out. This is a boxing position — you are establishing territory.

The sequence: The box-out must happen BEFORE the ball comes off the rim. Players who wait until the miss and then try to go get the ball are always beaten by the player who boxed out first. The box-out is a preemptive move — you establish position before the ball is in play, so you control where the ball goes after it misses.

Technique details: Your back makes contact with the offensive player's chest. Your feet should be wider than your shoulders to prevent them from pushing through. Your arms are out with elbows bent — this creates width and prevents the offensive player from reaching around you. You are not holding them (that is a foul) — you are using your body to occupy space.

Reading where the ball goes: The ball follows predictable patterns off the rim. Shots from the right side of the court statistically miss more often to the left (weak side). Short shots miss short. Long shots miss long. Deep 3-pointers that hit the back of the rim can bounce 12-15 feet. Study these patterns. The rebounder who is already moving toward where the ball will land — before it gets there — wins the rebound before the contest even begins.`,
        videoUrl: 'https://www.youtube.com/watch?v=fvu-QCVfBzU',
        videoTitle: 'Rebounding — USA Basketball Tips and Drills',
      },
      {
        title: 'Securing the Rebound',
        content: `Getting your hands on the rebound is only the first step. Securing the possession — keeping the ball through the chaos of bodies and hands that surrounds every rebound — requires its own technique and mentality.

The two-hand catch: Always catch the ball with two hands. One-handed catches look impressive but are easily stripped from behind by trailing players. Two-hand catches create maximum grip and control. Use a "W" grip — thumbs pointing toward each other, fingers spread wide — to maximize the surface area of contact with the ball.

Chin the ball immediately: The moment you catch the rebound, bring the ball immediately to your chin. Elbows flared OUT — not in, out. Wide elbows create a protected zone around the ball that prevents trailing players from ripping it away. The ball should be at chin height, between your elbows, with your head up, the instant your feet hit the ground.

Land wide: Your feet should hit the ground as wide apart as possible — significantly wider than shoulder-width. A wide base makes you impossible to push. Narrow feet on a rebound landing means any contact can knock you off balance and the ball can be stolen.

Outlet immediately: After securing the rebound, the next task is to make an outlet pass or begin the dribble to push the pace. The outlet pass — a quick pass to a teammate to initiate the transition offense — must happen within 1-2 seconds. The longer you hold the ball after a rebound, the more defenders have returned and set up. Great rebounders are also great outlet passers: they catch, chin, and outlet before the defense can organize.

Dennis Rodman's mental approach: Dennis Rodman won 7 consecutive rebounding titles despite being shorter than most forwards. His advantage was entirely mental and strategic — he studied shooting tendencies to predict where misses would go before they happened. He was in position before anyone else. His physical ability contributed but his mental preparation created his advantage. Study the shooter you are defending. Know their tendencies. Be where the miss will go before it misses.`,
      },
    ],
    quiz: {
      question: 'Where does a missed shot from the right side typically bounce?',
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
    title: 'Cutting — Off-Ball Scoring',
    emoji: '✂️',
    category: 'IQ & Strategy',
    track: 1,
    tagline: 'Score without the ball',
    chapters: [
      {
        title: 'The V-Cut and Backdoor Cut',
        content: `Cutting is movement without the ball designed to create a scoring opportunity. The most efficient scorers in basketball history scored a large percentage of their points from cuts — receiving the ball in a position where they could immediately score without additional dribbles.

The V-Cut — your primary tool: Starting from a spot on the court, you walk 2-3 steps toward the defender (or toward the basket). This draws the defender with you. At the exact right moment — when you have drawn them close enough that they cannot recover — you plant hard and explode in the opposite direction. The "V" shape is the path: forward then sharp reversal.

Why it works: The defender must react to your movement. When you walk toward them, they step backward or shift weight to prevent the drive. When you explode the other direction, their momentum is still going the wrong way. The 0.5-second gap between your explosion and their recovery is when the pass arrives.

The critical elements: The WALK must be convincing — if you jog toward the defender, they do not commit. Walk slowly and deliberately, as if you are setting up a play on the other side of the court. Then EXPLODE at 100% maximum speed. The contrast between the slow approach and the full-speed departure creates the separation. Your hands must reach the catch point ready — arms extended, palms facing the passer, before you arrive at the spot.

The Backdoor Cut: When a defender is overplaying you — positioning themselves between you and the ball, taking away the pass — you have a hidden advantage. They are so focused on cutting off the pass that they cannot see what you are doing with your feet. Take 1-2 steps toward the ball (matching their overplay), then cut hard BEHIND them toward the basket. Your teammate delivers a direct bounce pass to the basket. You catch in stride and finish. This is the most used play in the Princeton Offense and one of the foundational plays of every great motion offense.`,
        videoUrl: 'https://www.youtube.com/watch?v=ygn9ktSdaMM',
        videoTitle: 'Backdoor Cut Drills for Kids Basketball',
      },
      {
        title: 'Timing, Reads, and Practice',
        content: `Cuts are only effective when they are well-timed. A cut at the wrong moment — when the passer cannot see you, when a defender is well-positioned to intercept, when you are going to the same spot as a teammate — produces nothing or worse, a turnover. Timing is the difference between a cut that creates a layup and one that creates confusion.

When to cut: The best time to cut is when your defender's attention is elsewhere — specifically, when they are watching the ball. Every time the ball is passed, there is a 0.3-0.5 second window when most defenders track the pass instead of their player. Elite cutters read this window and move the moment they see the defender's eyes shift. You are gone before the defender realizes you have moved.

The ball handler's role: Cuts only work when the passer is reading you. The ball handler must see your cut and be ready to pass. This is why communication between the cutter and passer — either verbal ("I'm cutting!") or through eye contact — is essential in team offense. A perfectly timed cut with a passer who is not reading creates an open player who goes unseen.

Straight-line principle: Cuts should be as direct as possible. A curving cut allows the defender to recover. A cut with a sharp 90-degree change (V-cut) or a direct line to the basket (backdoor) eliminates recovery time. When you cut, you are racing against the defender's recovery — take the most direct path to your target.

Practice requirements: Cutting cannot be effectively practiced alone. Every cutting drill requires at least one passer. The timing between cutter and passer — the synchronized moment when the cut and the pass arrive at the same spot simultaneously — is what must be trained. The most effective cutting development happens in 2-on-0 drills (cutter and passer, no defense) where you can practice the timing without defensive pressure, then adding defenders as the timing becomes automatic.`,
      },
    ],
    quiz: {
      question: 'When is the best time to execute a backdoor cut?',
      options: [
        { text: 'Whenever you feel like running to the basket', correct: false },
        { text: 'When your defender is overplaying you or watching the ball', correct: true },
        { text: 'Only on fast breaks', correct: false },
        { text: 'When the shot clock is expiring', correct: false },
      ],
    },
    xpReward: 40,
  },

  {
    id: 'fast-breaks',
    title: 'Fast Breaks & Transition',
    emoji: '⚡',
    category: 'IQ & Strategy',
    track: 1,
    tagline: 'Attack before the defense sets',
    chapters: [
      {
        title: 'The Principles of Transition Offense',
        content: `The fast break is the most efficient offensive opportunity in basketball. When you outnumber the defense — even briefly — the mathematics favor you. A 3-on-2, a 2-on-1, or even a 3-on-3 before the defense sets creates higher percentage shots than a 5-on-5 half-court set play.

Start the fast break the moment you get the ball: The fast break is not something you decide to run after surveying the situation. It is the default response to gaining possession. Every rebound, every steal, every made basket — your immediate reaction should be to push the tempo. Every second of delay gives a defender time to sprint back. The outlet pass after a rebound must happen within 1-2 seconds.

The three lanes: A proper fast break uses three lanes of the court. The ball handler goes up the middle (easiest to distribute left or right). Wing players sprint ahead on each side — not waiting for the ball, but running ahead of it. The ball handler looks up, sees the wings, and makes the pass to advantage. If the wings wait for the ball to reach half court before sprinting, the opportunity is often gone.

Sprint to the rim: Wing players in transition should sprint to the opposite rim — not to half court, not to the 3-point line, to the RIM. You will not always get the ball, but your sprint pulls a defender away from the ball handler. Even when you do not receive the pass, your sprint creates space for the ball handler.

When NOT to push pace: The fast break fails when you try to force it against a set defense. If you look up and see four defenders back with a set defensive alignment, pull it out. Run a play. The fast break advantage is numbers — when the numbers are equal, the fast break becomes a difficult individual play against a ready defense. Learn to read the number of defenders ahead of you within the first two steps of gaining possession.`,
        videoUrl: 'https://www.youtube.com/watch?v=JQVV40UO_Hs',
        videoTitle: 'Fast Break Basketball Drills for Youth',
      },
      {
        title: 'Reading and Finishing the Fast Break',
        content: `The fast break creates advantages, but those advantages disappear instantly if the wrong decision is made. Here is how to make the right decision in every transition scenario.

3-on-2 reads: You have three offensive players and two defenders. The two defenders will attempt a tandem defense — one at the 3-point line to stop the ball, one at the basket to protect the rim. The ball handler's decision: attack the top defender. If they step up to stop the ball, the rolling or trailing wing is open at the basket. If they drop to protect the rim, the ball handler has an open pull-up jumper from the free throw line. The decision must happen based on what the TOP defender does. Do not make the pass too early — make them commit first.

2-on-1 reads: One defender, two offensive players. The defender must choose: stop the ball or guard the pass. Attack directly at the defender. Force the commitment. The moment the defender makes a definitive choice — stepping to one side to cut off either the drive or the passing lane — pass to the option they did not choose. Pass too early and the defender can recover to either option. Wait until their weight is committed.

Equal numbers reads: 2-on-2 or 3-on-3 in transition. No numerical advantage, but the defense has not set their positions yet. Attack their positioning weakness — whoever has the worst defensive angle or the slowest recovery. Punish bad transition defense with quick decisions (the drive-and-kick, the pull-up, the dump-off to the post player).

Transition defense — the other side: Every fast break you try, the opponent is doing the same when they get the ball. Sprint back the moment your possession ends. The player who commits to sprinting back — every single possession, makes and misses — is one of the most valuable players on the court. They prevent easy baskets. They show their team that they prioritize the right things.`,
      },
    ],
    quiz: {
      question: 'In a 2-on-1 fast break, when should you make the pass to your teammate?',
      options: [
        { text: 'Immediately at half court', correct: false },
        { text: 'After the defender has committed to stopping you', correct: true },
        { text: 'Only if you are tired', correct: false },
        { text: 'Always pass — never drive', correct: false },
      ],
    },
    xpReward: 40,
  },

  {
    id: 'teamwork',
    title: 'Teamwork & Leadership',
    emoji: '🤝',
    category: 'Mindset',
    track: 1,
    tagline: 'Together is the only way to win',
    chapters: [
      {
        title: 'What Real Teamwork Looks Like',
        content: `Championship basketball is never won by individual talent alone. Michael Jordan — the greatest individual player in history — won his first championship at age 28, after years of individual brilliance failing to beat lesser teams. He won only when he fully committed to the team system and trusted his teammates. That lesson is the foundation of every championship culture.

Screening: Setting a hard screen is one of the highest-IQ basketball plays. It creates an open shot for a teammate — directly and immediately. A legal screen requires stationary feet (you cannot be moving when you make contact) and a vertical body (you cannot lean). The harder and more correctly you set the screen, the better the shot your teammate gets. Most players set lazy screens — leaning, moving, going through the motions. Elite players set screens that their teammates run off of with full confidence.

Celebrating teammates: The practice of genuinely celebrating a teammate's success is a skill, not a personality trait. It is also a strategy. When teammates feel celebrated, they play harder. They look for you on drives when they see defenders collapsing. They pass back to you in crunch time because they trust the relationship. Selfish players get the ball less because teammates subconsciously redirect to players who make the game feel good. Celebrate every teammate. Not as performance — as genuine investment.

Taking responsibility: When your turnover leads to a fast break the other way, say "My fault" immediately, sprint back, and get a stop. That is it. No excuses. No looking for the alternative explanation. Accept it, fix it, move on. The teammate who takes responsibility earns trust faster than any highlight play. Coaches coach the player who takes responsibility. Scouts draft the player who takes responsibility.

Role definition: Not everyone scores 20 points. Championship teams are built on players who understand and excel in their specific role. The player who sets screens, sprints back on defense, and makes the right pass is as valuable as the scorer — because without them, the scorer does not get open shots. Know your role for your team RIGHT NOW. Do it better than anyone else does their role. Then expand your role as you develop.`,
      },
      {
        title: 'Leading by Example',
        content: `Leadership on a basketball team is not about being vocal. It is not about having the most talent. It is about consistently doing the things that earn the respect and trust of your teammates — and then making decisions from that earned position.

Work ethic as leadership: The hardest worker in practice earns the respect of every teammate without saying a word. When you sprint through every drill, set every screen, dive for every loose ball in practice — players notice. They adjust their own effort to match. Your work ethic sets the floor for what is acceptable on your team. Players who coast through practice pull the floor DOWN. Players who give maximum effort every time pull the floor UP.

Consistency: The player who shows up the same — focused, prepared, ready to compete — every practice and every game is more valuable than the player who is spectacular sometimes and absent other times. Coaches trust consistency. Teammates trust consistency. The consistent player gets the ball in crunch time because everyone knows what they will do with it.

Communication as leadership: Talk on defense. Call out screens, direct teammates to open players, encourage after mistakes. Communication makes everyone better without costing you anything. It is the easiest form of leadership and the most universally impactful.

The LeBron James model: LeBron James was named team captain at 16 years old in high school — before he was a statistical standout. He earned it because he was the first to practice, the first to study film, the most prepared player on the court, and the most vocal leader on defense. His talent followed his habits. Build the habits first. The talent develops on top of them.

Your standard: Whatever the best player on your team does — that is the minimum standard you should try to exceed. Not to beat them for their spot. To raise the entire team's ceiling by working to match the best every day.`,
      },
    ],
    quiz: {
      question: 'What do great teammates do when a teammate makes a great play?',
      options: [
        { text: 'Ignore it and focus on their own game', correct: false },
        { text: 'Get jealous', correct: false },
        { text: 'Celebrate it genuinely and make the teammate feel valued', correct: true },
        { text: 'Ask the coach why they did not get the play', correct: false },
      ],
    },
    xpReward: 35,
  },

  {
    id: 'watch-film',
    title: 'Study the Game Like a Pro',
    emoji: '🎬',
    category: 'Mindset',
    track: 1,
    tagline: 'The smartest players watch the most film',
    chapters: [
      {
        title: 'How to Watch Film With Purpose',
        content: `Kobe Bryant woke up at 4 AM to watch film. LeBron James has a dedicated film room in his house with a staff who cuts clips for him daily. Stephen Curry watches film of himself every single week, even in his MVP seasons. The pattern is universal: the best players in the world spend more time studying the game than any of their peers. This is not coincidence.

The difference between watching and studying: Watching basketball is entertainment. Studying basketball is analysis. When you watch, you follow the ball, you notice the highlights, you enjoy the action. When you study, you pause constantly, you ask questions, you identify patterns, you predict what will happen next and see if you were right. Most basketball viewing is watching. Almost none of it — for most fans — is studying. You are going to change that.

Watch with a specific question: Before every film session, write down exactly one question you are trying to answer: "How does Steph Curry use the dribble-handoff?" "How does the Spurs defense rotate when the ball goes into the post?" "How does LeBron read the pick-and-roll as the ball handler?" One question creates focus. Watching without a question creates distraction.

The pause-and-predict method: Pause the video BEFORE the offensive player acts. Study the situation — read the defense, read the spacing, read the score and clock. Predict what the right play is. Press play. Compare. This process trains pattern recognition faster than any other method. Your predictions will be wrong often at first. Within months, they will be right most of the time. That improvement is your basketball IQ being built.

Note-taking: Keep a physical notebook. Write what you observe during film. Write what surprised you, what you want to copy, what you would do differently. Writing forces organization and retention. A 20-minute film session with notes produces more lasting learning than a 60-minute session without them.`,
        videoUrl: 'https://www.youtube.com/watch?v=NLkB65KIPIM',
        videoTitle: 'How to Study Film as a Basketball Player',
      },
      {
        title: 'Self-Film — The Most Powerful Tool',
        content: `The most valuable film you will ever watch is film of yourself. This is also the most uncomfortable film you will ever watch — because what you see on camera is almost always different from what you think you look like in the game.

The gap between perception and reality: Every player has a mental image of themselves playing. This mental image is almost always more flattering than reality. Players who think their defensive stance is low see on film that they are playing upright. Players who believe they pass quickly see on film that they hold the ball too long. Players who feel like they have great footwork on their shot see on film that their foot is wrong. The camera shows what is actually happening, not what you think is happening.

What to look for when watching yourself: (1) Shooting mechanics — does your elbow line up, does your guide hand push, do you hold your follow-through? (2) Defensive stance — how low are you actually getting, and when do you stand up? (3) Decision-making — when you have the ball, are you looking at the floor before catching? (4) Off-ball movement — when you do not have the ball, what are you doing? Are you in your spacing spot? Are you cutting or standing? (5) Body language — this one is uncomfortable but important. Your teammates and coaches can see your body language. What does it communicate?

The improvement loop: Record → watch → identify one specific thing to fix → practice that thing → record again → compare. This loop, repeated consistently, is how professionals develop. It is precise and efficient. Random practice without this loop is much slower. Many youth players practice for years and develop slowly because they are repeating the same errors without diagnosis. The camera diagnoses for you.

Film frequency: Once per week minimum. Even a 10-minute recording of a practice drill, watched back immediately, is immensely valuable. Twice per week is better. Professional players watch film every single day. At your age, weekly self-film with notes will put you years ahead of players who never watch themselves.`,
      },
    ],
    quiz: {
      question: 'What is the most useful film you can study as a player?',
      options: [
        { text: 'Only NBA highlight reels', correct: false },
        { text: 'Film of yourself playing', correct: true },
        { text: 'Animated basketball tutorials only', correct: false },
        { text: 'Basketball video game footage', correct: false },
      ],
    },
    xpReward: 40,
  },
]
