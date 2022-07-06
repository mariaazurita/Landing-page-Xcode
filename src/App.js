import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useState } from 'react';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export const Axios = axios.create({
  baseURL: 'http://localhost/Xcode-LandingPage/',
});

function App() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function sendInfo() {

    const fecha = new Date();
    fecha.toUTCString();

    const {data} = await Axios.post('index.php',JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
      fecha: fecha
  }));
  if(data.msg) {
    Swal.fire(
      data.msg,
      'Complete el formulario',
      'question'
    )
  } else {
    Swal.fire(
      data.success,
      data.command,
      'question'
    )
  }

}

  return (

    <div className='App-sizing'>
      <div className='App-container'>
        <div className='Top-container'>
          <div className='Intro'>
            <h1> Xcode </h1>
            <h4> Consultoria </h4>
          </div>

          <div className='Comunication-form'>
            <label> Formulario </label>
            <p> Lorem ipsum dolor sit amet, consectetur </p>

            <div className='Form'>

              <input type='Text' required className ='Info' value={name} onChange={e=>setName(e.target.value)} placeholder='Nombre'></input>
              <input type='email' required className ='Info' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email'></input>
              <input type='phone' required className ='Info' value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Número de telefono'></input>
              <textarea required className ='Info-message' value={message} onChange={e=>setMessage(e.target.value)} placeholder='Mensaje....'></textarea>
              <button onClick={()=>sendInfo()}> Submit </button>

            </div>

            {/*<iframe className='Iframe' src="https://21dev.xyz/xcode_form/" />  */}

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
              <h1 className='Service-title'> Gestion de proyectos TI</h1>
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