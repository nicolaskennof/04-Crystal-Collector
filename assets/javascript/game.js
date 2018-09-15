var wins = 0;
var win = "";
var losses = 0;
var counter = 0;
var crystalNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalvalueComp = [];

// To assign the target number and write it into the correct HTML div:
function randomNumber (x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
};

function resetCrystalNumber () {
    crystalNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
};

// To define the function that will assign a different value to each crystal
function uniqueCrystalNumber () {
    var index = randomNumber (0, crystalNumero.length - 1);
    var number = crystalNumero[index];
    console.log(index);
    crystalNumero = crystalNumero.filter(function(value){
    return value !== number;
    });
    console.log(crystalNumero);
    return number;
};

// To define the function that will push the unique crystal number into the HTML
function resetCrystalValues () {
    $("#diamond1").attr("data-crystalValue", uniqueCrystalNumber());
    $("#diamond2").attr("data-crystalValue", uniqueCrystalNumber());
    $("#diamond3").attr("data-crystalValue", uniqueCrystalNumber());
    $("#diamond4").attr("data-crystalValue", uniqueCrystalNumber());
};

// To define the target number and push it into the HTML
var targetNumber = randomNumber (19, 120);
console.log(targetNumber);
$("#randomNumber").text(targetNumber);

// To push the summing counter into the HTML
$("#currentResult").text(counter);

// To push the wins counter into the HTML
$("#wins").text(wins);

// To push the losses counter into the HTML
$("#losses").text(losses);

// To push the crystal pics in the HTML
var redDiamond = $("<img>", { 
    id: "diamond1",
    src: "assets/images/red_diamond.jpg",
    alt: "Red Diamond",
    class: "crystal"
  });
  redDiamond.appendTo($("#diamonds"));

var blueDiamond = $("<img>", { 
    id: "diamond2",
    src: "assets/images/blue_diamond.jpg",
    alt: "Blue Diamond",
    class: "crystal"
  });
  blueDiamond.appendTo($("#diamonds"));

var yellowDiamond = $("<img>", { 
    id: "diamond3",
    src: "assets/images/yellow_diamond.jpg",
    alt: "Yellow Diamond",
    class: "crystal"
  });
  yellowDiamond.appendTo($("#diamonds"));

var greenDiamond = $("<img>", { 
    id: "diamond4",
    src: "assets/images/green_diamond.jpg",
    alt: "Green Diamond",
    class: "crystal"
  });
  greenDiamond.appendTo($("#diamonds"));

resetCrystalValues ();

// To sum the values of the crystals and decide if won or lost as well as reset the game

$(".crystal").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#currentResult").text(counter);
    console.log(crystalValue);
    console.log(counter);
    if (counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
        counter = 0;
        $("#currentResult").text(counter);
        win = true;
        console.log(win);
        targetNumber = randomNumber (19, 120);
        resetCrystalNumber ();
        resetCrystalValues ();
        $("#randomNumber").text(targetNumber);
        $("#winsorloses").text("You won!!");

    }
    else if (counter >= targetNumber) {
        losses++;
        $("#losses").text(losses);
        counter = 0;
        $("#currentResult").text(counter);
        win = false;
        console.log(win);
        targetNumber = randomNumber (19, 120);
        resetCrystalNumber ();
        resetCrystalValues ();
        $("#randomNumber").text(targetNumber);
        $("#winsorloses").text("You lost!!");
    }
});