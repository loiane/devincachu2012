/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('DevInCachu.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'DevInCachu.view.contato.Grid',
        'DevInCachu.view.contato.Formulario'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'contatogrid'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});