import * as ActivityTypes from '@/store/CulturalActivities/types'
//import { state } from '@/store/CulturalActivities/state'

export default {
  [ActivityTypes.GET_ACTIVITIES]: (state) => {
    return state.activities
  }
}
