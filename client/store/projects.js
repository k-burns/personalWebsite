import axios from 'axios'

const SET_PROJECTS = 'SET_PROJECTS'

const initialState = []

export const setProjects = projects => ({
  type: SET_PROJECTS,
  projects
})

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
