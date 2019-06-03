//variabler som referer til html elementene
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");

//variabler som referer til firebase
const db = firebase.database();
const kontakter = db.ref("kontakter");



//Registerer ny kontakte
function registrerKontakt(hendelse){
hendelse.preventDefault();
const key = inpTelefon.value;
const data = {
  "navn": inpNavn.value,
  "epost": inpEpost.value
  };
const kontakt = kontakter.child(key)
kontakt.set(data);
}

skjema.addEventListener("submit",registrerKontakt);

function visKontakt(snapshot){
  const kontakt = snapshot.val();
  const telefon = snapshot.key;
  secKontakter.innerHTML +=`
  <div>${kontakt.navn}</div>
  <div>${telefon}</div>
  <div>${kontakt.epost}</div>`;
}


kontakter.on("child_added",visKontakt);
