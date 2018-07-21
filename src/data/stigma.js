import stigma3 from "./stigma_3.js"
import stigma4 from "./stigma_4.js"
import stigma4s from "./stigma_4s.js"

const stigma = {
    ...stigma3.data,
    ...stigma4.data,
    ...stigma4s.data,
    
    "null": {
      "oName": "",
      "one": "",
      "imgs": ["", "", ""],
      "texts": [
        "", "", ""
      ],
      "setTexts": [
        "",""
      ]
    },
    "token": {
      ...stigma3.token,
      ...stigma4.token,
      // ...stigma4s.token
    },
    "exception": {
      ...stigma3.exception,
      ...stigma4.exception,
      // ...stigma4s.exception
    }
  }


export default stigma