import theresa from "./theresa"
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

const chara = {
  // ...stigma3.data,
  // ...stigma3s.data,
  // ...stigma4.data,
  // ...stigma4s.data,
  ...theresa.data,

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

export default chara