import MultipleChoices from "./MultipleChoices";
import OpenQuestions from "./OpenQuestions";
import { useNavigate } from "react-router-dom";

function QuestionBar(props) {

    const navigate = useNavigate();

    const saveQuestions = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);

        /*
        Questions are processed into objects and saved into arrays.
        This function's last step is to save these arrays into the state variable formData, that's declared in App.js
        */
        let multichoices = [];
        let openQuestions = [];

        formData.forEach((answer, name) => {
            //Iterating through formdata and finding user's question inputs and other inputs associated with the question.
            //By form field's naming conventions, input for question is recognized with how input's name starts. 
            if(name.startsWith("choiceQuestion")) {
                //Each question set has an unique fieldId. All associated field names end with same fieldId.
                let fieldId = name.slice(15);
    
                let newChoice = {
                    id: fieldId,
                    question: answer,
                    choiceOpt1: formData.get(`choiceOpt1-${fieldId}`), //Using fieldId, question's answer options can be found from the formData.
                    choiceOpt2: formData.get(`choiceOpt2-${fieldId}`),
                    choiceOpt3: formData.get(`choiceOpt3-${fieldId}`),
                    correct: formData.get(`choiceRadio-${fieldId}`)
                }

                multichoices.push(newChoice)
            }

            if(name.startsWith("openQuestion")) {
                let fieldId = name.slice(13);
                let newOpen = {
                    id: fieldId,
                    question: answer,
                    modelAnswer: formData.get(`openAnswer-${fieldId}`) 
                }

                openQuestions.push(newOpen);
            }
        })
        console.log(multichoices);
        console.log(openQuestions)

        props.setFormData({
            multiChoiceQuestions: multichoices,
            openQuestions: openQuestions
        });
        navigate("/test")
    }

    return (
        <div className={(props.showQuestions) ? "question-bar-showing" : "question-bar"}>

            <h2>Keksi kysymykset</h2>
            <p>Mitkä ovat mielestäsi tärkeimpiä asioita tekstissä? Keksi kysymyksiä tekstin sisällöstä.</p>
            <form onSubmit={saveQuestions}>
                <MultipleChoices count={props.multipleChoicesCount}/>
                <OpenQuestions count={props.openQuestionsCount}/>
                <button type="submit" id="save-questions-button">Valmis</button>
            </form>
        </div>
    )    
}

export default QuestionBar;

