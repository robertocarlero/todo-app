import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const login = ({ email, password }) => {
	return new Promise(async (resolve, reject) => {
		const auth = getAuth();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			resolve('Usuario inició sesión correctamente.');
		} catch (error) {
			const errors = {
				'auth/invalid-email': 'El correo electrónico no es válido.',
				'auth/user-disabled': 'El usuario está deshabilitado.',
				'auth/user-not-found': 'El usuario no existe.',
				'auth/wrong-password': 'La contraseña es incorrecta.',
			};

			const message =
				errors[error.code] || 'Ocurrió un error al iniciar sesión.';

			reject(message);
		}
	});
};
