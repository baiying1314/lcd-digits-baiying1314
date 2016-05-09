function buildLcdString(inputs) {

    var lcdDigits = loadLcdDigits();
    var convertInputs = getConvertInputs(inputs);

    printLcdString(convertInputs, lcdDigits);

}

function getConvertInputs(inputs) {

    var inputsString = inputs.toString();

    return inputsString.split('');
}

function printLcdString(convertInputs, lcdDigits) {

    var lcdString = '';

    convertInputs.forEach(function (converInput) {

        lcdString += getDigit1(converInput, lcdDigits)
    });
    lcdString += '\n';

    convertInputs.forEach(function (converInput) {

        lcdString += getDigit2(converInput, lcdDigits)
    });
    lcdString += '\n';

    convertInputs.forEach(function (converInput) {

        lcdString += getDigit3(converInput, lcdDigits)
    });

    console.log(lcdString);
}

function getDigit1(converInput, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        lcdDigit = lcdDigits[i];

        if (lcdDigit.key === parseInt(converInput))
            return lcdDigit.value[0];
    }
}

function getDigit2(converInput, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        lcdDigit = lcdDigits[i];

        if (lcdDigit.key === parseInt(converInput))
            return lcdDigit.value[1];
    }
}

function getDigit3(converInput, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        lcdDigit = lcdDigits[i];

        if (lcdDigit.key === parseInt(converInput))
            return lcdDigit.value[2];
    }
}


