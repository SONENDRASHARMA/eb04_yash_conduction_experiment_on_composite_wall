/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which of the following law of thermodynamics is responsible for heat transfer",  ///// Write the question inside double quotes
      answers: {
        

        a: " Zeroth Law",                  ///// Write the option 1 inside double quotes
        b: "First Law of thermodynamics",                  ///// Write the option 2 inside double quotes
        c: "Second law of thermodynamics",                  ///// Write the option 3 inside double quotes
        d: "Third law of thermodynamics"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "Choose the correct statement about thermal conductivity",  ///// Write the question inside double quotes
      answers: {
        
    
        a: "It decreases with increase in temperature for metals",                  ///// Write the option 1 inside double quotes
        b: "It decreases with increase in temperature for gases",                  ///// Write the option 2 inside double quotes
        c: "It is not a function of temperature",                  ///// Write the option 3 inside double quotes
        d: "It increses with increase in temperature irrespective of material"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    				
    
    {
     question: "Choose the correct statement about thermal conductivity",  ///// Write the question inside double quotes
      answers: {
  
        a: "Thermal conductivity of gases and liquids is generally higher than that of solids",                  ///// Write the option 1 inside double quotes
        b: "Thermal conductivity of gases decreases with increasing molecular weight",                  ///// Write the option 2 inside double quotes
        c: "Thermal conductivity of non metals is higher than metals",                  ///// Write the option 3 inside double quotes
        d: "Thermal conductivity of water is constant with temperature"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },  
    
    
    {
     question: "Fouries law of heat conduction is valid for",  ///// Write the question inside double quotes
      answers: {
        
   
        a: "One dimensional heat transfer",                  ///// Write the option 1 inside double quotes
        b: "Two dimensional heat transfer",                  ///// Write the option 2 inside double quotes
        c: "Three dimensional heat transfer",                  ///// Write the option 3 inside double quotes
        d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
