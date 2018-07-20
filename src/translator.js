import dataStigma from "./data/stigma.js"
import dataWeapon from "./data/weapon.js"

const Translator = (text) => {
  let stigmaTokenList = [].concat(Object.keys(dataStigma.token));
  let stigmaTokenLen = stigmaTokenList.length;
  let stigmaTokenResult = [];

  let positionTokenResult = [];
  let positionTokenIndex = 0;

  let weaponTokenList = [].concat(Object.keys(dataWeapon.token));
  let weaponTokenLen = weaponTokenList.length;
  let weaponTokenResult = [];
  let weaponFirst = [9999, null];

  for(var i=0;i<stigmaTokenLen;i++){
    stigmaTokenResult[i] = text.indexOf(stigmaTokenList[i]);
  }

  var clearNotIndexedToken = (a) => a[0] !== -1

  positionTokenResult = [
    [text.indexOf("상"), "상"], [text.indexOf("중"), "중"], [text.indexOf("하"), "하"], 
    [text.indexOf("2"), 2], [text.indexOf("3"), 3]
  ].filter(clearNotIndexedToken).sort()

  var checkDuplicate = {};

  stigmaTokenResult = stigmaTokenResult.map(
      (a, k)=>{
        if(checkDuplicate[a]){
          return [-1, 0];
        } else {
          checkDuplicate[a] = true;
          return [a, k];
        }
      }
    ).filter(clearNotIndexedToken);

  for(i=0;i<stigmaTokenResult.length;i++){
    var key = stigmaTokenList[stigmaTokenResult[i][1]];
    var tokenResultRe = text.indexOf(key, stigmaTokenResult[i][0]+1);
    while(tokenResultRe >= 0){
      stigmaTokenResult.push([tokenResultRe, stigmaTokenResult[i][1]]);
      tokenResultRe = text.indexOf(key, tokenResultRe+1);
    }
  }

  stigmaTokenResult.sort((a, b) => a[0] - b[0]  );

  for(i=0;i<weaponTokenLen;i++){
    weaponTokenResult[i] = text.indexOf(weaponTokenList[i]);
    if(weaponTokenResult[i] === -1) continue;
    if(weaponFirst[0] > weaponTokenResult[i])
      weaponFirst = [weaponTokenResult[i], dataWeapon.token[weaponTokenList[i]]]
  }

  var result = {
    w: dataWeapon["null"],
    s: [
      dataStigma["null"], dataStigma["null"], dataStigma["null"]
    ]
  };

  if(weaponFirst[1]){
    result.w = dataWeapon[weaponFirst[1]];
  }

  let checkSet = {};
  let stigmaResultObject = { specific: [] , ready: [] };

  let setReadyStigma = (index) => {
    if(stigmaTokenResult[index]){
      let now = stigmaTokenResult[index][1];
      let nowPos = stigmaTokenResult[index][0];
      let next = stigmaTokenResult[index+1]? stigmaTokenResult[index+1][0] : null;
      let nowPositionToken;

      let isPositionTokenValid = () => {
        nowPositionToken = positionTokenResult[positionTokenIndex];
        return nowPositionToken && (next > nowPositionToken[0] || !next)    
      }

      let setSpecificStigma = (prev) => {
        nowPositionToken = positionTokenResult[positionTokenIndex];
        // console.log(nowPositionToken, dataStigma[dataStigma.token[stigmaTokenList[now]]]);

        console.log(JSON.stringify([nowPos, next, nowPositionToken, prev]));

        if (prev === -1 && nowPos < nowPositionToken[0]) return
        if (prev === 1 && nowPos > nowPositionToken[0]) return

        prev = nowPositionToken[0] < nowPos ? -1 : 1;

        if(isPositionTokenValid()){
          // 부위토큰 존재
          switch (nowPositionToken[1]) {
            case 2:
              stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
              stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
              positionTokenIndex += 1;
              return;
            case 3:
              stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
              stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
              stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
              positionTokenIndex += 1;
              return;

            case "상":
              positionTokenIndex += 1;
              if(stigmaResultObject.specific[0]) return
              stigmaResultObject.specific[0] = dataStigma[dataStigma.token[stigmaTokenList[now]]];
              if(isPositionTokenValid()){ setSpecificStigma(prev); }
              return;
            case "중":
              positionTokenIndex += 1;
              if(stigmaResultObject.specific[1]) return
              stigmaResultObject.specific[1] = dataStigma[dataStigma.token[stigmaTokenList[now]]];

              if(isPositionTokenValid()){ setSpecificStigma(prev); }
              return;
            case "하":
              positionTokenIndex += 1;
              if(stigmaResultObject.specific[2]) return
              stigmaResultObject.specific[2] = dataStigma[dataStigma.token[stigmaTokenList[now]]];
              if(isPositionTokenValid()){ setSpecificStigma(prev); }
              return;
            default:
          }
        }
      }

      if(isPositionTokenValid()){
        // 부위토큰 존재
        setSpecificStigma();
      } else {
        // 부위토큰 미존재 (채워넣는 토큰)
        stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);        
      }
    }
  }

  setReadyStigma(0);
  setReadyStigma(1);
  setReadyStigma(2);

  if(stigmaResultObject.ready.length === 1 && stigmaResultObject.specific.length === 0) {
    // 단일 성흔
    result.s[0] = stigmaResultObject.ready[0];
    result.s[1] = stigmaResultObject.ready[0];
    result.s[2] = stigmaResultObject.ready[0];
    checkSet[result.s[0].short] = 3;
  } else {
    if(stigmaResultObject.specific[0]) result.s[0] = stigmaResultObject.specific[0];
    if(stigmaResultObject.specific[1]) result.s[1] = stigmaResultObject.specific[1];
    if(stigmaResultObject.specific[2]) result.s[2] = stigmaResultObject.specific[2];

    if(!result.s[0].oName && stigmaResultObject.ready[0]) result.s[0] = stigmaResultObject.ready.splice(0, 1)[0];
    if(!result.s[1].oName && stigmaResultObject.ready[0]) result.s[1] = stigmaResultObject.ready.splice(0, 1)[0];
    if(!result.s[2].oName && stigmaResultObject.ready[0]) result.s[2] = stigmaResultObject.ready.splice(0, 1)[0];

    checkSet[result.s[0].short] = checkSet[result.s[0].short]?checkSet[result.s[0].short]+1:1;
    checkSet[result.s[1].short] = checkSet[result.s[1].short]?checkSet[result.s[1].short]+1:1;
    checkSet[result.s[2].short] = checkSet[result.s[2].short]?checkSet[result.s[2].short]+1:1;

    console.log(checkSet);

    delete checkSet.null;
  }

  var len = Object.keys(checkSet).length;
  for(i=0;i<len;i++){
    var x = Object.keys(checkSet)[i];
    if(checkSet[x] >= 3 && dataStigma[x]){
      result.sSet = [
        dataStigma[x].oName + " 2세트 : " + dataStigma[x].setTexts[0],
        dataStigma[x].oName + " 3세트 : " + dataStigma[x].setTexts[1]
      ]
    } else if(checkSet[x] >= 2 && dataStigma[x]){
      result.sSet = [
        dataStigma[x].oName + " 2세트 : " + dataStigma[x].setTexts[0]
      ];
    }
  }

  // console.log(stigmaTokenResult, weaponTokenResult, weaponFirst, result.w);

  // {
  //   // w: dataWeapon["써드"],
  //   // s: [
  //   //   dataStigma["미켈"],
  //   //   dataStigma["막스"],
  //   //   dataStigma["미켈"]
  //   // ]
  //   w: dataWeapon["후부키"],
  //   s: [
  //     dataStigma["시린"],
  //     dataStigma["막스"],
  //     dataStigma["시린"]
  //   ]
  // }

  return result
}

export default Translator;
