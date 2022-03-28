class TrieNode {
  constructor(key) {
    this.key = key; // the "key" value will be the character in sequence
    this.parent = null; // we keep a reference to parent
    this.children = {}; // we have hash of children
    this.end = false; // check to see if the node is at the end
  }

  getWord() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join("");
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        // if character doesn't exist in children, we then create it.
        node.children[word[i]] = new TrieNode(word[i]);
        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
      }
      // proceed to the next depth in the trie.
      node = node.children[word[i]];
      if (i == word.length - 1) node.end = true;
    }
  }

  contains(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (node.children[word[i]]) node = node.children[word[i]];
      else return false;
    }
    // we finished going through all the words, but is it a whole word?
    return node.end;
  }

  find(prefix) {
    // returns every word with given prefix
    let node = this.root;
    let output = [];

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) node = node.children[prefix[i]];
      else return output;
    }
    // recursively find all words in the node
    findAllWords(node, output);
    return output;
  }

  findAllWords(node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) arr.unshift(node.getWord());

    // iterate through each children, call recursive findAllWords
    for (let child in node.children) findAllWords(node.children[child], arr);
  }

  remove(word) {
    let root = this.root;
    if (!word) return;

    const removeWord = (node, word) => {
      // check if current node contains the word
      if (node.end && node.getWord() === word) {
        let hasChildren = Object.keys(node.children).length > 0;
        // if has children we only want to un-flag the end node that marks the end of a word.
        // this way we do not remove words that contain/include supplied word
        if (hasChildren) node.end = false;
        else node.parent.children = {};
        return true;
      }

      // recursively remove word from all children
      for (let key in node.children) removeWord(node.children[key], word);
      return false;
    };
    // call remove word on root node
    removeWord(root, word);
  }
}
