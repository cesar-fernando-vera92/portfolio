/* MENU NAV */
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

/* FORMULARIO EMAIL */
const btn = document.getElementById('boton');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wfmerxp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado!';
      
    }, (err) => {
      btn.value = 'Enviar';
    });
});

/* VALIDATION FORMS */
const $formulario = document.getElementById('form');
const $inputs = document.querySelectorAll('#form [required]');


const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
  number: /^[a-zA-Z0-9_.+-]\d{7,14}$/,
  email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
  subject: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
  message:  /^[a-zA-ZÀ-ÿ\s_.+-,]{1,255}$/
}

const campos = {
	name: false,
	email: false,
  number: false,
  subject: false,
  message: false,
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name": 
      if(expresiones.name.test(e.target.value)){
        document.getElementById('name').classList.remove('invalid');
        document.getElementById('name').classList.add('valid');
      } else {
        document.getElementById('name').classList.add('invalid');
        document.getElementById('name').classList.remove('valid');
      }
    break;
    case "number": 
      if(expresiones.number.test(e.target.value)){
        document.getElementById('number').classList.remove('invalid');
        document.getElementById('number').classList.add('valid');
      } else {
        document.getElementById('number').classList.add('invalid');
        document.getElementById('number').classList.remove('valid');
      }
    break;
    case "email": 
      if(expresiones.email.test(e.target.value)){
        document.getElementById('email').classList.remove('invalid');
        document.getElementById('email').classList.add('valid');
      } else {
        document.getElementById('email').classList.add('invalid');
        document.getElementById('email').classList.remove('valid');
      }
    break;
    case "subject": 
      if(expresiones.subject.test(e.target.value)){
        document.getElementById('subject').classList.remove('invalid');
        document.getElementById('subject').classList.add('valid');
      } else {
        document.getElementById('subject').classList.add('invalid');
        document.getElementById('subject').classList.remove('valid');
      }
    break;
    case "message": 
      if(expresiones.message.test(e.target.value)){
        document.getElementById('message').classList.remove('invalid');
        document.getElementById('message').classList.add('valid');
      } else {
        document.getElementById('message').classList.add('invalid');
        document.getElementById('message').classList.remove('valid');
      }
    break;
  }
}

$inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.name && campos.number && campos.email && campos.subject && campos.message ) {
      
    } else {
      $formulario.reset();

      document.getElementById('name').classList.remove('invalid');
      document.getElementById('name').classList.remove('valid');
      document.getElementById('number').classList.remove('invalid');
      document.getElementById('number').classList.remove('valid');
      document.getElementById('email').classList.remove('invalid');
      document.getElementById('email').classList.remove('valid');
      document.getElementById('subject').classList.remove('invalid');
      document.getElementById('subject').classList.remove('valid');
      document.getElementById('message').classList.remove('invalid');
      document.getElementById('message').classList.remove('valid');
      setTimeout(() => {
        btn.value = 'Enviar mensaje';
      }, 3000);
    }
});

/* ANIMACION CONTENIDO DE IMAGEN */
ScrollReveal().reveal(`.contenido-banner`, {delay: 400})
ScrollReveal().reveal(`.contenedor-imagen`, {delay: 2000})


