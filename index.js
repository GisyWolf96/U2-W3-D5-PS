const sectionOne = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
      { method: "GET" }
    );
    if (res.ok) {
      let song = await res.json();
      let songsList = song.data;
      let cardOne = document.getElementById("card-one");
      for (let i = 0; i < 4; i++) {
        cardOne.innerHTML += `
          <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;">
              <img src="${songsList[i].album.cover_medium}" class="card-img-top" alt="${songsList[i].title} pic" style="height: 65%">
              <div class="card-body d-flex flex-column justify-content-around">
                  <h5 class="card-title" id="title">${songsList[i].title}</h5>
                  <p class="card-text">Album ${songsList[i].album.title}</p>
              </div>     
          </div>
          `;
      }
    } else {
      console.log("nadie");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionOne();

const sectionTwo = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=cuandonadieve",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteSong = await res.json();
      let song = favouriteSong.data;
      let cardTwo = document.getElementById("card");
      cardTwo.innerHTML += `
          <div class="col-md-3">
              <img src="${song[0].album.cover_big}" class="img-fluid rounded-start" alt="${song[0].title}">
          </div>
          <div class="col-md-8">
              <div class="card-body ">
              <h5 class="card-title">${song[0].title}</h5>
              <p class="card-text pb-0"><small class="text-muted">${song[0].artist.name}</small></p>
              <p class="card-text pt-0"><small class="text-muted">Album ${song[0].album.title}</small></p>
              <p class="card-text">Written by Andrés Torres y Mauricio Rengifo and performed by Juan Pablo Isaza, Juan Pablo Villamil, Martín Vargas y Simón Vargas. The song, which talks about secret relationships that have to be kept out of sight and survive discreetly, is also accompanied by a video clip that pays homage to women and love.
              The clip focuses on love relationships and is expressed through dance, lots of color and romanticism ©copyright los40.com
          </div>
          </div>
            `;
    } else {
      console.log("nadie");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionTwo();

const sectionThree1 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=morat",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteAlbum = await res.json();
      let album = favouriteAlbum.data;
      let fristLabel = document.getElementById("first-label");
      fristLabel.innerHTML += `
        <img src="${album[10].album.cover_big}" class="d-block w-100" alt="${album[10].album.title}">
        <div class="carousel-caption d-none d-md-block bg-secondary  bg-opacity-50">
          <h5>${album[10].album.title}</h5>
        </div>
              `;
    } else {
      console.log("nadie");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionThree1();

const sectionThree2 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=apologize",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteAlbum = await res.json();
      let album = favouriteAlbum.data;
      let secondLabel = document.getElementById("second-label");
      secondLabel.innerHTML += `
        <img src="${album[0].album.cover_big}" class="d-block w-100" alt="${album[10].album.title}">
        <div class="carousel-caption d-none d-md-block bg-secondary  bg-opacity-50">
            <h5>${album[0].album.title}</h5>
        </div>
                `;
    } else {
      console.log("nadie");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionThree2();

const sectionThree3 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=ImStillStanding",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteAlbum = await res.json();
      let album = favouriteAlbum.data;
      let thirdLabel = document.getElementById("third-label");
      thirdLabel.innerHTML += `
        <img src="${album[0].album.cover_big}" class="d-block w-100" alt="${album[10].album.title}">
        <div class="carousel-caption d-none d-md-block bg-secondary bg-opacity-50">
            <h5>${album[0].album.title}</h5>
        </div>
                  `;
    } else {
      console.log("nadie");
    }
  } catch (error) {
    console.log(error);
  }
};
sectionThree3();
