/**
 * It accepts 2 arguments: password and username
 * password must:
 * -be at least 8 characters
 * -cannot contain spaces
 * -cannot contain the username
 *
 * If all requirements are met, return true
 * otherwise return false
 *
 * ex: isValiedPassword('12345678', 'mark')//true
 * ex: isValidPassword('mark1234', 'mark')//false
 */
function isValidPassword(passWord, userName) {
  if (passWord.length < 8) {
    return false;
  }
  if (passWord.indexOf(" ") !== -1) {
    return false;
  }
  if (passWord.indexOf(userName) !== -1) {
    return false;
  }
  return true;
}
var a = isValidPassword("alamn1234", "alamin");
console.log(a);
