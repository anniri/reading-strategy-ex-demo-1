import MultipleChoices from "./MultipleChoices";
import OpenQuestions from "./OpenQuestions";

function QuestionBar(props) {
    return (
        <div className={(props.showQuestions) ? "question-bar-showing" : "question-bar"}>
            <button 
                id="close-question-bar" 
                onClick={() => props.setShowQuestions(false)}
            >Sulje
            </button>
            <h2>Keksi kysymykset</h2>
            <p>Mitkä asiat olivat mielestäsi tekstissä tärkeitä? Keksi kysymyksiä tekstin sisällöstä.</p>
            <form>
                <MultipleChoices count={props.multipleChoicesCount}/>
                <OpenQuestions count={props.openQuestionsCount}/>
                <button>Valmis</button>
            </form>
        </div>
    )    
}

export default QuestionBar;

