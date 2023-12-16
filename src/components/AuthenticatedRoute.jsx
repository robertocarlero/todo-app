import { Navigate } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { useAuthState } from '../hooks/useAuthState';

export default function AuthenticatedRoute({ component: Component }) {
	const { isAuthenticated, isLoading } = useAuthState();

	if (isLoading) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<CircularProgress />
			</div>
		);
	}

	return !isAuthenticated ? <Navigate to="/login" /> : <Component />;
}
