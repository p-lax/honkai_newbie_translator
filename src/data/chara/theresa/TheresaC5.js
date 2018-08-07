const TheresaC5 = {
  data: {
    "테레사_월하초옹": {
      "oName": "테레사 아포칼립스 - 월하초옹",
      "rank": "A",
      "bimg": "TheresaC5",
      "type": "생물",
      "weapon": "십자가",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "카인의 표식",
          "icon": "Skill_Theresa_YD_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "카인의 표식",
              "link": true,
              "icon": "Skill_Nagative_Damage03",
              "text": "팀 전원이 받는 대부분의 디버프의 지속시간 -40%, 생물타입의 파티원이 주는 물리데미지 +24%",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Theresa_YD_006",
          "desc": "패시브 스킬은 자동으로 발동된다.",
          "sub": [
            {
              "name": "성골",
              "link": true,
              "icon": "Skill_Nagative_Survive02",
              "text": "전투 중 초기 SP가 30.0 증가 / 오픈 월드에서는 10분에 한 번씩 발동 가능",
            },
            {
              "name": "부정한 가시",
              "icon": "Skill_Nagative_Damage02",
              "link": true,
              "rank": "S",
              "text": "십자가를 전개하고 있는 동안, 자신의 공격 속도 50.0% 상승",
            },
            {
              "name": "흡혈귀의 계약",
              "rank": "S",
              "icon": "Skill_Nagative_Damage03",
              "text": "출혈상태의 적에게 주는 물리데미지 +60%, 출혈상태의 적으로부터 받는 모든 데미지 -25%",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "부정한 쌍검",
          "icon": "Skill_Theresa_GM_001",
          "desc": "기본 공격 : 쌍검으로 근접 4단 공격 / 1단 : 공격력 2*50%의 물리 피해 / 2단 : 공격력 2*50%의 물리 피해 / 3단 : 공격력 2*60% + 70%의 물리 피해 / 4단 : 공격력 2*50% + 2*70%의 물리 피해",
          "sub": [
            {
              "name": "빈혈효과",
              "link": true,
              "icon": "Skill_Nagative_Damage01",
              "text": "통상공격(차지공격 포함)이 명중하면 20%의 확률로 적을 허약상태가 되고, 2.0초간 공격력이 50% 감소한다. 허약 상태가 끝날 때 적은 공격력의 80% 물리 데미지를 받는다. 쿨타임 2초",
            },
            {
              "name": "식혼귀",
              "rank": "S",
              "icon": "Skill_Nagative_Control02",
              "text": "통상 공격의 각 단계가 유혈 상태의 적에게 데미지를 줄 때 HP를 27, 혈인을 20 회복한다",
            },
            {
              "name": "피의 저주",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage03",
              "text": "콤보 수가 30을 넘으면, 통상공격에 공격력의 20% 물리데미지를 추가",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "추락하는 도끼",
          "icon": "Skill_Theresa_GM_002",
          "desc": "차지하여 거대한 도끼로 공격 / 공격 버튼을 길게 누르는 것으로 추락하는 도끼로 공격 할 수있다. 공격 후 다시 공격 버튼을 누르면 추락하는 도끼로 연속 공격 할 수있다. / 혈인이 50이상일 때 혈인을 50사용 : / 1단 : 공격력 150% + 250%의 물리 피해를 입힌다 / 2단 : 공격력 150% + 250%의 물리 타격 / 혈인이 50미만일 때 : / 1단마다 공격력의 100%와 200%의 물리 피해를 입힌다 / 전투 중 혈인의 최대 값은 200 / 혈인은 가득 찰 때까지 초당5 회복. 차지공격 시 1.5 초 동안은 회복하지 않는다.",
          "sub": [
            {
              "name": "장미의 혈흔",
              "icon": "Skill_Nagative_Damage02",
              "text": "혈인을 소비하는 차지 공격이 적에게 명중하면 적이 출혈 상태가된다. 0.5 초마다 240의 물리 데미지를 준다. 지속 시간 6.5초",
            },
            {
              "name": "매장",
              "icon": "Skill_Nagative_StartUp02",
              "text": "교대기 : 적에게 공격력의 320 %의 물리 피해를 입힌다",
            },
            {
              "name": "블러드 문 키스",
              "rank": "S",
              "icon": "Skill_Nagative_StartUp03",
              "text": "QTE : 마비 시 발동 : 적에게 공격력의 700%의 물리 데미지를 주고, 출혈상태로 만들어 0.5 초마다 240의 물리 데미지를 준다. 지속 시간 6.5초",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "망자의 연회",
          "icon": "Skill_Theresa_GM_004",
          "desc": "하늘에서 거대한 도끼를 떨어뜨려 광범위한 범위의 적을 도끼로 공격한다 : 공격력 2*300% + 600%의 물리 데미지를 입힌다",
          "sub": [
            {
              "name": "성자의 무덤",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage02",
              "text": "필살기의 마지막 1단에서 공격력의 300%의 물리 데미지를 추가로 준다. 타격 시 시공 단열 발동 지속시간 5초",
            },
            {
              "name": "광혈",
              "icon": "Skill_Nagative_Damage03",
              "text": "필살기로 데미지를 준 후, 혈인이 100 회복된다. 또한 8초 동안 혈인이 초당 12회복, 차지 공격으로 주는 총 데미지 +40%",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "형체없는 악몽",
          "icon": "Skill_Theresa_GM_003",
          "desc": "연속으로 2회까지 빠르게 회전하여 회피한다. / 극한 회피 후 3초간 이동 속도가 40% 상승한다. / 시공 단열 : 극한 회피 시 3초간 모든 적의 행동이 느려지는 시공 단열을 발동한다. 쿨타임 15초",
          "sub": [
            {
              "name": "방황하는 밤",
              "link": true,
              "icon": "Skill_Nagative_Survive01",
              "text": "시공 단열 지속 시간 1.50초 증가",
            },
            {
              "name": "안개의 화신",
              "link": true,
              "icon": "Skill_Nagative_Survive02",
              "text": "극한 회피 쿨타임 4.00초 감소",
            },
            {
              "name": "모독",
              "rank": "SSS",
              "icon": "Skill_Nagative_Damage02",
              "text": "차지 공격의 회심률 +12%",
            },
          ]
        },
      ],
    },
  }
}

export default TheresaC5