import KianaC1 from "./KianaC1"
import KianaC2 from "./KianaC2"
import KianaC3 from "./KianaC3"
import KianaC4 from "./KianaC4"

import KallenC1 from "./KallenC1"
import KallenC2 from "./KallenC2"

const chara = {
  data: {
    ...KianaC1.data,
    ...KianaC2.data,
    ...KianaC3.data,
    ...KianaC4.data,

    ...KallenC1.data,
    ...KallenC2.data,
  },
  token_rev: {
    "키아나_레인저": ["총키", "총키아나", "키아나 레인저", "키아나 발키리 레인저"],
    "키아나_투예복": ["삐아나", "삐등어", "투예복", "백련"],
    "키아나_성녀"  : ["성녀", "성녀의 기도", "성녀의기도"],
    "키아나_월광"  : ["월광", "월팡", "백기사", "백기사월광", "백기사 월광"],

    "카렌_예장"  : ["기렌", "기카렌", "기계카렌", "예장", "카렌예장", "카렌 예장", "금양", "카렌 예장금양", "예장금양", "예장 금양"],
    "카렌_괴도"  : ["괴도", "괴도카렌", "괴도 카렌"],
  }
}


export default chara