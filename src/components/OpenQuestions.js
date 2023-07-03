import {v4 as uuid} from 'uuid';

function OpenQuestions(props) {

    //Generate unique identifier that is used as a fieldset's key and when naming the field elements.
    const newOpenQuestion = () => {
        let fieldId = uuid();

        return (
            <fieldset key={fieldId} className="create-open-question">
                <label className="create-open-question-label">
                    Keksi kysymys:
                    <input name={`openQuestion-${fieldId}`} type="text" id={uuid()} className="create-open-question-input"/>
                </label>
                <label>
                    Mallivastaus:
                    <input name={`openAnswer-${fieldId}`} type="text" id={uuid()} className="create-open-question-answer-input"/>
                </label>
            </fieldset>
        )
    }

    let openQuestionList = [];

    for(let i = 0; i < props.count; i++) {
        openQuestionList.push(newOpenQuestion());
    }

    return (
        <div id="create-open-questions-container" className="create-question-container">
            <h3>Avoimet kysymykset ({props.count} kpl)</h3>
            {openQuestionList}
        </div>
    )
}

export default OpenQuestions;