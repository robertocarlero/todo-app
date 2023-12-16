import { useContext } from 'react';

import { authContext } from '../api/AuthContextProvider';

export const useAuthState = () => {
	const auth = useContext(authContext);

	return { ...auth, isAuthenticated: !!auth?.user?.uid };
};
