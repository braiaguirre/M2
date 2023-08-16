var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector[0].match(/[a-z]/i)) return selector.split('').includes('.') ? 'tag.class' : 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction = (el) => {
    if (selectorType === "id") {
      return `#${el.id.toLowerCase()}` === selector.toLowerCase();
    }
    else if (selectorType === "class") {
      let classArr = el.className.split(' ');
      for (let i = 0; i < classArr.length; i++) if (`.${classArr[i]}` === selector.toLowerCase()) return true;
    }
    else if (selectorType === "tag") {
      return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
    }
    else if (selectorType === "tag.class") {
      console.log()
    }
    
    return false;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
