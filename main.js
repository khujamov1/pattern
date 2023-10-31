const elForm = document.querySelector(".main-form");
const elInput = document.querySelector(".password-input");

elForm.addEventListener("submit", evt => {
    evt.preventDefault();
    const inputValue = elInput.value;
    
    console.log(inputValue);
})
