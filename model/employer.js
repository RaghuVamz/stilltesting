module.exports = {
    name: "Employer",
    fields: [
        {
            name: 'name',
            type: 'String',
            not_null: true,
            unique: true,
            primary_key: true
        },
        {
            name: 'publickey',
            type: 'String',
            not_null: true,
            unique: true,
        },
    ]
}