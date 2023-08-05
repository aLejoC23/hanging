const words = [
    "PROGRAMACION",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "GITHUB",
    "HTML",
    "CSS",
    "NODEJS",
    "REACT",
    "ANGULAR",
    "PYTHON",
    "PHP",
    "BASEDEDATOS",
    "ALGORITMOS",
    "JAVA",
    "SQL"
  ];

  export function getRandomWord(){
    const randomWordIndex = Math.floor(Math.random() * words.length);
    return words[randomWordIndex];
  }
  