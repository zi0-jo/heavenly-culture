export interface Department {
  id: string;
  name: string;
  bio: string;
  description: string;
  formUrl: string;
  phone: string;
  images: string[];
  teams: Array<{ name: string; description: string }>;
  conditions: Array<string | { name: string; conditions: string[] }>;
}
