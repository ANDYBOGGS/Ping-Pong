//Biz Logic
function countUp(numInput) {
  var outputArr =[];
  for (var index = 1; index <= numInput; index++) {

    if (index % 15 === 0) {
      outputArr.push("Ping-Pong");
    } else if (index % 3 === 0) {
      outputArr.push("Ping");
    } else if (index % 5 === 0) {
      outputArr.push("Pong");
    } else {
      outputArr.push(index);
    };

  };
  return outputArr;
};

//User Interface Logic
$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    debugger;
    var numInput = parseInt($("input#userInput").val());
    var result = countUp(numInput);
    var ul = $("#output ul");

for (var index=0; index < result.length; index++) {
  $("#output ul").append("<li>" + result[index] + "</li>");
}

  });
});
