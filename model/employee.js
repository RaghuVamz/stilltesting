module.exports = {

    name: 'Employee',
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
            unique: true,
        },
        {
            name: 'empID',
            type: 'String',
            not_null: true,
            unique: true,
        },
        {
            name: 'name',
            type: 'String',
            not_null: true,
        },
        {
            name: 'mobile',
            type: 'String',
            not_null: true,
            unique: true,
        },
        {
            name: 'designation',
            type: 'String',
            not_null: true,
        },
        {
            name: 'walletAddr',
            type: 'String',
            not_null: true,
            unique: true,
        },
        {
            name: 'salary',
            type: 'String',
            not_null: true,
        },
    ]
}