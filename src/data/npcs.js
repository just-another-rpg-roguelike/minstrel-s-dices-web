export const npcs = Object.freeze({
  "data": [
    {
      "name": "Catzimus, The Merchant Cat",
      "description": "A cat that sells things.",
      "image_path": "/images/npcs/merchant-cat.png",
      "initial_affinity": 0,
      "events": [
        {
          "image_path": "/images/npcs/merchant-cat-3.png",
          "message": "Hello kind sir, would you like to invest in my business?",
          "choices": [
            {
              "description": "Yes, I would like to invest",
              "healt": [0, 0],
              "charisma": [0, 0],
              "karma": [5, 10],
              "affinity": 10
            },
            {
              "description": "No, I'm not interested",
              "healt": [-15, -5],
              "charisma": [-20, -10],
              "karma": [-30, -20],
              "affinity": -5
            }
          ]
        },
        {
          "image_path": "/images/npcs/merchant-cat.png",
          "message": "I'm in a bit of a bind with some unsavory characters. Could you help me out?",
          "choices": [
            {
              "description": "Help the cat",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [15, 20],
              "affinity": 10
            },
            {
              "description": "Refuse to help",
              "health": [0, 0],
              "charisma": [-15, -10],
              "karma": [-10, -5],
              "affinity": -10
            }
          ]
        },
        {
          "image_path": "/images/npcs/merchant-cat-2.png",
          "message": "I've heard you're a person of influence. Let's make a deal, you help me sell these... 'special' goods, and we split the profit.",
          "choices": [
            {
              "description": "Agree to the deal",
              "health": [0, 0],
              "charisma": [20, 25],
              "karma": [-20, -15],
              "affinity": 15
            },
            {
              "description": "Decline the offer",
              "health": [0, 0],
              "charisma": [5, 10],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "image_path": "/images/npcs/merchant-cat-3.png",
          "message": "Catzimus is organizing a charity sale to help orphaned kittens. Would you like to contribute or participate in the event?",
          "choices": [
            {
              "description": "Contribute to the charity",
              "health": [-5, 0],
              "charisma": [10, 15],
              "karma": [15, 20],
              "affinity": 10
            },
            {
              "description": "Not interested in the charity",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-10, -5],
              "affinity": -5
            }
          ]
        },
        {
          "image_path": "/images/npcs/merchant-cat-3.png",
          "message": "Catzimus has had some of his goods stolen. Will you help him track down the thieves?",
          "choices": [
            {
              "description": "Help Catzimus recover the stolen goods",
              "health": [-10, -5],
              "charisma": [5, 10],
              "karma": [10, 15],
              "affinity": 10
            },
            {
              "description": "Refuse to get involved",
              "health": [0, 0],
              "charisma": [-5, -10],
              "karma": [-10, -5],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Smuggler's Dilemma",
          "image_path": "/images/npcs/merchant-cat-3.png",
          "message": "Catzimus has become entangled with a dangerous group of smugglers. They are demanding his assistance in transporting illegal goods. Will you help him or advise him to seek legal help?",
          "choices": [
            {
              "description": "Help Catzimus with the smugglers",
              "health": [-15, -10],
              "charisma": [10, 15],
              "karma": [-20, -10],
              "affinity": 15
            },
            {
              "description": "Advise Catzimus to seek legal help",
              "health": [0, 0],
              "charisma": [-15, -10],
              "karma": [10, 20],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Hidden Treasure Map",
          "image_path": "/images/npcs/merchant-cat-3.png",
          "message": "Catzimus has stumbled upon a mysterious treasure map, said to lead to untold riches. He asks for your assistance in deciphering it and embarking on a perilous journey to find the treasure. Will you accept the challenge?",
          "choices": [
            {
              "description": "Accept the challenge and seek the treasure",
              "health": [-20, -15],
              "charisma": [5, 10],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Decline the dangerous quest",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        }
      ]
    },
    {
      "name": "Hopzooka, The Suspicious Jester Rabbit",
      "image_path": "/images/npcs/jester-rabbit.png",
      "initial_affinity": 0,
      "events": [
        {
          "name": "The Mysterious Riddle",
          "message": "A mischievous rabbit known for his cunning tricks and unpredictable behavior, often seen entertaining with a sly grin.",
          "image_path": "/images/npcs/jester-rabbit.png",
          "choices": [
            {
              "description": "Attempt to solve the riddle",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 5
            },
            {
              "description": "Refuse the challenge",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [0, 0],
              "affinity": -5
            }
          ],
          "description": "too much text 1"
        },
        {
          "name": "The Missing Carrot",
          "image_path": "/images/npcs/jester-rabbit.png",
          "message": "Oh no, my latest prank has backfired! I need your help to fix this mess.",
          "choices": [
            {
              "description": "Help fix the prank",
              "health": [-10, -5],
              "charisma": [5, 10],
              "karma": [-5, 0],
              "affinity": 5
            },
            {
              "description": "Leave him to deal with it",
              "health": [0, 0],
              "charisma": [-5, -10],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        },
        {
          "name": "A Trick Gone Wrong",
          "image_path": "/images/npcs/jester-rabbit-2.png",
          "message": "Oh no, my latest prank has backfired! I need your help to fix this mess.",
          "choices": [
            {
              "description": "Help fix the prank",
              "health": [-10, -5],
              "charisma": [5, 10],
              "karma": [-5, 0],
              "affinity": 5
            },
            {
              "description": "Leave him to deal with it",
              "health": [0, 0],
              "charisma": [-5, -10],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Enchanted Circus",
          "image_path": "/images/npcs/jester-rabbit-3.png",
          "message": "Hopzooka is organizing an enchanted circus in town. Would you like to join the magical performances or simply attend as a spectator?",
          "choices": [
            {
              "description": "Join the magical performances",
              "health": [-5, 0],
              "charisma": [15, 20],
              "karma": [10, 15],
              "affinity": 10
            },
            {
              "description": "Attend as a spectator",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 5
            }
          ]
        },
        {
          "name": "The Lost Jester Hat",
          "image_path": "/images/npcs/jester-rabbit.png",
          "message": "Hopzooka has lost his beloved jester hat, a symbol of his mischief. Will you help him find it?",
          "choices": [
            {
              "description": "Help Hopzooka find his jester hat",
              "health": [-5, 0],
              "charisma": [5, 10],
              "karma": [5, 10],
              "affinity": 10
            },
            {
              "description": "Ignore the request",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-5, 0],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Great Escape",
          "image_path": "/images/npcs/jester-rabbit-2.png",
          "message": "Hopzooka has played a prank on the town mayor, and now he needs your help to escape from the mayor's wrath. Will you assist him?",
          "choices": [
            {
              "description": "Help Hopzooka escape from the mayor",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [10, 15],
              "affinity": 10
            },
            {
              "description": "Let him face the consequences alone",
              "health": [0, 0],
              "charisma": [-5, -10],
              "karma": [-10, -5],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Cursed Prankster's Curse",
          "image_path": "/images/npcs/jester-rabbit-4.png",
          "message": "Hopzooka has played a prank on a mysterious figure who is rumored to be a powerful sorcerer. In retaliation, the sorcerer has cursed Hopzooka, causing his pranks to have dangerous consequences. Will you help him break the curse or face the chaos together?",
          "choices": [
            {
              "description": "Help Hopzooka break the curse",
              "health": [-20, -15],
              "charisma": [15, 20],
              "karma": [-15, -10],
              "affinity": 15
            },
            {
              "description": "Face the chaos together",
              "health": [-15, -10],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            }
          ]
        },
        {
          "name": "The Secret Underground Performance",
          "image_path": "/images/npcs/jester-rabbit-3.png",
          "message": "Hopzooka has been invited to perform at a secret underground event filled with influential and dangerous guests. The performance could bring great rewards but also carries significant risks. Will you join him in this perilous endeavor?",
          "choices": [
            {
              "description": "Join Hopzooka in the underground performance",
              "health": [-10, -5],
              "charisma": [20, 25],
              "karma": [-20, -15],
              "affinity": 15
            },
            {
              "description": "Decline the risky performance",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Curse of the Prankster's Reflection",
          "image_path": "/images/npcs/jester-rabbit-4.png",
          "message": "Hopzooka has accidentally shattered a magical mirror while pulling a prank, and now his reflections in mirrors have come to life, causing chaos and confusion. Will you help him find a way to undo the curse?",
          "choices": [
            {
              "description": "Help Hopzooka undo the curse",
              "health": [-15, -10],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Let him deal with the mirror reflections",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        }
      ]
    },
    {
      "name": "Oric the Bard-Owl",
      "description": "Oric is a wise and talented bard-owl known for his enchanting melodies and deep knowledge of music and lore.",
      "image_path": "/images/npcs/bard-owl.png",
      "initial_affinity": 0,
      "events": [
        {
          "name": "The Musical Duel",
          "image_path": "/images/npcs/bard-owl.png",
          "message": "Oric challenges you to a musical duel to test your skills as a bard. Are you up for the challenge?",
          "choices": [
            {
              "description": "Accept the musical duel",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 10
            },
            {
              "description": "Decline the duel",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [0, 0],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Lost Songbook",
          "image_path": "/images/npcs/bard-owl.png",
          "message": "Oric has lost his prized songbook, containing rare and magical songs. Will you help him find it?",
          "choices": [
            {
              "description": "Help Oric find the lost songbook",
              "health": [-5, 0],
              "charisma": [5, 10],
              "karma": [5, 10],
              "affinity": 10
            },
            {
              "description": "Refuse to help",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-5, 0],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Serenade of Love",
          "image_path": "/images/npcs/bard-owl.png",
          "message": "Oric offers to compose a serenade for your beloved. Will you accept his offer?",
          "choices": [
            {
              "description": "Accept Oric's serenade",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [10, 15],
              "affinity": 15
            },
            {
              "description": "Decline the offer",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-5, 0],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Harmonious Duet",
          "image_path": "/images/npcs/bard-owl.png",
          "message": "Oric invites you to join him in a harmonious duet performance at the grand festival. Will you collaborate with him?",
          "choices": [
            {
              "description": "Accept Oric's invitation and perform a duet",
              "health": [0, 0],
              "charisma": [20, 25],
              "karma": [10, 15],
              "affinity": 20
            },
            {
              "description": "Decline the invitation",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [0, 0],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Enchanted Lyre",
          "image_path": "/images/npcs/bard-owl.png",
          "message": "Oric presents you with an enchanted lyre that can enhance your musical abilities. Will you accept the gift?",
          "choices": [
            {
              "description": "Accept the enchanted lyre",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 15
            },
            {
              "description": "Politely decline the gift",
              "health": [0, 0],
              "charisma": [-5, 0],
              "karma": [0, 0],
              "affinity": 5
            }
          ]
        },
        {
          "name": "The Epic Ballad of Legends",
          "image_path": "/images/npcs/bard-owl.png",
          "message": "Oric proposes a collaboration to compose an epic ballad that will immortalize your adventures and heroic deeds. Will you embark on this musical journey with him?",
          "choices": [
            {
              "description": "Embrace Oric's proposal and create the epic ballad",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [10, 15],
              "affinity": 20
            },
            {
              "description": "Decline the proposal",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-5, 0],
              "affinity": -10
            }
          ]
        }
      ]
    },
    {
      "name": "Felix the Thief-Fox",
      "description": "Felix is a sly and agile thief-fox known for his stealthy heists and quick wit.",
      "image_path": "/images/npcs/thief-fox.png",
      "initial_affinity": 0,
      "events": [
        {
          "name": "The Heist Proposal",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix approaches you with a daring heist proposal, promising great rewards if successful. Will you join him in this risky venture?",
          "choices": [
            {
              "description": "Accept Felix's heist proposal",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Decline the risky heist",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Stolen Artifact",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix has stolen a valuable artifact and needs your help to fence it. Will you assist him in finding a buyer?",
          "choices": [
            {
              "description": "Help Felix find a buyer for the stolen artifact",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Refuse to get involved with the stolen artifact",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Chase",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "You discover that Felix has stolen something valuable from you. Will you confront him and try to catch him in a thrilling chase?",
          "choices": [
            {
              "description": "Confront Felix and chase him down",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": -10
            },
            {
              "description": "Let him go and avoid a confrontation",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Phantom Heist",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix has received an anonymous letter inviting him to participate in the legendary 'Phantom Heist,' a daring heist of a mythical artifact. Will you join him in this perilous endeavor?",
          "choices": [
            {
              "description": "Accept the invitation and embark on the Phantom Heist",
              "health": [-15, -10],
              "charisma": [10, 15],
              "karma": [-15, -10],
              "affinity": 10
            },
            {
              "description": "Decline the invitation to the Phantom Heist",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Cursed Relic",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix has stolen a cursed relic that brings misfortune to those who possess it. He needs your help to break the curse before it's too late. Will you assist him?",
          "choices": [
            {
              "description": "Help Felix break the curse of the stolen relic",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Refuse to get involved with the cursed relic",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Shadow Guild",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix reveals the existence of a secretive thieves' guild known as 'The Shadow Guild.' He invites you to join their ranks, but doing so means entering a world of danger and intrigue. Will you become a member?",
          "choices": [
            {
              "description": "Accept Felix's offer and join The Shadow Guild",
              "health": [-15, -10],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Decline the invitation to join The Shadow Guild",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Enchanted Gemstone",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix has stolen an enchanted gemstone that possesses mysterious powers. He asks for your help in unlocking its potential. Will you assist him in discovering the gem's secrets?",
          "choices": [
            {
              "description": "Help Felix unlock the secrets of the enchanted gemstone",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Refuse to get involved with the enchanted gemstone",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The 'Invisible' Heist",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix proposes a heist to steal an 'invisible' diamond rumored to be impossible to see. Will you join him in this 'transparent' endeavor?",
          "choices": [
            {
              "description": "Accept Felix's challenge to steal the 'invisible' diamond",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Suggest that you both wear 'invisible' masks for the heist",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [-5, 0],
              "affinity": 5
            }
          ]
        },
        {
          "name": "The 'Infinite' Treasure Map",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix claims to have a 'one-of-a-kind' treasure map that leads to 'infinite' riches. He asks for your help in deciphering it. Will you embark on this 'limitless' quest?",
          "choices": [
            {
              "description": "Join Felix in deciphering the 'infinite' treasure map",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 15
            },
            {
              "description": "Suggest that the treasure must be an 'infinite' supply of chocolate",
              "health": [0, 0],
              "charisma": [20, 25],
              "karma": [-5, 0],
              "affinity": 10
            }
          ]
        },
        {
          "name": "The 'Disguised' Heist",
          "image_path": "/images/npcs/thief-fox.png",
          "message": "Felix proposes a heist where you both dress as 'invisible' guards and steal from the 'invisible' museum. Will you partake in this 'see-through' adventure?",
          "choices": [
            {
              "description": "Accept Felix's idea and dress as 'invisible' guards for the heist",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [-10, -5],
              "affinity": -10
            },
            {
              "description": "Suggest that you both wear 'invisibility cloaks' instead",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [-5, 0],
              "affinity": 10
            }
          ]
        }
      ]
    },
    {
      "name": "Bramble the Blacksmith-Bear",
      "description": "Bramble is a skilled blacksmith-bear known for crafting exceptional weapons and armor with unparalleled craftsmanship.",
      "image_path": "/images/npcs/blacksmith-bear.png",
      "initial_affinity": 0,
      "events": [
        {
          "name": "The Legendary Forge",
          "image_path": "/images/npcs/blacksmith-bear.png",
          "message": "Bramble invites you to visit his secret forge, rumored to be capable of forging legendary weapons. Will you embark on this quest to find his hidden forge?",
          "choices": [
            {
              "description": "Accept Bramble's invitation and seek the Legendary Forge",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 10
            },
            {
              "description": "Decline the quest to find the Legendary Forge",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-5, 0],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Masterpiece Commission",
          "image_path": "/images/npcs/blacksmith-bear.png",
          "message": "A renowned warrior requests Bramble to craft a masterpiece weapon for a noble cause. Bramble asks for your assistance in forging this extraordinary weapon. Will you help him create the masterpiece?",
          "choices": [
            {
              "description": "Assist Bramble in crafting the masterpiece weapon",
              "health": [-5, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 15
            },
            {
              "description": "Refuse to get involved in crafting the masterpiece",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [-5, 0],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Fiery Dragon Scale Quest",
          "image_path": "/images/npcs/blacksmith-bear.png",
          "message": "Bramble seeks rare and dangerous Fiery Dragon Scales to craft legendary armor. He asks for your help in obtaining these precious materials. Will you embark on the perilous quest for the scales?",
          "choices": [
            {
              "description": "Join Bramble on the quest for Fiery Dragon Scales",
              "health": [-10, -5],
              "charisma": [5, 10],
              "karma": [-10, -5],
              "affinity": 10
            },
            {
              "description": "Decline the dangerous quest for Fiery Dragon Scales",
              "health": [0, 0],
              "charisma": [-5, 0],
              "karma": [10, 15],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Prankster's Anvil",
          "image_path": "/images/npcs/blacksmith-bear.png",
          "message": "Bramble's mischievous nephew has placed a whoopee cushion on his anvil as a prank. He asks for your help in finding the prankster. Will you assist him in solving this 'grave' matter?",
          "choices": [
            {
              "description": "Help Bramble find the prankster and resolve the issue",
              "health": [0, 0],
              "charisma": [5, 10],
              "karma": [5, 10],
              "affinity": 10
            },
            {
              "description": "Sarcastically suggest that the anvil just has a sense of humor",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [-5, 0],
              "affinity": 5
            }
          ]
        },
        {
          "name": "The 'Invisible' Sword",
          "image_path": "/images/npcs/blacksmith-bear.png",
          "message": "Bramble has accidentally created an 'invisible' sword, which is just a regular sword painted with transparent paint. He needs your assistance to convince the enthusiastic buyer. Will you help him pull off this hilarious ruse?",
          "choices": [
            {
              "description": "Help Bramble sell the 'invisible' sword with a straight face",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [5, 10],
              "affinity": 15
            },
            {
              "description": "Sarcastically advertise the 'invisible' sword as a 'must-have' for invisible warriors",
              "health": [0, 0],
              "charisma": [20, 25],
              "karma": [-5, 0],
              "affinity": 10
            }
          ]
        },
        {
          "name": "The 'Super Heavy' Armor",
          "image_path": "/images/npcs/blacksmith-bear.png",
          "message": "Bramble has accidentally crafted a set of 'super heavy' armor that is impossibly heavy to wear. He asks for your assistance in making it appear as a 'high-end' fashion statement. Will you help him with this comical conundrum?",
          "choices": [
            {
              "description": "Help Bramble market the 'super heavy' armor as a unique fashion trend",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [5, 10],
              "affinity": 20
            },
            {
              "description": "Sarcastically suggest attaching wheels to the armor for mobility",
              "health": [0, 0],
              "charisma": [20, 25],
              "karma": [-5, 0],
              "affinity": 15
            }
          ]
        }
      ]
    },
    {
      "name": "Thistle the Troubadour-Rabbit",
      "description": "Thistle is a witty and humorous troubadour-rabbit known for his clever songs and quick quips.",
      "image_path": "/images/npcs/troubadour-rabbit.png",
      "initial_affinity": 0,
      "events": [
        {
          "name": "The Prankster's Serenade",
          "image_path": "/images/npcs/troubadour-rabbit.png",
          "message": "Thistle offers to compose a funny and lighthearted serenade to play a harmless prank on a friend. Will you assist him in this mischievous endeavor?",
          "choices": [
            {
              "description": "Help Thistle with the prank serenade",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [-5, 0],
              "affinity": 15
            },
            {
              "description": "Decline the prank serenade",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Sarcastic Bard",
          "image_path": "/images/npcs/troubadour-rabbit.png",
          "message": "Thistle challenges you to a battle of sarcastic insults and witty comebacks. Are you up for the humorous duel?",
          "choices": [
            {
              "description": "Accept the sarcastic duel with Thistle",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [-5, 0],
              "affinity": 20
            },
            {
              "description": "Politely decline the sarcastic duel",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Mysterious Limerick",
          "image_path": "/images/npcs/troubadour-rabbit.png",
          "message": "Thistle presents you with a mysterious limerick that hints at a hidden treasure's location, but in a humorous and cryptic way. Will you embark on this comical treasure hunt with him?",
          "choices": [
            {
              "description": "Join Thistle in the comical treasure hunt",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [0, 0],
              "affinity": 15
            },
            {
              "description": "Laugh off the limerick and decline the treasure hunt",
              "health": [0, 0],
              "charisma": [-5, 0],
              "karma": [5, 10],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Haunted Castle Gig",
          "image_path": "/images/npcs/troubadour-rabbit.png",
          "message": "Thistle has a gig at the haunted castle known for its spooky residents. He invites you to accompany him, promising a dangerous yet hilarious night of music and adventure. Will you join him?",
          "choices": [
            {
              "description": "Brave the haunted castle gig with Thistle",
              "health": [-10, -5],
              "charisma": [10, 15],
              "karma": [-5, 0],
              "affinity": 10
            },
            {
              "description": "Politely decline the haunted gig, but wish him good luck",
              "health": [0, 0],
              "charisma": [-5, 0],
              "karma": [5, 10],
              "affinity": -5
            }
          ]
        },
        {
          "name": "The Peculiar Potion",
          "image_path": "/images/npcs/troubadour-rabbit.png",
          "message": "Thistle accidentally drank a peculiar potion that made him temporarily invisible but also somewhat mischievous. He needs your help to navigate the challenges of invisibility while causing harmless pranks. Are you up for the invisible adventure?",
          "choices": [
            {
              "description": "Embark on the invisible adventure with Thistle",
              "health": [0, 0],
              "charisma": [10, 15],
              "karma": [-5, 0],
              "affinity": 15
            },
            {
              "description": "Decline the invisible adventure, fearing the consequences",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        },
        {
          "name": "The Lighthearted Dragon Duel",
          "image_path": "/images/npcs/troubadour-rabbit.png",
          "message": "Thistle challenges you to a duel with a good-natured and comical dragon who loves riddles and puns. Are you willing to face this humorous dragon in a lighthearted battle of wits?",
          "choices": [
            {
              "description": "Accept Thistle's duel against the humorous dragon",
              "health": [0, 0],
              "charisma": [15, 20],
              "karma": [-5, 0],
              "affinity": 20
            },
            {
              "description": "Politely decline the duel, not quite ready for punny dragon battles",
              "health": [0, 0],
              "charisma": [-10, -5],
              "karma": [5, 10],
              "affinity": -10
            }
          ]
        }
      ]
    }
  ]
});
