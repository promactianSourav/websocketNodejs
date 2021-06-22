let { SmartAPI, WebSocket } = require("smartapi-javascript");

let web_socket = new WebSocket({
    client_code: "P335951",
    feed_token: "0965099017",
});

web_socket.connect().then(() => {
    web_socket.runScript("nse_cm|2885", "mw"); // SCRIPT: nse_cm|2885, mcx_fo|222900  TASK: mw|sfi|dp

    setTimeout(function() {
        web_socket.close();
    }, 60000);
});

web_socket.on("tick", receiveTick);

function receiveTick(data) {
    console.log("receiveTick:::::", data);
}