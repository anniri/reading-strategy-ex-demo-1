function TestOpenQuestions(props) {

    const newQuestion = (questObj) => {
        return (
            <fieldset key={questObj.id} className="test-open-question">
                <label>
                    <h3 className="open-question">{questObj.question}</h3>
                    <input type="text" name={`${questObj.id}`} />
                </label>
            </fieldset>
        )
    }

    let openQuestions = [];

    props.openQuestions.forEach(question => {
        openQuestions.push(newQuestion(question));
    });

    return(
        <div>
            {openQuestions}
        </div>
    )
}

export default TestOpenQuestions;
