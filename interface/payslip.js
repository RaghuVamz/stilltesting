app.route.get('/payslip/:empname', async function(req){
    let result = await app.model.Payslip.findOne({
        condition:{empname:req.params.empname}
    })
    return result
})
app.route.get('/paylip/:empid', async function(req){
    let result = await app.model.Payslip.findOne({
        condition:{empid:req.params.empid}
    })
    return result
})