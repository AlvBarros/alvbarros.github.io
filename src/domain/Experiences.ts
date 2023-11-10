export type ProfessionalExperience = {
  jobTitle: string;
  companyName: string;
  companyLink: string;
  timeWorked: {
    from: string;
    to: string;
  };
  jobDescription: string;
  jobDetails: string[];
};

export type Degree = {
  courseTitle: string;
  college: string;
  collegeLink: string;
  finished: string;
};

export type Publication = {
  title: string;
  summary: string;
  link: string;
  for: string;
  when: string;
}

export type AcademicExperience = {
  degrees: Degree[];
  publications: Publication[];
}