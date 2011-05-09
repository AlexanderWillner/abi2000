_2005.Statistik = new Ext.TabPanel({
    scroll: 'vertical',
    sortable: true,
    ui: 'dark',
    items: [{
        title: 'Allgemeines',
        cls: 'card',
        xtype: 'form',
        items: [
            {
                xtype: 'textfield',
                label: 'Erreicht',
                placeHolder: '87%',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'Zusagen',
                placeHolder: '63',
                disabled: true,
                labelWidth: '55%'
            }]
    }]
});
