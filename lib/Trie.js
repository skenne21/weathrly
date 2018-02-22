import Node from './Node';





export default class Trie {
  constructor () {
    this.wordCounter = 0;
    this.children = {}; 
  }

  insert(word)  {
    let currentNode = this.children;

    let lettersArray = [...word];

    while(lettersArray.length) {
      let currentLetter = lettersArray.shift();

      if(!currentNode[currentLetter]) {
        currentNode[currentLetter] = new Node(currentLetter); 
      }

      if(currentNode[currentLetter].completeWord === false) {
        if(!lettersArray.length) {
          this.wordCounter++;
          currentNode[currentLetter].completeWord = word;
        }
      }

      currentNode = currentNode[currentLetter].children;
    }
  }

  findNode(word) {
    let currentNode = this.children;
    let letters = [...word];

    while (letters.length) {
      let currentLetter = letters.shift();

      if (Object.keys(currentNode).find(letter => letter === currentLetter)) {
        currentNode = currentNode[currentLetter].children;
      }
    }
    return currentNode;
  }

  suggest(word) {
    let currentNode = this.findNode(word);
    let nodeKeys = Object.keys(currentNode);
    let suggest = [];


    const searchWords = (array, level) => {
      array.forEach(letter => {
        let nodeLevel = level;

        if (nodeLevel[letter].completeWord) {
          if (nodeLevel[letter].popularity === 0) {
            suggest.push(nodeLevel[letter].completeWord);
          } else {
            suggest.unshift(nodeLevel[letter].completeWord);
          } 
        }

        if (Object.keys(nodeLevel[letter].children).length) {
          nodeLevel = nodeLevel[letter].children;
          searchWords(Object.keys(nodeLevel), nodeLevel);
        }
      });
    };

    searchWords(nodeKeys, currentNode);
    return suggest;

  }

  populate(cities) {
    cities.forEach(city => {
      this.insert(city);
    });
  }

  transverseDown(lettersArray) {
    let currentNode = this.children;

    while (lettersArray.length > 1) { 
      let currentLetter = lettersArray.shift();

      if (Object.keys(currentNode).find(letter => letter === currentLetter)) {
        currentNode = currentNode[currentLetter].children;
      }
    }

    return currentNode;
  }

  select(word) {
    let lettersArray = word.split('');
   
    let lastNode = this.transverseDown(lettersArray);

    lastNode[lettersArray].popularity++;
  }

  delete(word) {
    let lettersArray = word.split('');

    let lastNode = this.transverseDown(lettersArray);

    this.wordCounter--;

    lastNode[lettersArray].completeWord = false;
  }
}