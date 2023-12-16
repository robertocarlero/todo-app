import { useEffect, Fragment, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';

import {
	Button,
	Divider,
	List,
	ListItem,
	ListItemText,
	Switch,
} from '@mui/material';

import { useAuthState } from '../hooks/useAuthState';
import { getTasks } from '../api/tasks';

export default function Home() {
	const { displayName } = useAuthState();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks((tasks) => {
			setTasks(tasks);
		});
	}, [setTasks]);

	const onSignOutButtonClick = () => {
		const auth = getAuth();
		signOut(auth);
	};

	return (
		<>
			<h1>Estado: {displayName}</h1>

			<div className="p-4-w-full">
				<List>
					{tasks?.map((task) => (
						<Fragment key={task.id}>
							<ListItem>
								<ListItemText
									primary={task.title}
									secondary={task.description}
								/>
								<Switch checked={task.completed} />
							</ListItem>
							<Divider className="w-full" />
						</Fragment>
					))}
				</List>
			</div>

			<Button
				variant="contained"
				type="button"
				fullWidth
				onClick={onSignOutButtonClick}
			>
				Cerrar Sesión
			</Button>
		</>
	);
}
