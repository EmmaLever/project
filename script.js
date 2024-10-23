const scriptURL = 'https://script.google.com/macros/s/AKfycby3IOBj4iqkBlkKLWIdRbVzeQr2zkkXib7jKQaT8c6uA-rUnNsHBacBSYKcK4na_j4W/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => { //prevents form submisson to refresh page
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }) //lets us store in googlesheets without a server
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"; //sends to the user after sub
            setTimeout(function () {
                msg.innerHTML = "";
            }, 6000);
            form.reset(); //clearing the form to show its been sent
        })
        .catch(error => console.error('Error!', error.message)); //shows error message if fail
});