/**
 * Add's sub method to JavaScript String prototype for variable replacement'
 * @author Andy Holland <andy@kudoswebsolutions.com>
 * @version 1.0
 */
String.prototype.sub = function() {
  if ( arguments.length == 0 ) return this;
  var sub = arguments.length > 1 ? Array.prototype.slice.call(arguments) : arguments[0];
  if ( Object.prototype.toString.call(sub) === '[object Array]' ) {
    return this.replace(/%(\d+)/g, function(match, number) {
      return typeof sub[number-1] != 'undefined' ? sub[number-1] : match;
    });
  } else if ( Object.prototype.toString.call(sub) === '[object Object]' ) {
    return this.replace(/{(\S+?)}/g, function(match, property) {
      return typeof sub[property] != 'undefined' ? sub[property] : match;
    });
  }
};