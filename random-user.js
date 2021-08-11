"strict mode";

const displayUser = function (object) {
  let userDisplayArea = document.getElementById("display-area");
  //   userDisplayArea.innerHTML +

  let newUser = `<div class="card" style="width: 18rem;">
<img src="${object[0].picture.large}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${object[0].name.first}</h5>
  <p class="card-text">${object[0].location.city}</p>
</div>
</div>`;

  userDisplayArea.insertAdjacentHTML("afterbegin", newUser);
};

const generateRandomUser = function () {
  return (
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      //   .then((response) => console.log(response))
      .then((user) => {
        console.log(user);
        displayUser(user.results);
      })
      .catch((error) => console.log(error))
  );
};
//?results=50
