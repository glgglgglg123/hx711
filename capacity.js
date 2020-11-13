// Remote Example1 - reciever
// for CHIRIMEN with:microbit

var microBitBle;
var channel;

async function connect() {
  // chirimen with micro:bitの初期化
  microBitBle = await microBitBleFactory.connect();
  msgDiv.innerHTML = "bluetooth接続が完了しました";

  // webSocketリレーの初期化
  var relay = RelayServer("achex", "chirimenSocket");
  channel = await relay.subscribe("chirimenMbitSensors");
  msgDiv.innerText = "achex web socketリレーサービスに接続しました";
  channel.onmessage = getMessage;
}

function getMessage(msg) {
  var mdata = msg.data;
  messageDiv.innerText = JSON.stringify(mdata);
  var rc = mdata.restcapacity;
  capacity.innerText = mdata.restcapacity;
}
