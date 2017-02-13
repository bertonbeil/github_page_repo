window.histogramer = {};

this.version = '0.0.1'
this.display = $('body');



function updateCounts() {

    var textInput = $('textarea.js-text-input');
    var detInfo = $('.js-total-count');
    var outputValue = $('.chart-box');

    var cipher = textInput.val();
    var arrChars = [];
    var totalCount;

    var len = cipher.length;
    for (var i = 0; i < len; i++) {
        if (!arrChars[cipher[i]]) {
          console.log(i);
            arrChars[cipher[i]] = 1;
        } else {
            arrChars[cipher[i]] += 1;
        }
    }
    countChars = arrChars.count;

    console.debug(arrChars);

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
        if (sortedChars[i] == 11) {
            character = '↵'
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
    detInfo.append(document.createTextNode(cipher.length + "\n"));

}

function zeroPad(n, digits, padChar) {
	n = n.toString();

	while (n.length < digits) {
		n = padChar + n;

	}

	return n;
}
