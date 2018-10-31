module.exports = {

    name: 'Employee',
    fields: [
        {
            name: 'email',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true,
        },
        {
            name: 'empID',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true,
        },
        {
            name: 'walletAddr',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true,
        },
        {
            name: 'salary',
            type: 'String',
            length: 100,
            not_null: true,
        },
    ]
}