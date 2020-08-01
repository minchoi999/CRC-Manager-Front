import clanService from '@/services/clanService'

let defaultData = {
  "tag": "#PPJ0Y88Q",
  "name": "Avengers",
  "type": "open",
  "description": "가입후 따듯한 인사 한마디 부탁드립니다. 승급기준: 지원율 1위 또는 마블캐릭터 이름변경. 추방:수집일3회 완료 실패,클전 미공격, 3일이상 미접속. 어벤져스 어셈블!",
  "badgeId": 16000047,
  "clanScore": 53427,
  "clanWarTrophies": 3192,
  "location": {
      "id": 57000216,
      "name": "South Korea",
      "countryCode": "KR",
      "country": false
  },
  "requiredTrophies": 5000,
  "donationsPerWeek": 9262,
  "clanChestStatus": "inactive",
  "clanChestLevel": 1,
  "clanChestMaxLevel": 0,
  "members": 50,
  "memberList": [
      {
          "arena": {
              "name": "Master III",
              "id": 54000017
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T213627.000Z",
          "tag": "#P9JV0JGQY",
          "role": "leader",
          "expLevel": 13,
          "trophies": 5654,
          "clanRank": 1,
          "previousClanRank": 1,
          "donations": 150,
          "donationsReceived": 232
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T110502.000Z",
          "tag": "#22GG0G0VV",
          "role": "member",
          "expLevel": 13,
          "trophies": 5599,
          "clanRank": 2,
          "previousClanRank": 2,
          "donations": 646,
          "donationsReceived": 400
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T140808.000Z",
          "tag": "#2RVV0UYG0",
          "role": "member",
          "expLevel": 12,
          "trophies": 5587,
          "clanRank": 3,
          "previousClanRank": 3,
          "donations": 116,
          "donationsReceived": 160
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T175531.000Z",
          "tag": "#Q9289J2J",
          "role": "member",
          "expLevel": 11,
          "trophies": 5533,
          "clanRank": 4,
          "previousClanRank": 6,
          "donations": 118,
          "donationsReceived": 160
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200729T083508.000Z",
          "tag": "#2PUUJPCCY",
          "role": "member",
          "expLevel": 12,
          "trophies": 5527,
          "clanRank": 5,
          "previousClanRank": 4,
          "donations": 40,
          "donationsReceived": 0
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T150248.000Z",
          "tag": "#2LUPC8Q8L",
          "role": "member",
          "expLevel": 11,
          "trophies": 5494,
          "clanRank": 6,
          "previousClanRank": 9,
          "donations": 56,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200730T085828.000Z",
          "tag": "#9PQ9RY00",
          "role": "member",
          "expLevel": 12,
          "trophies": 5474,
          "clanRank": 7,
          "previousClanRank": 7,
          "donations": 38,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T115923.000Z",
          "tag": "#9YRCU9QQC",
          "role": "coLeader",
          "expLevel": 12,
          "trophies": 5445,
          "clanRank": 8,
          "previousClanRank": 5,
          "donations": 512,
          "donationsReceived": 480
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T023754.000Z",
          "tag": "#222UQ88P",
          "role": "coLeader",
          "expLevel": 12,
          "trophies": 5396,
          "clanRank": 9,
          "previousClanRank": 10,
          "donations": 65,
          "donationsReceived": 280
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T161355.000Z",
          "tag": "#9990ULGUC",
          "role": "member",
          "expLevel": 13,
          "trophies": 5395,
          "clanRank": 10,
          "previousClanRank": 8,
          "donations": 471,
          "donationsReceived": 440
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T052853.000Z",
          "tag": "#9CLUYUL2L",
          "role": "coLeader",
          "expLevel": 12,
          "trophies": 5365,
          "clanRank": 11,
          "previousClanRank": 11,
          "donations": 84,
          "donationsReceived": 240
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T152108.000Z",
          "tag": "#9QU0GPVPV",
          "role": "member",
          "expLevel": 12,
          "trophies": 5348,
          "clanRank": 12,
          "previousClanRank": 12,
          "donations": 20,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Master II",
              "id": 54000016
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T174927.000Z",
          "tag": "#8VRU9YP0",
          "role": "coLeader",
          "expLevel": 13,
          "trophies": 5308,
          "clanRank": 13,
          "previousClanRank": 13,
          "donations": 447,
          "donationsReceived": 430
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T144125.000Z",
          "tag": "#RPLGRY0",
          "role": "coLeader",
          "expLevel": 13,
          "trophies": 5293,
          "clanRank": 14,
          "previousClanRank": 14,
          "donations": 793,
          "donationsReceived": 440
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200726T065439.000Z",
          "tag": "#29CR2YVQ0",
          "role": "member",
          "expLevel": 12,
          "trophies": 5287,
          "clanRank": 15,
          "previousClanRank": 15,
          "donations": 0,
          "donationsReceived": 0
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T205615.000Z",
          "tag": "#U0G2ULV9",
          "role": "member",
          "expLevel": 12,
          "trophies": 5277,
          "clanRank": 16,
          "previousClanRank": 20,
          "donations": 382,
          "donationsReceived": 160
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T122025.000Z",
          "tag": "#9L280UVCG",
          "role": "member",
          "expLevel": 11,
          "trophies": 5255,
          "clanRank": 17,
          "previousClanRank": 18,
          "donations": 91,
          "donationsReceived": 200
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T080653.000Z",
          "tag": "#2QCL20Q9P",
          "role": "elder",
          "expLevel": 12,
          "trophies": 5229,
          "clanRank": 18,
          "previousClanRank": 17,
          "donations": 42,
          "donationsReceived": 120
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T214120.000Z",
          "tag": "#CJ28YPGC",
          "role": "member",
          "expLevel": 12,
          "trophies": 5225,
          "clanRank": 19,
          "previousClanRank": 34,
          "donations": 98,
          "donationsReceived": 360
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T053345.000Z",
          "tag": "#PUPCCLRC9",
          "role": "coLeader",
          "expLevel": 11,
          "trophies": 5216,
          "clanRank": 20,
          "previousClanRank": 19,
          "donations": 141,
          "donationsReceived": 200
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T220153.000Z",
          "tag": "#22LVPYJ8",
          "role": "elder",
          "expLevel": 12,
          "trophies": 5206,
          "clanRank": 21,
          "previousClanRank": 23,
          "donations": 144,
          "donationsReceived": 144
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T120228.000Z",
          "tag": "#22PQV8GL",
          "role": "member",
          "expLevel": 12,
          "trophies": 5196,
          "clanRank": 22,
          "previousClanRank": 21,
          "donations": 203,
          "donationsReceived": 40
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T132531.000Z",
          "tag": "#UPJGYG2U",
          "role": "member",
          "expLevel": 11,
          "trophies": 5196,
          "clanRank": 23,
          "previousClanRank": 25,
          "donations": 30,
          "donationsReceived": 0
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T154408.000Z",
          "tag": "#2PV9UC0JR",
          "role": "member",
          "expLevel": 12,
          "trophies": 5185,
          "clanRank": 24,
          "previousClanRank": 26,
          "donations": 20,
          "donationsReceived": 40
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T101720.000Z",
          "tag": "#L0LR90PL",
          "role": "member",
          "expLevel": 10,
          "trophies": 5176,
          "clanRank": 25,
          "previousClanRank": 39,
          "donations": 555,
          "donationsReceived": 320
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T194031.000Z",
          "tag": "#QRJRPV8V",
          "role": "member",
          "expLevel": 11,
          "trophies": 5156,
          "clanRank": 26,
          "previousClanRank": 22,
          "donations": 118,
          "donationsReceived": 240
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T115931.000Z",
          "tag": "#Y9PQ9PGLV",
          "role": "elder",
          "expLevel": 12,
          "trophies": 5154,
          "clanRank": 27,
          "previousClanRank": 16,
          "donations": 158,
          "donationsReceived": 120
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200730T055937.000Z",
          "tag": "#8CCP2YPJL",
          "role": "elder",
          "expLevel": 13,
          "trophies": 5152,
          "clanRank": 28,
          "previousClanRank": 27,
          "donations": 163,
          "donationsReceived": 320
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T162635.000Z",
          "tag": "#JP0QPCQV",
          "role": "member",
          "expLevel": 12,
          "trophies": 5147,
          "clanRank": 29,
          "previousClanRank": 28,
          "donations": 0,
          "donationsReceived": 40
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T141046.000Z",
          "tag": "#2VCPPCU08",
          "role": "member",
          "expLevel": 12,
          "trophies": 5114,
          "clanRank": 30,
          "previousClanRank": 29,
          "donations": 250,
          "donationsReceived": 280
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200729T051753.000Z",
          "tag": "#8CLGY2PJ",
          "role": "member",
          "expLevel": 11,
          "trophies": 5114,
          "clanRank": 31,
          "previousClanRank": 30,
          "donations": 0,
          "donationsReceived": 40
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T135524.000Z",
          "tag": "#22UPUGVV2",
          "role": "member",
          "expLevel": 11,
          "trophies": 5114,
          "clanRank": 32,
          "previousClanRank": 35,
          "donations": 98,
          "donationsReceived": 320
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T162818.000Z",
          "tag": "#99229Q2Q9",
          "role": "member",
          "expLevel": 11,
          "trophies": 5112,
          "clanRank": 33,
          "previousClanRank": 31,
          "donations": 253,
          "donationsReceived": 240
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200727T090821.000Z",
          "tag": "#PG0PQP92R",
          "role": "member",
          "expLevel": 10,
          "trophies": 5109,
          "clanRank": 34,
          "previousClanRank": 32,
          "donations": 21,
          "donationsReceived": 40
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T214617.000Z",
          "tag": "#2VQLYQPY9",
          "role": "member",
          "expLevel": 13,
          "trophies": 5095,
          "clanRank": 35,
          "previousClanRank": 36,
          "donations": 225,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T193317.000Z",
          "tag": "#2UP2JG8YP",
          "role": "member",
          "expLevel": 11,
          "trophies": 5085,
          "clanRank": 36,
          "previousClanRank": 37,
          "donations": 147,
          "donationsReceived": 120
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T154054.000Z",
          "tag": "#2CGJ0CJL0",
          "role": "member",
          "expLevel": 11,
          "trophies": 5066,
          "clanRank": 37,
          "previousClanRank": 38,
          "donations": 92,
          "donationsReceived": 120
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T175037.000Z",
          "tag": "#29LQPRYR",
          "role": "member",
          "expLevel": 11,
          "trophies": 5057,
          "clanRank": 38,
          "previousClanRank": 40,
          "donations": 157,
          "donationsReceived": 160
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200730T110213.000Z",
          "tag": "#2UQVPGQJR",
          "role": "member",
          "expLevel": 10,
          "trophies": 5041,
          "clanRank": 39,
          "previousClanRank": 41,
          "donations": 195,
          "donationsReceived": 0
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T034057.000Z",
          "tag": "#2YVR9JQV2",
          "role": "member",
          "expLevel": 11,
          "trophies": 5029,
          "clanRank": 40,
          "previousClanRank": 42,
          "donations": 112,
          "donationsReceived": 200
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T164258.000Z",
          "tag": "#P98V9VP9Y",
          "role": "member",
          "expLevel": 10,
          "trophies": 5009,
          "clanRank": 41,
          "previousClanRank": 33,
          "donations": 361,
          "donationsReceived": 400
      },
      {
          "arena": {
              "name": "Master I",
              "id": 54000015
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T031345.000Z",
          "tag": "#VQ899GJ2",
          "role": "member",
          "expLevel": 13,
          "trophies": 5007,
          "clanRank": 42,
          "previousClanRank": 43,
          "donations": 20,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Challenger III",
              "id": 54000014
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T221408.000Z",
          "tag": "#9UUVVLRUL",
          "role": "coLeader",
          "expLevel": 13,
          "trophies": 4972,
          "clanRank": 43,
          "previousClanRank": 44,
          "donations": 866,
          "donationsReceived": 480
      },
      {
          "arena": {
              "name": "Challenger III",
              "id": 54000014
          },
          "clanChestPoints": 0,
          "lastSeen": "20200730T225236.000Z",
          "tag": "#8YYJCLGJQ",
          "role": "member",
          "expLevel": 11,
          "trophies": 4964,
          "clanRank": 44,
          "previousClanRank": 45,
          "donations": 16,
          "donationsReceived": 200
      },
      {
          "arena": {
              "name": "Challenger III",
              "id": 54000014
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T143400.000Z",
          "tag": "#29YVVCU9P",
          "role": "member",
          "expLevel": 12,
          "trophies": 4909,
          "clanRank": 45,
          "previousClanRank": 24,
          "donations": 50,
          "donationsReceived": 120
      },
      {
          "arena": {
              "name": "Challenger III",
              "id": 54000014
          },
          "clanChestPoints": 0,
          "lastSeen": "20200730T035112.000Z",
          "tag": "#29YRC9RVL",
          "role": "member",
          "expLevel": 10,
          "trophies": 4872,
          "clanRank": 46,
          "previousClanRank": 46,
          "donations": 0,
          "donationsReceived": 0
      },
      {
          "arena": {
              "name": "Challenger III",
              "id": 54000014
          },
          "clanChestPoints": 0,
          "lastSeen": "20200730T025105.000Z",
          "tag": "#LGQ090VY0",
          "role": "elder",
          "expLevel": 10,
          "trophies": 4829,
          "clanRank": 47,
          "previousClanRank": 47,
          "donations": 66,
          "donationsReceived": 120
      },
      {
          "arena": {
              "name": "Legendary Arena",
              "id": 54000012
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T035411.000Z",
          "tag": "#P8JR8JU8V",
          "role": "elder",
          "expLevel": 11,
          "trophies": 4261,
          "clanRank": 48,
          "previousClanRank": 48,
          "donations": 65,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Legendary Arena",
              "id": 54000012
          },
          "clanChestPoints": 0,
          "lastSeen": "20200731T035437.000Z",
          "tag": "#9VRLJQRGY",
          "role": "elder",
          "expLevel": 12,
          "trophies": 4179,
          "clanRank": 49,
          "previousClanRank": 49,
          "donations": 64,
          "donationsReceived": 80
      },
      {
          "arena": {
              "name": "Legendary Arena",
              "id": 54000012
          },
          "clanChestPoints": 0,
          "lastSeen": "20200606T023602.000Z",
          "tag": "#G8RC8PRC",
          "role": "coLeader",
          "expLevel": 13,
          "trophies": 4001,
          "clanRank": 50,
          "previousClanRank": 50,
          "donations": 0,
          "donationsReceived": 0
      }
  ]
}

export default {
  getCurrentClanInfo({ commit }, clanTag) {
    return clanService.getClanInfo(clanTag).then(response => {
      commit('SET_CURRENT_CLAN_INFO', response.data)
    }).catch(() => {
      commit('SET_CURRENT_CLAN_INFO', defaultData)
    })
  }
}