function checkBrowser() {
    result = false;
    if (navigator.appVersion.indexOf("WebKit") != -1) {
        result = true;
    } else {
        alert("Das klappt mit deinem Browser leider z.Z. noch nicht - " +
              "solltest du das ändern wollen: Hilfe ist herzlich willkommen. " +
              "Momentan werden nur folgende Systeme unterstützt: " +
              "iPhone/iPad/Android/BlackBerry/Palm/Kindle/Safari/Chrome/Webkit." +
              "Auf der Seite ist auch ein kleines Video verlinkt, auf dem ihr " +
              "sehen könnt, was es damit auf sich hat.");
    }
    return result;
}
