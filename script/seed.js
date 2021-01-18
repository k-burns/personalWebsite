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
      img: '',
      github: 'https://github.com/GeniusGuava/StressedBrains',
      deployed: 'https://stressed-brains.herokuapp.com/'
    }),
    Projects.create({
      title: 'Just Ducks',
      details:
        'E-commerce website providing a fun and smooth buying experience for rubber ducks',
      img: '',
      github: '​https://github.com/Honey-Bunches-Grace-Shopper/J​ ustDucks',
      deployed: 'https://justducks.herokuapp.com/'
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
