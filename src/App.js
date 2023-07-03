import './App.css';
import exerciseMaterialJSON from './exerciseMaterial.json';
import QuestionBar from './components/QuestionBar';
import { useState } from 'react';


function App() {
    
    /*
    State variable showQuestions defines QuestionBar components class.
    This class defines bar's display value. On big screens, this will always be block.
    On smaller screens, user affects this value through ui buttons. 
    */
    const [showQuestions, setShowQuestions] = useState(false);

    //State variable for saving questions and answers that user writes on the form.
    const [formData, setFormData] = useState({
        multiChoiceQuestions: [],
        openQuestions: []
    });

    let content = (
        <div>
            <h1>Otsikko</h1>
            <p>Ensimmäinen kappale</p>
            <p>Toinen kappale</p>
            <h2>Väliotsikko</h2>
            <p>Kappale väliotsikon jälkeen</p>
        </div>
    )

    let exerciseMaterial = {
        multipleChoicesCount: 3,
        openQuestionsCount: 2,
        material: {
            content: content,
            source: ""
        }
    }

    return (
        <div className="App">
            <button 
                id="toggle-question-view"
                onClick={() => setShowQuestions(true)}
            >Kysymykset
            </button>
            <main>
                <div className="text-display">
                    {exerciseMaterial.material.content}
                </div>
                <QuestionBar 
                    showQuestions={showQuestions} 
                    setShowQuestions={setShowQuestions}
                    multipleChoicesCount={exerciseMaterial.multipleChoicesCount} 
                    openQuestionsCount={exerciseMaterial.openQuestionsCount}
                    setFormData={setFormData} 
                />
            </main>


        </div>
    );
}

export default App;
