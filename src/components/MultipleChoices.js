import {v4 as uuid} from 'uuid';

function MultipleChoices(props) {

    const newMultichoice = () => {

        /*
        Generate unique identifier that is used as a fieldset's key and when naming the field elements.
        Elements follow a naming pattern:
            Input for question: choiceQuestion-fieldId
            Radio buttons: choiceRadio-fieldId
            Input for answer option: choiceOptN-fieldId
        Radio button's value attribute references answer option's index.
        */
        let fieldId = uuid();

        return (
            <fieldset key={fieldId} className="create-multichoice">
                <label  className="multichoice-question-label">
                    Keksi kysymys: <input name={`choiceQuestion-${fieldId}`} type="text" className="multichoice-question-field" />
                </label>
                {/*First choice*/}
                <label>
                <input type="radio" name={`choiceRadio-${fieldId}`} value={"choiceOpt1"} checked></input>
                Vaihtoehto 1: <input type="text" name={`choiceOpt1-${fieldId}`} />
                </label>
                {/*Second choice*/}
                <label>
                <input type="radio" name={`choiceRadio-${fieldId}`} value={"choiceOpt2"}></input>
                Vaihtoehto 2: <input type="text" name={`choiceOpt2-${fieldId}`} />
                </label>
                {/*Third choice*/}
                <label>
                <input type="radio" name={`choiceRadio-${fieldId}`} value={"choiceOpt2"}></input>
                Vaihtoehto 3: <input type="text" name={`choiceOpt3-${fieldId}`} />
                </label>
            </fieldset>
        )
    }

    //Generate array with given amount of multiple choice fields.
    let questionFields = [];
    for(let i = 0; i < props.count; i++) {
        questionFields.push(newMultichoice());
    }

    return (
        <div id="create-multichoice-container" className="create-question-container">
            <h3>Monivalintakysymykset ({props.count} kpl)</h3>
            <p>Muista merkitä oikea vastausvaihtoehto.</p>
            {questionFields}         
        </div>
        
    )
}

export default MultipleChoices;