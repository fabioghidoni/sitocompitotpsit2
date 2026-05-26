// La tua password è "MioSito2026" (Puoi generare il codice Base64 della tua password su b64.io)
const passwordCifrata = "forzamercedes2026"; 

// Controlla se l'utente ha già inserito la password corretta in passato
if (localStorage.getItem("sito_autorizzato") !== "true") {
  
  let tentativo = prompt("Sito protetto. Inserisci la password per accedere:");
  
  // Converte il tentativo in Base64 e lo confronta con la password cifrata
  if (tentativo && btoa(tentativo) === passwordCifrata) {
    // Salva l'accesso nel browser: non verrà più richiesto
    localStorage.setItem("sito_autorizzato", "true");
  } else {
    alert("Password errata! Accesso negato.");
    window.location.href = "https://google.com";
  }
}
