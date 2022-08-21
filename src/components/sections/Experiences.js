import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2014 - 2018",
    content:
      "Did 4 years Bachelor in Sciences Hons in Computer Sciences. With Data Sciences Majors",
  },
  {
    id: 2,
    title: "Intermediate Degree",
    years: "2011 - 2013",
    content:
      "Did my pre engineering in Sciences. Opting subjects like Physics, Chemistry and Maths",
  },
  {
    id: 3,
    title: "Matriculation Degree",
    years: "2009 - 2011",
    content:
      "Did my Matriculations in Sciences Subjects. My majors were Computer Sciences, Maths and Sciences",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    years: "2022 - Present",
    content:
      "I am working as a Senior Software Engineer in MERN stack with React, Node etc.",
  },
  {
    id: 2,
    title: "Software Engineer",
    years: "2020 - 2022",
    content:
      "Worked as React front end engineer with multiple companies in both JS and TS.",
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    years: "2018 - 2020",
    content:
      "Worked mainly in React Native and then started exploring React and switched to Web Development.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
