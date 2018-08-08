const BronyaC3 = {
  data: {
    "브로냐_설원": {
      "oName": "브로냐 자이칙 - 설원 저격수",
      "rank": "A",
      "bimg": "BronyaC3",
      "type": "생물",
      "weapon": "중화기",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "인갑일체!",
          "icon": "Skill_Bronya_ZP_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "인갑일체!",
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
              "name": "광선 재생성",
              "icon": "Skill_Nagative_Damage01",
              "text": "실드에 입히는 대미지 40.0% 증가",
            },
            {
              "name": "구속 역장",
              "rank": "S",
              "icon": "Skill_Nagative_Skill02",
              "text": "피격 혹은 극한 회피 시 40.0% 확률로 공격한 적을 조준하여 공격한 적이 받는 물리 피해를 6.0초간 30.0% 상승시킨다.",
            },
            {
              "name": "입자 제약",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage02",
              "text": "5미터 이상 떨어진 적에게 크리티컬 대미지가 25.0% 증가",
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
              "name": "완전 충전",
              "icon": "Skill_Nagative_Damage02",
              "text": "차지 단계가 바뀌는 순간 공격 버튼을 떼면 이번 공격의 크리티컬률이 30.0% 증가",
            },
            {
              "name": "충격 반사",
              "icon": "Skill_Nagative_Survive03",
              "text": "차지하는 동안 공격을 받으면 강제 회피한다. 4.0초마다 1회 발동되며, 차지 상태에 영향을 주지 않는다.",
            },
            {
              "name": "파이널 차지",
              "rank": "SSS",
              "icon": "Skill_Nagative_Damage03",
              "text": "3단 차지에 진입하는 순간 공격 버튼에서 손을 떼면, 이번 공격의 크리티컬 대미지가 25% 증가",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "교대기 - 눈꽃의 흔적",
          "icon": "Skill_Bronya_ZP_002",
          "desc": "교대시 차원 회피를 발동한다. / 순간 회피 : 차원 회피 스킬의 효과를 발동",
          "sub": [
            {
              "name": "긴급 회피",
              "icon": "Skill_Nagative_Startup01",
              "text": "공격당하는 순간 교대하면 8.0초 동안 이동 속도가 30.0% 증가한다.",
            },
            {
              "name": "QTE - 프로스트 노바",
              "icon": "Skill_Nagative_Startup02",
              "text": " 적이 띄워졌을 때 QTE 교대하면 발동된다. 넓은 범위의 적에게 3,996의 물리 대미지를 입히고 2.5초 동안 빙결 상태로 만든다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "снег",
          "icon": "Skill_Bronya_JJ_004",
          "desc": "북극설을 소환하여 모든 적을 얼려버린다. / 극저온의 땅 : 모든 적을 8초 동안 빙결 상태로 만든다. / 얼음 폭발 : 빙결 상태가 끝나면 적에게 공격력 150%의 빙결 대미지를 입힌다. / 발동 시 소모 SP : 75",
          "sub": [
            {
              "name": "극지 빙한",
              "icon": "Skill_Nagative_Skill02",
              "text": "'극저온의 땅'의 빙결 지속 시간을 4.0초 증가, 필살기 발동 후 8초 동안 차지 속도가 60.0% 증가한다.",
            },
            {
              "name": "저격 속박",
              "icon": "Skill_Nagative_Skill03",
              "rank": "SS",
              "text": "'극저온의 땅'의 영향을 받은 적에게 물리 대미지가 35.0% 증가",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "차원 회피",
          "icon": "Skill_Bronya_ZP_003",
          "desc": "잠시 다른 차원으로 들어가 적의 공격을 회피한다. / 혹한의 중심 : 공격한 적을 잠시 동안 빙결 상태로 만들고 얼음이 터질 때 공격력의 60%의 대미지를 입힌다. / 극한 회피 : 공격한 적 주변의 적들의 이동 속도를 7초 동안 감소시킨다.",
          "sub": [
            {
              "name": "냉동 역장",
              "icon": "Skill_Nagative_Survive01",
              "text": "극한 회피로 인해 이동 속도가 감소된 적의 공격 속도도 60% 감소시킨다.",
            },
            {
              "name": "눈의 땅",
              "icon": "Skill_Nagative_Survive02",
              "text": " 극한 회피 후 적의 이동 속도 저하 효과를 10.0로 연장시키며, 감속률은 80%가 된다.",
            },
            {
              "name": "입자 재생성",
              "rank": "S",
              "icon": "Skill_Nagative_Survive03",
              "text": "회피 효과 쿨타임 3.0초 감소",
            },
          ]
        },
      ],
    },
  }
}

export default BronyaC3