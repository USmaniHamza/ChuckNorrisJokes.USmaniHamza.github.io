document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      if (response.type === "success") {
        // response.value.forEach is done because it depends of the api return
        //there might be other apis that returns the direct
        //arrays jeta ami response.forEach diyei korte parbo
        //since eta ekta binded object return kore
        // so type value naame property ase ekhane jeta amra dot diye access korbo
        // and like he said all apis are different
        // response.value.forEach is the array itself
        response.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
