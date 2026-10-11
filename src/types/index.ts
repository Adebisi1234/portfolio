
export interface Experience {
  _id: string;
  company: string;
  title?: string;
  roles: Role[];
  order: number;
  startDate: string;
  endDate?: string;
  description?: string;
  techStack: string[];
}
