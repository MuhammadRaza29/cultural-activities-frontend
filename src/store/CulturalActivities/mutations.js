import * as ActivityTypes from '@/store/CulturalActivities/types'

export default {
  [ActivityTypes.SET_ACTIVITIES]: (state, payload) => {
    const data = payload.data
    state.activities = data.events
    state.totalPages = data.total_pages
    state.totalActivities = data.total_events
  },
  [ActivityTypes.SET_WEB_SOURCES]: (state, payload) => {
    state.webSources = payload.data
  }
}
