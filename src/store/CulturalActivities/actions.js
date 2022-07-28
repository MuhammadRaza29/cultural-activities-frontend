import * as ActivityTypes from '@/store/CulturalActivities/types'
import Axios from "@/utils/axiosConfiugration"

export default {
  [ActivityTypes.FETCH_ACTIVITIES]: ({ commit }) => {
    Axios.get('v1/events')
      .then((response) => {
        commit(ActivityTypes.SET_ACTIVITIES, response)
      })
      .catch((err) => {
        console.log('Error in fetching events', err)
      })
  }
}