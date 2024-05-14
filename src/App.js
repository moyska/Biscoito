import react,{component} from 'react';
import './stillo.css';

import biscoito from './assets/biscoito.png';

class App extends component{

  constructor (props){
    super(props);
    this.state = {
      textofrase: 'aq'
    };
    this.quebrarbiscoito - this.quebrarbiscoito.bind(this);

    this.frases = ['siga os bons e aprenda com eles','o bom senso vale mais do que muito conhecimento', 'o riso e a menor distancia entre duas pessoas','deixe de lado as preocupaçoes e seja feliz','realize o obvio, pense no improvavel e conquiste o impossivel','pense em milagres mas nao dependa deles','a maior barreira para o sucesso e o medo do fracasso'];
  }
  quebrarbiscoito(){
    let state = this.state;
    let nuemroaleatorio = math.floor(math.random() * this.frases.length);
    state.textofrases = this.frases(nuemroaleatorio);
    this.setState(state);
  }
}