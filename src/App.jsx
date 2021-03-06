import UsersList from './components/UsersList';
import { USER_ROLES } from './constants/userRoles';

const USERS = [
	{
		username: 'pablo',
		name: 'Pablo Castellanos',
		active: true,
		role: USER_ROLES.OTHER
	},
	{
		username: 'jose',
		name: 'José Miguel Fernández',
		active: true,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'javier',
		name: 'Javier Lopez',
		active: false,
		role: USER_ROLES.STUDENT
	}
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
