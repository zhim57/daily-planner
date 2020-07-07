// function to wait for the javascript till document has loaded fully
$(document).ready(function () {

    // displaying the "today" date in the header

    var todayDate = $("#currentDay");
    var momentJ = moment().format("dddd , MMMM Do YYYY");
    todayDate.text(momentJ);


    // setting variables

    var hoursS;
    var checkTime1 = moment().format("H");

    var hoursJ = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]

    // creating the rows and adding classes and Ids

    for (var hour = 9; hour <= 17; hour++) {
        i = (hour - 9);

        var dispRowJ = $("<div class=row>");
        dispRowJ.attr("id", hoursJ[i]);

        var displayCol1 = $("<p class=col-sm-2 >");
        displayCol1.addClass("hour-label");
        displayCol1.text(hoursJ[i]);

        var textArea = $("<textarea class=col-md-8>");
        textArea.attr("data-name", hoursJ[i])

        var saveBtnJ = $("<button class=col-sm-2>");
        saveBtnJ.addClass("nomar");

        saveBtnJ.addClass("saveBtn far fa-save saveIcon");

        // changing the background colors for past hours , present hour and future hours tasks

        if (hour < checkTime1) {
            $(textArea).css("background-color", " lightGray");
        }
        else if (hour == checkTime1) {
            $(textArea).css("background-color", "lightSalmon");

        }
        else {
            $(textArea).css("background", "lightGreen");
        }

        // appending the new elements 

        $(".container").append(dispRowJ);
        $(dispRowJ).append(displayCol1);
        $(dispRowJ).append(textArea);
        $(dispRowJ).append(saveBtnJ);
    };

    // funktion for saving the input fields contents to local storrage

    $(".saveBtn").click(function () {

        hoursS = $(this).parent().attr("id");

        var textS = $(this).siblings("textarea").val();

        localStorage.setItem(hoursS, textS);

    });

    // function for retrieving the saved data from local storrage and populating the fields

    var displayPlanner = function () {

        for (var i = 0; i < hoursJ.length; i++) {
            var hoursR = (localStorage.getItem(hoursJ[i]));
            $(`#${hoursJ[i]} textarea`).val(hoursR);
        }
        
        
        
        //clear All function for emptying all fields at once
        
        $("#clearAll").click(function (event) {
            (event).preventDefault();
            
            //added safeguard against deleting the tasks by mistake
            var doProceed = confirm("Are you sure you wish to proceed with clearing of All fields, all stored tasks  will be deleted? ");
         
         
            if (doProceed){
                // clearing all fields and local storrage at once
            for (var i = 0; i < hoursJ.length; i++) {
                localStorage.setItem(hoursJ[i], "");

                var hoursC = (localStorage.getItem(hoursJ[i]));

                $(`#${hoursJ[i]} textarea`).val(hoursC);
            }
        }else{
            alert("OK, 'clear All ' aborted.")
        }
        });


    }
    displayPlanner();

});