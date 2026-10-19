// Google reviews for Solar Pro Houston.
// Emitted as schema.org Review objects for aggregateRating rich snippet compliance.
export interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
}

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    location: "Katy, TX",
    date: "2026-06-18",
    rating: 5,
    body: "Solar Pro Houston installed a 12.8 kW system with two battery units at our Cinco Ranch home. Our summer electric bill dropped from over $480 down to just the $15 grid connection fee. The installation crew was polite, tidy, and finished in under two days.",
  },
  {
    name: "Elena R.",
    location: "Cypress, TX",
    date: "2026-06-11",
    rating: 5,
    body: "During the recent thunderstorm that knocked out power in Cypress for 18 hours, our backup battery kicked in instantly without flickering our TV or fridge. Choosing Solar Pro was hands-down the best investment we made in our home.",
  },
  {
    name: "David H.",
    location: "The Heights, Houston",
    date: "2026-05-29",
    rating: 5,
    body: "I was worried about solar panels ruining the architectural look of our historic Heights bungalow. The Solar Pro engineering team designed an all-black, low-profile layout that looks sleek and modern. Super transparent pricing and zero high-pressure sales.",
  },
  {
    name: "Robert M.",
    location: "Sugar Land, TX",
    date: "2026-05-14",
    rating: 5,
    body: "Outstanding commercial installation on our warehouse roof. The team managed CenterPoint interconnection and all city permits smoothly. We are already saving thousands in monthly overhead costs. Highly recommended!",
  },
  {
    name: "Sarah K.",
    location: "The Woodlands, TX",
    date: "2026-04-22",
    rating: 5,
    body: "From the initial drone roof scan to turning on the system, Israel and his crew were first-class. They also integrated our Level 2 EV charger so our Tesla charges 100% on pure sunshine. Five stars!",
  }
];
