/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type Listr from 'listr'

/* eslint-disable no-console */
class Renderer implements Listr.ListrRendererClass<any> {
  private readonly _tasks: ReadonlyArray<Listr.ListrTaskObject<any>>
  private readonly _options: Listr.ListrOptions<any>
  public get options (): Listr.ListrOptions<any> {
    return this._options
  }

  constructor (tasks: ReadonlyArray<Listr.ListrTaskObject<any>>, options: Listr.ListrOptions<any>) {
    this._tasks = tasks
    this._options = Object.assign({}, options)
  }

  nonTTY: boolean = false

  static get nonTTY () {
    // console.log(this._options)
    return true
  }

  render () {
    for (const task of this._tasks) {
      // console.log(Object.keys(task))
      (Object.keys(task) as Array<keyof Listr.ListrTaskObject<any> & string>).forEach((prop: keyof Listr.ListrTaskObject<any> & string) => console.log(prop, typeof task[prop]))
      task.subscribe((event: any) => {
        if (event.type === 'STATE' && task.isPending()) {
          console.log(`${task.title} [started]`)
        }
        if (task.isCompleted()) {
          for (const subtask of task.subtasks) {
            console.log(subtask)
            // subtask.subscribe((event: any) => {

            // })
          }
        }
      })
    }
  }

  end (err: Error) {
    if (err != null) {
      console.error(err)
    }
  }
}

export { Renderer }
