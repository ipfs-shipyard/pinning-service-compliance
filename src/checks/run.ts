/* eslint-disable no-console */
import Listr from 'listr'

const tasks = new Listr([
  {
    title: 'Git',
    task: () => {
      return new Listr([
        {
          title: 'Waiting one second...',
          task: async () => await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000)
          })
        },
        {
          title: 'Waiting two seconds...',
          task: async () => await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000)
          })
        }
      ], { concurrent: true })
    }
  },
  {
    title: 'Waiting one second...',
    task: async () => await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    })
  },
  {
    title: 'Waiting three seconds...',
    task: async () => await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000)
    })
  }
])

tasks.run().catch(err => {
  console.error(err)
})
