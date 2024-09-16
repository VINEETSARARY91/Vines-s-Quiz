resetLocal();




const Questions = [{
      "question": "A flashing red traffic light signifies that a driver should do what?",
      "A": "stop",
      "B": "speed up",
      "C": "proceed with caution",
      "D": "honk the horn",
      "answer": "A"
}, {
      "question": "A knish is traditionally stuffed with what filling?",
      "A": "potato",
      "B": "creamed corn",
      "C": "lemon custard",
      "D": "raspberry jelly",
      "answer": "A"
}, {
      "question": "A pita is a type of what?",
      "A": "fresh fruit",
      "B": "flat bread",
      "C": "French tart",
      "D": "friend bean dip",
      "answer": "B"
}, {
      "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
      "A": "landscape",
      "B": "caricature",
      "C": "still life",
      "D": "Impressionism",
      "answer": "B"
}, {
      "question": "A second-year college student is usually called a what?",
      "A": "sophomore",
      "B": "senior",
      "C": "freshman ",
      "D": "junior ",
      "answer": "A"
}, {
      "question": "A student who earns a J.D. can begin his or her career as a what?",
      "A": "lawyer",
      "B": "bricklayer",
      "C": "doctor",
      "D": "accountant",
      "answer": "A"
}, {
      "question": "A triptych is a work of art that is painted on how many panels?",
      "A": "two",
      "B": "three",
      "C": "five",
      "D": "eight",
      "answer": "B"
}, {
      "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
      "A": "oneself",
      "B": "other people",
      "C": "little made large",
      "D": "hued in green and blue",
      "answer": "B"
}, {
      "question": "According to a popular slogan, what state should people not 'mess with'?",
      "A": "New York",
      "B": "Texas",
      "C": "Montana",
      "D": "Rhode Island",
      "answer": "B"
}, {
      "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
      "A": "tuna",
      "B": "laundry",
      "C": "popcorn",
      "D": "coffee",
      "answer": "D"
}, {
      "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
      "A": "chicken",
      "B": "rabbit",
      "C": "moose",
      "D": "snake",
      "answer": "B"
}, {
      "question": "According to Greek mythology, who was Apollo's twin sister?",
      "A": "Aphrodite",
      "B": "Artemis",
      "C": "Venus",
      "D": "Athena",
      "answer": "B"
}, {
      "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
      "A": "cursing them",
      "B": "blessing a child",
      "C": "counting money",
      "D": "passing time",
      "answer": "A"
}, {
      "question": "According to legend, in what country are you most likely to meet a leprechaun?",
      "A": "Ireland",
      "B": "Poland",
      "C": "Greenland",
      "D": "Scotland",
      "answer": "A"
}, {
      "question": "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
      "A": "Poodle",
      "B": "Beagle",
      "C": "German shepherd",
      "D": "Labrador retriever",
      "answer": "D"
}, {
      "question": "According to the Bible, Moses and Aaron had a sister named what?",
      "A": "Jochebed",
      "B": "Ruth",
      "C": "Leah",
      "D": "Miriam",
      "answer": "D"
}, {
      "question": "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
      "A": "calm",
      "B": "blue",
      "C": "windy",
      "D": "really big",
      "answer": "B"
}, {
      "question": "According to the Mother Goose nursery rhyme, which child is full of woe?",
      "A": "Monday's child",
      "B": "Wednesday's child",
      "C": "Thursday's child",
      "D": "Saturday's child",
      "answer": "B"
}, {
      "question": "According to the popular saying, what should you do 'when in Rome'?",
      "A": "watch your wallet",
      "B": "see the Coliseum",
      "C": "as the Romans do",
      "D": "don't drink the water",
      "answer": "C"
}, {
      "question": "According to the proverb, necessity is the mother of what?",
      "A": "Invention",
      "B": "Luck",
      "C": "Problems",
      "D": "Procrastination",
      "answer": "A"
}, {
      "question": "According to the title of a popular children's TV show, what color is Bear's big house?",
      "A": "red",
      "B": "green",
      "C": "purple",
      "D": "blue",
      "answer": "D"
}, {
      "question": "According to the USDA, which food group should you eat the most servings of per day?",
      "A": "vegetables",
      "B": "dairy",
      "C": "meats",
      "D": "breads",
      "answer": "D"
}, {
      "question": "Ada Lovelace is credited with being the first person to have made what?",
      "A": "a computer program",
      "B": "a souffle",
      "C": "a brassiere",
      "D": "a mystery novel",
      "answer": "A"
}, {
      "question": "After Prince Charles, who is next in line to be the king of England?",
      "A": "Prince William",
      "B": "Prince Andrew",
      "C": "Prince Edward",
      "D": "Fresh Prince",
      "answer": "A"
}, {
      "question": "An airplane's black box is usually what color?",
      "A": "black",
      "B": "white",
      "C": "orange",
      "D": "purple",
      "answer": "C"
}
]
const Questionss = [

    
   {
      "question": "What are the various stages of heat treatment?",
      "A": "Heating, Cooling and Quenching",
      "B": "Quenching, Cooling and Heating",
      "C": "Heating, Soaking and Quenching",
      "D": "Soaking, Quenching and Cooling",
      "answer": "C"
   },
   {
      "question": "Which formula is used to calculate the pressure?",
      "A": "Force + Area",
      "B": "Force/Area",
      "C": "Force x Area",
      "D": "Force - Area",
      "answer": "B"
   },
   {
      "question": "What is the disadvantage of flame hardening in the heat treatment process?",
      "A": "Small depth of hardening",
      "B": "Not suitable for small workpieces",
      "C": "More distortion",
      "D": "Long hardening time",
      "answer": "B"
},


   {
      "question": "",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "answer": ""
   },
   {
      "question": "",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "answer": ""
}

]
const Questions_2 = [ {
      "question": "If someone has cataracts, what part of their body might need an operation?",
      "A": "ear",
      "B": "hand",
      "C": "eye",
      "D": "knee",
      "answer": "C"
}, {
      "question": "If you are 'riding fakie' inside a 'half pipe' what are you probably doing?",
      "A": "skiing",
      "B": "biking",
      "C": "snowboarding",
      "D": "surfing",
      "answer": "C"
}, {
      "question": "If you are truly afraid of the dark, what do you suffer from?",
      "A": "hypnophobia",
      "B": "cryptophobia",
      "C": "hadephobia",
      "D": "nyctophobia",
      "answer": "D"
}, {
      "question": "If you are watching a Shavian play, who is the author?",
      "A": "Shakespeare",
      "B": "Aeschylus",
      "C": "George Bernard Shaw",
      "D": "Anton Chekhov",
      "answer": "C"
}, {
      "question": "If you ask for 'gai' at a Thai restaurant, what will you get?",
      "A": "shrimp",
      "B": "chicken",
      "C": "beef",
      "D": "pork",
      "answer": "B"
}, {
      "question": "If you dial '411' on a telephone, who are you calling?",
      "A": "the police",
      "B": "the White House",
      "C": "directory assistance",
      "D": "Moviefone",
      "answer": "C"
}, {
      "question": "If you have a 'sawbuck' how much money do you have?",
      "A": "$1",
      "B": "$5",
      "C": "$10",
      "D": "$20",
      "answer": "C"
}, {
      "question": "If you work as a 'dolly grip' what business are you in?",
      "A": "sheep farming",
      "B": "film production",
      "C": "construction",
      "D": "moving",
      "answer": "B"
}, {
      "question": "In 1909, Frederick Cook claimed to be the first explorer to reach what location?",
      "A": "Mount Everest",
      "B": "Bermuda Triangle",
      "C": "Atlantis",
      "D": "North Pole",
      "answer": "D"
}, {
      "question": "In 1926, the Harlem Globetrotters basketball team was formed in what city?",
      "A": "Boston",
      "B": "Philadelphia",
      "C": "Chicago",
      "D": "New York City",
      "answer": "C"
}, {
      "question": "In 1960, Nazi official Adolph Eichmann was finally captured in what country?",
      "A": "Brazil",
      "B": "East Germany",
      "C": "Argentina",
      "D": "Paraguay",
      "answer": "C"
}, {
      "question": "In 1978, who became the youngest jockey ever to win horse racing's triple crown?",
      "A": "Jerry Bailey",
      "B": "Steve Cauthen",
      "C": "Willie Shoemaker",
      "D": "Pasquale Devito",
      "answer": "B"
}, {
      "question": "In 1986, Libyan leader Muammar Qaddafi drew a so-called 'Line of Death' over what body of water?",
      "A": "Gulf of Sidra",
      "B": "Gulf of Oman",
      "C": "Red Sea",
      "D": "Persian Gulf",
      "answer": "A"
}, {
      "question": "In a game with no wild cards, what is the highest possible poker hand?",
      "A": "straight flush",
      "B": "royal flush",
      "C": "full house",
      "D": "four of a kind",
      "answer": "B"
}, {
      "question": "In America, what is the main ingredient in pepperoni?",
      "A": "fish",
      "B": "pepper",
      "C": "wheat",
      "D": "meat",
      "answer": "D"
}, {
      "question": "In American football, how many points is a touchdown worth?",
      "A": "two",
      "B": "three",
      "C": "six",
      "D": "seven",
      "answer": "C"
}, {
      "question": "In an adult human, how long is the large intestine?",
      "A": "one foot",
      "B": "five feet",
      "C": "twelve feet",
      "D": "twenty feet",
      "answer": "B"
}, {
      "question": "In baseball, how many balls make a walk?",
      "A": "one",
      "B": "two",
      "C": "three",
      "D": "four",
      "answer": "D"
}, {
      "question": "In bowling, how many pins must you knock down to get a strike?",
      "A": "zero",
      "B": "8",
      "C": "10",
      "D": "12",
      "answer": "C"
}, {
      "question": "In British currency, how many pence make a pound?",
      "A": "10",
      "B": "100",
      "C": "500",
      "D": "1000",
      "answer": "B"
}, {
      "question": "In computer terminology, what does the acronym 'FTP' stand for?",
      "A": "file transfer protocol",
      "B": "full time portal",
      "C": "full text processor",
      "D": "free to print",
      "answer": "A"
}, {
      "question": "In computer terminology, what does the acronym 'ISP' stand for?",
      "A": "Individual Site Privacy",
      "B": "Investment Stability Plan",
      "C": "Internal Security Position",
      "D": "Internet Service Provider",
      "answer": "D"
}, {
      "question": "In cooking, the term 'au gratin' is sometimes used to describe a dish with what topping?",
      "A": "cheese",
      "B": "fruit",
      "C": "gravy",
      "D": "whipped cream",
      "answer": "A"
}, {
      "question": "In golf, what is one stroke over par called?",
      "A": "eagle",
      "B": "bogey",
      "C": "dormy",
      "D": "birdie",
      "answer": "B"
}, {
      "question": "In Greek mythology, what is the name of Zeus' father?",
      "A": "Apollo",
      "B": "Cronus",
      "C": "Prometheus",
      "D": "Hercules",
      "answer": "B"
}, {
      "question": "In horse racing, what is the term for a wager on the 1st, 2nd and 3rd place finishers in a specific race?",
      "A": "triple action",
      "B": "trifecta",
      "C": "exacta",
      "D": "triple crown",
      "answer": "B"
}, {
      "question": "In ice hockey, which of the following is not a penalty?",
      "A": "hooking",
      "B": "charging",
      "C": "carving",
      "D": "butt-ending",
      "answer": "C"
}, {
      "question": "In Mister Rogers' theme song, what does he ask you to be?",
      "A": "his cook",
      "B": "his student",
      "C": "his neighbor",
      "D": "all you can be",
      "answer": "C"
}, {
      "question": "In mobster lingo, if you 'sing like a canary' what are you doing?",
      "A": "impersonating Sinatra",
      "B": "talking to the cops",
      "C": "killing an enemy",
      "D": "betting on horses",
      "answer": "B"
}, {
      "question": "In soccer, which player is allowed to use his or her hands in the field of play?",
      "A": "midfielder",
      "B": "center",
      "C": "sweeper",
      "D": "goalkeeper",
      "answer": "D"
}, {
      "question": "In the 1960s 'Batman' TV series, who was not a guest villain?",
      "A": "The Minstrel",
      "B": "The Archer",
      "C": "The Bookworm",
      "D": "The Squeegee Guy",
      "answer": "D"
}, {
      "question": "In the 1976 remake of the classic film 'King Kong' what New York landmark does the giant ape climb?",
      "A": "Statue of Liberty",
      "B": "Empire State Building",
      "C": "World Trade Center",
      "D": "Chrysler Building",
      "answer": "C"
}, {
      "question": "In the 1992 animated film 'Aladdin' what device does the hero use to travel from place to place?",
      "A": "talking car",
      "B": "winged horse",
      "C": "magic carpet",
      "D": "hot air balloon",
      "answer": "C"
}]
const Questions_3 = [{
      "question": "As of 1999, which state has the most Girl Scouts?",
      "A": "California",
      "B": "Illinois",
      "C": "New York",
      "D": "Pennsylvania",
      "answer": "A"
}, {
      "question": "Astronaut John Glenn served as a pilot in what branch of the military?",
      "A": "Army",
      "B": "Air Force",
      "C": "Marines",
      "D": "Navy",
      "answer": "C"
}, {
      "question": "At the equator, how fast is the earth's surface turning?",
      "A": "about 100 miles per hour",
      "B": "about 500 miles per hour",
      "C": "about 1000 miles per hour",
      "D": "about 2000 miles per hour",
      "answer": "C"
}, {
      "question": "At what age can someone first attend an R-rated movie without an accompanying adult?",
      "A": "15",
      "B": "17",
      "C": "18",
      "D": "21",
      "answer": "C"
}, {
      "question": "Backgammon is a how many player game?",
      "A": "Two",
      "B": "Three",
      "C": "Four",
      "D": "Six",
      "answer": "A"
}, {
      "question": "Before he went into coaching, Phil Jackson played for which of the following NBA teams?",
      "A": "Boston Celtics",
      "B": "Los Angeles Lakers",
      "C": "New York Knicks",
      "D": "Philadelphia 76ers",
      "answer": "C"
}, {
      "question": "By what name is Bob Keeshan better known?",
      "A": "Bozo the Clown",
      "B": "Pee Wee Herman",
      "C": "Captain Kangaroo",
      "D": "Buffalo Bob",
      "answer": "C"
}, {
      "question": "By what collective name do Christians refer to God the Father, God the Son and the Holy Ghost?",
      "A": "the Trio",
      "B": "the Troika",
      "C": "the Triumvirate",
      "D": "the Trinity",
      "answer": "D"
}, {
      "question": "By what nickname is the Federal National Mortgage Association known?",
      "A": "Morty",
      "B": "FEMA",
      "C": "Freddie Mac",
      "D": "Fannie Mae",
      "answer": "D"
}, {
      "question": "Cheddar cheese got its name from a village in what country?",
      "A": "England",
      "B": "France",
      "C": "Switzerland",
      "D": "Denmark",
      "answer": "A"
}, {
      "question": "Cheese is a necessary ingredient in which of these dishes?",
      "A": "sushi",
      "B": "french fries",
      "C": "veal parmigiano",
      "D": "chicken pot pie",
      "answer": "C"
}, {
      "question": "During what war did Francis Scott Key write the words to 'The Star-Spangled Banner'?",
      "A": "American Revolution",
      "B": "War of 1812",
      "C": "Civil War",
      "D": "World War I",
      "answer": "B"
}, {
      "question": "During which war did US troops fight the Battle of New Orleans?",
      "A": "American Revolution",
      "B": "Civil War",
      "C": "Mexican War",
      "D": "War of 1812",
      "answer": "D"
}, {
      "question": "Each year in pro baseball, the player voted as the best fielder at his position wins what?",
      "A": "a brand new car",
      "B": "the Gold Glove",
      "C": "the Silver Bat",
      "D": "the Brass Baseball",
      "answer": "B"
}, {
      "question": "Elephant tusks are made of what material?",
      "A": "coral",
      "B": "ivory",
      "C": "bone",
      "D": "calcium",
      "answer": "B"
}, {
      "question": "Excluding wisdom teeth, how many adult teeth do humans have?",
      "A": "28",
      "B": "32",
      "C": "35",
      "D": "40",
      "answer": "A"
}, {
      "question": "For a man and woman on a date, 'dutch treat' means what?",
      "A": "the man pays",
      "B": "the woman pays",
      "C": "the Dutch pay",
      "D": "each pays their own way",
      "answer": "D"
}, {
      "question": "For what purpose would you use an awl?",
      "A": "to shoot ducks",
      "B": "to polish floors",
      "C": "to make holes",
      "D": "to weigh fruit",
      "answer": "C"
}, {
      "question": "From 1971 to 1997, the Democratic Republic of Congo was known as what?",
      "A": "Zaire",
      "B": "Angola",
      "C": "Rhodesia",
      "D": "Belgian Congo",
      "answer": "A"
}, {
      "question": "From what language does the term 'R.S.V.P.' originate?",
      "A": "Russian",
      "B": "Italian",
      "C": "Portuguese",
      "D": "French",
      "answer": "D"
}, {
      "question": "From whom does the Lutheran Church get its name?",
      "A": "Martin Luther King Jr",
      "B": "Martin Luther",
      "C": "Luther Vandross",
      "D": "Lex Luthor",
      "answer": "B"
}, {
      "question": "Gerry Adams is the president of what organization?",
      "A": "Greenpeace",
      "B": "NASCAR",
      "C": "Sinn Fein",
      "D": "PLO",
      "answer": "C"
}, {
      "question": "Girls of what religious community traditionally wear bonnets?",
      "A": "Amish",
      "B": "Sikh",
      "C": "Roman Catholic",
      "D": "Christian",
      "answer": "A"
}, {
      "question": "How are actors Charlie Sheen and Emilio Estevez related?",
      "A": "they're cousins",
      "B": "they're brothers",
      "C": "they're father and son",
      "D": "they're uncle and nephew",
      "answer": "B"
}, {
      "question": "How do you express 3/4 as a decimal?",
      "A": ".25",
      "B": ".50",
      "C": ".75",
      "D": ".90",
      "answer": "C"
}, {
      "question": "How is 4:00 pm expressed in military time?",
      "A": "1600",
      "B": "004",
      "C": "0400 ",
      "D": "4:00",
      "answer": "A"
}, {
      "question": "How is the Arabic numeral for '2' written?",
      "A": "2",
      "B": "II",
      "C": "I",
      "D": "ii",
      "answer": "A"
}, {
      "question": "How is the word 'ambulance' normally written on the front of American ambulances?",
      "A": "in French",
      "B": "in reverse",
      "C": "in braille",
      "D": "in gibberish",
      "answer": "B"
}, {
      "question": "How long is a single term in the US Senate?",
      "A": "two years",
      "B": "four years",
      "C": "six years",
      "D": "eight years",
      "answer": "C"
}, {
      "question": "How long is the time on an NBA shot clock?",
      "A": "18 seconds",
      "B": "24 seconds",
      "C": "30 seconds",
      "D": "35 seconds",
      "answer": "B"
}, {
      "question": "How many $100 bills does it take to equal one million dollars?",
      "A": "one thousand",
      "B": "five thousand",
      "C": "ten thousand",
      "D": "one hundred thousand",
      "answer": "C"
}, {
      "question": "How many axles does a standard automobile have?",
      "A": "one",
      "B": "two",
      "C": "four",
      "D": "eight",
      "answer": "B"
}, {
      "question": "How many digits are in a standard Visa credit card number?",
      "A": "12",
      "B": "15",
      "C": "16",
      "D": "20",
      "answer": "C"
}, {
      "question": "How many eyes does a Giraffe have?",
      "A": "one",
      "B": "two",
      "C": "three",
      "D": "four",
      "answer": "B"
}, {
      "question": "How many innings are there in a regular Major League Baseball game?",
      "A": "seven",
      "B": "eight",
      "C": "nine",
      "D": "ten",
      "answer": "C"
}, {
      "question": "How many keys are on a standard piano?",
      "A": "20",
      "B": "54",
      "C": "88",
      "D": "100",
      "answer": "C"
}, {
      "question": "How many men has actress Elizabeth Taylor been divorced from?",
      "A": "five",
      "B": "six",
      "C": "seven",
      "D": "eight",
      "answer": "C"
}, {
      "question": "How many ounces are in a pound?",
      "A": "4",
      "B": "12",
      "C": "16",
      "D": "32",
      "answer": "C"
}, {
      "question": "How many periods are there in an ice hockey game?",
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four",
      "answer": "C"
}, {
      "question": "How many quarts are there in a gallon?",
      "A": "one",
      "B": "two",
      "C": "three",
      "D": "four",
      "answer": "D"
}, {
      "question": "How many ribs are there in the human body?",
      "A": "18",
      "B": "24",
      "C": "30",
      "D": "42",
      "answer": "B"
}, {
      "question": "How many ships did Columbus set sail with on his initial voyage to the New World?",
      "A": "Two",
      "B": "Three",
      "C": "Five",
      "D": "Ten",
      "answer": "B"
}, {
      "question": "How many spikes are on the Statue of Liberty's crown?",
      "A": "five",
      "B": "seven",
      "C": "nine",
      "D": "thirteen",
      "answer": "B"
}, {
      "question": "How many stars are on the American flag?",
      "A": "13",
      "B": "48",
      "C": "50",
      "D": "51",
      "answer": "C"
}, {
      "question": "How many states were in the Confederate States of America?",
      "A": "11",
      "B": "13",
      "C": "16",
      "D": "22",
      "answer": "A"
}, {
      "question": "How much does Peanuts character Lucy charge for her psychiatric advice?",
      "A": "5 cents",
      "B": "10 cents",
      "C": "75 cents",
      "D": "$125",
      "answer": "A"
}, {
      "question": "How long is Hanukkah?",
      "A": "one day",
      "B": "five days",
      "C": "eight days",
      "D": "two weeks",
      "answer": "C"
}, {
      "question": "Huffy, Schwinn and Raleigh are all brands of what?",
      "A": "sportswear",
      "B": "dishwashers",
      "C": "cigarettes",
      "D": "bicycles",
      "answer": "D"
}, {
      "question": "If a business files under Chapter 11 what is it doing?",
      "A": "declaring bankruptcy",
      "B": "selling stock",
      "C": "buying a smaller",
      "D": "company suing the government",
      "answer": "A"
}, {
      "question": "If a piece of music is in 'common time' how many quarter notes are there per measure?",
      "A": "one",
      "B": "four",
      "C": "five",
      "D": "ten",
      "answer": "B"
}, {
      "question": "If a ring has the number 925 stamped into it, it is most likely made of what material?",
      "A": "platinum",
      "B": "gold",
      "C": "steel",
      "D": "silver",
      "answer": "D"
}, {
      "question": "If Christmas Day is on a Saturday, then the following New Year's Day falls on what day of the week?",
      "A": "Sunday",
      "B": "Monday",
      "C": "Friday",
      "D": "Saturday",
      "answer": "D"
}]
let deg = 366
let num = 60;
let answerSheet = []
let intervalId;
answerSheet = JSON.parse(localStorage.getItem('answerPDF')) || []
const options = document.querySelectorAll('.options');
const questionId = document.querySelector('#questionId');
const timer = document.querySelector('#timing');
const prev = document.querySelector('#prev');
const completed = document.querySelector('#completed');
const outer = document.querySelector('.outer');
const nxtbtn = document.querySelector('.next-btn');
const prompt = document.querySelector('.prompt');
const cont = document.querySelector('.container');
const labels = document.querySelectorAll('label');
let question = document.querySelector('#question');
let questionNum = 0;


// WHENEVER WINDOWS LOAD 

    question.innerHTML = Questions[questionNum].question
completed.innerHTML = `${questionNum+1}/${Questions.length}`
options.forEach((opt, ind) => {
   opt.firstElementChild.innerHTML =
      ind === 0 ? Questions[questionNum]["A"] :
      ind === 1 ? Questions[questionNum]["B"] :
      ind === 2 ? Questions[questionNum]["C"] :
      ind === 3 ? Questions[questionNum]["D"] : "L"

});
    console.log("Window has fully loaded.");



// CHECK IF THE OPTION JS IS SELECTED AND VISIBLE THE OPTION 
answerSheet.forEach(e => {

      if (e["QuestionId"] === questionId.innerHTML.split(' ')[1]) {
         
         options.forEach((opt, ind) => {
            if (opt.childNodes[2].value === e["Option"]) {
               stopInterval();
               opt.style.backgroundColor = '#E9DAFF';
               opt.lastElementChild.style.backgroundColor = '#C199FF';
               
            }
         });
         
         
      }
   });
   
   // NEXT BUTTON FOR SWITING QUESTIONS TO NEXT
nxtbtn.addEventListener('click', function() {
  restartInterval();
  console.log(questionId.innerHTML)
   
   
  outer.style.background = `conic-gradient(#C199FF 360deg, #ededed 0deg)`;
        deg = 366;
        num = 60
  timer.innerHTML = num;
   questionNum++
   questionId.innerHTML = `Q.NO ${questionNum+1}`
  if(questionId.innerHTML.split(' ')[1] == Questions.length){
     alert(`the Quiz will be submitted 
     automatically after last question`);
  }
if(questionId.innerHTML.split(' ')[1] >= Questions.length+1){
 
   window.location.href = "submit.html"
}
   completed.innerHTML = `${questionNum+1}/${Questions.length}`
   question.innerHTML = Questions[questionNum].question
   options.forEach((opt, ind) => {
      opt.firstElementChild.innerHTML =
         ind === 0 ? Questions[questionNum]["A"] :
         ind === 1 ? Questions[questionNum]["B"] :
         ind === 2 ? Questions[questionNum]["C"] :
         ind === 3 ? Questions[questionNum]["D"] : "L"
      options.forEach(opt => {
         opt.style.backgroundColor = '#fff';
         opt.lastElementChild.style.backgroundColor = '#fff';
      })
   });
   
   // CHECK IF OPTIONS IS PRE-SELECTED 
   answerSheet.forEach(e => {

      if (e["QuestionId"] === questionId.innerHTML.split(' ')[1]) {
       
     stopInterval();

         options.forEach((opt, ind) => {  

            if (opt.childNodes[2].value === e["Option"]) {
               opt.style.backgroundColor = '#E9DAFF';
               opt.lastElementChild.style.backgroundColor = '#C199FF';
            }
         })
      }
   })
   //console.log(questionId.innerHTML.split(' ')[1])
  // console.log(Questions.length-100)
   

});

   
   // PREV BUTTON FOR SWITING QUESTIONS TO PREV
prev.addEventListener('click', function() {
  restartInterval();
   //  SET TIMER TO PRELOADED 
  outer.style.background = `conic-gradient(#C199FF 360deg, #ededed 0deg)`;
        deg = 366;
        num = 60
  timer.innerHTML = num;

   if (questionNum) {
      console.log(questionNum)
      questionNum = questionNum - 1;
   }
   else {
      alert("Don't press previous")
   }
   questionId.innerHTML = `Q.NO ${questionNum+1}`
   completed.innerHTML = `${questionNum+1}/${Questions.length}`
   question.innerHTML = Questions[questionNum].question
   options.forEach((opt, ind) => {
      opt.firstElementChild.innerHTML =
         ind === 0 ? Questions[questionNum]["A"] :
         ind === 1 ? Questions[questionNum]["B"] :
         ind === 2 ? Questions[questionNum]["C"] :
         ind === 3 ? Questions[questionNum]["D"] : "L"
      options.forEach(opt => {
         opt.style.backgroundColor = '#fff';
         opt.lastElementChild.style.backgroundColor = '#fff';
      })
   });
   
   // CHECK IF OPTION IS PRE-SELECTED 
answerSheet.forEach(e => {

      if (e["QuestionId"] === questionId.innerHTML.split(' ')[1]) {
       stopInterval();
         options.forEach((opt, ind) => {

            if (opt.childNodes[2].value === e["Option"]) {
               opt.style.backgroundColor = '#E9DAFF';
               opt.lastElementChild.style.backgroundColor = '#C199FF';
            }
         });
      }
   });
});


// OPTION  CLICKED AND SEND TO LOCAL STORAGE AND VISIBLE 
options.forEach((opt, ind) => {
   opt.addEventListener('click', function() {
      options.forEach(opt => {
         stopInterval();
         opt.style.backgroundColor = '#fff';
         opt.lastElementChild.style.backgroundColor = '#fff';
      })
      opt.style.backgroundColor = '#E9DAFF';
      opt.lastElementChild.style.backgroundColor = '#C199FF';
      // console.log(opt)
      // labels.forEach(lbl => {
      //    console.log(lbl)
      //     lbl.parentElement.style.backgroundColor = '#fff';
      //         lbl.style.backgroundColor = '#fff';
      //        });
      //    labels.parentElement.style.backgroundColor = '#A0CFFF';
      //   labels.style.backgroundColor = '#2C4B6B';

      function sendData(questionId, option) {
         this.QuestionId = questionId;
         this.Option = option;
      }
      let data = new sendData(questionId.innerHTML.split(' ')[1], opt.childNodes[2].value)
      answerSheet.push(data)

// CHECK FOR DUPLICATE AND REPLACE WITH NEW SELECTED 
      if (answerSheet.length !== 0) {
         answerSheet = answerSheet.filter(e => {
            console.log(e["QuestionId"] + "QuestionId")
            return e.QuestionId !== questionId.innerHTML.split(' ')[1]

         })
      }
      answerSheet.push(data)
   //SEND DATA TO LOCAL STORAGE 
      localStorage.setItem('answerPDF', JSON.stringify(answerSheet));
   });
});



// Timer functions 








// Function to re-start the interval
 
startInterval();
function playAgin(){
   prompt.style.display = "none";
   deg = 366;
num = 60;
answerSheet = [];
localStorage.removeItem('answerPDF');
questionNum = 0;
   questionId.innerHTML = `Q.NO ${questionNum+1}`
question.innerHTML = Questions[questionNum].question
completed.innerHTML = `${questionNum+1}/${Questions.length}`
options.forEach((opt, ind) => {
   opt.firstElementChild.innerHTML =
      ind === 0 ? Questions[questionNum]["A"] :
      ind === 1 ? Questions[questionNum]["B"] :
      ind === 2 ? Questions[questionNum]["C"] :
      ind === 3 ? Questions[questionNum]["D"] : "L"

});
restartInterval();

}



// Function to start the interval
function startInterval() {
    intervalId = setInterval(function updateTimer() {
   outer.style.background = `conic-gradient(#C199FF ${deg - 6}deg, #ededed 0deg)`;
   deg -= 6;

   if (num > 0) {
      timer.innerHTML = num;
      num -= 1;
   } else {
      clearInterval();
      prompt.style.display = "flex";
      prompt.style.top = "200px";
      // cont.style.backgroundColor = '#A0CFFF';
   }
}, 1000)
}

// Function to stop the interval
function stopInterval() {
    clearInterval(intervalId);
}

// Function to restart the interval
function restartInterval() {
    stopInterval(); // Stop the existing interval
    startInterval(); // Start a new interval
}

// Start the interval for the first time

function resetLocal(){
   localStorage.removeItem('answerPDF');
}
