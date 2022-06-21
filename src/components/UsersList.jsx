import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users }) => {
	const [search, setSearch] = useState('');

	const usersFiltered = filterUsersByName(users, search);
	const usersRendered = renderUsers(usersFiltered);

	return (
		<div className={style.wrapper}>
			<h1>Listado de Usuarios:</h1>
			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			></input>
			{usersRendered}
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) return users;
	const lowerCasedSearch = search.toLowerCase();
	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCasedSearch)
	);
};

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay Usuarios</p>;
	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UsersList;
