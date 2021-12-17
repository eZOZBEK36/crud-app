const defaultState = {
	isEdit: false,
	editedUser: null
}

const ENABLE_IS_EDIT = 'ENABLE_IS_EDIT'
const DISABLE_IS_EDIT = 'DISABLE_IS_EDIT'

const appReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ENABLE_IS_EDIT:
			return { isEdit: true, editedUser: action.payload }
		case DISABLE_IS_EDIT:
			return { isEdit: false, editedUser: null }
		default:
			return state
	}
}

const disableIsEdit = () => ({ type: DISABLE_IS_EDIT })
const enableIsEdit = userID => ({ type: ENABLE_IS_EDIT, payload: userID })

export { appReducer }
export { enableIsEdit, disableIsEdit }