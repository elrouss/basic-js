const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker= {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(val) {
    this.chain.push(val !== undefined ? `( ${val} )` : '( )');

    return this;
  },
  
  removeLink(pos) {
    if (pos > 0 && typeof pos === 'number' && Number.isInteger(pos) && pos < this.chain.length) {
      this.chain.splice(pos - 1, 1);
    } else {
      this.chain = [];
      throw Error(`You can't remove incorrect link!`);
    }

    return this;
  },
  
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  
  finishChain() {
    const res = this.chain.join('~~');
    
    this.chain = [];
    return res;
  }
}

module.exports = {
  chainMaker,
};
