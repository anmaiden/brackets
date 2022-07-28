module.exports = function check(str, bracketsConfig) {
  let lengthStr = str.length;
  let leftBrackets, rightBrackets;
  for ([leftBrackets, rightBrackets] of bracketsConfig) {
    str = str.split(`${leftBrackets}${rightBrackets}`).join('');
  }
  if (str.length === 0) return true;
  else if (str.length === lengthStr) return false;
  return check(str, bracketsConfig);
}
