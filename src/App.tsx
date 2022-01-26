import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil/Accueil';
import APropos from './pages/APropos/APropos';
import CentreInteret from './pages/CentreInteret/CentreInteret';
import Contact from './pages/Contact/Contact';
import StagesEtProjets from './pages/StagesEtProjets/StagesEtProjets';
import VeilleTechno from './pages/VeilleTechno/VeilleTechno';
import Certifications from './pages/Certifications/Certifications';
import CertifPasser from './pages/Certifications/CertifPasser/CertifPasser';
import CertifAPasser from './pages/Certifications/CertifAPasser/CertifAPasser';
import Stages from "./pages/StagesEtProjets/Stages/Stages";
import ProjetsBTS1 from "./pages/StagesEtProjets/Projets/ProjetsBTS1";
import ProjetsBTS2 from "./pages/StagesEtProjets/Projets/ProjetsBTS2";

function App() {
    return (
        <div className="App">
            <Navbar/>
            {/*Toujours afficher navigation*/}
            <div style={{marginTop: "50px"}}>
            <Routes >
                <Route path="/" element={<Accueil/>}/>
                <Route path="/APropos" element={<APropos/>}/>
                <Route path="/APropos/CV.pdf" element={<APropos/>}/>
                <Route path="/CentreInteret" element={<CentreInteret/>}/>
                <Route path="/Veille" element={<VeilleTechno/>}/>

                <Route path="/StagesEtProjets" element={<StagesEtProjets/>}/>
                <Route path="/Stages" element={<Stages/>}/>
                <Route path="/ProjetsBTS1" element={<ProjetsBTS1/>}/>
                <Route path="/ProjetsBTS2" element={<ProjetsBTS2/>}/>

                <Route path="/Certifications" element={<Certifications/>}/>
                <Route path="/Passer" element={<CertifPasser/>}/>
                <Route path="/APasser" element={<CertifAPasser/>}/>

                <Route path="/Contact" element={<Contact/>}/>

                <Route path="*" element={<main style={{padding: "1rem"}}>
                    <p>Il n'y a rien ici !</p>
                </main>}/>
                {/*Si la route n'existe pas est vide */}

            </Routes>
            </div>
        </div>
    );
}

export default App;
