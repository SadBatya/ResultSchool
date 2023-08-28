class Dictionary {
constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) { 
    if(this.words[word] === word){
      return
    }else{
      this.words[word] = {
        'word': word,
        'description': description
      }
    }
  }
  remove(word){
    delete this.words[word]
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('CSS', 'Таблица каскадных стилей');
// dictionary.remove('JavaScript')
console.log(dictionary);

