/*
app.route.post("/register", async function(req, cb){
    var object = {
        countryId: req.query.countyId,
        countryCode: req.query.countryCode,
        email: req.query.email,
        name: req.query.name,
        password: req.query.password,
        type: req.query.type
    };
})
*/

app.route.post("/login", async function(req, cb){
    var object = {
        email: req.query.email,
        password: req.query.password,
        secret: req.query
    }
})  