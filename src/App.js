import React, { Component } from 'react';
import './App.css';
import Translator from './translator.js'
import EquipComponent from './components/equipComponent.jsx'
import CharaComponent from './components/charaComponent.jsx'

import consts from './data/const';

import StigmaFinder from './components/stigmaFinder'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor(props) {
    let value = ''
    super(props)
    this.state = {value: value, translated: Translator(value)}
    this.handleChange = this.handleChange.bind(this)
    this.version = consts.version
  }

  handleChange(event) {
    this.setState({
      value: event.target.value, translated: Translator(event.target.value),
      prev: null
    });
  }

  openModal(target) {
    this.setState({
      modal: true
    })
  }

  doSearchResult(target, canPrev) {
    if(target){
      if(canPrev){
        this.setState({
          value: target, translated: Translator(target),
          prev: "" + this.state.value,
          modal: false
        })
      } else {
        this.setState({
          value: target, translated: Translator(target),
          prev: null, modal: false
        })
      }
    } else {
      this.setState({
        modal: false
      })

    }
  }

  notice() {
    return (<div><font size="2">
      <span>아직 개발중인 버전이므로, 많은 문제가 있을 수 있음.</span><br/><br/>
      <span>- 적용된 내용</span>
      <ul>3성, 4성 성흔</ul>
      <ul>무기 (잘 안쓰는건 제외)</ul>
      <ul>성흔 찾기 (테스트중)</ul>
      <ul>발키리 데이터 (테스트중, 키아나, 카렌, 브로냐, 테레사만 적용)</ul>
      <br/>
      <span>- 다음에 적용될 내용</span>
      <ul>발키리</ul>
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
    if(data.t === "equip"){
      return (<div><EquipComponent value={data} prev={this.state.prev} doSearchResult={this.doSearchResult.bind(this)} /></div>);
    } else if(data.t === "chara"){
      return (<div style={{position: 'relative'}}><CharaComponent doSearchResult={this.doSearchResult.bind(this)} value={data} /></div>);
    }
  }

  render() {
    return (
      [
      <div className="App" key={"mainApp"}>
        <header className="App-header">
          <h1 className="App-title"><i className="main_icon"></i>키갤 장비성흔 번역기</h1>
          <div className="versiontag">{this.version}</div>
        </header>
        <div className="App-intro container">
          <div className="row">
            <div className="col-lg noselect text-right" style={{paddingBottom: 3}}>
              <textarea style={styles.textArea} className="text-area" value={this.state.value} onChange={this.handleChange}
                placeholder="성흔,장비 약자를 입력 (예: 미막미 후붘)" />
              <a style={styles.searchOpenButton} href="javascript:void(0)" onClick={this.openModal.bind(this, 'search')}>◎ 찾는 성흔이름을 모른다면</a>
            </div>
            <div className="col-lg">
              <div className="text-area">
              {
                this.makeHtml(this.state.translated)
              }
              </div>
            </div>
          </div>
        </div>
      </div>,
      this.state.modal? <StigmaFinder visible={true} key={"mainFinder"} doSearchResult={this.doSearchResult.bind(this)}  /> : null,
      this.state.modal? <div key="curtain" onClick={this.closeModals} style={styles.curtain} /> : null,
      ]
    );
  }
}

const styles = {
  curtain: {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.3)',
    left: 0, top: 0, bottom: 0, right: 0,
    zIndex: 9998
  },
  textArea: {
    marginBottom: 0
  },
  searchOpenButton: {
    fontSize: 14,
    paddingBottom: 10
  }
}

export default App;
