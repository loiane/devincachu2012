Ext.define("DevInCachu.view.ContatosList", {
    extend: "Ext.dataview.List",
    alias: "widget.contatoslist",
    config: {
        loadingText: "Carregando Contatos...",
        emptyText: "<div class=\"contatos-list-empty-text\">Nenhum contato encontrado.</div>",
        onItemDisclosure: true,
        grouped: true,
        itemTpl: "<div class=\"list-item-title\">{nome}</div></div>"       
    }
});