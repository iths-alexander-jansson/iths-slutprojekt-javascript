//Gallery

function run(interval, frames) {
  var int = 1;

  function func() {
    document.body.id = "b" + int;
    int++;
    if (int === frames) {
      int = 1;
    }
  }

  window.setInterval(func, interval);
}

run(5000, 9);
