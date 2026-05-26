// Imposta qui la tua password reale (attenzione alle maiuscole/minuscole)
const passwordCorretta = "MioSito2026"; 

(function() {
  // 1. Se l'utente è già verificato, si ferma subito e mostra il sito
  if (localStorage.getItem("sito_autorizzato") === "true") {
    return;
  }

  // 2. Chiede la password
  let tentativo = prompt("Sito protetto. Inserisci la password:");

  // 3. Se l'utente clicca "Annulla" o lascia vuoto, devia su Google senza dare errore continuo
  if (tentativo === null || tentativo.trim() === "") {
    window.location.replace("https://google.com");
    return;
  }

  // 4. Confronta la password eliminando spazi prima o dopo
  if (tentativo.trim() === passwordCorretta) {
    localStorage.setItem("sito_autorizzato", "true");
    // Forza il ricaricamento pulito per mostrare il sito
    window.location.reload();
  } else {
    // Se sbaglia, cancella i vecchi dati salvati, avvisa e reindirizza
    localStorage.removeItem("sito_autorizzato");
    alert("Password errata!");
    window.location.replace("https://google.com");
  }
})();
