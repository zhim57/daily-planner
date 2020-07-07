
$(document).ready(function(){

var todayDate = $("#currentDay");
var momentJ = moment().format("dddd , MMMM Do YYYY");
todayDate.text(momentJ);
var a = moment().format();
console.log(a);
var savedObject = JSON.parse(localStorage.getItem("savedObject"));
console.log(savedObject);
var hoursS;

var hoursJ = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]

if (savedObject !== null) {
    hourTextArr = savedObject;
}
else {
    hourTextArr = new Array(9);
}
console.log(hourTextArr);
for (var hour = 9; hour <= 17; hour++) {
    i = (hour - 9);
    var displayHoursJ = $("<div class= hour-label>");
    displayHoursJ.addClass("data-hour", hoursJ[i]);
    displayHoursJ.addClass("nomar", hoursJ[i]);


    var dispRowJ = $("<div class=row>");
    dispRowJ.attr("id", hoursJ[i]);
    var displayCol1 = $("<p class=col-sm-1 >");
    displayCol1.addClass("hour-label");
    var textArea = $("<textarea class=col-lg-10>");
    // displayCol2.addClass("data-hour",hoursJ[i]);
    // displayCol2.addClass("nomar",hoursJ[i]);

    // var displayCol3 = $("<div class=col-sm-1 nomar>");
    // var ddddddd = $("<textarea class= hour-text >");
    textArea.attr("data-name", hoursJ[i])

    // textArea.addClass("data-text",hoursJ[i]);
    textArea.addClass("nomar");
    
    displayCol1.text(hoursJ[i]);
    var saveBtnJ = $("<button class=col-sm-1>");
    saveBtnJ.addClass("nomar");
    // saveBtnJ.addClass("saveIcon");
    saveBtnJ.addClass("saveBtn far fa-save saveIcon");
    // saveBtnJ.addClass("far");
    var note = $(this).attr("data-name");
    console.log(note);


    // <div class="row">
    // <div class="col-sm-1 hour-label">09:00</div>
    // <div class="col col-lg-10 nomar"><textarea class="hour-text"></textarea></div>
    // <div class="col-sm-1 nomar"><button class="saveBtn far fa-save saveIcon"></button></div>  
    // $(".container").append(displayHoursJ);
    $(".container").append(dispRowJ);
    $(dispRowJ).append(displayCol1);
    $(dispRowJ).append(textArea);
    $(dispRowJ).append(saveBtnJ);
    // $(displayCol2).append(textArea);
    // $(displayCol3).append(saveBtnJ);

};

// $saveHandler

$(".saveBtn").click(function () {
    console.log(this);
    hoursS = $(this).parent().attr("id");
    console.log(hoursS + "hoursS");
    var textS = $(this).siblings("textarea").val();
    console.log(textS);
    localStorage.setItem(hoursS,textS);

});

var displayPlanner = function(){

for (var i=0; i<hoursJ.length; i++){

    console.log(hoursJ[i]+"hoursJ");
    var hoursR =(localStorage.getItem(hoursJ[i]));
    console.log(hoursR + "hoursR");
    console.log(hoursJ[i] + "hoursJ");
    console.log(`#${hoursJ[i]}`)
    $(`#${hoursJ[i]} textarea`).val(hoursR);
}

}
displayPlanner();

});