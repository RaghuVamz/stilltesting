module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1003, 'payroll.issuePaySlip')
  app.registerContract(1004, 'payroll.verify')
  app.registerFee(1003, '0', 'BEL')
  app.registerFee(1004, '0', 'BEL')


  app.events.on('newBlock', (block) => {
    console.log('new block receive', block.height)
  })
}