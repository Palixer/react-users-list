 import { useState } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role }) => {
	const [IsActive, setIsActive] = useState(active);

	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={IsActive} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button
					onClick={() => {
						setIsActive(!IsActive);
					}}
				>
					{IsActive ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
