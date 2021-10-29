const movies = [
  {
    name: "Vitalina Varela",
    year: 2019,
    runtime: 124,
    categories: ["drama"],
    "release-date": "2019-08-14",
    director: "Pedro Costa",
    writer: ["Pedro Costa", "Vitalina Varela"],
    actors: [
      "Vitalina Varela",
      " Manuel Tavares Almeida",
      "Tavares Borges",
      "Francisco Brito",
      "Marina Alves Domingues",
      "Imídio Monteiro",
      "Manuel Tavares Almeida",
      "Emídio Landim Monteiro",
      "Nilsa Fortes",
      "Benvinda Mendes",
      "Bruno Brito Varela"
    ],
    storyline:
      "Vitalina Varela, a 55-year-old woman from Cape Verde, arrives in Lisbon three days after her husband's funeral. She's been waiting for her plane ticket for more than 25 years."
  },
  {
    name: "Ad Astra",
    year: 2019,
    runtime: 124,
    categories: ["adventure", "fantasy", "mystery", "thriller", "sci-fi"],
    "release-date": "2019-09-29",
    director: "James Gray",
    writer: ["James Gray", "Ethan Gross"],
    actors: [
      "Brad Pitt",
      "Dede Gardner",
      "Jeremy Kleiner",
      "James Gray",
      "Anthony Katagas",
      "Rodrigo Teixeira",
      "Arnon Milchan"
    ],
    storyline:
      "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe."
  },
  {
    name: "After",
    year: 2019,
    runtime: 105,
    categories: ["drama", "romance"],
    "release-date": "2019-04-12",
    director: "Jenny Gage",
    writer: [
      "Tom Betterton",
      "Tamara Chestna",
      "Jenny Gage",
      "Susan McMartin",
      "Anna Todd"
    ],
    actors: [
      "Josephine Langford",
      "Hero Fiennes Tiffin",
      "Khadijha Red Thunder",
      "Dylan Arnold",
      "Shane Paul McGhie",
      "Samuel Larsen",
      "Inanna Sarkis",
      "Selma Blair",
      "Pia Mia",
      "Swen Temmel",
      "Meadow Williams",
      "Peter Gallagher",
      "Jennifer Beals",
      "Michael Hull",
      "Sarah Jorge León",
      "Chris Kontopidis",
      "Rebecca Lee Robertson",
      "ShannonMayers",
      "ByronWigfall",
      "JohnEvanko",
      "Mark Axelowitz",
      "Paul Fox"
    ],
    storyline:
      "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd."
  },
  {
    name: "Aladdin",
    year: 2019,
    runtime: 128,
    categories: ["adventure", "family", "fantasy", "musical", "romance"],
    "release-date": "2019-05-22",
    director: "Guy Ritchie",
    writer: ["John August", "Guy Ritchie"],
    actors: [
      "Will Smith",
      "Mena Massoud",
      "Naomi Scott",
      "Marwan Kenzari",
      "Navid Negahban",
      "Nasim Pedrad",
      "Billy Magnussen",
      "Jordan A. Nash",
      "Taliyah Blair",
      "Aubrey Lin",
      "Amir Boutrous",
      "Numan Acar",
      "Omari Bernard",
      "Nathaniel Ellul",
      "Sebastien Torkia"
    ],
    storyline:
      "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
  },
  {
    name: "Angel Has Fallen",
    year: 2019,
    runtime: 121,
    categories: ["action", "thriller"],
    "release-date": "2019-08-21",
    director: "Ric Roman Waugh",
    writer: ["Ric Roman Waugh", "Robert Mark Kamen", "Matt Cook"],
    actors: ["Gerard Butler", "Morgan Freeman", "Piper Perabo"],
    storyline:
      "Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat."
  },
  {
    name: "Annabelle Comes Home",
    year: 2019,
    runtime: 106,
    categories: ["supernatural", "horror"],
    "release-date": "2019-06-26",
    director: "Gary Dauberman",
    writer: ["James Wan", "Gary Dauberman"],
    actors: [
      "Mckenna Grace",
      "Madison Iseman",
      "Katie Sarife",
      "Patrick Wilson",
      "Vera Farmiga"
    ],
    storyline:
      "Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her 'safely' behind sacred glass and enlisting a priest's holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target--the Warrens' ten-year-old daughter, Judy, and her friends."
  },
  {
    name: "Avengers: Endgame",
    year: 2019,
    runtime: 181,
    categories: ["action", "sci-fi", "fantasy"],
    "release-date": "2019-04-26",
    director: ["Anthony Russo", "Joe Russo"],
    writer: ["Christopher Markus", "Stephen McFeely"],
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
      "Don Cheadle",
      "Paul Rudd",
      "Brie Larson",
      "Karen Gillan",
      "Danai Gurira",
      "Benedict Wong",
      "Jon Favreau",
      "Bradley Cooper",
      "Gwyneth Paltrow",
      "Josh Brolin"
    ],
    storyline:
      "Now that Thanos has put his plan into action in 'Avengers: Infinity War', it's time to find a way to undo what happened."
  },
  {
    name: "Bacurau",
    year: 2019,
    runtime: 132,
    categories: ["drama", "western", "splatter", "Fantasy", "sci-fi"],
    "release-date": "2019-05-15",
    director: "Kleber Mendonça Filho",
    writer: ["Kleber Mendonça Filho", "Juliano Dornelles"],
    actors: ["Sônia Braga", "Udo Kier", "Bárbara Colen"],
    storyline:
      "Shortly after the death of Dona Carmelita, residents of a small town located in the Brazilian Sertão called Bacurau discover that the community is no longer on any map."
  },
  {
    name: "Captain Marvel",
    year: 2019,
    runtime: 125,
    categories: ["action", "adventure", "sci-fi"],
    "release-date": "2019-03-08",
    director: "Anna Boden, Ryan Fleck",
    writer: ["Anna Boden", "Ryan Fleck", "Geneva Robertson-Dworet"],
    actors: [
      "Brie Larson",
      "Samuel L. Jackson",
      "Ben Mendelsohn",
      "Jude Law",
      "Annette Bening",
      "Djimon Hounsou",
      "Lee Pace",
      "Lashana Lynch",
      "Gemma Chan",
      "Clark Gregg",
      "Rune Temte",
      "Algenis Perez Soto",
      "Mckenna Grace",
      "Akira Akbar",
      "Matthew Maher",
      "Chuku Modu",
      "Vik Sahay",
      "Colin Ford",
      "Kenneth Mitchell",
      "Stephen A. Chang",
      "Pete Ploszek",
      "Matthe 'Spider' Kimmel",
      "Stephen 'Cajun' Del Bagno",
      "London Fuller",
      "Azari Akbar",
      "Mark Daugherty",
      "Diana Toshiko",
      "Barry Curtis",
      "Emily Ozrey",
      "Abigaille Ozrey",
      "Marilyn Brett",
      "Stan Lee",
      "Robert Kazinsky",
      "Nelson Franklin",
      "Patrick Brennan",
      "Patrick Gallagher",
      "Ana Ayora",
      "Lyonetta Flowers",
      "Rufus Flowers",
      "Sharon Blynn",
      "Auden L. Ophuls",
      "Matthew Bellows",
      "Richard Zeringue",
      "Duane Henry",
      "Reggie",
      "Gonzo",
      "Archie",
      "Rizzo"
    ],
    storyline: `Set in the 1990s, Marvel Studios' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.`
  },
  {
    name: "Dark Phoenix",
    year: 2019,
    runtime: 114,
    categories: ["action", "adventure", "sci-fi"],
    "release-date": "2019-06-05",
    director: "Simon Kinberg",
    writer: ["Simon Kinberg"],
    actors: [
      "James McAvoy",
      "Michael Fassbender",
      "Jennifer Lawrence",
      "Sophie Turner",
      "Jessica Chastain",
      "Nicholas Hoult",
      "Tye Sheridan",
      "Alexandra Shipp",
      "Evan Peters"
    ],
    storyline:
      "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all of humanity."
  },
  {
    name: "Fast & Furious Presents: Hobbs & Shaw",
    year: 2019,
    runtime: 136,
    categories: ["action", "adventure", "comedy", "mystery"],
    "release-date": "2019-07-13",
    director: "David Leitch",
    writer: ["Chris Morgan", "Drew Pearce"],
    actors: [
      "Dawyne Johnson",
      "Jason Statham",
      "Idris Elba",
      "Vanessa Kirby",
      "Helen Mirren",
      "Ryan Reynolds"
    ],
    storyline:
      "Brixton Lorr is a cybernetically enhanced soldier who possesses superhuman strength, a brilliant mind and a lethal pathogen that could wipe out half of the world's population. It's now up to hulking lawman Luke Hobbs and lawless operative Deckard Shaw to put aside their past differences and work together to prevent the seemingly indestructible Lorr from destroying humanity."
  },
  {
    name: "First cow",
    year: 2019,
    runtime: 122,
    categories: ["drama"],
    "release-date": "2019-08-30",
    director: "Kelly Reichardt",
    writer: ["Jonathan Raymond", "Kelly Reichardt"],
    actors: [
      "John Magaro",
      "Orion Lee",
      "Rene Auberjonois",
      "Toby Jones",
      "Ewen Bremner",
      "Scott Shepherd",
      "Gary Farmer",
      "Lily Gladstone",
      "Alia Shawkat",
      "Dylan Smith",
      "Stephen Malkmus",
      "Mitchell Saddleback"
    ],
    storyline:
      "A skilled cook has traveled west and joined a group of fur trappers in Oregon, though he only finds true connection with a Chinese immigrant also seeking his fortune. Soon the two collaborate on a successful business."
  },
  {
    name: "Glass",
    year: 2019,
    runtime: "129",
    categories: ["drama", "sci-fi", "thriller"],
    "release-date": "2019-01-18",
    director: "M. Night Shyamalan",
    writer: "M. Night Shyamalan",
    actors: [
      "James McAvoy",
      "Bruce Willis",
      "Samuel L. Jackson",
      "Anya Taylor-Joy"
    ],
    storyline:
      "Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities."
  },
  {
    name: "Godzilla: King of the Monsters",
    year: 2019,
    runtime: 132,
    categories: ["action", "adventure", "fantasy", "sci-fi"],
    "release-date": "2019-05-29",
    director: "Michael Dougherty",
    writer: ["Michael Dougherty", "Zach Shields", "Max Borenstein"],
    actors: [
      "Kyle Chandler",
      "Vera Farmiga",
      "Millie Bobby Brown",
      "Ken Watanabe",
      "Ziyi Zhang",
      "Bradley Whitford",
      "Sally Hawkins",
      "Charles Dance",
      "Thomas Middleditch",
      "Aisha Hinds",
      "O'Shea Jackson Jr.",
      "David Strathairn",
      "Anthony Ramos",
      "Elizabeth Faith Ludlow",
      "Jonathan Howard"
    ],
    storyline:
      "The new story follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three headed King Ghidorah. When these ancient superspecies, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance."
  },
  {
    name: "Hellboy",
    year: 2019,
    runtime: 121,
    categories: ["Action", "Adventure", "Fantasy", "Horror", "Sci-Fi"],
    "release-date": "2019-04-09",
    director: "Neil Marshall",
    writer: ["Rudolf Schenker", "Herman Rarebell", "Klaus Meine"],
    actors: [
      "Mark Stanley",
      "Brian Gleeson",
      "Nadya Keranova",
      "Maria Tepavicharova",
      "Ana Tabakova",
      "Milla Jovovich",
      "Penelope Mitchell",
      "Terry Randal",
      "Ian McShane",
      "David Harbour",
      "Mario de la Rosa",
      "Christopher Mata",
      "Atanas Srebrev",
      "Dawn Sherrer",
      "Michael Heath"
    ],
    storyline:
      "Hellboy is a supernatural being who is the son of a fallen angel. He came to our world in 1944 as a result of a mystical ritual. The Occultists of the Third Reich had long tried to gain an advantage in the war, hoping to attract the ideal soldier to the ranks of the fascist army. Hellboy was exactly the one they needed, but they never managed to make their plans a reality. The demon from hell fell into the hands of Americans and began to serve them, protecting the world from mysterious threats. This time he is sent to England to meet face to face with Merlin's wife. Just a battle with the Blood Queen will lead to the end of the world, which the monster tried to avoid all his life."
  },
  {
    name: "Hobbs & Shaw",
    year: 2019,
    runtime: 136,
    categories: ["action"],
    "release-date": "2019-07-13",
    director: "David Leitch",
    writer: ["Chris Morgan", "Drew Pearce"],
    actors: ["Dwayne Johnson", "Jason Statham", "Idris Elba", "Vanessa Kirby"],
    storyline:
      "Brixton Lorr is a cybernetically enhanced soldier who possesses superhuman strength, a brilliant mind and a lethal pathogen that could wipe out half of the world's population. It's now up to hulking lawman Luke Hobbs and lawless operative Deckard Shaw to put aside their past differences and work together to prevent the seemingly indestructible Lorr from destroying humanity."
  },
  {
    name: "Hobbs & Shaw",
    year: 2019,
    runtime: 136,
    categories: ["action", "adventure"],
    "release-date": "2019-08-02",
    director: "David Leitch",
    writer: ["Jennifer Lee", "Drew Pearce"],
    actors: [
      "Dwayne Johnson",
      "Jason Statham",
      "Idris Elba",
      "Vanessa Kirby",
      "Eiza González",
      "Cliff Curtis",
      "Helen Mirren"
    ],
    storyline:
      " The plot follows the unlikely team-up of the titular characters as they are forced to team up with Shaw's sister (Kirby) when a cybernetically-enhanced terrorist (Elba) and his organization threaten the world with a deadly virus."
  },
  {
    name: "Hustlers",
    year: 2019,
    runtime: 110,
    categories: ["comedy", "crime", "drama"],
    "release-date": "2019-09-13",
    director: "Lorene Scafaria",
    writer: ["Jessica Pressler", "Lorene Scafaria"],
    actors: ["Constance Wu", "Jennifer Lopez", "Julia Stiles"],
    storyline:
      "Inspired by the viral New York Magazine article, Hustlers follows a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients."
  },
  {
    name: "Ich war noch niemals in New York",
    year: 2019,
    runtime: 127,
    categories: ["comedy", "drama", "musical", "romance"],
    "release-date": "2019-10-17",
    director: "Philipp Stölzl",
    writer: [
      "Alexander Dydyna",
      "Philipp Stölzl",
      "Jan Berger",
      "Karsten Dusse",
      "Gabriel Barylli",
      "Christian Struppeck",
      "Udo Jürgens"
    ],
    actors: [
      "Heike Makatsch",
      "Moritz Bleibtreu",
      "Katharina Thalbach",
      "Uwe Ochsenknecht",
      "Michael Ostroski",
      "Pasquale Alearsi",
      "Marlon Schram",
      "Michael Aston"
    ],
    storyline:
      "For television presenter Lisa Wartberg her job is the most important thing in life. That changes, however, when her mother Maria loses her memory after an accident and suddenly knows only one thing: she has never been to New York. The feisty lady escapes from the hospital and smuggles herself as a stowaway on board a cruise ship to finally experience the city, which never sleeps, up close. Her daughter has no choice but to go on the search for her mother together with her make-up artist Fred. They do find her, but the ship leaves before Lisa and her mother get off board. A chaotic journey across the Atlantic begins, where Lisa not only gets to know passenger Axel and his son, but also her mother makes an exciting acquaintance."
  },
  {
    name: "John Wick Parabellum",
    year: 2019,
    runtime: 131,
    categories: ["Action", "Thriller", "Crime"],
    "release-date": "2019-05-17",
    director: "Chad Stahelski",
    writer: ["Derek Kolstad", "Shay Hatten", "Chris Collins", "Marc Abrams"],
    actors: [
      "Keanu Reeves",
      "Halle Berry",
      "Laurence Fishburne",
      "Mark Dacascos",
      "Asia Kate Dillon",
      "Lance Reddick",
      "Anjelica Huston",
      "Ian McShane",
      "Susan Blommaert",
      "Jason Mantzoukas",
      "Yayan Ruhian",
      "Saïd Taghmaoui",
      "Tiler Peck"
    ],
    storyline:
      "Super-assassin John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head - he is the target of hit men and women everywhere."
  },
  {
    name: "Jojo Rabbit",
    year: 2019,
    runtime: 108,
    categories: ["comedy", "drama", "war"],
    "release-date": "2019-11-08",
    director: "Taika Waititi",
    writer: ["Christine Leunens", "Taika Waititi"],
    actors: [
      "Roman Griffin Davis",
      "Thomasin McKenzie",
      "Scarlett Johansson",
      "Taika Waititi",
      "Sam Rockwell",
      "Rebel Wilson",
      "Alfie Allen",
      "Stephen Merchant",
      "Archie Yates",
      "Luke Brandon Field",
      "Sam Haygarth",
      "Stanislav Callas",
      "Joe Weintraub",
      "Brian Caspe",
      "Gabriel Andrews"
    ],
    storyline:
      "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home."
  },
  {
    name: "Joker",
    year: 2019,
    runtime: 122,
    categories: ["Crime", "Drama", "Thriller"],
    "release-date": "2019-09-28",
    director: "Todd Phillips",
    writer: ["Todd Phillips", "Scott Silver"],
    actors: [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz",
      "Frances Conroy",
      "Brett Cullen"
    ],
    storyline:
      'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker".'
  },
  {
    name: "Lucy in The Sky",
    year: 2019,
    runtime: 124,
    categories: ["drama", "fantasy", "sci-fi"],
    "release-date": "2019-10-04",
    director: "Noah Hawley",
    writer: [" Noah Hawley", "Elliott DiGuiseppi", "Brian C. Brown"],
    actors: ["Natalie Portman", "Jon Hamm", "Zazie Beetz", "Dan Stevens"],
    storyline:
      "After an awe-inspiring experience in outer space, an astronaut returns to Earth and starts to lose touch with reality in a world that now seems too small."
  },
  {
    name: "Maleficent Mistress of Evil",
    year: 2019,
    runtime: 119,
    categories: ["Fantasy", "Adventure"],
    "release-date": "2019-10-17",
    director: "Joachim Ronning",
    writer: ["Linda Woolverton", "Micah Fitzerman-Blue", "Noah Harpster"],
    actors: [
      "Angelina Jolie",
      "Elle Fanning",
      "Chiwetel Ejiofor",
      "Sam Riley",
      "Ed Skrein",
      "Imelda Staunton",
      "Juno Temple",
      "Lesley Manville",
      "Michelle Pfeiffer"
    ],
    storyline:
      "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play."
  },
  {
    name: "Martin Eden",
    year: 2019,
    runtime: 129,
    categories: ["adventure", "thriller", "sci-fi"],
    "release-date": "2019-09-02",
    director: "Pietro Marcello",
    writer: ["Jack London", "Maurizio Braucci", "Pietro Marcello"],
    actors: ["Luca Marinelli", "Carlo Cecchi"],
    storyline:
      " Martin Eden struggles to rise above his destitute, proletarian circumstances through an intense and passionate pursuit of self-education, hoping to achieve a place among the literary elite."
  },
  {
    name: "Men in Black: International",
    year: 2019,
    runtime: 115,
    categories: ["action", "adventure", "comedy", "sci-Fi"],
    "release-date": "2019-06-14",
    director: "F. Gary Gray",
    writer: ["Matt Holloway", "Art Marcum", "Lowell Cunningham"],
    actors: ["Chris Hemsworth", "Tessa Thompson", "Kumail Nanjiani"],
    storyline:
      "After an eye-opening encounter of the third kind, the secret MiB organisation's newest recruit, Agent M, finds herself under the wing of the heroic Agent H in cosmopolitan London, when a shape-shifting duo of intergalactic assassins executes an alien aristocrat. Now, with a devastating super-weapon of mass destruction hidden somewhere on Earth, the Men in Black will leave no stone unturned to retrieve it; however, heavy clouds of mistrust and a scent of betrayal envelop the once-incorruptible agency. Is there a well-placed mole in their midst?"
  },
  {
    name: "Pacarrete",
    year: 2019,
    runtime: 97,
    categories: ["comedy", "feature film"],
    "release-date": "2019-12-03",
    director: "Allan Deberton",
    writer: [
      "Andre Araujo",
      "Samuel Brasileiro",
      "Allan Deberton",
      "Natália Maia"
    ],
    actors: [
      "Marcelia Cartaxo",
      "João Miguel",
      "Zezita Matos",
      "Soia Lira",
      "Samya De Lavor",
      "Edneia Tutti",
      "Rodger Rogério",
      "Débora Ingrid"
    ],
    storyline:
      "Pacarrete (Marcélia Cartaxo) is a retired dance teacher, who lives with her sister Chiquinha (Zezita Matos) in Russas, in the interior of Ceará, with Maria (Soia Lira) as a domestic servant. Strict and surly, she lives cleaning the sidewalk and fighting with whoever passes her. His big dream is to star in a ballet for the local population during the big party in the city, which is about to happen. To this end, she orders a new ballet outfit to be made while trying to convince the city hall of her show. However, the general population's lack of interest in such shows soon becomes a major opponent."
  },
  {
    name: "Pokémon Detective Pikachu",
    year: 2019,
    runtime: 105,
    categories: ["action", "adventure", "sci-fi", "comedy"],
    "release-date": "2019-05-09",
    director: "Rob Letterman",
    writer: ["Dan Hernandez", "Benji Samit", "Rob Letterman", "Derek Connolly"],
    actors: [
      "Ryan Reynolds",
      "Justice Smith",
      "Kathryn Newton",
      "Suki Waterhouse",
      "Omar Chaparro",
      "Chris Geere",
      "Ken Watanabe",
      "Bill Nighy",
      "Karan Soni",
      "Rita Ora",
      "Diplo",
      "Rob Delaney"
    ],
    storyline:
      "The film focuses on Tim Goodman and master detective Pikachu, a talking Pokémon. The two team up to clarify the disappearance of Tim's father Harry Goodman. This was the partner of master detective Pikachu and disappeared under mysterious circumstances after a car accident."
  },
  {
    name: "Shazam!",
    year: 2019,
    runtime: 132,
    categories: ["action", "adventure", "comedy"],
    "release-date": "2019-04-05",
    director: "David F. Sandberg",
    writer: ["Henry Gayden"],
    actors: ["Zachary Levi", "Mark Strong", "Asher Angel"],
    storyline:
      "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy."
  },
  {
    name: "Spider-Man: Far from Home",
    year: 2019,
    runtime: 129,
    categories: ["action", "adventure", "sci-fi"],
    "release-date": "2019-07-02",
    director: "Jon Watts",
    writer: ["Chris McKenna", "Erik Sommers", "Stan Lee", "Steve Dikto"],
    actors: [
      "Tom Holland",
      "Samuel L.Jackson",
      "Jake Gyllenhaal",
      "Marisa Tomei",
      "Jon Favreau",
      "Zendaya",
      "Jacob Batalon",
      "Tony Revolori",
      "Angourie Rice",
      "Remy Hii",
      "Martin Starr",
      "Jorge Lendeborg Jr.",
      "Cobie Smulders",
      "Numan Acar"
    ],
    storyline:
      "Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent."
  },
  {
    name: "The Curse of La Llorona",
    year: 2019,
    runtime: 93,
    categories: ["horror", "mystery", "thriller"],
    "release-date": "2019-04-19",
    director: "Michael Chaves",
    writer: ["Mikki Daughtry", "Tobias Iaconis"],
    actors: ["Linda Cardellini", "Raymond Cruz", "Patricia Velásquez"],
    storyline:
      "Ignoring the eerie warning of a troubled mother suspected of child endangerment, a social worker and her own small kids are soon drawn into a frightening supernatural realm. Their only hope to survive La Llorona's deadly wrath may be a disillusioned priest and the mysticism he practices to keep evil at bay, on the fringes where fear and faith collide."
  },
  {
    name: "The Lion King",
    year: 2019,
    runtime: 118,
    categories: ["animation", "adventure", "drama", "family", "musical"],
    "release-date": "2019-07-19",
    director: "Jon Favreau",
    writer: [
      "Jeff Nathanson",
      "Brenda Chapman",
      "Irene Mecchi",
      "Jonathan Roberts",
      "Linda Woolverton"
    ],
    actors: [
      "Donald Glover",
      "Seth Rogen",
      "Chiwetel Ejiofor",
      "Alfre Woodard",
      "Billy Eichner",
      "John Kani",
      "John Oliver",
      "Beyonc� Knowles-Carter",
      "James Earl Jones"
    ],
    storyline:
      "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
  },
  {
    name: "The Secret Life of Pets 2",
    year: 2019,
    runtime: 86,
    categories: ["animation", "comedy", "adventure", "3D"],
    "release-date": "2019-05-24",
    director: "Chris Renaud",
    writer: "Brian Lynch",
    actors: [
      "Patton Oswalt",
      "Kevin Hart",
      "Eric Stonestreet",
      "Jenny Slate",
      "Tiffany Haddish",
      "Lake Bell",
      "Nick Kroll",
      "Dana Carvey",
      "Ellie Kemper",
      "Chris Renaud",
      "Hannibal Buress",
      "Bobby Moynihan",
      "Harrison Ford"
    ],
    storyline:
      " Continuing the story of Max and his pet friends, following their secret lives after their owners leave them for work or school each day."
  },
  {
    name: "The Vast of Night",
    year: 2019,
    runtime: 89,
    categories: ["action", "adventure", "sci-fi"],
    "release-date": "2019-01-26",
    director: "Andrew Patterson",
    writer: ["James Montague", "Craig Sanger"],
    actors: [
      "Sierra McCormick",
      "Jake Horowitz",
      "Gail Cronauer",
      "Bruce Davis",
      "Greg Peyton"
    ],
    storyline:
      "One night in New Mexico, in the late e 1950s, a switchboard operator and radio DJ discover a strange audio frequency which could change the future forever."
  },
  {
    name: "Toy Story 4",
    year: 2019,
    runtime: 100,
    categories: ["animation", "adventure", "comedy", "family", "fantasy"],
    "release-date": "2019-06-21",
    director: " Josh Cooley",
    writer: [
      "John Lasseter",
      "Andrew Stanton",
      "Josh Cooley",
      "Valerie LaPointe",
      "Rashida Jones",
      "Will McCormack",
      "Martin Hynes",
      "Stephany Folsom"
    ],
    actors: [
      "Tom Hanks",
      "Tim Allen",
      "Annie Potts",
      "Tony Hale",
      "Keegan-Michael Key",
      "Madeleine McGraw",
      "Christina Hendricks",
      "Jordan Peele",
      "Keanu Reeves",
      "Ally Maki",
      "Jay Hernandez",
      "Lori Alan",
      "Joan Cusack",
      "Bonnie Hunt",
      "Kristen Schaal"
    ],
    storyline:
      "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."
  },
  {
    name: "Us",
    year: 2019,
    runtime: 116,
    categories: ["horror", "thriller", "mystery", "psychological horror"],
    "release-date": "2019-05-22",
    director: "Jordan Peele",
    writer: ["Jordan Peele"],
    actors: [
      "Lupita Nyong'o",
      "Madison Curry",
      "Ashley McKoy",
      "Winston Duke",
      "Shahadi Wright Joseph",
      "Evan Alex",
      "Elisabeth Moss",
      "Tim Heidecker",
      "Yahya Adbul-Mateen II",
      "Anna Diop",
      "Cali Sheldon",
      "Noelle Sheldon",
      "Napiera Groves",
      "Duke Nicholson",
      "Kara Hayward",
      "Nathan Harrington",
      "Dustin Ybarra",
      "Alan Frazier",
      "Lon Gowan",
      "Jordan Peele"
    ],
    storyline:
      "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them."
  },
  {
    name: "Vitalina Varela",
    year: 2019,
    runtime: 124,
    categories: ["drama"],
    "release-date": "2019-10-31",
    director: "Pedro Costa",
    writer: ["Pedro Costa", "Vitalina Varela"],
    actors: [
      "Vitalina Varela",
      "Ventura",
      "Manuel Tavares Almeida",
      "Francisco Brito",
      "Marina Alves Domingues",
      "João Baptista Fortes",
      "Nilsa Fortes",
      "Lisa Lopi",
      "Benvinda Mendes",
      "Emídio Landim Monteiro",
      "Imídio Monteiro",
      "João Raimundo Monteiro",
      "Bruno Brito Varela"
    ],
    storyline:
      "A Cape Verdean woman navigates her way through Lisbon, following the scanty physical traces her deceased husband left behind and discovering his secret, illicit life."
  }
];
export default movies;
