import { useState } from 'react';

import { TextField, Snackbar, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Layout from '../components/AuthLayout';
import { login } from '../api/auth';

export default function SignIn() {
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const [formValue, setFormValue] = useState({
		email: 'jhondoe@yopmail.com',
		password: 'holamundo',
	});

	async function handleClick(event) {
		try {
			setLoading(true);
			event.preventDefault();
			await login(formValue);
		} catch (error) {
			setMessage(error);
		} finally {
			setLoading(false);
		}
	}

	function onChange(event) {
		const newFormValue = {
			...formValue,
			[event.target.name]: event.target.value,
		};
		setFormValue(newFormValue);
	}

	const handleClose = () => {
		setMessage('');
	};

	return (
		<Layout title="Iniciar sesión">
			<form className="flex flex-col gap-4 min-w-[500px]">
				<TextField
					value={formValue.email}
					label="Your email"
					variant="outlined"
					type="email"
					name="email"
					fullWidth
					onChange={onChange}
				/>
				<TextField
					value={formValue.password}
					label="Your password"
					variant="outlined"
					type="password"
					name="password"
					fullWidth
					onChange={onChange}
				/>
				<LoadingButton
					variant="contained"
					type="button"
					fullWidth
					onClick={handleClick}
					loading={loading}
				>
					Enviar
				</LoadingButton>
			</form>
			<Snackbar
				open={!!message}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity={'error'}
					sx={{ width: '100%' }}
				>
					{message}
				</Alert>
			</Snackbar>
		</Layout>
	);
}
