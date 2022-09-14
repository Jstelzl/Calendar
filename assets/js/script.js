function start() {
    var currentHour = moment().format('h a');
    console.log(currentHour);
    for (var time = 9; time < 19; time++) {
    var id = time;
    var calendarRow = $("<form>")
            .addClass("row");
    
        $(".container").append(calendarRow);

    var timeBlock = $("<div>")
            .addClass("col-1 hour");
            timeBlock.text(time);
        var notes = $("<textarea>")
            .addClass("full col-10");
            if (time > currentHour) notes.addClass("future");
            if (time < currentHour) notes.addClass("past");
            if (time === currentHour) notes.addClass("present");

    var submitBtn = $("<button>")
            .addClass("col-1 saveBtn");
        var saveIcon = $("<i class='bi bi-save2-fill'>Submit</i>") 
        submitBtn.append(saveIcon);
  
        calendarRow.append(timeBlock, notes, submitBtn);    
        console.log(id);
    }
    
};
document.getElementById('currentDay').textContent = moment().format('MMMM Do YYYY');
console.log(moment().format('MMMM Do YYYY, h:mm a'));
start();

