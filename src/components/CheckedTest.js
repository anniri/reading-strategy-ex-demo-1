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
        return (
            <div className="checked-multichoice" key={`checked-multi-${question.id}`}>
                <p className="checked-multichoice-question">{question.question}</p>
                <label className="checked-multichoice-radio">
                    <input type="radio" disabled checked={answer === "choiceOpt1" ? "checked" : ""}/>
                    {question.choiceOpt1}
                </label>
                <label className="checked-multichoice-radio">
                    <input type="radio" disabled checked={answer === "choiceOpt2" ? "checked" : ""}/>
                    {question.choiceOpt2}
                </label>
                <label className="checked-multichoice-radio">
                    <input type="radio" disabled checked={answer === "choiceOpt3" ? "checked" : ""}/>
                    {question.choiceOpt3}
                </label>
            </div>
        )
    }

    const newCheckedOpenQuestion = (question, answer) => {
        return (
            <div className="checked-openQuestion" key={`checked-open-${question.id}`}>
                <p className="checked-openQuestion-question">{question.question}</p>
                <p>Vastauksesi:</p>
                <p>{answer}</p>
                <p>Mallivastaus:</p>
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
            {questionElements}
            <button onClick={() => navigate("/")}>Takaisin tekstiin</button>
        </div>
    )
}

export default CheckedTest;