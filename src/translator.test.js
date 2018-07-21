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

  it('미막미', () => {
    let res = Translator("미막미");
    expect(checkStigmaName(res)).toEqual(["미켈", "막스", "미켈"]);
  });  

  it('제복복', () => {
    let res = Translator("제복복");
    expect(checkStigmaName(res)).toEqual(["제갈", "복희", "복희"]);
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
