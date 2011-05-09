_Feedback.Mail = new Ext.form.FormPanel({
    items: [{
        xtype: 'fieldset',
        id: 'loginFormSet',
        title: '',
        items: [
            {
                xtype: 'textfield',
                placeHolder: 'Name (optional)',
                name: 'name',
                id: 'name',
                required: false,
            },
            {
                xtype: 'textfield',
                placeHolder: 'Feedback',
                name: 'feedback',
                id: 'feedback',
                required: true,
            },
            {
                xtype: 'button',
                text: 'Abschicken',
                ui: 'confirm',
                style: 'margin:2%;',
                handler: function() {
                    doLogin();
                }
            }
        ]
    }]
});

var doLogin = function()
{
   //display Loading indicator to user
    //mainPanel.setLoading(true, false);
    Ext.Ajax.request({
        url: './resources/php/feedback.php',
        method: 'post',
        params: {name: _Feedback.Mail.getValues().name, message: _Feedback.Mail.getValues().feedback},
        failure : function(response){
             Ext.Msg.alert('Das hat leider nicht geklappt.');
        },
        success: function(response, opts) {
            Ext.Msg.alert('Danke für das Feedback');
        }
    });
}
