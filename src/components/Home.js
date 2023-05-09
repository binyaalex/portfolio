import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 

const Home = () => {
	return (
		<div className='home'>
			<div className='about'>
				<h2 className='homeHeader'>Benjamin Alexander</h2>
				<span className='homeSubHeader'>A Full Stack Web Devoleper</span>
				<Accordion 
					className="accordion"
					sx={{
						margin: '5px 0',
						border: '0',
						boxShadow: 'none',
					}}
				>
					<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					>
					<Typography>
						<span style={{fontSize: '20px', fontWeight: '600'}}>
							skills
						</span> 
						{" "}- React, JS, and more...
					</Typography>
					</AccordionSummary>
					<AccordionDetails>
					<Typography textAlign="start">
						Node.js, Redux, Hooks, ES6, REST APIs, Socket.io, Express, Database,
						PostgreSQL, Ajax, Axios, JSON, Html5, Css3, Scss, MUI,  Bootstrap, Figma,
						Adobe XD, WordPress, Git, NPM, Heroku and Netlify
					</Typography>
					</AccordionDetails>
				</Accordion>
				{/* <p className="homeTxt">Knowledge with JavaScript, React, Node.js, Redux, Hooks, ES6, REST APIs, Socket.io, Express, Database, PostgreSQL, Ajax, Axios, JSON, Html5, Css3, Scss, MUI,  Bootstrap, Figma, Adobe XD, WordPress, Git, NPM, Heroku and Netlify.</p> */}
				<Link to="/projects" className='projectsBtn'>My Projects</Link>
			</div>
			<div className='imgDiv'>
				<img className='profileImg' src='profileImg2.jpg' alt='my-photo' />
			</div>
		</div>
	)
}
export default Home