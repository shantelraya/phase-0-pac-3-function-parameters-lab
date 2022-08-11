function introduction(name = "Shantel") {
    return `Hi, my name is ${name}.`;
  }


  function introductionWithLanguage(name = "Shantel", language = "java") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }


  function introductionWithLanguageOptional(name = "Shantel", language = '') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

    }

  function introductionWithLanguageOptional(name = "Shantel", language = "JavaScript") {
      return `Hi, my name is ${name} and I am learning to program in ${language}.`;

  }
