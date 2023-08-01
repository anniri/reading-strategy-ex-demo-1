import { useEffect, useState } from "react";
import TestMultipleChoices from "./TestMultipleChoices";
import TestOpenQuestions from "./TestOpenQuestions";
import { useNavigate } from "react-router-dom";
import CheckedTest from "./CheckedTest";

function TestForm(props) {
    const navigate = useNavigate();

    const [testChecked, setTestChecked] = useState(false);
    const [answerData, setAnswerData] = useState([]);

    //If user navigates to the test without filling question form, app will navigate back to the front page.
    useEffect( () => {
        if(props.formData.multiChoiceQuestions.length === 0 && props.formData.openQuestions.length === 0) {
            navigate("/")
        }
    }, [])

    const checkTest = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let answers = [];
        formData.forEach((answer, name) => {
            answers.push({
                id: name,
                answer: answer
            })
        })
        setAnswerData(answers);
        setTestChecked(true);
    }


    return (
        <div id="test-container">
           {
            !testChecked
            ?<div>
            <form onSubmit={checkTest} id="test-form">
                <h1>Testaa tietosi</h1>
                <TestMultipleChoices 
                    choiceQuestions={props.formData.multiChoiceQuestions}/>
                <TestOpenQuestions openQuestions={props.formData.openQuestions} />
                <button type="submit">Valmis</button>
            </form>
            </div>
            : <CheckedTest questions={[...props.formData.multiChoiceQuestions, ...props.formData.openQuestions]} answers={answerData}/>
            }
        </div>

    )
}

export default TestForm;