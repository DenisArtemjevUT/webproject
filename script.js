
/*prfile button*/
const profileButton = document.getElementById("profBtn");
const profBox = document.getElementById("infBox");

console.log(profileButton);
console.log(profBox);



profileButton.addEventListener("click", function () {
    console.log("Кнопку нажали!");
    profBox.hidden = !profBox.hidden;
});