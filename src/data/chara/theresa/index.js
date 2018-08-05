import TheresaC1 from "./TheresaC1"
import TheresaC2 from "./TheresaC2"
import TheresaC3 from "./TheresaC3"
import TheresaC4 from "./TheresaC4"
import TheresaC5 from "./TheresaC5"

const chara = {
  data: {
    ...TheresaC1.data,
    ...TheresaC2.data,
    ...TheresaC3.data,
    ...TheresaC4.data,
    ...TheresaC5.data,
  },
  token_rev: {
    "테레사_서약": ["이레사", "테레사 서약", "유다발사기"],
    "테레사_처형복": ["기레사", "테레사 처형복"],
    "테레사_앵화윤무": ["앵레", "앵레사", "테레사 앵화윤무", "앵화윤무"],
    "테레사_신은송가": ["생레", "생레사", "테레사 신은송가", "신은송가"],
    "테레사_월하초옹": ["검레", "검레사", "테레사 월하초옹", "월하초옹"],
  }
}


export default chara