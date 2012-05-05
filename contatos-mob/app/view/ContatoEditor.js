Ext.define("DevInCachu.view.ContatoEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.contatoeditor",
    config: {
        scrollable: 'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var backButton = {
            xtype: "button",
            ui: "back",
            text: "Home",
            action: 'home',
            scope: this
        };

        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "Salvar",
            action: 'save',
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Editar Contato",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            action: 'delete',
            scope: this
        };

        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };

        var nameEditor = {
            xtype: 'textfield',
            name: 'nome',
            label: 'Nome',
            required: true
        };

        var phoneEditor = {
            xtype: 'textfield',
            name: 'phone',
            label: 'Telefone',
            required: true
        };

        var emailEditor = {
            xtype: 'textfield',
            name: 'email',
            label: 'Email'
        };

        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [nameEditor, phoneEditor, emailEditor]
            },
            bottomToolbar
        ]);
    }

});

