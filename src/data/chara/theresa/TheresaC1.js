const TheresaC1 = {
  data: {
    "테레사_서약": {
      "oName": "테레사 아포칼립스 - 발키리·서약",
      "rank": "A",
      "bimg": "TheresaC1",
      "type": "이능",
      "weapon": "십자가",
      "skill": [
        {
          "tag": "리더 스킬",
          "name": "성역의 노래",
          "icon": "Skill_Theresa_YD_005",
          "desc": "리더로 배치 시 다음 효과가 발동된다.",
          "sub": [
            {
              "name": "우리의 서약",
              "icon": "Skill_Nagative_Skill03",
              "text": "파티원의 대부분 상태 이상 지속 시간을 40% 감소시키고, 이능 속성의 캐릭터의 원소 대미지를 24% 증가시킨다.",
            },
          ]
        },
        {
          "tag": "패시브",
          "name": "패시브",
          "icon": "Skill_Theresa_YD_006",
          "desc": "패시브 스킬은 자동으로 발동된다.",
          "sub": [
            {
              "name": "세상에서 제일 귀여워!",
              "icon": "Skill_Nagative_Survive02",
              "text": "전투 중 초기 SP가 30.0 증가 / 오픈 월드에서는 10분에 한 번씩 발동 가능",
            },
            {
              "name": "진지하게 간다!",
              "icon": "Skill_Nagative_Damage02",
              "rank": "S",
              "text": "십자가를 전개하고 있는 동안, 자신의 공격 속도 50.0% 상승",
            },
            {
              "name": "뇌정 파격",
              "rank": "SS",
              "icon": "Skill_Nagative_Damage03",
              "text": "콤보 수가 50 이상일 때, 다음 차지 공격의 매 타격마다 콤보 수*56 포인트의 전격 대미지를 추가로 입히고 적을 다운시키며 콤보를 초기화한다. 최대 적용 콤보 수는 126 콤보",
            },
          ]
        },
        {
          "tag": "기본 공격",
          "name": "신성한 창",
          "icon": "Skill_Theresa_YD_001",
          "desc": "기본 공격 : 영체로 된 빛의 창으로 중거리를 4회 공격한다. / 1단 : 공격력의 30%*3회 물리 대미지를 입힌다. / 2단 : 공격력의 30%*3회 물리 대미지를 입힌다. / 3단 : 공격력의 45%*4회 물리 대미지를 입힌다. / 4단 : 넓은 범위에 공격력의 75%*3회 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "번개의 창",
              "icon": "Skill_Nagative_Damage01",
              "text": "기본 공격(차지 공격 포함)이 명중하면 8.0% 확률로 적을 빛의 창으로 찌르고 2,400의 전격 대미지를 입힌다. 쿨타임 3초",
            },
            {
              "name": "속박의 창",
              "icon": "Skill_Nagative_Control02",
              "rank": "S",
              "text": "빛의 창에 맞은 적은 2.40초 동안 속박 상태가 된다.",
            },
            {
              "name": "번개의 축복",
              "icon": "Skill_Nagative_Damage03",
              "rank": "S",
              "text": "콤보 수가 30을 넘으면, 기본 공격에 타격마다 180의 전격 대미지가 추가된다.",
            },
          ]
        },
        {
          "tag": "특수 스킬",
          "name": "차지 - 세인트 피어싱",
          "icon": "Skill_Theresa_YD_002",
          "desc": "누르고 있으면 차지되며, 풀 차지 시 관통 효과를 얻는다. / 세인트 피어싱 : 공격력의 135%*3회의 물리 대미지를 입힌다. / 풀차지가 아니면 공격력의 30%*3회의 물리 대미지를 입힌다.",
          "sub": [
            {
              "name": "차지 관통",
              "icon": "Skill_Nagative_Damage02",
              "text": "기본 공격 4연격 중 어느 때나 차지가 가능해진다. / 세인트 피어싱이 타격마다 13.4% 확률로 적에게 1,680의 전격 대미지를 추가로 입히고 2초 동안 마비 상태로 만든다.",
            },
            {
              "name": "교대기 - 성스러운 창",
              "icon": "Skill_Nagative_StartUp02",
              "text": "교대 : 세인트 피어싱을 발동하여 적에게 3*211%의 물리 대미지를 입힌다.",
            },
            {
              "name": "QTE - 삼연속 성스러운 창",
              "icon": "Skill_Nagative_StartUp03",
              "rank": "S",
              "text": "QTE : 빙결시 발동 : 3자루의 세인트 피어싱을 날려 타격마다 3*190%의 물리 대미지를 입힌다.",
            },
          ]
        },
        {
          "tag": "필살기",
          "name": "성뢰 투창",
          "icon": "Skill_Theresa_YD_004",
          "desc": "영체로 된 빛의 창을 공중으로 던져 빛의 비로 만들어 적에게 쏟아붓는다. / 성뢰투창 : 공격력의 75%*25회의 물리 대미지를 입힌다. / 발동 시 소모 SP : 75",
          "sub": [
            {
              "name": "침식의 번개",
              "icon": "Skill_Nagative_Damage02",
              "text": "필살기의 매 타격이 18.01% 확률로 적을 취약 상태로 만들어 방어력 80.0% 와 경직 저항력을 감소시킨다. 2초 지속.",
            },
            {
              "name": "심판의 번개",
              "icon": "Skill_Nagative_Damage03",
              "text": "필살기가 명중할 때마다 타격 당 300의 전격 대미지를 추가로 입힌다.",
            },
          ]
        },
        {
          "tag": "회피",
          "name": "시공의 가호",
          "icon": "Skill_Theresa_YD_003",
          "desc": "연속으로 2회까지 빠르게 회전하여 회피한다. / 극한 회피 후 3초간 이동 속도가 40% 상승한다. / 시공 단열 : 극한 회피 시 3초간 모든 적의 행동이 느려지는 시공 단열을 발동한다. 쿨타임 15초",
          "sub": [
            {
              "name": "강화의 가호",
              "icon": "Skill_Nagative_Survive01",
              "text": "시공 단열 지속 시간 2.50초 증가",
            },
            {
              "name": "시공의 반짝임",
              "icon": "Skill_Nagative_Survive02",
              "text": "극한 회피 쿨타임 4.00초 감소",
            },
            {
              "name": "신의 은총",
              "rank": "SSS",
              "icon": "Skill_Nagative_Damage02",
              "text": "극한 회피로 발동된 시공 단열에서 처음 전개된 십자가의 대미지 45.0% 증가",
            },
          ]
        },
      ],
      "equip": [
        ["유다 세팅", "유다 섹수오"],
        ["급식셋 (*효율낮음)", "화염의천사 기원3셋"],
      ]
    },
  }
}

export default TheresaC1