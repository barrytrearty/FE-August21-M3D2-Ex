"strict mode";

const empty = 1;

const displayUser = function (object) {
  let userDisplayArea = document.getElementById("display-area");
  userDisplayArea.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${object.results[0].picture.large}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${object.results[0].name.first}</h5>
  <p class="card-text">${object.results[0].location.city}</p>
</div>
</div>`;
};

const generateRandomUser = function () {
  return (
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      //   .then((response) => console.log(response))
      .then((response) => {
        console.log(response);
        displayUser(response);
      })
      .catch((response) => console.log(response))
  );
};
