import weapon_handgun from "./weapon_handgun.js"
import weapon_longsword from "./weapon_longsword.js"
import weapon_holycross from "./weapon_holycross.js"
import weapon_cannon from "./weapon_cannon.js"
import weapon_greatsword from "./weapon_greatsword.js"
import weapon_gauntlet from "./weapon_gauntlet.js"

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

const weapon = {
  ...weapon_handgun.data,
  ...weapon_longsword.data,
  ...weapon_gauntlet.data,
  ...weapon_holycross.data,
  ...weapon_cannon.data,
  ...weapon_greatsword.data,

  "null": {
    "oName": "",
    "type": "",
    "short": "",
    "img": "",
    "spec": "",
    "skill": "",
    "passive": ""
  },
  "token": {
    ...weapon_handgun.token,
    ...weapon_gauntlet.token,
    ...parseRevToken(weapon_longsword.token_rev),
    ...parseRevToken(weapon_holycross.token_rev),
    ...parseRevToken(weapon_cannon.token_rev),
    ...parseRevToken(weapon_greatsword.token_rev),
  }
}


export default weapon