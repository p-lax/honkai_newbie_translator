const BronyaC5 = {
  data: {
    "브로냐_은랑": {
      "oName": "브로냐 자이칙 - 은랑의 여명",
      "rank": "A",
      "bimg": "BronyaC5",
      "type": "이능",
      "weapon": "중화기",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "싱크로",
          "icon": "Skill_Bronya_ZP_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "싱크로",
              "link": true,
              "icon": "Skill_Nagative_Damage02",
              "text": "30콤보 초과 시 전원의 크리티컬률이 26% 증가하고, 이능 캐릭터의 크리티컬 대미지가 29% 증가",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Bronya_ZP_006",
          "desc": "패시브 스킬은 자동으로 발동된다. / 중장 토끼의 HP가 소진되면 기능 마비 상태가 되고, 초당 5%의 HP를 회복한다. 캐릭터가 중장 토끼 근처에 있으면 구조할 수 있으며, 초당 30%의 HP를 회복한다. HP가 전부 회복되면 재기동한다. / 중장 토끼 : 재기동 시 주위의 적들을 넉백시킨다. 은랑이 근처에 있으면, 중장 토끼의 공격력이 10초간 60% 상승한다.",
          "sub": [
            {
              "name": "생물 수호",
              "link": true,
              "icon": "Skill_Nagative_Damage01",
              "text": "전 파티원에게 원소 피해를 막는 실드를 씌운다. 실드의 HP는 1,000이며, 6.0초 동안 공격당하지 않으면 실드의 HP를 완전 회복한다.",
            },
            {
              "name": "프리즘 리플렉션",
              "icon": "Skill_Nagative_Skill03",
              "text": "실드가 남아있을 때, 원소 대미지가 30.0% 상승한다. 중장 토끼가 캐릭터 대미지의 5%를 추가로 적용받는다.",
            },
            {
              "name": "양자 복귀",
              "rank": "S",
              "icon": "Skill_Nagative_Survive02",
              "text": "실드가 남아있을 때, 45.0%의 확률로 상태이상에 걸리지 않는다. 중장 토끼가 캐릭터의 방어력을 100% 적용받는다.",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "차지 - 중입자포",
          "icon": "Skill_Bronya_ZP_001",
          "desc": "차지할수록 강력해지는 포격 / 장비한 무기에 따라 차지 공격이 바뀐다. / 차지하지 않은 기본 공격에 맞은 적은 중장 토끼의 특수 공격 목표가 된다.",
          "sub": [
            {
              "name": "기갑 억제",
              "link": true,
              "icon": "Skill_Nagative_Survive02",
              "text": "차지하지 않은 공격이 적을 허약 상태로 만들고 6.00초간 적의 공격력을 50.0% 감소시킨다.",
            },
            {
              "name": "핀포인트 조준",
              "rank": "S",
              "icon": "Skill_Nagative_Damage03",
              "text": "중장 토끼가 허약 상태의 적에게 가하는 물리 대미지가 60.0% 상승한다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "폭렬 돌격",
          "icon": "Skill_Bronya_ZP_002",
          "desc": "교대 시 실드 어택을 발동한다. / 실드 어택 : 적에게 250%의 물리 대미지를 입히며 스스로 전투하는 중장 토끼를 소환한다. / 중장 토끼는 캐릭터 교대 당시 공격력의 40%, 방어력의 100%, HP의 400%, 원소 방어력 50%를 이어받으며 대부분의 CC기에 면역된다. 이로 인해 캐릭터의 공격력이 20% 감소한다.",
          "sub": [
            {
              "name": "폭렬 돌격",
              "link": true,
              "icon": "Skill_Nagative_StartUp01",
              "text": "실드 어택에 맞은 적에게 1,125의 물리 대미지를 입힌다. 중장 토끼가 캐릭터 공격력의 20.0% 를 적용받는다.",
            },
            {
              "name": "QTE - 체공 에너지",
              "link": true,
              "icon": "Skill_Nagative_StartUp02",
              "text": "QTE : 적이 시공 감속일 때 발동. 중장 토끼는 적에게 폭렬 돌격 스킬을 사용하고, 캐릭터는 공격력의 550%의 대미지를 입히고 적을 5.0초간 기절시킨다.",
            },
            {
              "name": "원격 제어",
              "icon": "Skill_Nagative_StartUp03",
              "text": "캐릭터가 필드를 떠나도 중장 토끼는 12.0초간 필드에 남아있는다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "우레의 일격",
          "icon": "Skill_Bronya_XT_004",
          "desc": "강렬한 공명을 통해 중장 토끼에게 강력한 공격을 전개시킨다. / 공명 : 중장 토끼가 3차례 지면을 강력하게 내려찍고, 작은 범위의 적에게 대미지를 입히며 기절 상태로 만들며, 허약 상태인 적을 5초 동안 시공 속박 상태로 만든다. / 발동 시 55 SP 소모 / 1차 : 중장 토끼 공격력의 275% 물리 대미지 / 2차 : 중장 토끼 공격력의 425% 물리 대미지 / 3차 : 중장 토끼 공격력의 575% 물리 대미지",
          "sub": [
            {
              "name": "폭주 동기화",
              "icon": "Skill_Nagative_Damage02",
              "text": "필살기 사용 후, 중장 토끼의 체력이 60.0% 회복되고, 캐릭터와 중장 토끼의 물리 대미지가10.0초간 30.0% 상승한다.",
            },
            {
              "name": "자기장 제어",
              "icon": "Skill_Nagative_Skill03",
              "text": "필살기 사용 도중, 중장 토끼가 적의 실드에 가하는 대미지가 100.0% 상승한다. 허약 상태의 적에게 추가로 180.0%만큼 물리 대미지를 입힌다.",
            },
            {
              "name": "인력 견제",
              "icon": "Skill_Nagative_Skill01",
              "rank": "SSS",
              "text": "지면 타격 시 중장 토끼 주변 큰 범위에 있는 적에게 중장 토끼를 순간 돌진시켜 적에게 2,500만큼 물리 대미지를 입힌다.",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "허수 시공의 반짝임",
          "icon": "Skill_Bronya_ZP_003",
          "desc": "잠시 다른 차원으로 들어가 적의 공격을 회피한다. / 허수 시공의 반짝임 : 극한 회피 시 중장 토끼를 소환하여 적을 공격하여 공격력의 350% 물리 대미지를 입히고 3초간 시공 단열을 발동한다. 쿨타임 15초. / 중장 토끼가 기능 마비 상태일 경우 극한 회피하면 중장 토끼의 체력을 50% 회복한다.",
          "sub": [
            {
              "name": "대응 모듈",
              "icon": "Skill_Nagative_Skill01",
              "text": "허수 시공의 반짝임 발동 시 중장 토끼의 체력을 25.0% 회복하고, 중장 토끼의 공격력이 10초간 30.0% 상승한다.",
            },
            {
              "name": "카운터 회로",
              "icon": "Skill_Nagative_Skill02",
              "text": "허수 시공의 반짝임의 쿨타임이 4.00초 감소한다.",
            },
            {
              "name": "무장 속행",
              "rank": "SS",
              "link": true,
              "icon": "Skill_Nagative_Skill03",
              "text": "극한 회피 시 전 파티원의 SP를 5.0 회복한다.",
            },
          ]
        },
      ],
    },
  }
}

export default BronyaC5