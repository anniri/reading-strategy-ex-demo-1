import { useEffect } from "react";
import TestMultipleChoices from "./TestMultipleChoices";
import TestOpenQuestions from "./TestOpenQuestions";
import { useNavigate } from "react-router-dom";

function TestForm(props) {
    const navigate = useNavigate();


    //If user navigates to test without filling question form, app will navigate back to the front page.
    useEffect( () => {
        if(props.formData.multiChoiceQuestions.length === 0 && props.formData.openQuestions.length === 0) {
            navigate("/")
        }
    }, [])

    return (
        <div>
           {
            (props.formData.multiChoiceQuestions.length > 0 && props.formData.openQuestions.length > 0)
            ?<div>
            <form>
                <TestMultipleChoices choiceQuestions={props.formData.multipleQuestions} />
                <TestOpenQuestions openQuestions={props.formData.openQuestions} />
            </form>
            </div>
            : <div>Ei kysymyksiä</div>
            }
        </div>

    )
}

export default TestForm;