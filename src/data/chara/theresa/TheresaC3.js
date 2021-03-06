const TheresaC3 = {
  data: {
    "테레사_앵화윤무": {
      "oName": "테레사 아포칼립스 - 앵화윤무",
      "rank": "A",
      "bimg": "TheresaC3",
      "type": "이능",
      "weapon": "십자가",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "제례의 춤",
          "icon": "Skill_Theresa_YD_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "제례의 춤",
              "icon": "Skill_Nagative_Damage03",
              "text": "파티원 전원의 공중에 뜬 적에게 가하는 대미지가 24% 상승한다. 전원의 캐릭터 속성이 모두 다르면 속성 대미지가 18% 추가 상승한다.",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Theresa_YD_006",
          "desc": "패시브 스킬은 자동으로 발동된다. / 붉은 벚꽃 표식 : 적에게 붉은 벚꽃 카운터를 3회 이상 쌓으면 카운터를 초기화하고 10초 동안 유지되는 붉은 벚꽃 표식을 새긴다.",
          "sub": [
            {
              "name": "세상에서 제일 귀여워!",
              "icon": "Skill_Nagative_Survive03",
              "text": "전투 중 초기 SP가 30.0 증가 / 오픈 월드에서는 10분에 한 번씩 발동 가능",
            },
            {
              "name": "내 귀에 손대지 마!",
              "icon": "Skill_Nagative_Damage02",
              "rank": "S",
              "text": "빙결, 마비 상태의 적을 공격하면 454의 화염 대미지를 추가로 입힌다.",
            },
            {
              "name": "한 곡 추실래요?",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage03",
              "text": "십자가를 전개하면 7.50초 동안 전원의 원소 대미지가 23.4% 증가한다.",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "여우 불꽃 칼날",
          "icon": "Skill_Theresa_FY_001",
          "desc": "기본 공격 : 영체로 된 태도로 중거리를 4회 공격한다. / 1단 : 공격력 40%*3회의 물리 대미지를 입힌다. / 2단 : 공격력 40%*3회의 물리 대미지를 입힌다. / 3단 : 공격력 150%의 물리 대미지를 입힌다. / 4단 : 태도 두 자루를 꺼내 한 자루당 공격력의 40%*3회의 물리 대미지를 입힌다. / 5단 : 공격력의 180%의 물리 대미지를 입힌다. / 기본 공격 3, 5단은 적에게 붉은 벚꽃 카운터를 하나씩 쌓는다.",
          "sub": [
            {
              "name": "혼령 소각",
              "icon": "Skill_Nagative_Damage01",
              "text": "기본 공격과 필살기 5연격에 20.0% 확률로 적을 연소 상태로 만들고, 4초 동안 0.5초마다 199의 화염 대미지를 입힌다. 쿨타임 6초",
            },
            {
              "name": "업화",
              "icon": "Skill_Nagative_Damage02",
              "text": "기본 공격과 필살기 3연격, 5연격이 명중 시 적에게 3*449의 화염 대미지를 추가로 입힌다.",
            },
            {
              "name": "유구의 낙인",
              "icon": "Skill_Nagative_Damage03",
              "rank": "S",
              "text": "빛의 창에 맞은 적은 2.40초 동안 속박 상태가 된다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "벚꽃 여우불",
          "icon": "Skill_Theresa_FY_002",
          "desc": "5연격 시 차지하여 여우불을 폭발시킨다. / 기본 공격과 필살기 5연격 중 공격 버튼을 누르고 있으면 차지하고, 풀 차지하면 여우불을 발사하여 타깃과 타깃 주변의 적에게 공격력의 50%*3회의 화염 대미지를 입힌다. / 여우불은 붉은 벚꽃 표식을 불태워 1초 후 공격력의 300%의 화염 대미지를 입히는 폭발을 일으키고 적을 공중에 띄운다.",
          "sub": [
            {
              "name": "교대기 - 영령의 칼날",
              "icon": "Skill_Nagative_StartUp01",
              "text": "교대 : 두 자루의 비검을 날려서 한 자루당 공격력의 3*250.0%의 물리 대미지를 입히고 적을 다운시킨다.",
            },
            {
              "name": "폭연",
              "icon": "Skill_Nagative_Damage02",
              "text": "작앵 표식의 폭발로 인한 대미지에 공격력의 621%의 화염 대미지가 추가된다. 붉은 혼 상태가 아닐 때, 여우불을 발사하여 붉은 벚꽃 표식이 생길때마다 5.0 SP를 회복된다.",
            },
            {
              "name": "QTE - 삼중 영령의 칼날",
              "icon": "Skill_Nagative_StartUp03",
              "rank": "S",
              "text": "QTE : 적이 마비에 걸리면 발동 : 목표 지점과 자신 주변에 3개의 검기를 발사하여, 검기 하나당 공격력의 324.0% 의 물리 대미지를 입히고 붉은 벚꽃 카운터를 하나 쌓는다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "붉은 혼의 폭주",
          "icon": "Skill_Theresa_FY_004",
          "desc": "에너지를 폭발시켜 붉은 혼 상태가 되며 경직 저항력이 상승한다. / 발동 시 넓은 범위를 세 번 연속으로 베며, 매 회 공격력의 100%의 물리 대미지를 입히고 붉은 벚꽃 카운터를 하나씩 쌓는다. / 붉은 혼 상태: 5연격이 화염 대미지를 입히는 필살 5연격으로 바뀌고, 대미지가 상승하며 불타는 붉은 벚꽃 표식이 된다. / 3단, 5단은 적에게 붉은 벚꽃 카운터를 하나씩 쌓는다. / 폭발 지속 : 폭발 시 20SP를 소모하고, 이후 SP가 떨어질 때까지 초당 8 SP씩 소모된다. / 발동 시 요구 SP : 100",
          "sub": [
            {
              "name": "불꽃의 정령",
              "icon": "Skill_Nagative_Damage03",
              "text": "붉은 혼 상태에서 화염 대미지가 50.0% 증가",
            },
            {
              "name": "붉은 벚꽃 각인",
              "rank": "S",
              "icon": "Skill_Nagative_Damage02",
              "text": "필살기의 세 번째, 다섯 번째 공격으로 적에게 1개의 붉은 벚꽃 카운터를 쌓고, 공격력의 180.0%의 물리 대미지를 추가로 입힌다.",
            },
            {
              "name": "수호령",
              "rank": "SSS",
              "icon": "Skill_Nagative_Survive03",
              "text": "붉은 혼 상태에서 받는 피해가 52.1% 감소, 대부분의 상태 이상 효과의 지속 시간이 70% 감소, 공격 속도 45.1% 증가",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "염화검무",
          "icon": "Skill_Theresa_FY_003",
          "desc": "연속으로 2회까지 빠르게 회전하여 회피한다. / 극한 회피 : 자신 주변에 3개의 검기를 폭발시켜, 검기 하나당 공격력의 10%만큼 물리 대미지를 입히고 3초간 자신의 이동 속도를 40% 상승 시킨다. / 염화검무 : 검기 하나당 붉은 벚꽃 카운터를 하나씩 쌓으며, 짧은 시간 안에 공격 버튼을 다시 누르면 여우불을 차지 없이 사용할 수 있다.",
          "sub": [
            {
              "name": "열염 검무",
              "icon": "Skill_Nagative_Damage01",
              "text": "극한 회피로 자신 주변의 검기를 강화하여 검기마다 공격력의 50.1%의 화염 대미지를 추가시킨다.",
            },
            {
              "name": "적염 검무",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage02",
              "text": "극한 회피의 쿨타임이 3.40초 감소하고, 검기 하나당 18.5% 확률로 적을 출혈 상태로 만들어 3.5초 동안 0.5초마다 152의 물리 대미지를 입힌다.",
            },
          ]
        },
      ],
    },
  }
}

export default TheresaC3