sink.Structure = [
{
    text: '2005',
    cls: 'launchscreen',
    items: [
        {
            text: 'Statistik',
            card: _2005.Statistik,
            source: 'src/2005/statistik.js',
            leaf: true
        },
        {
            text: 'Fotos',
            card: _2005.Fotos,
            source: 'src/2005/fotos.js',
            leaf: true
        },
        ]
},
{
    text: '2010',
    cls: 'launchscreen',
    items: [
    {
        text: 'Statistik',
        card: _2010.Statistik,
        source: 'src/2010/statistik.js',
        leaf: true
    },
    {
        text: 'Fotos',
        card: _2010.Fotos,
        source: 'src/2010/fotos.js',
        leaf: true
    }]
},
{
    text: 'Feedback',
    card: _Feedback.Mail,
    source: 'src/feedback/mail.js',
    leaf: true
}
];


Ext.regModel('Demo', {
    fields: [
        {name: 'text',        type: 'string'},
        {name: 'source',      type: 'string'},
        {name: 'preventHide', type: 'boolean'},
        {name: 'cardSwitchAnimation'},
        {name: 'card'}
    ]
});

sink.StructureStore = new Ext.data.TreeStore({
    model: 'Demo',
    root: {
        items: sink.Structure
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
