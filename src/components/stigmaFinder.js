import React, { Component } from 'react';
import consts from '../data/const'
import stigmaData from '../data/stigma'

class StigmaFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  hairColorIcon(color, forProp){
    color = consts.hairColor[color];
    return ([
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id={color+"Radio"} value={color} />
        <label style={{...styles.hairColorIcon, backgroundColor: color }} for={color+"Radio"}>&nbsp;</label>
      </div>
    ])
  }

  renderStigmas() {
    let stigmas = Object.keys(stigmaData);
    let i, result=[];

    for(i=0;i<stigmas.length;i+=1){
      let item = stigmaData[stigmas[i]];
      if(item.oName){
        console.log(item.isSingle, item.oName);
        if(item.isSingle){
          result.push(<img src={consts.imgDomain + "/stigma/" + item.imgs[item.singlePos] + ".png"} alt={item.short} />);
        } else {
          result.push(<img src={consts.imgDomain + "/stigma/" + item.imgs[0] + ".png"} alt={item.short} />);
          result.push(<img src={consts.imgDomain + "/stigma/" + item.imgs[1] + ".png"} alt={item.short} />);
          result.push(<img src={consts.imgDomain + "/stigma/" + item.imgs[2] + ".png"} alt={item.short} />);
        }
      }
    }

    if(result.length > 4){
      return (<div className="smallImages">{result}</div>)

    } else {
      return result;
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.main} className="container">
          <div style={styles.top} className="row">
            <h4>성흔 탐색기</h4>
          </div>
          <div className="row">
            <div style={styles.mid} className="col-sm noselect">
              <label>성흔 부위</label>
              <form className="form-group">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="posRadio4" value="option1"/>
                  <label className="form-check-label" for="posRadio4">전체</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="posRadio1" value="option1"/>
                  <label className="form-check-label" for="posRadio1">상</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="posRadio2" value="option2"/>
                  <label className="form-check-label" for="posRadio2">중</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="posRadio3" value="option3"/>
                  <label className="form-check-label" for="posRadio3">하</label>
                </div>
              </form>
              <label>머리색</label>
              <form className="form-group">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="posRadio4" value="option1"/>
                  <label className="form-check-label" for="posRadio4">전체</label>
                </div>
                { this.hairColorIcon("red") }
                { this.hairColorIcon("lightBrown") }
                { this.hairColorIcon("brown") }
                { this.hairColorIcon("lightBlue") }
              </form>
              <div className="form-group">
                <label>안경 유무</label>
                <form className="form-group">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="glassRadio1" value="option1"/>
                    <label className="form-check-label" for="glassRadio1">없음</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="glassRadio2" value="option2"/>
                    <label className="form-check-label" for="glassRadio2">좆경</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="glassRadio3" value="option3"/>
                    <label className="form-check-label" for="glassRadio3">갓경</label>
                  </div>
                </form>
              </div>
            </div>
            <div style={styles.mid} className="col-sm noselect">
              {
                this.renderStigmas()
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100%'
  },
  main: {
    marginTop: 32,
    backgroundColor: 'white',
  },
  clear: {
    clear: 'both'
  },
  hairColorIcon: {
    width: 16,
    height: 16,
    marginBottom: 0
  }
}

export default StigmaFinder;
