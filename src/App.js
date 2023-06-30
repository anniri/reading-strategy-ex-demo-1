import './App.css';
import exerciseMaterialJSON from './exerciseMaterial.json';


function App() {

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
            <div>
                {exerciseMaterial.material.content}
            </div>

        </div>
    );
}

export default App;
