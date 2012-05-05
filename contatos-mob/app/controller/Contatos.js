Ext.define("DevInCachu.controller.Contatos", {

    extend: "Ext.app.Controller",
    
    config: {

        stores: ['Contatos'],

        models: ['Contato'],

        refs: {
            // We're going to lookup our views by xtype.
            contatosListContainer: "contatoslistcontainer",
            contatoEditor: "contatoeditor"
        },

        control: {
            'contatoslistcontainer contatoslist': {
                disclose: "editarContato"
            },
            'contatoslistcontainer button[action=new]': {
                tap: "criarContato"
            },
            'contatoeditor button[action=home]': {
                tap: "voltarParaHome"
            },
            'contatoeditor button[action=save]': {
                tap: "salvarContato"
            },
            'contatoeditor button[action=delete]': {
                tap: "deletaContato"
            }
        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    
    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    ativarEditorContatos: function (record) {

        var contatoEditor = this.getContatoEditor();
        contatoEditor.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(contatoEditor, this.slideLeftTransition);
    },

    ativarListaContatos: function () {
        Ext.Viewport.animateActiveItem(this.getContatosListContainer(), this.slideRightTransition);
    },

    // Commands.
    criarContato: function () {

        var now = new Date();
        var contatoId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newContato = Ext.create("DevInCachu.model.Contato", {
            id: contatoId,
            nome: "",
            phone: "",
            email: ""
        });

        this.ativarEditorContatos(newContato); 
     
    },

    editarContato: function (list, record) {

        this.ativarEditorContatos(record);
    },

    salvarContato: function () {

        var contatoEditor = this.getContatoEditor();

        var currentContato = contatoEditor.getRecord();
        var newValues = contatoEditor.getValues();

        currentContato.set("nome", newValues.nome);
        currentContato.set("phone", newValues.phone);
        currentContato.set("email", newValues.email);

        var errors = currentContato.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('O-oh!', errors.getByField("nome")[0].getMessage(), Ext.emptyFn);
            currentContato.reject();
            return;
        }

        var contatosStore = Ext.getStore("Contatos");

        if (null == contatosStore.findRecord('id', currentContato.data.id)) {
            contatosStore.add(currentContato);
        }

        contatosStore.sync();

        contatosStore.sort([{ property: 'nome', direction: 'ASC'}]);

        this.ativarListaContatos();
    }, 

    deletaContato: function () {

        var contatoEditor = this.getContatoEditor();
        var currentContato = contatoEditor.getRecord();
        var contatosStore = Ext.getStore("Contatos");

        contatosStore.remove(currentContato);
        contatosStore.sync();

        this.ativarListaContatos();
    },

    voltarParaHome: function () {

        this.ativarListaContatos();
    },

    // Base Class functions.
    launch: function () {

        this.callParent(arguments);
        Ext.getStore("Contatos").load();
    },
    
    init: function () {
        this.callParent(arguments);
    }
});