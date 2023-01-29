import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'

function Test({ questions }) {
  //   const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [total, settotal] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  function handleClick(e) {
    if (e.target.innerHTML === questions[currentQuestion].answer) {
      setIsCorrect(true);
      settotal(total + 1);
      setCurrentQuestion(currentQuestion + 1);
      setIsCorrect(null);
    } else {
      setIsCorrect(false);
    }
  }

  const handleChange = () => {
    setCurrentQuestion(currentQuestion + 1);
    setIsCorrect(null);
  };
  //   console.log(questions)

  return (
    <div
      style={{ marginTop: "60px", height: "100vh", display: "flex" }}
      className=" items-center" id={styles.maindiv}
    >
      <div className="w-[100%] mx-4 md:w-[60%] md:mx-auto p-4 md:p-6 items-start md:items-center flex flex-col md:flex-row gap-4 md:gap-0" id={styles.cont}>
        <div className="w-2/3 space-y-2" >
        <h1 className="mb-4 font-semibold text-sm md:text-lg">Marks Obtained:- {total}/45</h1>
        <div className="flex text-sm md:text-2xl font-bold gap-2">
         <h1 className="w-[11%] md:w-[9%]">{currentQuestion + 1} : </h1>
        <h3 className="w-[91%]"> {questions[currentQuestion]?.question}</h3>
        </div>
        <div className="flex gap-2 mb-2" >
        <h1 >Status :</h1>
        {isCorrect === true && <p className="text-green-600">Correct.</p>}
        {isCorrect === false && <p className="text-red-600">Incorrect.</p>}
        </div>
        <button disabled={currentQuestion === 44} onClick={handleChange} className="mt-6 mb-4 w-32 h-auto rounded mr-2 py-2  hover:text-black font-bold text-center" id={styles.btns}>
          Next
        </button>

        </div>

        <div className="w-full md:w-1/3 flex md:flex-col items-end ">
        <ol >
          {questions[currentQuestion].options.map((option, i) => (
            <li key={i} onClick={handleClick} id={styles.btns} className=' mb-4 w-[210%] md:w-full h-auto py-2 px-2 rounded mr-2  hover:text-black font-bold text-center'>
              {option}
            </li>
          ))}
        </ol>
        
        <br />
        </div>
        
        
      </div>
    </div>
  );
}

export default Test;

export async function getStaticProps() {
  const re = await fetch("https://threads-mussel.cyclic.app/question");
  let dat = await re.json();
  return {
    props: {
      questions: dat,
    },
  };
}
