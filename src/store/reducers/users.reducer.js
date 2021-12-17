const defaultState = [
	{
		id: 1,
		age: 17,
		name: 'Ezozbek',
		job: 'Developer'
	}
]

const ADD_USER = 'ADD_USER'
const EDIT_USER = 'EDIT_USER'
const REMOVE_USER = 'REMOVE_USER'

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_USER:
			return [ ...state, action.payload ]
		case REMOVE_USER:
			return state.filter(s => s.id !== action.payload)
		case EDIT_USER:
			return state.map(s => {
				if (s.id === action.payload.id) {
					return { id: s.id, ...action.payload.user }
				}
				return s
			})
		default:
			return state
	}
}


const addUser = user => ({ type: ADD_USER, payload: user })
const editUser = user => ({ type: EDIT_USER, payload: user })
const removeUser = userID => ({ type: REMOVE_USER, payload: userID })

export { addUser }
export { userReducer, removeUser, editUser }