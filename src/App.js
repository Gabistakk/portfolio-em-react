import eu from './eu.png'
import estrelas from './estrelas.gif'
import fotogatos from './theoaruna.png'
import aruna from './aruna.png'
import './App.css';
import { useEffect, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import Typewriter from "typewriter-effect";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



var animationIsActive;
var popupIsActive;

function changeid() {
  let firstid = "titulo";
  let secondid = "tituloAnimation";
  if (animationIsActive == true) {
    document.getElementById(secondid).id = firstid;
    animationIsActive = false;
  }
  else {
    document.getElementById(firstid).id = secondid;
    animationIsActive = true;
  }
}

const animacao = () => {
  changeid()
}

const popup = () => {
  showPopUp()
}

function showPopUp() {
  if (popupIsActive == true){
    document.getElementById('pop-up').style.visibility = 'hidden';
    popupIsActive = false;
  }
  else{
    document.getElementById('standard-basic1').value = '';
    document.getElementById('outlined-multiline-static').value = '';
    document.getElementById('pop-up').style.visibility = 'visible';
    popupIsActive = true;
  }
}


function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      
      <header className="App-header">
        <div id='pop-up'>
          <div id='contato-titulo'>
            Formulário de Contato
          </div>
          <div id='contato-subtitulo'>
            Preencha os campos.
          </div>
          <div id='form'>
            <TextField required id="standard-basic" label="Nome / Empresa" variant="standard" />
            <TextField id="standard-basic1" label="Assunto" variant="standard" />
            <TextField
          id="outlined-multiline-static"
          label="Conteúdo"
          multiline
          rows={6}
          ></TextField>
          <Button variant="contained" endIcon={<SendIcon />} size='large' onClick={popup}>
            Enviar
          </Button>
          </div>
        </div>
        <div id='cabecario'>
          <div class="btn">
            <a href="https://github.com/Gabistakk" target={'__blank'}><span>Meu GitHub</span></a>
          </div>
          <div class="btn">
            <a href="https://chatwith.io/s/contato-gabriel-emerenciano" target={'__blank'}><span>Contato Whatsapp<br></br>(19) 99711-1612</span></a>
          </div>
          <div class="btn">
            <a href="" target={'__blank'}><span>Meu Linkedin</span></a>
          </div>
          <div class="btn">
            <a href="#" onClick={popup}><span>Formulário de Contato</span></a>
          </div>
        </div>
        <div className='container'>
          <div id='titulo'>
            <div id='tituloPrincipal'>
              Gabriel Emerenciano
            </div>
            <div id='subtitulo'>
              <div onClick={animacao}>
                <CodeIcon
                  sx={{ fontSize: 45 }}>
                </CodeIcon>
              </div>
              <div id='desenvolvedor'>Desenvolvedor</div>
              <div id='typical'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full Stack Web 👨‍💻").start()
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Android Java 📱").start()
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Python Scripts 🐍").start()
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Web Hacking Student 🔎").start()
                      .pauseFor(2000)
                      .deleteAll()
                  }}
                />
              </div>

            </div>
            <div id='texto'>
              Olá, meu nome é <div id='fotoMinha'>Gabriel Emerenciano</div>, sou programador/developer Full Stack, porém minha paixão é o backend.<br></br>
              No meu tempo livre gosto de jogar video game, jogos de tabuleiro e documentarios.<br></br>
              tenho <div id='gatos'>2 gatos</div> e meu sonho é morar no exterior.
            </div>
          </div>
          <div id='fotodiv'>
            <img src={eu} alt='teste' id='foto' />
            <div id='bars'>
              <div class='skill'>
              <div class='skill-name'>
                Python
                <div class='skill-bar'>
                  <div class='skill-per' per='90%' style={{ maxWidth: '90%' }}>
                  </div>
                </div>
              </div>
            </div>
            <div class='skill'>
              <div class='skill-name'>
                Web (HTML + CSS)
                <div class='skill-bar'>
                  <div class='skill-per' per='65%' style={{ maxWidth: '65%' }}>
                  </div>
                </div>
              </div>
            </div>
            <div class='skill'>
              <div class='skill-name'>
                JavaScript
                <div class='skill-bar'>
                  <div class='skill-per' per='75%' style={{ maxWidth: '75%' }}>
                  </div>
                </div>
              </div>
            </div>
            <div class='skill'>
              <div class='skill-name'>
                Java Android
                <div class='skill-bar'>
                  <div class='skill-per' per='40%' style={{ maxWidth: '40%' }}>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
