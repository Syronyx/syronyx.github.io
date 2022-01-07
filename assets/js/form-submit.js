$("#contact-form").submit((e) => {
  e.preventDefault();
  document.querySelector("#submit").style.display = "none";
  document.querySelector(".loading").style.display = "block";
  $.ajax({
    url:
      "https://script.google.com/macros/s/AKfycbzbMmhZ7XJU8zTgCHXY-pXLFr-2YbU19vR112bcGxTEXLLexdWjXsscp70c8WBUFbRqhw/exec",
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
