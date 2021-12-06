function compute() {
    if (principal_val()) {
      return;
    } else {
      let p = document.querySelector("#principal").value;
      let r = document.querySelector("#rate").value;
      let t = document.querySelector("#years").value;
      let si = (p * r * t) / 100;
      let year = new Date().getFullYear() + parseInt(t);
      var result = document.getElementById("result");
      result.innerHTML = "<br>If you deposit <mark>" + p + "</mark>,<br> at an interest rate of <mark>" + r + "%</mark>.<br> You will receive an amount of <mark>" + si + "</mark>,<br> in the year <mark>" + year + "</mark><br>"
    }
  }
  
  function updaterate() {
    var rateval = document.getElementById("rate");
    document.getElementById("rate_val").innerText = rateval.value + "%";
  }
  
  function principal_val() {
    var principal = document.getElementById("principal");
    if (principal.value <= 0) {
      alert("Enter a positive value greater than 0");
      principal.focus();
      return true;
    }
  }
  
  function add_time_val() {
    var options = '';
    for (var n = 1; n <= 50; n++) {
      options += '<option value="' + n + '">' + n + '</option>';
    }
    var t = document.getElementById("years");
    t.innerHTML = options;
  }
  