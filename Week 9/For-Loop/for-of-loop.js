var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for (var weather of weathers) {
    if (weather =="cloudy") {
        words += weather
        break;
    }
    words += weather + "\n";
}

console.log(words);