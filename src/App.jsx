import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/SignIn';
import { AuthContextProvider } from './api/AuthContextProvider';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnAuthenticatedRoute from './components/UnAuthenticatedRoute';

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<AuthenticatedRoute component={Home} />}
					/>
					<Route
						path="/login"
						element={<UnAuthenticatedRoute component={Login} />}
					/>
				</Routes>
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
