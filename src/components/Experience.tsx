import React, { useState } from "react";
import {
  AcademicExperience,
  Degree,
  ProfessionalExperience,
  Publication,
} from "../domain/Experiences";

import experiences from "../data/experience.json";
import { Divider } from "./Divider";

const professionalExperiences =
  experiences.professional as ProfessionalExperience[];
const academicExperiences = experiences.academic as AcademicExperience;

function renderProfessionalExperience(
  exp: ProfessionalExperience,
  index: number
) {
  return (
    <li key={index}>
      <h3>{exp.jobTitle} </h3> @{" "}
      <a href={exp.companyLink}>
        {exp.companyName}
      </a>
      <div>
        <span className="from">{exp.timeWorked.from.toString()}</span> -{" "}
        <span className="from">{exp.timeWorked.to.toString()}</span>
      </div>
      <div >
        <p> {exp.jobDescription} </p>
        <ul>
          {exp.jobDetails.map((detail, index) => {
            return <li key={index}>{detail}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

function renderAcademicExperience(degree: Degree, index: number) {
  return (
    <li key={index}>
      <h3>{degree.courseTitle} </h3>
      <a href={degree.collegeLink}>
        {degree.college}
      </a>
      - <span>{degree.finished}</span>
    </li>
  );
}

function renderAcademicPublications(publication: Publication, index: number) {
  return (
    <li key={index}>
      <h3>{publication.title} </h3>
      <a href={publication.link}>
        {publication.for}
      </a>
      - <span>{publication.when}</span>
      <div>
        <p> {publication.summary} </p>
      </div>
    </li>
  );
}

const Experiences: React.FC = () => {
  const [showsMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showsMore);
  }

  return (
    <section className="Experience">
      <h1> Professional experience </h1>
      <ul>
        {professionalExperiences.slice(0, 2).map(renderProfessionalExperience)}
        {showsMore &&
          professionalExperiences.slice(2).map(renderProfessionalExperience)}
      </ul>
      <span onClick={toggleShowMore} className="clickable">
        {showsMore ? "Show less" : "Show more"}
      </span>

      <Divider />

      <h1> Academic publications </h1>
      <ul>
        {academicExperiences.publications.map(renderAcademicPublications)}
      </ul>

      <Divider />

      <h1> Academic experience </h1>
      <ul>{academicExperiences.degrees.map(renderAcademicExperience)}</ul>
      
    </section>
  );
};

export default Experiences;
