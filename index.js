const terminal = document.querySelector("#terminal");

function handleUserInput() {
  const userInput = prompt("Enter a command:");

  if (userInput === "ls") {
    console.log("File1.txt");
    console.log("File2.txt");
    console.log("Folder1");
  } else if (userInput.startsWith("cd")) {
    console.log("Changing directory to " + userInput.substring(3));
  } else if (userInput === "redirect") {
    window.location.href = "https://www.example.com";
  } else {
    console.log("Invalid command");
  }
}

terminal.addEventListener("click", handleUserInput);
