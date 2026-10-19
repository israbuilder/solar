// Houston-area neighborhood and city landing pages for Solar Pro.
// Each entry generates a page at /areas/[slug] with unique local copy, ZIP coverage,
// local grid challenges, and LocalBusiness + BreadcrumbList schema.
export interface Area {
  name: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  intro: string[]; // paragraphs
  localChallenges: string;
  zips: string[];
  topServices: string[]; // service slugs (→ /services/[slug])
}

export const areas: Area[] = [
  {
    name: "Katy",
    slug: "katy",
    seoTitle: "Solar Panel Installation in Katy, TX | Solar Pro Houston",
    metaDescription: "Top-rated solar panel installation and battery backup in Katy, TX. Cut your electric bills and protect against grid outages with Solar Pro Houston.",
    heroEyebrow: "Serving Katy, TX & Surrounding Suburbs",
    h1: "Solar Panel Installation in Katy, TX",
    intro: [
      "Katy has experienced massive residential growth across master-planned communities like Cinco Ranch, Cross Creek Ranch, and Elyson. With large single-family homes and intense Texas summer heat, Katy homeowners face soaring electricity bills often exceeding $400 to $600 per month during peak AC season.",
      "Solar Pro Houston designs and installs custom, high-efficiency solar energy systems and smart battery storage tailored to Katy roofs. Our turnkey solar solutions allow you to generate clean power, take advantage of federal tax credits, and keep your home powered even during unexpected grid interruptions."
    ],
    localChallenges: "High summer cooling demands combined with Texas grid strain make energy independence a priority in Katy. Our team handles complete HOA permitting, CenterPoint interconnection, and high-wind engineering to ensure reliable, code-compliant solar power built for the Gulf Coast climate.",
    zips: ["77449", "77450", "77493", "77494"],
    topServices: [
      "residential-solar-installation",
      "solar-battery-storage",
      "solar-roof-installation",
      "ev-charger-solar-integration"
    ]
  },
  {
    name: "Cypress",
    slug: "cypress",
    seoTitle: "Solar Company in Cypress, TX | Solar Pro Houston",
    metaDescription: "Reliable solar panel installer in Cypress, TX. Premium solar systems, Tesla Powerwall storage, and full warranty coverage. Call (346) 477-8912.",
    heroEyebrow: "Serving Cypress, TX",
    h1: "Solar Energy & Battery Backup in Cypress, TX",
    intro: [
      "Homeowners across Cypress — from Bridgeland and Towne Lake to Fairfield — are turning to solar energy to lock in predictable energy rates and shield their families from rising utility tariffs.",
      "With generous roof profiles and abundant Texas sunshine, Cypress properties are prime candidates for high-yield solar installations. Solar Pro delivers premium Tier-1 solar panels engineered to withstand Gulf Coast weather while delivering maximum kilowatt-hour generation."
    ],
    localChallenges: "Between summer heatwaves and severe thunderstorm weather, Cypress residents value continuous electricity. Pairing your solar array with home battery storage ensures critical circuits, refrigerators, and medical equipment stay running when storms disrupt the local grid.",
    zips: ["77429", "77433"],
    topServices: [
      "residential-solar-installation",
      "solar-battery-storage",
      "commercial-solar-systems",
      "solar-panel-repair-and-maintenance"
    ]
  },
  {
    name: "The Heights",
    slug: "the-heights",
    seoTitle: "Solar Panels in The Heights, Houston TX | Solar Pro Houston",
    metaDescription: "Custom solar installation for historic and modern homes in The Heights, Houston. Architectural aesthetics, microinverters, and battery storage.",
    heroEyebrow: "Serving Houston Heights & Inner Loop",
    h1: "Solar Panel Installation in The Heights, Houston",
    intro: [
      "The Heights combines historic craftsman homes, modern renovations, and eco-conscious residents who value sustainability. Installing solar in The Heights requires architectural sensitivity, careful roof design, and meticulous craftsmanship.",
      "Solar Pro specializes in low-profile, all-black solar panel arrays and microinverter technology that optimize energy production even with partial urban tree shading, preserving your home's historic curb appeal while slashing electricity expenses."
    ],
    localChallenges: "Inner Loop architectural guidelines and mature oak canopy shade require advanced design modeling. We use lidar solar modeling and Enphase microinverters to ensure every square foot of roof space produces optimal clean power.",
    zips: ["77007", "77008"],
    topServices: [
      "residential-solar-installation",
      "solar-battery-storage",
      "ev-charger-solar-integration",
      "solar-panel-repair-and-maintenance"
    ]
  },
  {
    name: "Sugar Land",
    slug: "sugar-land",
    seoTitle: "Solar Power Systems in Sugar Land, TX | Solar Pro Houston",
    metaDescription: "Turnkey residential and commercial solar installations in Sugar Land, TX. Lower your monthly utility costs with Texas clean energy experts.",
    heroEyebrow: "Serving Sugar Land & Fort Bend County",
    h1: "Solar Energy Solutions in Sugar Land, TX",
    intro: [
      "Sugar Land's thriving neighborhoods and commercial districts are leading Fort Bend County's transition to clean energy. High summer irradiance makes rooftop solar one of the highest-return home improvements available.",
      "From First Colony to Riverstone, Solar Pro provides full-service solar consultations, utility approvals, professional engineering, and expert installation backed by comprehensive 25-year performance warranties."
    ],
    localChallenges: "Fort Bend County utility net billing and solar buyback plans require strategic system sizing. We evaluate your past 12 months of kilowatt-hour consumption to optimize your array size for maximum financial return.",
    zips: ["77478", "77479", "77498"],
    topServices: [
      "residential-solar-installation",
      "commercial-solar-systems",
      "solar-battery-storage",
      "inverter-replacement-and-service"
    ]
  },
  {
    name: "The Woodlands",
    slug: "the-woodlands",
    seoTitle: "Solar Energy in The Woodlands, TX | Solar Pro Houston",
    metaDescription: "Premier solar and battery installations in The Woodlands, TX. Engineered for high efficiency, seamless aesthetics, and backup resilience.",
    heroEyebrow: "Serving The Woodlands & Montgomery County",
    h1: "Solar Panel Systems in The Woodlands, TX",
    intro: [
      "Known for its forested landscape and high standards of living, The Woodlands requires solar installations that harmonize with environmental surroundings while delivering peak efficiency.",
      "Solar Pro designs sleek, high-output solar arrays equipped with smart monitoring, allowing homeowners in The Woodlands to track energy production and battery reserves in real time straight from their smartphones."
    ],
    localChallenges: "Forest density and strict community association standards mean solar arrays must be meticulously engineered and visually discreet. Our team manages all township permits and environmental assessments from start to finish.",
    zips: ["77380", "77381", "77382", "77384", "77385"],
    topServices: [
      "residential-solar-installation",
      "solar-battery-storage",
      "solar-roof-installation",
      "ev-charger-solar-integration"
    ]
  },
  {
    name: "Spring Branch",
    slug: "spring-branch",
    seoTitle: "Solar Contractors in Spring Branch, Houston TX | Solar Pro",
    metaDescription: "Expert solar installations and inverter upgrades in Spring Branch, Houston. Residential and commercial clean energy solutions.",
    heroEyebrow: "Serving Spring Branch & Memorial",
    h1: "Solar Panel Installation in Spring Branch, Houston",
    intro: [
      "Spring Branch is undergoing dynamic revitalization, with new custom builds and energy-conscious renovations. Homeowners here want modern energy systems that reflect 21st-century efficiency.",
      "Solar Pro delivers high-capacity solar arrays, commercial solar systems for local business owners, and seamless EV charger integrations that power your daily drive directly with sunshine."
    ],
    localChallenges: "Older electrical service panels in mid-century homes often need 200A service upgrades before solar interconnection. We handle the panel upgrades and solar installation under one unified contract.",
    zips: ["77055", "77080"],
    topServices: [
      "residential-solar-installation",
      "solar-battery-storage",
      "inverter-replacement-and-service",
      "ev-charger-solar-integration"
    ]
  },
  {
    name: "Pearland",
    slug: "pearland",
    seoTitle: "Solar Energy Services in Pearland, TX | Solar Pro Houston",
    metaDescription: "Residential solar panels and emergency backup batteries in Pearland, TX. Cut utility expenses and secure clean power with Solar Pro.",
    heroEyebrow: "Serving Pearland & Brazoria County",
    h1: "Solar Panel Installation in Pearland, TX",
    intro: [
      "Pearland families understand the necessity of reliable home power in the face of Gulf Coast tropical weather. Solar panels paired with intelligent battery storage guarantee uninterrupted home comfort when severe storms pass through.",
      "Solar Pro guides Pearland property owners through federal solar tax incentives, local utility connection, and professional installation with zero hassle."
    ],
    localChallenges: "High humidity and wind-load considerations require robust racking systems and marine-grade electrical enclosures. We build every Pearland array to exceed local hurricane wind-rating standards.",
    zips: ["77581", "77584"],
    topServices: [
      "residential-solar-installation",
      "solar-battery-storage",
      "solar-panel-repair-and-maintenance",
      "commercial-solar-systems"
    ]
  }
];
