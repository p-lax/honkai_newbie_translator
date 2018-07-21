import Translator from './translator.js'

describe('Translator 테스트', () =>{
  var checkUpName = (obj) => obj.s[0].oName
  var checkMdName = (obj) => obj.s[1].oName
  var checkDnName = (obj) => obj.s[2].oName
  var checkStigmaName = (obj) => [obj.s[0].short, obj.s[1].short, obj.s[2].short];

  it('미켈', () => {
    let res = Translator("미켈");
    expect(checkStigmaName(res)).toEqual(["미켈", "미켈", "미켈"]);
  });  

  // 예외처리
  it('철막이 후부키', () => {
    let res = Translator("철막이 후부키");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "막스", "이이"]);
  });

  // 이름 겹치는것들
  it('흑헌상', () => {
    let res = Translator("흑헌상");
    expect(checkStigmaName(res)).toEqual(["흑헌원", undefined, undefined]);
  });
  it('아이작 뉴턴', () => {
    let res = Translator("아이작 뉴턴");
    expect(checkStigmaName(res)).toEqual(["뉴턴", "뉴턴", "뉴턴"]);
  });

  // 테케클
  // 테리클
  // 테리리
  // 테케케

  // 롤샤리

  // 이이이홍이이


  // 급식종결들

  it('바바아', () => {
    let res = Translator("바바아");
    expect(checkStigmaName(res)).toEqual(["바톨", "바톨", "아틸라"]);
  });

  it('아아아', () => {
    let res = Translator("아아아");
    expect(checkStigmaName(res)).toEqual(["아틸라", "아틸라", "아틸라"]);
  });

  it('테리아', () => {
    let res = Translator("테리아");
    expect(checkStigmaName(res)).toEqual(["테슬라", "리날도", "아틸라"]);
  });

  it('리리아', () => {
    let res = Translator("리리아");
    expect(checkStigmaName(res)).toEqual(["리날도", "리날도", "아틸라"]);
  });

  it('테슬라 3셋', () => {
    let res = Translator("테슬라 3셋");
    expect(checkStigmaName(res)).toEqual(["테슬라", "테슬라", "테슬라"]);
  });

  it('롤흑흑', () => {
    let res = Translator("롤흑흑");
    expect(checkStigmaName(res)).toEqual(["롤랑", "흑헌원", "흑헌원"]);
  });  

  it('롤피피', () => {
    let res = Translator("롤피피");
    expect(checkStigmaName(res)).toEqual(["롤랑", "피카소", "피카소"]);
  });  

  it('롤샤리', () => {
    let res = Translator("롤샤리");
    expect(checkStigmaName(res)).toEqual(["롤랑", "샤를", "리날도"]);
  });  


  // 원소딜러들

  it('섹수뉴', () => {
    let res = Translator("섹수뉴");
    expect(checkStigmaName(res)).toEqual(["셰익", "수영복", "뉴턴"]);
  });

  it('장장테', () => {
    let res = Translator("장장테");
    expect(checkStigmaName(res)).toEqual(["장광", "장광", "테밴"]);
  });

  it('테슬라밴드 풀셋', () => {
    let res = Translator("테슬라밴드 풀셋");
    expect(checkStigmaName(res)).toEqual(["테밴", "테밴", "테밴"]);
  });

  it('테밴풀셋', () => {
    let res = Translator("테밴풀셋");
    expect(checkStigmaName(res)).toEqual(["테밴", "테밴", "테밴"]);
  });

  it('철수 수메 세익', () => {
    let res = Translator("철수 수메 세익");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "수영복", "셰익"]);
  });  

  it('철수섹', () => {
    let res = Translator("철수섹");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "수영복", "셰익"]);
  });  

  it('비여비', () => {
    let res = Translator("비여비");
    expect(checkStigmaName(res)).toEqual(["비옥환", "여와", "비옥환"]);
  });  

  it('비섹비', () => {
    let res = Translator("비섹비");
    expect(checkStigmaName(res)).toEqual(["비옥환", "셰익", "비옥환"]);
  });  

  it('이여이', () => {
    let res = Translator("이여이");
    expect(checkStigmaName(res)).toEqual(["이홍", "여와", "이홍"]);
  });  

  it('농3', () => {
    let res = Translator("농3");
    expect(checkStigmaName(res)).toEqual(["노히메", "노히메", "노히메"]);
  });  

  it('철수뉴', () => {
    let res = Translator("철수뉴");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "수영복", "뉴턴"]);
  });

  it('섹수클', () => {
    let res = Translator("섹수클");
    expect(checkStigmaName(res)).toEqual(["셰익", "수영복", "클레오"]);
  });

  it('막철막', () => {
    let res = Translator("막철막");
    expect(checkStigmaName(res)).toEqual(["막스", "슈뢰딩거", "막스"]);
  });

  it('플셰플', () => {
    let res = Translator("플셰플");
    expect(checkStigmaName(res)).toEqual(["막스", "셰익", "막스"]);
  });

  it('섹수오', () => {
    let res = Translator("섹수오");
    expect(checkStigmaName(res)).toEqual(["셰익", "수영복", "오토"]);
  });

  it('섹수테', () => {
    let res = Translator("섹수테");
    expect(checkStigmaName(res)).toEqual(["셰익", "수영복", "테밴"]);
  });

  it('섹장오', () => {
    let res = Translator("섹장오");
    expect(checkStigmaName(res)).toEqual(["셰익", "장광", "오토"]);
  });

  it('섹지오', () => {
    let res = Translator("섹지오");
    expect(checkStigmaName(res)).toEqual(["셰익", "지크", "오토"]);
  });

  it('섹지뉴', () => {
    let res = Translator("섹지뉴");
    expect(checkStigmaName(res)).toEqual(["셰익", "지크", "뉴턴"]);
  });

  it('섹수테', () => {
    let res = Translator("섹수테");
    expect(checkStigmaName(res)).toEqual(["셰익", "수영복", "테밴"]);
  });

  it('섹케클', () => {
    let res = Translator("섹케클");
    expect(checkStigmaName(res)).toEqual(["셰익", "케플러", "클레오"]);
  });


  // 근거리 물리딜러들

  it('미막미', () => {
    let res = Translator("미막미");
    expect(checkStigmaName(res)).toEqual(["미켈", "막스", "미켈"]);
  });  

  it('시막시', () => {
    let res = Translator("시막시");
    expect(checkStigmaName(res)).toEqual(["시린", "막스", "시린"]);
  });  

  it('세실 풀셋', () => {
    let res = Translator("세실 풀셋");
    expect(checkStigmaName(res)).toEqual(["세실", "세실", "세실"]);
  });  

  it('이막아', () => {
    let res = Translator("이막아");
    expect(checkStigmaName(res)).toEqual(["이홍", "막스", "아틸라"]);
  });  

  it('이예아', () => {
    let res = Translator("이예아");
    expect(checkStigmaName(res)).toEqual(["이홍", "예카", "아틸라"]);
  });

  it('예카테리나 풀셋', () => {
    let res = Translator("예카테리나 풀셋");
    expect(checkStigmaName(res)).toEqual(["예카", "예카", "예카"]);
  });  

  it('케케클', () => {
    let res = Translator("케케클");
    expect(checkStigmaName(res)).toEqual(["케플러", "케플러", "클레오"]);
  });

  it('희흑흑', () => {
    let res = Translator("희흑흑");
    expect(checkStigmaName(res)).toEqual(["헌원", "흑헌원", "흑헌원"]);
  });

  it('희케뉴', () => {
    let res = Translator("희케뉴");
    expect(checkStigmaName(res)).toEqual(["헌원", "케플러", "뉴턴"]);
  });


  // 원거리 물리딜러들

  it('철흑흑', () => {
    let res = Translator("철흑흑");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "흑헌원", "흑헌원"]);
  });  

  it('철흑클', () => {
    let res = Translator("철흑클");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "흑헌원", "클레오"]);
  });  

  it('철막클', () => {
    let res = Translator("철막클");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "막스", "클레오"]);
  });  

  it('철막막', () => {
    let res = Translator("철막막");
    expect(checkStigmaName(res)).toEqual(["슈뢰딩거", "막스", "막스"]);
  });  

  it('막스 풀셋', () => {
    let res = Translator("막스풀셋");
    expect(checkStigmaName(res)).toEqual(["막스", "막스", "막스"]);
  });

  it('플랑크 풀셋', () => {
    let res = Translator("플랑크풀셋");
    expect(checkStigmaName(res)).toEqual(["막스", "막스", "막스"]);
  });  

  it('싱말 풀셋', () => {
    let res = Translator("싱말풀셋");
    expect(checkStigmaName(res)).toEqual(["신말", "신말", "신말"]);
  });  


  // 서포터들

  it('제복복', () => {
    let res = Translator("제복복");
    expect(checkStigmaName(res)).toEqual(["제갈", "복희", "복희"]);
  });

  it('흑흑철', () => {
    let res = Translator("흑흑철");
    expect(checkStigmaName(res)).toEqual(["흑헌원", "흑헌원", "슈뢰딩거"]);
  });  

  it('클클클', () => {
    let res = Translator("클클클");
    expect(checkStigmaName(res)).toEqual(["클레오", "클레오", "클레오"]);
  });  

  it('이지이', () => {
    let res = Translator("이지이");
    expect(checkStigmaName(res)).toEqual(["이홍", "지크", "이홍"]);
  });  

  it('이샤롤', () => {
    let res = Translator("이샤롤");
    expect(checkStigmaName(res)).toEqual(["이이", "샤를", "롤랑"]);
  });  

  it('예샤제', () => {
    let res = Translator("예샤제");
    expect(checkStigmaName(res)).toEqual(["예카", "샤를", "제갈"]);
  });  

  it('오오뉴', () => {
    let res = Translator("오오뉴");
    expect(checkStigmaName(res)).toEqual(["오토", "오토", "뉴턴"]);
  });  

  it('장장뉴', () => {
    let res = Translator("장장뉴");
    expect(checkStigmaName(res)).toEqual(["장광", "장광", "뉴턴"]);
  });  

  it('테수뉴', () => {
    let res = Translator("테수뉴");
    expect(checkStigmaName(res)).toEqual(["테밴", "수영복", "뉴턴"]);
  });


  // 상중하 테스트
  it('미켈 상하 막스 중단', () => {
    let res = Translator("미켈 상하 막스 중단");
    expect(checkStigmaName(res)).toEqual(["미켈", "막스", "미켈"]);
  });

  it('미켈 상하 중단 막스', () => {
    let res = Translator("미켈 상하 중단 막스");
    expect(checkStigmaName(res)).toEqual(["미켈", "막스", "미켈"]);
  });

  it('상하 미켈 막스 중단', () => {
    let res = Translator("상하 미켈 막스 중단");
    expect(checkStigmaName(res)).toEqual(["미켈", "막스", "미켈"]);
  });
});
