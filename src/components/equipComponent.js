import React, { Component } from 'react';

class EquipComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  positionName(index) {
    switch(index){
      case 0:
        return "상단";
      case 1:
        return "중단";
      case 2:
        return "하단";
      case -1:
        return "세트";
      default:
        return "";
    }
  }

  makeImageTag(urlKey, type, alt) {
    if(urlKey) {
      // return <img src={"./img/"+type+"/" + urlKey + ".png"} alt={alt} />
      return <img src={"https://t1.daumcdn.net/cfile/tistory/" + urlKey} alt={alt} />
    } else {
      return <span />
    }
  }

  textDetail(item) {
    let makeBr = (txt) => txt.split(" / ").map((item, key) => {
      return (<span key={key}>{item}<br/>&nbsp;&nbsp;</span>);
    })

    // console.log(item);

    if(item && ((item.s && (item.s[0].oName || item.s[1].oName || item.s[2].oName )  ) || (item.w && item.w.oName))){
      return (
        <span>
          <br/><span>------------------------</span><br/>
          {item.w.skill?(<font color="#888888">액티브: {makeBr(item.w.skill)}</font>):(null)}
          {item.w.skill?(<br/>):(null)}
          {item.w.passive?(<font color="#888888">액티브: {makeBr(item.w.skill)}</font>):(null)}
          {item.w.passive?(<br/>):(null)}
          {item.s[0].texts[0]?(<font color="#888888">상단: {makeBr(item.s[0].texts[0])}</font>):(null)}
          {item.s[0].texts[0]?(<br/>):(null)}
          {item.s[1].texts[1]?(<font color="#888888">중단: {makeBr(item.s[1].texts[1])}</font>):(null)}
          {item.s[1].texts[1]?(<br/>):(null)}
          {item.s[2].texts[2]?(<font color="#888888">하단: {makeBr(item.s[2].texts[2])}</font>):(null)}
          {item.s[2].texts[2]?(<br/>):(null)}
          {
            item.sSet?(
              item.sSet.length>1?(
                <font color="#888888">- {makeBr(item.sSet[0])}<br/>- {makeBr(item.sSet[1])}</font>
              ):(
                <font color="#888888">- {makeBr(item.sSet[0])}</font>
              )
            ):(
              null
            )
          }
          {item.sSet?(<br/>):(null)}
        </span>
      )
    }
  }

  render() {
    let item = this.state.value;
    if(!item) return <div />;

    let weapon = item.w;
    let stigma = item.s;

    let stigmaHeadText = "" + stigma[0].one + stigma[1].one + stigma[2].one;

    if(stigma[0].one && (stigma[0].one === stigma[1].one) && (stigma[1].one === stigma[2].one)){
      stigmaHeadText = "" + stigma[1].oName + " 3셋"
    }

    let weaponText = "";

    if(weapon.oName && weapon.type)
      weaponText = "무기: " + weapon.oName + " ("+ weapon.type + ")"

    let stigmaText = [[stigma[0].oName, "上"], [stigma[1].oName, "中"], [stigma[2].oName, "下"]];
    stigmaText = stigmaText.filter((a)=>!!a[0]).map((a)=>a.join(" ")).join(" / ");

    if(stigmaText)
      stigmaText = "성흔: " + stigmaText;

    let headText = ""
    if(weapon.short || stigmaHeadText)
      headText = "- " + [weapon.short, stigmaHeadText].filter((a)=>!!a).join(" ");

    return (
      <p>
        <font size="2">
          <span>{headText}</span><br/>
          {this.makeImageTag(weapon.img, "weapon", weapon.short)}&nbsp;&nbsp;&nbsp;
          {this.makeImageTag(stigma[0].imgs[0], "stigma", stigma[0].short)}
          {this.makeImageTag(stigma[1].imgs[1], "stigma", stigma[1].short)}
          {this.makeImageTag(stigma[2].imgs[2], "stigma", stigma[2].short)}
          <br />
          <br />
          <span>{weaponText}</span>
          {
            weaponText?(
              <br />
            ):(
              null
            )
          }
          <span>{stigmaText}</span>
          {
            this.textDetail(item)
          }
        </font>
      </p>
    );
  }
}

export default EquipComponent;
