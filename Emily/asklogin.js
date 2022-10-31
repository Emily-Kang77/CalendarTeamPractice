

let username = prompt("What is your username?", '');

if(username == "Admin") {

    let password = prompt("Correct. What is your password? ", '');
    let answer = false; 

    // keep looping until no input or correct input. maybe do while?
    while(answer === false) {
        if(password === "AdminPass") {
            alert("Welcome!");
            answer = true; // exit while loop
        } else if (password) {
            alert("Wrong password. See ya later.")
            // continue while loop
        } else {
            alert("You haven't entered anything. Ending program.");
            answer = null; // also exit while loop.
        }
    }
    
//username is a non-empty string
} else if (username) { 
    alert("I see that you entered a username, but I don't know you.");
} else {
    alert("You haven't entered anything.");
}




