import UserRow from './UserRow';

const UsersListRows = ({ users }) => {
	if (!users.length) return <p>No hay Usuarios</p>;
	return users.map(user => <UserRow key={user.username} {...user} />);
};

export default UsersListRows;
