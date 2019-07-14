let validateNo = numberString => {
    let number = parseInt(numberString);
    if (Number.isInteger(number) && numberString.length == 10) {
        document.querySelector(".headline-form").innerHTML = "One last thing!";
        document.querySelector(".form-box").style.backgroundColor = "#C5DF16";
        return true;
    }
    else {
        document.querySelector(".form-box").style.backgroundColor = "rgb(189, 87, 87)";
        document.querySelector(".headline-form").innerHTML = "Please enter a valid number";
        return false;
    }
}

let nextSlide = (parent, nextForm) => {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
    nextForm.classList.remove('inactive');
}

let animate = () => {
    let counter = 0;
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (validateNo(input.value)) {
                console.log('good');
                nextSlide(parent, nextForm);
                counter++;
                if (counter === 2) {
                    document.querySelector(".headline-form").innerHTML = 'Cheers!';
                }
            }
            else {
                console.log('error');
            }
        })
    })
}

let closeForm = () => {
    let closeBtn = document.querySelector(".finish");
    closeBtn.addEventListener('click', () => {
        document.querySelector(".form-page").style.display = 'none';
    })
}

let openForm = () => {
    let formBtn = document.querySelector(".signup-button");
    formBtn.addEventListener('click', () => {
        document.querySelector(".form-page").style.display = 'flex';
    })
}

animate();
closeForm();
openForm();