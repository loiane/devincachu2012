Ext.define("DevInCachu.model.Contato", {
    extend: "Ext.data.Model",
    idProperty: 'id',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'nome', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' }
    ]
});