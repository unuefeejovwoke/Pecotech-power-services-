// nav 
const menu = document.getElementById('menu');
const ham = document.getElementById('ham');

ham.addEventListener("click", ()=>{
    menu.classList.toggle('hidden');
});
// end of nav

// service form
const serviceFormBtns = document.getElementsByClassName('serviceFormBtn');
const serviceForm = document.getElementById('serviceForm');

// Loop through the collection of buttons and attach the event listener
for (const btn of serviceFormBtns) {
    btn.addEventListener("click", () => {
        serviceForm.classList.toggle("hidden");
    });
}

// end of service form
