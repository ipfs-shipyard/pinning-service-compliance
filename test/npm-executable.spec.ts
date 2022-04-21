/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { exec, ExecException } from 'child_process'
import { expect } from 'aegir/utils/chai'
// import { describe } from 'yargs'

interface ExecSuccess {
  stdout: string
  stderr: string
}

const execPromise = async (cmd: string) => await new Promise<ExecException|ExecSuccess>((resolve, reject) => {
  exec(cmd, (error, stdout, stderr) => {
    console.log('stderr: ', stderr)
    console.log('stdout: ', stdout)
    console.log('error: ', error)
    if (error != null) {
      return reject(error)
    }
    resolve({ stdout, stderr })
  })
})
// exec('npm pack', function (error, pkgName, packageDetails) {
//   if (error != null) {
//     console.error(error)
//     process.exit(1)
//   }
//   console.log('error: ' + error)
//   console.log('stdout: ' + stdout)
//   console.log('stderr: ' + stderr)
// })
// const test = async () => {
//   const packResult = await execPromise('npm pack') as ExecSuccess
//   const packageName = packResult.stdout
//   const npxResult = await execPromise(`npx --yes -p ${packageName} -- -h`)
//   console.log('npxResult: ', npxResult)
// }

describe('npm pack', async () => {
  expect(async () => {
    const packResult = await execPromise('npm pack') as ExecSuccess
    const packageName = packResult.stdout
    expect(packageName).to.equal('@ipfs-shipyard/pinning-service-compliance')
  }, 'test').to.not.throw()
})
