module.exports = {
    name: "Issue",
    fields: [
        {
            name: 'hash',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true
        },
        {
            name: 'sign',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true
        },
        {
            name: 'publickey',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true,
        }
    ]
}