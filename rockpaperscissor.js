const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "scissor" ||
      userInput === "paper" ||
      userInput==="bomb"
    ) {
      return userInput;
    } else {
      console.log("Error");
    }
  };
  // console.log(getUserChoice("dada"))
  // function getComputerChoice(){
  //   Math.floor(Math.random() * 3);;
  // }
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "scissor";
      case 2:
        return "paper";
    }
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Sorry, Computer Won";
      } else {
        return "You are a winner";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissor") {
        return "Sorry, Computer won";
      } else {
        return "You are a winner";
      }
    }
    if (userChoice === "scissor") {
      if (computerChoice === "rock") {
        return "Sorry, Computer Won";
      }else{
        return "You are winner";
      }
    }
    if(userChoice==="bomb"){
      return "you are a winner"
    }
  }
  const playGame=()=>{
    const userChoice=getUserChoice("bomb");
    const computerChoice=getComputerChoice();
    console.log("you threw " + userChoice);
    console.log("the computer threw " + computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
  }
  playGame()
  