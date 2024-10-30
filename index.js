// Pakete importieren
//     Importiere das Paket "cat-facts",
//     das zufällige Katzenfakten bereitstellt
import catFacts from "cat-facts";
//     Importiere das "inquirer"-Paket,
//     um Eingaben vom Benutzer zu ermöglichen
import inquirer from "inquirer";
//     Importiere das "boxen"-Paket,
//     um Text in einer Box mit Rand anzuzeigen
import boxen from "boxen";
//     Importiere das "chalk"-Paket,
//     um die Konsolenausgabe farblich zu formatieren
import chalk from "chalk";

//     Funktion zur Anzeige eines zufälligen Katzenfakts
function showCatFact() {
  //     Hole einen zufälligen Katzenfakt aus dem "cat-facts"-Paket und
  //     speichere ihn in der Variable "fact"
  const fact = catFacts.random();
  //     Erstelle eine Box um den Katzenfakt und
  //     färbe den Text grün
  const factBox = boxen(chalk.green(fact), {
    //     Setze den inneren Abstand der Box auf 1 Zeichen
    padding: 1,
    //     Setze den äußeren Abstand um die Box herum auf 1 Zeile
    margin: 1,
    //     Verwende einen doppelten Rand für die Box
    borderStyle: "double",
  });
  //     Zeige die Box mit dem Katzenfakt in der Konsole an
  console.log(factBox);
}

//     Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
  //     Starte die Abfrage nach Benutzerangaben und
  //     warte auf die Eingabe
  const answers = await inquirer.prompt([
    {
      //     Lege den Eingabetyp als Textfeld fest
      type: "input",
      //     Nenne das Eingabefeld "username",
      //     um auf den Benutzernamen zuzugreifen
      name: "username",
      //     Frage nach dem Namen des Benutzers
      message: "Wie lautet dein Name?",
    },
  ]);
  //     Gib den Benutzernamen zurück,
  //     um ihn später zu verwenden
  return answers.username;
}

//     Funktion für die Benutzerinteraktion
async function askForNewFact() {
  //     Starte eine Abfrage für eine Benutzerentscheidung
  const answers = await inquirer.prompt([
    {
      //     Setze den Abfragetyp als Bestätigungsfrage (Ja/Nein)
      type: "confirm",
      //     Nenne das Eingabefeld "getFact" für die Entscheidung
      name: "getFact",
      //     Frage den Benutzer,
      //     ob er einen Katzenfakt sehen möchte
      message: "Möchtest du einen Katzenfakt sehen?",
      //     Setze die Standardantwort auf "Ja" (true)
      default: true,
    },
  ]);
  //     Prüfe, ob der Benutzer "Ja" ausgewählt hat
  if (answers.getFact) {
    //     Wenn Ja, rufe die Funktion auf,
    //     um den Katzenfakt anzuzeigen
    showCatFact();
    //     Zeige eine Dankesnachricht in Gelb an
    console.log(chalk.yellow("Danke, dass du das Programm genutzt hast!"));
  } else {
    //     Wenn der Benutzer "Nein" ausgewählt hat
    console.log(chalk.yellow("Danke, dass du das Programm genutzt hast!")); // Zeige eine Dankesnachricht in Gelb an
    //     Beende das Programm mit dem Code 0 (ohne Fehler)
    process.exit(0);
  }
}

// Hauptfunktion
async function main() {
  //     Begrüße den Benutzer und färbe den Text blau
  console.log(chalk.blue("Willkommen zu deinem Katzenfakt-Tool!"));
  //     Rufe die Funktion auf,
  //     um den Benutzernamen zu erfragen und
  //     speichere ihn in der Variable "username"
  const username = await askForUsername();
  //     Begrüße den Benutzer mit seinem Namen in Blau
  console.log(chalk.blue(`Hallo ${username}, schön dich hier zu sehen!`));
  //     Rufe die Funktion auf,
  //     um die Benutzerinteraktion für die Katzenfakten zu starten
  await askForNewFact();
}

//     Hauptfunktion aufrufen
//     Starte das Programm,
//     indem die Hauptfunktion ausgeführt wird
main();
