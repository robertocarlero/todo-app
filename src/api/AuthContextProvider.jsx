import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [userState, setUserState] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const auth = getAuth();

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUserState(user);
			setIsLoading(false);
		});

		return unsubscribe;
	}, []);

	return (
		<authContext.Provider value={{ user: userState, isLoading }}>
			{children}
		</authContext.Provider>
	);
};
