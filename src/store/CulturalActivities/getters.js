import * as ActivityTypes from '@/store/CulturalActivities/types'

export default {
  [ActivityTypes.GET_ACTIVITIES]: (state) => {
    return state.activities
  },
  [ActivityTypes.GET_WEB_SOURCES]: (state) => {
    return state.webSources
  }
}
