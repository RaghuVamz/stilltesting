var ByteBuffer = require("bytebuffer");
var util = require("../utils/util.js");
var mail = require("../utils/sendmail");

module.exports = {

    issuePaySlip: async function(id, email, empid, name, designation, asalary, month, year, pendingpt, lop, pmd, ptd, td, reim, pa, sdays, fsalary, gsalary, leaves, secret, employer){

        var result = await app.model.Payslip.findOne({id: id, month: month, year: year, employer: employer});
        if(result) return "Payslip already issued";

        var paySlip = {
            id: id,
            email: email,
            empid: empid,
            name: name,
            designation: designation,
            asalary: asalary,
            month: month,
            year: year,
            pendingpt: pendingpt,
            lop: lop,
            pmd: pmd,
            ptd: ptd,
            td: td,
            reim: reim,
            pa: pa,
            sdays: sdays,
            fsalary: fsalary,
            gsalary: gsalary,
            leaves: leaves,
            employer: employer
        }

        app.sdb.create("PaySlip", paySlip);
        
        var hash = util.getHash(paySlip);
        var sign = util.getSignatureByHash(hash, secret);
        var publickey = util.getPublicKey(secret);
        var time = this.trs.timestamp;

        //var result = app.model.Employer.findOne({publickey: publickey});
        //var employer = result.name;\

        app.sdb.create("Issue", {
            hash: hash,
            sign: sign,
            publickey: publickey,
            timestamp: time,
        });  
        
        //Email

        var subject = "Payslip for the month " + month + " and year " + year + " issued"; 

        var text = JSON.stringify(paySlip);

        mail.sendMail(email, subject, text);
    },

    verify: async function(obj){
        
        //app.logger.debug(objtext);
        //var obj = JSON.parse(objtext);
        var objtext = JSON.stringify(obj);
        mail.sendMail("john@belfricsbt.com", "From verify", objtext);
        var hash = util.getHash(objtext);
        //var hash = util.getHash(objtext);

        var result = await app.model.Issue.findOne({hash: hash});

        if(!result) return "Hash not found";

        var result2 = await app.model.Employer.findOne({publickey: result.publickey});

        if(util.Verify(hash, result.sign, result.publickey) && result2.name === obj.employer) return "Wrong Employer Signature";

        return true;

    }
}