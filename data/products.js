import Categories from "../constants/Categories";
import Product, { Review } from "../models/Product";

export default [
    new Product(
        "https://cdn.akamai.steamstatic.com/steam/apps/620/ss_6a4f5afdaa98402de9cf0b59fed27bab3256a6f4.jpg?t=1610490805",
        "Portal 2",

        `Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.
        
The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.
        
The game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.
    
Product Features
Extensive single player: Featuring next generation gameplay and a wildly-engrossing story.
Complete two-person co-op: Multiplayer game featuring its own dedicated story, characters, and gameplay.
Advanced physics: Allows for the creation of a whole new range of interesting challenges, producing a much larger but not harder game.
Original music.
Massive sequel: The original Portal was named 2007's Game of the Year by over 30 publications worldwide.
Editing Tools: Portal 2 editing tools will be included.`,
        "8 GB",
        "2 GB",
        0,
        36.95,
        [
            new Review(
                "Charlie Brooker, The Guardian UK",
                "An astounding accomplishment; part abstract brainteaser, part sci-fi thriller, part black comedy. Imagine being stuck inside a 3D puzzle with a playfully cruel sense of humour."
            ),
            new Review(
                "Top 10 Games of the Decade, The Guardian UK",
                "Sinister, sardonic and stunningly realised Valve's idiosyncratic extra [is] a work of genius."
            ),
            new Review(
                "Best Games of the Decade, The Onion AV Club",
                "A masterpiece... One of the decade's best villains.",
            ),
            new Review(
                "Wired Magazine",
                "One of the most influential games of the decade.",
            ),
            new Review(
                "USA Today",
                "Ingenious.",
            ),
            new Review(
                "Game of the Year, Eurogamer",
                "Brilliantly designed, innovative, witty and wonderfully devious... Absolute genius.",
            ),
            new Review(
                "Game of the Year, Joystiq",
                "Phenomenal in every sense of the word.",
            )
        ],
        [
            Categories.firstPerson,
            Categories.puzzle,
            Categories.action,
            Categories.adventure
        ]
    ),
    new Product(
        "http://assets.vg247.com/current//2016/01/team_fortress_2.jpg",
        "Team Fortress 2",
        `The most highly-rated free game of all time!
One of the most popular online action games of all time, Team Fortress 2 delivers constant free updates—new game modes, maps, equipment and, most importantly, hats. Nine distinct classes provide a broad range of tactical abilities and personalities, and lend themselves to a variety of player skills.
        
New to TF? Don’t sweat it!
No matter what your style and experience, we’ve got a character for you. Detailed training and offline practice modes will help you hone your skills before jumping into one of TF2’s many game modes, including Capture the Flag, Control Point, Payload, Arena, King of the Hill and more.
        
Make a character your own!
There are hundreds of weapons, hats and more to collect, craft, buy and trade. Tweak your favorite class to suit your gameplay style and personal taste. You don’t need to pay to win—virtually all of the items in the Mann Co. Store can also be found in-game.`,
        "15 GB",
        "512 MB",
        0,
        0,
        [
            new Review(
                "PC Gamer",
                "The most fun you can have online"
            )
        ],
        [
            Categories.action,
            Categories.adventure,
            Categories.firstPerson
        ]
    ),
    new Product(
        "https://gamezo.co.uk/wp-content/uploads/2021/01/CSGOPoster.png",
        "Counter Strike: Global Offensive",
        `Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.

CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).
        
"Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999," said Doug Lombardi at Valve. "For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac."`,
        "15 GB",
        "2 GB",
        0,
        0,
        [


        ],
        [
            Categories.action,
            Categories.firstPerson,
            Categories.adventure,
        ]

    )

]