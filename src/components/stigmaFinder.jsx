import React, { Component } from 'react';
import consts from '../data/const'
import stigmaData from '../data/stigma'

class StigmaFinder extends Component {
  constructor(props) {
    super(props)

    this.state = {stigmaPosition: 'all', stigmaHairColor: 'all'}

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    console.log(node)
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    console.log("??", this.wrapperRef, this)
    if(this.wrapperRef && !this.wrapperRef.contains(event.target))
      this.searchResult(null)
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  handlePositionOptionChange(changeEvent) {
    this.setState({
      stigmaPosition: changeEvent.target.value,
    });
  }

  handleColorOptionChange(changeEvent) {
    this.setState({
      stigmaHairColor: changeEvent.target.value,
    });
  }

  searchResult(target) {
    console.log("?")
    this.props.doSearchResult(target)
  }

  hairColorIcon(color, forProp){
    let colorCode = consts.hairColor[color];
    return ([
      <div className="form-check form-check-inline" key={"hairColorIcon-" + color}>
        <input className="form-check-input" type="radio" value={color}
         checked={this.state.stigmaHairColor === color}
         onChange={this.handleColorOptionChange.bind(this)} id={color+"Radio"}/>
        <label style={{...styles.hairColorIcon, backgroundColor: colorCode }} htmlFor={color+"Radio"}>&nbsp;</label>
      </div>
    ])
  }

  renderStigmas() {
    let stigmas = Object.keys(stigmaData)
    let i, result=[]

    let nowColor = this.state.stigmaHairColor
    let nowPos = this.state.stigmaPosition

    let makeStigmaItem = (item, pos, color) => {
      if(nowPos === "all" || nowPos === pos) {
        result.push( <a href="javascript:void(0)"
          key={"stigmaFinder-" + i + "-" + pos}
          onClick={this.searchResult.bind(this, "" + item.short)} >
          <img src={consts.imgDomain + "/stigma/" + item.imgs[pos] + ".png"} alt={item.short} /></a>);
      }
    }

    for(i=0;i < stigmas.length; i+=1 ){
      let item = stigmaData[stigmas[i]];
      if(item.oName){
        if(item.isSingle){
          // 단일성흔
          if(!item.hairColor){
          } else {
            if(item.hairColor.indexOf(nowColor) >= 0)
              makeStigmaItem(item, "" + item.singlePos);
          }
          continue
        } else {
          if(item.isHairColorDiff){
            // 머리색 부위마다 다른성흔
            if(item.hairColor) {
              if(item.hairColor[0].indexOf(nowColor) >= 0)
                makeStigmaItem(item, "0")
              if(item.hairColor[1].indexOf(nowColor) >= 0)
                makeStigmaItem(item, "1")
              if(item.hairColor[2].indexOf(nowColor) >= 0)
                makeStigmaItem(item, "2")

              continue
             } else {
              continue
            }
          } else {
            // 일반 성흔
            if(!item.hairColor){
              continue;
            } else {
              if(nowColor === 'all') {
                // continue
              } else if(item.hairColor.indexOf(nowColor) >= 0) {
              } else {
                continue
              }
            }

            // makeStigmaItem(item, 0)
            // makeStigmaItem(item, 1)
            // makeStigmaItem(item, 2)
          }

          makeStigmaItem(item, "0")
          makeStigmaItem(item, "1")
          makeStigmaItem(item, "2")
        }
      }
    }

    if(result.length > 4){
      return (<div className="smallImages">{result}</div>);
    } else {
      return result;
    }
  }

  render() {
    return (
      <div key="stigmaFinder" style={styles.container} className="stigmaFinder">
        <div style={styles.main} className="container" ref={this.setWrapperRef}>
          <div className="row">
            <div className="col-sm-4 noselect midLeftContainer">
              <div style={styles.midLeft} className="midLeft">
                <label>성흔 부위</label>
                <form className="form-group">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="all"
                     checked={"all" === this.state.stigmaPosition}
                     onChange={this.handlePositionOptionChange.bind(this)} id="posRadio4"/>
                    <label className="form-check-label" htmlFor="posRadio4">전체</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="0"
                     checked={"0" === this.state.stigmaPosition}
                     onChange={this.handlePositionOptionChange.bind(this)} id="posRadio1"/>
                    <label className="form-check-label" htmlFor="posRadio1">상</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="1"
                     checked={"1" === this.state.stigmaPosition}
                     onChange={this.handlePositionOptionChange.bind(this)} id="posRadio2"/>
                    <label className="form-check-label" htmlFor="posRadio2">중</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="2"
                     checked={"2" === this.state.stigmaPosition}
                     onChange={this.handlePositionOptionChange.bind(this)} id="posRadio1"/>
                    <label className="form-check-label" htmlFor="posRadio3">하</label>
                  </div>
                </form>
                <label>머리색</label>
                <form className="form-group">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="all"
                     checked={this.state.stigmaHairColor === "all"}
                     onChange={this.handleColorOptionChange.bind(this)} id="hairRadioAll"/>
                    <label className="form-check-label" htmlFor="hairRadioAll">전체</label>
                  </div>
                  <br/>
                  { this.hairColorIcon("yellow") }
                  { this.hairColorIcon("gold") }
                  { this.hairColorIcon("pink") }
                  { this.hairColorIcon("lightBrown") }
                  { this.hairColorIcon("brown") }
                  <br/>
                  { this.hairColorIcon("red") }
                  { this.hairColorIcon("lightBlue") }
                  { this.hairColorIcon("purple") }
                  { this.hairColorIcon("cyan") }
                  { this.hairColorIcon("green") }
                  <br/>
                  { this.hairColorIcon("white") }
                  { this.hairColorIcon("olive") }
                  { this.hairColorIcon("grey") }
                  { this.hairColorIcon("black") }
                  { this.hairColorIcon("lightPurple") }
                </form>
              </div>
            </div>
            <div style={styles.mid} className="col-sm-8 noselect text-center">
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
  title: {
    margin: '20px 0'
  },
  container: {
    position: 'absolute',
    top: 32,
    left: 16,
    right: 16,
    minHeight: '100%',
    zIndex: 9999,
  },
  main: {
    backgroundColor: 'white',
    padding: 10,
  },
  midLeft: {
  },
  clear: {
    clear: 'both'
  },
  hairColorIcon: {
    width: 16,
    height: 16,
    border: '1px solid black',
    marginBottom: 0,
  },
}

export default StigmaFinder;
