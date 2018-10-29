module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1003, 'payroll.issuePaySlip')
  app.registerContract(1004, 'payroll.verify')


  app.events.on('newBlock', (block) => {
    console.log('new block receive', block.height)
  })
}