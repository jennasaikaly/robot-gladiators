var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 80;
var enemyAttack = 12;

var fight = function(enemyName) {
  while (playerHealth > 0 & enemyHealth > 0 ) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    if (promptFight ==="skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you Sure");
        if (confirmSkip) {
          window.alert(playerName + 'has decided to skip this fight.  Goodbye!');
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney);
          break;
        }
      }
        
    enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
      }

      else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
      }   
      
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " still has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          break;
        }
        else {
          window.alert(playerName + " still has " + playerHealth + " health left."
          );
        }
      
      } // end of while loop
}; // end of fight function

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
}
}