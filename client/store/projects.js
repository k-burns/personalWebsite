import axios from 'axios'

/**
 * ACTION TYPES
 */

const SET_PROJECTS = 'SET_PROJECTS'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
export const setProjects = projects => ({
  type: SET_PROJECTS,
  projects
})

/**
 * THUNK CREATORS
 */
export const fetchProjects = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/projects')
    dispatch(setProjects(data))
  } catch (err) {
    console.error('Error fetching projects: ', err)
  }
}

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    default:
      return state
  }
}

export default teamReducer
