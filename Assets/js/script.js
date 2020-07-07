var todayDate = $("#currentDay");
var momentJ = moment().format("dddd , MMMM Do YYYY");
todayDate.text(momentJ);
var a = moment().format();
console.log(a);
var savedObject = JSON.parse(localStorage.getItem("savedObject"));
console.log(savedObject);

var hoursJ = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

if (savedObject !== null) {
    hourTextArr = savedObject;
}
else {
    hourTextArr = new Array(9);
}
console.log(hourTextArr);
for (var hour = 9; hour <= 17; hour++) {
    i = hour - (9);
    var displayHoursJ = $("<div class= hour-label>");
    displayHoursJ.addClass("data-hour", hoursJ[i]);
    displayHoursJ.addClass("nomar", hoursJ[i]);


    var dispRowJ = $("<div class=row>");
    dispRowJ.attr("id", hoursJ[i]);
    var displayCol1 = $("<div class=col-sm-1 hour-label>");
    var textArea = $("<textarea class=col-lg-10>");
    // displayCol2.addClass("data-hour",hoursJ[i]);
    // displayCol2.addClass("nomar",hoursJ[i]);

    var displayCol3 = $("<div class=col-sm-1 nomar>");
    // var ddddddd = $("<textarea class= hour-text >");
    textArea.attr("data-name", hoursJ[i])

    // textArea.addClass("data-text",hoursJ[i]);
    textArea.addClass("nomar");
    displayCol3.addClass("nomar");
    displayCol1.text(hoursJ[i]);
    var saveBtnJ = $("<button >");
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
    $(dispRowJ).append(displayCol3);
    // $(displayCol2).append(textArea);
    $(displayCol3).append(saveBtnJ);

};

// $saveHandler

$(".saveBtn").click(function () {
    console.log(this);
    var hoursS = $(this).parent().parent().attr("id");
    console.log(hoursS);
    var textS = $(this).parent().siblings("textarea").val();
    console.log(textS);
    localStorage.setItem(hoursS,textS);

});

var displayPlanner = function(){

for (var i=0; i<hoursJ.length; i++){

    console.log(hoursJ[i]);
    var hoursR =(localStorage.getItem(hoursJ[i]));
    $(`#${hoursJ[i]} textarea`).val(hoursR);
}

}
displayPlanner();