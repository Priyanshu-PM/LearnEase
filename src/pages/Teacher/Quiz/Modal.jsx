import React, {useState} from 'react'
import axios from 'axios';
import { FaCross } from 'react-icons/fa';

const Modal = (quizId, tdata) => {

    

  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const quizKey = `${apiKey}/quiz/${quizId}`;
  const quizDemo = `${apiKey}/quiz/63fa00bff48312e9af983087`;

    const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert]= useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleCorrectAnswerChange = (e) => {

    setCorrectAnswer(e.target.value);
  };



  const handleaddQuestion = (event) => {
    event.preventDefault();


    if(options.includes(correctAnswer)) {

      setAlert("");
    }

    axios
      .patch(
        quizKey,
        {
          text: "",
          options: [],
          correctAnswer: "",
        },
        {
          headers: {
            Authorization: `${tdata.tokem}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.success) {
          console.log("Question added successfully");
        } else {
          alert("Failed to add question");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div className="modal">
    <div><FaCross/></div>
                <form onSubmit={handleaddQuestion}>
                  <label>Question Text:</label>
                  <input
                    type="text"
                    value={question}
                    onChange={handleQuestionChange}
                  />

                  <label>Option 1:</label>
                  <input
                    type="text"
                    value={options[0]}
                    onChange={(e) => handleOptionChange(e, 0)}
                  />

                  <label>Option 2:</label>
                  <input
                    type="text"
                    value={options[1]}
                    onChange={(e) => handleOptionChange(e, 1)}
                  />

                  <label>Option 3:</label>
                  <input
                    type="text"
                    value={options[2]}
                    onChange={(e) => handleOptionChange(e, 2)}
                  />

                  <label>Option 4:</label>
                  <input
                    type="text"
                    value={options[3]}
                    onChange={(e) => handleOptionChange(e, 3)}
                  />

                  <label>Correct Answer:</label>
                  <input
                    type="text"
                    value={correctAnswer}
                    onChange={handleCorrectAnswerChange}
                  />

                  <button type="submit">Submit</button>
                </form>
              </div>
  )
}

export default Modal;