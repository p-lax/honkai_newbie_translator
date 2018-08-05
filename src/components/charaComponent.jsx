import React, { Component } from 'react';
import consts from '../data/const';
import EquipComponent from './equipComponent'
import Translator from '../translator.js'

const makeImageUrl = (urlKey) => {
  return consts.imgDomain + "chara/" + urlKey + ".png"
}

const makeImageUrlCss = (urlKey) => {
  return "url(" + makeImageUrl(urlKey) + ")"
}

class CharaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  onClickEquipCompact(item) {
    this.props.doSearchResult(item, true)
  }

  makeTypeIconTag(target) {
    switch(target){
      case '생물':
        return this.makeImageIcon("type_0", [26, 26]);
      case '이능':
        return this.makeImageIcon("type_1", [26, 26]);
      case '기계':
        return this.makeImageIcon("type_2", [26, 26]);
      default:
        return null;
    }
  }

  makeRankIconTag(target) {
    switch(target){
      case 'S':
        return this.makeImageIcon("Star_Avatar_3", [30, 26]);
      case 'A':
        return this.makeImageIcon("Star_Avatar_2", [30, 26]);
      case 'B':
        return this.makeImageIcon("Star_Avatar_1", [30, 26]);
      default:
        return null;
    }
  }

  makeSkillIcon(target) {
    return <div style={{...styles.skillIcon, backgroundImage: makeImageUrlCss(target) }} />
  }

  makeImageIcon(urlKey, size) {
    if(urlKey) {
      return <i style={{...styles.icon, width: size[0], height: size[1],
        backgroundImage: makeImageUrlCss(urlKey)}} />
    } else {
      return <span />
    }
  }


  makeImageTag(urlKey, alt) {
    if(urlKey) {
      return <img src={consts.imgDomain + "/chara/" + urlKey + ".png"} alt={alt} />
    } else {
      return <span />
    }
  }

  render() {
    let item = this.state.value;
    if(!item) return <div />;

    let i, k, data = item.c
    let equips = [], skills = []

    let makeBr = (txt) => {
      let res = txt.split(" / ").map((item, key) => {
        return ([<span key={key}>{item}&nbsp;&nbsp;</span>, <br key={key + 'br'}/>]);
      })
      res[res.length - 1][1] = null;

      return res;
    }


    for(i in data.equip) {
      let set = data.equip[i]
      equips.push([
        <p style={styles.charaEquipName} key={"charaEquipName-" + i}>{set[0]}</p>,
        <div onClick={this.onClickEquipCompact.bind(this, set[1])} key={"charaEquip-" +  i}>
          <EquipComponent value={Translator(set[1])} compact={true} />
        </div>,
        <br key={"charaEqupBr-" + i}/>
      ])
    }

    for(i in data.skill) {
      let set = data.skill[i]
      let row = [], sub

      row.push(
        <div className="row" style={styles.row} key={"skillRow-" + i}>
          <div className="col-4" style={styles.skillHeadCont}>
            <div style={styles.skillHead}>
              {this.makeSkillIcon(set.icon)}
              <span style={styles.skillHeadText}><b>{set.name}</b><br/><small>{set.tag}</small></span>
            </div>
          </div>
          <div className="col-8" style={styles.skillText}>
            {makeBr(set.desc)}
          </div>
        </div>
      )

      for(sub in set.sub){
        let subset = set.sub[sub]
        let subtext = []
        if(subset.rank) { subtext.push(`${subset.rank}랭개방`) }
        if(subset.link) { subtext.push("링크스킬") }

        row.push(
          <div className="row" style={styles.row} key={"skillSubRow-" + i + "-" + sub}>
            <div className="col-4" style={styles.skillSubHeadCont}>
              <div style={styles.skillHead}>
                {this.makeSkillIcon(subset.icon)}
                <span style={styles.skillHeadText}>
                  <b>{subset.name}</b>
                  {subtext.length>=1?<span><br/><small>({subtext.join(", ")})</small></span>:null}
                </span>
              </div>
            </div>
            <div className="col-8" style={styles.skillText}>
              {makeBr(subset.text)}
            </div>
          </div>
        )

      }

      row.push(<hr key={"skillLastBr-" + i} style={styles.br5} />)

      skills.push(row)
      // equips.push([<p style={styles.charaEquipName} key={"charaEquipName-" + i}>{set[0]}</p>,<EquipComponent value={Translator(set[1])} compact={true} key={"charaEquip-" +  i} />, <br key={"charaEqupBr-" + i}/>])
    }

    return (
      [
        <div className="charaBackImage" key="charaComponentBimg"
          style={{...styles.charaBackImage, backgroundImage: "url("+makeImageUrl(data.bimg)+")" }} />,
        <div style={{...styles.charaContainer}} key="charaComponentContainer">
          <span style={styles.charaName}>{data.oName}</span><br/>
          <div className="charaContainerImageSpace" />
          <span style={styles.charaProp}>{this.makeTypeIconTag(data.type)} {this.makeRankIconTag(data.rank)}</span>
          <hr className="charaHr" />
          <span style={styles.midHeader}><b>장비예시</b></span><br/><br/>
          { equips }
          <hr className="charaHr" />
          <span style={styles.midHeader}><b>스킬</b></span><br/><br/>
          <div className="container">
            {skills}
          </div>
        </div>,
      ]
    )
  }
}

const styles = {
  icon: {
    display: 'inline-block',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  br5: {
    margin: 0,
    marginTop: -1,
    marginLeft: '35.5%'
  },
  charaName: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#444444',
  },
  skillIcon: {
    borderRadius: 16,
    height: 32, width: 32,
    backgroundColor: '#1a84b0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  midHeader: {
    fontWeight: '400',
    // fontSize: 14,
  },
  row: {
    marginBottom: 1,
  },
  skillHeadCont: {
    paddingLeft: 10, paddingRight: 10,
    paddingTop: 5, paddingBottom: 5,
    backgroundColor: '#aec6cf'
  },
  skillSubHeadCont: {
    paddingLeft: 10, paddingRight: 10,
    paddingTop: 5, paddingBottom: 5,
    backgroundColor: '#dddddd'
  },
  skillHeadText: {
    display: 'table-cell',
    verticalAlign: 'middle',
    height: 32,
    textAlign: 'center',
  },
  skillHead: {
    position: 'relative',
    display: 'table',
    width: '100%',
    minHeight: 32,
    paddingLeft: 35,
  },
  skillText: {
    paddingTop: 5, paddingBottom: 5,
  },
  charaProp: {
    position: 'absolute',
    top: 265,
    right: 0,
  },
  charaEquipName: {
    marginBottom: 5,
    // fontWeight: 'bold',
    color: '#666666'
  },
  charaContainer: {
    position: 'relative',
    minHeight: 260,
    fontSize: 12,
  },
  charaBackImage: {
    position: 'absolute',
    width: 148,
    height: 260,
    fontSize: 12,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
  }
}

export default CharaComponent;
