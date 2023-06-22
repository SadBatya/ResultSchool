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
    showAllWords(){
      console.log(this.words)
    }
  }
  
  class HardWordsDictionary extends Dictionary{
    constructor(name){
      super(name)
    }
    add(word, description, difficult){
      if(this.words[word] === word){
        return
      }else{
        this.words[word] = {
          'word': word,
          'description': description,
          'difficult': difficult,
        }
      }
    }
  }


  const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
      
  hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
  hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
  hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
  hardWordsDictionary.remove('неологизм');
  hardWordsDictionary.showAllWords();

  const dictionary = new Dictionary('Толковый словарь');

  dictionary.add('JavaScript', 'популярный язык программирования');
  dictionary.add('CSS', 'Таблица каскадных стилей');

  dictionary.remove('JavaScript')

  console.log(dictionary);
  
  