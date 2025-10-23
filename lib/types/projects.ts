export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  url?: string; // Optional link to the project
};
