#include <WiFi.h>
#include <ArduinoWebsockets.h>

const char* ssid = "YOUR_WIFI_SSID"; 
const char* password = "YOUR_WIFI_PASSWORD";
const char* websocket_server = "ws://localhost:3000"; 

using namespace websockets;
WebsocketsClient client;

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }

    client.onMessage(onMessage);
    client.connect(websocket_server);
}

void onMessage(WebsocketsMessage message) {
    Serial.print("Got Message: ");
    Serial.println(message.data());
}

void loop() {
    client.poll();
}

