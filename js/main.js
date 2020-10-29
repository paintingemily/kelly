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
        alert("Sorry, that isn't correct. Try again!");
    } else {
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

}