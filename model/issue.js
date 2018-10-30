module.exports = {
    name: "Issue",
    fields: [
        {
            name: 'hash',
            type: 'String',
            not_null: true,
            unique: true,
            length: 50,
            primary_key: true
        },
        {
            name: 'sign',
            type: 'String',
            not_null: true,
            length: 50,
            unique: true,
        },
        {
            name: 'publickey',
            type: 'String',
            not_null: true,
            unique: true,
            length: 50,
        },
        {
            name: 'timestamp',
            type: 'String',
            not_null: true,
            length: 50,
            unique: true,
        },
    ]
}