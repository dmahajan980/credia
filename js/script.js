// Checks if number is vaid or invalid
let validateNo = numberString => {
    let number = parseInt(numberString);
    return (Number.isInteger(number) && numberString.length == 10) ? true : false;
}

// Takes the number string and displays popup
let handleBtn = () => {
    let btn = document.querySelector(".signup-button");
    setTimeout(btn.addEventListener('click', () => {
        // Pop message if nuumber is valid
        // Else turn something red
        animate();
    }), 500);
}

let popUp = () => {
    let page = document.querySelector(".form-page");
    page.style.display = 'flex';
    setTimeout(() => {
        page.style.display = 'none';
        console.log("success!");
    }, 2000);
}

const inputElement = document.querySelector(".number-field");

// Formats the input inside textbox
// Takes the input and converts it to a 10-digit sequence
function animate() {

    // Store number in the variable
    let str = inputElement.value;
    let formattedStr = str[6] + str[7] + str[8] + str[9] + str[11] + str[12] + str[13] + str[15] + str[16] + str[17];
    
    if (str.length == 18 && validateNo(formattedStr)) {
        popUp();
    }
    else {
        inputElement.style.color = "rgba(255, 0, 0, 0.7)";
        console.log("Invalid no!");
    }
}

const formatToPhone = (event) => {

    inputElement.style.color = "rgba(36, 36, 36, 0.56)";
    const target = event.target;
    // Strip everything except digits
    // First twelve digits of input including 91
    const input = target.value.replace(/\D/g,'').substring(0,12); 
    const zip = "+91";
    const start = input.substring(2, 6)
    const middle = input.substring(6, 9);
    const last = input.substring(9, 12);

    if(input.length > 9){target.value = `${zip} - ${start} ${middle} ${last}`;}
    else if(input.length > 6){target.value = `${zip} - ${start} ${middle}`;}
    else if(input.length >= 0){target.value = `${zip} - ${start}`;}
};

inputElement.addEventListener('keypress', formatToPhone);

handleBtn();