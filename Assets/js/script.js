
$(document).ready(function () {

    var todayDate = $("#currentDay");
    var momentJ = moment().format("dddd , MMMM Do YYYY");
    todayDate.text(momentJ);
    var a = moment().format();
    console.log(a);
    var savedObject = JSON.parse(localStorage.getItem("savedObject"));
    console.log(savedObject);
    var hoursS;
    var checkTime = moment().format('LT');
    console.log(checkTime);
    var checkTime1 = moment().format("H");
    console.log(checkTime1);

    var hoursJ = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]


    for (var hour = 9; hour <= 17; hour++) {
        i = (hour - 9);
        var displayHoursJ = $("<div class= hour-label>");
        displayHoursJ.addClass("data-hour", hoursJ[i]);
        displayHoursJ.addClass("nomar", hoursJ[i]);

        var dispRowJ = $("<div class=row>");
        dispRowJ.attr("id", hoursJ[i]);
        var displayCol1 = $("<p class=col-sm-2 >");
        displayCol1.addClass("hour-label");
        var textArea = $("<textarea class=col-md-8>");

        textArea.attr("data-name", hoursJ[i])

        displayCol1.text(hoursJ[i]);
        var saveBtnJ = $("<button class=col-sm-2>");
        saveBtnJ.addClass("nomar");

        saveBtnJ.addClass("saveBtn far fa-save saveIcon");

        if (hour < checkTime1) {
            $(textArea).css("background-color", " lightGray");
        }
        else if (hour == checkTime1) {
            $(textArea).css("background-color", "lightSalmon");

        }
        else {
            $(textArea).css("background", "lightGreen");
        }






        $(".container").append(dispRowJ);
        $(dispRowJ).append(displayCol1);
        $(dispRowJ).append(textArea);
        $(dispRowJ).append(saveBtnJ);


    };

    // $saveHandler

    $(".saveBtn").click(function () {

        hoursS = $(this).parent().attr("id");

        var textS = $(this).siblings("textarea").val();

        localStorage.setItem(hoursS, textS);

    });

    var displayPlanner = function () {

        for (var i = 0; i < hoursJ.length; i++) {
            var hoursR = (localStorage.getItem(hoursJ[i]));
            $(`#${hoursJ[i]} textarea`).val(hoursR);
        }
        $("#clearAll").click(function (event) {
            (event).preventDefault();
            for (var i = 0; i < hoursJ.length; i++) {
                localStorage.setItem(hoursJ[i], "");

                var hoursC = (localStorage.getItem(hoursJ[i]));

                $(`#${hoursJ[i]} textarea`).val(hoursC);
            }
        });


    }
    displayPlanner();

});