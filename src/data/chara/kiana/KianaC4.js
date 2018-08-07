const KianaC4 = {
  data: {
    "키아나_월광": {
      "oName": "키아나 카스라나 - 백기사·월광",
      "rank": "S",
      "bimg": "KianaC4",
      "type": "생물",
      "weapon": "쌍권총",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "성운의 빛",
          "icon": "Skill_Kiana_PT_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "성운의 빛",
              "icon": "Skill_Nagative_Control02",
              "text": "전원의 크리티컬 대미지 40% 증가. 전원 생물 속성인 경우 추가로 모든 대미지 26% 증가",
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
              "name": "충격 공진",
              "icon": "Skill_Nagative_Damage02",
              "text": "기절/마비 상태인 적을 공격 시 물리 대미지와 원소 대미지가 150.0% 증가한다.",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "유성의 표적",
          "icon": "Skill_Kiana_FX_001",
          "desc": "빠르게 4번 사격한다. / 1단 : 공격력의 100%의 물리 대미지 / 2단 : 공격력의 100%의 물리 대미지 / 3단 : 공격력의 150%의 물리 대미지 / 4단 : 공격력의 100%×2의 물리 대미지",
          "sub": [
            {
              "name": "유성 산탄",
              "icon": "Skill_Nagative_Damage02",
              "text": "3발의 난사 공격으로 공격력의 100.0%의 물리 대미지를 입힌다. 타깃에서 멀리 떨어질수록 입히는 대미지가 감소한다.",
            },
            {
              "name": "운석 섬광",
              "icon": "Skill_Nagative_Control03",
              "text": "가까운 적에게 난사 공격으로 공격력의 70.0%의 물리 대미지를 입히며 SP를 소량 회복한다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "분기 공격 - 운석 소용돌이",
          "icon": "Skill_Kiana_YN_002",
          "desc": "3연속 사격 후 회전 사격 / 회전 사격 : 일정 범위에 공격력의 160%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "교대기 - 초신성 나선",
              "icon": "Skill_Nagative_StartUp01",
              "text": "교대 시 강력한 운석 소용돌이를 발동한다. QTE / 교대기로 공중에 뜬 적에게 입히는 모든 대미지가 50.0%만큼 증가한다.",
            },
            {
              "name": "쌍성의 소용돌이",
              "icon": "Skill_Nagative_Damage02",
              "text": "분기 공격 도중 공격 키를 연타하면 최대 6회까지 추가 공격한다.",
            },
            {
              "name": "회전 법칙",
              "icon": "Skill_Nagative_Damage03",
              "text": "운석 소용돌이가 근처의 적들에게 공격력의 40.0%의 물리 대미지를 입힌다. (최대 4회)",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "나선의 성운",
          "icon": "Skill_Kiana_YN_004",
          "desc": "발키리 대포를 소환하여 적에게 발사 / 과학포 : 공격력의 1900%의 물리 대미지를 입힌다. / 사용 시 소모 SP : 125",
          "sub": [
            {
              "name": "QTE - 빛의 날개",
              "icon": "Skill_Nagative_StartUp02",
              "text": "적이 공중에 뜬 상태에서 QTE 교대하면 발동된다. 공격력의 40.0%*최대 50회의 물리 대미지를 입힌다.",
            },
            {
              "name": "발키리의 폭발",
              "icon": "Skill_Nagative_Damage03",
              "text": "필살기의 마지막 공격이 SP를 전부 소모하고, 소모된 sp 1당 공격력 26.0%만큼 물리 대미지를 입힌다.",
            },
            {
              "name": "발키리의 여파",
              "icon": "Skill_Nagative_Damage01",
              "rank": "SS",
              "text": "필살기가 끝나면 5.0초 동안 유지되는 시공 단열을 발동한다.",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "시공의 틈새",
          "icon": "Skill_Kiana_PT_003",
          "desc": "적의 공격을 신속하게 회피한다. / 시공 단열 : 극한 회피 시 3초간 모든 적의 행동이 느려지는 시공 단열을 발동한다. 쿨타임 20초 / 시공 왜곡 : 자신이 발동시킨 시공 단열 도중에는 이동 속도가 대폭 상승한다.",
          "sub": [
            {
              "name": "시공의 여진",
              "icon": "Skill_Nagative_Control01",
              "text": "극한 회피가 아닌 상태에서도 시공 단열을 발동 시킬 수 있지만, 유지 시간이 3.0초로 감소한다. 극한 회피로 발동 시 3.0초 증가한다.",
            },
            {
              "name": "성운의 핵심",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage03",
              "text": "스테이지에서 시공 감속 상태의 적을 공격하면 물리 대미지가 5.0% 증가한다. (최대 10회 중첩)",
            },
            {
              "name": "시공의 반짝임",
              "rank": "SSS",
              "icon": "Skill_Nagative_Control02",
              "text": "극한 회피 효과 발동 가능 횟수 1회 추가, 쿨타임 2.0초 감소",
            },
          ]
        },
      ],
    },
  }
}

export default KianaC4