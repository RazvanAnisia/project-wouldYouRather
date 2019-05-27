import React from "react";
import ViewQuestion from './ViewQuestion'
import { Link } from 'react-router-dom'

function QuestionsList(props) {
 const { questions, answered } = props
 //order questions by timestamp(newest first)
 const questionsArr = Object.values(questions)
 const orderedQuestions = questionsArr.sort((a, b) => {
   return b.timestamp - a.timestamp 
 })

  return (
      <div>
       { orderedQuestions.length > 0 
       ? orderedQuestions.map(question => (
        <ViewQuestion 
        key={question.id}
        question={question}
        answered={answered}
        />
      ))
      :
      <p className="mt-3">Sorry, you have no more questions to answer. Maybe <Link to="/add">add some more </Link>? :)</p>
    }
      </div>
    
  );
}

export default QuestionsList;
