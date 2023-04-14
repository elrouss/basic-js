const { NotImplementedError } = require('../lib');

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
class VigenereCipheringMachine {
  constructor(boolean) {
    this.boolean = boolean;
  }
  
  encrypt(message, key) {
    console.debug(message, key)
    if (!(message && key)) throw Error('Incorrect arguments!');
    
    const spaceIdxsMessage = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') spaceIdxsMessage.push(i);
    }
    
    let encryptKey = '';
    const messageNoSpace = message.replace(/\s/g, '');
    while (encryptKey.length < messageNoSpace.length) {
      encryptKey += key;
    }
    encryptKey = encryptKey.slice(0, messageNoSpace.length);
    
    let encryptWord = '';
    for (let i = 0; i < messageNoSpace.length; i++) {
      let messageChar = messageNoSpace[i].toUpperCase().charCodeAt();
      let encryptWordChar = encryptKey[i].toUpperCase().charCodeAt();
      
      if (messageChar < 65 || messageChar > 90) {
        encryptWord += messageNoSpace[i];
      } else {
        let letter = messageChar + encryptWordChar - 65;
        
        if (letter > 90) letter -= 26;
        encryptWord += String.fromCharCode(letter)
      }
    }
    
    const spacesBack = encryptWord.split('');
    for (let i = 0; i < spacesBack.length; i++) {
      if (spaceIdxsMessage.includes(i)) {
        spacesBack.splice(i, 0, ' ');
      }
    }
    
    return this.boolean !== false ? spacesBack.join('') : spacesBack.reverse().join('');
  }
  
  decrypt(encryptedMessage, key) {
    console.log(encryptedMessage, key)
    if (!(encryptedMessage && key)) throw Error('Incorrect arguments!');
    
    const spaceIdxsEncryptedMessage = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === ' ') spaceIdxsEncryptedMessage.push(i);
    }
    
    let encryptKey = '';
    const encryptedMessageNoSpace = encryptedMessage.replace(/\s/g, '');
    while (encryptKey.length < encryptedMessageNoSpace.length) {
      encryptKey += key;
    }
    encryptKey = encryptKey.slice(0, encryptedMessageNoSpace.length);
    
    let message = '';
    for (let i = 0; i < encryptedMessageNoSpace.length; i++) {
      let encryptedMessageChar = encryptedMessageNoSpace[i].toUpperCase().charCodeAt();
      let encryptWordChar = encryptKey[i].toUpperCase().charCodeAt();
      
      if (encryptedMessageChar < 65 || encryptedMessageChar > 90) {
        message += encryptedMessageNoSpace[i];
      } else {
        let letter = encryptedMessageChar - encryptWordChar + 65;
        
        if (letter < 65) letter += 26;
        message += String.fromCharCode(letter)
      }
    }
    
    const spacesBack = message.split('');
    for (let i = 0; i < spacesBack.length; i++) {
      if (spaceIdxsEncryptedMessage.includes(i)) {
        spacesBack.splice(i, 0, ' ');
      }
    }
    
    return this.boolean !== false ? spacesBack.join('') : spacesBack.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
