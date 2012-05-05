Ext.define("DevInCachu.view.ContatosListContainer", {
    extend: "Ext.Container",
    alias: "widget.contatoslistcontainer",

    initialize: function () {

        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'Novo',
            ui: 'action',
            action: 'new',
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'Meus Contatos',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                newButton
            ]
        };

        var notesList = {
            xtype: "contatoslist",
            store: Ext.getStore("Contatos")
        };

        this.add([topToolbar, notesList]);
    },

    config: {
        layout: {
            type: 'fit'
        }
    }
});