var bodyText = window[2].document.getElementById('bodyText');
var value = bodyText.value;
var selection = value.substring(bodyText.selectionStart, bodyText.selectionEnd);
var encoded = '';
for (var i = 0; i < selection.length; i++) { var code = selection.charCodeAt(i); encoded += code == 10 ? selection[i] : '&#' + selection.charCodeAt(i) + ';' };
var output = value.substring(0, bodyText.selectionStart) + encoded + value.substring(bodyText.selectionEnd, value.length);
bodyText.value = output;
void(0);
