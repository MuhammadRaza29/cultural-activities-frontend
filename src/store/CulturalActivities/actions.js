import * as ActivityTypes from '@/store/CulturalActivities/types'
import Axios from "@/utils/axiosConfiugration"

export default {
  [ActivityTypes.FETCH_ACTIVITIES]: ({ commit }, { pageNum }) => {
    Axios.get(`v1/events?page=${pageNum}`)
      .then((response) => {
        commit(ActivityTypes.SET_ACTIVITIES, response)
      })
      .catch((err) => {
        console.log('Error in fetching events', err)
      })
  }
}
