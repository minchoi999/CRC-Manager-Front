import axios from 'axios'

const CLAN_BASE_URL =  'http://localhost:3000/clan/'
export default {
  getClanInfo(clanTag) {
    const clanUrl = CLAN_BASE_URL + clanTag

		return axios.get(clanUrl).then(response => {
      return response
    })
	} 
}