// import simpleParallax from 'simple-parallax-js';

// var images = document.querySelectorAll('img');
//     new simpleParallax(images, {
//         overflow: true
//     });

window.onload = (event) => {
    // const simpleParallax = window.simpleParallax;
    // check if succeeded previously
    isPrevSuccess = window.localStorage.getItem('succeeded') === 'true';
    if (isPrevSuccess) {
        showSuccess();
    }

    // var images = document.querySelectorAll('.parallax-image');
    // new simpleParallax(images, {
    //     overflow: true,
    //     orientation: 'left'
    // });

    var rellax = new Rellax('.rellax');
};

function submitWords() {
    // check accuracy of inputs
    const inputOne = document.getElementById('letter-1');
    const inputTwo = document.getElementById('letter-2');
    const inputThree = document.getElementById('letter-3');
    const inputFour = document.getElementById('letter-4');
    const inputFive = document.getElementById('letter-5');
    const inputSix = document.getElementById('letter-6');
    const inputSeven = document.getElementById('letter-7');
    const inputs = [
        inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven
    ];
    const lowercaseValues = inputs.map((input) => { return input.value.toLowerCase(); });
    const correctAnswers = [
        'm', 'i', 's', 's', 'y', 'o', 'u'
    ];
    const isIncorrect = lowercaseValues.some((value, index) => value !== correctAnswers[index]);

    if (isIncorrect) {
        let attempts = window.localStorage.getItem('attempts');
        if (attempts > 3) {
            inputs.forEach((input, index) => {
                if (lowercaseValues[index] !== correctAnswers[index]) {
                    input.value = '';
                    input.classList.add('red');
                }
            });
        }
        window.localStorage.setItem('attempts', attempts + 1);
        alert("Sorry, that isn't correct. Try again!");
    } else {
        window.localStorage.setItem('succeeded', 'true');
        showSuccess(inputs);
    }

    return false;
}

function showSuccess() {
    // hide inputs, show photos.
    const firstSection =  document.getElementById('initial');
    const successSection = document.getElementById('success');

    firstSection.classList.add('hide');
    successSection.classList.remove('hide');
    window.scrollTo(0, 0);

}