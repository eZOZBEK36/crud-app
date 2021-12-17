import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/reducers/users.reducer.js'
import { enableIsEdit } from '../store/reducers/app.reducer.js'

const Lists = () => {
	const dispatch = useDispatch()
	const users = useSelector(s => s.users)

	const removeClickHandler = userID => {
		dispatch(removeUser(userID))
	}

	const editClickHandler = userID => {
		dispatch(enableIsEdit(userID))
	}
	return (
		<table className="table table-dark table-hover">
			<thead>
				<tr>
					<th>No</th>
					<th>Name</th>
					<th>Age</th>
					<th>Job</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user, i) => {
						return (
							<tr key={ user.id } className="align-middle">
								<td>{ i + 1 }</td>
								<td>{ user.name }</td>
								<td>{ user.age }</td>
								<td>{ user.job }</td>
								<td>
									<div className="btn-group">
										<button className="btn btn-success" onClick={ () => editClickHandler(user.id) }>EDIT</button>
										<button className="btn btn-danger" onClick={ () => removeClickHandler(user.id) }>REMOVE</button>
									</div>
								</td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}

export default Lists