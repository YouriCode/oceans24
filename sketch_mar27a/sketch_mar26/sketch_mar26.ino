#include <Adafruit_NeoPixel.h> // La librairie NeoPixel

#define PIN 14         // La broche où l'on a branché le cercle de LED
#define NUMPIXELS  34  // Le nombre de LED contenu dans le cercle
// On utilise la librairie avec le modèle du cercle de LED
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin(); // On initialise les LEDs
  pixels.show(); // On allume les LEDs (pour s'assurer qu'elles sont éteintes au départ)
}

void loop() {
  for(int i = 0; i < NUMPIXELS; i++) {
    // Choix de la couleur selon la position de la LED
    switch (i % 3) {
      case 0: // Si le reste de la division de i par 3 est 0, on choisit rouge
        pixels.setPixelColor(i, pixels.Color(255, 0, 0)); // Rouge
        break;
      case 1: // Si le reste est 1, on choisit bleu
        pixels.setPixelColor(i, pixels.Color(0, 0, 255)); // Bleu
        break;
      case 2: // Si le reste est 2, on choisit vert
        pixels.setPixelColor(i, pixels.Color(0, 255, 0)); // Vert
        break;
    }
    pixels.show(); // On affiche le changement
    delay(200); // Délai entre l'allumage de chaque LED pour un effet de défilement
    pixels.clear(); // Optionnel: éteint toutes les LEDs avant d'allumer la suivante
  }
}