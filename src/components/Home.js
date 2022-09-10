import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='home'>
			<div className='about'>
				<h2 className='homeHeader'>Benjamin Alexander</h2>
				<span className='homeSubHeader'>A Full Stack Web Devoleper</span>
				<p className="homeTxt">Knowledge with Javascript, React, Node.js, Redux, HTML, CSS, Bootstrap and Github</p>
				<Link to="/projects" className='projectsBtn'>See My Projects</Link>
			</div>
			<div className='imgDiv'>
				<img className='profileImg' src='profileImg2.jpg' alt='my-photo' />
			</div>
		</div>
	)
}
export default Home