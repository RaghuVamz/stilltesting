module.exports = {

    name: 'PaySlip',
    fields: [
        {
            name: 'id',
            type: 'String',
            not_null: true,
            unique: true,
            length: 50,
            primary_key: true
        },
        {
            name: 'email',
            type: 'String',
            not_null: true,
            length: 50,
            unique: true,
        },
        {
            name: 'empid',
            type: 'String',
            length: 50,
            not_null: true,
            unique: true,
        },
        {
            name: 'name',
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'designation',
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'asalary',   // Actual Salary
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'month',
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'year',
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'pendingpt',  // Deduction
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'lop',   // Loss of pay Deduction
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'pmd', //   Pending amount from previous months
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'ptd', // PT Deduction Amount
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'td',  // Tedious Deduction
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'reim',  // Reimbursement
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'pa',  // Pending addition amount of salary from previous months
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'sdays',  // Total number of salary days
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'fsalary', // Salary amount to be paid
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'gsalary',  // Salary given
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'leaves', // No. of leaves
            type: 'String',
            length: 50,
            not_null: true,
        },
        {
            name: 'employer', 
            type: 'String',
            length: 50,
            not_null: true,
        }
    ]
}