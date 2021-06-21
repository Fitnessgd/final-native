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
        "None",
        36.95,
        [
            new Review(
                "Charlie Brooker, The Guardian UK",
                "An astounding accomplishment; part abstract brainteaser, part sci-fi thriller, part black comedy. Imagine being stuck inside a 3D puzzle with a playfully cruel sense of humour."
            ),
            new Review(
                "Top 10 Games of the Decade, The Guardian UK",
                "Sinister, sardonic and stunningly realised� Valve's idiosyncratic extra [is] a work of genius."
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
    )
]