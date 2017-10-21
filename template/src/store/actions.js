/**
 * Created by limx on 2017/10/21.
 */
import * as types from './mutation-types'

export const setVersion = ({commit}, version) => {
    commit(types.APP_SET_VERSION, {
        v: version
    })
}