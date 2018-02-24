// import Trie from '../node_modules/@skenne21/tdd/lib/trie.js';
const Trie = require('../../node_modules/@skenne21/tdd/lib/Trie.js')
// import Trie from '../mock-data/Trie.js';
import citiesList from '../mock-data/cities.js';
// import zipcodesList from '../__mocks__/zipCodeData.js';

const trie = new Trie();
console.log(trie)

citiesList.data.forEach(city => {
  trie.insert(city.toLowerCase());
});


// zipcodesList.forEach( zipcode => {
//   trie.insert(zipcode);
// });

export default trie;