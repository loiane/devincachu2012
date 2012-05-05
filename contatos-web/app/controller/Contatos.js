Ext.define('DevInCachu.controller.Contatos', {
    extend: 'Ext.app.Controller',

    stores: ['Contatos'],

    models: ['Contato'],

    views: ['contato.Formulario', 'contato.Grid'],

    refs: [{
            ref: 'contatoPanel',
            selector: 'panel'
        },{
            ref: 'contatoGrid',
            selector: 'grid'
        }
    ],

    init: function() {

        this.control({
            'contatogrid dataview': {
                itemdblclick: this.editarContato
            },
            'contatogrid button[action=add]': {
            	click: this.editarContato
            },
            'contatogrid button[action=delete]': {
                click: this.deleteContato
            },
            'contatoform button[action=save]': {
                click: this.updateContato
            }
        });
    },

    editarContato: function(grid, record) {
        var edit = Ext.create('DevInCachu.view.contato.Formulario').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updateContato: function(button) {

       var contatosStore = Ext.getStore("Contatos");

        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var novo = false;
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('DevInCachu.model.Contato');
			record.set(values);
			contatosStore.add(record);
            novo = true;
		}
        
		win.close();
        contatosStore.sync();

        if (novo){ //faz reload para atualziar
            contatosStore.load();
        }
    },
    
    deleteContato: function(button) {
    	
    	var grid = this.getContatoGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        contatosStore = Ext.getStore("Contatos");

	    contatosStore.remove(record);
	    contatosStore.sync();

        //faz reload para atualziar
        contatosStore.load();
    }
});
