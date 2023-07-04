function TestOpenQuestions(props) {

    const newQuestion = (questObj) => {
        return (
            <fieldset key={questObj.id} className="test-open-question">
                <label>
                    <p class="open-question">{questObj.question}</p>
                    <input type="text" name={`openAnswer-${questObj.id}`} />
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
