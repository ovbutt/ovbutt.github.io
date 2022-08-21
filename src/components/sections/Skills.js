import React from 'react'
import TrackVisibility from 'react-on-screen';
import Pagetitle from '../elements/Pagetitle';
import Skill from '../elements/Skill';

const progressData1 = [
	{
		id: 1,
		title: "React",
		percantage: 95,
		progressColor: "#FFD15C",
	},
	{
		id: 2,
		title: "React Native",
		percantage: 85,
		progressColor: "#FF4C60",
	},
	{
		id: 3,
		title: "Nodejs",
		percantage: 80,
		progressColor: "#6C6CE5",
	},
	{
		id: 4,
		title: "GIT",
		percantage: 91,
		progressColor: "##44D7B6",
	},
];

const progressData2 = [
	{
		id: 1,
		title: "JavaScript",
		percantage: 95,
		progressColor: "#FFD15C",
	},
	{
		id: 2,
		title: "TypeScript",
		percantage: 85,
		progressColor: "#FF4C60",
	},
	{
		id: 3,
		title: "MongoDB",
		percantage: 70,
		progressColor: "#6C6CE5",
	},
	{
		id: 4,
		title: "SQL",
		percantage: 70,
		progressColor: "#44D7B6",
	},
];


const progressData3 = [
	{
		id: 1,
		title: "GraphQL",
		percantage: 95,
		progressColor: "#FFD15C",
	},
	{
		id: 2,
		title: "Python",
		percantage: 85,
		progressColor: "#FF4C60",
	},
	{
		id: 3,
		title: "AWS",
		percantage: 70,
		progressColor: "#6C6CE5",
	},
	{
		id: 4,
		title: "ServerLess",
		percantage: 70,
		progressColor: "#44D7B6",
	},

];



export const Skills = () => {
	return (
		<section id="skills">
			<div className="container">
				<Pagetitle title="Skills" />
				<div className="row">


					<div className="col-md-12 triangle-left-md triangle-top-sm">
						<div className="rounded bg-white shadow-dark padding-30">
							<div className="row">

								<div className="col-md-4">
									{progressData1.map((progress) => (
										<TrackVisibility
											once
											key={progress.id}
											className="progress-wrapper"
										>
											<Skill progress={progress} />
										</TrackVisibility>
									))}
								</div>
								<div className="col-md-4">
									{progressData2.map((progress) => (
										<TrackVisibility
											once
											key={progress.id}
											className="progress-wrapper"
										>
											<Skill progress={progress} />
										</TrackVisibility>
									))}
								</div>
								<div className="col-md-4">
									{progressData3.map((progress) => (
										<TrackVisibility
											once
											key={progress.id}
											className="progress-wrapper"
										>
											<Skill progress={progress} />
										</TrackVisibility>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
