import stigma3 from "./stigma_3.js"
import stigma4 from "./stigma_4.js"

const stigma = {
    ...stigma3.data,
    ...stigma4.data,
    
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
      ...stigma4.token
    },
    "exception": {
    }
  }


export default stigma