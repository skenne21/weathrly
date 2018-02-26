const Trie = require('../../node_modules/@skenne21/tdd/lib/Trie.js')
import citiesList from '../mock-data/cities.js';


const trie = new Trie();

export const populate = () => {
  citiesList.data.forEach(city => {
    trie.insert(city.toLowerCase());
  })
}

populate();

export default trie;