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
//:) Listo para desplegar todo menos fechas. ehkse
//bhedbksd dhii jhoia ijcai 

export const Axios = axios.create({
  baseURL: 'http://localhost/Xcode-Landing-Page-backend/',
});

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const [pressed, setPressed] = useState(false);

  async function sendInfo() {

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-');
    }

    let fecha = formatDate(new Date());
    
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
      'success'
    )
  }

}

function validateInfo(provinence) {

  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10}$/;

  let errors = {};
  
  if (name == '') {
    errors.name = true;
  } else errors.name = false; 
  
  if (email == '') {
    errors.email = true;
  } else if (!emailRegex.test(email)) {
    errors.email = true;
  } else errors.email = false;
    
  if (phone == '') {
    errors.phone = true;
  } else if (!phoneRegex.test(phone)){
    errors.phone = true;
  } else errors.phone = false;

  if (message == '') {
    errors.message = true;
  } else errors.message = false;
  

  if(provinence == true) {

  if(errors.name || errors.email || errors.phone || errors.message) {
    setError(errors);
    setPressed(true)
    Swal.fire(
      'Ingrese datos validos',
      'No se aceptan campos vacios',
      'error'
    )
  } else {
    sendInfo();
  }
} else {
  return errors
}

}

function handleBlur(e) {
  if(pressed){
  let errors = validateInfo(false);
  let check = {...error}
  if(!(check[e.target.name] == errors[e.target.name])) {
    check[e.target.name] = errors[e.target.name];
  }
  setError(check);
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

              <input type='Text' required className ={!error.name? 'Info':'Wrong-info'} value={name} name='name' onChange={e=>setName(e.target.value)} onBlur={(e)=>handleBlur(e)} placeholder='Nombre'></input>
              <input type='email' required className ={!error.email? 'Info':'Wrong-info'} value={email} name='email' onChange={e=>setEmail(e.target.value)} onBlur={(e)=>handleBlur(e)} placeholder='Email'></input>
              <input type='phone' required className ={!error.phone? 'Info':'Wrong-info'} value={phone} name='phone' onChange={e=>setPhone(e.target.value)} onBlur={(e)=>handleBlur(e)} placeholder='Número de telefono'></input>
              <textarea required className ={!error.message? 'Info-message':'Wrong-info-message'} name='message' value={message} onChange={e=>setMessage(e.target.value)} onBlur={(e)=>handleBlur(e)} placeholder='Mensaje....'></textarea>
              <button onClick={()=>validateInfo(true)}> Submit </button>

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