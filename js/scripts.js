    // Chiedi all'utente il suo nome,
    const firstName = prompt("what is your first name?")
    console.log("l'utente si chiama: ", firstName);

    // poi chiedi il suo cognome,
    const lastName = prompt("what is you last name");
    console.log("cognome dell utente e ", lastName);

    // poi chiedi il suo colore preferito
    const color = prompt("what is you favorit colours");
    console.log("colore preferito dell utente e", color);

    // Infine scrivi sulla pagina nomecognomecolorepreferito21
    let password = firstName +  lastName  +  color  + '21';
    console.log(password); 
    document.getElementById("mio_id").innerHTML = password;