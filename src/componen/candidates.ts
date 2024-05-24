export interface Candidate {
  id: number;
  name: string;
  photo: string;
  number: number;
  batch: number;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Anis Baswedan",
    photo: "/anis.jpeg",
    number: 1,
    batch: 2024,
  },
  {
    id: 2,
    name: "Prabowo Subianto",
    photo: "/prabowo.jpeg",
    number: 2,
    batch: 2024,
  },
  {
    id: 3,
    name: "Ganjar Pranowo",
    photo: "/ganjar.jpeg",
    number: 3,
    batch: 2024,
  },
];
