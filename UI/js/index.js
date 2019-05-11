const expiryDate = document.querySelector('#expiryDate');
const cardNumber = document.querySelector('#cardNumber');
const formCard = document.querySelector('#formCard');
const formDate = document.querySelector('#formDate');
const navContainer = document.querySelector('#nav');

const handleDate = () => {
    expiryDate.innerHTML = formDate.value;
}

const handleCard = () => {
    cardNumber.innerHTML = formCard.value;
}

const toggle = () => {
    navContainer.classList.toggle('is-hidden--mobile');
}