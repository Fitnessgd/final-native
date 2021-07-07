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
            new Review(
                "PCMag",
                "The free-to-play Counter-Strike: Global Offensive is arguably one of the most iconic FPS titles of its generation. The new Panorama UI drastically improves its interface, but the gameplay can sometimes feel repetitive."
            )
        ],
        [
            Categories.action,
            Categories.firstPerson,
            Categories.adventure,
        ]
    ),
    new Product(
        "https://i.ytimg.com/vi/VgCMOReW2zQ/hqdefault.jpg",
        "Asphalt 9",
        `Get in gear and take on the world’s best, most fearless street auto racer pros to become the next Asphalt Legend—from the creators of Asphalt 8: Airborne. You’re free to pick the dream car you need and race across spectacular locations against rival speed machines around the world.
Asphalt 9: Legends features a top roster of real hypercars for you to drive that is unlike what's found in any other game, from renowned legendary car manufacturers like Ferrari, Porsche, Lamborghini and W Motors, among many other brands. Hit the fast track and leave your limits in the dust to become a Legend of the Track!`,
        "8 GB",
        "2 GB",
        0,
        0,
        [
            new Review(
                "Rahul Sharma",
                `I am playing this game from atleast 6 month, I have a lot of exciting things in this sometimes it show ads which is irritating but every design, every control, each and every graphics are exceptionlly well.If anyone is a racing game lover he/she can't even thing to refuse this game.I have played a lots of games but this is lit. If a person starts to play this game he/she will be addicted to this game.every season, every gameplay make the player more excited to play this game further.`
            ),
        ],
        [
            Categories.action,
        ]
    ),
    new Product(
        "https://cdn.akamai.steamstatic.com/steam/apps/1840/ss_48d4da34356e9c2824b91e0a42c9f4b9826dfb73.1920x1080.jpg?t=1447356104",
        "Source Filmaker",
        `The Source Filmmaker (SFM) is the movie-making tool built and used by us here at Valve to make movies inside the Source game engine. Because the SFM uses the same assets as the game, anything that exists in the game can be used in the movie, and vice versa. By utilizing the hardware rendering power of a modern gaming PC, the SFM allows storytellers to work in a what-you-see-is-what-you-get environment so they can iterate in the context of what it will feel like for the final audience.`,
        "15 GB",
        "2 GB",
        0,
        0,
        [
            new Review(
                "Amir Muhammad",
                "Personally I love SFM, because it’s fun to use and the tools are very powerful, and rendering done in real time and look gorgeous. The only problem I have with SFM is the process of adding custom models from software like Blender or Maya and putting them in Source Filmmaker. Also it bugs me that I have to buy the game for part of the maps to work to their full potential. I use Blender a lot and I will continue to use it for animating and modeling, but  for my render purposes SFM will be the way to go."
            )
        ],
        [
            Categories.tools,
            Categories.sandbox
        ]
    ),
    new Product(
        "https://s1.pir.fm/pf/blog/announcements/CC_780x295px.png",
        "CCleaner",
        `Is your Android phone or tablet full of junk and running slowly?

Clean, optimize and boost the performance of your device with CCleaner for Android!
      
Brought to you from the makers of the world’s most popular PC and Mac cleaning software, CCleaner for Android is the ultimate Android optimizer. Quickly and easily remove junk, reclaim space, clean RAM, monitor your system and more, and truly master your device.`,
        "8 GB",
        "2 GB",
        0,
        0,
        [
            new Review(
                "PCMag",
                `CCleaner Professional Plus is a PC-enhancing toolkit that breathes new life into heavily used machines. Its boot time improvements are the best we've seen, but its other enhancements aren't quite as potent.`
            ),
            new Review(
                "Mr Thatch",
                `I use this mostly to free up memory before playing some games that would otherwise stutter without first force stopping as many apps as possible, and CCleaner makes it so much easier than manually stopping 20 apps one by one. Just a few buttons and everything else is automatic. Also use the quick clean function once in a while. Great app and only using the free version.`
            )
        ],
        [
            Categories.tools,
        ]
    ),
    new Product(
        "https://mk0camerajabberhe53n.kinstacdn.com/wp-content/uploads/2017/12/photoshop_cc_2018_review-04.jpg",
        "Adobe Photoshop",
        `Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.`,
        "4 GB",
        "8 GB",
        0,
        74.00,
        [
            new Review(
                "PCMag",
                `The world's best image editing software adds mind-blowing neural filters, automatic sky replacement, and even better selection tools.`
            )
        ],
        [
            Categories.tools,
        ]

    ),
    new Product(
        "https://paradacreativa.es/wp-content/uploads/2019/12/Como-descargar-After-Effects-gratis.jpg",
        "Adobe After Effects",
        "Create motion graphics and visual effects for film, TV, video, and web.",
        "15 GB",
        "16 GB",
        0,
        74,
        [
            new Review(
                "Design Buckle",
                "Adobe After Effects is an incredible compositing software that makes great motion graphics and visual effects. Used in conjunction with the myriad of Adobe applications, like Premiere Pro and Animate, this application is a powerful tool for filmmakers. The program is one of the best applications on the market."
            )
        ],
        [
            Categories.tools
        ]
    ),
    new Product(
        "https://steamuserimages-a.akamaihd.net/ugc/595863935745511065/9BD23219CD26D49B0BB96098C9E2AA463A4BCF29/",
        "Garry's Mod",
        `Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.

        You spawn objects and weld them together to create your own contraptions - whether that's a car, a rocket, a catapult or something that doesn't have a name yet - that's up to you. You can do it offline, or join the thousands of players who play online each day.
        
        If you're not too great at construction - don't worry! You can place a variety of characters in silly positions. But if you want to do more, we have the means.`,
        "5 GB",
        "4 GB",
        0,
        36.95,
        [
            new Review(
                "Screenrant",
                `Garry's Mod is the definition of a customized experience. The game gave players an unprecedented level of control, and still has loyal fans.`
            )
        ],
        [
            Categories.sandbox,
            Categories.tools
        ]
    ),
    new Product(
        "https://cdn.akamai.steamstatic.com/steam/apps/200010/ss_ff1354a17bedfa710875305a6679afc31e82b88b.1920x1080.jpg?t=1576110892",
        "Quantum Conundrum",
        `When you, as a young boy, are dropped off to visit your uncle, you notice something’s wrong. First, he’s not there to greet you. Second, there’s the explosion that happened right as you arrived. And third, the house seems to be even weirder than you remembered it. Now, your job is to find—and ultimately rescue—your uncle, by using his newest invention, the Interdimensional Shift Device (or IDS), to switch between dimensions and solve puzzles. That sofa too heavy to move? There’s a dimension for that! Switch to Fluffy Dimension and that sofa is now light as a feather. Need to get up to a high ledge? There’s a dimension for that! Just switch to Anti-Gravity Dimension and things begin to float upward. Need to make things heavier? There’s a dimension for th—well, you get the idea. Switch dimensions in real time, work your way through the crazy complex mansion wings and rescue your uncle!`,
        "1.75 GB",
        "2 GB",
        0,
        32.95,
        [
            new Review(
                "Venturebeat",
                "Quantum Conundrum is an unbalanced measure of brilliance and flaws."
            )
        ],
        [
            Categories.puzzle,
            Categories.firstPerson,
            Categories.action,
            Categories.adventure
        ]
    ),
    new Product(
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2016/09/portal-video-game-1.jpg?q=50&fit=crop&w=1920&dpr=1.5",
        "Portal",
        `Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.

The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation.
        
Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.`,
        "8 GB",
        "512 MB",
        0,
        36.95,
        [
            new Review(
                "GameSpot",
                `Short as it may be, Portal is a fantastic game that should be played by anyone interested in unique, well-crafted gameplay and a witty, whip-smart script. The stand-alone retail release comes with the same price point as the downloadable Steam release, which is about the cost of a night out at the movies. Portal may not last much longer than some feature films, but pound for pound it remains one of the best games on store shelves.`
            )
        ],
        [
            Categories.firstPerson,
            Categories.action,
            Categories.adventure,
            Categories.puzzle,
        ]
    ),
    new Product(
        "https://cdn-products.eneba.com/resized-products/BJfz4U6_L6QQXyMPGlFWBIyuUsYb7Q-AhQeU2GRjUGc_1920x1080_1x-0.jpeg",
        "Minecraft",
        `Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs. Create, explore and survive alone or with friends on mobile devices or Windows 10.`,
        "1 GB",
        "4 GB",
        0,
        26.95,
        [
            new Review(
                "PCMag",
                `Minecraft offers an infinite, blocky world of creativity where you earn your own reward by mining the landscape to build whatever your heart desires.`
            )
        ],
        [
            Categories.action,
            Categories.adventure,
            Categories.firstPerson,
            Categories.sandbox
        ]
    ),
    new Product(
        "https://cdn.akamai.steamstatic.com/steam/apps/255710/ss_013b26f27484941d4edbd406f8df5b5238f120df.1920x1080.jpg?t=1621621159",
        "Cities: Skylines",
        `Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience. You’re only limited by your imagination, so take control and reach for the sky!`,
        "4 GB",
        "4 GB",
        0,
        105.56,
        [
            new Review(
                "The Escapist",
                `The finest city builder in over a decade, Cities: Skylines's few flaws are so minor I only noticed them after hours of enjoyment.`
            ),
            new Review(
                "GameInformer",
                `Through deep and rewarding gameplay, Colossal Order’s new simulation fills the increasingly noticeable void in the genre. Where others have failed, Cities: Skyline excels and delivers the new gold standard of modern city-builders.`
            ),
            new Review(
                "Destructoid",
                `Cities: Skylines is a title that will eat up hours of your time, and with a commitment from the developers to continue support for the title in the future, and Steam Workshop integration, the huge amount of replayability the base game has will become even bigger. I wholeheartedly recommend this game and can’t wait to see what modders and Colossal Order have in store for us in the future.`
            )
        ],
        [
            Categories.sandbox
        ]
    )
]