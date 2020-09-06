function loadStates(event) {
  let states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (let i = 0; i < states.length; i += 1) {
    let newOption = document.createElement("option");
    newOption.innerHTML = states[i];
    document.querySelector('#states').appendChild(newOption);
  }
}
loadStates();
function verifyDate() {
  let date = document.getElementById('startDate');
  let dateArray = date.value.split("/");
  if (dateArray[0] > 12 || dateArray[0] < 1) {
    alert("Invalid Month");
  }
  if (dateArray[1] > 31 || dateArray[1] < 1) {
    alert("Invalid Day");
  }
  if (dateArray[2] < 0) {
    alert("Invalid Year");
  }
}
document.getElementById("button1").addEventListener("click", (event) => {
  event.preventDefault();
  verifyDate();

});