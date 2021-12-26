'use strict';

var _require = require("underscore"),
    object = _require.object; // средство  es6: блок "левых" объявлений


var sentences = [{
  subject: 'Python',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]; // средство es6: деструктуризация объекта 

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  //средство es6: строки шаблона
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
}

; //средство es6: for..of

for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}