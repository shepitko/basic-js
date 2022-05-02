const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (typeof (message) === 'undefined' || typeof (key) === 'undefined') {
      throw new Error('Incorrect arguments!');
    }

    let encryptMessage = '';
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    message = message.toUpperCase();
    key = key.toUpperCase();

    if (typeof (this.direct) === 'boolean') {
      message = message.split('').reverse().join('');
    }

    if (message.length > key.length) {
      let count = 0;
      for (const char of message) {
        if (ALPHABET.includes(char)) {
          count++;
        }
      }
      key = key.repeat(Math.ceil(count / key.length)).slice(0, count)
    }

    for (let i = 0, k = 0; i < message.length; i++) {
      if (ALPHABET.includes(message[i])) {
        let index = ((message[i].codePointAt(0) - ALPHABET.codePointAt(0)) + (key[k].codePointAt(0) - ALPHABET.codePointAt(0))) % ALPHABET.length;
        encryptMessage += ALPHABET[index];
        k++;
      } else {
        encryptMessage += message[i];
      }
    }

    return encryptMessage;
  }

  decrypt(message, key) {

    if (typeof (message) === 'undefined' || typeof (key) === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let decryptMessage = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (typeof (this.direct) === 'boolean') {
      message = message.split('').reverse().join('');
    }
    if (message.length > key.length) {
      let count = 0;
      for (const char of message) {
        if (ALPHABET.includes(char)) {
          count++;
        }
      }
      key = key.repeat(Math.ceil(count / key.length)).slice(0, count)
    }

    for (let i = 0, k = 0; i < message.length; i++) {
      if (ALPHABET.includes(message[i])) {
        let index = ((message[i].codePointAt(0) - ALPHABET.codePointAt(0)) - (key[k].codePointAt(0) - ALPHABET.codePointAt(0))) % ALPHABET.length;
        if (index >= 0) {
          decryptMessage += ALPHABET[index];
        } else {
          decryptMessage += ALPHABET.slice(index, index < -1 ? index + 1 : undefined);
        }
        k++;
      } else {
        decryptMessage += message[i];
      }
    }
    return decryptMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
