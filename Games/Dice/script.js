(function (){
  $("#dice-color").val("#ccc");
  $("#dot-color").val("#000");
  $("#spin").click(function(e) {
    e.preventDefault();
    let rnd = Math.floor(Math.random() * 6 + 1); // Generate a new random number
    let x, y;
    switch (rnd) {
      case 1:
        x = 720;
        y = 810;
        break;
      case 6:
        x = 720;
        y = 990;
        break;
      default:
        x = 720 + (6 - rnd) * 90;
        y = 900;
        break;
    }

    // Reset die
    $(".dice").css("transition", "transform 0s");
    $(".dice").css("transform", "translateZ(-100px) rotateY(-45deg) rotateX(-45deg)");

    setTimeout(function() {$(".dice").css("transition", "transform 3s"); $(".dice").css( "transform", "translateZ(-100px) rotateY(" + x + "deg) rotateX(" + y + "deg)"); }, 1); // Adjust the delay as needed
  });
  $("#dot-color").change(function() {
    const dot = $("#dot-color").val();
    $(".dot").css("background-color", dot);
  });
  $("#dice-color").change(function() {
    const dice = $("#dice-color").val();
    $(".side").css("background-color", dice);
  });  
})();

