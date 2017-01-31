
function updateCounts() {

    this.mainForm =  $('form.js-main-form');
    this.textInput = $('textarea.js-text-input');
    this.btnUpdate = $('button.js-btn-count');
    this.outputValue = $('div.js-output');

    var cipher = textInput.val();
    var arrChars = [];
    var totalCount;

    var len = cipher.length;
    for (var i = 0; i < len; i++) {
        if (!arrChars[cipher[i]]) {
            arrChars[cipher[i]] = 1;
        } else {
            arrChars[cipher[i]] += 1;
        }
    }
    countChars = arrChars.count;


    // Sort the characters by code
    sortedChars = [];
    for (var i in arrChars) {
        sortedChars.push(zeroPad(i.charCodeAt(0), 5, '0'));
    }
    sortedChars.sort();

    // Print the character counts
    var len = sortedChars.length;
    for (i = 0; i < sortedChars.length; i++) {
        character = String.fromCharCode(sortedChars[i]);
        if (sortedChars[i] == 10) {
            character = 'LF'
        }
        if (sortedChars[i] == 9) {
            character = 'TAB'
        }

        letter = '';
        letterHeight = '';
        letterAmount = '';

        letter +=  "   " + character + "  ";

        letterHeight += ' ' + arrChars[String.fromCharCode(sortedChars[i])] + "0px";

        letterAmount += ' ' + arrChars[String.fromCharCode(sortedChars[i])] + " ";

        var histogramLevel = $('<div/>', { class: 'js-histogram-level' }).css('height',  letterHeight);
        var symbolBox = $('<div/>', { class: 'js-letter' }).append(histogramLevel);


        var letterSymbol = $('<span/>', { text: letter });
        var letterAm = $('<span/>', { text: letterAmount });
        symbolBox.append(letterSymbol);
        symbolBox.append(letterAm);
        outputValue.append(symbolBox);
    }

    // Print total character count
    outputValue.append(document.createTextNode('-----TOTAL CHARACTERS: ' + cipher.length + "\n"));
}

function zeroPad(n, digits, padChar) {
	n = n.toString();
	while (n.length < digits) {
		n = padChar + n;
	}
	return n;
}
