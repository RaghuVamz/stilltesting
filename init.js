module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1001, 'hello.request')
  app.registerContract(1002, 'hello.respond')
  app.registerContract(1003, 'payroll.issuePaySlip')

  app.events.on('newBlock', (block) => {
    console.log('new block receive', block.height)
  })
}
