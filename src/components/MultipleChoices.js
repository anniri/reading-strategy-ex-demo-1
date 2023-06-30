import {v4 as uuid} from 'uuid';

function MultipleChoices(props) {

    const newMultichoice = () => {

        //Generate unique identifiers that are used as field element ids.
        let radioIds = [uuid(), uuid(), uuid()];
        let optionIds = [uuid(), uuid(), uuid()];

        return (
            <fieldset key={uuid()} className="create-multichoice">
                <label htmlFor="multichoise-question">Keksi kysymys:</label>
                <input name="multichoise-question" type="text" className="multichoise-question-fields" id={uuid()}/>
                {/*First choice*/}
                <input type="radio" id={radioIds[0]} name="multichoise-options" value="first-option"></input>
                <label htmlFor={radioIds[0]}>Vaihtoehto 1: <input type="text" id={optionIds[0]}/></label>
                {/*Second choice*/}
                <input type="radio" id={radioIds[1]} name="multichoise-options" value="first-option"></input>
                <label htmlFor={radioIds[1]}>Vaihtoehto 2: <input type="text" id={optionIds[1]}/></label>
                {/*Third choice*/}
                <input type="radio" id={radioIds[2]} name="multichoise-options" value="first-option"></input>
                <label htmlFor={radioIds[2]}>Vaihtoehto 3: <input type="text" id={optionIds[2]}/></label>
            </fieldset>
        )
    }

    //Generate array with given amount of multiple choice fields.
    let questionFields = [];
    for(let i = 0; i < props.count; i++) {
        questionFields.push(newMultichoice());
    }

    return (
        <div>

            {questionFields}         
        </div>
        
    )
}

export default MultipleChoices;