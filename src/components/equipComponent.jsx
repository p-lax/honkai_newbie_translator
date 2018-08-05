import React, { Component } from 'react';
import consts from '../data/const';

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

  doSearchResult() {
    this.props.doSearchResult(this.props.prev)
  }

  makeImageTagSmall(urlKey, type, alt) {
    if(urlKey) {
      // return <img src={"./img/"+type+"/" + urlKey + ".png"} alt={alt} />
      return <img style={styles.small} src={consts.imgDomain + "/" + type + "/" + urlKey + ".png"} alt={alt} />
    } else {
      return <span />
    }
  }

  makeImageTag(urlKey, type, alt) {
    if(urlKey) {
      // return <img src={"./img/"+type+"/" + urlKey + ".png"} alt={alt} />
      return <img src={consts.imgDomain + "/" + type + "/" + urlKey + ".png"} alt={alt} />
    } else {
      return <span />
    }
  }

  textDetail(item) {
    let reactKeyIndex = 0;

    let makeBr = (txt) => {
      let res = txt.split(" / ").map((item, key) => {
        return ([<span key={key}>{item}&nbsp;&nbsp;</span>, <br key={key + 'br'}/>]);
      })
      res[res.length - 1][1] = null;

      return res;
    }

    let makeKey = () => "textDetail" + (reactKeyIndex += 1)

    // console.log(item);

    if(item && ((item.s && (item.s[0].oName || item.s[1].oName || item.s[2].oName )  ) || (item.w && item.w.oName))){
      return ([
        <br key={makeKey()} />,
        <span key={makeKey()}>------------------------</span>,
        <br key={makeKey()} />,
        item.w.skill?(
          [
            <font key={makeKey()} color="#888888">액티브: {makeBr(item.w.skill)}</font>,
            " ", <br key={makeKey()} />, <br key={makeKey()} />,
          ]
        ):(null),
        item.w.passive?(
          [
            <font key={makeKey()} color="#888888">무기: {makeBr(item.w.passive)}</font>,
            " ", <br key={makeKey()} />, <br key={makeKey()} />,
          ]
        ):(null),
        item.s[0].texts[0]?(
          [
            <font key={makeKey()} color="#888888">상단: {makeBr(item.s[0].texts[0])}</font>,
            " ", <br key={makeKey()} />, <br key={makeKey()} />,
          ]
        ):(null),
        item.s[1].texts[1]?(
          [
            <font key={makeKey()} color="#888888">중단: {makeBr(item.s[1].texts[1])}</font>,
            " ", <br key={makeKey()} />, <br key={makeKey()} />,
          ]
        ):(null),
        item.s[2].texts[2]?(
          [
            <font key={makeKey()} color="#888888">하단: {makeBr(item.s[2].texts[2])}</font>,
            " ", <br key={makeKey()} />, <br key={makeKey()} />,
          ]
        ):(null),
        item.sSet?(
          item.sSet.length>1?(
            [
              <font key={makeKey()} color="#888888">- {makeBr(item.sSet[0])}</font>,
              " ", <br key={makeKey()} />, <br key={makeKey()} />,
              <font key={makeKey()} color="#888888">- {makeBr(item.sSet[1])}</font>,
              " ", <br key={makeKey()} />, <br key={makeKey()} />,
            ]
          ):(
            [
              <font key={makeKey()} color="#888888">- {makeBr(item.sSet[0])}</font>,
              " ", <br key={makeKey()} />, <br key={makeKey()} />,
            ]
          )
        ):(null)
      ]);
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

    if(this.props.compact) {
      return (
        <p>
          <font size="2">
            {this.makeImageTagSmall(weapon.img, "weapon", weapon.short)}&nbsp;&nbsp;&nbsp;
            {this.makeImageTagSmall(stigma[0].imgs[0], "stigma", stigma[0].short)}
            {this.makeImageTagSmall(stigma[1].imgs[1], "stigma", stigma[1].short)}
            {this.makeImageTagSmall(stigma[2].imgs[2], "stigma", stigma[2].short)}
          </font>
        </p>
      )
    }

    return (
      <p style={styles.container}>
        <font size="2">
          {this.props.prev?<span onClick={this.doSearchResult.bind(this)} style={styles.prev}>돌아가기</span>:null}
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

const styles = {
  container: {
    position: 'relative'
  },
  small: {
    width: 64, height: 56
  },
  prev: {
    position: 'absolute',
    right: 0, color: '#007bff', cursor: 'pointer'
  }
}

export default EquipComponent;
