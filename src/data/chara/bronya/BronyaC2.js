const BronyaC2 = {
  data: {
    "브로냐_황매화": {
      "oName": "브로냐 자이칙 - 기동 장갑·황매화",
      "rank": "A",
      "bimg": "BronyaC2",
      "type": "이능",
      "weapon": "중화기",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "정신 동조",
          "icon": "Skill_Bronya_ZP_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "정신 동조",
              "icon": "Skill_Nagative_Damage02",
              "text": "30콤보 초과 시 전원의 크리티컬률이 26% 증가하고, 이능 캐릭터의 크리티컬 대미지가 29% 증가",
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
              "name": "붕괴 유발",
              "icon": "Skill_Nagative_Damage01",
              "text": "모두에게 물리 대미지를 흡수하는 기갑 실드를 생성한다. 실드의 HP는 558이며, 6.0초 동안 공격당하지 않으면 HP를 완전 회복한다.",
            },
            {
              "name": "능동 기갑",
              "icon": "Skill_Nagative_Skill03",
              "text": "기갑 실드가 파괴될 시, 근처의 적에게 1,620의 전격 대미지를 입히며 넉백시킨다.",
            },
            {
              "name": "충격 흡수 기갑",
              "rank": "S",
              "icon": "Skill_Nagative_Survive02",
              "text": "기갑 실드가 캐릭터 방어력의 100%만큼 방어력을 이어받는다.",
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
              "name": "기계의 공포",
              "icon": "Skill_Nagative_Survive02",
              "text": "차지하지 않고 공격하는 경우 적을 취약 상태로 만들어 10.0초 동안 방어력을 30.0% 감소시킨다.",
            },
            {
              "name": "에너지 과부하",
              "rank": "S",
              "icon": "Skill_Nagative_Damage03",
              "text": "차지 속도가 50.0% 상승하지만, 크리티컬률이 50% 감소한다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "교대기 - 실드 어택",
          "icon": "Skill_Bronya_ZP_002",
          "desc": "교대 시 실드 어택을 발동한다. / 실드 어택 : 공격력의 150%의 물리 대미지를 입히며 적을 넉백시킨다.",
          "sub": [
            {
              "name": "강력 충돌",
              "icon": "Skill_Nagative_Startup01",
              "text": "실드 어택에 맞은 적에게 1,125 의 물리 대미지를 추가로 입힌다.",
            },
            {
              "name": "QTE - 붕괴 실드",
              "icon": "Skill_Nagative_Startup02",
              "text": "적이 시공 감속 상태일 때 QTE 교대하면 발동된다. 실드 어택이 발동되며 공격력의 450%의 물리 대미지를 입히고 5.0초 동안 기절 상태로 만든다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "오버로드",
          "icon": "Skill_Bronya_BQ_004",
          "desc": "기갑 에너지의 리미터를 해제하여 오버로드 상태가 된다 / 오버로드 : 10 SP를 소모하여 발동 후, SP가 소진될 때까지 초당 10 SP씩 소모하며 슈퍼 아머 상태가 된다. / 스위치 : 발동 중 필살기 버튼을 눌러 오버로드 상태를 끝낼 수 있다. / 히트리셋 : 필살기 사용 시 레이저 무기의 히트 게이지를 초기화 한다.",
          "sub": [
            {
              "name": "공포 흡수",
              "icon": "Skill_Nagative_Damage02",
              "text": "오버로드 상태일 때, 취약 상태의 적을 주먹으로 공격할 때마다 전원의 HP를 108 회복",
            },
            {
              "name": "공포 수확",
              "icon": "Skill_Nagative_Skill03",
              "text": "오버로드 발동 시 취약 상태의 적을 10.0초 동안 시공 속박 상태로 만들고, 지속 시간 동안 취약 상태를 유지 시킨다.",
            },
            {
              "name": "광선 재생성",
              "icon": "Skill_Nagative_Skill01",
              "rank": "SSS",
              "text": "오버로드 상태에서 적을 처치할 때마다 전원의 HP를 299 회복",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "초차원 역장",
          "icon": "Skill_Bronya_BQ_003",
          "desc": "방패로 정면 공격을 방어한다. / 가드 카운터 : 공격을 받는 순간 방어 버튼을 떼면 적에게 반격한다. / 퍼펙트 가드 : 반격 시 5초간 모든 적의 행동이 느려지는 시공 단열을 발동한다. 쿨타임 15초",
          "sub": [
            {
              "name": "화염 방패",
              "icon": "Skill_Nagative_Skill01",
              "text": "원거리 공격도 방어하고 반격할 수 있다. 실드 어택이 적을 연소 상태로 만들고 10.0초 동안 0.5초마다 154의 화염 대미지를 입힌다.",
            },
            {
              "name": "투사체 반사",
              "icon": "Skill_Nagative_Skill02",
              "text": "원거리 공격을 반사하여, 투사체의 350%의 대미지를 입힌다.",
            },
            {
              "name": "역장 추진",
              "rank": "SS",
              "icon": "Skill_Nagative_Skill03",
              "text": "반격한 순간 전원의 SP를 4 회복",
            },
          ]
        },
      ],
    },
  }
}

export default BronyaC2