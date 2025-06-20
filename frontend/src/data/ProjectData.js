export const projectDict = {
    "liaohblsgg7xgw4e1d46ogea": {
        index: 0,
        projectID: "liaohblsgg7xgw4e1d46ogea",
        public: true,
        name: "TCG Maker",
        logo: require("../images/project-logos/tcg-maker-logo.png"),
        logoAlt: "trading card game maker",
        version: "v0.0.0-alpha",
        abstract: "TCG Maker is a website that allows users to prototype their own trading card games, by providing them a single platform that allows them to create, customize, and play their own creations. Unlike current platforms that focus on pre-existing games and intellectual properties, this site provides a highly flexible rule construction system that enables both professionals and hobbyists alike with the creative freedom to design their own rulesets and to craft unique cards. As such, users are not only capable of creating the aesthetic elements of their games, but are also able to play and prototype the actual rules themselves.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/online-tcg-maker"]
        ],
        relatedProjects: [
            "c91f92cj77yo7nv5t5vyg761"
        ],
        skills: [
            "Prototyping Tool Development",
            "Game Development",
            "Game AI",
            "UI/UX Design",
            "Web Development",
            "Frontend",
            "Backend",
            "Fullstack",
            "Databases",
            "Procedural Generation"
        ],
        languages: [
            "HTML",
            "CSS",
            "Javascript",
            "Java",
            "SQL"
        ],
        technologies: [
            "React",
            "Next.js",
            "Spring",
            "MySQL",
            "VS Code",
            "Git"
        ],
        description: [
            "Today, the trading card game ecosystem has expanded beyond its simple beginnings, and brings with it various formats to play with. Each may have their own unique rules and interactions, but they each borrow heavily from the foundation that was set by Magic: the Gathering. There are activation costs, attack values, defense/health values, permanents, temporaries, various card types, and much more. However, even with all of this variety in gameplay formats, this same trading card game ecosystem is still dominated by a few large intellectual properties, such as Magic: the Gathering, Pokémon, and Yu-Gi-Oh. This mostly comes down to the difficulty with which it takes to enter into this ecosystem. The main culprit for this being the lack of digital tools that are currently available, which severely limit what users are capable of achieving when it comes to crafting their own desired games. As such, these difficulties restrict players to only experiencing narrow card pools, restricted gameplay, predetermined lore, and limits on creativity. There has not yet been a digital tool that allows for users to easily craft, prototype, share their own games, and do so with limited restrictions. If such a tool existed, it would make it much easier for new trading card games to establish success within the ecosystem.",
            "As such, the TCG Maker project serves as an initial prototype for a step in this direction. Overall, it is aesthetically very simple, but provides a quality amount of depth that demonstrates the possible promise of the platform. It is both web-based and account-based, allowing for secure access from anywhere and everywhere. Additionally, the platform currently provides enough depth for the user in order to permit them the creative freedom to design their own rulesets, craft unique cards, and play their own creations.",
            "When first visiting the website, a user will be greeted by the Welcome page. On this page, the user is provided two options: they can either log in to the site using an existing account, or they can create a new account. Upon successfully logging in, the user will be redirected to the Portal page, which acts as the root of the platform’s ecosystem. On this page, the user has access to the My Games page via a button, where they can edit their own games. Below this, they can then see two rows of games. The Library row allows a user to play their own games, while the Discover row allows a user to play the games of other users.",
            "Let us assume that this prospective user will click on the My Games button, and land on the My Games page. Here, a user will see a list of their games, with each game displaying the game icon, the game name, the player count, the favorite count, a quick toggle for publishing/unpublishing their game, and a quick button to delete their game. At the top of the page is also a Create button, which will display an overlay for entering a name and selecting a template before continuing. Upon creating a new game or choosing to edit an existing one, the user will be redirected to the Workshop Page. On this page, the user is able to edit the details of the game, as well as the ruleset for the game. There are also options to publish/unpublish, delete, save, and view a preview of the Game Overview page from the perspective of other users. From here, a user can also select their cards, and either edit or delete them. If they choose to edit a card, they will be taken to the Edit Card page, where they can then edit the details specific to that game.",
            "Back on the Portal page, if a user selects a game from either the Library or Discover row, they will be redirected to the Game Overview page. Here, users can see all of the details of the game, the cards of the game, and also the ruleset (which has been generated in a prose style based on the attributes of the game itself). From here, they can select the Play button at the top of the screen, which will then take the user to the Play page. On this page, a user can select from three buttons: to battle, check out the game’s collection of cards, and to view the ruleset of the game. Once our hypothetical user has seen all of the cards in the game and checked out the ruleset, they will then choose to battle. On the Battle page, there are options for both Solo (single-player) and Versus (multiplayer) modes. As of right now, multiplayer is not yet available, so let us assume that the player chooses Solo. From here, the user can choose either a random match, or choose to play a campaign. However, similar to multiplayer, campaigns are also not yet available. As such, upon selecting a random match, a player will have a deck constructed for them, which uses basic procedural generation in order to ensure proper card type ratios and a single energy type. The user can then play against an AI opponent, until either they themself or the AI has zero life points remaining, or they have reached the maximum number of turns.",
            "Additionally, even though the scope of the functionality for this project made it improbable to create a production-ready version of the UI/UX  the entire website, the related <rp>c91f92cj77yo7nv5t5vyg761</rp> project does provide a high level of detail that would be expected of the welcome page for the final product. This related project provides greatly improved visuals, a more thorough navigation bar, much improved versions for logging in and signing up, and many more additional features."
        ],
        screenshots: [
            require("../images/screenshots/tcg-maker-0.png"),
            require("../images/screenshots/tcg-maker-1.png"),
            require("../images/screenshots/tcg-maker-2.png"),
            require("../images/screenshots/tcg-maker-3.png"),
            require("../images/screenshots/tcg-maker-4.png")
        ]
    },
    "9i90jyxh4g69r9hdpn3izurz": {
        index: 1,
        projectID: "9i90jyxh4g69r9hdpn3izurz",
        public: true,
        name: "Character Generator",
        logo: require("../images/project-logos/character-generator-logo.png"),
        logoAlt: "character generator",
        version: "v0.0.0-alpha",
        abstract: "The Character Generator project is a website intended to help users break through their writer's block - whether that be as a novelist, screenwriter, game designer, or even a dungeon master. By being able to generate entire descriptions - or only select parts of a description - the user is capable of establishing new elements within a new or existing story. As such, this project is an assistive tool that is able to alleviate some of the pressures on the creative side for many projects.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/character-generator-website"]
        ],
        relatedProjects: [
            "mx02wdoi7vxbvy75t2kk39h1",
            "5s6af8u00z3jnsdmmx02wdoi"
        ],
        skills: [
            "UI/UX Design",
            "Web Development",
            "Frontend",
            "Backend",
            "Fullstack",
            "Procedural Generation"
        ],
        languages: [
            "HTML",
            "CSS",
            "Javascript",
            "Java"
        ],
        technologies: [
            "React",
            "Next.js",
            "Spring",
            "VS Code",
            "Git"
        ],
        description: [
            "Writer's block - and, in extension, creator's block - is all too common an occurence. It doesn't matter if you are a novelist, screenwriter, game designer, or dungeon master - there is always going to be a time where you get stumped. As such, the Character Generator project was created with the intention of overcoming this all-to-common issue. With the assistance of procedural generation, users can quickly brainstorm ideas for either entire characters, or for specific character elements - depending on the user's needs. The information is also written in a prose style, which allows for an easy starting point when building a fuller description. As such, this product can help users with a variety of related tasks.",
            "Additionally, although it may seem much more primitive in many regards as compared to generative AI, there are several advantages that this website has over generative AI. These advantages come from the use of two libraries also found within this portfolio: <rp>mx02wdoi7vxbvy75t2kk39h1</rp> and <rp>5s6af8u00z3jnsdmmx02wdoi</rp>. Block Breaker is a library that procedurally generates raw character descriptions and stores them in a node-based system, which can then be exported as a JSON. The Language Constructor library then allows for the procedural generation of text based on a given set of data, with these interpretations allowing a certain level of control by the user. As such, the data generated by Block Breaker ensures that there is no accidental erasure - a very common issue with generative AI - while the Language Constructor library allows for bespoke control over how that information is interpreted. These libraries thus also allow us to scale the project much more safely as compared to generative AI, especially when features allowing for individual characteristics to be regenerated are eventually added.",
            "Overall, the website has a very simple UI design using a React frontend. Users are greeted by a welcome page that has a quick explanation of the website, and a button to generate a character description. Once the button is pressed, they will be moved to the generation page, where the character description will be displayed. Here, the user is able to perform a variety of functions. The first is that they can regenerate an entirely new character description. Secondly, they can also hide/show specific characteristics of the description. Then, in the top-right corner, there is a row containing a couple of additional buttons. The first of these buttons allows for users to download the description in either text, JSON, or spreadsheet format, while the second button allows the user to look at a quick guide for using the website. On the backend, Spring is then used, as it is Java-based and integrates seamlessly with both the Block Breaker and Language Constructor libraries."
        ],
        screenshots: [
            require("../images/screenshots/character-generator-0.png"),
            require("../images/screenshots/character-generator-1.png"),
            require("../images/screenshots/character-generator-2.png"),
            require("../images/screenshots/character-generator-3.png"),
            require("../images/screenshots/character-generator-4.png")
        ]
    },
    "ecs7ospx0apqw3zkv8mzvoag": {
        index: 2,
        projectID: "ecs7ospx0apqw3zkv8mzvoag",
        public: true,
        name: "Celtic Tactics - Game Website",
        logo: require("../images/project-logos/celtic-tactics-logo.png"),
        logoAlt: "celtic tactics game website",
        version: "v0.0.0-alpha",
        abstract: "The Game Website for Celtic Tactics is an attempt at representing a production-ready version of the landing page for the Celtics Tactics video game - which is also contained inside of this portfolio. As such, it is meant as a means of quickly providing quality information to the user in an engaging manner, and to then entice the user into purchasing the video game. A huge focus was placed onto the Celtic-styled aesthetic of the webpage, with the webpage itself also providing everything from a video and screenshots to links for soundtracks and merchandise.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/celtic-tactics-website"]
        ],
        relatedProjects: [
            "nl1gx1y68jxy5c8t3gu84wip"
        ],
        skills: [
            "UI/UX Design",
            "Web Development",
            "Frontend"
        ],
        languages: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        technologies: [
            "React",
            "Next.js",
            "VS Code",
            "Git"
        ],
        description: [
            "The Game Website for Celtic Tactics is a fully-crafted landing page that uses mockup images to represent a hypothetical end result product for the <rp>nl1gx1y68jxy5c8t3gu84wip</rp> project - which can also be found inside of this portfolio. As such, it is used to demonstrate my skills at crafting a landing page for a product, and ensuring that all vital information is presented well, and in an engaging manner. As such, a lot of effort went into ensuring an appropriate aesthetic, with the majority of the information appearing to take place on a medieval manuscript that has marginalia text and images on the edges - similar to those found on actual medieval manuscripts. Additionally, while no other pages currently exist for the website, this was intentional so that the focus would be on my abilities of crafting a singular highly-detailed webpage. Not only that, but a landing page was chosen in particular, due to its importance of engaging users and drawing them into the product. Thus, a lot of information has to be presented in an engaging and simplified manner.",
            "Upon opening the landing page, the entire screen is taken up by a singular image, with Celtic warriors on the left, and monsters on the right. As such, it quickly demonstrates the main struggle in the game: a battle between humans and monsters. Additionally, between them is the title text for the game. Of critical importance is how this main image and title text were set up. Due to various screen and window sizes, it was important to ensure that the title text was always centered on the screen, while the main image always took up the entire width and length. As such, not only does the main image adjust in size, but also only shows a limited scope of the image in order to maintain the intended effect - all while keeping it centered. Additionally, the main image and title text were also kept separate, as well, in order to maintain this effect.",
            "At the top of the landing page is also a navigation bar, with buttons that hypothetically link to other pages. Each of these links will glow green when hovered over - with the color green being chosen due to the Celtic aesthetic. Additionally, the game's logo is placed at the center of the navigation bar in order to center the game's imagery. Finally, the background color of the navigation bar is partially transparent, which allows for part of the main image to still be seen behind it - and thus fulfilling the visual effect of the main image taking up the entire screen. If one has not yet scrolled, they will also notice a different bar at the bottom of the screen, which provides buttons that link to various purchase options for the game. Similar to the navigation bar, the background color is partially transparent, and its button options also glow green when hovered over in order to maintain the same aesthetic throughout.",
            "If one begins to scroll down, a few important aspects can be noticed. Firstly, once the navigation bar is no longer visible, a button appears in the bottom-right corner of the screen. Due to the length of this particular screen, the button was added so that the user can quickly move back to the top of the screen at any point - particularly if they wish to use the navigation bar. However, why not keep the navigation bar always placed at the top of the screen, then? Well, if one would scroll down just a little further until when the purchase options bar would no longer be visible, it would be noticed that the bar with the purchase options will now always stay at the top of the screen. This is because we want the user - if they like what they see of the product - to be able to easily purchase the game for the system of their own choosing. Since the end result for the website is the user purchasing a copy of the game, I felt it was important to make performing this action as easy as possible. Finally, when starting to scroll, you will first notice a decorative border below the main image, and then the appearance of the main portion of the landing page, which appears as if to be on a manuscript. As such, we have a clear distinction between initial imagery and the information section of the landing page.",
            "This information section then provides a variety of details about the game that have been given in a specific order as to maximize engagement. With video content providing the greatest level of engagement, it was placed at the top of this information section (note that the video is a mockup, and does not play an actual video). Next, we see a features section that describes what a player can expect from this game. The features section also ensures that not too much information is displayed at once by having an arc with icons that trigger which specific feature's information is displayed. Finally, this is followed up by screenshots, a newsletter subscription, soundtrack, a store link, and page footer."
        ],
        screenshots: [
            require("../images/screenshots/celtic-tactics-game-website-0.png"),
            require("../images/screenshots/celtic-tactics-game-website-1.png"),
            require("../images/screenshots/celtic-tactics-game-website-2.png"),
            require("../images/screenshots/celtic-tactics-game-website-3.png"),
            require("../images/screenshots/celtic-tactics-game-website-4.png")
        ]
    },
    "porhch2bbmoqk2c7wklzjmw3": {
        index: 3,
        projectID: "porhch2bbmoqk2c7wklzjmw3",
        public: true,
        name: "PTCGP Simulator",
        logo: require("../images/project-logos/ptcgp-sim-logo.png"),
        logoAlt: "pokemon trading card game simulator",
        version: "v0.0.0-alpha",
        abstract: "PTCGP Simulator is a program intended to simulate the number of packs required to obtain all standard cards for each expansion in the Pokémon Trading Card Game Pocket video game. It does so by allowing the user to control various factors: the specific expansion to be simulated, the number of simulations to be made for a given set, whether or not to use Pack Points, and whether or not to use Wonder Picks. Upon completion of a set of simulations, the user is then able to see results as it relates to the completion milestones for the specified expansion.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/ptcgp-simulator"]
        ],
        relatedProjects: [
            "gfj838t22dfhct3ynbcraenu"
        ],
        skills: [
            "Simulators"
        ],
        languages: [
            "Java"
        ],
        technologies: [
            "IntelliJ",
            "Git"
        ],
        description: [
            "Pokemon Trading Card Game Pocket is a mobile video game centered around collecting and battling using trading cards that represent monsters, trainers, and more within the Pokemon universe. Due to the nature of this game, most users will attempt to collect all of the cards that the game has to offer. However, for games of this style, there is a consistent trend: new cards are initially easy to obtain, but become harder and harder to obtain as you obtain more of them. This is simply due to the fact that you are more likely to obtain duplicates as you open more packs, and less likely to obtain new cards. This means that your rate of obtaining new cards is not linear, but rather polynomial. Add in the use of other systems to obtain cards other than packs (i.e., Pack Points, Wonder Picks, and trading), and it becomes much more difficult to determine the range of standard expectation for obtaining all of the cards in any given expansion.",
            "As such, I created a simulator to help determine the standard range of expectation for obtaining all cards within any given expansion - with all current expansions available to be simulated. The simulator allows you to run individual simulations that only use only packs, but also allows you to opt into using optimized strategies for both Pack Points and Wonder Picks within the simulations, as well. The user may also select how many individual simulations to run for a given set. Once a set of simulations has completed running, the user is provided data for the 5th, 50th, and 95th percentiles for obtaining all cards of each rarity, as well as the same 5th, 50th, and 95th percentiles for obtaining a given percentage of a collection (done in increments of 10%). These percentiles are each represented as packs having been opened, as this is the base means of obtaining cards, while Pack Points and Wonder Picks are meant as assistive means. As with any simulator, there is bound to be slight deviations from one set of simulations to another. However, at 100,000 simulations per set, those deviations are within 1 pack of each other. As such, the results of these simulations are very consistent between individually run sets.",
            "Overall, the results obtained from these simulations are helpful both from an end user perspective, and from a business perspective. For the user, it helps to understand just how obtainable the cards within the game are, and thus helps to set realistic expectations based on a player's monetary category (free-to-play, Premium Pass-only, dolphin, whale, etc.). Conversely, from a business perspective, such simulations are important to determine where the sweet spot is for balancing enjoyment of the users with profitability - and thus ensuring user retention. Each of these can thus relate to the ethics of the game, and are discussed more fully in the <rp>gfj838t22dfhct3ynbcraenu</rp> project, where I analyzed the results of the simulations."
        ],
        screenshots: [
            require("../images/screenshots/ptcgp-simulator-0.png"),
            require("../images/screenshots/ptcgp-simulator-1.png"),
            require("../images/screenshots/ptcgp-simulator-2.png"),
            require("../images/screenshots/ptcgp-simulator-3.png"),
            require("../images/screenshots/ptcgp-simulator-4.png")
        ]
    },
    "ku907nk45s6af8u00z3jnsdm": {
        index: 4,
        projectID: "ku907nk45s6af8u00z3jnsdm",
        public: true,
        name: "Koala Toolkit",
        logo: require("../images/project-logos/koala-toolkit-logo.png"),
        logoAlt: "koala toolkit",
        version: "v0.0.0-alpha",
        abstract: "The Koala Toolkit is a game development toolkit intended for use on Android and iOS. Users are able to create projects, either as empty templates or based on one of the pre-made templates. In each project, users are able to create combat moves such as attacks or support moves, as well as create combat units who can be given their own attributes and a list of combat moves to use. Users are also able to download each project either as a spreadsheet, JSON, or as code files - with the currently supported languages being C#, Python, Java, and Dart.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/koala-toolkit"]
        ],
        relatedProjects: [],
        skills: [
            "Mobile App Development",
            "Dev Tool Development",
            "UI/UX Design",
            "Databases"
        ],
        languages: [
            "Dart",
            "SQL"
        ],
        technologies: [
            "Flutter",
            "Git"
        ],
        description: [
            "When creating video games, characters are very central to both the atmosphere and the gameplay. As such, there are often multiple teams - from creatives to programmers - working on various aspects of the actual characters. Because of this division of labor within game studios, it is therefore important that these separate teams are able to communicate and share updated aspects of characters. This often comes in the form of spreadsheets - especially for indie studios. However, even though spreadsheets help to store and collaborate on information, as these spreadsheets grow, they can often become hard to navigate. Not only that, but - for programmers - it is often excruciatingly difficult to switch from one coding language to another after starting the process of coding a game. As such, a team can become locked into a given language, with no means of being able to transition to another once a team has made too large of a programming investment.",
            "In response to this, the Koala Toolkit was created as a stand-alone mobile app designed using the Flutter development platform, and is intended to help in the creation of characters and their movesets in video games. To do this, the Koala Toolkit platform attempts to solve the two previously described problems within one app. Firstly, it removes the need for extensive spreadsheets, by replacing them with an intuitive UI/UX. This allows the data to easily be editable and maintainable through the app, while also scaling to the specific needs of the user. Secondly, in order to address the problems with transitioning programming languages, the Koala Toolkit can be used in order to auto-generate code files for the user related to the core character data. As such, even if other parts outside of character creation still need to be rewritten, the core code for characters is just a few clicks away.",
            "As to the flow of the app itself, upon using the app, a user must first create a project - either as an empty template, or based on one of the pre-made templates (high fantasy, sci-fi, western, etc.). This project will then hold together all related characters and movesets. Inside of each project, users are then able to create combat moves, such as attacks or support moves. They are given a variety of ways in which they can customize the moves, as well as being capable of adding a description. Additionally, users are also able to create characters, who can be given their own attributes and descriptions, along with any combat moves that have already been created within the project. Finally, as necessary, users may be able to download the project - or, if needed, only part of the project - in a variety of formats. These include both spreadsheets and JSON files, as well as code files in a variety of languages - such as C#, Python, Java, and Dart."
        ],
        screenshots: [
            require("../images/screenshots/koala-toolkit-0.png"),
            require("../images/screenshots/koala-toolkit-1.png"),
            require("../images/screenshots/koala-toolkit-2.png"),
            require("../images/screenshots/koala-toolkit-3.png"),
            require("../images/screenshots/koala-toolkit-4.png")
        ]
    },
    "iri9r76qdpfi0iqmywcr8308": {
        index: 5,
        projectID: "iri9r76qdpfi0iqmywcr8308",
        public: true,
        name: "Range Data Structures",
        logo: require("../images/project-logos/range-ds-logo.png"),
        logoAlt: "range data structures",
        version: "v0.0.0-alpha",
        abstract: "The Range Data Structures project is a Java library intended to represent ranges of integer-based values - including enums - within Java programs. While possibly appearing simple and frivolous at first glance, the lack of a true range data structure in Java is especially hand-tying for many types of programs, especially those relying heavily on procedural generation. Additionally, those similar libraries that are already available (via Apache and Guava) are insufficient in terms of functionality - lacking necessary methods, and a multi-range class. As such, this library bridges those gaps for any such program that may need the extra complexity that this library provides.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/range-ds"]
        ],
        relatedProjects: [
            "mx02wdoi7vxbvy75t2kk39h1",
            "5s6af8u00z3jnsdmmx02wdoi"
        ],
        skills: [
            "Data Structure Development",
            "Custom Libraries"
        ],
        languages: [
            "Java"
        ],
        technologies: [
            "IntelliJ",
            "Git"
        ],
        description: [
            "While creating projects that relied heavily on procedural generation within the Java-based backend, it became apparent that much of the repeated code could be abstracted out of the existing code and into a specific range-based class. However, when looking for an external library to fulfill the requirements of these specific projects, all of the available options proved to be quite limited in their scope and use cases. In fact, while attempting to build upon these external libraries in order to meet the needs of these projects, the code actually ended up becoming quite convoluted - especially when working with multi-ranges. As such, I set out to craft my own library that streamlined the use of ranges; and, while the original use case for this library was procedural generation, any program working with highly complex RNG could benefit from its use.",
            "The core of the library is focused on the abstract Range class, which has two concrete subclasses of SingleRange and MultiRange - with the MultiRange class being composed of multiple SingleRange instances. By having the abstract Range class, any use cases for a range can be built without having to worry about any conflicts between the two subclasses - whether single or multi. This is because the single and multi-range classes handle the same method calls slightly differently, but the programs using them only need to know that it is a range - a great case of a blackbox. Additionally, when creating a multi-range based on multiple single-ranges, the class constructor will create a union to remove any overlaps that occur - increasing efficiency upon method calls to the instances.",
            "Getting further into the details, it must be understood that in order to create a range, the expected order of elements must be understood. This is because a range truly only has start and end points, and does not store the values in between. As such, there are Orderable and Orderator interfaces to assist with this process, which allow a user to create a custom set of rules of ordering for their own classes. However, having users build their own child classes of Orderable and Orderator would be quite repetitive and frustrating to do with primitive data types, such as integers. As such, there are static factory methods that help to construct ranges for the wrapper classes of primitive data types - as well as for enums. By doing so, a user only has to call the factory method and provide start and end points for the range, without having to create or provide their own Orderator. However, as previously alluded to, creating instances of the Orderator interface will allow you to also use any custom classes within ranges, as well.",
            "As with other data structures, this library allows us to determine the size of the range, the index that a value would be within a range, whether the range contains a specific value, and many more. Additionally, both single and multi-ranges are iterable via the Java standard library Iterable interface. However, it should also be noted that more range-specific methods are also included, such as unions and intersections, along with other various methods such as creating splices of ranges before and after certain values.",
            "A great example of the use of this library is the <rp>mx02wdoi7vxbvy75t2kk39h1</rp> library - also found within this portfolio - which uses procedural generation in order to create the JSON-able details of character descriptions. Another great example is the <rp>5s6af8u00z3jnsdmmx02wdoi</rp> library, which uses the range data structures in order to help generate prose-style descriptions of objects. Due to the extensive amount of factors used for the procedural generation within both projects, dozens of ranges had to be used for each - thus, helping to save an extensive amount of time, and significantly reducing repeated code."
        ],
        screenshots: [
            require("../images/screenshots/range-ds-0.png"),
            require("../images/screenshots/range-ds-1.png"),
            require("../images/screenshots/range-ds-2.png"),
            require("../images/screenshots/range-ds-3.png"),
            require("../images/screenshots/range-ds-4.png")
        ]
    },
    "f0htbt1xaye2aebjv5bcizvf": {
        index: 6,
        projectID: "f0htbt1xaye2aebjv5bcizvf",
        public: true,
        name: "Java Game Engine",
        logo: require("../images/project-logos/java-game-engine-logo.png"),
        logoAlt: "java game engine",
        version: "v0.3.1-alpha",
        abstract: "The Java Game Engine project is an unnamed Java-based video game engine, which allows users to build and play pixel-based video games. Initially starting off as a project intended to handle video games on the backend of web apps that use the Java-based Spring framework, the game engine was eventually expanded to also allow for video games that have been built using the engine to be run locally on a device.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/koala-engine"]
        ],
        relatedProjects: [
            "nl1gx1y68jxy5c8t3gu84wip"
        ],
        skills: [
            "Game Engine Development",
            "Game Development",
            "Custom Libraries"
        ],
        languages: [
            "Java"
        ],
        technologies: [
            "IntelliJ",
            "Git"
        ],
        description: [
            "The game engine presented in this project was personally crafted entirely from the ground up - from the execution of the game loop and the rendering of its graphics, to the UI objects and their interactions. The lone exception to this was the creation of the program window itself, as this was handled by the Java standard library. However, all interactions with this window - as well as rendering and display - were done by the game engine's own code, and not from any other internal or external libraries. Additionally, while still rudimentary, the game engine provides all necessary capabilities needed for a simple game loop, UI system, and game objects.",
            "As such, this project represents a strong example of attempting to understand the game logic that occurs deep behind the scenes of video games, and to then emulate this same logic when crafting the engine. It is a knowledge and understanding that would simply not be possible by only using a readily-available game engine, such as Unreal, Unity, or Godot. As such, my own knowledge of video games was greatly strengthened due to working at the very base of video game production.",
            "The game engine itself is intended to be downloaded as a library, or used as a module that the game is dependent upon. As it currently stands, the development of the engine is still in the earlier stages. However, as previously mentioned, there is still a large amount of depth currently within the project. The interactions take place in Theatres, where the objects placed into them are divided into being either GameObjects or UIObjects - with GameObjects being placed directly into the Theatres themselves, while the UIObjects are overlaid onto the screen. In fact, this separation of GameObject and UIObject objects also makes it much easier to also use the engine purely for its UI elements, such as building an app - with much of the UI design being based on the principles of web design itself.",
            "As an extra aside, it should be noted that the <rp>nl1gx1y68jxy5c8t3gu84wip</rp> project within this portfolio was actually built using this game engine - which, although low in fidelity, has a high level of depth in regards to combat move type, movement types, destruction of the environment, and much more."
        ],
        screenshots: [
            require("../images/screenshots/java-game-engine-0.png"),
            require("../images/screenshots/java-game-engine-1.png"),
            require("../images/screenshots/java-game-engine-2.png"),
            require("../images/screenshots/java-game-engine-3.png"),
            require("../images/screenshots/java-game-engine-4.png")
        ]
    },
    "tqiwpjt0oof5o4cm9lcewomi":{
        index: 7,
        projectID: "tqiwpjt0oof5o4cm9lcewomi",
        public: true,
        name: "Portfolio Website",
        logo: require("../images/project-logos/portfolio-website-logo.png"),
        logoAlt: "portfolio website",
        version: "v0.0.0-alpha",
        abstract: "The Portfolio Website project is the website that you are currently on. It is intended to host all of my public (and partially-public) projects in order to demonstrate my knowledge, aptitude, and skills as a programmer. It contains sorting and filtering for these projects, has an about page with a quick blurb about my background, and also provides an easy means of contacting me via a simple messaging system on the contact page.",
        urls: [
            ["Live Demo", "https://dillinger.dev"],
            ["GitHub", "https://github.com/mpdillingerOSU/portfolio-website"]
        ],
        relatedProjects: [],
        skills: [
            "UI/UX Design",
            "Web Development",
            "Frontend"
        ],
        languages: [
            "CSS",
            "HTML",
            "Javascript"
        ],
        technologies: [
            "React",
            "Next.js",
            "VS Code",
            "Git"
        ],
        description: [
            "A strong portfolio website is important for any programmer, regardless of whether or not they are working on the frontend. Not only is it used to demonstrate one's own skills, knowledge, and aptitudes, but also their work ethos and personality. As such, I have put in considerable time in order to ensure that my website clearly reflects who I am as a programmer - with attention paid to small details, and a cohesive sci-fi-ish aesthetic.",
            "You will note that each of the pages has a navigation bar at the top that is aesthetically simple so as to not intrude upon the actual pages themselves. The navigation bar's use of the same background color as the actual pages makes for a seamless look, which is only broken by a thin blue border. The specific page that you are currently on will also cause its associated navigation button to be lit up on the navigation bar, while the others are darkened. The other navigation buttons will then slightly brighten upon hovering, but not to the level of the button for the current page - so as to maintain the necessary distinction. The pages themselves then each also share a gradient background that goes from near black to a dark very blue. This, especially when paired with the star-like pattern in the background, provides a sort of cosmic feel to each page.",
            "The landing page is simple in order to drive the focus to the featured projects, which are each placed inside of hexagon-shaped containers and then arranged in a honeycomb pattern. The use of only logos for each project here is intended to reduce the appearance of clutter that would come if each project's title was readily available - as well as for other details. However, upon hovering over a featured project, the title of the given project does then become displayed in order to bring focus to it - which is then further aided by other small details, such as a thicker border, a larger logo, and a shift in the background color of the container.",
            "When visiting the projects page via the associated navigation bar button, you will then notice an increase in complexity - with various text, colors, and icons used throughout. This is because each project has a container that contains an overview of the features and characteristics for the given project, as it is important for others to be able to quickly distinguish between these features and characteristics. However, even with that said, an attempt at simplicity is still readily recognizable on this page. For example, each language and technology used by a project is still only represented by a white icon inside of a container that has a color associated with that feature. Those who know the feature will thus be able to quickly recognize it, without being overloaded by text. Additionally, for those who do not recognize the icons, hovering over the icon does create a popup to display the name of the associated feature. A similar attempt at icons was also made regarding the skills used for a given project. However, the lack of universal symbols for most of these would have created issues - and could have also possibly created an icon overload itself - so simplified naming conventions were used, instead. Other than that, the only text found inside of each project container is the title of the project itself. Finally, at the very top of page, the user is presented with a means for sorting and filtering through projects.",
            "If one were to then click on either a featured project from the landing page or a project container from the projects page, you would then be taken to the individual project page for that specific project - with each project having a specific ID that can be found in its URL. Once here, you will notice many of the same details that have already been noted beforehand, with the project title, logo, skills, languages, and technologies all being present - though accompanied by headers. However, in addition to these previous details, there is also an abstract for each project, links to both GitHub repositories and live versions of each project, and a description of the project (such as the one that you have been reading). Each description is then provided as a means for breaking down the most important elements of each project, while also providing some insight into my own thoughts and design process. In the top-left corner of each page is then a button to quickly return to the projects page - even if having come from the landing page, direct link, or otherwise.",
            "The last two pages are then quite simple. The about page provides a quick blurb about my work ethos and background, while also listing all relevant languages and technologies that I am adept at using. As with the other pages, there is an attempt at simplicity. However, because the emphasis is now specifically on my skillset, each language and technology is shown via a larger and more complete logo. Finally, the contact page allows for an easy means of contacting me via a simple message form directly built into the website itself. That being said, if the information is incomplete - or an email is formatted incorrectly - then error messages that have been individualized for each input field will appear upon clicking the submit button. However, in order to maintain the simplified and unassuming aesthetic of the website, the overall appearance of the color red was minimized for warnings, by only having it shown on the left border of the errored field, along with the small red warning icon. Lastly, the submit button was designed in a simple - yet dynamic - manner, by having its underlined appearance shift to a complete background upon hovering over the button."
        ],
        screenshots: [
            require("../images/screenshots/portfolio-website-0.png"),
            require("../images/screenshots/portfolio-website-1.png"),
            require("../images/screenshots/portfolio-website-2.png"),
            require("../images/screenshots/portfolio-website-3.png"),
            require("../images/screenshots/portfolio-website-4.png")
        ]
    },
    "j6yd609g44vvektcqcs5d53z": {
        index: 8,
        projectID: "j6yd609g44vvektcqcs5d53z",
        public: true,
        name: "Top-Down Shooter",
        logo: require("../images/project-logos/top-down-shooter-logo.png"),
        logoAlt: "top-down shooter",
        version: "v0.0.0-alpha",
        abstract: "The Top-Down Shooter project is an unnamed game prototype developed using the Unity Game Engine, which demonstrates gameplay for a shooter videogame from the three-quarters perspective. The prototype has a sci-fi theme and features several weapons variants, such as a rifle, shotgun, and grenade. Additionally, the player's character is also in control of a jetpack that allows for boosting both forwards and upwards, as well as the ability to hover. The prototype itself also has infinite gameplay, with spawning for not only enemies, but also for health packs and ammunition.",
        urls: [
            ["GitHub", "private"]
        ],
        relatedProjects: [],
        skills: [
            "Game Development",
            "Game AI",
            "UI/UX Design",
            "Shaders",
            "3D Modeling"
        ],
        languages: [
            "C#",
            "HLSL"
        ],
        technologies: [
            "Unity",
            "VS",
            "Blender",
            "Git"
        ],
        description: [
            "The Top-Down Shooter project was created in order to demonstrate my skills at programming a video game with the Unity Game Engine. The gameplay for this prototype is centered around being a sci-fi shooter-adventure game that takes on a three-quarters visual perspective - similar to old-school, pixel-based adventure games, such as The Legend of Zelda. A variety of skills were demonstrated in this project, with a heavy emphasis placed on creating multi-layered systems for both combat and movement - which will be detailed further below. Additionally, because the focus of the prototype is on these programming skills, then most of the graphics are very simple - though I did use Blender in order to provide some of the objects with greater visual detail.",
            "The combat system is focused around the use of multiple ranged weapons, along with the use of a short-ranged melee weapon. The ranged weapons come in a variety of types, such as a rifle, shotgun, and grenade - each with their own use cases, and each with their own ammunition. The selection of each weapon is provided through a quick selection menu, and takes the form of a selection wheel - which allows for quicker toggling for the user. This wheel also ensures a delay from exiting the menu before gameplay resumes, in order to allow the user to re-establish themselves and properly react to the environment - a small, but necessary, detail. Additionally, because of the ammunition limits, an electric baton was added as a melee weapon. This allows the user to both limit ammo usage when necessary, as well as for use as a last resort in other cases. Lastly, similar to old-school adventure games, knockback and invincibility frames were also added for when the player's character is damaged. This combat system is also testable through a small combat-zone within the sandbox, which has turrets at the front leading up to it, and which upon passing have you face off against enemies, which can spawn infinitely. However, these enemy spawners were created to ensure that there is an enemy limit, as well as an acceptable time gap between spawns. Additionally, health packs and ammunition also spawn here. Gameplay-wise, these are intended as restorations, and not inventory items. As such, in order to improve the user experience, neither will be picked upon by the player's character when at full health or full ammunition, respectively. Lastly, it should be noted that the ammunition that is spawned is chosen at random from only those weapons of the player's character that is not at full ammo - unless all weapons are at full ammo, at which point the ammo type is chosen at random. As such, a player will only receive ammunition that they actually need, and an ammunition spawn is not wasted - and thus improving the player's experience.",
            "Because the game is also an adventure game, the movement system was also given heavy consideration. There is both a standard movement speed, and a button allowing for even quicker movement. Additionally, there are also three vertical positionings. These are standing, crouching, and crawling, which allow for hiding behind cover, crawling under obstacles, and remaining undetected - among other possibilities. The player's character is also capable of both making a simple jump, as well as a double jump. On top of this, jumping capabilities are also accentuated even further by the player's character coming equipped with a jetpack. However, this jetpack is not meant as a flying mechanism per se, but rather is mostly intended to provide short bursts of movement. For example, a forward boost will allow for both quick evasion from enemies, as well as crossing short gaps more quickly. Conversely, the vertical boost is slower to initiate and can leave the player's character initially vulnerable to attack, but will allow the player's character to both avoid ground-based attacks and to reach higher ledges. Lastly, the jetpack also allows for hovering, which increases the distance traveled while in the air. Each of the three mentioned skills of the jetpack then use up power, which is replenished over time when not using the jetpack - similar to a stamina system. In order to limit UI clutter, the power level of the jetpack is only indicated at less than 100%. This indicator takes the place of a wheel near the player's character, and is generated using HLSL in order to program the shaders for the display. Lastly, it should be noted that the jumping and jetpack systems were balanced in order to ensure that each has their own pros and cons. For example, forward boosting is more for evasion and crossing small gaps, as vertical height here is essentially non-existent and makes crossing larger gaps impossible. Comparatively, vertical boosting is slow and causes the player to be more vulnerable in combat, but can cross the greatest distance when paired with hovering (due to the height obtained). Lastly, double jumping with hovering provides somewhat of a middle-ground for crossing gaps, while also providing the quickest movement for situations where the player's character must move across moderate distances quickly. As a final note on the movement skills provided within the prototype, it should also be noted that there are other lesser-used movement skills, each of which are also important in their own right. They are ledge grabbing, ledge movement, wall jumping, wall running, and rail grinding - the last of which is equivalent to the action of the same name in skateboarding. However, as it currently stands, it should be noted that the demonstrations of these lesser-relied upon movement skills are limited to only a couple of places within the sandbox - a couple of cubes, and a grind rail. However, a fuller, more distinct area that takes the form of an obstacle course is intended in a later update.",
            "Other than the combat and movement systems, there are a couple of other systems that are still worth mentioning. For example, the UI system is minimalist, and shows both health and ammunition levels for the user - with ammunition levels also visible when selecting a weapon from the weapon wheel. For the pause menu system, we can see buttons allowing for the ability to either exit to the main screen or to restart the sandbox, as well as a W.I.P for a key-binding system. Lastly, it should be noted that there is also a gate system, which shows the ability to have the player's character enter the same area from different locations - and thus not be restricted to only a singular access point."
        ],
        screenshots: []
    },
    "c91f92cj77yo7nv5t5vyg761":{
        index: 9,
        projectID: "c91f92cj77yo7nv5t5vyg761",
        public: true,
        name: "TCG Maker - Advanced Welcome Page",
        logo: require("../images/project-logos/tcg-maker-logo.png"),
        logoAlt: "trading card game maker advanced welcome page",
        version: "v0.0.0-alpha",
        abstract: "The Advanced Welcome Page is an attempt to create a much more production-ready version of the welcome page for the TCG Maker project - which can also be found in this portfolio. As such, the page has been much more greatly developed in order to show the expectations for the final product, and to also demonstrate skills related to creating a more complex page that engages the user. Additionally, by focusing on a single page, the project is better at demonstrating my ability to focus in on the small details of UI/UX design and frontend development that were not possible in the initial prototype - due to its larger scope.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/tcg-maker"]
        ],
        relatedProjects: [
            "liaohblsgg7xgw4e1d46ogea"
        ],
        skills: [
            "UI/UX Design",
            "Web Development",
            "Frontend"
        ],
        languages: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        technologies: [
            "React",
            "Next.js",
            "VS Code",
            "Git"
        ],
        description: [
            "The importance of an engaging welcome page - and one that is also highly informative - is very important in order to have potential users actually become members of a platform, as most potential users only stay on the website for about 3 seconds before leaving. As such, it is important to have the user feel engaged, even in the little details - such as small transition effects. However, the <rp>liaohblsgg7xgw4e1d46ogea</rp> project in this portfolio was unable to create a website that lived up to these standards, due to the scope of functionality being so large that it would require thousands of hours of investment in order to have such a high level of detail for the entire website. As such, the Advanced Welcome Page presented in this project is meant as an attempt to demonstrate a production-ready version of how the welcome page would look like for this project.",
            "Overall, the welcome page was crafted using a native dark theme, with a blue and purple color palette that has small accents of white and pink for color balancing. Additionally, the overwhelming majority of imagery lacks any borders. This limited color palette and lack of borders allows everything to have a softer look, and ensures that the only details that pop out to the user are intentional.",
            "At the top of this page is a navigation bar. Of particular interest are the dropdown menu buttons. Due to the application being a prototyping tool, there is a very large collection of pages that would be expected in the final product. As such, in order to simplify the navigation of these various links, the buttons here work as categories. These dropdown menus then open up when hovered over by a cursor. However, in order to be functional for mobile users, they can also be opened and closed upon clicking on them. Now, when these types of dropdown menus are typically opened, it is common for other websites to place the necessary links in a listed format. However, lists of texts are often hard to navigate, and malaise can easily set in for a user. As such, in order to keep user attention, differing block patterns are used for the menu options - which vary both vertically and horizontally.",
            "Also on the right side of the navigation bar are buttons that open up overlays for both logging in and creating a new account. The use of overlays here, instead of navigating to new pages, simplifies navigation and creates a more seamless experience for the user, as they are able to stay on the same page - and are thus kept navigationally centered. Each of these overlays also have underlined text buttons that switch to the other account-based overlay, with the log in overlay also providing a means of switching to a reset password overlay. The buttons for submitting forms are also made to be distinct, larger, and with a blue background color, so as not to have the user confuse them with the text buttons that switch overlays.",
            "For the actual page itself, the first portion visible is the Get Started section. On this page, there are a couple of larger slogans, along with subtext for them that allow for the user to easily understand the purpose of the web platform. Underneath these slogans is a button that states \"Get started for free\", which opens up the overlay in order to create an account. It should be noted that the text itself - \"Get started for free\" - was intentional. This was because there is a pricing button on the navigation bar, which signals that there are purchasing tiers for the product. However, the \"for free\" on the \"Get started for free\" button allows the user to quickly know that they can initially use the platform for free. To the right of the slogans and get started button is then an image. This image has some medieval aesthetic - stone building and hooded figure - but mixed into it is also some factory aesthetics - gears and conveyor belt. This mixture of aesthetics represent that most TCGs have a high fantasy theme, while also mixing in factory aesthetics to represent the web platform as a factory that produces cards.",
            "Below this Get Started section is an Information section. There are a couple of visual dividers here to also break up the visual monotony between the Get Started and Information sections, and to make a clear visual distinction between them - a darkening of the background, along with an actual decorative divider. This Information section then presents three main ideas, each with a header, descriptive text, images, and a hypothetical link to a page related to the idea. At the end of the Information section are the same visual dividers as at the top of the section, which is then followed by the Features section.",
            "This Features section then provides a glimpse for the user to the most important features of the web platform, displayed in a grid. In order to keep a simplified look, only the icon for each feature has a distinct background color behind it. However, hovering over the specific feature has the entire feature become more visually distinct. This provides both a small level of dynamicism for the user, and increased visual focus for each feature.",
            "Finally, at the end of the page is a footer. This provides links to many of the pages, similar to the dropdown menus in the navigation bar - along with additional links. They are categorized, but the links are visually distinct from the category headers by the headers being in all uppercase and the links being slightly darker. Also in this footer are icon buttons that link to social media pages, and a select element in order to change the language of the app."
        ],
        screenshots: [
            require("../images/screenshots/tcg-maker-advanced-welcome-page-0.png"),
            require("../images/screenshots/tcg-maker-advanced-welcome-page-1.png"),
            require("../images/screenshots/tcg-maker-advanced-welcome-page-2.png"),
            require("../images/screenshots/tcg-maker-advanced-welcome-page-3.png"),
            require("../images/screenshots/tcg-maker-advanced-welcome-page-4.png")
        ]
    },
    "nl1gx1y68jxy5c8t3gu84wip": {
        index: 10,
        projectID: "nl1gx1y68jxy5c8t3gu84wip",
        public: true,
        name: "Celtic Tactics",
        logo: require("../images/project-logos/celtic-tactics-logo.png"),
        logoAlt: "celtic tactics",
        version: "v0.0.0-alpha",
        abstract: "Celtic Tactics is a tactical RPG combined with a village simulator set in the Celtic past. Play as a band of five characters, and help them take their group of nomads out of the swamps and build their empire. Take part in engaging and dynamic tactics-based combat. Upgrade buildings to improve technologies and troops. Negotiate with others to establish trade routes and obtain resources. Conquer lands to grow your presence, and spread your influence.",
        urls: [
            ["GitHub", "private"]
        ],
        relatedProjects: [
            "ecs7ospx0apqw3zkv8mzvoag",
            "f0htbt1xaye2aebjv5bcizvf"
        ],
        skills: [
            "Game Development",
            "Game AI",
            "UI/UX Design",
            "Procedural Generation"
        ],
        languages: [
            "Java"
        ],
        technologies: [
            "IntelliJ",
            "Git"
        ],
        description: [
            "The game prototype for Celtic Tactics is focused exclusively on the tactics-based combat intended for the final product. It was crafted using the <rp>f0htbt1xaye2aebjv5bcizvf</rp> project - also included in this portfolio. In its current state, the graphics are very pixelated and simplistic, as the focus for this project is on the actual gameplay. The initial screen allows the player to choose whether or not to play against another player or against a CPU opponent, and then allows for the player(s) to choose their units. Afterwards, the actual combat begins.",
            "The gameplay takes place on a procedurally generated grid, which allows for the combat to take place on a unique map every single time. Each space can be either grass (a space that any unit can move onto), a stone wall (a space that no unit can move onto), or a chasm (a space that only certain units can move onto). Additionally, it's possible for a grass space to have a wooden box on top of it, and which can be moved or destroyed. Lastly, the procedural generation also ensures that there is always a path where units are able to reach each other - and thus can engage in combat.",
            "Combat is then based on 6v6 combat within this grid. However, each team may only have 3 combat units on the field at any given time. Once a unit is exhausted (upon losing all HP), then a different remaining unit in the troop may be placed onto the field to replace them. Additionally, a unit may be swapped out for another during that given unit's turn. Overall, combat takes place over a series of rounds. Each unit has a given priority - based on their stats - with a unit of higher priority going first in that round. During a unit's turn for that round, they have a given amount of movement points (which allow them to move around the grid) and action points (which allow them to use combat moves). Rounds then continue to progress until either - or both - parties have no units remaining.",
            "Additionally, although the current state of this project is only in the initial prototype phase, and is exclusively focused on the tactics-based combat, the <rp>ecs7ospx0apqw3zkv8mzvoag</rp> project creates a website for the envisioned final version of Celtic Tactics. As such, the entire scope of the video game - including the village simulator and adventure aspects - will be much more apparent upon visiting this project and its live demo of the associated website."
        ],
        screenshots: [
            require("../images/screenshots/celtic-tactics-0.png"),
            require("../images/screenshots/celtic-tactics-1.png"),
            require("../images/screenshots/celtic-tactics-2.png"),
            require("../images/screenshots/celtic-tactics-3.png"),
            require("../images/screenshots/celtic-tactics-4.png")
        ]
    },
    "gfj838t22dfhct3ynbcraenu": {
        index: 11,
        projectID: "gfj838t22dfhct3ynbcraenu",
        public: true,
        name: "PTCGP Simulator - Analysis Website",
        logo: require("../images/project-logos/ptcgp-sim-analysis-website-logo.png"),
        logoAlt: "pokemon trading card game simulator analysis website",
        version: "v0.0.0-alpha",
        abstract: "The Analysis Website for the PTCGP Simulator project was created in order to share and analyze the data that was obtained from the simulations made by the PTCGP Simulator project - which can also be found in this portfolio. In particular, the ethics related to the ability for users to obtain all standard cards was given heavy emphasis - both as a means to ensure from a business perspective that users were retained, and from a consumer perspective in order to maximize product enjoyability.",
        urls: [
            ["GitHub", "https://github.com/mpdillingerOSU/ptcgp-simulator-website"]
        ],
        relatedProjects: [
            "porhch2bbmoqk2c7wklzjmw3"
        ],
        skills: [
            "Simulator Analysis",
            "UI/UX Design",
            "Web Development",
            "Frontend"
        ],
        languages: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        technologies: [
            "React",
            "Next.js",
            "VS Code",
            "Git"
        ],
        description: [
            "The simulator analysis website provides an analysis of the ethics related to the gatcha mechanics of the Pokemon Trading Card Game Pocket mobile game. The data analyzed was obtained from the simulations ran by the <rp>porhch2bbmoqk2c7wklzjmw3</rp> program - a project also in this portfolio. As such, it serves as a means for determining my ability to analyze data generated by simulators. In particular, the analysis attempts to frame the analysis as a report from a business perspective, and as a means to determine how ethical the gatcha practices are - a heavy correlative for user retention.",
            "The website itself is rather simple, and more or less has the appearance of a report - with the content being broken up into sections, and the text being justified. However, UI/UX and frontend skills were demonstrated in how the data from the results of the simulations was presented to the reader. For the data results, a tab system was used in order to have the user select which expansion that they would like to see the results for. Additionally, arrow buttons are presented on both ends of this tab system, which allows for some quick cycling between the expansions, as well. On top of this, there is also the use of a checkbox system, which allows the user to see the data and graphs based on whether or not certain aspects were included within the associated simulations. As such, the use of the tab and checkbox systems together allow for a user to seamlessly shift between the many various results and graphs - all while ensuring that the user is not overloaded by too much data all at once."
        ],
        screenshots: [
            require("../images/screenshots/ptcgp-simulator-analysis-website-0.png"),
            require("../images/screenshots/ptcgp-simulator-analysis-website-1.png"),
            require("../images/screenshots/ptcgp-simulator-analysis-website-2.png"),
            require("../images/screenshots/ptcgp-simulator-analysis-website-3.png"),
            require("../images/screenshots/ptcgp-simulator-analysis-website-4.png")
        ]
    },
    "mx02wdoi7vxbvy75t2kk39h1": {
        index: 12,
        projectID: "mx02wdoi7vxbvy75t2kk39h1",
        public: true,
        name: "Block Breaker",
        logo: require("../images/project-logos/block-breaker-logo.png"),
        logoAlt: "block breaker",
        version: "v0.0.0-alpha",
        abstract: "Block Breaker is a library that procedurally generates character descriptions, and maintains the information via a node tree - which then allows for changes to be made and properly adapted to. As such, it has two major use cases. The first is the ability to make use of the character generation itself in order to create character sheets. As such, one can generate multiple characters that fit within the specified restrictions, and then use these for creative purposes. However, the second - and more important - use case is the ability for the library to be used within interactive programs - such as videogames - in order to not only procedurally generate characters, but also to help create emergent experiences.",
        urls: [
            ["GitHub", "private"]
        ],
        relatedProjects: [
            "9i90jyxh4g69r9hdpn3izurz",
            "iri9r76qdpfi0iqmywcr8308"
        ],
        skills: [
            "Procedural Generation",
            "Custom Libraries"
        ],
        languages: [
            "Java"
        ],
        technologies: [
            "IntelliJ",
            "Git"
        ],
        description: [
            "While generative AI has become an important feature recently within the tech sphere, procedural generation serves just as important of a purpose. As compared to generative AI, the use of controlled algorithms allow procedural generation to be better positioned at resolving possible inconsistencies and ensuring that accidental erasures do not occur during automated updates to a set of information. Additionally, one can have full confidence and control over how those algorithms are shaped. The trade off is that procedural generation cannot scale as quickly as generative AI, as humans have to essentially establish each connection themselves. However, the increased consistency and control means that Block Breaker does scale much more safely; and, for many programs, this is well worth it in the long-term.",
            "With this in mind, Blocker Breaker is a library that has positioned itself as an assistive tool for procedurally generating character descriptions - whether entire or partial, as determined by the user. As such, the user can quickly create character descriptions to be used within a variety of products. The use of Java as the language of choice for the project was also two-pronged. The first was to create compatibility with a Spring-based backend for web apps, while the second made it compatible with my personally-crafted Java Game Engine - which can also be found in this portfolio. As such, it helped place itself within the larger project ecosystem that I have already started to create. Additionally, the project also makes use of another project - the <rp>iri9r76qdpfi0iqmywcr8308</rp> library - in order to help with the generation of its data.",
            "Overall, there are two main categories of products that could benefit from the use of this library. The first category are those products that can assist users with generating descriptions, whether the user simply wants a tool that creates character sheets - including images - or a program that helps them to break through writer's block. As such, all manners of creatives - such as writers, game designers, and dungeon masters - can benefit from such a product. With the assistance of procedural generation, users can quickly create entire characters with the press of a button. In fact, the use of this library in order to assist with breaking through writer's block is the use case of the <rp>9i90jyxh4g69r9hdpn3izurz</rp> project that is also located in this portfolio.",
            "The second main category for use of this library is also its greatest advantage over generative AI. This is because, unlike generative AI, procedural generation can be used within video games and other interactive programs, and thus allow for high-quality emergent experiences. This advantage is extremely important in such a sphere, because emergent experiences adapt their generation to the actions of the user. As such, the node system of information used by the library allows one to prune and grow characters depending on those actions - all the while ensuring consistency and avoiding accidental erasure of details."
        ],
        screenshots: [
            require("../images/screenshots/block-breaker-0.png"),
            require("../images/screenshots/block-breaker-1.png"),
            require("../images/screenshots/block-breaker-2.png"),
            require("../images/screenshots/block-breaker-3.png"),
            require("../images/screenshots/block-breaker-4.png")
        ]
    },
    "5s6af8u00z3jnsdmmx02wdoi": {
        index: 13,
        projectID: "5s6af8u00z3jnsdmmx02wdoi",
        public: true,
        name: "Language Constructor",
        logo: require("../images/project-logos/language-constructor-logo.png"),
        logoAlt: "language constructor",
        version: "v0.0.0-alpha",
        abstract: "The Language Constructor project is a library that allows for the procedural generation of written text through natural language generation. At the most basic level, it allows for a user to create their own language, and to then provide the rules for their language - or, if desired, to emulate an existing language. Of particular interest, however, is that the library also makes use of the Interpretable interface that any other class can inherit from, and then allows the user to create custom algorithms in order to control the possibilities for how to interpret a given object. As such, rather than focusing on the writing itself, a user only needs to focus on the aspects of the object that are to be represented.",
        urls: [
            ["GitHub", "private"]
        ],
        relatedProjects: [
            "9i90jyxh4g69r9hdpn3izurz",
            "iri9r76qdpfi0iqmywcr8308"
        ],
        skills: [
            "Procedural Generation",
            "Natural Language Generation",
            "Custom Libraries"
        ],
        languages: [
            "Java"
        ],
        technologies: [
            "IntelliJ",
            "Git"
        ],
        description: [
            "Natural language generation is important in any procedural generation context where one wishes for the actual object that has been procedurally generated to be described. This is because procedural generation - especially those done to produce visual aspects - often fall short of then providing a proper description that can be interacted with. For example, let us imagine that a character in a video game has been procedurally generated, and looks quite spiffy. They have an interesting appeal to them, in many ways. However, you will notice that - other than gender - it is rare that any of the procedurally generated physical description is used to affect the text. Why can something as basic as their size not be mentioned? Let alone the pattern on their clothes, or the color of their eyes. Additionally, it is difficult to find any libraries that provide this level of interpretation that are not generalized and bogged down by natural language understanding, and which can be integrated easily into another program. As such, many use cases for natural language generation require a bespoke, streamlined approach to creating descriptions that can be generated quickly and which feel authentic and personalized. And, of course, this is not limited to only video games. Anything with immersion - such as interactive novels, educational technology, dev tools, and much more - can make use of this second layer of procedural generation in order to increase the desired immersion.",
            "To that end, the basic layer of the Language Constructor library allows for a user to create and define the rules for a given language - but also currently comes with a basic version of American English. As such, because the rules of a language are abstracted out, it is possible to even modify existing languages to match specific dialects. Additionally, a user is also able to define the dictionary, which also enables the grammar to appear more stylized based on era, region, culture, etc. This is especially important if you want to use the same language, but change how certain characters speak or are described.",
            "Once a language has been selected or created, a user then simply needs to have a given class inherit from the Interpretable interface, and define the algorithm for choosing the attributes that will be described. This often makes use of the <rp>iri9r76qdpfi0iqmywcr8308</rp> library in order to define the ranges for which a certain word may be appropriate to use. For example, we can have an absolute value for height (i.e., 1.85m), and then interpret that in order to generate a relative value (i.e, short, average height, tall, etc.). Of course, we can also feed in personal perspective - such as how tall somebody must be in order to be considered tall - in order to influence descriptions even further. Or, as a more complex example, what makes something personally beautiful to one character, but not to another.",
            "All of this then helps to create fuller descriptions for objects that can vary even when all of the absolute values of the data being interpreted remain unchanged. As such, none of the original object that was procedurally generated has to be changed. This library simply acts as an extra layer to allow for creating descriptions that interpret the same object differently, or when data is unknown by the user beforehand. Of course, this library can also be used to describe objects that were not procedurally generated. For example, you have statically-created objects that you want to be dynamically described. This library will then provide you then means for doing so - even if it is not at the same level of necessity as it would be for procedurally-generated content."
        ],
        screenshots: [
            require("../images/screenshots/language-constructor-0.png"),
            require("../images/screenshots/language-constructor-1.png"),
            require("../images/screenshots/language-constructor-2.png"),
            require("../images/screenshots/language-constructor-3.png"),
            require("../images/screenshots/language-constructor-4.png")
        ]
    },
    "h38lrj52215uz4fyx813yfzk": {
        index: 14,
        projectID: "h38lrj52215uz4fyx813yfzk",
        public: false,
        name: "Procedural Generation Website",
        logo: "",
        logoAlt: "procedural generation website",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["Live Demo", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "UI/UX Design",
            "Web Development",
            "Frontend"
        ],
        languages: [
            "CSS",
            "HTML",
            "Javascript"
        ],
        technologies: [
            "React",
            "Next.js",
            "VS Code",
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "b9pelpnv77mnuaxhsfjw2vhd": {
        index: 15,
        projectID: "b9pelpnv77mnuaxhsfjw2vhd",
        public: false,
        name: "FieldSense (+ Scavenger Hunt Game)",
        logo: "",
        logoAlt: "field sense",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["Live Demo", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "Dev Tool Development",
            "Custom Libraries",
            "Game Development",
            "Procedural Generation",
            "UI/UX Design"
        ],
        languages: [
            "C#"
        ],
        technologies: [
            "Unity",
            "VS",
            "Git"
        ],
        description: [
            "FieldSense is a node-based system that allows for objects to not only understand their environment from a spatial perspective, but also from a contextual and descriptive perspective. In essence, this would mean that not only could the A.I. in the game manuever around the environment from Point A to Point B, but that they could essentially describe the environment around themselves as they pass from Point A to Point B. A bard could know that the leaves of the tree are red, or that the grass is wet, and sing a fabulous tale about the actual journey in detail. It could sense that a bird is chirping, or a squirrel is eating. While a relatively small subset of games fudge the previous examples as cute points of interaction within given locations, the fact that they only occur in these set locations makes them static, rather than dynamic. You can only do it at precise locations, and the types of relationships to the possible interaction are also static. It is because of this static nature that it would be impossible to dynamically create a scavenger hunt for players to do. Scavenger hunts are about riddles. To make a riddle for an environment, there needs to be a system that can intelligently describe not only objects, but how they relate to the other objects around them. In fact, if you want any procedurally-generated task or quest to feel authentic, then the environment must be authentically understood. Introducing FieldSence.",
            "This is done by establishing each object defined within the FieldSense system as being a node, and then establishing parameters by which they can be described. This is especially helpful for procedurally generating descriptions of an environment in a more dynamic. In fact, other systems that procedurally generate maps either focus on the spatial perspective (i.e., the most simple versions being mazes), or reduce themselves to very general static concepts which state that people live in a given constructed town and a cave was built specifically because we want a quest to be built there. However, outside of these static parameters defined by the algorithm that generated the actual map, there lacks a system that allows for either the world to be dynamically described, or for dynamic creation of tasks or quests who creation are based solely on the nodes of the objects/characters in the gameworld, rather than a static script of required quests.but also generate nodes that provide details for describing specific locations relative to others… this provides for storytelling elements, treasure hunts, etc."
        ],
        screenshots: []
    },
    "ecg616r9zadf9qawliaohbls": {
        index: 16,
        projectID: "ecg616r9zadf9qawliaohbls",
        public: false,
        name: "Algebra Max",
        logo: "",
        logoAlt: "algebra max",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["App Store", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "Mobile App Development",
            "UI/UX Design",
            "Educational Technology",
            "Procedural Generation"
        ],
        languages: [
            "Dart",
            "SQL"
        ],
        technologies: [
            "Flutter",
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "gg7xgw4e1d46ogeanl1gx1y6": {
        index: 17,
        projectID: "gg7xgw4e1d46ogeanl1gx1y6",
        public: false,
        name: "Not to Bot",
        logo: "",
        logoAlt: "not to bot",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["App Store", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "Mobile App Development",
            "UI/UX Design",
            "Educational Technology",
            "Procedural Generation"
        ],
        languages: [
            "Dart",
            "SQL"
        ],
        technologies: [
            "Flutter",
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "8jxy5c8t3gu84wipporhch2b": {
        index: 18,
        projectID: "8jxy5c8t3gu84wipporhch2b",
        public: false,
        name: "Smizer",
        logo: "",
        logoAlt: "smizer",
        version: "v0.0.0-alpha",
        abstract: "Smizer is a smooth resizing tool for pixel art. Smooth + resizer = Smizer. My drawing app idea where we can make quality resizing of smaller pixel art images",
        urls: [
            ["Live Demo", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [],
        languages: [],
        technologies: [
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "bmoqk2c7wklzjmw3iri9r76q": {
        index: 19,
        projectID: "bmoqk2c7wklzjmw3iri9r76q",
        public: false,
        name: "Mix 'n' Mash",
        logo: "",
        logoAlt: "mix 'n' mash",
        version: "v0.0.0-alpha",
        abstract: "Takes food, and randomly generated a different version of it using procedural generation... So, you want beef tacos, but with Indian flavors... can even be used to also say you want a certain food but in less time... then this may be able to do that...",
        urls: [
            ["App Store", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "Mobile App Development",
            "UI/UX Design",
            "Procedural Generation"
        ],
        languages: [
            "Dart"
        ],
        technologies: [
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "dpfi0iqmywcr8308ku907nk4": {
        index: 20,
        projectID: "dpfi0iqmywcr8308ku907nk4",
        public: false,
        name: "Calendar Generator",
        logo: "",
        logoAlt: "calendar generator",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["Direct Download", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "Procedural Generation",
            "Custom Libraries"
        ],
        languages: [],
        technologies: [
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "7vxbvy75t2kk39h1f0htbt1x": {
        index: 21,
        projectID: "7vxbvy75t2kk39h1f0htbt1x",
        public: false,
        name: "Dialogue Tree Library",
        logo: "",
        logoAlt: "dialogue tree library",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["Direct Download", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [
            "Custom Libraries"
        ],
        languages: [],
        technologies: [
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "aye2aebjv5bcizvfh38lrj52": {
        index: 22,
        projectID: "aye2aebjv5bcizvfh38lrj52",
        public: false,
        name: "Paper on Procedural Generation Language",
        logo: "",
        logoAlt: "paper on procedural generation language",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["Direct Download", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [],
        languages: [],
        technologies: [
            "Git"
        ],
        description: [],
        screenshots: []
    },
    "215uz4fyx813yfzkj6yd609g": {
        index: 23,
        projectID: "215uz4fyx813yfzkj6yd609g",
        public: false,
        name: "Java Basics Website",
        logo: "",
        logoAlt: "java basics website",
        version: "v0.0.0-alpha",
        abstract: "",
        urls: [
            ["Live Demo", ""],
            ["GitHub", ""]
        ],
        relatedProjects: [],
        skills: [],
        languages: [],
        technologies: [
            "Git"
        ],
        description: [],
        screenshots: []
    }
};

export const projectList = [];
export const allSkills = [];
export const allLanguages = [];
export const allTechnologies = [];

for (const project of Object.values(projectDict)){
    if(project.public){
        let lo = 0;
        let hi = projectList.length - 1;
    
        while (hi - lo > 1) {
            let mid = (hi + lo) / 2;
            if (projectList[mid] < project.index) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
    
        projectList.splice(project.index <= projectList[lo] ? lo : project.index <= projectList[hi] ? hi : projectList.length, 0, project);
        
        for(let i = 0; i < project.skills.length; i++){
            if(!allSkills.includes(project.skills[i])){
                allSkills.push(project.skills[i]);
            }
        }
        allSkills.sort();

        for(let i = 0; i < project.languages.length; i++){
            if(!allLanguages.includes(project.languages[i])){
                allLanguages.push(project.languages[i]);
            }
        }
        allLanguages.sort();

        for(let i = 0; i < project.technologies.length; i++){
            if(!allTechnologies.includes(project.technologies[i])){
                allTechnologies.push(project.technologies[i]);
            }
        }
        allTechnologies.sort();
    }
}

export function mapSkills(isActive){
    const newActiveSkills = {};

    for(let i = 0; i < allSkills.length; i++){
        newActiveSkills[allSkills[i]] = isActive;
    }

    return newActiveSkills;
}

export function mapLanguages(isActive){
    const newActiveLanguages = {};

    for(let i = 0; i < allLanguages.length; i++){
        newActiveLanguages[allLanguages[i]] = isActive;
    }

    return newActiveLanguages;
}

export function mapTechnologies(isActive){
    const newActiveTechnologies = {};

    for(let i = 0; i < allTechnologies.length; i++){
        newActiveTechnologies[allTechnologies[i]] = isActive;
    }

    return newActiveTechnologies;
}