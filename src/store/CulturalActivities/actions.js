import * as ActivityTypes from '@/store/CulturalActivities/types'
import Axios from "@/utils/axiosConfiugration"

export default {
  [ActivityTypes.FETCH_ACTIVITIES]: ({ commit }, params) => {
    console.log(params)
    Axios.get('v1/events', 
      {
        params
      })
      .then((response) => {
        commit(ActivityTypes.SET_ACTIVITIES, response)
      })
      .catch((err) => {
        console.log('Error in fetching events', err)
      })
  },
  [ActivityTypes.FETCH_WEB_SOURCES]: ({ commit }) => {
    Axios.get('v1/web_sources')
      .then((response) => {
        commit(ActivityTypes.SET_WEB_SOURCES, response)
      })
      .catch((err) => {
        console.log('Error in fetching events', err)
      })
  }
}
