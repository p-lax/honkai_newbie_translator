const KianaC1 = {
  data: {
    "키아나_레인저": {
      "oName": "키아나 카스라나 - 발키리·레인저",
      "rank": "A",
      "bimg": "KianaC1",
      "type": "기계",
      "weapon": "쌍권총",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "성역의 노래",
          "icon": "Skill_Kiana_PT_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "가속",
              "icon": "Skill_Nagative_Damage01",
              "text": "파티원 전원의 이동 속도가 25% 상승한다. 기계 속성의 캐릭터는 공격 속도가 14% 추가 상승한다.",
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
              "icon": "Skill_Nagative_Damage02",
              "text": "실드에 입히는 대미지 60.0% 증가",
            },
            {
              "name": "유성 폭우",
              "icon": "Skill_Nagative_Damage01",
              "text": "공격으로 실드를 파괴했을 때, 적을 4.0초 동안 기절 상태로 만들고, 공격력의 100%만큼 물리 대미지를 입힌다.",
            },
            {
              "name": "혜성 폭격",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage03",
              "text": "크리티컬 대미지 10.0% 증가. 동결 상태의 적에게는 10.0% 추가 증가",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "나선의 과녁",
          "icon": "Skill_Kiana_FX_001",
          "desc": "빠르게 4번 사격한다. / 1단 : 공격력의 100%의 물리 대미지 / 2단 : 공격력의 100%의 물리 대미지 / 3단 : 공격력의 150%의 물리 대미지 / 4단 : 공격력의 250%의 물리 대미지",
          "sub": [
            {
              "name": "화력 집중의 유성",
              "icon": "Skill_Nagative_Damage02",
              "text": "동일한 적에게 연속 공격이 맞을 때마다 공격 속도가 2%씩, 최대 35%까지 상승한다.",
            },
            {
              "name": "회심 일격의 유성",
              "icon": "Skill_Nagative_Damage03",
              "text": "기본 공격 크리티컬 시 80%의 확률로 4.0초간 출혈 상태로 만들어 0.5초마다 255 물리 대미지를 입힌다.",
            },
            {
              "name": "QTE - 유성우",
              "icon": "Skill_Nagative_StartUp02",
              "text": "QTE : 적이 빙결 상태일 때 교대 시 발동. 단일 적에게 공격력의 600%의 물리 대미지를 입히며, 마지막 공격은 일정 범위에 공격력의 400.1%의 물리 대미지를 입히고, 취약 상태로 만들어 6초 동안 방어력 60%를 낮춘다",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "분기 공격 - 운석 충돌",
          "icon": "Skill_Kiana_FX_002",
          "desc": "3회 사격 후 강력한 사격을 발동 / 강력한 사격 : 직선상의 적에게 공격력의 350%의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "유성 충격",
              "icon": "Skill_Nagative_Damage01",
              "text": "분기 공격 크리티컬 시 50.0% 확률로 3.0초간 기절 상태로 만든다.",
            },
            {
              "name": "신성 폭발",
              "icon": "Skill_Nagative_Damage02",
              "rank": "S",
              "text": "분기 공격의 주 타깃에게 296의 물리 대미지를 추가로 입힌다.",
            },
            {
              "name": "유성 추락",
              "icon": "Skill_Nagative_Damage03",
              "rank": "SS",
              "text": "분기 공격 동안 경직 저항이 증가하고, 방어력이 60.0% 상승한다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "성운 연격",
          "icon": "Skill_Kiana_FX_004",
          "desc": "전방을 향해 대포를 발사한다. / 비과학포 : 공격력의 1200%의 물리 대미지를 입힌다. / 발동 시 소모 SP : 50",
          "sub": [
            {
              "name": "발키리 임팩트",
              "icon": "Skill_Nagative_Control01",
              "text": "필살기의 마지막 일격으로 5.0초 동안 적을 기절 상태로 만든다.",
            },
            {
              "name": "발키리 임펄스",
              "icon": "Skill_Nagative_Damage02",
              "rank": "S",
              "text": "필살기 사용 중 공격 버튼을 누를 때마다 371의 화염 대미지를 입힌다. (최대 15회)",
            },
            {
              "name": "발키리 홀릭",
              "icon": "Skill_Nagative_Damage03",
              "rank": "SSS",
              "text": "필살기의 크리티컬 대미지 20.0% 상승",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "시공 전이",
          "icon": "Skill_Kiana_FX_003",
          "desc": "적의 공격을 신속하게 회피한다. / 블랙홀 : 극한 회피 시, 공격한 적 주변의 적을 2초간 끌어당긴다. 쿨타임 10초",
          "sub": [
            {
              "name": "신성 질주",
              "icon": "Skill_Nagative_Survive01",
              "text": "회피 혹은 교대 이후 이동 속도가 4.0초 동안 70.0% 증가한다. 쿨타임 6초",
            },
            {
              "name": "시공의 반짝임",
              "icon": "Skill_Nagative_Survive03",
              "text": "블랙홀의 쿨타임이 3.0초 감소한다.",
            },
            {
              "name": "초신성 붕괴",
              "rank": "S",
              "icon": "Skill_Nagative_Survive02",
              "text": "블랙홀의 지속 시간을 5.0초로 연장하고, 범위가 6.0m 증가한다.",
            },
          ]
        },
      ],
    },
  }
}

export default KianaC1