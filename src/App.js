import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea  = function(evento){
    setLinea1(evento.target.value)
    
  }

  const onChangeLinea2  = function(evento){
    setLinea2(evento.target.value)
    
  }

  const onChangeImagen  = function(evento){
    setImagen(evento.target.value)
    
  }

  const onClickBoton  = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img
      link.click();
  });   
  }


  return (
    <div className="App">
      
      
      <select onChange={onChangeImagen}>
        <option value="friki">El friki</option>
        <option value="jerry">Jerry</option>
        <option value="pikachu">Pikachu</option>
        <option value="brutal">Brutaaaaal</option>
        <option value="awanta">awanta</option>
        <option value="barney">barney</option>
        <option value="medico">medico</option>
        <option value="puerco">Asi te queria agarrar</option>
        <option value="ratchet">Super HD</option>
        <option value="sireno">Sireno man</option>
      </select> <br />

      
      <input onChange={onChangeLinea} type="text" placeholder='linea 1'/><br />

      <input onChange={onChangeLinea2} type="text" placeholder='linea 2'/><br />

      <br></br>
      <button onClick={onClickBoton}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>
      
    </div>
  );
}

export default App;
