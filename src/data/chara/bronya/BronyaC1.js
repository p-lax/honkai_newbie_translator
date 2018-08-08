const BronyaC1 = {
  data: {
    "브로냐_채리엇": {
      "oName": "브로냐 자이칙 - 발키리·채리엇",
      "rank": "B",
      "bimg": "BronyaC1",
      "type": "이능",
      "weapon": "중화기",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "폭발 반응 장갑",
          "icon": "Skill_Bronya_ZP_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "폭발 반응 장갑",
              "icon": "Skill_Nagative_Survive02",
              "text": "전원이 받는 원거리 물리 피해가 28% 감소",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Bronya_ZP_006",
          "desc": "패시브 스킬은 자동으로 발동된다.",
          "sub": [
            {
              "name": "무중력 보호막",
              "icon": "Skill_Nagative_Damage01",
              "text": "기절이나 마비 상태의 적을 공격하면 물리 대미지 100.0% 증가",
            },
            {
              "name": "입자 집약",
              "rank": "S",
              "icon": "Skill_Nagative_Damage02",
              "text": "대포 계열 무기를 사용할 때 기본 공격이나 차지 공격의 크리티컬 대미지가 100.0% 증가",
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
              "name": "충격 반사",
              "icon": "Skill_Nagative_Survive03",
              "text": "차지하는 동안 공격을 1회 방어하고 약한 적을 경직시킨다. 쿨타임 6.0초, 대미지 감소 80.0%",
            },
            {
              "name": "원자 방사",
              "icon": "Skill_Nagative_Damage01",
              "text": "차지하지 않고 공격하는 경우 적을 연소 상태로 만들어 10.0초 동안 0.5초마다 33의 화염 대미지를 입힌다.",
            },
            {
              "name": "연쇄 반응",
              "icon": "Skill_Nagative_Damage02",
              "text": "연소 상태의 적에게 기본 공격이나 차지 공격이 명중하면 대미지가 25.0% 증가한다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "교대기 - 중력 분쇄",
          "icon": "Skill_Bronya_ZP_002",
          "desc": "교대 시 발동하는 지면 찍기 / 지면 찍기 : 공격력의 150%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "허공 강타",
              "icon": "Skill_Nagative_StartUp01",
              "text": "공중에 뜬 적에게 중력 분쇄 명중 시 공격력의 300%의 물리 대미지를 입힌다.",
            },
            {
              "name": "QTE - 초중력장",
              "icon": "Skill_Nagative_StartUp02",
              "rank": "S",
              "text": "적이 기절 상태일 때 QTE 교대하면 발동된다. 공격력의 100%+4,158.0의 물리 대미지를 입히고, 공중에 뜬 적을 3초 동안 시공 속박 상태로 만든다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "특이점",
          "icon": "Skill_Bronya_ZP_004",
          "desc": "강력한 블랙홀로 근처의 적을 끌어당긴다. / 블랙홀 : 10초 동안 유지되며 캐릭터가 무적 상태가 된다. / 인력 붕괴 : 끌어당긴 적의 물리 공격력을 50% 감소시킨다. / 발동 시 소모 SP : 50",
          "sub": [
            {
              "name": "입자 광선",
              "icon": "Skill_Nagative_Damage02",
              "text": "특이점에 영향을 받는 적을 출혈 상태로 만들어, 0.5초마다 449의 물리 대미지를 입힌다.",
            },
            {
              "name": "입자 융합",
              "icon": "Skill_Nagative_Control02",
              "rank": "S",
              "text": "특이점이 끝나면 폭발하며, 100.0% 확률로 6.0 초 동안 기절 상태로 만든다.",
            },
            {
              "name": "중력 분쇄",
              "icon": "Skill_Nagative_Skill03",
              "rank": "SSS",
              "text": "특이점에 영향을 받는 적에 대해 원거리 물리 대미지 30.0% 증가",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "차원 회피",
          "icon": "Skill_Bronya_ZP_003",
          "desc": "잠시 다른 차원으로 들어가 적의 공격을 회피한다. / 시공 단열 : 극한 회피 시 5초간 모든 적의 행동이 느려지는 시공 단열을 발동한다. 쿨타임 15초",
          "sub": [
            {
              "name": "시공 속박",
              "icon": "Skill_Nagative_Skill02",
              "text": "시공 단열에 있는 동안 차지 속도가 100% 증가",
            },
            {
              "name": "양자 속박",
              "rank": "A",
              "icon": "Skill_Nagative_Damage03",
              "text": "시공 단열이 끝나고 1초 동안, 모든 포탄과 미사일의 물리 대미지가 25.0% 증가",
            },
            {
              "name": "입자 재생성",
              "rank": "SS",
              "icon": "Skill_Nagative_Survive02",
              "text": "시공 단열 쿨타임 8.0초 감소",
            },
          ]
        },
      ],
    },
  }
}

export default BronyaC1