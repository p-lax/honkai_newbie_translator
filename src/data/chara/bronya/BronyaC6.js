const BronyaC6 = {
  data: {
    "브로냐_침식": {
      "oName": "브로냐 자이칙 - 이도 흑핵 침식",
      "rank": "S",
      "bimg": "BronyaC6",
      "type": "생물",
      "weapon": "중화기",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "허수 조작",
          "icon": "Skill_Bronya_ZP_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "허수 조작",
              "link": true,
              "icon": "Skill_Nagative_Skill02",
              "text": "전원의 극한 회피/퍼펙트 가드 발동 효과 쿨타임이 4.5초 감소",
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
              "name": "파쇄역장",
              "link": true,
              "icon": "Skill_Nagative_Damage01",
              "text": "적을 후방에서 공격하면 모든 대미지가 39.0% 상승한다.",
            },
            {
              "name": "우선순위 변경",
              "link": true,
              "icon": "Skill_Nagative_Skill02",
              "text": "피격 혹은 극한 회피 시 40.0% 확률로 공격한 적을 조준하여 공격한 적이 받는 물리 피해량을 4.5초간 25.0% 증가시킨다.",
            },
            {
              "name": "고열 유발",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage02",
              "text": "크리티컬 시 적에게 추가로 30.0%의 화염 대미지를 입힌다.",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "집속 폭격",
          "icon": "Skill_Bronya_ZP_001",
          "desc": "차지할수록 강력해지는 포격 / 장비한 무기에 따라 차지 공격이 바뀐다. / 유도탄 개조 : 유도탄 계열 무기를 장비하면 공격방식이 산탄형 사격으로 변경되고, 차지마다 산탄의 수량이 30% 증가한다. / 각 산탄은 작은 범위에 폭발을 발생시킨다. 1/2/3단 차지가 각 50%, 60%, 80%의 물리 대미지를 입히고, 경직확률이 증가한다.",
          "sub": [
            {
              "name": "정밀 충전",
              "link": true,
              "icon": "Skill_Nagative_Damage02",
              "text": "다음 단계를 차지하는 순간 공격 버튼에서 손을 떼면, 다음 공격의 크리티컬률이 30.0% 상승한다.",
            },
            {
              "name": "급속 회피",
              "link": true,
              "icon": "Skill_Nagative_Survive03",
              "text": "차지하는 동안 공격을 받으면 강제 회피한다. 4.0초마다 1회 발동되며, 차지 상태에 영향을 주지 않는다.",
            },
            {
              "name": "강격 해방",
              "rank": "SSS",
              "icon": "Skill_Nagative_Damage03",
              "text": "3단 차지에 진입하는 순간 공격 버튼에서 손을 떼면 해당 공격의 모든 대미지가 20.0% 상승하고, 그후 3초 간 이동 속도가 100.0% 증가한다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "기갑 강공",
          "icon": "Skill_Bronya_ZP_002",
          "desc": "교대 시 중장 토끼의 팔로 적을 찍어 누른다. / 기계팔을 사용해 적을 찍어 눌러 175%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "경화 기갑",
              "icon": "Skill_Nagative_StartUp01",
              "text": "교대기를 강화하여 공격력의 175%+175%만큼의 물리 대미지를 입힌다.",
            },
            {
              "name": "QTE - 역장 제압",
              "icon": "Skill_Nagative_StartUp03",
              "text": "QTE : 적이 띄워지거나 시공 감속일 때 발동. 대상 근처 큰 범위의 적을 지면에 찍어눌러 다운시키고, 3*320%만큼 물리 대미지를 입히고 6초간 은신 상태가 된다. (QTE 지속시간 동안엔 회피로 은신 상태가 될 수 없다.)",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "전역 제압",
          "icon": "Skill_Bronya_HH_004",
          "desc": "무기고를 개방하여 목표지역에 연속 포격을 가한다. / 전역 제압 : 발동 시 125 SP를 소모하여 목표를 중심으로 구속 필드를 전개하고, 적 주변 중범위에 연속 포격하여 20*80%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "박격포",
              "icon": "Skill_Nagative_Skill02",
              "text": "매 포격의 물리 대미지가 100.0% 상승하고, 12.0% 확률로 명중한 적을 연소 상태로 만들어 7초간 0.5초마다 450의 화염 대미지를 입힌다.",
            },
            {
              "name": "실명 무장",
              "icon": "Skill_Nagative_Skill03",
              "rank": "SS",
              "text": "포격에 맞은 적은 포격이 멈추고 0.5초 이후 5.00초간 기절 상태가 된다.",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "차원 차단",
          "icon": "Skill_Bronya_ZP_003",
          "desc": "적의 공격을 회피하며 은신한다. / 차원차단 : 극한 회피 시 6초간 은신 상태가 된다. 쿨타임 20초 / 은신 상태에선 적의 타깃이 되지 않으며 피격 시 대미지와 상태 이상을 받지 않고 이동 속도와 공격 속도가 대폭 상승한다. / 기본 공격, 무기 스킬, 필살기를 사용하거나 교대하면 은신 상태는 해제된다.",
          "sub": [
            {
              "name": "암살",
              "icon": "Skill_Nagative_Damage03",
              "text": "은신 상태가 된 후 자신의 물리 대미지가 35.0% 상승하고, 은신이 해제된 후에도 2.80초간 유지된다.",
            },
            {
              "name": "시한폭탄",
              "icon": "Skill_Nagative_Damage02",
              "text": "극한 회피 시 적 근처에 8개의 소형 폭탄을 던진다. 폭발은 각자 공격력의 80%만큼 물리 대미지를 입힌다.",
            },
            {
              "name": "입자 재설정",
              "link": true,
              "icon": "Skill_Nagative_Survive03",
              "text": "차원 차단의 쿨타임이 4.0초 감소한다.",
            },
          ]
        },
      ],
    },
  }
}

export default BronyaC6