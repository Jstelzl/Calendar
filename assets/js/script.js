function start() {
    for (var time = 0; time < 24; time++) {
    var id = time;
    var calendarRow = $("<form>")
            .addClass("row");
    
        $(".container").append(calendarRow);

    var timeBlock = $("<div>")
            .addClass("col-1 hour");
        var notes = $("<textarea>")
            .addClass("full col-10");

    var submitBtn = $("<button>")
            .addClass("col-1 saveBtn");
        var saveIcon = $("<i class='bi bi-save2-fill'></i>") 
        submitBtn.append(saveIcon);
  
        calendarRow.append(timeBlock, notes, submitBtn);    
    console.log(id);
    }
}
start();

