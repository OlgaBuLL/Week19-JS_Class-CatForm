class Cat {
  constructor(catName, sex, breed, feed) {
    this.catName = catName;
    this.sex = sex;
    this.breed = breed;
    this.feed = feed;
  }
}

function checkForm() {
  document.querySelector(".errorMax").innerHTML = "";
  let nameCat = document.getElementById("catName").value;

  if (nameCat.length > 10) {
    document.querySelector(
      ".errorMax"
    ).innerHTML = `Maxlength of "Cat's name" field should be not more than 10`;
  } else sendForm(nameCat);
}

function sendForm(nameCat) {
  let sexCat = document.querySelectorAll('input[type="radio"]:checked');
  let breedCat = document.querySelector("#breed").value;
  let feedCat = document.querySelectorAll('input[type="checkbox"]:checked');
  let feedChecked = "";
  for (let i = 0; i < sexCat.length; i++) {
    if (sexCat[i].value == 0) {
      sexCat = "Female";
    }
    if (sexCat[i].value == 1) sexCat = "Male";
  }
  for (let x = 0; x < feedCat.length; x++) {
    feedChecked += feedCat[x].value;
    if (x != feedCat.length - 1) feedChecked += ", ";
  }
  let cat = new Cat(nameCat, sexCat, breedCat, feedChecked);

  console.log(cat);
}
