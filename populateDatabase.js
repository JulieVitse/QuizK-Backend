
const mongoose = require('mongoose');
const Quiz = require('./model'); // Assuming your schema is in a separate file

const quizData = [
  {
    id: 1,
    title: 'Lucky 7',
    questionCount: 10,
    description: 'All questions or answers are related to the number 7.',
    questions: [
      {
        number: 1,
        category: 'Lucky 7',
        question:
          'Which 7 membered group made its debut with the song "No More Dream"?',
        correctAnswers: ['BTS'],
        options: ['iKON', 'BTS', 'Block B', 'Got7'],
      },
      {
        number: 2,
        category: 'Lucky 7',
        question: 'Who sang the 2023 hit song "Seven" ?',
        correctAnswers: ['Jungkook', 'Jung Kook'],
        options: ['Taemin', 'Taeyang', 'Jungkook', 'Se7en'],
      },
      {
        number: 3,
        category: 'Lucky 7',
        question:
          'This song, often praised for its uniqueness, has the group repeatedly prompting you to "Open your eyes". What song is it?',
        correctAnswers: ['7th Sense', 'The 7th Sense'],
        options: ['Seven', '7 rings', '7Heaven', 'The 7th Sense'],
      },
      {
        number: 4,
        category: 'Lucky 7',
        question:
          'Now a sub-label under KQ Entertainment, Seven Seasons was originally a company founded for which group following their departure from their previous label?',
        correctAnswers: ['Block B'],
        options: ['Beast', 'Block B', 'BTOB', 'B.A.P'],
      },
      {
        number: 5,
        category: 'Lucky 7',
        question:
          'Which 7 membered girl group is best known for their unique rock sound and dark concepts?',
        correctAnswers: ['Dreamcatcher'],
        options: ['Dreamcatcher', 'Momoland', 'Weeekly', 'GWSN'],
      },
      {
        number: 6,
        category: 'Lucky 7',
        question:
          'Before debuting with Got7, two members debuted first as a duo. What is the name of this duo?',
        correctAnswers: ['JJ Project'],
        options: ['Project J', 'Jus2', 'JJ2', 'JJ Project'],
      },
      {
        number: 7,
        category: 'Lucky 7',
        question:
          '2PM originally had 7 members, they continued as 6 after the departure of which member a year after their debut?',
        correctAnswers: ['Jay Park', 'Park Jaebeom'],
        options: ['Taecyeon', 'Jay Park', 'Nichkhun', 'Jun.K'],
      },
      {
        number: 8,
        category: 'Lucky 7',
        question:
          'Which rapper, who got his name known to the general public through Show Me The Money 777, featured on Mamamoo’s Wheein song “Trash”?',
        correctAnswers: ['pH-1', 'Ph1'],
        options: ["Be'o", 'Zico', 'pH-1', 'BewhY'],
      },
      {
        number: 9,
        category: 'Lucky 7',
        question:
          'What was the title song of 4minute’s 7th mini album, “Act. 7”?',
        correctAnswers: ['Hate'],
        options: ['Hate', 'Crazy', 'Volume Up', 'What’s Your Name?'],
      },
      {
        number: 10,
        category: 'Lucky 7',
        question:
          'The standard length of an idol/group contract is 7 years. As such, many groups end up going their separate ways after this time. Fans refer to this as "The 7-Year ______". What is the missing word?',
        correctAnswers: ['Curse'],
        options: ['Spell', 'Ending', 'Curse', 'Break'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 2,
    title: 'All the Subs',
    questionCount: 20,
    description: 'A quiz about groups sub-units and their songs.',
    questions: [
      {
        number: 1,
        category: 'All the Subs',
        question: 'Which sub-unit of GOT7 debuted with the song "Focus On Me"?',
        correctAnswers: ['Jus2'],
        options: ['JJ Project', 'Got2', 'JJ2', 'Jus2'],
      },
      {
        number: 2,
        category: 'All the Subs',
        question:
          'Famous for their fun and quirky songs and concepts, Orange Caramel is in fact a sub-unit of which group?',
        correctAnswers: ['After School'],
        options: ['A-Pink', 'Red Velvet', 'After School', "Girls' Generation"],
      },
      {
        number: 3,
        category: 'All the Subs',
        question: 'What is the name of NCT’s chinese sub-unit?',
        correctAnswers: ['WayV'],
        options: ['NCT Wish', 'WayV', 'NCT Dream', 'NCT U'],
      },
      {
        number: 4,
        category: 'All the Subs',
        question:
          'Not including SMROOKIES and the yearly projects (ie. NCT 2018, NCT 2020 etc.), how many sub-units does NCT have?',
        correctAnswers: ['6', 'Six'],
        options: ['4', '5', '6', '7'],
      },
      {
        number: 5,
        category: 'All the Subs',
        question:
          'Very famous for the body waves choreography, the song "Ma Boy" was released by which sub-unit of Sistar?',
        correctAnswers: ['Sistar19'],
        options: ['Sistar16', 'Sistar17', 'Sistar18', 'Sistar19'],
      },
      {
        number: 6,
        category: 'All the Subs',
        question:
          'Debuting with the song "Twinkle", which group was TTS a sub-unit of?',
        correctAnswers: ['SNSD', "Girls' Generation", 'Girls Generation'],
        options: ["Girl's Day", "Girls' Generation", 'T-Ara', 'KARA'],
      },
      {
        number: 7,
        category: 'All the Subs',
        question:
          'With the fun lyrics and choreography, the song "Fighting" was a big success for which Seventeen sub-unit?',
        correctAnswers: [
          'BSS',
          'BooSeokSoon',
          'Boo Seok Soon',
          'Seventeen BSS',
        ],
        options: ['SSB', 'BBS', 'BSS', 'SBB'],
      },
      {
        number: 8,
        category: 'All the Subs',
        question:
          'Known for their producing and songwriting, what is the name of this Stray Kids sub-unit?',
        correctAnswers: ['3RACHA'],
        options: ['C-RACHA', '3RACHA', '4RACHA', '5RACHA'],
      },
      {
        number: 9,
        category: 'All the Subs',
        question:
          'What is the name of BTOB’s third sub-unit, who debuted with the song "Tang Tang Tang"?',
        correctAnswers: ['90TAN', '90 TAN'],
        options: ['90TAN', 'BTOB Blue', 'BTOB 4U', '90TANG'],
      },
      {
        number: 10,
        category: 'All the Subs',
        question:
          'Block B BASTARZ, a sub-unit of Block B, debuted in 2015. What was the name of their debut song?',
        correctAnswers: ['Zero For Conduct'],
        options: ['HER', 'Freeze', 'Very Good', 'Zero For Conduct'],
      },
      {
        number: 11,
        category: 'All the Subs',
        question:
          'What was the name of the duo formed by Bobby (iKON) and Mino (Winner)?',
        correctAnswers: ['MOBB'],
        options: ['MOBB', 'MOBA', 'MOBBY', 'MOBBZ'],
      },
      {
        number: 12,
        category: 'All the Subs',
        question: 'Which EXO sub-unit sang "Blooming Day"?',
        correctAnswers: ['EXO CBX', 'CBX', 'ChenBaekXi', 'EXO-CBX'],
        options: ['EXO-K', 'EXO-M', 'EXO-CBX', 'EXO-SC'],
      },
      {
        number: 13,
        category: 'All the Subs',
        question:
          'Which JYPE group sub-unit debuted with the EP "Masterpiece"?',
        correctAnswers: ['MiSaMo'],
        options: ['MiSaMo', 'Jus2', 'Day6 (Even Of Day)', 'JJ Project'],
      },
      {
        number: 14,
        category: 'All the Subs',
        question:
          'After leaving their former company, the LOONA sub-unit Odd Eye Circle redebuted after adding 2 other LOONA former members. What is the name of their new group?',
        correctAnswers: ['ARTMS'],
        options: ['OEC', 'ARTMS', 'UNIS', 'QWER'],
      },
      {
        number: 15,
        category: 'All the Subs',
        question: 'What was the name of AOA’s band sub-unit?',
        correctAnswers: ['AOA Black'],
        options: ['AOA Cream', 'AOA White', 'AOA Red', 'AOA Black'],
      },
      {
        number: 16,
        category: 'All the Subs',
        question:
          'What was the name of the sub-unit formed in 2017 by HyunA and Pentagon’s Hui and Dawn?',
        correctAnswers: ['Triple H'],
        options: ['Triple Trouble', 'Three H', 'Triple H', 'Trouble Maker'],
      },
      {
        number: 17,
        category: 'All the Subs',
        question:
          'Nasty Nasty was a unit group composed of Kevin (ZE:A), Kyungri and Sojin (9Muses). What was their first and only song?',
        correctAnswers: ['Knock'],
        options: ['Knock', 'Crazy', 'One', 'Wild'],
      },
      {
        number: 18,
        category: 'All the Subs',
        question:
          'During Minhyun’s hiatus from NU’EST after debuting with Wanna One, the remaining members debuted as NU’EST W. What does the W stand for?',
        correctAnswers: ['Wait'],
        options: ['Want', 'Wait', 'Wake', 'We'],
      },
      {
        number: 19,
        category: 'All the Subs',
        question:
          'VIXX LR, a sub-unit formed by Leo and Ravi, debuted in 2015. What was the name of their debut song?',
        correctAnswers: ['Beautiful Liar'],
        options: ['Fantasy', 'Whisper', 'Beautiful Liar', 'Error'],
      },
      {
        number: 20,
        category: 'All the Subs',
        question:
          '4minute’s only sub-unit debuted in 2013 with their first and only release, "Harvest Moon". What was the name of this sub-unit?',
        correctAnswers: ['2YOON'],
        options: ['2YOU', '2YOON', '2HYUN', '2MIN'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 3,
    title: 'Taste The Rainbow',
    questionCount: 20,
    description: 'Every question or answer is related to colors in K-Pop.',
    questions: [
      {
        number: 1,
        category: 'Taste The Rainbow',
        question:
          'Which famous summer song has the same color in its title as the group that sang it?',
        correctAnswers: ['Red Flavor'],
        options: [
          'Orange Flower',
          'Blue Flame',
          'Red Flavor',
          'La Vie En Rose',
        ],
      },
      {
        number: 2,
        category: 'Taste The Rainbow',
        question: 'Which group’s fandom is called “Pink Panda”?',
        correctAnswers: ['Apink', 'A Pink', 'A-Pink'],
        options: ['Pink Fantasy', 'Crayon Pop', 'IZ*ONE', 'Apink'],
      },
      {
        number: 3,
        category: 'Taste The Rainbow',
        question: 'Which group sang the song “Black Dress”?',
        correctAnswers: ['CLC'],
        options: ['CLC', '(G)I-DLE', 'Dreamcatcher', 'Mamamoo'],
      },
      {
        number: 4,
        category: 'Taste The Rainbow',
        question:
          'Which girl group debuted as Mamamoo’s "little sister" group?',
        correctAnswers: ['Purple Kiss'],
        options: ['Red Square', 'Purple Kiss', 'BlackSwan', 'Pink Fantasy'],
      },
      {
        number: 5,
        category: 'Taste The Rainbow',
        question:
          'According to the title of their song, what color is ATEEZ’s Summer?',
        correctAnswers: ['Blue'],
        options: ['Yellow', 'White', 'Blue', 'Green'],
      },
      {
        number: 6,
        category: 'Taste The Rainbow',
        question:
          '"They say you can go to better places if you wear better shoes". These are lyrics from which famous IU song?',
        correctAnswers: ['Red Shoes', 'The Red Shoes'],
        options: ['Palette', 'The Red Shoes', 'Blueming', 'Lilac'],
      },
      {
        number: 7,
        category: 'Taste The Rainbow',
        question:
          '“Pink Tape” was a very well received and praised album released by which group in 2013?',
        correctAnswers: ['f(x)', 'fx'],
        options: ['f(x)', 'Apink', 'KARA', 'Secret'],
      },
      {
        number: 8,
        category: 'Taste The Rainbow',
        question:
          'From their songs of the same name, Astro and LE SSERAFIM share the same Flame. What color is it?',
        correctAnswers: ['Blue'],
        options: ['Red', 'Pink', 'Purple', 'Blue'],
      },
      {
        number: 9,
        category: 'Taste The Rainbow',
        question:
          'In their 2012 song, Blue, which boy group is "singing [their] blues"?',
        correctAnswers: ['Bigbang', 'Big Bang'],
        options: ['Super Junior', 'Bigbang', '2PM', 'Beast'],
      },
      {
        number: 10,
        category: 'Taste The Rainbow',
        question:
          'Despite their cute sounding name, this group released a song containing harsh metal vocals and heavy guitars. Who are they?',
        correctAnswers: ['Pink Fantasy'],
        options: ['Apink', 'Orange Caramel', 'Pink Fantasy', 'Red Velvet'],
      },
      {
        number: 11,
        category: 'Taste The Rainbow',
        question:
          'Which former Produce 101 winner, now soloist, released the mini album "Magenta"?',
        correctAnswers: ['Kang Daniel'],
        options: ['Kang Daniel', 'Ha Sungwoon', 'Kim Wooseok', 'Park Jihoon'],
      },
      {
        number: 12,
        category: 'Taste The Rainbow',
        question:
          'Coming from different groups/artists song titles, which color do the following have in common? Pearl, Suit, Cat, Rose.',
        correctAnswers: ['Black'],
        options: ['White', 'Blue', 'Red', 'Black'],
      },
      {
        number: 13,
        category: 'Taste The Rainbow',
        question:
          'Released for their Seasons Songs project, ATEEZ’s "White Love" is a cover of which famous 90s K-Pop group?',
        correctAnswers: ['Turbo'],
        options: ['Roo’Ra', 'Seo Taiji & Boys', 'Turbo', 'Cool'],
      },
      {
        number: 14,
        category: 'Taste The Rainbow',
        question: 'Which group successful debut song was called "Loner"?',
        correctAnswers: ['CNBlue', 'CN BLUE', 'C.N.Blue'],
        options: ['Golden Child', 'CNBlue', 'Black6ix', 'Brown Eyed Girls'],
      },
      {
        number: 15,
        category: 'Taste The Rainbow',
        question:
          'Coming from different groups/artists song titles, which color do the following have in common? Sun, Moon, Light/Lights.',
        correctAnswers: ['Red'],
        options: ['Black', 'Red', 'Silver', 'Gold'],
      },
      {
        number: 16,
        category: 'Taste The Rainbow',
        question:
          'In this retro sounding ATEEZ song, they want this light to follow them and "pierce through the darkness". What color is the light?',
        correctAnswers: ['Silver'],
        options: ['Golden', 'Red', 'Green', 'Silver'],
      },
      {
        number: 17,
        category: 'Taste The Rainbow',
        question: 'In this 2015 song, which girl group’s color is "Hot Pink"?',
        correctAnswers: ['EXID'],
        options: ['EXID', 'f(x)', 'Oh My Girl', 'Lovelyz'],
      },
      {
        number: 18,
        category: 'Taste The Rainbow',
        question:
          'Red Velvet’s Lemonade, TXT’s Orangeade, Cheeze and pH-1’s Champagne. These drinks all share a common color. What is it?',
        correctAnswers: ['Blue'],
        options: ['Orange', 'Blue', 'Pink', 'Red'],
      },
      {
        number: 19,
        category: 'Taste The Rainbow',
        question:
          'In their 2024 title song, which girl group "shines bright like dynamite gold"?',
        correctAnswers: ['Itzy'],
        options: ['NMIXX', 'IVE', 'ILLIT', 'Itzy'],
      },
      {
        number: 20,
        category: 'Taste The Rainbow',
        question:
          'In 2020, BTS released "Black Swan". 5 years earlier, this colorful girl group had a title song with the same name. Who are they?',
        correctAnswers: ['Rainbow'],
        options: ['BlackSwan', 'Red Velvet', 'Rainbow', 'Apink'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 4,
    title: 'Décalcomanie',
    questionCount: 40,
    description:
      'Provided a list of groups/artists, guess the song title they have in common.',
    extraDescription:
      'Note: There is a bit of lee-way with the spelling in some instances, i.e "Diamond" and "Diamonds" or "Love You" and "LoveYou" would be grouped together. Both spellings would be accepted when typing the answer directly in these cases.',
    questions: [
      {
        number: 1,
        category: 'Décalcomanie',
        question:
          'ATEEZ, Dreamcatcher, TXT, Sonamoo, Twice, One Pact, Nu’est W, Taemin, SS501',
        correctAnswers: ['Deja Vu', 'Déjà Vu', 'DEJAVU'],
        options: ['Scream', 'Deja Vu', 'Wonderland', 'Dreamer'],
      },
      {
        number: 2,
        category: 'Décalcomanie',
        question: 'Dreamcatcher, SMTOWN, Brave Girls, Xikers',
        correctAnswers: ['Red Sun'],
        options: ['Red Moon', 'Red', 'Red Flavor', 'Red Sun'],
      },
      {
        number: 3,
        category: 'Décalcomanie',
        question: 'Astro, ATEEZ, Aimers, &TEAM, Twice, Laboum, Rocket Punch',
        correctAnswers: [
          'Fireworks',
          'Firework',
          'Firework/Fireworks',
          'Firework(s)',
        ],
        options: [
          'Dreamer/Dreamers',
          'Diamond/Diamonds',
          'Firework/Fireworks',
          'Star/Stars',
        ],
      },
      {
        number: 4,
        category: 'Décalcomanie',
        question: 'Verivery, Just B, DKB',
        correctAnswers: ['Get Away'],
        options: ['Go Away', 'Get Away', 'Stay Away', 'Run Away'],
      },
      {
        number: 5,
        category: 'Décalcomanie',
        question: 'BTS, The New Six, Kim Sung Kyu, Lay',
        correctAnswers: ['I Need U', 'I Need You', 'I Need U/I Need You'],
        options: [
          'I Need U/I Need You',
          'I Want U/I Want You',
          'I Feel U/I Feel You',
          'I Love U/I Love You',
        ],
      },
      {
        number: 6,
        category: 'Décalcomanie',
        question: 'NewJeans, PSY, Gaho',
        correctAnswers: ['Right Now'],
        options: ['OMG', 'Gangnam Style', 'Attention', 'Right Now'],
      },
      {
        number: 7,
        category: 'Décalcomanie',
        question: 'Chung Ha, Soyou, Sunmi',
        correctAnswers: ['Gotta Go'],
        options: ['Gashina', 'Gotta Go', 'Heroine', 'Rollercoaster'],
      },
      {
        number: 8,
        category: 'Décalcomanie',
        question: 'P1Harmony, ATEEZ, Riize, Sunmi, Taeyeon, ICHILLIN',
        correctAnswers: ['Siren'],
        options: ['Impossible', 'Sad Song', 'Siren', 'Work'],
      },
      {
        number: 9,
        category: 'Décalcomanie',
        question:
          'Wonder Girls, CIX, fromis_9, Zhoumi, Got7, Twice, Kep1er, B1A4, WJSN',
        correctAnswers: ['Rewind'],
        options: ['Rewind', 'Tell Me', 'Jungle', 'Fun'],
      },
      {
        number: 10,
        category: 'Décalcomanie',
        question: 'Treasure, The Boyz, EXID',
        correctAnswers: ['Boy'],
        options: ['Up & Down', 'Boy', 'I Love You', 'Maverick'],
      },
      {
        number: 11,
        category: 'Décalcomanie',
        question: '2NE1, P1Harmony, ToppDogg, Got7, Infinite',
        correctAnswers: ['Follow Me'],
        options: ['Hard Carry', 'Ugly', 'Follow Me', 'Back'],
      },
      {
        number: 12,
        category: 'Décalcomanie',
        question: 'Kara, Fifty Fifty, Oh My Girl, pH-1, DKZ',
        correctAnswers: ['Cupid'],
        options: ['Higher', 'Dolphin', 'Mister', 'Cupid'],
      },
      {
        number: 13,
        category: 'Décalcomanie',
        question: 'EXO, ATEEZ, TRI.BE, Dreamcatcher, f(x), Mamamoo',
        correctAnswers: ['Diamond'],
        options: ['Diamond', 'Wave', 'Lotto', 'Hip'],
      },
      {
        number: 14,
        category: 'Décalcomanie',
        question: '2PM, B.A.P, Cherry Bullet, NCT Wish, Henry',
        correctAnswers: ['Hands Up'],
        options: ['Fantastic', 'One Shot', 'Hands Up', 'Again & Again'],
      },
      {
        number: 15,
        category: 'Décalcomanie',
        question: 'ATEEZ, Aespa, Beatwin, Great Guys, The KingDom, B.I.G',
        correctAnswers: ['Illusion'],
        options: ['Drama', 'Illusion', 'Ascension', 'Hello'],
      },
      {
        number: 16,
        category: 'Décalcomanie',
        question: 'Lee Chae Yeon, KNK, Nasty Nasty, Astro',
        correctAnswers: ['Knock'],
        options: ["Don't", 'Ride', 'All Night', 'Knock'],
      },
      {
        number: 17,
        category: 'Décalcomanie',
        question:
          'The Boyz, Jin (BTS), JBJ95, Target, Wanna One, Kihyun & Joohoney (Monsta X)',
        correctAnswers: ['Awake'],
        options: ['Awake', 'Beautiful', 'Roar', 'My Flower'],
      },
      {
        number: 18,
        category: 'Décalcomanie',
        question: 'ATEEZ, Dreamcatcher, gugudan, Jessica (SNSD)',
        correctAnswers: ['Wonderland'],
        options: ['Utopia', 'Wonderland', 'Vision', 'Diary'],
      },
      {
        number: 19,
        category: 'Décalcomanie',
        question: 'Super Junior, CLC, Max Changmin, Wonho',
        correctAnswers: ['Devil'],
        options: ['Angel', 'Heaven', 'Hell', 'Devil'],
      },
      {
        number: 20,
        category: 'Décalcomanie',
        question: "IVE, Girls' Generation, Astro, f(x), BTS, (G)I-DLE",
        correctAnswers: ['All Night'],
        options: ['All Night', 'Love Dive', 'Spring Day', 'Hot Summer'],
      },
      {
        number: 21,
        category: 'Décalcomanie',
        question: 'Purple Kiss, Day6, Everglow',
        correctAnswers: ['Zombie'],
        options: ['Nerdy', 'Melt Down', 'Zombie', 'Pirate'],
      },
      {
        number: 22,
        category: 'Décalcomanie',
        question: 'ATEEZ, Taemin, Kang Daniel, WayV, Taeyeon',
        correctAnswers: ['Horizon'],
        options: ['Move', 'Antidote', 'Horizon', 'Fine'],
      },
      {
        number: 23,
        category: 'Décalcomanie',
        question: 'Beast, Kwon Eunbi, Yesung (Super Junior), Monsta X',
        correctAnswers: ['Beautiful Night'],
        options: ['Good Luck', 'Beautiful Night', 'One Day', 'Underwater'],
      },
      {
        number: 24,
        category: 'Décalcomanie',
        question: 'Seventeen, Enhypen, Yezi, Ailee, BTS, JBJ95',
        correctAnswers: ['Home'],
        options: ['Home', 'Run', 'Heaven', 'Fever'],
      },
      {
        number: 25,
        category: 'Décalcomanie',
        question: 'BlackSwan, The KingDom, Pixy, Enhypen',
        correctAnswers: ['Karma'],
        options: ['Tonight', 'Wings', 'Paranormal', 'Karma'],
      },
      {
        number: 26,
        category: 'Décalcomanie',
        question: 'Treasure, EXID, 2NE1, S.E.S, Taeyeon',
        correctAnswers: ['I Love You'],
        options: [
          'Going Crazy',
          'I Love You',
          'Dreams Come True',
          'Every Night',
        ],
      },
      {
        number: 27,
        category: 'Décalcomanie',
        question: 'Taemin, The New Six, Treasure, 4L(Four Ladies)',
        correctAnswers: ['Move'],
        options: ['Advice', 'Fuego', 'Move', 'Idea'],
      },
      {
        number: 28,
        category: 'Décalcomanie',
        question: 'Suzy & Baekhyun, Babymonster, Taeyeon, Seventeen',
        correctAnswers: ['Dream'],
        options: ['Nightmare', 'Rain', 'Forever', 'Dream'],
      },
      {
        number: 29,
        category: 'Décalcomanie',
        question: 'Oneus, Seo Taiji & Boys, 2NE1, Tabber, BTS, Jannabi',
        correctAnswers: ['Come Back Home'],
        options: ['I Know', 'Black Mirror', 'Come Back Home', 'I Don’t Care'],
      },
      {
        number: 30,
        category: 'Décalcomanie',
        question: 'CIX, BVNDIT, BTS, TVXQ, Super Junior D&E',
        correctAnswers: ['Jungle'],
        options: ['Rebel', 'Jungle', 'Numb', 'Venom'],
      },
      {
        number: 31,
        category: 'Décalcomanie',
        question:
          'Got7, (G)I-DLE, EXO, BTS, Solar, Eric Nam, Infinite, Park Jihoon, NCT 127, Pentagon, JAY (iKON), Hyolyn, CL, Onew, April, NINE.i, Oh My Girl, U-Kiss, Gfriend, TIOT, Girls’ Generation, Limelight, Ren (Nu’est W), TRCNG',
        correctAnswers: ['Paradise'],
        options: ['Paradise', 'Utopia', 'Heaven', 'Dream'],
      },
      {
        number: 32,
        category: 'Décalcomanie',
        question:
          'Ailee, EXO, Taeyeon, Taemin, RM, BTOB, Monsta X, AB6IX, Apink',
        correctAnswers: ['Heaven'],
        options: ['Universe', 'Heaven', 'Breathe', 'Movie'],
      },
      {
        number: 33,
        category: 'Décalcomanie',
        question: 'BTS, Xdinary Heroes, B.A.P, Mamamoo+',
        correctAnswers: ['Save Me'],
        options: ['Save Me', 'Dystopia', 'Little Things', 'Better'],
      },
      {
        number: 34,
        category: 'Décalcomanie',
        question:
          'Highlight, IZ*ONE, Super Junior, J-Hope, The Boyz, NCT 127, Dreamcatcher, B.I',
        correctAnswers: ['Daydream'],
        options: ['Paradox', 'Loved', 'More', 'Daydream'],
      },
      {
        number: 35,
        category: 'Décalcomanie',
        question: 'Oh My Girl, IU, Apink, Lovelyz',
        correctAnswers: ['Secret Garden'],
        options: ['Remember', 'Secret Garden', 'Love Poem', 'That Day'],
      },
      {
        number: 36,
        category: 'Décalcomanie',
        question:
          'The Boyz, Solar, KARA, Lay, Tabber & Dean, Park Jinyoung (JYP)',
        correctAnswers: ['Honey'],
        options: ['Nectar', 'Elevator', 'Honey', 'Lit'],
      },
      {
        number: 37,
        category: 'Décalcomanie',
        question: 'SF9, Got7, Monsta X, CNBlue, April',
        correctAnswers: ['Now or Never'],
        options: ['Breath', 'Loner', 'Trespass', 'Now or Never'],
      },
      {
        number: 38,
        category: 'Décalcomanie',
        question: 'Woodz, Kai, Vixx, Boynextdoor',
        correctAnswers: ['Amnesia'],
        options: ['Serenade', 'Amnesia', 'Different', 'Peaches'],
      },
      {
        number: 39,
        category: 'Décalcomanie',
        question:
          'Wonwoo & Mingyu, Xikers, Crush, Whee In (Mamamoo), Purple Kiss',
        correctAnswers: ['Bittersweet', 'Bitter Sweet'],
        options: ['Bittersweet', 'Rockstar', 'Sweet Juice', 'Ego'],
      },
      {
        number: 40,
        category: 'Décalcomanie',
        question: 'Mamamoo, IZ*ONE, SF9, Dawn, Vixx, Shinhwa',
        correctAnswers: ['Memory'],
        options: ['Memory', 'Wind Flower', 'Panorama', 'Scentist'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 5,
    title: 'Décalcomanie (2)',
    questionCount: 40,
    description:
      'Provided a list of groups/artists, guess the song title they have in common.',
    extraDescription:
      'Note: There is a bit of lee-way with the spelling in some instances, i.e "Diamond" and "Diamonds" or "Love You" and "LoveYou" would be grouped together. Both spellings would be accepted when typing the answer directly in these cases.',
    questions: [
      {
        number: 1,
        category: 'Décalcomanie (2)',
        question: 'Blackpink, Hyuna, Jeon Somi, f(x), Junho (2PM), Twice',
        correctAnswers: ['Ice Cream'],
        options: ['Fast Forward', 'Shut Down', 'Ice Cream', 'Go Hard'],
      },
      {
        number: 2,
        category: 'Décalcomanie (2)',
        question: 'NCT 127, WHIB, Blackpink',
        correctAnswers: ['Kick It'],
        options: ['Fact Check', 'Kick It', 'In The Mood', 'Forever Young'],
      },
      {
        number: 3,
        category: 'Décalcomanie (2)',
        question:
          'Gfriend, Moon Byul, Taemin, Got7, Kim Lip(LOONA), Dreamcatcher',
        correctAnswers: ['Eclipse'],
        options: ['Starlight', 'Lullaby', 'Fly', 'Eclipse'],
      },
      {
        number: 4,
        category: 'Décalcomanie (2)',
        question:
          'Mamamoo, Fifty Fifty, BoA, Zhoumi, GWSN, fromis_9, Suho (EXO), NCT Dream',
        correctAnswers: ['Starry Night'],
        options: ['Only One', 'Love Bomb', 'Starry Night', 'Puzzle Moon'],
      },
      {
        number: 5,
        category: 'Décalcomanie (2)',
        question: 'Oneus, WEi, ATEEZ, Oh My Girl, Stray Kids, Wanna One',
        correctAnswers: ['Twilight'],
        options: ['Twilight', 'Starlight', 'Dazzling Light', 'Moonlight'],
      },
      {
        number: 6,
        category: 'Décalcomanie (2)',
        question: 'Oh My Girl, RM, Jihyo (Twice), Girls’ Generation, The Boyz',
        correctAnswers: ['Closer'],
        options: ['Lonely', 'Honey', 'Genie', 'Closer'],
      },
      {
        number: 7,
        category: 'Décalcomanie (2)',
        question: 'OnlyOneOf, B.A.P, MFBTY, BerryGood, Hoya (Infinite)',
        correctAnswers: ['Angel'],
        options: ['Angel', 'Warrior', 'Love Letter', 'Sage'],
      },
      {
        number: 8,
        category: 'Décalcomanie (2)',
        question: 'FTIsland, WJSN, Seventeen, Hynn',
        correctAnswers: ['I Wish'],
        options: ['I Hope', 'As You Wish', 'Secret', 'I Wish'],
      },
      {
        number: 9,
        category: 'Décalcomanie (2)',
        question: 'Omega X, (G)I-DLE, Kang Daniel, Bobby, CLC, SF9, Jay Chang',
        correctAnswers: ['Liar'],
        options: ['Venus', 'Lion', 'Liar', 'Parade'],
      },
      {
        number: 10,
        category: 'Décalcomanie (2)',
        question:
          'Kim Wooseok, Youngjae (Got7), Yena, Kep1er, 15&, WJSN, MIRAE',
        correctAnswers: ['Sugar'],
        options: ['Sugar', 'Dawn', 'Smiley', 'Star'],
      },
      {
        number: 11,
        category: 'Décalcomanie (2)',
        question: 'UP10TION, BTS, Taemin, ATEEZ, Yugyeom (GOT7)',
        correctAnswers: ['Light', 'Lights', 'Light(s)', 'Light/Lights'],
        options: ['Promise/Promises', 'Wave/Waves', 'Light/Lights', 'Day/Days'],
      },
      {
        number: 12,
        category: 'Décalcomanie (2)',
        question:
          'Red Velvet, Bigbang, 100%, Son Dambi, Sistar, Christopher & Chung Ha',
        correctAnswers: ['Bad Boy'],
        options: ['Last Farewell', 'Bad Boy', 'So Cool', 'Savage'],
      },
      {
        number: 13,
        category: 'Décalcomanie (2)',
        question:
          'ATEEZ, Enhypen, Gfriend, DKZ, Park Jinyoung (JYP), Max Changmin, Brave Girls, M.O.N.T, Han Seungwoo',
        correctAnswers: ['Fever'],
        options: ['Fate', 'Apple', 'Fever', 'Harmony'],
      },
      {
        number: 14,
        category: 'Décalcomanie (2)',
        question: 'Fifty Fifty, Wonder Girls, Infinite, Lee Young Ji',
        correctAnswers: ['Tell Me'],
        options: ['Tell Me', 'Nobody', 'Be Mine', 'Gravity'],
      },
      {
        number: 15,
        category: 'Décalcomanie (2)',
        question: ' B.A.P, Taeyang, Twice, TVXQ, Marmello, pH-1',
        correctAnswers: ['Wake Me Up'],
        options: ['No Mercy', 'Cheer Up', 'Catch Me', 'Wake Me Up'],
      },
      {
        number: 16,
        category: 'Décalcomanie (2)',
        question: 'Karina (Aespa), Kep1er, Bang Yongguk, IZ*ONE, Bobby & Mino',
        correctAnswers: ['Up', 'Up!'],
        options: ['Down', 'Up', 'Left', 'Right'],
      },
      {
        number: 17,
        category: 'Décalcomanie (2)',
        question: 'Taemin, BTS, Super Junior D&E, Wooah, Highlight, H1-KEY',
        correctAnswers: ['Danger'],
        options: ['Blush', 'Run', 'Alone', 'Danger'],
      },
      {
        number: 18,
        category: 'Décalcomanie (2)',
        question:
          'Sunmi, Oneus, Dreamcatcher, WJSN, Seori, Jeong Eunji (Apink), Kihyun (Monsta X), Lee Hyori',
        correctAnswers: ['Full Moon'],
        options: ['Heart Burn', 'Luna', 'Full Moon', 'Stardust'],
      },
      {
        number: 19,
        category: 'Décalcomanie (2)',
        question: 'EXID, Winner, Hyolyn, Seventeen, iKON',
        correctAnswers: ['Ah Yeah'],
        options: ['Killing Me', 'Rock With You', 'Really Really', 'Ah Yeah'],
      },
      {
        number: 20,
        category: 'Décalcomanie (2)',
        question: 'NewJeans, UP10TION, Trouble Maker, Gemini, Younha, SHINee',
        correctAnswers: ['Attention', 'Attention!'],
        options: ['Attention', 'Now', 'OMG', 'Blue Rose'],
      },
      {
        number: 21,
        category: 'Décalcomanie (2)',
        question:
          'EXO, Minhyun (Nu’est), NCT U, DKZ, Mamamoo, LOONA, Onewe, Youha, TOZ',
        correctAnswers: ['Universe'],
        options: ['Paradise', 'Destiny', 'Walk', 'Universe'],
      },
      {
        number: 22,
        category: 'Décalcomanie (2)',
        question: 'NMIXX, TRI.BE, Rainbow, Dara (2NE1)',
        correctAnswers: ['Kiss'],
        options: ['Diamond', 'Kiss', 'Dash', 'Sunshine'],
      },
      {
        number: 23,
        category: 'Décalcomanie (2)',
        question: 'Seventeen, BTS, Taeyeon, KNK, Kihyun (Monsta X)',
        correctAnswers: ['Rain'],
        options: ['Rain', 'Heat', 'Wind', 'Snow'],
      },
      {
        number: 24,
        category: 'Décalcomanie (2)',
        question: 'Rainbow, Dreamcatcher, Park Bom, IU, Crush, ALICE, SHINee',
        correctAnswers: ['You And I', 'You & I'],
        options: ['Me And I', 'Me And You', 'You And I', 'You And Me'],
      },
      {
        number: 25,
        category: 'Décalcomanie (2)',
        question: 'BTS, CNBlue, EXO, Sorn (CLC), Epik High',
        correctAnswers: ['Run'],
        options: ["I'm Sorry", 'Umbrella', 'Not Today', 'Run'],
      },
      {
        number: 26,
        category: 'Décalcomanie (2)',
        question:
          'Gfriend, Super Junior D&E, ATEEZ, Victon, Got7, Mino, Jay B, Cravity, E’LAST',
        correctAnswers: ['Sunrise'],
        options: ['In Love', 'Sunrise', 'Adrenaline', 'Glow'],
      },
      {
        number: 27,
        category: 'Décalcomanie (2)',
        question: 'Aespa, Taemin, Girl’s Day, BXB',
        correctAnswers: ['Thirsty'],
        options: ['Thirsty', 'Drama', 'Darling', 'Want'],
      },
      {
        number: 28,
        category: 'Décalcomanie (2)',
        question:
          'B1A4, 2NE1, Sistar, Jonghyun, SPICA, Hyolyn, Mark Tuan (Got7), RM, Taeyong',
        correctAnswers: ['Lonely'],
        options: ['Solo Day', 'Alone', 'Lonely', 'Tonight'],
      },
      {
        number: 29,
        category: 'Décalcomanie (2)',
        question: 'Kang Daniel, Fifty Fifty, Twice, Seventeen, NCT Dream',
        correctAnswers: ['SOS', 'S.O.S.'],
        options: ['Breathing', 'SOS', 'Paranoia', 'Fancy'],
      },
      {
        number: 30,
        category: 'Décalcomanie (2)',
        question: 'Chuu, Max Changmin, Day6, SHINee, AOA',
        correctAnswers: ['Chocolate'],
        options: ['Coffee', 'Caramel', 'Vanilla', 'Chocolate'],
      },
      {
        number: 31,
        category: 'Décalcomanie (2)',
        question: 'BoA, Twice, ATEEZ, Mamamoo, Monsta X',
        correctAnswers: ['Better'],
        options: ['Answer', 'Jealousy', 'Better', 'Signal'],
      },
      {
        number: 32,
        category: 'Décalcomanie (2)',
        question:
          'LOONA, BTS, Loveholics, P1Harmony, WJSN, StayC, f(x), G-Dragon, Weki Meki, Red Velvet, Nayeon (Twice), Stray Kids',
        correctAnswers: ['Butterfly', 'Butterflies', 'Butterfly/Butterflies'],
        options: [
          'Butterfly/Butterflies',
          'Dragonfly/Dragonflies',
          'Strawberry/Strawberries',
          'Blackberry/Blackberries',
        ],
      },
      {
        number: 33,
        category: 'Décalcomanie (2)',
        question: 'NEXZ, TXT, Got7, Super Junior, WayV, Woozi (Seventeen)',
        correctAnswers: ['Miracle'],
        options: ['Moonwalk', 'Starlight', 'Blue Hour', 'Miracle'],
      },
      {
        number: 34,
        category: 'Décalcomanie (2)',
        question: 'ATEEZ, CIX, IVE, Limesoda, Brown Eyed Girls',
        correctAnswers: ['Wave'],
        options: ['Crescent', 'Wave', 'Memories', 'Either Way'],
      },
      {
        number: 35,
        category: 'Décalcomanie (2)',
        question: 'Twice, Girls’ Generation, Seventeen, Ha Sung Woon, WJSN',
        correctAnswers: ['Say Yes', 'Say Yes!'],
        options: ['Gift', 'Kissing You', 'Last Dance', 'Say Yes'],
      },
      {
        number: 36,
        category: 'Décalcomanie (2)',
        question:
          'Riize, Kim Wooseok & Eunsang, Super Junior, Woodz, Apink, Moon Byul & Onewe, Infinite, Lovelyz, WJSN',
        correctAnswers: ['Memories'],
        options: ['Memories', 'Journey', 'Impossible', 'Mamacita'],
      },
      {
        number: 37,
        category: 'Décalcomanie (2)',
        question: 'B.A.P, The KingDom, Cross Gene, Zico',
        correctAnswers: ['Dystopia'],
        options: ['Excalibur', 'Badman', 'Dystopia', 'Freak'],
      },
      {
        number: 38,
        category: 'Décalcomanie (2)',
        question:
          'Girls’ Generation, Seventeen, A.C.E, Winner, Suzy & DPR Live, T-Ara, Kim Wooseok, Secret Number',
        correctAnswers: ['Holiday'],
        options: ['Sugar Free', 'Holiday', 'Party', 'Red Moon'],
      },
      {
        number: 39,
        category: 'Décalcomanie (2)',
        question: 'Seventeen, EXO, SF9, Onewe, Trendz, JJCC',
        correctAnswers: ['Trauma'],
        options: ['Eraser', 'Puzzle', 'Circles', 'Trauma'],
      },
      {
        number: 40,
        category: 'Décalcomanie (2)',
        question:
          'Aespa, Cignature, YooA, SHINee, &TEAM, Girls’ Generation-Oh!GG, Whee In',
        correctAnswers: ['Melody'],
        options: ['Good Evening', 'Girls', 'Melody', 'Selfish'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 6,
    title: 'Décalcomanie (3)',
    questionCount: 35,
    description:
      'Provided a list of groups/artists, guess the song title they have in common.',
    extraDescription:
      'Note: There is a bit of lee-way with the spelling in some instances, i.e "Diamond" and "Diamonds" or "Love You" and "LoveYou" would be grouped together. Both spellings would be accepted when typing the answer directly in these cases.',
    questions: [
      {
        number: 1,
        category: 'Décalcomanie (3)',
        question: 'fromis_9, NOIR, Max Changmin, Younha, Weeekly',
        correctAnswers: ['Airplane Mode'],
        options: ['Airplane Mode', 'Supersonic', 'Lie', 'After School'],
      },
      {
        number: 2,
        category: 'Décalcomanie (3)',
        question: 'ILLIT, Rain & Jackson Wang, Kwon Eunbi, Monsta X',
        correctAnswers: ['Magnetic'],
        options: ['Underwater', 'Love Killa', 'Magnetic', 'Rainism'],
      },
      {
        number: 3,
        category: 'Décalcomanie (3)',
        question: 'ATEEZ (Yunho & Mingi), Kihyun (Monsta X), Oneus, DKB',
        correctAnswers: ['Youth'],
        options: ['Precious', 'Youth', 'Valkyrie', 'Work Hard'],
      },
      {
        number: 4,
        category: 'Décalcomanie (3)',
        question:
          'BTOB, Lovelyz, Stray Kids, 3RACHA, IVE, LOONA, Mamamoo, Twice',
        correctAnswers: ['WOW', 'WOW!', 'W.O.W.', 'W.O.W'],
        options: ['WOW', 'BOOM', 'BAAM', 'WOAH'],
      },
      {
        number: 5,
        category: 'Décalcomanie (3)',
        question: 'AleXa, The Boyz, CNBlue, Se7en',
        correctAnswers: ['Tattoo'],
        options: ['Villain', 'Thrill Ride', 'Tattoo', 'Can’t Stop'],
      },
      {
        number: 6,
        category: 'Décalcomanie (3)',
        question: '1THE9, Monsta X, Sohee, miss A, VAV, Pristin V, U-Know',
        correctAnswers: ['Spotlight'],
        options: ['Hush', 'Get It', 'Bad Guy', 'Spotlight'],
      },
      {
        number: 7,
        category: 'Décalcomanie (3)',
        question:
          'Victon, The Rose, Rocket Punch, Astro, Lightsum, Lay, B.I, SHINee, Kim Sungkyu',
        correctAnswers: ['Alive'],
        options: ['Circles', 'Mayday', 'Alive', 'View'],
      },
      {
        number: 8,
        category: 'Décalcomanie (3)',
        question: 'Dreamcatcher, SF9, Enhypen, 2NE1',
        correctAnswers: ['Scream'],
        options: ['Bite Me', 'Scream', 'I Hate You', 'Now or Never'],
      },
      {
        number: 9,
        category: 'Décalcomanie (3)',
        question: '2NE1, Ladies’ Code, Jungkook, 2PM, Hotshot, Woodz',
        correctAnswers: [
          'Hate You',
          'I Hate You',
          'Hate You/I Hate You',
          '(I) Hate You',
        ],
        options: [
          '(I) Hate You',
          '(I) Need You',
          '(I) Love You',
          '(I) Miss You',
        ],
      },
      {
        number: 10,
        category: 'Décalcomanie (3)',
        question: 'EXO, Boyfriend, AleXa, GD&TOP, SHINee',
        correctAnswers: ['Obsession'],
        options: ['Revolution', 'Monster', 'Obsession', 'High High'],
      },
      {
        number: 11,
        category: 'Décalcomanie (3)',
        question:
          'Dreamcatcher, fromis_9, Drippin, SHINee, Infinite H, Shinhwa',
        correctAnswers: ['Fly High'],
        options: ['Fly High', 'Black Or White', 'This Love', 'Stand By Me'],
      },
      {
        number: 12,
        category: 'Décalcomanie (3)',
        question:
          'TXT, Tzuyu (Twice), Teen Top, Pentagon, Ryujin (Itzy), Eric Nam, Got7, G-Dragon, EXO',
        correctAnswers: ['Run Away', 'Runaway', 'Run Away/Runaway'],
        options: [
          'Bad Boy/Badboy',
          'Good Night/Goodnight',
          'Deja Vu/Dejavu',
          'Run Away/Runaway',
        ],
      },
      {
        number: 13,
        category: 'Décalcomanie (3)',
        question:
          'Beast, FTIsland, Seventeen, Twice, Siyeon&Dami (Dreamcatcher), Taemin',
        correctAnswers: ['Shadow'],
        options: ['Shadow', 'Mansae', 'Mystery', 'Fancy'],
      },
      {
        number: 14,
        category: 'Décalcomanie (3)',
        question: 'Yuju, LUCY, Chung Ha & Changmo, WHIB, Ash Island',
        correctAnswers: ['Play'],
        options: ['Love Rain', 'Melody', 'Play', 'Complex'],
      },
      {
        number: 15,
        category: 'Décalcomanie (3)',
        question: 'Jeon Somi, ATEEZ, TEN, Red Velvet',
        correctAnswers: ['Birthday'],
        options: ['Mist', 'Birthday', 'XOXO', 'Ice Cream Cake'],
      },
      {
        number: 16,
        category: 'Décalcomanie (3)',
        question: 'Pink Fantasy, Secret, Got7, Uhm Jung Hwa, NCT Dream, VAV',
        correctAnswers: ['Poison'],
        options: ['Senorita', 'Festival', 'Fantasy', 'Poison'],
      },
      {
        number: 17,
        category: 'Décalcomanie (3)',
        question:
          'N.Flying, KNK, Nayeon, Soojin, Crush, POW, Twice, AB6IX, Davichi',
        correctAnswers: ['Sunset'],
        options: ['Sunset', 'Moondance', 'Rooftop', 'Oasis'],
      },
      {
        number: 18,
        category: 'Décalcomanie (3)',
        question: 'ATEEZ, Hyolyn, 8Turn, ANS, Say Yes! (Boys Planet)',
        correctAnswers: ['Say My Name'],
        options: ['Sketch', 'Say My Name', 'Wait', 'Inception'],
      },
      {
        number: 19,
        category: 'Décalcomanie (3)',
        question:
          'Purple Kiss, Girls’ Generation-TTS, Lovelyz, Stellar, ONF, ILY:1, Secret, Ha Sung Woon',
        correctAnswers: [
          'Twinkle',
          'Twinkle/Twinkle Twinkle',
          'Twinkle Twinkle',
        ],
        options: [
          'Twinkle/Twinkle Twinkle',
          'Hello/Hello Hello',
          'Really/Really Really',
          'Love/Love Love',
        ],
      },
      {
        number: 20,
        category: 'Décalcomanie (3)',
        question: 'SHINee, Waker, A.C.E',
        correctAnswers: ['Atlantis'],
        options: ['Area', 'Spirit', 'Supernatural', 'Atlantis'],
      },
      {
        number: 21,
        category: 'Décalcomanie (3)',
        question: 'iKon, Chung Ha, BTOB',
        correctAnswers: ['Killing Me'],
        options: ['Love Scenario', 'Missing You', 'Killing Me', 'Stay Tonight'],
      },
      {
        number: 22,
        category: 'Décalcomanie (3)',
        question: 'Kara, DKZ, N.Flying',
        correctAnswers: ['Lupin'],
        options: ['Moonshot', 'Lupin', 'Crazy Night', 'Step'],
      },
      {
        number: 23,
        category: 'Décalcomanie (3)',
        question:
          'Twice, Agust D, EXO-K, Suho (EXO), Henry, WayV, Pixy, NCT Dream, Got7, Infinite, Cravity, WEi, Lovelyz, NeonPunch, Youngjae (Got7)',
        correctAnswers: ['Moonlight'],
        options: ['Be Mine', 'Obliviate', 'Goodbye', 'Moonlight'],
      },
      {
        number: 24,
        category: 'Décalcomanie (3)',
        question: 'Loossemble, QWER, Gfriend',
        correctAnswers: ['Secret Diary'],
        options: ['Secret Diary', 'Sensitive', 'Glass Bead', 'Discord'],
      },
      {
        number: 25,
        category: 'Décalcomanie (3)',
        question:
          '(G)I-DLE, Brown Eyed Girls, YooA (Oh My Girl), Baekho (Nu’est)',
        correctAnswers: ['Abracadabra'],
        options: ['Dramarama', 'Abracadabra', 'Hwaa', 'Hocus Pocus'],
      },
      {
        number: 26,
        category: 'Décalcomanie (3)',
        question: '(G)I-DLE, BOL4, Twice, Astro, Gain, AB6IX, OnlyOneOf',
        correctAnswers: ['Bloom'],
        options: ['Travel', 'Apple', 'Bloom', 'Mirage'],
      },
      {
        number: 27,
        category: 'Décalcomanie (3)',
        question: 'Everglow, (G)I-DLE, BTS, Jonghyun, Woosung (The Rose), AKMU',
        correctAnswers: ['Moon'],
        options: ['Moon', 'First', 'Fire', 'Crazy'],
      },
      {
        number: 28,
        category: 'Décalcomanie (3)',
        question: 'Bigbang, Spica, BlackSwan, Tahiti, Jin (BTS), CNBlue',
        correctAnswers: ['Tonight'],
        options: ['Intuition', 'Over & Over', 'Last Dance', 'Tonight'],
      },
      {
        number: 29,
        category: 'Décalcomanie (3)',
        question: 'Chuu (LOONA), AOA, EXO, Purple Kiss, SHINee, Verivery',
        correctAnswers: ['Heart Attack'],
        options: ['Black Pearl', 'Like A Cat', 'Heart Attack', 'Get Away'],
      },
      {
        number: 30,
        category: 'Décalcomanie (3)',
        question:
          'BTOB, Hyolyn & Changmo, N.Flying, JAY (iKON), Kyungri (9Muses), Monsta X',
        correctAnswers: ['Blue Moon'],
        options: ['Blue Moon', 'Red Moon', 'Red Sun', 'Blue Sun'],
      },
      {
        number: 31,
        category: 'Décalcomanie (3)',
        question:
          'Hyunjin (Stray Kids), Monsta X, BTOB, EXO-CBX, Bang Yedam, Tiny G, Lee Changsub (BTOB), Eric Nam',
        correctAnswers: ['Miss You'],
        options: ['Beautiful Pain', 'Honestly', 'Miss You', 'By Your Side'],
      },
      {
        number: 32,
        category: 'Décalcomanie (3)',
        question:
          'Twice, ATEEZ, Kep1er, Highlight, Super Junior, Oh My Girl, Red Velvet',
        correctAnswers: ['Celebrate'],
        options: ['Shooting Star', 'In My Dreams', 'Daydream', 'Celebrate'],
      },
      {
        number: 33,
        category: 'Décalcomanie (3)',
        question:
          'Fifty Fifty, BTOB, A.C.E, Got7, CSR, Ailee, 2PM, MIRAE, Rolling Quartz',
        correctAnswers: ['Higher'],
        options: ['Shining Bright', 'Higher', 'Anymore', 'Marvelous'],
      },
      {
        number: 34,
        category: 'Décalcomanie (3)',
        question: 'Sistar, Jimin (BTS), Highlight, B.I, BTOB 4U, Crush',
        correctAnswers: ['Alone'],
        options: ['Alone', 'Fall', 'Tasty', 'I Swear'],
      },
      {
        number: 35,
        category: 'Décalcomanie (3)',
        question:
          '4minute, Teen Top, LE SSERAFIM, Son Dambi, Jonghyun, Wonho, April',
        correctAnswers: ['Crazy'],
        options: ['Rocking', 'Crazy', 'Easy', 'Lose'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 7,
    title: 'Décalcomanie (4)',
    questionCount: 35,
    description:
      'Provided a list of groups/artists, guess the song title they have in common.',
    extraDescription:
      'Note: There is a bit of lee-way with the spelling in some instances, i.e "Diamond" and "Diamonds" or "Love You" and "LoveYou" would be grouped together. Both spellings would be accepted when typing the answer directly in these cases.',
    questions: [
      {
        number: 1,
        category: 'Décalcomanie (4)',
        question: 'BTS, fromis_9, EXO, CLC, NCT 127, After School, Astro',
        correctAnswers: ['First Love'],
        options: [
          'First Love',
          'Second Confession',
          'Three Times A Day',
          'Four Seasons',
        ],
      },
      {
        number: 2,
        category: 'Décalcomanie (4)',
        question: 'E’LAST, Tempest, TEN, BoA, f(x), Cravity, 2PM',
        correctAnswers: ['Dangerous'],
        options: ['Lighthouse', 'No.1', 'Dangerous', 'Heartbeat'],
      },
      {
        number: 3,
        category: 'Décalcomanie (4)',
        question:
          'SuperM, Jimin & Ha Sung Woon, The Rose, ATEEZ, Winter (Aespa), Wonho, EXO, Red Velvet, B.A.P, Young K (Day6)',
        correctAnswers: [
          'With You',
          'With U',
          'With You/With U',
          'With U/With You',
          'With You/U',
          'With U/With You',
        ],
        options: ['Love You/U', 'With You/U', 'Thank You/U', 'Want You/U'],
      },
      {
        number: 4,
        category: 'Décalcomanie (4)',
        question:
          'EXO, Onewe, Fifty Fifty, Jongho (Ateez), OnlyOneOf, SHINee, Oh My Girl, Taeyeon, Ong Seongwu',
        correctAnswers: ['Gravity'],
        options: ['Aurora', 'Universe', 'Timeless', 'Gravity'],
      },
      {
        number: 5,
        category: 'Décalcomanie (4)',
        question: 'Brave Girls, ATEEZ, U-Know, Got7, Golden Child',
        correctAnswers: [
          'Thank You',
          'Thank U',
          'Thank You/Thank U',
          'Thank U/Thank You',
          'Thank You/U',
          'Thank U/You',
        ],
        options: ['Thank You/U', 'No Thanks', 'Love You/U', 'Hate You/U'],
      },
      {
        number: 6,
        category: 'Décalcomanie (4)',
        question:
          'Zerobaseone, Dreamcatcher, Enhypen, Onew, Super Junior, Bigbang, Apink, Wanna One, Xodiac, VAV',
        correctAnswers: ['Always'],
        options: ['Some', 'Never', 'Always', 'Forever'],
      },
      {
        number: 7,
        category: 'Décalcomanie (4)',
        question:
          'Got7, Gaho, Epik High, Cravity, Tzuyu, Momoland, BAE173, BVNDIT, Kang Daniel, Cross Gene',
        correctAnswers: ['Fly'],
        options: ['Dreaming', 'Home', 'Crimson', 'Fly'],
      },
      {
        number: 8,
        category: 'Décalcomanie (4)',
        question: 'Katseye, ATEEZ, TRENDZ, She’z, CL, Yuqi, BTOB',
        correctAnswers: ['My Way'],
        options: ['My Way', 'Rebirth', 'Touch', 'Spicy'],
      },
      {
        number: 9,
        category: 'Décalcomanie (4)',
        question: 'BTS, Vixx, Itzy, SHINee',
        correctAnswers: ['Dynamite'],
        options: ['Error', 'On', 'Wannabe', 'Dynamite'],
      },
      {
        number: 10,
        category: 'Décalcomanie (4)',
        question: 'Stray Kids, Big Ocean, Trendz, 1THE9, Gfriend',
        correctAnswers: ['Glow'],
        options: ['Mountains', 'Glow', 'Nightmare', 'Blow'],
      },
      {
        number: 11,
        category: 'Décalcomanie (4)',
        question: 'TVXQ, WJSN, UP10TION, BTOB, Apink, Baby V.O.X',
        correctAnswers: ['Catch Me', 'Catch Me!'],
        options: ['Get Up', 'Rising Sun', 'Dilemma', 'Catch Me'],
      },
      {
        number: 12,
        category: 'Décalcomanie (4)',
        question:
          'BTOB, 2NE1, Twice, G-Dragon, Lee Hi, K.Will, Kim Wooseok, FTIsland, Teen Top, 2PM, Baby V.O.X',
        correctAnswers: [
          'Missing You',
          'Missing U',
          'Missing You/Missing U',
          'Missing You/U',
          'Missing U/You',
          'Missing U/Missing You',
        ],
        options: [
          'Loving You/U',
          'Missing You/U',
          'Wanting You/U',
          'Kissing You/U',
        ],
      },
      {
        number: 13,
        category: 'Décalcomanie (4)',
        question:
          'FTIsland, B.A.P (Yongguk & Zelo), SunnyHill, BTOB, Infinite, Got7, Younha',
        correctAnswers: ['Pray'],
        options: ['Serious', 'Bad', 'Pray', 'Power'],
      },
      {
        number: 14,
        category: 'Décalcomanie (4)',
        question: 'Vixx, Pink Fantasy, JBJ, Fei (miss A), Hoody, AOA',
        correctAnswers: ['Fantasy'],
        options: ['Every Day', 'Fantasy', 'Eternity', 'Excuse Me'],
      },
      {
        number: 15,
        category: 'Décalcomanie (4)',
        question:
          'NCT Wish, Yoon Sanha (Astro), Day6, DreamNote, BTS, Gfriend, Younha, Drippin',
        correctAnswers: ['Wish'],
        options: ['Happy', 'Lemonade', 'Island', 'Wish'],
      },
      {
        number: 16,
        category: 'Décalcomanie (4)',
        question: 'X1, Rocket Punch, Kang Daniel',
        correctAnswers: ['Flash'],
        options: ['Moment', 'Flash', 'Ride', 'Move'],
      },
      {
        number: 17,
        category: 'Décalcomanie (4)',
        question: 'Taeyeon, BTOB, Stray Kids, Jay Park, Hwasa',
        correctAnswers: ['Why', 'Why?', 'Why ?'],
        options: ['Why', 'Chill', 'I', 'Na'],
      },
      {
        number: 18,
        category: 'Décalcomanie (4)',
        question: 'miss A, IMFACT, Girls’ Generation-TTS, 24K, Twice',
        correctAnswers: [
          'Only You',
          'Only U',
          'Only You/Only U',
          'Only U/Only You',
          'Only You/U',
          'Only U/Only You',
        ],
        options: ['Only You/U', 'Only One', 'One and Only', 'Only'],
      },
      {
        number: 19,
        category: 'Décalcomanie (4)',
        question:
          'Infinite, Mamamoo, Lovelyz, The KingDom, IZ*ONE, UP10TION, SS501, BoA, TVXQ, Girls’ Generation, Seungmin (Stray Kids)',
        correctAnswers: ['Destiny'],
        options: ['Fate', 'Infinity', 'Destiny', 'Eternity'],
      },
      {
        number: 20,
        category: 'Décalcomanie (4)',
        question:
          'KARD, G-Dragon, NCT U, CIX, Seventeen, Golden Child, 1TYM, BE’O & Ash Island, Chanyeol (EXO)',
        correctAnswers: ['Without You'],
        options: ['Make A Wish', 'You In Me', 'Burn It', 'Without You'],
      },
      {
        number: 21,
        category: 'Décalcomanie (4)',
        question: 'P1Harmony, BTS, 2PM, Kim Sungkyu, BTOB, PSY',
        correctAnswers: ['Jump', 'Jump!'],
        options: ['Make It', 'Jump', 'Gentleman', 'Back Down'],
      },
      {
        number: 22,
        category: 'Décalcomanie (4)',
        question: 'Mamamoo, Soyou, Dreamcatcher, Hyolyn, Vromance, Lee Mujin',
        correctAnswers: ['Lupin'],
        options: ['I Miss You', 'Our Tears', 'Once More', 'Full of You'],
      },
      {
        number: 23,
        category: 'Décalcomanie (4)',
        question: 'Bigbang, god, CNBlue, IMFACT, T-ARA, Jimin (BTS), FTIsland',
        correctAnswers: [
          'Lie',
          'Lies',
          'Lie/Lies',
          'Lies/Lie',
          'Lie/s',
          'Lie(s)',
        ],
        options: ['Truth(s)', 'If You', 'Lie(s)', 'Day By Day'],
      },
      {
        number: 24,
        category: 'Décalcomanie (4)',
        question: 'Enhypen, EXO, Jeon Somi, Evnne',
        correctAnswers: ['XO', 'XOXO', 'XO/XOXO', 'XOXO/XO'],
        options: ['Trouble', 'Overdose', 'Dumb/Dumb Dumb', 'XO/XOXO'],
      },
      {
        number: 25,
        category: 'Décalcomanie (4)',
        question:
          'Jisoo, Gfriend, Seventeen, iKON, Infinite, Chen (EXO), IU, XIA Junsu',
        correctAnswers: ['Flower'],
        options: ['Lilac', 'Daisy', 'Flower', 'Magnolia'],
      },
      {
        number: 26,
        category: 'Décalcomanie (4)',
        question: 'Aespa, TXT, IU',
        correctAnswers: ['Drama'],
        options: ['Good Day', 'Drama', 'Mine', 'Dreamer'],
      },
      {
        number: 27,
        category: 'Décalcomanie (4)',
        question: 'CNBlue, Beast, Ailee, VAV, Teen Top, Jonghyun, Nu’est, 2PM',
        correctAnswers: ['I’m Sorry', "I'm Sorry"],
        options: ['I’m Sorry', 'Nobody Else', 'On Rainy Days', 'Sleep Talking'],
      },
      {
        number: 28,
        category: 'Décalcomanie (4)',
        question: 'Xikers, Boyfriend, Hyoyeon, TRI.BE, Lee Young Ji',
        correctAnswers: ['Witch'],
        options: ['Deep', 'Obsession', 'Witch', 'Bittersweet'],
      },
      {
        number: 29,
        category: 'Décalcomanie (4)',
        question: 'Wooah, NMIXX, DKB, Chung Ha, 24K+',
        correctAnswers: ['Rollercoaster', 'Roller Coaster'],
        options: ['Bicycle', 'Tank', 'All In', 'Rollercoaster'],
      },
      {
        number: 30,
        category: 'Décalcomanie (4)',
        question:
          'Stray Kids, iKON, IZ*ONE, Dreamcatcher, Oneus, f(x), Omega X',
        correctAnswers: ['Airplane'],
        options: ['Erase Me', 'Airplane', 'Apology', 'Domino'],
      },
      {
        number: 31,
        category: 'Décalcomanie (4)',
        question: 'Trouble Maker, FIN.K.L, Oneus, Nowadays',
        correctAnswers: ['Now'],
        options: ['Now', 'Ruby', 'Ticket', 'Time'],
      },
      {
        number: 32,
        category: 'Décalcomanie (4)',
        question: 'ATEEZ, Dreamcatcher, BTS, Pentagon, NCT 127, Crush',
        correctAnswers: ['Wake Up'],
        options: ['Dope', 'Cyberpunk', 'Gorilla', 'Wake Up'],
      },
      {
        number: 33,
        category: 'Décalcomanie (4)',
        question:
          'Rainbow, SHINee, Nu’est, Joy (Red Velvet), B.I.G, Purple Kiss',
        correctAnswers: ['Hello'],
        options: ['Encore', 'Hello', 'A', 'If Only'],
      },
      {
        number: 34,
        category: 'Décalcomanie (4)',
        question:
          'ATEEZ, Henry, Jeong Sewoon, Super Junior, Colde, Yang Yoseob (Highlight), Gfriend',
        correctAnswers: ['It’s You', "It's You", 'It`s you'],
        options: ["It's You", 'Sorry Sorry', 'Trap', 'Caffeine'],
      },
      {
        number: 35,
        category: 'Décalcomanie (4)',
        question: 'Dreamcatcher, DIA, Chen (EXO), Eden, Kep1er, D.O.',
        correctAnswers: ['Good Night', 'Goodnight'],
        options: ['Popcorn', 'Somehow', 'Good Night', 'Galileo'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 8,
    title: 'Décalcomanie (5)',
    questionCount: 35,
    description:
      'Provided a list of groups/artists, guess the song title they have in common.',
    extraDescription:
      'Note: There is a bit of lee-way with the spelling in some instances, i.e "Diamond" and "Diamonds" or "Love You" and "LoveYou" would be grouped together. Both spellings would be accepted when typing the answer directly in these cases.',
    questions: [
      {
        number: 1,
        category: 'Décalcomanie (5)',
        question: 'ATEEZ, Onewe, Jonghyun, Cignature, Mino',
        correctAnswers: ['Aurora'],
        options: ['Treasure', 'Melody', 'Aurora', 'End of Spring'],
      },
      {
        number: 2,
        category: 'Décalcomanie (5)',
        question: 'AB6IX, Lee Hi, ZE:A, miss A, G-Dragon',
        correctAnswers: ['Breathe'],
        options: ['Rose', 'Breathe', 'Hush', 'Aftereffect'],
      },
      {
        number: 3,
        category: 'Décalcomanie (5)',
        question:
          'IU, BTOB, U-KISS, Gfriend, Jessica, AMPERS&ONE, Super Junior',
        correctAnswers: ['Someday'],
        options: ['Thriller', 'Neverland', 'Celebrity', 'Someday'],
      },
      {
        number: 4,
        category: 'Décalcomanie (5)',
        question:
          'ATEEZ, Everglow, Lee Honggi & Jung Yonghwa, Jimin (BTS), Twice, 2PM, Girls’ Generation, EXO, The KingDom',
        correctAnswers: ['Promise'],
        options: ['Promise', 'Desire', 'Untouchable', 'Dystopia'],
      },
      {
        number: 5,
        category: 'Décalcomanie (5)',
        question: 'EXO, Bigbang, Seventeen, Irene & Seulgi, N.Flying',
        correctAnswers: ['Monster'],
        options: ['Thunder', 'Super', 'Monster', 'Water'],
      },
      {
        number: 6,
        category: 'Décalcomanie (5)',
        question:
          'Stray Kids, SHINee, The Rose, Stellar, Zerobaseone, Yukika, Pixy, Young K (Day 6), Lee Junho (2PM), JJCC',
        correctAnswers: ['Insomnia'],
        options: ['Phobia', 'Insomnia', 'Amnesia', 'Euphoria'],
      },
      {
        number: 7,
        category: 'Décalcomanie (5)',
        question:
          'WJSN, Taeyeon, Seohyun & Yuri, Monsta X, IU, Mirae, 9Muses, Apink, Gain, 24+',
        correctAnswers: ['Secret'],
        options: ['Secret', 'Whisper', 'Dolls', 'Carnival'],
      },
      {
        number: 8,
        category: 'Décalcomanie (5)',
        question:
          'Beast, Wanna One, Crush, Monsta X, NCT 2021, Seventeen, BTS, Treasure, DKZ',
        correctAnswers: ['Beautiful'],
        options: ['Boomerang', 'Spell', 'Beautiful', 'Fiction'],
      },
      {
        number: 9,
        category: 'Décalcomanie (5)',
        question: '2PM, TAN, BTS, Suran, SF9',
        correctAnswers: ['Heartbeat'],
        options: ['Adrenaline', 'Heartbeat', 'RPM', 'My House'],
      },
      {
        number: 10,
        category: 'Décalcomanie (5)',
        question:
          'Apink, 9Muses, Chen (EXO), Winner, Wonder Girls, Drippin, Park Jihoon',
        correctAnswers: ['Remember'],
        options: ['Nobody', 'Island', 'Remember', 'Gotcha'],
      },
      {
        number: 11,
        category: 'Décalcomanie (5)',
        question: 'Twice, H.O.T, Baekhyun, NCT Dream, Seventeen, Jay Park',
        correctAnswers: ['Candy'],
        options: ['Candy', 'Bambi', 'Likey', 'Smoothie'],
      },
      {
        number: 12,
        category: 'Décalcomanie (5)',
        question: 'ATEEZ, ONF, SF9, Victon, Madtown, Sistar',
        correctAnswers: ['New World'],
        options: ['Real World', 'This World', 'My World', 'New World'],
      },
      {
        number: 13,
        category: 'Décalcomanie (5)',
        question: 'Victon, April, ATBO, Crush (ft. Joy), Got7',
        correctAnswers: ['Mayday'],
        options: ['Feeling', 'Mayday', 'Virus', 'Run'],
      },
      {
        number: 14,
        category: 'Décalcomanie (5)',
        question: 'Bigbang, Taeyeon, Ha Sung Woon, Wonho, V, Onew',
        correctAnswers: ['Blue'],
        options: ['Red Sunset', 'Blessed', 'Blue', 'White Miracle'],
      },
      {
        number: 15,
        category: 'Décalcomanie (5)',
        question:
          '2NE1, BTS, EXID, Seventeen, Taeyeon, SF9, JJCC, Kihyun (Monsta X)',
        correctAnswers: ['Fire'],
        options: ['Fire', 'Ugly', 'Enough', 'Lady'],
      },
      {
        number: 16,
        category: 'Décalcomanie (5)',
        question: 'Itzy, Moon Byul, wave to earth',
        correctAnswers: ['Gold'],
        options: ['Sneakers', 'Gold', 'Eclipse', 'seasons'],
      },
      {
        number: 17,
        category: 'Décalcomanie (5)',
        question: 'Red Velvet, History, Jun (Seventeen), Baekhyun, Jeon Soyeon',
        correctAnswers: ['Psycho'],
        options: ['Drown', 'Chill Kill', 'Queen', 'Psycho'],
      },
      {
        number: 18,
        category: 'Décalcomanie (5)',
        question: 'Wooah, Beast, Lee Hyori, Ladies’ Code, Girls’ Generation',
        correctAnswers: ['Bad Girl', 'Bad Girls', 'Bad Girl/s', 'Bad Girl(s)'],
        options: ['10 Minutes', 'Good Girl(s)', 'Bad Girl(s)', 'The Boys'],
      },
      {
        number: 19,
        category: 'Décalcomanie (5)',
        question:
          'Got7, Beast, Woodz, IU, B.I & Chuu, Dreamcatcher, Hwang Minhyun, Dawn, GWSN',
        correctAnswers: ['Lullaby'],
        options: ['Look', 'Lullaby', 'Ribbon', 'Drowning'],
      },
      {
        number: 20,
        category: 'Décalcomanie (5)',
        question: 'Kai, Lightsum, Taeyeon',
        correctAnswers: ['Vanilla'],
        options: ['Vanilla', 'Popcorn', 'Reason', 'Spark'],
      },
      {
        number: 21,
        category: 'Décalcomanie (5)',
        question: 'Day6, Kim Sejeong, SS501, The KingDom',
        correctAnswers: ['Warning', 'Warning!'],
        options: ['Shoot Me', 'Energy', 'Find', 'Warning'],
      },
      {
        number: 22,
        category: 'Décalcomanie (5)',
        question: 'ATEEZ, TRCNG, Forestella, Drippin, Victon',
        correctAnswers: ['Utopia'],
        options: ['Outlaw', 'Nostalgia', 'Utopia', 'Spectrum'],
      },
      {
        number: 23,
        category: 'Décalcomanie (5)',
        question: 'Girl’s Day, TVXQ, Nayeon (Twice), Kang Daniel',
        correctAnswers: ['Something'],
        options: ['Ghost', 'Something', 'White Day', 'ABCD'],
      },
      {
        number: 24,
        category: 'Décalcomanie (5)',
        question: 'Kang Daniel, Red Velvet, Younha, UP10TION, FTIsland',
        correctAnswers: ['Parade'],
        options: ['Parade', 'Broken', 'Cosmic', 'Runner'],
      },
      {
        number: 25,
        category: 'Décalcomanie (5)',
        question: 'BoA, OnlyOneOf, Bang Yedam, VCHA, Taeyeon, UNB',
        correctAnswers: ['Only One'],
        options: ['Savanna', 'No.1', 'Fallin’', 'Only One'],
      },
      {
        number: 26,
        category: 'Décalcomanie (5)',
        question: 'A.C.E, Verivery, CRAXY, EL7Z UP, SHINee, Suzy',
        correctAnswers: ['Undercover', 'Under Cover'],
        options: ['Masquerade', 'Lay Back', 'Undercover', 'Hideaway'],
      },
      {
        number: 27,
        category: 'Décalcomanie (5)',
        question: 'Enhypen, Lia (ITZY), Vanner, OnlyOneOf, ILY:1, B.I, WEi',
        correctAnswers: ['Blossom'],
        options: ['Blossom', 'Automatic', 'Overdrive', 'Always'],
      },
      {
        number: 28,
        category: 'Décalcomanie (5)',
        question: 'Red Velvet, SPICA, The Boyz',
        correctAnswers: ['Russian Roulette'],
        options: ['Break Away', 'Peekaboo', 'Watch It', 'Russian Roulette'],
      },
      {
        number: 29,
        category: 'Décalcomanie (5)',
        question:
          'Dreamcatcher, Loossemble, BOL4, TVXQ, Chani (SF9), NEXZ, Taeyeon & Dean, Chen (EXO), TIOT',
        correctAnswers: ['Starlight'],
        options: ['Confessions', 'Galaxy', 'Starlight', 'Here & Now'],
      },
      {
        number: 30,
        category: 'Décalcomanie (5)',
        question: 'Hyoyeon, Itzy, Golden Child, Gfriend',
        correctAnswers: ['Wannabe', 'Wanna Be'],
        options: ['Wannabe', 'Dessert', 'Swipe', 'Feel Me'],
      },
      {
        number: 31,
        category: 'Décalcomanie (5)',
        question: 'Pixy, Stella Jang, AleXa, Cheetah & Jamie, Drippin, K/DA',
        correctAnswers: ['Villain'],
        options: ['Bomb', 'Addicted', 'Colors', 'Villain'],
      },
      {
        number: 32,
        category: 'Décalcomanie (5)',
        question:
          'Blackpink, ATEEZ, Mblaq, Oneus & Onewe, Saturday, Cha Eunwoo',
        correctAnswers: ['Stay'],
        options: ['Not Too Late', 'Whistle', 'Stay', 'This Is War'],
      },
      {
        number: 33,
        category: 'Décalcomanie (5)',
        question: 'DKB, Bigbang, Suzy, Hyoyeon, N.Flying',
        correctAnswers: ['Sober'],
        options: ['Sober', '24/7', 'Pretend', 'Star'],
      },
      {
        number: 34,
        category: 'Décalcomanie (5)',
        question: 'JJ Project, Cho Yong Pil, Boyfriend, TVXQ, ATBO',
        correctAnswers: ['Bounce'],
        options: ['Hooked', 'Bounce', 'Short Hair', 'Janus'],
      },
      {
        number: 35,
        category: 'Décalcomanie (5)',
        question: 'Enhypen, SHINee, NOIR',
        correctAnswers: ['Lucifer'],
        options: ['Lucifer', 'Polaroid Love', 'Replay', 'Juliette'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 9,
    title: 'Who wears the crown',
    questionCount: 30,
    description: 'A quiz about royalty related terms in K-Pop.',
    questions: [
      {
        number: 1,
        category: 'Who wears the crown',
        question:
          'Luffy from One Piece has the ambition of becoming *this*, which is also the title of ATEEZ’s debut song, even referencing one of the character’s signature poses in their choreography. What is this song?',
        correctAnswers: ['Pirate King'],
        options: ['Ocean King', 'The King', 'Pirate King', 'Sea Prince'],
      },
      {
        number: 2,
        category: 'Who wears the crown',
        question:
          'Which TXT song’s Korean title translates to "One day horns grew on my head", while its English title is one single word?',
        correctAnswers: ['Crown'],
        options: ['King', 'Reign', 'Throne', 'Crown'],
      },
      {
        number: 3,
        category: 'Who wears the crown',
        question:
          'Which (G)I-DLE song, while being wildly popular, is also famous among fans for some of its "weird" English lyrics which include "My boob and booty is hot"?',
        correctAnswers: ['Queencard'],
        options: ['Queendom', 'Queencard', 'Lion', 'Kingdom Come'],
      },
      {
        number: 4,
        category: 'Who wears the crown',
        question:
          'Which Red Velvet song has the same title as a survival show for K-Pop groups first aired in 2019?',
        correctAnswers: ['Queendom'],
        options: ['Kingdom', 'Road To Kingdom', 'Kingdom Come', 'Queendom'],
      },
      {
        number: 5,
        category: 'Who wears the crown',
        question:
          '"Atlantis Princess", a popular song often covered by girl groups/idols, is a song by which first generation icon?',
        correctAnswers: ['BoA'],
        options: ['BoA', 'Lee Hyori', 'S.E.S', 'Uhm Jung Hwa'],
      },
      {
        number: 6,
        category: 'Who wears the crown',
        question:
          'With songs like "Excalibur" or "Long Live The King", and even a member named "Arthur", which boy group’s entire concept revolves around royalty and the Arthurian legend?',
        correctAnswers: ['The KingDom', 'Kingdom'],
        options: ['Treasure', 'The KingDom', 'ATEEZ', 'Vanner'],
      },
      {
        number: 6,
        category: 'Who wears the crown',
        question:
          'In which Enhypen song do they compare a loved person to their queen, with lyrics like "I feel like I’m trapped in your kingdom", "My irresistible queen"?',
        correctAnswers: ['Royalty'],
        options: ['Royal', 'My Queen', 'Black Crown', 'Royalty'],
      },
      {
        number: 7,
        category: 'Who wears the crown',
        question:
          'Which ATEEZ member is credited with writing, composing and arranging their song "Royal"?',
        correctAnswers: ['Mingi', 'Song Mingi', 'Mingi Song'],
        options: ['Hongjoong', 'San', 'Mingi', 'Yunho'],
      },
      {
        number: 8,
        category: 'Who wears the crown',
        question:
          'Which boy group, getting first place 3 times in a row and consistently ranking in the top spots, ended up winning the first season of Road To Kingdom?',
        correctAnswers: ['The Boyz'],
        options: ['The Boyz', 'Oneus', 'ONF', 'Pentagon'],
      },
      {
        number: 9,
        category: 'Who wears the crown',
        question:
          'Despite not being the final winner, Oh My Girl gained a huge amount of popularity from participating in Queendom, notably after they covered which Lovelyz song on the show?',
        correctAnswers: ['Destiny'],
        options: ['Candy Jelly Love', 'Ah-Choo', 'Moonrise', 'Destiny'],
      },
      {
        number: 10,
        category: 'Who wears the crown',
        question:
          'One a popular B-Side, the other released through a survival show, Red Velvet and The Boyz share a "royal" song title. What is it?',
        correctAnswers: ['Kingdom Come'],
        options: ['Kingdom', 'Queendom', 'Kingdom Come', 'Queendom Come'],
      },
      {
        number: 11,
        category: 'Who wears the crown',
        question:
          'Which Mamamoo member sang the song "Orbit" for the OST of the drama "The King: Eternal Monarch"?',
        correctAnswers: ['Hwasa'],
        options: ['Moon Byul', 'Hwasa', 'Whee In', 'Solar'],
      },
      {
        number: 12,
        category: 'Who wears the crown',
        question:
          'In this (G)I-DLE song of the same name as the missing word, they sing "I’m a queen like a _____". Fill in the blank.',
        correctAnswers: ['Lion'],
        options: ['Liar', 'Dahlia', 'Tomboy', 'Lion'],
      },
      {
        number: 13,
        category: 'Who wears the crown',
        question:
          'Which boy group, sharing the same name as one of EXO’s first title songs, released the song "Queen" in 2016 and disbanded a year later?',
        correctAnswers: ['History'],
        options: ['Mama', 'Growl', 'History', 'Wolf'],
      },
      {
        number: 14,
        category: 'Who wears the crown',
        question:
          'In which fully English song does Twice sing "Baby I was born to rule"?',
        correctAnswers: ['Queen of Hearts'],
        options: ['Queen', 'The Feels', 'Queen of Hearts', 'Icon'],
      },
      {
        number: 15,
        category: 'Who wears the crown',
        question:
          'This group, under Starship Ent., released their 4th mini album in 2016 with the title song "Fighter". A B-Side on the same album is called "Queen". Who are they?',
        correctAnswers: ['Monsta X'],
        options: ['Cravity', 'Monsta X', 'WJSN', 'Ive'],
      },
      {
        number: 16,
        category: 'Who wears the crown',
        question:
          'In one of his most popular solo songs, which BTS member has the lyrics "I’m a king, I’m a boss" a couple times throughout the song?',
        correctAnswers: ['Agust D', 'Suga', 'Min Yoongi', 'Yoongi'],
        options: ['RM', 'Jungkook', 'Jimin', 'Agust D'],
      },
      {
        number: 17,
        category: 'Who wears the crown',
        question:
          'Following "Hush-Hush", which J-Pop group did ATEEZ collaborate with on the song "Royal"?',
        correctAnswers: ['BE:FIRST', 'BEFIRST', 'BE FIRST'],
        options: ['ARASHI', 'BE:FIRST', 'DA-ICE', 'MAZZEL'],
      },
      {
        number: 18,
        category: 'Who wears the crown',
        question:
          'Which girl group has the following lyrics in one of their B-sides from 2022: "Cause you know, I’m a royal, royal | Diamonds and gold"?',
        correctAnswers: ['IVE'],
        options: ['IVE', 'IZ*ONE', 'ITZY', 'ILY:1'],
      },
      {
        number: 19,
        category: 'Who wears the crown',
        question:
          'After participating in the first season, which boy group returned to compete in the second season of Road To Kingdom?',
        correctAnswers: ['Oneus'],
        options: ['8Turn', 'Cravity', 'Oneus', 'Younite'],
      },
      {
        number: 20,
        category: 'Who wears the crown',
        question:
          'Which Girls’ Generation song is a remake of Duffy’s song "Mercy" and also shares the same title as 70s pop group ABBA’s most famous song?',
        correctAnswers: ['Dancing Queen'],
        options: ['Queen', 'Queendom', 'Queen of Hearts', 'Dancing Queen'],
      },
      {
        number: 21,
        category: 'Who wears the crown',
        question:
          'Which boy group did famous comedian and MC, Yoo Jae Suk, collaborate with on the song "Dancing King"?',
        correctAnswers: ['EXO'],
        options: ['Seventeen', 'EXO', 'BTS', 'Super Junior'],
      },
      {
        number: 22,
        category: 'Who wears the crown',
        question:
          'Which Aespa title song has the lyrics "Born like a queen, Born like a king"?',
        correctAnswers: ['Armageddon'],
        options: ['Savage', 'Supernova', 'Armageddon', 'Black Mamba'],
      },
      {
        number: 23,
        category: 'Who wears the crown',
        question: 'Which boy group released the song "King Kong" in 2024?',
        correctAnswers: ['Treasure'],
        options: ['Stray Kids', 'NCT 127', 'ATEEZ', 'Treasure'],
      },
      {
        number: 24,
        category: 'Who wears the crown',
        question:
          'On their 3rd album, Present: You & Me Edition, GOT7’s Jinyoung and BamBam released a duet unit song. What is it called?',
        correctAnswers: ['King'],
        options: ['Palace', 'Queen', 'King', 'Crown'],
      },
      {
        number: 25,
        category: 'Who wears the crown',
        question:
          'Which Got7 song’s music video has the members dressed in prince-like outfits, dancing in a palace, and Jackson sitting on a throne, crown on his head?',
        correctAnswers: ['Not By The Moon'],
        options: [
          'Breath',
          'Last Piece',
          'You Calling My Name',
          'Not By The Moon',
        ],
      },
      {
        number: 26,
        category: 'Who wears the crown',
        question:
          'Which Dreamcatcher music video has two members "fighting" for the throne?',
        correctAnswers: ['Deja Vu'],
        options: ['Scream', 'Deja Vu', 'BOCA', 'Justice'],
      },
      {
        number: 27,
        category: 'Who wears the crown',
        question:
          'In a remixed version of this song, made for their Kingdom performance, ATEEZ Hongjoong shouts "Who wants to wear the crown, bears the crown" before the final drop. What song was it?',
        correctAnswers: ['Wonderland'],
        options: ['The Real', 'Wave', 'Wonderland', 'Answer'],
      },
      {
        number: 28,
        category: 'Who wears the crown',
        question:
          'In 2021, which girl group released a video of them singing Disney songs, dressed like the princesses from the respective movies they covered?',
        correctAnswers: ['Purple Kiss'],
        options: ['Mamamoo', 'CLC', 'NewJeans', 'Purple Kiss'],
      },
      {
        number: 29,
        category: 'Who wears the crown',
        question:
          '"The Fifth Season" is a song with a very elegant concept, with the members all dressed in princess-like fashion in the music video. Which group is it by?',
        correctAnswers: ['Oh My Girl'],
        options: ['Oh My Girl', 'WJSN', 'Lovelyz', 'Gfriend'],
      },
      {
        number: 30,
        category: 'Who wears the crown',
        question:
          'What is the name of the tripleS sub-unit that released the song "Moto Princess" in 2024?',
        correctAnswers: ['EVOLution', 'tripleS EVOLution', 'EVOL'],
        options: ['LOVElution', 'Aria', 'EVOLution', 'NXT'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 10,
    title: 'K-Pop ABCs (Group Edition)',
    questionCount: 26,
    description:
      '26 questions where each answer is a group name that starts with each letter of the alphabet, in order.',
    questions: [
      {
        number: 1,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which group was the first idol group to debut under KQ Entertainment?',
        correctAnswers: ['ATEEZ'],
        options: ['A.C.E', 'ATBO', 'ATEEZ', 'Astro'],
      },
      {
        number: 2,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'What is the name of the boy group that debuted under Zico’s label, KOZ Entertainment?',
        correctAnswers: ['BOYNEXTDOOR', 'BND'],
        options: ['BLITZERS', 'BOYNEXTDOOR', 'BAE173', 'BIGFLO'],
      },
      {
        number: 3,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which girl group released songs such as "Love So Sweet", "Q&A", or "Hands Up", before disbanding in 2024?',
        correctAnswers: ['Cherry Bullet'],
        options: ['Cherry Bullet', 'CLC', 'C-Real', 'Crayon Pop'],
      },
      {
        number: 4,
        category: 'K-Pop ABCs (Group Edition)',
        question: 'Which group is "Even of Day" a sub-unit of?',
        correctAnswers: ['Day6'],
        options: ['DKB', 'DXMON', 'Dreamcatcher', 'Day6'],
      },
      {
        number: 5,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which group debuted through the first season of the survival show "I-LAND"?',
        correctAnswers: ['Enhypen'],
        options: ['Everglow', 'Enhypen', 'Evnne', 'E’LAST'],
      },
      {
        number: 6,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which disbanded group released a 2024 version of one of their previous singles, after member Cao Lu bought partial copyrights of their songs?',
        correctAnswers: ['Fiestar'],
        options: ['F-ve Dolls', 'FAVORITE', 'Fiestar', 'FIN.K.L'],
      },
      {
        number: 7,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'What is the name of SM’s supergroup that includes members of Aespa, Red Velvet, SNSD, and soloist BoA?',
        correctAnswers: ['GOT The Beat', 'GTB'],
        options: ['GOT The Beat', 'Golden Girls', 'GIRL CRUSH', 'GLAM'],
      },
      {
        number: 8,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'NCT Dream’s 2022 song, "Candy," is a cover of a song originally released by which iconic first generation group?',
        correctAnswers: ['H.O.T', 'HOT', 'H.O.T.'],
        options: ['Honey Family', 'H.O.T', 'Halo', 'H.U.B'],
      },
      {
        number: 9,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which project girl group, formed through a survival show, was Jeon Somi a part of?',
        correctAnswers: ['I.O.I', 'IOI', 'I.O.I.'],
        options: ['IZ*ONE', 'ILY:1', 'I:Z', 'I.O.I'],
      },
      {
        number: 10,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'What is the name of the trio formed by the former members of TVXQ, after their departure from the group?',
        correctAnswers: ['JYJ'],
        options: ['JYJ', 'JBJ', 'JJCC', 'JQT'],
      },
      {
        number: 11,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which girl group includes a member who participated in JYP’s survival show "Sixteen" in 2015 but was eliminated, later had a solo debut, before finally redebuting successfully as a member of this group?',
        correctAnswers: ['Kiss Of Life', 'KIOF'],
        options: ['Kep1er', 'Katseye', 'Kiss Of Life', 'Kara'],
      },
      {
        number: 12,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which four-member band formed on the show SuperBand, ended up winning 2nd place before debuting with the single "Dear." in 2020?',
        correctAnswers: ['LUCY'],
        options: ['Lun8', 'LUCY', 'Luminous', 'LU:KUS'],
      },
      {
        number: 13,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which girl group, known for their sexy performances, had hit songs such has "Bad Girl, Good Girl" or "Hush"?',
        correctAnswers: ['miss A', 'missa'],
        options: ['Miss $', 'Mamamoo', 'Melody Day', 'miss A'],
      },
      {
        number: 14,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Following Beast, BTOB and Pentagon, which boy group debuted under CUBE Entertainment in 2023?',
        correctAnswers: ['Nowadays'],
        options: ['Nowadays', 'NEXZ', 'Nu’est', 'NewKidd'],
      },
      {
        number: 15,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which boy group got their first ever music show win in 2021, four years after their debut, with the song "Beautiful Beautiful"?',
        correctAnswers: ['ONF'],
        options: ['OnlyOneOf', 'Oneus', 'ONF', 'One Pact'],
      },
      {
        number: 16,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which virtual group debuted in 2023 and quickly gained popularity, especially in Korea, with some of their songs peaking at #1 on the charts?',
        correctAnswers: ['Plave'],
        options: ['Pentagon', 'Pickus', 'POW', 'Plave'],
      },
      {
        number: 17,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which girl band is known for having members who were previously Twitch streamers/influencers?',
        correctAnswers: ['QWER'],
        options: ['Queendom', 'QWER', 'Queenz Eye', 'QODES'],
      },
      {
        number: 18,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'After going through countless members changes and problems within the company, which girl group ended up redebuting under the name Blackswan?',
        correctAnswers: ['RaNia'],
        options: ['RAINZ', 'Rainbow', 'RaNia', 'RESCENE'],
      },
      {
        number: 19,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which boy group, who debuted in 2015 under PLEDIS, won three rookie awards in this same year and quickly became one of the biggest boy groups in Korea?',
        correctAnswers: ['Seventeen', 'SVT'],
        options: ['SF9', 'Sevenus', 'Super Junior', 'Seventeen'],
      },
      {
        number: 20,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which girl group, who debuted in 2021, is known for their debut single and B-side being produced by EXID’s LE (Elly)?',
        correctAnswers: ['TRI.BE', 'TRI BE', 'TRIBE'],
        options: ['T-ARA', 'TRI.BE', 'Tiny G', 'TINT'],
      },
      {
        number: 21,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Woodz, now a successful soloist, originally debuted in 2014 as a member of which group?',
        correctAnswers: ['UNIQ'],
        options: ['UNIZ', 'UP10TION', 'UNIQ', 'UNI.T'],
      },
      {
        number: 22,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which boy group, known as "Team 11:00" throughout the show, ended up winning the survival show "Peak Time" in 2023?',
        correctAnswers: ['Vanner'],
        options: ['Victon', 'VAV', 'Vixx', 'Vanner'],
      },
      {
        number: 23,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          '10 years after Apink, IST Entertainment debut its second girl group in 2020. Less than a year later, they released "After School", their first song to reach 100 million views on YouTube. What is the name of this group?',
        correctAnswers: ['Weeekly'],
        options: ['Weeekly', 'WJSN', 'WA$$UP', 'Weki Meki'],
      },
      {
        number: 24,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which band collaborated with legendary rock vocalist Yoon Do Hyun on their 2024 song "iNSTEAD!"?',
        correctAnswers: ['Xdinary Heroes', 'XH'],
        options: ['X1', 'Xdinary Heroes', 'XODIAC', 'xikers'],
      },
      {
        number: 25,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'Which Brand New Music boy group competed in Road To Kingdom season 2 in 2024?',
        correctAnswers: ['Younite'],
        options: ['Younique Unit', 'YDPP', 'Younite', 'Y TEEN'],
      },
      {
        number: 26,
        category: 'K-Pop ABCs (Group Edition)',
        question:
          'What is the name of the boy group formed through the survival show "Boys Planet" in 2023?',
        correctAnswers: ['Zerobaseone', 'ZB1'],
        options: ['Zerobaseone', 'ZERO:1', 'ZE:A', 'ZeroToOne'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 11,
    title: 'K-Pop ABCs (Song Edition)',
    questionCount: 26,
    description:
      '26 questions where each answer is a song title that starts with each letter of the alphabet, in order.',
    questions: [
      {
        number: 1,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'What was the name of Seventeen’s debut song, released in 2015?',
        correctAnswers: ['Adore U', 'Adore You'],
        options: ['Again & Again', 'Answer', 'Apology', 'Adore U'],
      },
      {
        number: 2,
        category: 'K-Pop ABCs (Song Edition)',
        question: 'Which ATEEZ song has the subtitle "K-HOT CHILLI PEPPERS"?',
        correctAnswers: ['Bouncy'],
        options: ['Blind', 'Birthday', 'Bouncy', 'Better'],
      },
      {
        number: 3,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'After debuting with "Superwoman", what was UNIS’ second title song, from their single album of the same name?',
        correctAnswers: ['Curious'],
        options: ['Candy Pop', 'Curious', 'Cupid', 'Cookie'],
      },
      {
        number: 4,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'What was the title of BTS’ lead single from their 2014 album "Dark & Wild"?',
        correctAnswers: ['Danger'],
        options: ['Danger', 'Dope', 'DNA', 'Dynamite'],
      },
      {
        number: 5,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Along with "Super Shy" and "Cool with You", NewJeans’ EP "Get Up" had three singles. What is the title of the third one?',
        correctAnswers: ['ETA'],
        options: ['Easy', 'ETC', 'ETA', 'Error'],
      },
      {
        number: 6,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Released in 2014, what was the title of Nu’est’s debut song?',
        correctAnswers: ['Face'],
        options: ['Flash', 'Fiction', 'Fear', 'Face'],
      },
      {
        number: 7,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Following "24 Hours" and "Full Moon", what was the title of Sunmi’s biggest single, released in 2017?',
        correctAnswers: ['Gashina'],
        options: ['Gotta Go', 'Gashina', 'Girls', 'Gogobebe'],
      },
      {
        number: 8,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'In 2017, Stray Kids released their first music video. Which song was it for?',
        correctAnswers: ['Hellevator'],
        options: ['Haven', 'Hero’s Soup', 'Hellevator', 'Hall of Fame'],
      },
      {
        number: 9,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Which Itzy song has the lyrics "They keep talkin\', I keep walkin\'?" in its chorus?',
        correctAnswers: ['Icy'],
        options: ['iD', 'In the morning', 'Imaginary Friend', 'ICY'],
      },
      {
        number: 10,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'In which song’s music video did Got7 members become miniature versions of themselves?',
        correctAnswers: ['Just Right'],
        options: ['Just Do It', 'Just Right', 'Just One Day', 'Just Tonight'],
      },
      {
        number: 11,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Along with "I Am", what was the title of the second single from IVE’s first full album?',
        correctAnswers: ['Kitsch'],
        options: ['Kitsch', 'Kick It', 'Knock', 'Karma'],
      },
      {
        number: 12,
        category: 'K-Pop ABCs (Song Edition)',
        question: 'Which Oneus song title has the meaning of "Moon" in latin?',
        correctAnswers: ['LUNA'],
        options: ['LOST', 'LETHE', 'LIT', 'LUNA'],
      },
      {
        number: 13,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Famous for the chanting in its intro, what is the name of EXO’s debut song?',
        correctAnswers: ['MAMA'],
        options: ['Miracles in December', 'Monster', 'MAMA', 'Moonlight'],
      },
      {
        number: 14,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Which Apink song, released in 2013, was their highest charting song and also the most streamed song of the year in Korea?',
        correctAnswers: ['NoNoNo'],
        options: ['Nothing', 'NoNoNo', 'Not Shy', 'Nobody Knows'],
      },
      {
        number: 15,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Either loved or hated, NMIXX’s debut song received mixed reviews for its unconventional composition and structure. What is the title of the song?',
        correctAnswers: ['O.O'],
        options: ['Odd Eye', 'Only You', 'One', 'O.O'],
      },
      {
        number: 16,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'In this dark and personal song, Kang Daniel sings about his different struggles, notably with mental health. What is the title of the song?',
        correctAnswers: ['Paranoia'],
        options: ['Parade', 'Poison', 'Paranoia', 'Pray'],
      },
      {
        number: 17,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Released in 2019, what was the title of Cherry Bullet’s debut song?',
        correctAnswers: ['Q&A', 'Q & A'],
        options: ['Question Mark', 'Quiz', 'Question', 'Q&A'],
      },
      {
        number: 18,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'This Red Velvet music video, with its colorful visuals and cute-sounding song, actually features the members trying to hurt each other in various ways. What song is it for?',
        correctAnswers: ['Russian Roulette'],
        options: ['Red Flavor', 'Russian Roulette', 'RBB', 'Rookie'],
      },
      {
        number: 19,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Which iconic SHINee song, often covered by other groups, has the lyrics "I’m so curious, yeah" in its chorus?',
        correctAnswers: [
          'Sherlock',
          'Clue + Note',
          'Sherlock (Clue + Note)',
          'Sherlock(Clue + Note)',
          'Sherlock(Clue+Note)',
        ],
        options: ['Spoiler', 'Savior', 'Sherlock', 'Sing Your Song'],
      },
      {
        number: 20,
        category: 'K-Pop ABCs (Song Edition)',
        question: 'What was the title of Hwasa’s (Mamamoo) solo debut song?',
        correctAnswers: ['Twit'],
        options: ['Twit', 'Twilight', 'Trap', 'Twenty'],
      },
      {
        number: 21,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'After a fancam went viral, EXID suddenly gained popularity 2 years after their debut with this song, reaching #1 on the charts 4 months after its release. What song was it?',
        correctAnswers: ['Up & Down', 'Up and Down', 'Up&Down'],
        options: ['UP!', 'Upside Down', 'Uh-Oh', 'Up & Down'],
      },
      {
        number: 22,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Known for their dark concept, the music video for this VIXX song is especially dark and bloody, with a sort-of black magic concept. What is the title of the song?',
        correctAnswers: ['Voodoo Doll'],
        options: ['Valentine', 'Villain', 'Voodoo Doll', 'Very Good'],
      },
      {
        number: 23,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'What was B.A.P’s debut song, released in 2012, that was also the title of their first mini album?',
        correctAnswers: ['Warrior'],
        options: ['Wake Me Up', 'Warrior', 'With You', 'What The Hell'],
      },
      {
        number: 24,
        category: 'K-Pop ABCs (Song Edition)',
        question: 'Which Enhypen song has the subtitle "Only If You Say Yes"?',
        correctAnswers: ['XO'],
        options: ['X ONE', 'XOXO', 'X', 'XO'],
      },
      {
        number: 25,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'In which song does Twice give a choice, that isn’t really a choice, after a love confession?',
        correctAnswers: ['Yes or Yes'],
        options: ['Young and Wild', 'Yes or No', 'You Get Me', 'Yes or Yes'],
      },
      {
        number: 26,
        category: 'K-Pop ABCs (Song Edition)',
        question:
          'Which song did members of NCT and Aespa collaborate on for the 2021 Winter SMTOWN album?',
        correctAnswers: ['Zoo'],
        options: ['ZigZag', 'Zimzalabim', 'Zoo', 'Zutter'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 12,
    title: 'K-Pop X NASA',
    questionCount: 25,
    description: 'A quiz about everything and anything space related in K-Pop.',
    questions: [
      {
        number: 1,
        category: 'K-Pop X NASA',
        question:
          'Which girl group is also known as "Cosmic Girls", the direct translation of their Korean name?',
        correctAnswers: ['WJSN'],
        options: ['GWSN', 'SNSD', 'WJSN', 'LOONA'],
      },
      {
        number: 2,
        category: 'K-Pop X NASA',
        question:
          'What was the title song of BOL4’s first full album, "Red Planet", released in 2016?',
        correctAnswers: ['Galaxy'],
        options: ['Galaxy', 'Wind', 'Space', 'Stars Over Me'],
      },
      {
        number: 3,
        category: 'K-Pop X NASA',
        question:
          'Which ATEEZ member has writing and composing credits on their "spacey" songs  "Aurora", "Sunrise" and "Horizon"?',
        correctAnswers: ['Hongjoong', 'Kim Hongjoong', 'Hong Joong'],
        options: ['Mingi', 'Hongjoong', 'Yeosang', 'Wooyoung'],
      },
      {
        number: 4,
        category: 'K-Pop X NASA',
        question:
          'Which planet, known as the "Red Planet", is also the title of a song by Taemin?',
        correctAnswers: ['Mars'],
        options: ['Venus', 'Jupiter', 'Saturn', 'Mars'],
      },
      {
        number: 5,
        category: 'K-Pop X NASA',
        question:
          '"Hurricane Venus" is a song by which iconic first generation soloist?',
        correctAnswers: ['BoA'],
        options: ['Lee Hyori', 'Uhm Jung Hwa', 'BoA', 'Ivy'],
      },
      {
        number: 6,
        category: 'K-Pop X NASA',
        question:
          'Which Stray Kids song has the lyrics "We can go anywhere | So hop on my spaceship", and is about being free and without fear?',
        correctAnswers: ['Astronaut'],
        options: ['Levanter', 'Astronaut', 'Hellevator', 'Mountains'],
      },
      {
        number: 7,
        category: 'K-Pop X NASA',
        question:
          'Which girl group released the album "Cosmic" along with the title song of the same name in 2024?',
        correctAnswers: ['Red Velvet'],
        options: ['Aespa', 'WJSN', 'Red Velvet', 'ILLIT'],
      },
      {
        number: 8,
        category: 'K-Pop X NASA',
        question:
          'In which song does TXT use space-related metaphors to describe their feelings of loneliness and emptiness before finding someone to love?',
        correctAnswers: ['Dear Sputnik'],
        options: [
          'Dear Sputnik',
          'Nap of a star',
          'Intro: FLOATING',
          'Free Falling',
        ],
      },
      {
        number: 9,
        category: 'K-Pop X NASA',
        question:
          'In which song does Lee Suhyun from AKMU sing about being "from a galaxy far away", and being "here to save this darn earth"?',
        correctAnswers: ['Alien'],
        options: ['Hero', 'Myself', 'Alien', 'Dinosaur'],
      },
      {
        number: 10,
        category: 'K-Pop X NASA',
        question:
          'What was the title song of MAMAMOO Moon Byul’s mini album "Dark Side of the Moon"?',
        correctAnswers: ['Eclipse'],
        options: ['Sunset', 'Red Moon', 'Starry Night', 'Eclipse'],
      },
      {
        number: 11,
        category: 'K-Pop X NASA',
        question:
          'Which group, formed through a survival show, released the song "Shooting Star" in 2024?',
        correctAnswers: ['Kep1er'],
        options: ['Wanna One', 'Zerobaseone', 'Kep1er', 'UNIS'],
      },
      {
        number: 12,
        category: 'K-Pop X NASA',
        question:
          'Which band released the "Planet Nine" album trilogy, as well as a lot of space themed songs such as "Star", "Gravity" or "Solar Halo Ring"?',
        correctAnswers: ['Onewe'],
        options: ['Xdinary Heroes', 'CNBlue', 'FTIsland', 'Onewe'],
      },
      {
        number: 13,
        category: 'K-Pop X NASA',
        question:
          'Which British band collaborated with BTS on the song "My Universe"?',
        correctAnswers: ['Coldplay'],
        options: ['Muse', 'Coldplay', 'Radiohead', 'Gorillaz'],
      },
      {
        number: 14,
        category: 'K-Pop X NASA',
        question:
          'The song "Galaxy" is a B-side on "Free Somebody", the first solo album of which SM girl group member?',
        correctAnswers: ['Luna', 'fx Luna', 'f(x) Luna'],
        options: ['Luna', 'Yoona', 'Taeyeon', 'Wendy'],
      },
      {
        number: 15,
        category: 'K-Pop X NASA',
        question: 'Which NCT sub-unit released the song "Moonwalk" in 2019?',
        correctAnswers: ['WayV'],
        options: ['NCT Dream', 'NCT Wish', 'NCT U', 'WayV'],
      },
      {
        number: 16,
        category: 'K-Pop X NASA',
        question: 'Through which survival show was the group UNIS formed?',
        correctAnswers: ['Universe Ticket'],
        options: [
          'Girls Planet 999',
          'Universe League',
          'Universe Ticket',
          'Planet B',
        ],
      },
      {
        number: 17,
        category: 'K-Pop X NASA',
        question:
          'Aespa’s 2024 hit song "Supernova" is also the title of a song by which ex-Wanna One member?',
        correctAnswers: ['Kang Daniel', 'KANGDANIEL'],
        options: ['Ong Seongwu', 'Kang Daniel', 'Park Jihoon', 'Kim Jaehwan'],
      },
      {
        number: 18,
        category: 'K-Pop X NASA',
        question:
          'Following "24 Hours", what was the same of Sunmi’s second single, released in 2014?',
        correctAnswers: ['Full Moon'],
        options: ['Blue Moon', 'Half Moon', 'Red Moon', 'Full Moon'],
      },
      {
        number: 19,
        category: 'K-Pop X NASA',
        question:
          'What is the name of the song EXO released in 2015 for their collaboration with Star Wars, as a promotional song for the movie "Star Wars: The Force Awakens"?',
        correctAnswers: ['Lightsaber'],
        options: ['Cosmic Railway', 'Gravity', 'Lightsaber', 'Universe'],
      },
      {
        number: 20,
        category: 'K-Pop X NASA',
        question:
          'For which girl group was it "Time For The Moon Night" in 2018?',
        correctAnswers: ['Gfriend'],
        options: ['Gfriend', 'Mamamoo', 'WJSN', 'Oh My Girl'],
      },
      {
        number: 21,
        category: 'K-Pop X NASA',
        question:
          'Which Mamamoo Latin-inspired song, released in 2018, was their first song to surpass 100 million streams in Korea?',
        correctAnswers: ['Starry Night'],
        options: [
          'Star Wind Flower Sun',
          'Universe',
          'Starry Night',
          'My Star',
        ],
      },
      {
        number: 22,
        category: 'K-Pop X NASA',
        question:
          'Which girl group released the fully english song "Moonlight Sunrise" in 2023?',
        correctAnswers: ['Twice'],
        options: ['Itzy', 'LE SSERAFIM', 'Kiss of Life', 'Twice'],
      },
      {
        number: 23,
        category: 'K-Pop X NASA',
        question:
          'Which soloist takes "One scoop" of "A big strawberry moon" in her song "Strawberry Moon"?',
        correctAnswers: ['IU'],
        options: ['Chung Ha', 'IU', 'Heize', 'Lee Hi'],
      },
      {
        number: 24,
        category: 'K-Pop X NASA',
        question:
          'Which ex-YG group member, now soloist, released the mini album "Cosmos" with the title song of the same name in 2021?',
        correctAnswers: ['B.I', 'BI'],
        options: ['B.I', 'Nam Taehyun', 'Bobby', 'TOP'],
      },
      {
        number: 25,
        category: 'K-Pop X NASA',
        question:
          'This planet, reclassified as a dwarf planet in 2006, is also the title of a song by Xdinary Heroes released in their album "Livelock". What is it?',
        correctAnswers: ['Pluto'],
        options: ['Neptune', 'Mars', 'Pluto', 'Saturn'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 13,
    title: 'K-Pop Math',
    questionCount: 15,
    description: 'Provided clues about the numbers, solve the equations.',
    questions: [
      {
        number: 1,
        category: 'K-Pop Math',
        question:
          'The number of members in Seventeen + (plus) The number of members in 4minute.',
        correctAnswers: ['18', 'Eighteen'],
        options: ['21', '17', '22', '18'],
      },
      {
        number: 2,
        category: 'K-Pop Math',
        question:
          'The time it is in Taeyeon’s song of the same name + (plus) The number of minutes Lee Hyori wants to make a man "become hers". (Format: 00:00)',
        correctAnswers: ['11:21'],
        options: ['11:11', '11:21', '11:31', '11:41'],
      },
      {
        number: 3,
        category: 'K-Pop Math',
        question:
          'In ATEEZ’s song "Crazy Form", add the three numbers mentioned before they "kick that drum".',
        correctAnswers: ['96'],
        options: ['76', '86', '96', '106'],
      },
      {
        number: 4,
        category: 'K-Pop Math',
        question:
          'The number Stray Kids caught a "Case" of - (minus) The amount of michelin stars Felix has when "cooking like a chef".',
        correctAnswers: ['138'],
        options: ['138', '137', '136', '135'],
      },
      {
        number: 5,
        category: 'K-Pop Math',
        question:
          'The number of walls representing love according to f(x) * (times) The number IVE feels like in their song of the same name.',
        correctAnswers: ['44'],
        options: ['22', '33', '44', '55'],
      },
      {
        number: 6,
        category: 'K-Pop Math',
        question:
          'The error code making Taeyong’s "file not found" - (minus) The number of percent that "must be love" according to AKMU.',
        correctAnswers: ['204'],
        options: ['203', '304', '305', '204'],
      },
      {
        number: 7,
        category: 'K-Pop Math',
        question:
          'The frequency at which BTS’ lonely "whalien" sings + (plus) The number of leaves Itzy’s lucky clover has in their song "Five".',
        correctAnswers: ['56'],
        options: ['46', '56', '47', '57'],
      },
      {
        number: 8,
        category: 'K-Pop Math',
        question:
          'Younha’s Password meaning "I love you" - (minus) T-ARA’s number from their song of the same name.',
        correctAnswers: ['477'],
        options: ['485', '134', '477', '147'],
      },
      {
        number: 9,
        category: 'K-Pop Math',
        question:
          'The number of members in the group tripleS - (minus) The number of hours that are "not enough" according to Sunmi.',
        correctAnswers: ['0', 'Zero'],
        options: ['0', '6', '12', '18'],
      },
      {
        number: 10,
        category: 'K-Pop Math',
        question:
          'The time Beast compares to two people standing apart like the hands of a clock - (minus) The time at which Chung Ha’s "Gotta Go". (Format: 00:00)',
        correctAnswers: ['00:30'],
        options: ['00:00', '06:30', '00:30', '06:00'],
      },
      {
        number: 11,
        category: 'K-Pop Math',
        question:
          'The number of Riize’s "emergency love" + (plus) The speed at which SuperM goes in their song of the same name.',
        correctAnswers: ['219'],
        options: ['217', '127', '129', '219'],
      },
      {
        number: 12,
        category: 'K-Pop Math',
        question:
          'The age Boynextdoor describes as being painful/tough times * (times) The age at which they wonder if they will be smiling by then. (Both from the same song)',
        correctAnswers: ['600'],
        options: ['450', '540', '600', '620'],
      },
      {
        number: 13,
        category: 'K-Pop Math',
        question:
          'IU’s age in her song of the same name + (plus) The age at which she "got to know herself a bit more" in her song "Palette".',
        correctAnswers: ['48'],
        options: ['42', '44', '46', '48'],
      },
      {
        number: 14,
        category: 'K-Pop Math',
        question:
          'ATEEZ’s "Star" - (minus) Enhypen’s "Highway". (Both numbers representing the date at which their fandom names were decided)',
        correctAnswers: ['108'],
        options: ['15', '108', '87', '117'],
      },
      {
        number: 15,
        category: 'K-Pop Math',
        question:
          'The number Triple H are "so fresh" for + (plus) The number of reasons Seulgi has to run away.',
        correctAnswers: ['393'],
        options: ['393', '328', '289', '156'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 14,
    title: 'Same but Different',
    questionCount: 35,
    description:
      'Given part of different song titles, guess the same missing word.',
    questions: [
      {
        number: 1,
        category: 'Same but Different',
        question:
          'Love ____ (EXO). Kill ____ (ITZY). One ____ (B.A.P). Take A ____ (Hotshot).',
        correctAnswers: ['Shot'],
        options: ['Song', 'Candy', 'Walk', 'Shot'],
      },
      {
        number: 2,
        category: 'Same but Different',
        question:
          '_____ to Love (Seventeen).  I’m _____ (Chung Ha).  _____ or Not (Cravity).  _____ for Love (Blackpink).',
        correctAnswers: ['Ready'],
        options: ['Done', 'Right', 'Ready', 'In'],
      },
      {
        number: 3,
        category: 'Same but Different',
        question:
          '_____ Moon (WJSN). _____ Power (LUN8).  _____ Cool (CLASS:Y).  _____ Board (Stray Kids).',
        correctAnswers: ['Super'],
        options: ['Hyper', 'Super', 'Ultra', 'Maxi'],
      },
      {
        number: 4,
        category: 'Same but Different',
        question:
          '_____ Rush (Chuu). _____ Soda (Loossemble).  _____ Moon (Twice).  _____ Cake (Xdinary Heroes).',
        correctAnswers: ['Strawberry'],
        options: ['Strawberry', 'Blackberry', 'Raspberry', 'Blueberry'],
      },
      {
        number: 5,
        category: 'Same but Different',
        question:
          'Take Me _____ (ATEEZ). Way Back _____ (Shaun).  _____ Alone (NCT 127). Anywhere But _____ (Seulgi).',
        correctAnswers: ['Home'],
        options: ['There', 'Home', 'Here', 'Nowhere'],
      },
      {
        number: 6,
        category: 'Same but Different',
        question:
          '_____ Bear (V), _____ Falls (Stray Kids), _____ Heat (EXO), _____ Bloom (CLASS:y).',
        correctAnswers: ['Winter'],
        options: ['Snow', 'Water', 'Winter', 'Ice'],
      },
      {
        number: 7,
        category: 'Same but Different',
        question:
          '_____ Call (P1Harmony), _____ DANCE (Bigbang), _____ Day (BTOB), _____ Sequence (WJSN).',
        correctAnswers: ['Last'],
        options: ['Love', 'First', 'One', 'Last'],
      },
      {
        number: 8,
        category: 'Same but Different',
        question:
          'Hear The _____ (Red Velvet), See _____ (Hyolyn), My _____ (IU), The Unknown _____ (Taemin).',
        correctAnswers: ['Sea'],
        options: ['Ocean', 'Silence', 'Alarm', 'Sea'],
      },
      {
        number: 9,
        category: 'Same but Different',
        question:
          '_____ Garden (Apink), _____ Diary (Gfriend), _____ Time (SPICA), _____ World (Kara)',
        correctAnswers: ['Secret'],
        options: ['Secret', 'Love', 'Unknown', 'Beautiful'],
      },
      {
        number: 10,
        category: 'Same but Different',
        question:
          'Can You _____ (Infinite), _____ Again (Winner), Make U _____ (Yena), _____ Mask (B1A4)',
        correctAnswers: ['Smile'],
        options: ['Stay', 'Smile', 'Dance', 'Sing'],
      },
      {
        number: 11,
        category: 'Same but Different',
        question:
          'Autumn _____ (N.Flying), Lucid _____ (Aespa), _____ Girl (SHINee), No More _____ (BTS)',
        correctAnswers: ['Dream'],
        options: ['Night', 'Love', 'Wind', 'Dream'],
      },
      {
        number: 12,
        category: 'Same but Different',
        question:
          'Like _____ (Wendy), _____ color (Whee In), _____ Flower (Gfriend), Muddy _____ (Stray Kids)',
        correctAnswers: ['Water'],
        options: ['Snow', 'Wind', 'Water', 'Life'],
      },
      {
        number: 13,
        category: 'Same but Different',
        question:
          'Dear My _____ (CLC), Girl _____ (Teen Top), BEST _____ (iKON), _____ ZONE (AB6IX)',
        correctAnswers: ['Friend'],
        options: ['Love', 'Friend', 'Girl', 'Boy'],
      },
      {
        number: 14,
        category: 'Same but Different',
        question:
          'Party _____ (Teen Top), Stay _____ (Chung Ha), Wonderful _____ (B1A4), Beautiful _____ (Jonghyun)',
        correctAnswers: ['Tonight'],
        options: ['Tonight', 'Night', 'Day', 'Today'],
      },
      {
        number: 15,
        category: 'Same but Different',
        question:
          '_____ Talk (tripleS), _____ Pop (AOA), _____ Blossom (Cravity) _____ Kisses (Chung Ha)',
        correctAnswers: ['Cherry'],
        options: ['Candy', 'Flower', 'Cherry', 'Sweet'],
      },
      {
        number: 16,
        category: 'Same but Different',
        question:
          'Blue _____ (TXT), End of _____ (Onewe), _____ Day (BTS), _____ Fever (Mamamoo)',
        correctAnswers: ['Spring'],
        options: ['Times', 'Summer', 'Hour', 'Spring'],
      },
      {
        number: 17,
        category: 'Same but Different',
        question:
          'Love _____ (Lovelyz), Jungle _____ (SF9), In The _____ (Kara), Our _____ (TVXQ)',
        correctAnswers: ['Game'],
        options: ['Morning', 'Game', 'Night', 'End'],
      },
      {
        number: 18,
        category: 'Same but Different',
        question:
          '_____ Prince (SS501), Spring _____ (The Boyz), _____ Flower (Taemin), The First _____ (EXO)',
        correctAnswers: ['Snow'],
        options: ['Time', 'Sun', 'Day', 'Snow'],
      },
      {
        number: 19,
        category: 'Same but Different',
        question:
          'Like a _____ (iKON), Moon _____ (Moon Byul), Road _____ (ZB1), _____ Star (CIX)',
        correctAnswers: ['Movie'],
        options: ['Pop', 'Light', 'Movie', 'Trip'],
      },
      {
        number: 20,
        category: 'Same but Different',
        question:
          'Endless _____ (B.I), _____ Comes (Oh My Girl), Blue _____ (ATEEZ), Hot _____ (f(x))',
        correctAnswers: ['Summer'],
        options: ['Hour', 'Summer', 'Ocean', 'Night'],
      },
      {
        number: 21,
        category: 'Same but Different',
        question:
          '_____ With Me (IVE), _____ Forever (Monsta X), _____ Together (SF9), Time to _____ (H1-KEY)',
        correctAnswers: ['Shine'],
        options: ['Sing', 'Dance', 'Move', 'Shine'],
      },
      {
        number: 22,
        category: 'Same but Different',
        question:
          '_____ a Flame (Seventeen), Dazzling _____ (ATEEZ), _____ My Fire ((G)I-DLE), Be the _____ (Block B)',
        correctAnswers: ['Light'],
        options: ['Light', 'Shine', 'Sun', 'Heat'],
      },
      {
        number: 23,
        category: 'Same but Different',
        question:
          '_____ of Love (ATEEZ), _____ of Our Life (Day6), _____ To Love (Red Velvet), _____ of Sorrow (Victon)',
        correctAnswers: ['Time'],
        options: ['End', 'Time', 'Start', 'Full'],
      },
      {
        number: 24,
        category: 'Same but Different',
        question:
          '_____ Lost (Stray Kids), My _____ (Mamamoo), Pop _____ (MCND), Super _____ (G-Dragon)',
        correctAnswers: ['Star'],
        options: ['Man', 'Everything', 'All', 'Star'],
      },
      {
        number: 25,
        category: 'Same but Different',
        question:
          '_____ And Wish (BTOB), _____ Flower (Mamamoo), _____ Song (Kei), _____ Effect (ONF)',
        correctAnswers: ['Wind'],
        options: ['Love', 'Winter', 'Wind', 'Snow'],
      },
      {
        number: 26,
        category: 'Same but Different',
        question:
          'Hit The _____ (Blitzers), Boom Boom _____ (Riize), Drop The _____ (Mirae), Mr. _____ (A.C.E)',
        correctAnswers: ['Bass'],
        options: ['Bass', 'Boom', 'Beat', 'Baam'],
      },
      {
        number: 27,
        category: 'Same but Different',
        question:
          'Forever _____ (RM), _____ Sound (B.A.P), _____ To Be (Onewe), The _____ (Ladies’ Code)',
        correctAnswers: ['Rain'],
        options: ['More', 'Lost', 'Wind', 'Rain'],
      },
      {
        number: 28,
        category: 'Same but Different',
        question:
          'Still _____ (Bigbang), Quarter _____ (TXT), Beautiful _____ (TVXQ), Diamond _____ (The Boyz)',
        correctAnswers: ['Life'],
        options: ['Time', 'Life', 'Ring', 'Moon'],
      },
      {
        number: 29,
        category: 'Same but Different',
        question:
          '_____ O’Clock (NMIXX), Let’s Go _____ (2NE1), House _____ (Super Junior), Queen Of The _____ (Wendy)',
        correctAnswers: ['Party'],
        options: ['Night', 'Dance', 'Party', 'Club'],
      },
      {
        number: 30,
        category: 'Same but Different',
        question:
          'Heartbreak In _____ (Tzuyu), In _____ (JYJ), Like _____ (Kwon Eunbi), _____ For You (Chen)',
        correctAnswers: ['Heaven'],
        options: ['Eternity', 'Hell', 'Everything', 'Heaven'],
      },
      {
        number: 31,
        category: 'Same but Different',
        question:
          'Like _____ (Jimin), Going _____ (Treasure), _____ Over You (Blackpink), _____ Form (ATEEZ)',
        correctAnswers: ['Crazy'],
        options: ['Crazy', 'Insane', 'Wild', 'Mad'],
      },
      {
        number: 32,
        category: 'Same but Different',
        question:
          '_____ Stop Me ((G)I-DLE), _____ Ever (Got7), _____ Let You Go (2AM), _____ Goodbye (NCT Dream)',
        correctAnswers: ['Never'],
        options: ['Say', 'Not', 'Forever', 'Never'],
      },
      {
        number: 33,
        category: 'Same but Different',
        question:
          '_____ Mood Mode (Taeyong), _____ My Body (CIX), When I _____ (Kara), Love Is _____ (Secret)',
        correctAnswers: ['Move'],
        options: ['Dance', 'Love', 'Move', 'Touch'],
      },
      {
        number: 34,
        category: 'Same but Different',
        question:
          '_____ with you (Seventeen), Jingle Bell _____ (aespa), Party _____ (Cravity), Everybody _____ (Day6)',
        correctAnswers: ['Rock'],
        options: ['Rock', 'Go', 'Down', 'Time'],
      },
      {
        number: 35,
        category: 'Same but Different',
        question:
          'Can’t _____ (CNBlue), Don’t _____ (ATEEZ), We Don’t _____ (xikers), _____ Girl (Ukiss)',
        correctAnswers: ['Stop'],
        options: ['Go', 'Stay', 'Stop', 'Want'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 15,
    title: 'Cooking Like A Chef',
    questionCount: 30,
    description:
      'A quiz about food and drinks in K-Pop, songs or music videos.',
    questions: [
      {
        number: 1,
        category: 'Cooking Like A Chef',
        question:
          'Who sings the famous line "Cooking like a chef, I’m a 5 star Michelin" in Stray Kids’ song "God’s Menu"?',
        correctAnswers: ['Felix', 'Lee Felix', 'Yongbok'],
        options: ['Han', 'Lee Know', 'Changbin', 'Felix'],
      },
      {
        number: 2,
        category: 'Cooking Like A Chef',
        question:
          'Ice Cream Cake, Milkshake, Mojito, Iced Coffee... All of these foods/drinks are also songs, released by which group? ',
        correctAnswers: ['Red Velvet'],
        options: ['Twice', 'ITZY', 'Red Velvet', 'NCT Dream'],
      },
      {
        number: 3,
        category: 'Cooking Like A Chef',
        question:
          'In his song of the same name, Kai compares a pretty girl to which fruits?',
        correctAnswers: ['Peaches'],
        options: ['Lemons', 'Peaches', 'Cherries', 'Strawberries'],
      },
      {
        number: 4,
        category: 'Cooking Like A Chef',
        question:
          'In their song of the same name, controversial for its lyrics, what did NewJeans "bake just for you"?',
        correctAnswers: ['Cookie', 'a cookie'],
        options: ['Cookie', 'Cake', 'Brownie', 'Pie'],
      },
      {
        number: 5,
        category: 'Cooking Like A Chef',
        question: 'According to a TXT song, which drink is blue?',
        correctAnswers: ['Orangeade'],
        options: ['Lemonade', 'Orangeade', 'Champagne', 'Soda'],
      },
      {
        number: 6,
        category: 'Cooking Like A Chef',
        question: 'Which Twice japanese song has the name of a type of pastry?',
        correctAnswers: ['Doughnut'],
        options: ['Macaron', 'Croissant', 'Eclair', 'Doughnut'],
      },
      {
        number: 7,
        category: 'Cooking Like A Chef',
        question:
          'Also the title of this EXO song, what lyrics follow "I need all ya"?',
        correctAnswers: ['Cream Soda'],
        options: ['Sour Grapes', 'Honey Cake', 'Cream Soda', 'Ice Cream Cake'],
      },
      {
        number: 8,
        category: 'Cooking Like A Chef',
        question:
          'Also the title of another one of their song, what sweet food is the star of their "Boy Comics" music video?',
        correctAnswers: ['Strawberry Cake'],
        options: [
          'Ice Cream',
          'Strawberry Cake',
          'Iced Coffee',
          'Cotton Candy',
        ],
      },
      {
        number: 9,
        category: 'Cooking Like A Chef',
        question:
          'Although wildly different in meaning, ITZY and KARD both share a song title named after which food?',
        correctAnswers: ['Cake'],
        options: ['Lollipop', 'Candy', 'Peach', 'Cake'],
      },
      {
        number: 10,
        category: 'Cooking Like A Chef',
        question:
          'In 2009, Bigbang and 2NE1 collaborated on a song, made to promote a cellphone. What was its title?',
        correctAnswers: ['Lollipop'],
        options: ['Jelly', 'Chewing Gum', 'Lollipop', 'Gummy'],
      },
      {
        number: 11,
        category: 'Cooking Like A Chef',
        question:
          'Complete the lyrics from Baekhyun’s song "Candy": "Pop rocks, strawberry, ______".',
        correctAnswers: ['Bubble gum'],
        options: ['Bubble gum', 'Chewing gum', 'Gummy bear', 'Lollipop'],
      },
      {
        number: 12,
        category: 'Cooking Like A Chef',
        question: '"Bon Bon Chocolat" was the debut song of which girl group?',
        correctAnswers: ['Everglow'],
        options: ['Lovelyz', 'CLC', 'Kiss of Life', 'Everglow'],
      },
      {
        number: 13,
        category: 'Cooking Like A Chef',
        question:
          'Which Stray Kids song, with a food related title, is actually an answer to haters/people who criticized their music?',
        correctAnswers: ['Cheese'],
        options: ['JJAM', 'Cheese', 'God’s Menu', 'TASTE'],
      },
      {
        number: 14,
        category: 'Cooking Like A Chef',
        question:
          'The song "Coffee" by Urban Zakapa, also known as "Café Latte" or "Drinking Coffee", was covered and released by which famous boy group in 2013?',
        correctAnswers: ['BTS'],
        options: ['Bigbang', 'Beast', 'B.A.P', 'BTS'],
      },
      {
        number: 15,
        category: 'Cooking Like A Chef',
        question: 'Which girl group released a song titled "Macaroni Cheese"?',
        correctAnswers: ['Young Posse'],
        options: ['NewJeans', 'Blackpink', 'Young Posse', '(G)I-DLE'],
      },
      {
        number: 16,
        category: 'Cooking Like A Chef',
        question:
          'In her song of the same name, Hyoyeon (or Hyo) sings "You know what I deserve". What is it?',
        correctAnswers: ['Dessert'],
        options: ['Honey', 'Butter', 'Chocolate', 'Dessert'],
      },
      {
        number: 17,
        category: 'Cooking Like A Chef',
        question:
          'Yogurt Shake, Pretzel, Chewing Gum, Tangerine Love, Candy, Carat Cake, Hot Sauce... Which group released all of these songs?',
        correctAnswers: ['NCT Dream'],
        options: ['The Boyz', 'NCT Dream', 'TWS', 'Seventeen'],
      },
      {
        number: 18,
        category: 'Cooking Like A Chef',
        question:
          'Which girl group sub-unit released the song "Marshmallow" in 2023?',
        correctAnswers: ['MiSaMo'],
        options: ['WJSN Chocome', 'Hachi!', 'MiSaMo', 'Oh My Girl Banhana'],
      },
      {
        number: 19,
        category: 'Cooking Like A Chef',
        question:
          'Which term, also the title of the song, is T-ARA using to describe someone who "lost their sweetness"?',
        correctAnswers: ['Sugar Free', 'Sugar-Free'],
        options: ['Sugar Free', 'Alcohol Free', 'Zero Percent', 'Diet Coke'],
      },
      {
        number: 20,
        category: 'Cooking Like A Chef',
        question:
          'In which music video are the members of Orange Caramel dressed as sushi?',
        correctAnswers: ['Catallena'],
        options: ['My Copycat', 'Lipstick', 'Catallena', 'Abing abing'],
      },
      {
        number: 21,
        category: 'Cooking Like A Chef',
        question:
          'Day6, Chuu and Max Changmin all released a title song with the same name, which is also a type of food. What is it?',
        correctAnswers: ['Chocolate'],
        options: ['Vanilla', 'Chocolate', 'Caramel', 'Strawberry'],
      },
      {
        number: 22,
        category: 'Cooking Like A Chef',
        question:
          'According to the title of this NCT DoJaeJung song, what day is "Strawberry" day?',
        correctAnswers: ['Sunday'],
        options: ['Monday', 'Saturday', 'Friday', 'Sunday'],
      },
      {
        number: 23,
        category: 'Cooking Like A Chef',
        question:
          'According to j-hope, what do you get "on the side" with your Chicken Noodle Soup?',
        correctAnswers: ['Soda', 'a soda'],
        options: ['Soda', 'Kimchi', 'Salad', 'Rice'],
      },
      {
        number: 24,
        category: 'Cooking Like A Chef',
        question:
          'Which girl group compares love to "Sour Grapes" in their song of the same name?',
        correctAnswers: ['LE SSERAFIM', 'LESSERAFIM'],
        options: ['LOONA', 'BABYMONSTER', 'LE SSERAFIM', 'ILLIT'],
      },
      {
        number: 25,
        category: 'Cooking Like A Chef',
        question:
          'Which Hwasa song was used as a challenge in Street Woman Fighter 2?',
        correctAnswers: ['Chili'],
        options: ['Wasabi', 'Spicy', 'Pepper', 'Chili'],
      },
      {
        number: 26,
        category: 'Cooking Like A Chef',
        question:
          'Which boy group released the song "Candy Sugar Pop" in 2022?',
        correctAnswers: ['Astro'],
        options: ['AB6IX', 'ASC2NT', 'ASTRO', 'A.C.E'],
      },
      {
        number: 27,
        category: 'Cooking Like A Chef',
        question:
          'With which song did TXT Yeonjun make his solo debut in 2024?',
        correctAnswers: ['Ggum'],
        options: ['Honey', 'Ggum', 'Candy', 'Chewing Gum'],
      },
      {
        number: 28,
        category: 'Cooking Like A Chef',
        question:
          'Which Super Junior sub-unit released the song "Cooking? Cooking!" in 2008?',
        correctAnswers: [
          'Super Junior Happy',
          'Super Junior-H',
          'Super Junior H',
        ],
        options: [
          'Super Junior-H',
          'Super Junior-D&E',
          'Super Junior-K.R.Y.',
          'Super Junior-L.S.S.',
        ],
      },
      {
        number: 29,
        category: 'Cooking Like A Chef',
        question:
          '"Junk Food" was the title song of the mini album "IYKYK" released by which boy group in 2023?',
        correctAnswers: ['Omega X'],
        options: ['ALL(H)OURS', 'One Pact', 'P1Harmony', 'Omega X'],
      },
      {
        number: 30,
        category: 'Cooking Like A Chef',
        question:
          'Which drink is blue for Red Velvet and pink for Twice, according to their song titles?',
        correctAnswers: ['Lemonade'],
        options: ['Orangeade', 'Champagne', 'Lemonade', 'Juice'],
      },
    ],
  },
  /* ----------------------------------------------------------------------------------
   --------------------------------- QUIZ ---------------------------------------------
   ------------------------------------------------------------------------------------ */
  {
    id: 16,
    title: 'I Will Survive',
    questionCount: 20,
    description: 'Questions about K-Pop survival shows.',
    questions: [
      {
        number: 1,
        category: 'I Will Survive',
        question:
          'Which group was formed through the first season of Produce 101?',
        correctAnswers: ['I.O.I', 'IOI'],
        options: ['X1', 'IZ*ONE', 'Wanna One', 'I.O.I'],
      },
      {
        number: 2,
        category: 'I Will Survive',
        question:
          'How many trainees could make it to the final line-up of the debut group in Produce 101 season 1?',
        correctAnswers: ['11', 'Eleven'],
        options: ['9', '10', '11', '12'],
      },
      {
        number: 3,
        category: 'I Will Survive',
        question:
          'What was the name of the theme song for Produce 101 season 1?',
        correctAnswers: ['Pick Me'],
        options: ['Choose Me', 'Pick Me', 'It’s Me', 'Nekkoya'],
      },
      {
        number: 4,
        category: 'I Will Survive',
        question:
          'Who finished in 1st place in the first season of Produce 101?',
        correctAnswers: ['Somi', 'Jeon Somi'],
        options: ['Jeon Somi', 'Kim Doyeon', 'Kim Sejeong', 'Choi Yoojung'],
      },
      {
        number: 5,
        category: 'I Will Survive',
        question: 'What was I.O.I’s official debut song?',
        correctAnswers: ['Dream Girls'],
        options: ['Downpour', 'Whatta Man', 'Crush', 'Dream Girls'],
      },
      {
        number: 6,
        category: 'I Will Survive',
        question: 'In which group did Sejeong and Mina debut, after I.O.I?',
        correctAnswers: ['gugudan'],
        options: ['DIA', 'gugudan', 'WJSN', 'Pristin'],
      },
      {
        number: 7,
        category: 'I Will Survive',
        question:
          'Which former I.O.I member was the first to debut solo, and still is a very successful soloist to this day?',
        correctAnswers: ['Chung Ha', 'Chungha', 'Kim Chungha', 'Kim Chung Ha'],
        options: ['Somi', 'Chaeyeon', 'Sejeong', 'Chung Ha'],
      },
      {
        number: 8,
        category: 'I Will Survive',
        question:
          'After I.O.I disbanded, which group did Yoojung and Doyeon debut in?',
        correctAnswers: ['Weki Meki'],
        options: ['Pristin V', 'WJSN', 'Weki Meki', 'gugudan'],
      },
      {
        number: 9,
        category: 'I Will Survive',
        question:
          'What was the final single released by I.O.I before their disbandment?',
        correctAnswers: ['Downpour'],
        options: ['Whatta Man', 'Downpour', 'Crush', 'Very Very Very'],
      },
      {
        number: 10,
        category: 'I Will Survive',
        question:
          'Former I.O.I member Jeon Somi debuted as a solo artist in 2019. What was the title of her debut single?',
        correctAnswers: ['Birthday'],
        options: ['Dumb Dumb', 'Ice Cream', 'XOXO', 'Birthday'],
      },
      {
        number: 11,
        category: 'I Will Survive',
        question:
          'Who was choosen as the first center for the theme song of Produce 101 season 1?',
        correctAnswers: [
          'Choi Yoojung',
          'Choi Yoo-jung',
          'Yoojung',
          'Yoo-jung',
          'Choi Yoo Jung',
          'Yoo Jung',
        ],
        options: ['Sejeong', 'Somi', 'Yoojung', 'Chanmi'],
      },
      {
        number: 12,
        category: 'I Will Survive',
        question:
          'What was the name of the group formed through the second season of Produce 101?',
        correctAnswers: ['Wanna One'],
        options: ['IZ*ONE', 'Wanna One', 'X1', 'Zerobaseone'],
      },
      {
        number: 13,
        category: 'I Will Survive',
        question:
          'Who finished in 1st place in the second season of Produce 101?',
        correctAnswers: ['Kang Daniel'],
        options: ['Lee Daehwi', 'Kim Jaehwan', 'Ong Seongwu', 'Kang Daniel'],
      },
      {
        number: 14,
        category: 'I Will Survive',
        question:
          'What was Wanna One’s official debut title song, released in 2017?',
        correctAnswers: ['Energetic'],
        options: ['Beautiful', 'Energetic', 'Boomerang', 'Burn It Up'],
      },
      {
        number: 15,
        category: 'I Will Survive',
        question:
          'Which group finally gained popularity 5-6 years after their debut, after its members participated in Produce 101 season 2, one of them debuting with Wanna One?',
        correctAnswers: ['NU’EST', 'Nuest', "Nu'est"],
        options: ['NU’EST', 'Pentagon', 'AB6IX', 'CIX'],
      },
      {
        number: 16,
        category: 'I Will Survive',
        question:
          'What was Wanna One’s title song for their first and final full album, released before their disbandment?',
        correctAnswers: ['Spring Breeze'],
        options: ['Spring Day', 'Beautiful', 'Spring Breeze', 'Burn it Up'],
      },
      {
        number: 17,
        category: 'I Will Survive',
        question:
          'Which ex-Wanna One member made his solo debut with the album "Color On Me"?',
        correctAnswers: ['Kang Daniel'],
        options: ['Ha Sung Woon', 'Lai Kuan Lin', 'Park Jihoon', 'Kang Daniel'],
      },
    ],
  },
];

console.log(quizData);
// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/QuizK-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true   

})
.then(() => {
    console.log('MongoDB Connected');   
    console.log("Quiz data:", quizData);

    console.log(typeof quizData)
    console.log(quizData.length)
    // Insert quiz data
    Quiz.insertMany(quizData)
        .then(() => {
            console.log('Quizzes inserted successfully!');
            mongoose.connection.close();
        })
        .catch(err => {
            console.error('Error inserting quizzes:', err);
            mongoose.connection.close();
        });
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});