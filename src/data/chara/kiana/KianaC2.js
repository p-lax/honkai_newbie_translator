const KianaC2 = {
  data: {
    "키아나_투예복": {
      "oName": "키아나 카스라나 - 투예복·백련",
      "rank": "B",
      "bimg": "KianaC2",
      "type": "기계",
      "weapon": "쌍권총",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "유성의 가호",
          "icon": "Skill_Kiana_PT_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "인도자",
              "icon": "Skill_Nagative_Survive01",
              "text": "전원의 전투 중 HP 최대치 18% 상승",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Kiana_PT_006",
          "desc": "패시브 스킬은 자동으로 발동된다.",
          "sub": [
            {
              "name": "혜성 아머 브레이크",
              "icon": "Skill_Nagative_Damage01",
              "text": "실드에 입히는 대미지 50.0% 증가",
            },
            {
              "name": "혜성 폭격",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage02",
              "text": "HP가 80% 이상일 때, 크리티컬 대미지 40.0% 상승",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "유성의 표적",
          "icon": "Skill_Kiana_PT_001",
          "desc": "건카타를 사용하는 5단 공격 / 1단 : 공격력의 100%의 물리 대미지 / 2단 : 공격력의 100%의 물리 대미지 / 3단 : 공격력의 100%의 물리 대미지 / 4단 : 공격력의 150%의 물리 대미지 / 5단 : 공격력의 250%의 물리 대미지",
          "sub": [
            {
              "name": "유성의 파편",
              "icon": "Skill_Nagative_Damage01",
              "text": "기본 공격 적중 시 143.0의 물리 대미지를 추가한다.",
            },
            {
              "name": "회심 일격의 유성",
              "rank": "A",
              "icon": "Skill_Nagative_Damage03",
              "text": "기본 공격과 분기 공격이 실드를 파괴하면 적에게 1,485의 물리 대미지를 추가로 입힌다.",
            },
            {
              "name": "혜성 하트 브레이크",
              "rank": "SSS",
              "icon": "Skill_Nagative_Damage03",
              "text": "기본 공격으로 적을 경직시킬 경우 40.0% 확률로 적을 2.0초간 기절 상태로 만든다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "분기 공격 - 혜성 추락",
          "icon": "Skill_Kiana_PT_002",
          "desc": "2연속 킥하고 올려 찬 뒤 내려찍기 / 올려 차기 : 공격력의 50%의 물리 대미지를 입힌다. / 내려찍기 : 공격력의 275%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "교대기 - 혜성작렬",
              "icon": "Skill_Nagative_StartUp02",
              "text": "교대기 발동 시 공격력의 275%만큼 물리 대미지를 입히며 적을 경직시키고 6.0초간 기절 상태로 만든다.",
            },
            {
              "name": "QTE - 부유 나선",
              "icon": "Skill_Nagative_StartUp03",
              "text": "QTE : 적이 띄워졌을 때 교대 시 발동. 공격력의 375% + 2,250.0의 물리 대미지를 입히며, 마지막 공격은 적을 기절 상태로 만든다. 지속시간 3초",
            },
            {
              "name": "허황된 중력",
              "icon": "Skill_Nagative_Damage01",
              "rank": "S",
              "text": "분기 공격 2타 혹은 혜성 작렬이 엘리트 실드를 파괴하지 못했을 때 1,125의 화염 대미지를 추가로 입힌다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "발키리 폭발",
          "icon": "Skill_Kiana_PT_004",
          "desc": "발키리의 에너지를 폭발시켜, 각성 상태가 된다. / 폭발 : SP를 계속 소모하여, 자신의 공격 속도와 경직 저항력을 상승시킨다. / 폭발 지속 : 폭발 시작 시 20 SP를 소모하고 이후 SP가 떨어질 때까지 초당 10 SP씩 소모된다.",
          "sub": [
            {
              "name": "발키리 임팩트",
              "icon": "Skill_Nagative_Control01",
              "text": "폭발 상태 돌입 순간, 주변의 적들에게 5.0초 동안 2,610.0의 물리 대미지를 입힌다.",
            },
            {
              "name": "발키리의 끈기",
              "icon": "Skill_Nagative_Skill03",
              "rank": "S",
              "text": "폭발 상태 동안 전원 수호 효과를 얻는다. 경직 저항이 상승하고, 방어력이 100% 증가한다.",
            },
            {
              "name": "발키리 차지",
              "icon": "Skill_Nagative_Control02",
              "text": "12.0초마다 1회 차지하여, 다음 공격으로 적을 3.0초 동안 기절 상태로 만든다.",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "시공 회피",
          "icon": "Skill_Kiana_PT_003",
          "desc": "적의 공격을 신속하게 회피한다. / 시공 단열 : 극한 회피 시 3초간 모든 적의 행동이 느려지는 시공 단열을 발동한다. 쿨타임 15초",
          "sub": [
            {
              "name": "시공의 반짝임",
              "rank": "A",
              "icon": "Skill_Nagative_Damage01",
              "text": "시공 단열 쿨타임 4.0초 감소",
            },
            {
              "name": "시공의 흐름",
              "icon": "Skill_Nagative_Damage01",
              "text": "회피로 시공 단열을 발동 시키면 전원의 SP를 5.0 회복시킨다.",
            },
          ]
        },
      ],
    },
  }
}

export default KianaC2