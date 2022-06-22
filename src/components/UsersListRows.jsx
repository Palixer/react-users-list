import UserRow from './UserRow';

const UsersListRows = ({ users, toggleUserActive }) => {
	if (!users.length) return <p>No hay Usuarios</p>;
	return users.map(user => (
		<UserRow key={user.id} toggleUserActive={toggleUserActive} {...user} />
	));
};

export default UsersListRows;
