import React, { Component } from 'react';
import './App.css';
import Translator from './translator.js'
import EquipComponent from './components/equipComponent.js'
import 'bootstrap/dist/css/bootstrap.css'

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
          <h1 className="App-title"><i className="main_icon"></i>키갤 장비성흔 번역기</h1>
          <div className="versiontag">ver. beta 1.0</div>
        </header>
        <div className="App-intro container">
          <div className="row">
            <div className="col-sm">
              <textarea className="text-area" value={this.state.value} onChange={this.handleChange}
                placeholder="장비 약자를 입력 (예: 미막미 후붘)" />
            </div>
            <div className="col-sm">
              <div className="text-area">
              {
                this.makeHtml(this.state.translated)
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
