enterView({
  selector: ".icon",
  enter: function(el) {
    el.classList.add("entered");
  }
});
enterView({
  selector: "h3",
  enter: function(el) {
    el.classList.add("focus-in-expand");
  }
});
