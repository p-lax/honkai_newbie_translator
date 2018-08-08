import BronyaC1 from "./BronyaC1"
import BronyaC2 from "./BronyaC2"
import BronyaC3 from "./BronyaC3"
import BronyaC4 from "./BronyaC4"
import BronyaC5 from "./BronyaC5"
import BronyaC6 from "./BronyaC6"

const chara = {
  data: {
    ...BronyaC1.data,
    ...BronyaC2.data,
    ...BronyaC3.data,
    ...BronyaC4.data,
    ...BronyaC5.data,
    ...BronyaC6.data,
  },
  token_rev: {
    "브로냐_채리엇": ["삐로냐", "삐로나", "채리엇", "함교의채리엇", "함교의 채리엇", "발키리 채리엇"],
    "브로냐_황매화": ["황매화", "줘팸", "조팸", "기동 장갑 황매화"],
    "브로냐_설원": ["설원", "빙로냐", "빙로나", "저격수", "설원 저격수", "설원저격수"],
    "브로냐_차원": ["차원", "스로냐", "스로나", "차원 경계돌파", "차원 경계 돌파"],
    "브로냐_은랑": ["은랑", "은랑의여명", "은랑의 여명"],
    "브로냐_침식": ["침식", "흑핵", "쿠로냐", "쿠로나", "흑핵침식", "이도 흑핵침식", "이도 흑핵 침식"],
  }
}


export default chara