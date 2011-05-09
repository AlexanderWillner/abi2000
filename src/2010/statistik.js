var orte = [
["Wunstorf", "52.427027", "9.429596"]
,["London", "51.5001524", "-0.1262362"]
,["Berlin", "52.5234051", "13.4113999"]
,["Hamburg", "53.5538148", "9.9915752"]
,["Gümmer", "52.407351", "9.534544"]
,["Hannover Südstadt", "52.3591895", "9.7510462"]
,["Seelze", "52.397057", "9.589607"]
,["Barsinghausen", "52.3050258", "9.462188"]
,["Hannover Oststadt", "52.379952", "9.744167"]
,["Hannover", "52.3720683", "9.7356861"]
,["Berlin", "52.5234051", "13.4113999"]
,["Berlin", "52.5234051", "13.4113999"]
,["Letter", "52.396913", "9.64129"]
,["Hannover", "52.3720683", "9.7356861"]
,["Bremen", "53.074981", "8.807081"]
,["Wunstorf", "52.427027", "9.429596"]
,["Hannover", "52.3720683", "9.7356861"]
,["Mainz", "49.9951227", "8.2674264"]
,["Wolfsburg", "52.4218204", "10.7849799"]
,["Letter", "52.396913", "9.64129"]
,["Berlin", "52.5234051", "13.4113999"]
,["Lathwehren", "52.361973", "9.539238"]
,["Kiel", "54.322684", "10.13586"]
,["Seelze", "52.397057", "9.589607"]
,["Regensburg", "49.016491", "12.100904"]
,["Berlin", "52.5234051", "13.4113999"]
,["Linden", "50.5374567", "8.6495877"]
,["Herenberg", "48.5961423", "8.8700924"]
,["Bremen", "53.074981", "8.807081"]
,["Kiel", "54.322684", "10.13586"]
,["Koblenz", "50.3566962", "7.5996166"]
,["München", "48.1391265", "11.5801863"]
,["Hannover", "52.3720683", "9.7356861"]
,["Garbsen", "52.413849", "9.588131"]
,["Letter", "52.396913", "9.64129"]
,["Seelze", "52.397057", "9.589607"]
,["Hannover", "52.3720683", "9.7356861"]
,["Lünen", "51.618117", "7.524524"]
    ];

var gm = (window.google || {}).maps;
var geocoder = new gm.Geocoder();

var map = new Ext.Map({
    title: 'Map',        // Name that appears on this tab
    getLocation: true,   // Gets user's current location
    mapOptions: {        // Used in rendering map
        zoom: 5,
        center: new gm.LatLng(52, 9)
    },
    listeners : {
        maprender: initGoogleMaps
    }
});

function initGoogleMaps() {
    for (i=0;i<orte.length;i++) {
        //window.setTimeout("createMarker('"+orte[i]+"')", 1000 * i);
        new gm.Marker({
            map: map.map,
            position: new gm.LatLng(orte[i][1], orte[i][2]),
            title: orte[i][0]});
    }
}

function createMarker(address) {
    geocoder.geocode( { 'address': address, 'region': 'de', 'language': 'de'}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log('["' + address + '", "'+results[0].geometry.location.lat()+'", "'+results[0].geometry.location.lng()+'"]');
        var marker = new google.maps.Marker({
            map: map.map,
            position: results[0].geometry.location,
            title: address
        });
      } else {
        console.log("Geocode for '" + address + "' was not successful for the following reason: " + status);
      }
    });
}

_2010.Statistik = new Ext.TabPanel({
    id: 'statistic2010',
    sortable: true,
    ui: 'dark',
    items: [{
        title: 'Allgemeines',
        cls: 'card',
        xtype: 'form',
        scroll: 'vertical',
        options: [],
        items: [
            {
                xtype: 'textfield',
                label: 'Erreicht',
                placeHolder: '83%',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'Zusagen',
                placeHolder: '47',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'Absagen',
                placeHolder: '18',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'Ungewiss',
                placeHolder: '19',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'StudiVZ',
                placeHolder: '14',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'Xing',
                placeHolder: '20',
                disabled: true,
                labelWidth: '55%'
            }, {
                xtype: 'textfield',
                label: 'Facebook',
                placeHolder: '41',
                disabled: true,
                labelWidth: '55%'
            }]
    },
    {
        options: [],
        title: 'Auswertung',
        scroll: 'vertical',
//        html: '<a href="./external/2010/statistik/stat1.png"><img class="album" src="./external/2010/statistik/stat1.png" /></a><a href="./external/2010/statistik/stat2.png"><img class="album" src="./external/2010/statistik/stat2.png" /><a/><a href="./external/2010/statistik/stat3.png"><img class="album" src="./external/2010/statistik/stat3.png" /><a/><a href="./external/2010/statistik/stat4.png"><img class="album" src="./external/2010/statistik/stat4.png" /><a/><a href="./external/2010/statistik/stat5.png"><img class="album" src="./external/2010/statistik/stat5.png" /></a>',
        html: '<img class="album" src="./external/2010/statistik/stat1.png" /><img class="album" src="./external/2010/statistik/stat2.png" /><img class="album" src="./external/2010/statistik/stat3.png" /><img class="album" src="./external/2010/statistik/stat4.png" /><img class="album" src="./external/2010/statistik/stat5.png" />',
        cls: 'card'
    },
    {
        options: [],
        title: 'Karte',
        items: [map],
        cls: 'card'
    }]
});
