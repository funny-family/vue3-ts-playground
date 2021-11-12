/* eslint-disable @typescript-eslint/no-var-requires */
/*
  Здесь лежит функция,
  которая по имени класса и пути до CSS файла
  вернет минифицированное название класса
*/

// Модуль для генерации уникальных названий
const incstr = require('incstr');

const generateUniqueId = () => {
  const uniqIds = {};

  const alphabetOfSmallLetters = [...Array(26)].map((x, i) => String.fromCharCode(i + 97));
  const alphabetOfBigLetters = [...Array(26)]
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));
  const alphabet = [...alphabetOfSmallLetters, ...alphabetOfBigLetters];

  const generateNextId = incstr.idGenerator({
    // Буквы d нету, чтобы убрать сочетание ad,
    // так как его может заблокировать Adblock
    alphabet: alphabet.filter((letter) => letter !== 'd').join('')
  });

  // Для имени возвращаем его минифицированную версию
  return (name) => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId();
    }

    return uniqIds[name];
  };
};

const generateLocalNameId = generateUniqueId();
const generateComponentNameId = generateUniqueId();

exports.generateScopeName = (localName, resourcePath) => {
  // Получим название папки, в которой лежит наш index.css
  const componentName = resourcePath.split('/').slice(-2, -1)[0];

  const localId = generateLocalNameId(localName);
  const componentId = generateComponentNameId(componentName);

  return `${componentId}_${localId}`;
};
