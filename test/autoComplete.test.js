import React from 'react';
import {shallow, mount} from 'enzyme';
import populate from '../lib/helperFunction/autoComplete.js';
import data from '../lib/mock-data/CO/Denver.js';
import citiesList from '../lib/mock-data/cities.js';
const Trie = require('../node_modules/@skenne21/tdd/lib/Trie.js')

describe('autoComplete', () => {

const trie = new Trie();

  it('should exist', () => {
    expect(trie).toBeDefined();
  })

  it('should export a populate function', () => {
    expect(populate).toBeDefined();
  })

  it('should populate the Trie', () => {
    const wordsInTrie = populate.wordCounter;
    const citiesInList = citiesList.data.length
    expect(wordsInTrie).toEqual(citiesInList);
  })

})