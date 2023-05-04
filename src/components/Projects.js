import Card from 'react-bootstrap/Card';
import Project from './Project';

const Projects = () => {
	const projectsArr = [
		{
			title: 'Chat App',
			text: 'Simple yet powerful chat app using React, Node.js, and Socket.io, enabling users to communicate easily and effectively in real-time.',
			img: 'chat-app.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/finalProject',
		},
		{
			title: `Liar's Dice`,
			text: 'Engaging dice game for two players using JavaScript, providing an entertaining and enjoyable gaming experience.',
			img: 'liars-dice.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/hackathon',
		},
		{
			title: 'Memory Game',
			text: 'Exceptional memory game using React and Fetch API, allowing users to test their memory skills while enjoying a seamless and user-friendly interface.',
			img: 'memory-game.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/week8/day5/memory-game',
		},
		{
			title: 'Weather App',
			text: 'Straightforward weather application using React and Redux, providing users with a reliable and easy-to-use interface for checking the latest weather updates.',
			img: 'weather.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/week10/day2/weather',
		},
		{
			title: 'IMDB',
			text: 'Movies application using React and Redux, which allowed users to search for and access detailed information about movies with ease and efficiency.',
			img: 'imdb.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/week9/day5/movie',
		},
	]
	return (
		<div className='projects'>
			<div className='cards'>
				<a className='cardWrap' href='https://github.com/binyaalex/DI_bootcamp/tree/main/wordle' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="wordle.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Wordle Game</Card.Title>
					    <Card.Text className='cardText'>
					      Fun words game, using React and Redux.<br/>
					    	<a href='https://pitsukhim.netlify.app/' target='-blank' className='cardBtn'>Let's play </a>
					    	<a href='https://github.com/binyaalex/DI_bootcamp/tree/main/wordle' target='-blank' className='cardBtn'>Github</a>
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				{
					projectsArr.map(project => {
		              return (
		                <Project title={project.title} text={project.text} img={project.img} link={project.link} key={project.link} />
		              )
		            })
				}
			</div>
		</div>
	)
}
export default Projects