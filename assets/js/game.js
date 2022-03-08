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

var startGame = function () { // function to start a new game
        // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
      var storeConfirm= window.confirm("Would you like to shop?");
        if (storeConfirm){
          shop();
        }
}
  }
  else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
}
}

// play again
endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0){
    window.alert("Congrats! You survived the game! You now have a score of " + playerMoney);
      }
  else {
    window.alert("You've lost your robot in battle :(");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
  // restart the game
  startGame();
  } 
  else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() { 
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
    
  switch (shopOptionPrompt) {   // use switch to carry out action
    case "REFILL": // new case
    case "refill":

    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth = playerHealth + 20;  // increase health and decrease money
      playerMoney = playerMoney - 7;
    }

    else {
      window.alert("You don't have enough money!");
    }

    break;

  case "UPGRADE": // new case
  case "upgrade":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      playerAttack = playerAttack + 6;   // increase attack and decrease money
      playerMoney = playerMoney - 7;
    }

    else {
      window.alert("You don't have enough money!");
    }
    break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;// do nothing, so function will end

    default:
      window.alert("You did not pick a valid option. Try again.");
      break;  // call shop() again to force player to pick a valid option
  }
};  

startGame();    // start the game when the page loads