import Card from 'react-bootstrap/Card';
import Project from './Project';

const Projects = () => {
	const projectsArr = [
		{
			title: 'Chat App',
			text: 'Very easy using chat, create by React, Node.js and Socket.io.',
			img: 'chat-app.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/finalProject',
		},
		{
			title: `Liar's Dice`,
			text: 'Nice dice game for two players, using JavaScript.',
			img: 'liars-dice.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/hackathon',
		},
		{
			title: 'Memory Game',
			text: 'Great memory game, using React and fetch api.',
			img: 'memory-game.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/week8/day5/memory-game',
		},
		{
			title: 'Weather App',
			text: 'Simple weather app, using React and Redux.',
			img: 'weather.jpg',
			link: 'https://github.com/binyaalex/DI_bootcamp/tree/main/week10/day2/weather',
		},
		{
			title: 'IMDB',
			text: 'Movies app for searching details , using React and Redux.',
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