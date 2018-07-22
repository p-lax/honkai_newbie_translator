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
    this.version = "beta 1.0.2"
  }

  handleChange(event) {
    this.setState({value: event.target.value, translated: Translator(event.target.value)});
  }

  notice() {
    return (<div><font size="2">
      <span>아직 개발중인 버전이므로, 많은 문제가 있을 수 있음.</span><br/><br/>
      <span>- 적용된 내용</span>
      <ul>3성, 4성 성흔 + 단일성흔 일부 (오만, 분노, 나태, 폭식, 겨공) </ul>
      <ul>스타일링 테스트용 무기 (써드, 후부키)</ul>
      <br/>
      <span>- 다음에 적용될 내용</span>
      <ul>3성, 4성 단일성흔 나머지</ul>
      <ul>무기</ul>
      <ul>발키리 이름</ul>
      <br/>
      <span>- 주의점</span>
      <ul>일부 성흔의 1글자짜리 약자는 사용하지 않음. (예: 제레, 이이, 아인슈타인 등)</ul>
      <ul>위 경우 중 예외적으로 가끔 쓰이는 조합은 따로 등록함 (예: 철막이, 막섹아 등)</ul>
      <ul>입력 할 때 같은 성흔을 두가지 약어로 부르면 인식 안됨 (예: 싱막신 등)</ul>
      <br/>
      <span>- 도움받은 곳</span>
      <ul>성흔 데이터베이스 [<a href='http://rosia.tistory.com/141'>http://rosia.tistory.com/141</a>]</ul>
      <ul>뉴비가 뉴비를 위해 쓴 성흔정리 [<a href='http://gall.dcinside.com/mgallery/board/view/?id=kawai3&no=851180'>http://gall.dcinside.com/mgallery/board/view/?id=kawai3&no=851180</a>]</ul>
    </font></div>)
  }

  makeHtml(data) {
    if(!!!data || !!!data.hasItem ){
      return this.notice();
    }
    return (<div><EquipComponent value={data} /></div>);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><i className="main_icon"></i>키갤 장비성흔 번역기</h1>
          <div className="versiontag">{this.version}</div>
        </header>
        <div className="App-intro container">
          <div className="row">
            <div className="col-sm noselect">
              <textarea className="text-area" value={this.state.value} onChange={this.handleChange}
                placeholder="성흔,장비 약자를 입력 (예: 미막미 후붘)" />
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
