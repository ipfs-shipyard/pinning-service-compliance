/* eslint-disable no-console */
import { Listr } from 'listr2'
// import { Renderer } from './Renderer'
import type { Check } from './Check'

// const tasks = new Listr([
//   {
//     title: 'Git',
//     task: () => {
//       return new Listr([
//         {
//           title: 'Waiting one second...',
//           task: async () => await new Promise((resolve, reject) => {
//             setTimeout(resolve, 1000)
//           })
//         },
//         {
//           title: 'Waiting two seconds...',
//           task: async () => await new Promise((resolve, reject) => {
//             setTimeout(resolve, 2000)
//           })
//         }
//       ], { concurrent: true })
//     }
//   },
//   {
//     title: 'Waiting one second...',
//     task: async () => await new Promise((resolve, reject) => {
//       setTimeout(resolve, 1000)
//     })
//   },
//   {
//     title: 'Waiting three seconds...',
//     task: async () => await new Promise((resolve, reject) => {
//       setTimeout(resolve, 3000)
//     })
//   }
// ])

// tasks.run().catch(err => {
//   console.error(err)
// })
// type CheckTask = Listr.ListrTask<Check>
class CheckRunner {
  //  = []

  constructor (private readonly checkTasks: Check[]) {
    // this.subTasks = new Listr(this.checkTasks)
  }

  public addCheckTask (task: Check) {
    this.checkTasks.push(task)
    this.getChecksListr()
  }

  public async run () {
    return await this.getChecksListr().run().catch((err) => {
      console.error('problem running checks')
      console.error(err)
    })
    // return this.checkTasks.reduce(async (lastCheck, currentCheck) => await lastCheck.then(currentCheck.task).catch((err) => {
    //   console.error('problem')
    //   console.error(err)
    // }), Promise.resolve())
  }

  private getChecksListr () {
    const things: any[] = this.checkTasks.map((check) => {
      return check
    })
    const subtasks = new Listr(things)
    return new Listr([
      {
        title: 'Pinning Service Compliance',
        task: () => subtasks
      }
    ], {
      // renderer: Renderer,
      exitOnError: false,
      rendererOptions: { collapse: false }
    })
  }
}

export { CheckRunner }
