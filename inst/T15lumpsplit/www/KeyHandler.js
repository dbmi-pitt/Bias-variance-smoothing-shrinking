// WE MUST PUT ALL THE KEY HANDLING IN ONE PLACE

var ctrlDpressed = false;
var ctrlShiftSpressed = false;
var keyVar = 0;
var eventSaved = null;


$(document).on("keyup", function (event) {
    eventSaved = event;
    x = event.which || event.keyCode;
    keyVar = x;
    eventSaved = event;
    if(x==(68+15) && event.ctrlKey && event.shiftKey) { // control shift s
            ctrlShiftSpressed = ! ctrlShiftSpressed;
            Shiny.onInputChange("ctrlShiftSpressed", ctrlShiftSpressed);
            document.getElementById('downloadQandA').click();
            window.setTimeout(function() {
              document.getElementById('downloadAnswers').click();
            }, 1000);
    }
    if(x==68 && event.ctrlKey) { // control d
      ctrlDpressed = ! ctrlDpressed;  // toggle
      Shiny.onInputChange("ctrlDpressed", ctrlDpressed);
      if(ctrlDpressed === true) {
        savedYposition=window.scrollY;
        Shiny.onInputChange('savedYposition', savedYposition);
        navigateToY(0);
      }
      else {
        Key_pressed_for_navigateToY = true;
        Shiny.onInputChange("KeypressedfornavigateToY",
          Key_pressed_for_navigateToY);
        Yoffset = 209;   // Because the debugger box changes the position
        // Should be calculated from window dimensions.
        navigateToY(savedYposition+Yoffset);
      }      //navigateToId(currentLocationId);
      //alert('control d ' + e.ctrlKey + ' ' + event.ctrlKey);
      // The alert works.
      // The panel appears only after something else JS happens.  WAIT, THAT'S NOT TRUE! IT WORKS!
      //
    }
    Shiny.onInputChange("Latestkeypressedx", x);
    Shiny.onInputChange("Latestkeypressede", event.code);
    if(x==27) { // escape key
      //navigateToId(currentLocationId);
      Key_pressed_for_navigateToY = true;
      Shiny.onInputChange("KeypressedfornavigateToY",
        Key_pressed_for_navigateToY);
      navigateToY(savedYposition);
  }
});
