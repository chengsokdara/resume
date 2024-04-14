export type ItemType = {
  label: string;
  value: string;
};

export type DataType = {
  firstName: string;
  lastName: string;
  title: string;
  profile: {
    emails: ItemType[];
    githubs: ItemType[];
    linkedin: ItemType;
    phones: ItemType[];
    websites: ItemType[];
  };
  experiences: {
    title: string;
    company: {
      name: string;
      website: string;
      location: string;
      date: {
        from: string;
        to: string;
        duration: string;
      };
    };
    projects: {
      name: string;
      website?: string;
      technology: string;
      skills: string;
      duties: (
        | string
        | {
            description: string;
            tasks?: string[];
          }
      )[];
    }[];
  }[];
  projects: {
    name: string;
    website?: string;
    descriptions: (
      | string
      | {
          name: string;
          website: string;
        }
    )[];
  }[];
  opensources: {
    name: string;
    website: string;
    description: string;
  }[];
  educations: {
    year: string;
    diplomas: string | string[];
    schools: (
      | string
      | {
          name: string;
          website: string;
        }
    )[];
  }[];
  skills: (
    | string
    | {
        name: string;
        libraries: string[];
      }
  )[];
};

export type ExperienceDataType = DataType["experiences"][number];

export type ExperienceProjectDataType =
  DataType["experiences"][number]["projects"][number];

export type EducationDataType = DataType["educations"][number];
