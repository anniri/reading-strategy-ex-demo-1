function TestMultipleChoices(props) {

    const newMultiQuestion = (questObj) => {

        return (
            <fieldset key={questObj.id} className="test-multichoice">
                <h3 className="multi-question">{questObj.question}</h3>
                <label>
                    <input type="radio" name={`${questObj.id}`} value="choiceOpt1"/>
                    {questObj.choiceOpt1}
                </label>
                <label>
                    <input type="radio" name={`${questObj.id}`} value="choiceOpt2"/>
                    {questObj.choiceOpt2}
                </label>
                <label>
                    <input type="radio" name={`${questObj.id}`} value="choiceOpt3"/>
                    {questObj.choiceOpt3}
                </label>
            </fieldset>
        )
    }

    let multiQuestions = [];

    props.choiceQuestions.forEach(question => {
        multiQuestions.push(newMultiQuestion(question));
    });

    return (
        <div>
            {multiQuestions}
        </div>
    )
}

export default TestMultipleChoices;