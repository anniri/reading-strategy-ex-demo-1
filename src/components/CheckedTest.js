import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CheckedTest(props) {

    const navigate = useNavigate();

    useEffect( () => {
        if(!props.questions || !props.answers) {
            navigate("/")
        }
    }, [])

    const newCheckedMultichoice = (question, answer) => {
        let answerCorrect = question.correct === answer;

        return (
            <div className="checked-multichoice" key={`checked-multi-${question.id}`}>
                <h2 className="checked-multichoice-question">{question.question}</h2>
                <label 
                    className={question.correct === "choiceOpt1" 
                                ? "checked-radio checked-radio-correct" 
                                :(!answerCorrect && answer === "choiceOpt1")
                                    ? "checked-radio checked-radio-false"
                                    : "checked-radio"}
                >
                    <input type="radio" disabled checked={answer === "choiceOpt1" ? "checked" : ""}/>
                    {question.choiceOpt1}
                    {(question.correct === "choiceOpt1") 
                        ? <span className="correct-icon">&#10003;</span> 
                        : (!answerCorrect && answer === "choiceOpt1")
                            ? <span className="false-icon">&#10007;</span>
                            : ""}
                </label>
                <label                     
                    className={question.correct === "choiceOpt2" 
                    ? "checked-radio checked-radio-correct" 
                    :(!answerCorrect && answer === "choiceOpt2")
                        ? "checked-radio checked-radio-false"
                        : "checked-radio"}
                >
                    <input type="radio" disabled checked={answer === "choiceOpt2" ? "checked" : ""}/>
                    {question.choiceOpt2}
                    {(question.correct === "choiceOpt2") 
                        ? <span className="correct-icon">&#10003;</span> 
                        : (!answerCorrect && answer === "choiceOpt2")
                            ? <span className="false-icon">&#10007;</span>
                            : ""}
                </label>
                <label 
                    className={question.correct === "choiceOpt3" 
                    ? "checked-radio checked-radio-correct" 
                    :(!answerCorrect && answer === "choiceOpt3")
                        ? "checked-radio checked-radio-false"
                        : "checked-radio"}
                >
                    <input type="radio" disabled checked={answer === "choiceOpt3" ? "checked" : ""}/>
                    {question.choiceOpt3}
                    {(question.correct === "choiceOpt3") 
                        ? <span className="correct-icon">&#10003;</span> 
                        : (!answerCorrect && answer === "choiceOpt3")
                            ? <span className="false-icon">&#10007;</span>
                            : ""}
                </label>
            </div>
        )
    }

    const newCheckedOpenQuestion = (question, answer) => {
        return (
            <div className="checked-openQuestion" key={`checked-open-${question.id}`}>
                <h2 className="checked-openQuestion-question">{question.question}</h2>
                <p className="bold-text">Vastauksesi:</p>
                <p>{answer}</p>
                <p className="bold-text">Mallivastaus:</p>
                <p>{question.modelAnswer}</p>
            </div>
        )
    }

    let questionElements = [];
    if(props.questions && props.answers) {
        props.questions.forEach(question => {
            let answer = props.answers.find(answer => answer.id === question.id)
            if(answer) {
                if(question.hasOwnProperty("modelAnswer")) {
                    questionElements.push(newCheckedOpenQuestion(question, answer.answer));
                } else {
                    questionElements.push(newCheckedMultichoice(question, answer.answer));
                }
            }

        });
    }


    return (
        <div id="checked-test-container">
            <h1>Tuloksesi</h1>
            {questionElements}
            <button onClick={() => navigate("/")}>Takaisin tekstiin</button>
        </div>
    )
}

export default CheckedTest;