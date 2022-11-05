const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const generated = Math.floor(Math.random() * 20) + 1;

input.addEventListener("keypress", function (e) {
   if (e.keyCode === 13) play();
});

button.addEventListener("click", play);

function play() {
   const userNumber = document.querySelector("#input").value;
   if (userNumber < 1 || userNumber > 20) {
      Swal.fire({
         icon: "warning",
         title: "Oops...",
         text: "Please enter a number between 1 and 20",
         confirmButtonColor: "#000",
         backdrop: `
            rgba(0,0,0,0.5)
            url("nyan.webp")
            left top
            no-repeat
         `,
      });
   } else if (isNaN(userNumber)) {
      Swal.fire({
         imageUrl: "error.gif",
         imageWidth: 450,
         title: "Oops...",
         text: "Please enter a valid number",
         confirmButtonColor: "#000",
      });
   } else {
      if (userNumber < generated) {
         Swal.fire({
            icon: "info",
            title: "TRY A BIGGER NUMBER",
            text: "Your guess is too low",
            confirmButtonColor: "#000",
         });
      } else if (userNumber > generated) {
         Swal.fire({
            icon: "info",
            title: "TRY A SMALLER NUMBER",
            text: "Your guess is too high",
            confirmButtonColor: "#000",
         });
      } else {
         Swal.fire({
            imageUrl: "win.gif",
            imageWidth: 450,
            title: "WOO-HOO!",
            text: "Congratulations, you won!",
            confirmButtonColor: "#000",
         });
      }
   }
}
