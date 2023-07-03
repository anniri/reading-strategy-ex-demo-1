import {v4 as uuid} from 'uuid';

function OpenQuestions(props) {

    const newOpenQuestion = () => {
        return (
            <fieldset key={uuid()} className="create-open-question">
                <label class="create-open-question-label">
                    Keksi kysymys:
                    <input type="text" id={uuid()} className="create-open-question-input"/>
                </label>
                <label>
                    Mallivastaus:
                    <input type="text" id={uuid()} className="create-open-question-answer-input"/>
                </label>
            </fieldset>
        )
    }

    let openQuestionList = [];

    for(let i = 0; i < props.count; i++) {
        openQuestionList.push(newOpenQuestion());
    }

    return (
        <div id="create-open-questions-container" class="create-question-container">
            <h3>Avoimet kysymykset ({props.count} kpl)</h3>
            {openQuestionList}
        </div>
    )
}

export default OpenQuestions;