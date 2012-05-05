Ext.define("DevInCachu.store.Contatos", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "DevInCachu.model.Contato",
        proxy: {
            type: 'localstorage',
            id: 'contatos-store'
        },
        sorters: [{ property: 'nome', direction: 'ASC'}],
        grouper: {
            groupFn: function(record) {
                return record.get('nome')[0].toUpperCase();
            }
        }
    }
});
