const BronyaC4 = {
  data: {
    "브로냐_차원": {
      "oName": "브로냐 자이칙 - 차원 경계 돌파",
      "rank": "S",
      "bimg": "BronyaC4",
      "type": "기계",
      "weapon": "중화기",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "합금 장갑",
          "icon": "Skill_Bronya_ZP_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "합금 장갑",
              "icon": "Skill_Nagative_Damage02",
              "text": "전원의 SP 수급량이 29% 증가. 기계 속성 캐릭터로 통일하면 모든 대미지가 26% 추가로 증가.",
            },
            {
              "name": "융합",
              "rank": "SSS",
              "icon": "Skill_Nagative_Damage03",
              "text": "파티에 키아나와 메이가 있을 때, 자신의 크리티컬 대미지가 30.0% 증가",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Bronya_ZP_006",
          "desc": "패시브 스킬은 자동으로 발동된다. / 차원 주행 : 2초이상 이동하면 차원 주행 상태가 되어 이동 속도가 대폭 상승한다.",
          "sub": [
            {
              "name": "다크매터 반응로",
              "icon": "Skill_Nagative_Skill02",
              "text": "5.0초마다 대기 중인 캐릭터의 SP를 2씩 회복",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "차지 - 중입자포",
          "icon": "Skill_Bronya_ZP_001",
          "desc": "차지할수록 강력해지는 포격 / 타입 체인지 : 장비한 무기에 따라 차지 공격이 바뀐다.",
          "sub": [
            {
              "name": "차원 소각",
              "icon": "Skill_Nagative_Damage01",
              "text": "기본 공격과 필살기 사용 시 레이저 공격이 타격마다 149의 화염 대미지를 입히고, 레이저 계열 무기3단계 차지시 해당 기능의 화염피해는 2배가 된다.",
            },
            {
              "name": "에너지 흡수",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage02",
              "text": "레이저 계열 무기의 과열 속도를 40.0%감소",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "교대기 - 차원흡인",
          "icon": "Skill_Bronya_ZP_002",
          "desc": "교대 시 타깃 주변 작은 범위의 적을 공중에 띄우고 시공 속박 상태로 만든다. / 차원의 칼날 : 4초 동안 시공 속박 상태로 만들고 공격력의 100%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "차원 절단",
              "icon": "Skill_Nagative_StartUp01",
              "text": "시공 감속 상태의 적에게 물리 및 원소 대미지 80.0% 증가, 적이 차원 인력의 영향을 받는 시간 동안 0.5초마다 248의 물리 대미지를 주는 출혈 상태로 만든다.",
            },
            {
              "name": "차원의 경계",
              "icon": "Skill_Nagative_StartUp02",
              "text": "차원 흡인의 영향 범위가 3.0배 늘어나고, 지속 시간이 3.0초 증가한다.",
            },
            {
              "name": "QTE - 무한 차원",
              "icon": "Skill_Nagative_StartUp03",
              "text": "적이 마비 상태일 때 QTE 교대하면 발동된다. 넓은 범위에 475*10의 화염 대미지를 입히고, 띄워져 있는 적은 시공 속박 상태로 만든다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "중장 토끼 19C",
          "icon": "Skill_Bronya_BX_004",
          "desc": "중장 토끼 19C를 자율 행동 모드로 설정하여 함께 싸운다. / 기갑 피버 : 10초 동안 중장 토끼 19C가 무적 상태가 되고 적을 끌어당긴다. / 에너지 파장 : 자신의 공격 속성이 레이저 속성으로 변경된다. / 히트리셋 : 필살기 사용 시 레이저 무기의 히트 게이지를 초기화 한다.",
          "sub": [
            {
              "name": "자폭 기갑",
              "icon": "Skill_Nagative_Damage02",
              "text": "중장 토끼의 자율 행동 지속 시간이 끝나면 자폭하며, 주변에 공격력의 300%의 물리 대미지를 입힌다.",
            },
            {
              "name": "반물질 코어",
              "icon": "Skill_Nagative_Damage03",
              "text": "SP최대치가 110을 넘어서면 1 SP마다 중장 토끼 19C의 자율 행동 지속 시간 동안 레이저 공격의 물리 및 원소 대미지를 0.5% 상승시킨다. (최대 400회)",
            },
            {
              "name": "S2 전지",
              "icon": "Skill_Nagative_Skill03",
              "rank": "SS",
              "text": "중장 토끼의 자율 행동 지속 시간이 16.0초 증가",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "차원 축소 역장",
          "icon": "Skill_Bronya_BQ_003",
          "desc": "방패로 정면에서 오는 공격을 방어한다. / 가드 카운터 : 공격을 받는 순간 방어 버튼을 떼면 적에게 반격한다. / 퍼펙트 가드 : 반격시 주위의 적을 공중에 띄우고, 4초 동안 마비 및 시공 속박 상태로 만든다. 쿨타임 15초",
          "sub": [
            {
              "name": "반탄 방패",
              "icon": "Skill_Nagative_Damage01",
              "text": "전방에서 오는 공격을 방어할 시 적에게 공격력의 50.0%만큼 물리 대미지. 0.5초마다 1번씩 발동하며 저스트 가드 시 6초 간 크리티컬률 30.0% 증가",
            },
            {
              "name": "기갑 동력 에너지",
              "icon": "Skill_Nagative_Survive03",
              "text": "방패로 가드 중 이동 속도 150% 상승",
            },
            {
              "name": "흡수 보호막",
              "icon": "Skill_Nagative_Survive02",
              "text": "피격 시 SP를 3 소모하여 중장 토끼의 방어를 발동시켜, 경직되지 않고 대미지를 20% 감소시킨다. SP가 0일 때는 발동하지 않는다.",
            },
          ]
        },
      ],
    },
  }
}

export default BronyaC4