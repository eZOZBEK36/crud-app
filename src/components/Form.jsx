import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, editUser } from '../store/reducers/users.reducer.js'
import { disableIsEdit } from '../store/reducers/app.reducer.js'


const Form = () => {
	const [ age, setAge ] = useState('')
	const [ job, setJob ] = useState('')
	const [ name, setName ] = useState('')

	const dispatch = useDispatch()
	const users = useSelector(s => s.users)
	const isEdit = useSelector(s => s.app.isEdit)
	const editedUser = useSelector(s => s.app.editedUser)

	const clearInputs = () => {
		setAge('')
		setJob('')
		setName('')
	}

	const addClickHandler = () => {
		if (name && age && job) {
			dispatch(addUser({ id: Date.now(), name, age, job }))
			clearInputs()
		}
		else alert('Fill all the gaps!!!')
	}

	const editClickHandler = () => {
		if (isEdit) {
			dispatch(editUser({ id: editedUser, user: { name, age, job } }))
			dispatch(disableIsEdit())
		}
	}

	const exitClickHandler = () => {
		dispatch(disableIsEdit())
	}

	const returnEditedUser = () => {
		users.map(u => {
			if (editedUser === u.id) {
				setAge(u.age)
				setJob(u.job)
				setName(u.name)
			}
			return true
		})
	}

	useEffect(() => {
		if (isEdit) returnEditedUser()
		else clearInputs()
	}, [ isEdit, editedUser ])

	return (
		<div className="card bg-success text-white">
			<div className="card-header">
				<h3 className="m-0">{ isEdit ? <>Edit</> : <>Add</> } User</h3>
			</div>
			<div className="card-body">
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Name</label>
					<input value={ name } onChange={ e => setName(e.target.value) } type="text" className="form-control" id="name" />
				</div>
				<div className="mb-3">
					<label htmlFor="age" className="form-label">Age</label>
					<input value={ age } onChange={ e => setAge(e.target.value) } type="number" className="form-control" id="age" />
				</div>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Job</label>
					<input value={ job } onChange={ e => setJob(e.target.value) } type="text" className="form-control" id="name" />
				</div>
			</div>
			<div className="card-footer text-end">
				{
					isEdit ?
						<div className="btn-group">
							<button onClick={ exitClickHandler } className="btn btn-danger">Exit</button>
							<button onClick={ editClickHandler } className="btn btn-info">Edit</button>
						</div> :
						<button onClick={ addClickHandler } className="btn btn-primary">Submit</button>
				}
			</div>
		</div>
	)
}

export default Form