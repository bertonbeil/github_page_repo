
var textInput = $('textarea.js-text-input');
var detInfo = $('.js-total-count');
var outputValue = $('.chart-box');
var showButton = $('button.js-btn-count');
var monogramCheck = $('#monogram-show');


showButton.on('click', function () {
  if ( textInput.val() === "" ) {
    alert('Textarea is empty!');
  } else if ( !monogramCheck.is(':checked' ) ) {
    alert('Choose show options');
  } else {
    updateCounts();
  }
});

function updateCounts() {

    detInfo.text('');
    outputValue.text('');

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

    console.debug(arrChars);
    // Sort the characters by code
    sortedChars = [];
    for (var i in arrChars) {
        sortedChars.push(zeroPad(i.charCodeAt(0), 5, '0'));
    }
    console.log(sortedChars);
    sortedChars.sort();
    console.log(sortedChars);
    // Print the Monogram
    var len = sortedChars.length;
    for (i = 0; i < sortedChars.length; i++) {
        character = String.fromCharCode(sortedChars[i]);
        if (sortedChars[i] == 10) {
            character = "<<"
        }
        if (sortedChars[i] == 32) {
            character = "_"
        }

        letter = '';
        letterHeight = '';
        letterAmount = '';

        letter += character;

        letterHeight += ' ' + arrChars[String.fromCharCode(sortedChars[i])] + "0px";

        letterAmount += ' ' + arrChars[String.fromCharCode(sortedChars[i])] + " ";

        var histogramLevel = $('<div/>', { class: 'js-histogram-level' }).css('height',  letterHeight);
        var symbolBox = $('<div/>', { class: 'js-letter' }).append(histogramLevel);
        var letterSymbol = $('<span/>', { text: letter });
        var letterAm = $('<span/>', { text: letterAmount });
        symbolBox.append(letterAm);
        symbolBox.append(letterSymbol);
        outputValue.append(symbolBox);
    }
    // Total Monograms
    detInfo.append(document.createTextNode(cipher.length + "\n"));

}

function zeroPad(n, digits, padChar) {
	n = n.toString();
	while (n.length < digits) {
		n = padChar + n;
	}
	return n;
}
