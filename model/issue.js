module.exports = {
    name: "IssuePaySlip",
    fields: [
        {
            name: 'hash',
            type: 'String',
            not_null: true,
            unique: true,
            primary_key: true
        },
        {
            name: 'sign',
            type: 'String',
            not_null: true,
            unique: true,
        },
        {
            name: 'publickey',
            type: 'String',
            not_null: true,
            unique: true,
        },
        {
            name: 'timestamp',
            type: 'String',
            not_null: true,
            unique: true,
        },
    ]
}