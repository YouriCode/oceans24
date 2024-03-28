#include <WiFi.h>
#include <ArduinoWebsockets.h>

const char* ssid = "iphone13"; 
const char* password = "xiao0718";
const char* websocket_server = "http://172.20.10.13:3000"; 

using namespace websockets;
WebsocketsClient client;

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected");

    client.connect(websocket_server);
    
}

void onMessage(WebsocketsMessage message) {
    Serial.print("Got Message: ");
    Serial.println(message.data());
}

void loop() {
    client.onMessage(onMessage);
    client.poll();
}

