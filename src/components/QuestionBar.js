import MultipleChoices from "./MultipleChoices";
import OpenQuestions from "./OpenQuestions";

function QuestionBar(props) {
    return (
        <div className="question-bar">
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

