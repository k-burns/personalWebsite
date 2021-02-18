const db = require('../server/db')
const {Projects, Team} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const projects = await Promise.all([
    Projects.create({
      title: `Ariadne's VIM`,
      details:
        'A Phaser 3 game designed to teach simple VIM commands in a fun puzzle adventure',
      img:
        'https://drive.google.com/uc?export=view&id=1xYtK39LOWAn1IPiG_a60Uaxi2IYZPf1v',
      github: 'https://github.com/GeniusGuava/StressedBrains',
      deployed: 'https://stressed-brains.herokuapp.com/'
    }),
    Projects.create({
      title: 'Just Ducks',
      details:
        'E-commerce website providing a fun and smooth buying experience for rubber ducks',
      img:
        'https://drive.google.com/uc?export=view&id=1a1o6n2LuYNBEFTzyhl8Llko2f4uJ8XuC',
      github: 'https://github.com/Honey-Bunches-Grace-Shopper/JustDucks',
      deployed: 'https://justducks.herokuapp.com/'
    }),
    Projects.create({
      title: `Don't Feed Ducks Bread`,
      details:
        'A relaxing Phaser 3 game about feeding ducks and how these snacks can help or hinder the ducks',
      img:
        'https://drive.google.com/uc?export=view&id=1pwxvZPBkEjuHNtgRN0Srl78vQ6rs1rsT',
      github: 'https://github.com/k-burns/DontFeedDucks'
    })
  ])

  console.log(`seeded ${projects.length} projects`)

  const team = await Promise.all([
    Team.create({
      name: 'Katelynn Burns',
      img:
        'https://drive.google.com/uc?export=view&id=1IXD5y1kGmrh8u8d5-a8TjyPErItgx7L6',
      stack: 'React',
      color: 'blue and red',
      experience: 'senior-level',
      hero: 'Iron Man',
      fact:
        'along with supervising her team, she is also mom to three live ducks'
    }),
    Team.create({
      name: 'NY Duck',
      img:
        'https://drive.google.com/uc?export=view&id=1eQKgT451ShTdzQTejxbmjtwWQiO70oZI',
      stack: 'Express',
      color: 'red',
      experience: 'mid-level',
      hero: 'Captain America',
      fact:
        'he actually prefers New Jersey bagels, he but is adamant that NYC pizza is the best'
    }),
    Team.create({
      name: 'Manga Blossom Duck',
      img:
        'https://drive.google.com/uc?export=view&id=1fDB9DLjAhann5nxsnhzuzPdM_8iHIiwf',
      stack: 'THREE.js',
      color: 'magenta',
      experience: 'entry-level',
      hero: 'Swamp Thing',
      fact:
        'she loves visiting the Brooklyn Botanical Garden, especially during Sakura Matsuri'
    }),
    Team.create({
      name: 'Mwah Mwah Duck',
      img:
        'https://drive.google.com/uc?export=view&id=1B_zWGuVC0hyS2HFW04OGBccgFh0FOUpj',
      stack: 'full-stack',
      color: 'purple',
      experience: 'mid-level',
      hero: 'Black Widow',
      fact:
        'their favorite activity is karaoke and they prefer to sing songs from Musicals'
    }),
    Team.create({
      name: 'Baby Zuko',
      img:
        'https://drive.google.com/uc?export=view&id=1saR5A1mnLMBHYjy4HpBmogikiNLOyVsh',
      stack: 'css',
      color: 'yellow',
      experience: 'entry-level',
      hero: 'Uncle Iroh',
      fact: 'he loves swimming and his favorite snacks are peas and mealworms'
    }),
    Team.create({
      name: 'Harley Quinn Duck',
      img:
        'https://drive.google.com/uc?export=view&id=1kcTC4SaW4Awh6keTy7unPmT27_-emdZh',
      stack: 'Phaser 3',
      color: 'read',
      experience: 'apprentice',
      hero: 'Posion Ivy',
      fact:
        'Her favorite game is whack-a-mole. She likes sushi and egg sandwiches.'
    })
  ])

  console.log(`seeded ${team.length} members`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
