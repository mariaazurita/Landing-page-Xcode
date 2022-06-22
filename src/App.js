import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (

    <div className='App-sizing'>
      <div className='App-container'>
        <div className='Top-container'>
          <div className='Intro'>
            <h1> Xcode </h1>
            <h4> Consultoria </h4>
          </div>

          <div className='Comunication-form'>
            {/* <label> Formulario </label>
            <p> Lorem ipsum dolor sit amet, consectetur </p>

            <form>

              <input type='Text' required className ='Info' placeholder='Nombre'></input>
              <input type='email' required className ='Info' placeholder='Email'></input>
              <input type='phone' required className ='Info' placeholder='Número de telefono'></input>
              <textarea required className ='Info-message' placeholder='Mensaje....'></textarea>
              <button> Submit </button>

            </form> */}
            <iframe className='Iframe' src="https://21dev.xyz/xcode_form/" />

          </div>

        </div>

        <div className='Services-section'>
          <h1> Servicios </h1>
          <div className='Services'>
            <div className='Services-offered'>
              <div className='Icons-div'>
                <FontAwesomeIcon className='Service-icons' icon={faUserTie} />
              </div>
              <h1 className='Service-title'> Asesoria y consultoria </h1>
              <p> Ayudamos a su empresa a personalizar su infraestructura de forma eficiente y rentable.  </p>
            </div>

            <div className='Services-offered'>
              <div className='Icons-div'>
                <FontAwesomeIcon className='Service-icons' icon={faLaptopCode} />
              </div>
              <h1 className='Service-title'> Desarrollo de software </h1>
              <p> Proyectos de Desarrollo de Software basados en satisfacer las necesidades y especificaciones del cliente. </p>
              </div>

            <div className='Services-offered'>
              <div className='Icons-div'>
                <FontAwesomeIcon className='Service-icons' icon={faDiagramProject} />
              </div>
              <h1 className='Service-title'> Gestion de proyectos </h1>
              <p> Guia del proyecto en todas sus etapas. 
                Inicio, planificación, ejecución, supervisión y  cierre. </p>
            </div>      

          </div> 

        </div>

      </div>
    </div>
  
  );
}

export default App;