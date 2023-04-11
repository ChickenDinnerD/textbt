import './style.css';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container">
				<div onClick={() => window.location.reload()} className="nav-row">
						<strong>БТ/</strong> безімянний
				</div>
			</div>
		</nav>
	);
};

export default Navbar;