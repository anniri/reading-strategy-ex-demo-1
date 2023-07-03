import {v4 as uuid} from 'uuid';

function MultipleChoices(props) {

    const newMultichoice = () => {

        //Generate unique identifiers that are used as field element ids.
        let radioIds = [uuid(), uuid(), uuid()];
        let optionIds = [uuid(), uuid(), uuid()];
        let fieldId = uuid();

        return (
            <fieldset key={fieldId} className="create-multichoice">
                <label htmlFor="multichoice-question" className="multichoice-question-label">Keksi kysymys: <input name="multichoice-question" type="text" className="multichoice-question-field" id={uuid()}/>
                </label>
                {/*First choice*/}
                <label htmlFor={radioIds[0]}>
                <input type="radio" id={radioIds[0]} name={`multichoice-options-${fieldId}`} value="first-option"></input>
                Vaihtoehto 1: <input type="text" id={optionIds[0]}/></label>
                {/*Second choice*/}
                <label htmlFor={radioIds[1]}>
                <input type="radio" id={radioIds[1]} name={`multichoice-options-${fieldId}`} value="first-option"></input>
                Vaihtoehto 2: <input type="text" id={optionIds[1]}/></label>
                {/*Third choice*/}
                <label htmlFor={radioIds[2]}>
                <input type="radio" id={radioIds[2]} name={`multichoice-options-${fieldId}`} value="first-option"></input>
                Vaihtoehto 3: <input type="text" id={optionIds[2]}/></label>
            </fieldset>
        )
    }

    //Generate array with given amount of multiple choice fields.
    let questionFields = [];
    for(let i = 0; i < props.count; i++) {
        questionFields.push(newMultichoice());
    }

    return (
        <div id="create-multichoice-container" class="create-question-container">
            <h3>Monivalintakysymykset ({props.count} kpl)</h3>
            {questionFields}         
        </div>
        
    )
}

export default MultipleChoices;