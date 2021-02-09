const db = require('../server/db')
const {Projects} = require('../server/db/models')

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
