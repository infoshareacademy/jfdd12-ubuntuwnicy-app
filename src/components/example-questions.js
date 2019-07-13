export default [
    {
      question: "Ile kol ma samochod",
      answers: [
        {
          id: "A",
          answerBody: "jeden"
        },
        {
          id: "B",
          answerBody: "jeden"
        },
        {
          id: "C",
          answerBody: "jeden"
        }
      ],
      correctAnswer: "A"
    },
    {
      question: "Ile kol ma kot",
      answers: [
        {
          id: "A",
          answerBody: "Pytanie pierwsze"
        },
        {
          id: "B",
          answerBody: "Pytanie drugie"
        },
        {
          id: "C",
          answerBody: "Pytanie trzecie"
        },
        {
          id: "D",
          answerBody: "Pytanie czwarte"
        }
      ],
      correctAnswer: "A"
    },
    {
      question: "Pytanie numer trzy",
      answers: [
        {
          id: "A",
          answerBody: "Tak"
        },
        {
          id: "B",
          answerBody: "Nie"
        }
      ],
      correctAnswer: "A"
    },
    {
      question: "Ostatnie pytanie",
      answers: [
        {
          id: "A",
          answerBody: "Pytanie pierwsze"
        },
        {
          id: "B",
          answerBody: "Pytanie drugie"
        },
        {
          id: "C",
          answerBody: "Pytanie trzecie"
        }
      ],
      correctAnswer: "A"
    },
    ...[...Array(30)].map((_, index) => ({
      question: `Losowe pytanie id: ${index}`,
      answers: [
        {
          id: "A",
          answerBody: "Pytanie pierwsze"
        },
        {
          id: "B",
          answerBody: "Pytanie drugie"
        },
        {
          id: "C",
          answerBody: "Pytanie trzecie"
        }
      ],
      correctAnswer: "A"
    }))
  ];

  