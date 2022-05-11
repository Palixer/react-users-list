import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users, children }) => {
	const userRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay Usuarios.</p>
		);

	return (
		<div className={style.wrapper}>
			{children}
			{userRendered}
		</div>
	);
};

export default UsersList;
