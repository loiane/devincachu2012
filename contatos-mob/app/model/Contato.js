Ext.define("DevInCachu.model.Contato", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'nome', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'email', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'nome', message: 'Por favor, informe o nome.' },
            { type: 'presence', field: 'phone', message: 'Por favor, informe o telefone.' }
        ]
    }
});