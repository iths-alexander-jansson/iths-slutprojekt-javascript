var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var wind = document.querySelector(".wind");
var icon = document.querySelector(".weathericon");
var button = document.querySelector(".submit");

button.addEventListener("click", function(name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&units=metric&appid=ac7c5794cae68fbec39dba14f3f51258"
  )
    .then(response => response.json())
    .then(data => {
      var tempVal = data["main"]["temp"];
      var tempValue = tempVal.toFixed(0);
      var nameValue = data["name"];
      var windValue = data["wind"]["speed"];
      var descValue = data["weather"][0]["main"];
      var iconValue =
        "http://openweathermap.org/img/w/" +
        data["weather"][0]["icon"] +
        ".png";

      main.innerHTML = "Current weather and wind in: " + nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue + " °C";
      icon.src = iconValue;
      input.value = "";
      wind.innerHTML = windValue + " m/s";
    })

    .catch(err =>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          "Something went wrong! You entered a invalid city, or maybe you just misspelled? Try again!"
      })
    );
});
