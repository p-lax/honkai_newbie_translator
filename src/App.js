import React, { Component } from 'react';
import './App.css';
import Translator from './translator.js'
import EquipComponent from './components/equipComponent.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, translated: Translator(event.target.value)});
  }

  makeHtml(data) {
    // 성흔폼
    // 상단

    if(!!!data) return <div />

    return <div>
      <EquipComponent value={data} />
    </div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">키갤 장비성흔 번역기 (Beta)</h1>
        </header>
        <div className="App-intro">
          <textarea className="text-area" value={this.state.value} onChange={this.handleChange} />
          <div className="text-area">
          {
            this.makeHtml(this.state.translated)
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
