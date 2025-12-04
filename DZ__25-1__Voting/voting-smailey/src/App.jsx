import { useState, Component } from 'react'
import './App.css'
import Smile from './components/SmileComponent'
import Results from './components/Results'
import RemoveLocalStorage from './components/RemoveLocalStorage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smiles: [
        { id: "😃", count: 0 },
        { id: "😊", count: 0 },
        { id: "😎", count: 0 },
        { id: "🤩", count: 0 },
        { id: "😍", count: 0 },
      ],
      smileResult: { id: "", count: 0 },
      showRemoveLocalStorage: true,
    };
    this.changeSmile = this.changeSmile.bind(this)
    this.showResultsClick = this.showResultsClick.bind(this)
    this.clearResultsClick = this.clearResultsClick.bind(this)
    this.removeLocalStorage = this.removeLocalStorage.bind(this);
  }

  render() {
    // в рендере нельзя изменять setState
    return (
      <>
        <h1>Голосування за найкращий смайлик</h1>
        <div className="smileys">
          {this.state.smiles.map((smile, index) => {
            return <Smile changeSmile={this.changeSmile} id={smile.id} count={smile.count} key={index}
            />
          })}
        </div>
        <div className="btn-centr">
          <button onClick={this.showResultsClick} className="btn">Show Results</button>
          {this.state.smileResult.id && (<Results result={this.state.smileResult} />)}

          {this.state.smileResult.id && (<button onClick={this.clearResultsClick} className="btn">Clear Results</button>)}
          <button onClick={this.removeLocalStorage} className="btn">Remove LocalStorage</button>
        </div>
        {this.state.showRemoveLocalStorage && (<RemoveLocalStorage />)}
      </>
    )
  }

  componentDidMount() {
    console.log('Component is mounted');
    try {
      const saved = JSON.parse(localStorage.getItem('smiles'));
      if (Array.isArray(saved) && saved.length) {
        this.setState({ smiles: saved }, () => {
          console.log('Smiles restored:', this.state.smiles);
        });
      } else {
        console.log('No saved smiles or empty array — using initial state');
      }
    } catch (e) {
      console.error('Error parsing saved smiles from localStorage:', e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component was updated');
    if (prevState.smiles !== this.state.smiles) {
      localStorage.setItem('smiles', JSON.stringify(this.state.smiles));
    }
  }

  removeLocalStorage() {
    this.setState(prev => ({ showRemoveLocalStorage: !prev.showRemoveLocalStorage }));
  }

  changeSmile = (id) => {
    this.setState(prevState => ({
      smiles: prevState.smiles.map(smile =>
        smile.id === id
          ? { ...smile, count: smile.count + 1 }
          : smile
      )
    }));
  };

  showResultsClick = () => {
    const { smiles } = this.state;
    // 1. Находим максимальный count
    const maxCount = Math.max(...smiles.map(s => s.count));
    // 2. Находим всех кандидатов с этим count
    const bestCandidates = smiles.filter(s => s.count === maxCount);
    // 3. Если кандидатов больше одного — значит есть одинаковые счётчики
    if (bestCandidates.length > 1) {
      this.setState({ smileResult: { id: "", count: 0 } }, () => {
        console.log("Нельзя выбрать победителя — одинаковые count");
      });
      return;
    }
    // 4. Если уникальный победитель — записываем его
    this.setState({ smileResult: bestCandidates[0] }, () => {
      console.log("Лучший смайл:", this.state.smileResult);
    });
  };

  clearResultsClick = () => {
    this.setState(prevState => ({
      smiles: prevState.smiles.map(smile => ({
        ...smile,
        count: 0
      })),
      smileResult: { id: "", count: 0 }
    }));
  };
}

export default App
