
//var outputArr =[];
var ul = $('#output ul');
function countUp(numInput) {
  const outputArr =[];
  for (var i = 1; i <= numInput; i++) {
    if (i % 15 === 0) {
      outputArr.push("Ping-Pong");
    } else if (i % 5 === 0) {
      outputArr.push("pong");
    } else if (i % 3 === 0) {
      outputArr.push("Ping");
    } else {
      outputArr.push(i);
    };

  };
  return outputArr;
};


$(document).ready(function() {
  $("#main-content form").submit(function(event) {
    event.preventDefault();
    var numInput = parseInt($("input#userInput").val());
    var result = countUp(numInput);

    for ()
    $("#output").text(result);
  });
});
