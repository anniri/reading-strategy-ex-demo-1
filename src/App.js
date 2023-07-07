import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import QuestionBar from './components/QuestionBar';
import { useState } from 'react';
import TestForm from './components/TestForm';


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
            <h1>Minna Canth</h1>
            <p>Minna Canth syntyi Tampereella Puutarhakatu 8:ssa keväällä 1844. Canthin isä Gustaf Vilhelm Johnson työskenteli Finlaysonin puuvillatehtaalla mestarina ja oli vaimonsa Lovisa Ulrikan, entisen kotiapulaisen, tavoin lähtöisin köyhistä oloista. Perheessä oli myös isän mukaan nimetty poika Gustaf Vilhelm (Gusti) ja toinen tytär Augusta Katharina. Perhe asui Canthin lapsuudessa Tampereen köyhälistön kaupunginosassa, mutta erityistä puutetta ei ilmeisesti nähty. Perheen taloudellinen tilanne koheni, ja vuonna 1853 perhe muutti Kuopioon, kun isä Gustaf Vilhelm sai hoitaakseen Tampereen Lankakaupan.</p>
            <h2>Kuopiossa koulutielle</h2>
            <p>Kuopiossa Canth jatkoi jo Tampereella ruotsinkielisessä työläislasten Finlaysonin tehtaankoulussa alkanutta koulunkäyntiä. Kouluista ensimmäinen oli Snellmanin aloitteesta perustettu Kuopion kaupungin työväen tyttökoulu, joka oli niin sanottu lankasterikoulu, sillä siellä noudatettiin englantilaista Bell-Lancasterin opetusmenetelmää. Opetusmenetelmän huomattavin piirre oli se, että vanhemmat oppilaat ohjasivat nuorempia. Opetuskieli oli suomi. Sieltä Miinu Johnson, joka kutsui tuolloin itseään Minaksi, siirtyi Soldanin sisarusten (Aleksandra, Augusta ja Edla, joista Edla opetti häntä myöhemmin myös Jyväskylän seminaarissa) ylläpitämään ruotsinkieliseen kouluun. Tämä kolmivuotinen koulu oli tarkoitettu vain tytöille. Täältä Canth eteni vielä kolmivuotiseen ruotsinkieliseen valtion tyttökouluun Frouvasväen koulu sivistyneimpäin (herraisten) vanhempain tyttäriä varten, johon hänen ei olisi syntyperänsä takia pitänyt päästä. Kauppias Gustaf Johnsonin hyvän taloudellisen menestyksen takia näin kuitenkin tapahtui. Gustaf olisi halunnut kouluttaa myös poikansa Gustin, mutta tämä ei ollut siitä kiinnostunut.</p>
            <p>Canthin nuoruuden ajan yhteiskunnassa tyttöjen koulutusmahdollisuuksia rajoitettiin, toisin kuin poikien, mikä ei ollut Miinan mieleen. Herraisten tyttökoulussakin tyttöjä suorastaan varjeltiin liialta tiedolta - puolet viikkotunneista omistettiin käsitöille. Silloisen käsityksen mukaan naiset eivät olisi kestäneet pitkiä koulupäiviä tai suuria vaatimuksia, vaan olisivat sairastuneet auttamatta hermoheikkouteen. Johnsonin tyttäret oppivat kuitenkin kouluissa esimerkiksi ruotsin niin hyvin, että he puhuivat sitä kotonaan ja käyttivät sitä keskinäisessä kirjeenvaihdossa.</p>
            <p>Gustaf Johnsonin liiketoimet sujuivat hyvin, ja hänellä oli varaa pitää kaupassa apulaista tyttärensä sijaan. Canth oli tullut myös avioitumisikään, mutta avioliiton sijaan hän toivoi itsenäisen naisen uraa. Mahdollisuuden haaveeseen tarjosi Jyväskylässä vuonna 1863 alkanut kansakoulunopettajaseminaari, sillä opettajattarena nainen saattoi elättää itsensä menemättä naimisiin. Seminaarin myötä naisella oli ensimmäistä kertaa Suomessa mahdollisuus opiskella johonkin muuhun kuin kätilön ammattiin.</p>
            <h2>Jyväskylän aika</h2>
            <p>Canthin isä pyrki ilmeisesti kouluttamaan tyttärensä porvarilliseksi neidoksi avioliittoa varten. Tyttökoulusivistykseen kuuluivat kainous, ranskan kieli ja hyvät käytöstavat. Vanhempiensa vastustuksesta huolimatta Canth halusi jatkaa koulunkäyntiä. Hän oli päättänyt lähteä Jyväskylään vaikka salaa, jos vanhemmat eivät antaisi lupaa. Sellainen kuitenkin annettiin. Miinu Johnson pääsi syksyllä 1863 vasta perustettuun Jyväskylän seminaariin, joka koulutti kansakoulunopettajia. Opinnot jäivät kuitenkin kesken vuonna 1865 hänen hyväksyessään seminaarin luonnontiedon opettajansa Johan Ferdinand Canthin kosinnan. Canth ei myöntynyt ensimmäisellä eikä vielä toisellakaan kerralla. He menivät naimisiin ja asettuivat asumaan Jyväskylään. Seminaarissa aikaisemmin Minaksi itseään kutsunut Canth alkoi käyttää etunimeä Minna.</p>
            <p>Canthin elämä oli Jyväskylässä kiireistä, sillä pariskunnalle syntyi kaikkiaan seitsemän lasta: Anni (1866-1911), Elli (1868-1944), Hanna (1870-1889), Maiju (1872-1943), Jussi (1874-1929), Pekka (1876-1959) ja Lyyli (1880-1969). Silti Canth ehti harjoittaa hyväntekeväisyyttä köyhien keskuudessa ja kirjoittaa miehensä toimittamiin Keski-Suomi- ja Päijänne-sanomalehtiin novelleja, uutisia ja yhteiskunnallisia kannanottoja, erityisesti raittiuteen ja naisiin liittyvistä aiheista. Hänen ensimmäinen teoksensa oli ”Novelleja ja kertomuksia” (1878), joka aloitti pitkän kirjailijanuran. Canthista tuli Jyväskylässä myös ensimmäinen suomenkielinen sanomalehtinainen.</p>
            <p>Vuonna 1879 Canthin elämässä tapahtui merkittävä käänne: hänen miehensä kuoli pitkään sairastettuaan vähän ennen perheen seitsemännen lapsen syntymää. Sitä seurannut aika oli Canthille fyysisesti ja henkisesti raskasta aikaa. Joitakin kuukausia myöhemmin Canth sai valmiiksi ensimmäisen näytelmänsä Murtovarkaus. Hän lähetti sen Jyväskylässäkin vierailleen Suomalaisen Teatterin johtajalle Kaarlo Bergbomille, joka hyväksyi sen oitis; suomenkielisistä näytelmistä oli silloin pulaa. Murtovarkaus palkittiin vielä Suomalaisen Kirjallisuuden Seuran palkinnolla.</p>
        </div>
    )

    let exerciseMaterial = {
        multipleChoicesCount: 1,
        openQuestionsCount: 1,
        material: {
            content: content,
            source: "Wikipedia: Minna Canth. Henkilöhistoria.",
            sourceLink: "https://fi.wikipedia.org/wiki/Minna_Canth"
        }
    }

    let frontPageElement = (
        <div id="first-view">
        <button 
            id="toggle-question-view"
            onClick={() => setShowQuestions(!showQuestions)}
        >{showQuestions ?  "Sulje" : "Keksi kysymykset"}
        </button>
        <header>
            <h1>Lukuharjoitus</h1>
            <div className="instruction">
                <p>Lue teksti ja pohdi, mitkä ovat sen keskeisimpiä asioita.</p>
                <p>Keksi kysymyksiä, jotka liittyvät tekstin tärkeimpään sisältöön.</p>
                <p>Klikkaa kysymysten jälkeen valmis-painiketta ja voit kokeilla, miten hyvin asiat jäivät sinulle mieleen.</p>
            </div>
        </header>
        <main>
            <div className="text-display">
                {exerciseMaterial.material.content}
                <p id="text-source">{exerciseMaterial.material.source} {exerciseMaterial.material.hasOwnProperty("sourceLink") ? <a href={exerciseMaterial.material.sourceLink}>{exerciseMaterial.material.sourceLink}</a> : ""}</p>
                
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
    )

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={frontPageElement} />
            <Route path="/test" element={<TestForm formData={formData} />} />
        </Routes>
        </BrowserRouter>

    );
}

export default App;
