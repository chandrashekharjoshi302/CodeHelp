import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function Test({questions}) {
//   const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);


  function handleClick(e) {
    if (e.target.innerHTML === questions[currentQuestion].answer) {
      setIsCorrect(true);
      setCurrentQuestion(currentQuestion+1)
      setIsCorrect(null)
    } else {
      setIsCorrect(false);
    }
  }

  const handleChange=()=>{
    setCurrentQuestion(currentQuestion+1)
    setIsCorrect(null)
  }
//   console.log(questions)

  return (
    <div style={{marginTop:"100px"}}>
       Question: {currentQuestion+1}
      <h3>{questions[currentQuestion].question}</h3>
      
      <ol>
         {questions[currentQuestion].options.map((option, i) => (
          <li key={i} onClick={handleClick}>
            {option}
          </li>
        ))}
      </ol>
      <h1>
      Status:
      </h1>
     {isCorrect === true && <p>Correct.</p>}
     {isCorrect === false && <p>Incorrect.</p>}
     <br />
     <button disabled={currentQuestion===0} onClick={()=>setCurrentQuestion(currentQuestion-1)}>Previous</button>
     <Button onClick={handleChange}>Next</Button>
    </div>
  );
}

export default Test


export async function getStaticProps(){
    const re= await fetch("https://threads-mussel.cyclic.app/question")
    let dat= await re.json()
    return {
      props:{
        questions:dat
      }
    }
  }


