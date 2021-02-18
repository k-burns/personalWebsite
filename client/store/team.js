import axios from 'axios'

const SET_TEAM = 'SET_TEAM'

const initialState = []

export const setTeam = team => ({
  type: SET_TEAM,
  team
})

export const fetchTeam = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/team')
    dispatch(setTeam(data))
  } catch (err) {
    console.error('Error fetching team:', err)
  }
}

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return action.team
    default:
      return state
  }
}

export default teamReducer
