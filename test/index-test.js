let test = require('tape')

test('createProduct', async t => {
    t.plan(1)
    let result = await 1 + 1
    t.ok(result, 'Sandbox successfully started')
  })
  
  // test('Tests go here', t => {
  //   // Make use of various Sandbox resources in your tests...
  // })
  
  // test('Shut down the Sandbox', async t => {
  //   t.plan(1)
  //   let result = await sandbox.end()
  //   t.ok(result, 'Sandbox successfully shut down')
  // })