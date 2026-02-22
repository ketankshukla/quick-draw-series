export interface Chapter {
  number: number;
  title: string;
  summary: string;
}

export interface Book {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  epigraph: { quote: string; author: string };
  description: string;
  elaborateDescription: string;
  coverImage: string;
  chapters: Chapter[];
  color: string;
  kindleUrl?: string;
  paperbackUrl?: string;
}

// TODO: Replace this sample data with your actual book series data.
// This sample shows the expected structure for a 3-book series with 5 chapters each.
export const books: Book[] = [
  {
    id: 1,
    roman: "I",
    title: "Sample Book One",
    subtitle: "The Beginning of the Journey",
    epigraph: {
      quote: "Every journey begins with a single step.",
      author: "Ancient Proverb",
    },
    description:
      "The first book in the series introduces the core concepts and sets the stage for everything that follows.",
    elaborateDescription:
      "This is the elaborate description for Book 1. It should be a compelling, detailed paragraph that draws readers in and makes them want to read the book. Describe the key themes, the central conflict or question, and what the reader will experience. This text appears in the BookModal when a reader clicks on the book for more details.",
    coverImage: "/images/book1-cover.png",
    color: "#3b82f6",
    kindleUrl: "https://www.amazon.com",
    paperbackUrl: "https://www.amazon.com",
    chapters: [
      {
        number: 1,
        title: "The First Step",
        summary:
          "An introduction to the core premise and the world of the series.",
      },
      {
        number: 2,
        title: "Building Foundations",
        summary:
          "The foundational concepts are established and explored in depth.",
      },
      {
        number: 3,
        title: "The Challenge",
        summary:
          "The first major challenge or conflict is introduced.",
      },
      {
        number: 4,
        title: "Rising Action",
        summary:
          "Stakes increase as the narrative builds toward the climax.",
      },
      {
        number: 5,
        title: "The Turning Point",
        summary:
          "A pivotal moment that changes everything and sets up the next book.",
      },
    ],
  },
  {
    id: 2,
    roman: "II",
    title: "Sample Book Two",
    subtitle: "Deepening the Path",
    epigraph: {
      quote: "The middle of the journey is where the real work begins.",
      author: "Unknown",
    },
    description:
      "The second book deepens the exploration and raises the stakes significantly.",
    elaborateDescription:
      "This is the elaborate description for Book 2. Building on the foundation of Book 1, this volume takes the reader deeper into the subject matter. The conflicts intensify, the characters develop, and the reader begins to see the larger picture. This description should be 3-5 sentences that capture the essence of the book.",
    coverImage: "/images/book2-cover.png",
    color: "#10b981",
    kindleUrl: "https://www.amazon.com",
    paperbackUrl: "https://www.amazon.com",
    chapters: [
      {
        number: 6,
        title: "New Horizons",
        summary:
          "The journey continues with new challenges and deeper understanding.",
      },
      {
        number: 7,
        title: "The Deeper Layer",
        summary:
          "Beneath the surface, more complex patterns emerge.",
      },
      {
        number: 8,
        title: "Trials and Tests",
        summary:
          "The core ideas are tested against real-world complexity.",
      },
      {
        number: 9,
        title: "Breaking Through",
        summary:
          "A breakthrough moment that redefines the path forward.",
      },
      {
        number: 10,
        title: "The Bridge",
        summary:
          "Connecting what has been learned to what lies ahead.",
      },
    ],
  },
  {
    id: 3,
    roman: "III",
    title: "Sample Book Three",
    subtitle: "The Final Synthesis",
    epigraph: {
      quote: "The end is where we start from.",
      author: "T.S. Eliot",
    },
    description:
      "The final book brings everything together into a powerful conclusion.",
    elaborateDescription:
      "This is the elaborate description for Book 3. The concluding volume weaves together all the threads from the previous books into a satisfying and powerful conclusion. Every question raised is addressed, every arc is completed, and the reader finishes with a sense of completion and transformation. This description should leave the reader eager to experience the finale.",
    coverImage: "/images/book3-cover.png",
    color: "#ef4444",
    kindleUrl: "https://www.amazon.com",
    paperbackUrl: "https://www.amazon.com",
    chapters: [
      {
        number: 11,
        title: "Gathering Threads",
        summary:
          "All the disparate elements begin to converge.",
      },
      {
        number: 12,
        title: "The Crucible",
        summary:
          "Everything is tested in the most demanding circumstances.",
      },
      {
        number: 13,
        title: "The Revelation",
        summary:
          "The deepest truth of the series is finally revealed.",
      },
      {
        number: 14,
        title: "The Final Act",
        summary:
          "The climactic moment that defines the entire journey.",
      },
      {
        number: 15,
        title: "What Remains",
        summary:
          "A powerful conclusion that resonates long after the final page.",
      },
    ],
  },
];
