import actions from "@/store/CulturalActivities/actions"
import mutations from "@/store/CulturalActivities/mutations"
import getters from "@/store/CulturalActivities/getters"
import { state } from "@/store/CulturalActivities/state"

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
