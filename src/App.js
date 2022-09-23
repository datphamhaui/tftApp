import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNew from './components/AddNew';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									Add Data
								</Link>
							</li>
							<li className="nav-item">
								<p className="nav-link disabled">Disabled</p>
							</li>
						</ul>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AddNew />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
