// [FICTION ONLY] Character data for fiction series.
// Delete this file if your series is non-fiction.

export interface Character {
  id: number;
  name: string;
  title: string;
  role: string;
  alignment: "Hero" | "Villain" | "Neutral" | "Cosmic";
  description: string;
  quote: string;
  image: string;
  accentColor: string;
  firstAppearance: string;
  booksAppearedIn: string[];
  abilities: string[];
  physicalDescription: string;
  backstory: string;
  characterArc: string;
  keyRelationships: string[];
}

// TODO: Replace with your actual character data for fiction series.
export const characters: Character[] = [
  {
    id: 1,
    name: "{{CHARACTER_NAME}}",
    title: "{{CHARACTER_TITLE}}",
    role: "{{CHARACTER_ROLE}}",
    alignment: "Hero",
    description: "{{CHARACTER_DESCRIPTION}}",
    quote: "{{CHARACTER_QUOTE}}",
    image: "/images/character-portraits/01-character.png",
    accentColor: "#FFD700",
    firstAppearance: "Book I -- {{BOOK_TITLE}}",
    booksAppearedIn: [
      "Book I -- {{BOOK_TITLE}}",
    ],
    abilities: [
      "{{ABILITY_1}}",
      "{{ABILITY_2}}",
    ],
    physicalDescription: "{{PHYSICAL_DESCRIPTION}}",
    backstory: "{{BACKSTORY}}",
    characterArc: "{{CHARACTER_ARC}}",
    keyRelationships: [
      "{{RELATIONSHIP_1}}",
      "{{RELATIONSHIP_2}}",
    ],
  },
];
