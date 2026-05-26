// Scrivi qui la tua password reale tra le virgolette (es. "MiaPassword123")
const passwordCorretta = "MioSito2026"; 

// Funzione principale che controlla l'accesso
function controllaAccesso() {
  // Se l'utente è già stato autorizzato in passato, interrompe la funzione e mostra il sito
  if (localStorage.getItem("sito_autorizzato") === "true") {
    return; 
  }

  let tentativo = prompt("Sito protetto. Inserisci la password per accedere:");

  // Controlla se il tentativo è corretto (elimina anche eventuali spazi vuoti per errore)
  if (tentativo && tentativo.trim() === passwordCorretta) {
    localStorage.setItem("sito_autorizzato", "true");
  } else {
    alert("Password errata! Accesso negato.");
    window.location.href = "https://google.com";
  }
}

// Avvia il controllo immediatamente
controllaAccesso();
