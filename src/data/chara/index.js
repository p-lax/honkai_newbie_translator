import theresa from "./theresa"
import kiana from "./kiana"

import equip_preset from "./equip_preset"
// import stigma3s from "./stigma_3s.js"
// import stigma4 from "./stigma_4.js"
// import stigma4s from "./stigma_4s.js"

let parseRevToken = (input) => {
  let i, j, keys = Object.keys(input), len = keys.length;
  let result = {};

  for (i=0;i<len;i+=1) {
    let key = keys[i];
    let list = input[key];
    for (j=0;j<list.length;j+=1){
      result[list[j]] = key;
    }
  }

  return result;
}

// 미등록 목록
// 키아나 4
// 카렌 2
// 메이 4
// 사쿠라 3
// 브로냐 6
// 히메코 4
// 후카 4

let chara = {
  // ...stigma3.data,
  // ...stigma3s.data,
  // ...stigma4.data,
  // ...stigma4s.data,
  ...theresa.data,
  ...kiana.data,

  "null": {
    "oName": "",
    "rank": "",
    "bimg": "",
    "type": "",
    "weapon": "",
    "skill": [],
    "equip": [],
  },

  "token": {
    ...parseRevToken(theresa.token_rev),
    ...parseRevToken(kiana.token_rev),
    // ...stigma3.token,
    // ...stigma3s.token,
    // ...stigma4.token,
    // ...stigma4s.token
  },

  "exception": {
    // ...stigma3.exception,
    // ...stigma3s.exception,
    // ...stigma4.exception,
    // ...stigma4s.exception
  }
}

let key, item, i, equip_preset_keys = Object.keys(equip_preset)
for (i=0;i<equip_preset_keys.length;i+=1) {
  key = equip_preset_keys[i];
  item = equip_preset[key]

  chara[key].equip = item
}

export default chara