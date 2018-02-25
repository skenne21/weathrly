const Trie = require('../../node_modules/@skenne21/tdd/lib/Trie.js')
import citiesList from '../mock-data/cities.js';


const trie = new Trie();

citiesList.data.forEach(city => {
  trie.insert(city.toLowerCase());
});

export default trie;