module.exports = {
    name: "Employer",
    fields: [
        {
            name: 'name',
            type: 'String',
            not_null: true,
            length: 100,
            unique: true,
            primary_key: true
        },
        {
            name: 'publickey',
            type: 'String',
            length: 100,
            not_null: true,
            unique: true,
        },
    ]
}