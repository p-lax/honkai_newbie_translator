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

  makeImageTag(urlKey, type) {
    if(urlKey) {
      return <img src={"./img/"+type+"/" + urlKey + ".png"} alt={type} />
    } else {      
      return <span />
    }
  }

  textDetail(item) {
    // console.log(item);
    if(item && ((item.s && item.s[0].oName) || (item.w && item.w.oName))){
      return (
        <span>
          <br/><span>------------------------------------------------</span><br/><br/>
          {
            item.w.skill?(
              <span>액티브: {item.w.skill}<br/><br/></span>
            ):(
              null
            )
          }
          {
            item.w.passive?(
              <span>- {item.w.passive}<br/><br/></span>
            ):(
              null
            )
          }
          {
            item.s[0].texts[0]?(
              <span>- {item.s[0].texts[0]}<br/></span>
            ):(
              null
            )
          }
          {
            item.s[1].texts[1]?(
              <span>- {item.s[1].texts[1]}<br/></span>
            ):(
              null
            )
          }
          {
            item.s[2].texts[2]?(
              <span>- {item.s[2].texts[2]}<br/></span>
            ):(
              null
            )
          }
          {
            item.sSet?(
              item.sSet.length>1?(
                <span><br/>- {item.sSet[0]}<br/>- {item.sSet[1]}<br/></span>
              ):(
                <span><br/>- {item.sSet[0]}<br/></span>
              )
            ):(
              null
            )
          }
        </span>
      )
    }
  }

  render() {
    var item = this.state.value;
    if(!item) return <div />;

    var weapon = item.w;
    var stigma = item.s;

    var stigmaHeadText = "" + stigma[0].one + stigma[1].one + stigma[2].one;
    var weaponText = "";

    if(weapon.oName && weapon.type)
      weaponText = "무기: " + weapon.oName + " ("+ weapon.type + ")"

    var stigmaText = [[stigma[0].oName, "上"], [stigma[1].oName, "中"], [stigma[2].oName, "下"]];
    stigmaText = stigmaText.filter((a)=>!!a[0]).map((a)=>a.join(" ")).join(" / ");

    if(stigmaText)
      stigmaText = "성흔: " + stigmaText;

    var headText = ""
    if(weapon.short || stigmaHeadText)
      headText = "- " + [weapon.short, stigmaHeadText].filter((a)=>!!a).join(" ");

    return (
      <p>
        <font size="3">
          <span>{headText}</span><br/>
          {this.makeImageTag(weapon.img, "weapon")}&nbsp;&nbsp;&nbsp;
          {this.makeImageTag(stigma[0].imgs[0], "stigma")}
          {this.makeImageTag(stigma[1].imgs[1], "stigma")}
          {this.makeImageTag(stigma[2].imgs[2], "stigma")}
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
