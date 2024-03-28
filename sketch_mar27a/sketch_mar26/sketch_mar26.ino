#include <Adafruit_NeoPixel.h>

// Déclaration des broches pour chaque bande de LEDs
int pinBleu = 14;
int pinVert = 32;
int pinRouge = 15;

int numPixel = 34; // Nombre de LEDs contenues dans chaque ruban

// On déclare les bandes de LEDs
Adafruit_NeoPixel bandeBleue = Adafruit_NeoPixel(numPixel, pinBleu, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel bandeVerte = Adafruit_NeoPixel(numPixel, pinVert, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel bandeRouge = Adafruit_NeoPixel(numPixel, pinRouge, NEO_GRB + NEO_KHZ800);

void setup() {
  bandeBleue.begin();
  bandeVerte.begin();
  bandeRouge.begin();
}

void loop() {
  // Rouge pour toutes les LEDs sur les trois bandes, une après l'autre
  chaseAllBands(255, 0, 0); // Rouge

  // Bleu pour deux bandes, une LED après l'autre
  chaseTwoBands(0, 0, 255); // Bleu

  // Vert pour une bande, une LED après l'autre
  chaseOneBand(0, 255, 0); // Vert
}

void chaseAllBands(byte red, byte green, byte blue) {
  for(int i = 0; i < numPixel; i++) {
    setAllBands(i, red, green, blue);
    delay(100);
  }
  clearAllBands();
}

void chaseTwoBands(byte red, byte green, byte blue) {
  for(int i = 0; i < numPixel; i++) {
    bandeRouge.setPixelColor(i, bandeRouge.Color(red, green, blue));
    bandeVerte.setPixelColor(i, bandeVerte.Color(red, green, blue));
    if(i > 0) {
      bandeRouge.setPixelColor(i-1, 0);
      bandeVerte.setPixelColor(i-1, 0);
    }
    bandeRouge.show();
    bandeVerte.show();
    delay(100);
  }
  clearAllBands();
}

void chaseOneBand(byte red, byte green, byte blue) {
  for(int i = 0; i < numPixel; i++) {
    bandeRouge.setPixelColor(i, bandeRouge.Color(red, green, blue));
    if(i > 0) bandeRouge.setPixelColor(i-1, 0);
    bandeRouge.show();
    delay(100);
  }
  clearAllBands();
}

void setAllBands(int i, byte red, byte green, byte blue) {
  bandeRouge.setPixelColor(i, bandeRouge.Color(red, green, blue));
  bandeVerte.setPixelColor(i, bandeVerte.Color(red, green, blue));
  bandeBleue.setPixelColor(i, bandeBleue.Color(red, green, blue));
  if(i > 0) {
    bandeRouge.setPixelColor(i-1, 0);
    bandeVerte.setPixelColor(i-1, 0);
    bandeBleue.setPixelColor(i-1, 0);
  }
  bandeRouge.show();
  bandeVerte.show();
  bandeBleue.show();
}

void clearAllBands() {
  bandeBleue.clear();
  bandeVerte.clear();
  bandeRouge.clear();
  bandeBleue.show();
  bandeVerte.show();
  bandeRouge.show();
}
