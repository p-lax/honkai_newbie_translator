const KianaC3 = {
  data: {
    "키아나_성녀": {
      "oName": "키아나 카스라나 - 성녀의 기도",
      "rank": "A",
      "bimg": "KianaC3",
      "type": "이능",
      "weapon": "쌍권총",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "성운의 가호",
          "icon": "Skill_Kiana_PT_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "성운의 가호",
              "icon": "Skill_Nagative_Survive03",
              "text": "전원의 원소 대미지를 32% 증가, 받는 원소 피해량 26% 감소",
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
              "name": "천벌",
              "icon": "Skill_Nagative_Survive01",
              "text": "대기 중 10초마다 무작위 적에게 천벌을 내린다. 1,103의 전격 대미지를 입히고 취약 상태로 만들어 6.0초 동안 방어력을 80.0% 감소시킨다.",
            },
            {
              "name": "초신성의 반짝임",
              "rank": "SSS",
              "icon": "Skill_Nagative_Survive02",
              "text": "파티의 캐릭터가 전투 불능이 되기 직전 '키아나 - 성녀의 기도' 로 교체하고, 해당 캐릭터의 HP를 600만큼 회복시킨다. 전투 중 한번만 발동 된다.",
            },
            {
              "name": "신성한 빛",
              "rank": "S",
              "icon": "Skill_Nagative_Survive03",
              "text": "교대 시 캐릭터에게 걸려있는 대부분의 디버프를 지우고, 4.0초 동안 자신의 방어력을 50.0% 상승시킨다.",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "유성의 표적",
          "icon": "Skill_Kiana_PT_001",
          "desc": "4연속 발차기 / 1단 : 공격력의 100%의 물리 대미지 / 2단 : 공격력의 100%의 물리 대미지 / 3단 : 공격력의 100%의 물리 대미지 / 4단 : 일정 범위에 공격력의 300%의 물리 대미지",
          "sub": [
            {
              "name": "혜성 코어 수호",
              "icon": "Skill_Nagative_Control01",
              "text": "기본 공격이 15.0% 확률로 적을 허약 상태로 만들어 적의 공격력을 4초 동안 70.0% 감소시킨다.",
            },
            {
              "name": "성운 상승",
              "icon": "Skill_Nagative_Survive02",
              "text": "기본 공격 크리티컬 시 30.0% 확률로 전원의 HP를 50 회복시킨다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "분기 공격 - 유성의 화살",
          "icon": "Skill_Kiana_QN_002",
          "desc": "3연속 발차기 후 회전 킥과 날아 차기 / 회전 차기 : 공격력의 150%×3의 물리 대미지를 입힌다. / 날아 차기 : 공격력의 200%의 물리 대미지를 입히고 적을 넉백시킨다.",
          "sub": [
            {
              "name": "교대기 - 초신성의 불꽃",
              "icon": "Skill_Nagative_StartUp01",
              "text": "교대 시 앞차기를 하며 200%+ 공격력300% 의 물리 대미지를 입히고, 공중에 뜬 적에게 명중 시 5.0초 동안 기절 상태로 만든다.",
            },
            {
              "name": "QTE - 낙하 충격",
              "icon": "Skill_Nagative_StartUp03",
              "text": "QTE : 적이 마비 상태일 때 교대 시 발동. 발동 시 강력한 회오리를 일으키며, 240% 공격력+3,563의 물리 대미지를 입히고, 마지막 공격 적중 시, 전원의 HP 100 회복",
            },
            {
              "name": "낙하 집중 폭격",
              "icon": "Skill_Nagative_Damage03",
              "rank": "S",
              "text": "분기 공격 크리티컬률 40.0% 상승",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "발키리의 가호",
          "icon": "Skill_Kiana_QN_004",
          "desc": "신성한 에너지를 폭발시켜, 각성 상태가 된다. / 폭발 : SP를 계속 소모하여, 공격을 강화하고 시공 단열을 발동한다. / 오라 : 스킬 습득 이후 전원의 HP를 0.5초마다 회복시킨다. / 폭발 지속 : 폭발 시작 시 20 SP를 소모하고 이후 SP가 떨어질 때까지 초당 10 SP 씩 소모된다. 발동 20초 후 매초 SP 소모량 상승",
          "sub": [
            {
              "name": "발키리의 축복",
              "icon": "Skill_Nagative_Survive01",
              "text": "폭발상태 동안 0.5초마다 전 파티원의 HP를 67.2 회복한다. 소환물(분신 등)에도 적용된다.",
            },
            {
              "name": "발키리의 성수",
              "icon": "Skill_Nagative_Control03",
              "rank": "SS",
              "text": "폭발 상태 돌입 순간 전원의 HP를 320 회복",
            },
            {
              "name": "발키리의 폭류",
              "icon": "Skill_Nagative_Survive02",
              "rank": "SS",
              "text": "폭발 상태 중에는 전원의 이동 속도가 50%, 공격 속도가 30% 상승한다.",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "시간의 사슬",
          "icon": "Skill_Kiana_QN_003",
          "desc": "적의 공격을 신속하게 회피한다. / 시공 속박 : 극한 회피 시 4초 동안 공격한 적을 공중에 띄운 채로 고정시킨다. 쿨타임 8초",
          "sub": [
            {
              "name": "시공 냉각",
              "icon": "Skill_Nagative_Damage01",
              "text": "시간의 사슬 지속 시간이 8.0초 증가하며, 적을 출혈 상태로 만들어, 0.5초마다 공격력의 7.0% 빙결 대미지를 입힌다.",
            },
            {
              "name": "초신성 균열",
              "icon": "Skill_Nagative_Survive02",
              "text": "극한 회피 시 전원의 HP가 30.0 회복",
            },
            {
              "name": "시공의 반짝임",
              "rank": "S",
              "icon": "Skill_Nagative_Damage03",
              "text": "극한 회피 효과 발동 가능 횟수 1회 추가, 쿨타임 3.0초 감소",
            },
          ]
        },
      ],
    },
  }
}

export default KianaC3