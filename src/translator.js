import dataStigma from "./data/stigma.js"
import dataWeapon from "./data/weapon.js"
import dataChara from "./data/chara"

window.dataWeapon = dataWeapon;

const weaponTokenList = [].concat(Object.keys(dataWeapon.token));
const weaponTokenLen = weaponTokenList.length;

const charaTokenList = [].concat(Object.keys(dataChara.token));
const charaTokenLen = charaTokenList.length;

const Translator = (text) => {
  let stigmaExceptionList = [].concat(Object.keys(dataStigma.exception));
  let stigmaExceptionLen = stigmaExceptionList.length;
  let stigmaExceptionResult;

  let stigmaTokenList = [].concat(Object.keys(dataStigma.token));
  let stigmaTokenLen = stigmaTokenList.length;
  let stigmaTokenResult = [];

  let positionTokenResult = [];
  let positionTokenIndex = 0;

  let weaponTokenResult = [];
  let weaponFirst = [-1, null];
  let checkDuplicate = {};

  let i,j;

  let clearNotIndexedToken = (a) => a[0] !== -1;
  let getTokenFromListWithResult = (a) => {
    if(stigmaTokenResult[a][1] === -1) {
      return stigmaTokenResult[a][2]
    } else {
      return stigmaTokenList[stigmaTokenResult[a][1]]
    }
  }
  let getStigmaFromTokenIndex = (a) => dataStigma[dataStigma.token[a]];

  let result = {
    t: "equip",
    w: dataWeapon["null"],
    s: [
      dataStigma["null"], dataStigma["null"], dataStigma["null"]
    ]
  };

  // 예외토큰
  for(i=0;i<stigmaExceptionLen;i++){
    let index = text.indexOf(stigmaExceptionList[i])
    if(index >= 0) stigmaExceptionResult = [stigmaExceptionList[i], dataStigma.exception[stigmaExceptionList[i]]]
  }

  // 캐릭터토큰
  for(i=0;i<charaTokenLen;i++){
    let token = charaTokenList[i]
    let index = text.indexOf(token)
    if(index >= 0) return { hasItem: true, c: dataChara[dataChara.token[token]], t: "chara" }
  }


  if(stigmaExceptionResult) {
    text = text.replace(stigmaExceptionResult[0], stigmaExceptionResult[1]);
  }

  // 무기토큰
  for(i=0;i<weaponTokenLen;i++){
    let token = weaponTokenList[i];
    if(token[0] === "*"){
      token = new RegExp(token.substr(1));
      weaponTokenResult[i] = text.search(token);
    } else {
      weaponTokenResult[i] = text.indexOf(token);
    }
    if(weaponTokenResult[i] === -1) continue;
    if((weaponFirst[0] >= 0 && weaponFirst[0] > weaponTokenResult[i]) || weaponFirst[0] === -1)
      weaponFirst = [weaponTokenResult[i], -1, dataWeapon.token[weaponTokenList[i]]]
  }
  if(weaponFirst[1]){
    result.hasItem = true;
    result.w = dataWeapon[weaponFirst[2]];
  }

  // 성흔토큰 모두 검색
  for(i=0;i<stigmaTokenLen;i++){
    stigmaTokenResult[i] = text.indexOf(stigmaTokenList[i]);
  }

  let setPositionTokens = () => {
    return [
      [text.indexOf("상"), "상"], [text.indexOf("중"), "중"], [text.indexOf("하"), "하"],
      [text.indexOf("2"), 2], [text.indexOf("3"), 3]
    ].filter(clearNotIndexedToken).sort()
  }

  positionTokenResult = setPositionTokens();
  stigmaTokenResult = stigmaTokenResult.filter(clearNotIndexedToken);

  // 동일분류 겹치는 토큰 제거
  stigmaTokenResult = stigmaTokenResult.map(
    (a, k)=>{
      if(a === -1) return [-1];

      let stigma = getStigmaFromTokenIndex(stigmaTokenList[k]);
      let index = checkDuplicate[stigma.short];

      if(index){
        if(index[0] > a)
          checkDuplicate[stigma.short] = [a, k, stigmaTokenList[k]];
        else if (index[0] === a && checkDuplicate[stigma.short][2].length < stigmaTokenList[k].length)
          checkDuplicate[stigma.short] = [a, k, stigmaTokenList[k]];

        return [-1, 0];
      } else {
        let stigma = getStigmaFromTokenIndex(stigmaTokenList[k])
        checkDuplicate[stigma.short] = [a, k, stigmaTokenList[k]];
        return [a, k];
      }
    }
  );

  stigmaTokenResult = []
  if(weaponFirst[0] !== -1){
    stigmaTokenResult.push(weaponFirst);
  }
  for(i in checkDuplicate){
    stigmaTokenResult.push(checkDuplicate[i]);
  }

  // console.log(stigmaTokenResult, checkDuplicate);
  // console.log(stigmaTokenResult.map((a)=>[a[0], stigmaTokenList[a[1]]]))

  // 다중 토큰사용 감지
  for(i=0;i<stigmaTokenResult.length;i++){
    let key = stigmaTokenList[stigmaTokenResult[i][1]];
    let tokenResultRe = text.indexOf(key, stigmaTokenResult[i][0]+1);
    while(tokenResultRe >= 0){
      stigmaTokenResult.push([tokenResultRe, stigmaTokenResult[i][1]]);
      tokenResultRe = text.indexOf(key, tokenResultRe+1);
    }
  }

  let tokenDuplicateCheck = [];

  // 토큰끼리 겹치지않게
  for(i=0;i<stigmaTokenResult.length;i++){
    let tokenText = getTokenFromListWithResult(i);
    let tokenIndex = stigmaTokenResult[i][0];

    for(j=0;j<tokenText.length;j++) {
      if(tokenDuplicateCheck[j + tokenIndex] >= 0){
        let otherText = getTokenFromListWithResult(tokenDuplicateCheck[j + tokenIndex]);
        // let otherIndex = stigmaTokenResult[tokenDuplicateCheck[j + tokenIndex]][0];

        if(tokenText.length > otherText.length){
          // 긴쪽이 작은쪽을 덮음
          stigmaTokenResult[tokenDuplicateCheck[j + tokenIndex]][0] = -1;
          tokenDuplicateCheck[j + tokenIndex] = i;
        } else {
          // 못덮으면 내가죽음
          stigmaTokenResult[i][0] = -1;
        }
      } else {
        tokenDuplicateCheck[j + tokenIndex] = i;
      }
    }
  }

  // console.log(tokenDuplicateCheck);

  stigmaTokenResult = stigmaTokenResult.filter(clearNotIndexedToken)
    .filter((a) => a[1] !== -1)
    .sort((a, b) => a[0] - b[0]);

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

      let setSpecificStigma = (prev, depth) => {
        nowPositionToken = positionTokenResult[positionTokenIndex];
        // 현재 토큰 내부에 포지션토큰이 존재
        let checkPositionTokenWhitinNowToken = () => {
          if (nowPositionToken && nowPos >= nowPositionToken[0] &&
              nowPos + stigmaTokenList[now].length - 1 <= nowPositionToken[0] + nowPositionToken[1].length)
            return true
          else
            return false
        }

        while(checkPositionTokenWhitinNowToken()){
          let newPosition = text.indexOf(nowPositionToken[1], nowPositionToken[0]+1);
          if(newPosition !== -1){
            positionTokenResult.push([newPosition, nowPositionToken[1]]);
            positionTokenResult = positionTokenResult.sort();
          }

          positionTokenIndex += 1;
          nowPositionToken = positionTokenResult[positionTokenIndex];
        }

        if(!nowPositionToken) return 1;

        // console.log(nowPositionToken, dataStigma[dataStigma.token[stigmaTokenList[now]]]);
        // console.log(JSON.stringify([nowPos, next, nowPositionToken, prev]));

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
              if(isPositionTokenValid() && depth < 1){ setSpecificStigma(prev, depth + 1); }
              return;
            case "중":
              positionTokenIndex += 1;
              if(stigmaResultObject.specific[1]) return
              stigmaResultObject.specific[1] = dataStigma[dataStigma.token[stigmaTokenList[now]]];

              if(isPositionTokenValid() && depth < 1){ setSpecificStigma(prev, depth + 1); }
              return;
            case "하":
              positionTokenIndex += 1;
              if(stigmaResultObject.specific[2]) return
              stigmaResultObject.specific[2] = dataStigma[dataStigma.token[stigmaTokenList[now]]];
              if(isPositionTokenValid() && depth < 1){ setSpecificStigma(prev, depth + 1); }
              return;
            default:
          }
        }
      }

      if(isPositionTokenValid()){
        // 부위토큰 존재
        if(setSpecificStigma(0, 0)){
          // 포지션토큰 겹침문제로 자유토큰으로 변환
          stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
        }
      } else {
        // 부위토큰 미존재 (채워넣는 토큰)
        stigmaResultObject.ready.push(dataStigma[dataStigma.token[stigmaTokenList[now]]]);
      }
    }
  }

  setReadyStigma(0);
  setReadyStigma(1);
  setReadyStigma(2);

  // console.log(text);

  if(stigmaResultObject.ready.length === 1 && stigmaResultObject.specific.length === 0) {
    if(stigmaResultObject.ready[0].isSingle){
      result.s[stigmaResultObject.ready[0].singlePos] = stigmaResultObject.ready[0];
      checkSet[result.s[0].short] = 1;
      result.hasItem = true;
    } else {
      result.s[0] = stigmaResultObject.ready[0];
      result.s[1] = stigmaResultObject.ready[0];
      result.s[2] = stigmaResultObject.ready[0];
      checkSet[result.s[0].short] = 3;
      result.hasItem = true;
    }
  } else {
    let saveStigmaSpecific = (tIndex) => {
      if(stigmaResultObject.specific[tIndex]) {
        result.hasItem = true;
        result.s[tIndex] = stigmaResultObject.specific[tIndex];
      }
    }

    let saveStigmaResult = (tIndex) => {
      while(stigmaResultObject.ready[0] && stigmaResultObject.ready[0].isSingle){
        let sPos = stigmaResultObject.ready[0].singlePos;
        let sItem = stigmaResultObject.ready.splice(0, 1)[0];
        if(result.s[sPos].isNull && tIndex === sPos) {
          stigmaResultObject.specific[sPos] = sItem;
          saveStigmaSpecific(sPos);
          return;
        }
      }

      if(result.s[tIndex].isNull && stigmaResultObject.ready[0]) {
        result.hasItem = true;
        result.s[tIndex] = stigmaResultObject.ready.splice(0, 1)[0];
      }
    }

    saveStigmaSpecific(0);
    saveStigmaSpecific(1);
    saveStigmaSpecific(2);

    saveStigmaResult(0);
    saveStigmaResult(1);
    saveStigmaResult(2);

    checkSet[result.s[0].short] = checkSet[result.s[0].short]?checkSet[result.s[0].short]+1:1;
    checkSet[result.s[1].short] = checkSet[result.s[1].short]?checkSet[result.s[1].short]+1:1;
    checkSet[result.s[2].short] = checkSet[result.s[2].short]?checkSet[result.s[2].short]+1:1;

    delete checkSet.null;
  }

  let len = Object.keys(checkSet).length;
  for(i=0;i<len;i++){
    let x = Object.keys(checkSet)[i];
    if(checkSet[x] >= 3 && dataStigma[x]){
      if(dataStigma[x].setTexts[1]){
        result.sSet = [
          dataStigma[x].oName + " 2세트 : " + dataStigma[x].setTexts[0],
          dataStigma[x].oName + " 3세트 : " + dataStigma[x].setTexts[1]
        ]
      } else {
        result.sSet = [
          dataStigma[x].oName + " 2세트 : " + dataStigma[x].setTexts[0]
        ]
      }
    } else if(checkSet[x] >= 2 && dataStigma[x]){
      result.sSet = [
        dataStigma[x].oName + " 2세트 : " + dataStigma[x].setTexts[0]
      ];
    }
  }

  return result
}

export default Translator;
