const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


var btnSubmit = function(event) {

    event.preventDefault();
    console.log("button submit function call")
    value = $(this).siblings(".full").val();
    time = $(this).siblings(".hour")[0].textContent;
    console.log( "value and time is", value, time);
    console.log($(this).siblings(".hour"));

    
    localStorage.setItem(time, value);
    
    console.log(value);
    console.log(time);
}

function start() {

    var currentHour = moment().hours();
    console.log(currentHour);
    
    // loops element blocks 10 times to create 10 hours ( 9 - 5)
    for (var time = 9; time < 18; time++) {
        var id = time;
        var calendarRow = $("<form>")
            .addClass("row");
                
        
            $(".container").append(calendarRow);

        var timeBlock = $("<div>")
                .addClass("col-1 hour");
                timeBlock.text(`${id}:00`);
            var notes = $("<textarea>")
                .addClass("full col-10 time-" + time);
                if (time > currentHour) notes.addClass("future");
                if (time < currentHour) notes.addClass("past");
                if (time === currentHour) notes.addClass("present");

        var submitBtn = $("<button>")
                .addClass("col-1 saveBtn");
            var saveIcon = $("<i class='bi bi-save2-fill'>Submit</i>") 
            submitBtn.append(saveIcon);
                //notes.attr("id", timeList[time] - 9);
            calendarRow.append(timeBlock, notes, submitBtn);    
            console.log(id);
    }

    // Local storage for note blocks
    $(".time-9").val(localStorage.getItem("9:00"));
    $(".time-10").val(localStorage.getItem("10:00"));
    $(".time-11").val(localStorage.getItem("11:00"));
    $(".time-12").val(localStorage.getItem("12:00"));
    $(".time-13").val(localStorage.getItem("13:00"));
    $(".time-14").val(localStorage.getItem("14:00"));
    $(".time-15").val(localStorage.getItem("15:00"));
    $(".time-16").val(localStorage.getItem("16:00"));
    $(".time-17").val(localStorage.getItem("17:00"));
    $(".time-17").val(localStorage.getItem("18:00"));
};

document.getElementById('currentDay').textContent = moment().format('MMMM Do YYYY');

start();
$("button").click(btnSubmit);

