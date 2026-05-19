#include <SPI.h>
#include <MFRC522.h>

// Define pins for the RFID reader
#define RST_PIN         9          
#define SS_PIN          10         

// Create the instance for the reader
MFRC522 mfrc522(SS_PIN, RST_PIN);  

void setup() {
  Serial.begin(9600);   // Start serial communication to talk to the computer
  SPI.begin();          // Start the SPI bus
  mfrc522.PCD_Init();   // Initialize the MFRC522 hardware
  Serial.println("System Ready: Scan an animal card...");
}

void loop() {
  // Look for new cards. If none are present, stop and restart the loop
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  // Select one of the cards. If it can't be read, stop and restart the loop
  if ( ! mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  // Variable to store the UID as a readable String
  String readUID = "";

  // Loop through the 4 bytes of the card's UID and build a String
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    // If the byte is less than 10 (hex), add a leading zero for consistency
    readUID.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : ""));
    // Add the byte value in HEX format
    readUID.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  
  // Convert everything to uppercase to avoid matching errors
  readUID.toUpperCase();

  // --- LOGIC TO IDENTIFY ANIMALS ---
  // Replace "XXXXXXXX" with the UIDs you get from your Serial Monitor

  if (readUID == "2B45BC1B") {
    Serial.println("HORSE");
  } 
  else if (readUID == "DB60BB1B") {
    Serial.println("PIG");
  } 
  else if (readUID == "04D3B3A1882681") {
    Serial.println("GIRAFFE");
  } 
  else if (readUID == "XXXXXXXX") {
    Serial.println("CHICKEN");
  } 
  else if (readUID == "XXXXXXXX") {
    Serial.println("MONKEY");
  } 
  else if (readUID == "047CC6A1882681") {
    Serial.println("LION");
  } 
  else if (readUID == "XXXXXXXX") {
    Serial.println("SHEEP");
  } 
  else if (readUID == "044ED1A1882681") {
    Serial.println("TIGER");
  } 
  else if (readUID == "XXXXXXXX") {
    Serial.println("ELEPHANT");
  } 
  else if (readUID == "XXXXXXXX") {
    Serial.println("COW");
  } 
  else {
    // If a card is scanned but doesn't match the IDs above
    Serial.print("Unknown Card: ");
    Serial.println(readUID);
  }

  // Halt PICC: Stops the reader from reading the same card multiple times instantly
  mfrc522.PICC_HaltA();
  
  // Delay for a second to give the computer/webpage time to process
  delay(1000); 
}


// Include the library
#include <SimpleWebSerial.h>

// Create an instance of the library
SimpleWebSerial WebSerial;

void setup() {
  // Initialize serial communication
  Serial.begin(57600);
  
  // Define events to listen to and their callback
  WebSerial.on("event-to-arduino", eventCallback); 
  
  // Send named events to browser with a number, string, array or json object
  WebSerial.send("event-from-arduino", 123);
}

void eventCallback(JSONVar data) {
    // Do something, even sending events right back!
    WebSerial.send("event-from-arduino", data);
};

void loop() {
  // Check for new serial data every loop
  WebSerial.check();
  delay(5);
}