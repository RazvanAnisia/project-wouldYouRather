import React from "react";
import ViewQuestion from './ViewQuestion'

//Rendering a list of questions for answered and unanswered
function QuestionsList(props) {
 const { questions, answered } = props
  return (
      <div>
      { questions.map(question => (
        <ViewQuestion 
        key={questions.id}
        question={question}
        answered={answered}
        />
      ))}
      </div>
    
  );
}

export default QuestionsList;
