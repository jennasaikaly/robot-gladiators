// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
      if (promptFight === "skip" || promptFight === "SKIP") {
      
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
          if (confirmSkip) {
              window.alert(playerName + ' has decided to skip this fight. Goodbye!');
              playerMoney = playerMoney - 10;
              console.log("playerMoney", playerMoney);
              break;
          }

          else {
            fight();
          }
      }

      else (promptFight ==="fight" || promptFight === "FIGHT") {

      
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        
        if (enemyHealth <= 0) {                     // check enemy's health
          window.alert(enemyName + ' has died!');
          playerMoney = playerMoney + 20;           // award player money for winning
          break;                                    // leave while() loop since enemy is dead
        } 
        
        else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
   
  }// end of fight function
}

      // if no (false) (if they click 'cancel' in the prompt), ask question again by running fight() again
    else {
      fight();
    }
  }

  else {
  window.alert("You need to choose a valid option. Try again!");
  }
  

  for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
  // call fight function with enemy-robot
    fight(pickedEnemyName);
    }
  

//fight();