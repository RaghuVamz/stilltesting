module.exports = {

    name: 'Employee',
    fields: [
        {
            name: 'id',
            type: 'String',
            not_null: true,
            unique: true,
            length: 100,
            primary_key: true
        },
        {
            name: 'email',
            type: 'String',
            not_null: true,
            length: 100,
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
            name: 'name',
            type: 'String',
            length: 100,
            not_null: true,
        },
        {
            name: 'mobile',
            type: 'String',
            not_null: true,
            length: 100,
            unique: true,
        },
        {
            name: 'designation',
            type: 'String',
            length: 100,
            not_null: true,
        },
        {
            name: 'walletAddr',
            type: 'String',
            not_null: true,
            length: 100,
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