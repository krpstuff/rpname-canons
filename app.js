let canons = {};
let selectedCanon = "ophelia";

await fetch("./canons.json")
  .then((res) => res.json())
  .then((data) => (canons = data));

let fillCanonData = (canon) => {
  let canonData = canons[canon];
  for (let row in canonData) {
    document.getElementById(row).innerHTML = canonData[row];
  }
};

const dropdown = document.getElementById("canon-dropdown");
dropdown.addEventListener("change", (e) => {
  fillCanonData(e.target.value);
});

fillCanonData(selectedCanon);
