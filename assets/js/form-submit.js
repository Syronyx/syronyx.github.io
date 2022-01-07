$("#contact-form").submit((e) => {
  e.preventDefault();
  document.querySelector("#submit").style.display = "none";
  document.querySelector(".loading").style.display = "block";
  $.ajax({
    url:
      "https://script.google.com/macros/s/AKfycby4TfACDBj-s5bkgJm_HNli6sB5qzgz2e8uhPaZPushoDW9jncZzLbi/exec",
    data: $("#contact-form").serialize(),
    method: "post",
    success: function (response) {
      $("#contact-form").trigger("reset");
      document.querySelector("#submit").style.display = "block";
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".sent-message").style.display = "block";
      setTimeout(() => {
        document.querySelector(".sent-message").style.display = "none";
      }, 5000);
    },
    error: function (err) {
      document.querySelector("#submit").style.display = "block";
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".error-message").style.display = "block";
      setTimeout(() => {
        document.querySelector(".error-message").style.display = "none";
      }, 5000);
    },
  });
});
