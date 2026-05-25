export interface Service {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  isQuote: boolean;
  metaDescription: string;
  about: string[];
  checklist: { category: string; items: string[] }[];
  bundles?: { label: string; price: string }[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "mot-testing",
    name: "MOT Testing",
    tagline: "DVSA authorised MOT testing for all makes and models",
    price: "£40",
    isQuote: false,
    metaDescription:
      "DVSA authorised MOT testing in Bedford from £40. Honest pass/fail reports, no hidden charges. All makes and models welcome at AI Diagnostics Ltd.",
    about: [
      "At AI Diagnostics Ltd, we are a fully DVSA authorised MOT testing station serving Bedford and the surrounding area. Our MOT tests are carried out by trained testers using calibrated equipment, ensuring your vehicle is assessed accurately and fairly.",
      "We believe in complete transparency. There are no hidden charges, no upselling, and no pressure. If your vehicle fails, we will explain exactly what needs doing and give you a written estimate before any work begins.",
    ],
    checklist: [
      {
        category: "Safety Checks",
        items: [
          "Brakes, pedal feel, brake force balance and handbrake",
          "Lights, headlights, brake lights, indicators and fog lights",
          "Steering, column, rack, joints and power steering operation",
          "Tyres, tread depth (minimum 1.6mm), sidewall condition and pressures",
          "Horn, operation and audibility",
          "Wipers, condition, operation and washer function",
        ],
      },
      {
        category: "Emissions & Engine",
        items: [
          "Exhaust, condition, security and emissions levels",
          "Emissions test, petrol or diesel to DVSA limits",
          "Engine mounts, security and condition",
        ],
      },
    ],
    bundles: [
      { label: "MOT + Interim Service", price: "£194.57" },
      { label: "MOT + Full Service", price: "£227.53" },
      { label: "MOT + Major Service", price: "£311.28" },
    ],
    faq: [
      {
        q: "How long does an MOT take?",
        a: "A standard MOT typically takes 45 to 60 minutes. If advisories are found and you choose to have them repaired at the same time, allow additional time.",
      },
      {
        q: "What happens if my car fails its MOT?",
        a: "We will give you a full written explanation of every failure item along with a no obligation repair estimate. You can choose to have the repairs done with us or take your vehicle elsewhere.",
      },
    ],
  },

  {
    slug: "pre-mot-check",
    name: "Pre MOT Check",
    tagline: "Catch failures before your official MOT, save money and time",
    price: "£20",
    isQuote: false,
    metaDescription:
      "Pre MOT check in Bedford for £20. Identify potential MOT failures before your test. Save money by fixing issues in advance. AI Diagnostics Ltd Bedford.",
    about: [
      "A pre MOT check is a smart investment for any driver who wants to avoid the surprise of a failed MOT. For just £20, our technicians carry out a thorough inspection of your vehicle using the same DVSA standards applied during the official test.",
      "By knowing about issues in advance, you have the time to decide whether to have them repaired with us, source parts yourself, or simply budget for the work.",
    ],
    checklist: [
      {
        category: "Interior Checks",
        items: [
          "Check seats and seat belts",
          "Check instrument warning lights",
          "Check essential switch operation",
          "Check front screen for marks",
          "Check wipers and washers for operation",
          "Check brake control operation",
          "Check steering wheel condition",
          "Check steering column visually",
          "Check door operation",
          "Check mirror operation",
          "Check horn operation",
        ],
      },
      {
        category: "Exterior Checks",
        items: [
          "Check number plate condition",
          "Check number plate light operation",
          "Check wiper blade condition",
          "Check fuel tank cap seal",
          "Check boot lid operation",
          "Check bonnet operation",
          "Check tow bar visually (if fitted)",
          "Check general body condition",
          "Check wheels to MOT standard",
          "Check wheels tyre depths and visual condition",
          "Check brake pads without wheel removal",
          "Check suspension components visually (with vehicle on floor)",
          "Check steering components visually (with vehicle on floor)",
          "Check fuel system components visually (with vehicle on floor)",
        ],
      },
    ],
    faq: [
      {
        q: "Is a pre MOT check the same as an MOT?",
        a: "No. A pre MOT check is a workshop inspection using the same criteria as the official test, but it does not produce a legally valid MOT certificate. It is designed purely to identify potential failures in advance.",
      },
    ],
  },

  {
    slug: "interim-service",
    name: "Interim Service",
    tagline: "Essential oil service every 6 months or 6,000 miles",
    price: "£154.57",
    isQuote: false,
    metaDescription:
      "Interim car service in Bedford for £154.57. Oil & filter change plus a 25 point inspection. Ideal every 6 months or 6,000 miles. AI Diagnostics Ltd.",
    about: [
      "Our Interim Service is designed for drivers who cover higher mileage or want to keep on top of their vehicle's health between annual services. Carried out every 6 months or 6,000 miles, it centres around a quality engine oil and filter change with the correct grade oil for your vehicle.",
      "Alongside the oil change, our technicians carry out a thorough 25 point inspection covering safety, fluid levels and general vehicle condition.",
    ],
    checklist: [
      {
        category: "Fluids",
        items: [
          "Engine oil & filter, drained and refilled with correct grade",
          "Screen wash, topped up to full",
          "Brake fluid level, checked and topped up if required",
        ],
      },
      {
        category: "Safety",
        items: [
          "Tyre pressures, checked and corrected to manufacturer spec",
          "Tyre condition, tread depth and sidewall inspection",
          "Lights check, all lights tested front and rear",
          "Brake pad check, visual inspection of remaining pad thickness",
        ],
      },
    ],
    bundles: [{ label: "With MOT", price: "£194.57" }],
    faq: [
      {
        q: "How often should I have an interim service?",
        a: "We recommend an interim service every 6 months or 6,000 miles, whichever comes first. It is ideal for drivers who cover more miles than average between their annual full services.",
      },
    ],
  },

  {
    slug: "full-service",
    name: "Full Service",
    tagline: "Comprehensive 40 point annual service for peace of mind",
    price: "£187.53",
    isQuote: false,
    metaDescription:
      "Full car service in Bedford for £187.53. Comprehensive 40 point annual service covering fluids, filters, brakes, tyres and electrical systems. AI Diagnostics Ltd.",
    about: [
      "Our Full Service is our most popular annual service, covering 40 inspection and maintenance points to keep your vehicle running at its best. Carried out once a year or every 12,000 miles, it goes well beyond a basic oil change.",
      "Using quality OE specification parts and the correct oil grade for your vehicle, our Full Service helps protect your engine, maintain reliability, and preserve your vehicle's resale value.",
    ],
    checklist: [
      {
        category: "Fluids & Filters",
        items: [
          "Engine oil & filter, drained and replaced with correct grade",
          "Air filter, inspected and replaced",
          "Cabin pollen filter, inspected and replaced",
          "Coolant level, checked and topped up",
          "Brake fluid, level and condition checked",
          "Power steering fluid, level checked and topped up",
        ],
      },
      {
        category: "Brakes & Tyres",
        items: [
          "Brake pads, thickness measured front and rear",
          "Brake discs, condition and wear assessed",
          "Tyre tread depth, all four corners measured",
          "Tyre pressures, corrected to manufacturer specification",
        ],
      },
    ],
    bundles: [{ label: "With MOT", price: "£227.53" }],
    faq: [
      {
        q: "How often should I have a full service?",
        a: "A full service is recommended once a year or every 12,000 miles, whichever comes first. It is the ideal annual health check for most drivers.",
      },
    ],
  },

  {
    slug: "major-service",
    name: "Major Service",
    tagline: "Complete 60 point service, the most thorough care for your vehicle",
    price: "£271.28",
    isQuote: false,
    metaDescription:
      "Major car service in Bedford for £271.28. Our most comprehensive 60 point service including coolant flush, brake fluid flush, spark plugs and full suspension checks. AI Diagnostics Ltd.",
    about: [
      "Our Major Service is our most comprehensive service package, covering 60 inspection and maintenance points. Recommended every two years or 24,000 miles, it goes deeper than a standard full service by including a coolant system flush, a brake fluid flush, spark plug replacement (petrol engines), and a detailed suspension and drivetrain inspection.",
      "Every major service is carried out by our experienced technicians using quality OE equivalent parts and manufacturer approved fluids.",
    ],
    checklist: [
      {
        category: "Filters & Fluids",
        items: [
          "Engine oil & filter, drained and replaced with correct grade",
          "Air filter, replaced",
          "Cabin pollen filter, replaced",
          "Spark plugs, replaced (petrol engines)",
          "Coolant, full system flush and refill to specification",
          "Brake fluid, full flush and replacement with fresh DOT fluid",
        ],
      },
      {
        category: "Brakes & Suspension",
        items: [
          "Brake pads, thickness measured front and rear",
          "Brake discs, condition and wear assessed",
          "Wheel bearings, play and noise check",
          "Suspension arms and bushes, visual and tactile inspection",
          "Shock absorbers, visual check for leaks and condition",
        ],
      },
    ],
    bundles: [{ label: "With MOT", price: "£311.28" }],
    faq: [
      {
        q: "How often should I have a major service?",
        a: "A major service is typically recommended every two years or 24,000 miles, whichever comes first.",
      },
    ],
  },

  {
    slug: "oil-filter-change",
    name: "Oil & Filter Change",
    tagline: "Quick engine oil and filter change while you wait",
    price: "£132.30",
    isQuote: false,
    metaDescription:
      "Oil and filter change in Bedford for £132.30. Quick service using the correct grade oil for your vehicle. AI Diagnostics Ltd.",
    about: [
      "Get an oil and filter change before your oil light comes on. Your oil has a life limit so a regular oil and filter change helps to maintain and keep your engine healthy. Old & dirty oil can cause premature wear to vital components and affect the cars performance.",
      "An Oil and filter change does not replace a service but is a great way to ensure protection for your engine if your service is not due yet.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Engine oil drained and replaced with correct grade",
          "Oil filter replaced",
          "Oil level checked and confirmed",
        ],
      },
    ],
    faq: [
      {
        q: "How often should I change my oil?",
        a: "Most manufacturers recommend an oil change every 12 months or 10,000 to 12,000 miles, whichever comes first. Check your vehicle handbook for specific intervals.",
      },
    ],
  },

  {
    slug: "diagnostic-check",
    name: "Diagnostic Check",
    tagline: "Pinpoint any fault with dealer level diagnostic equipment",
    price: "£60",
    isQuote: false,
    metaDescription:
      "Vehicle diagnostic check in Bedford for £60. Dealer level OBD diagnostics covering engine, ABS, airbag and all ECU systems. Clear jargon free report. AI Diagnostics Ltd.",
    about: [
      "The engine diagnostic check tests the vehicle's engine control computer (ECU) to scan all of the different systems to provide a list of any problems and error codes.",
      "Unlike a basic code reader that simply lists codes, our diagnostic service includes a thorough analysis of live data, allowing our technicians to see how your vehicle's systems are performing in real time.",
    ],
    checklist: [
      {
        category: "Scan Coverage",
        items: [
          "Engine ECU, fuel, ignition, emissions and sensor faults",
          "Transmission, gear selection, clutch and torque converter",
          "ABS, wheel speed sensors, pump and modulator",
          "Airbag / SRS, crash sensors, squib and control module",
        ],
      },
    ],
    faq: [
      {
        q: "What is OBD diagnostics?",
        a: "OBD stands for On Board Diagnostics. All vehicles made after 2001 (petrol) and 2004 (diesel) are required to have an OBD port. Connecting our diagnostic tool to this port allows us to communicate directly with all the electronic control units in your vehicle.",
      },
    ],
  },

  {
    slug: "clutch-replacement",
    name: "Clutch Replacement",
    tagline: "Slipping or stiff clutch? We'll have you back on the road",
    price: "POA",
    isQuote: true,
    metaDescription:
      "Clutch replacement in Bedford. Full clutch kit with pressure plate and release bearing. Flywheel inspection included. Price on application. AI Diagnostics Ltd.",
    about: [
      "A worn clutch makes driving uncomfortable and, if left too long, can leave you stranded. Common symptoms include a clutch pedal that feels spongy, slipping when pulling away or under acceleration, difficulty selecting gears, or a burning smell during normal driving.",
      "Our clutch replacements use a matched kit, clutch plate, pressure plate and release bearing from the same manufacturer, to ensure smooth operation and longevity.",
    ],
    checklist: [
      {
        category: "Kit Includes",
        items: [
          "Clutch plate (friction disc), new",
          "Pressure plate, new",
          "Release bearing (thrust bearing), new",
          "Flywheel, inspected and skimmed or replaced if required",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know my clutch is worn?",
        a: "Key signs of a worn clutch include the pedal feeling very high or very low before it bites, the engine revving without the car accelerating (slipping), difficulty getting into gear, a burning smell when driving, or a juddering sensation when pulling away.",
      },
    ],
  },

  {
    slug: "air-con-regas",
    name: "Air Conditioning Re-gas",
    tagline: "Restore your air conditioning to ice cold efficiency",
    price: "£60",
    isQuote: false,
    metaDescription:
      "Air con re gas in Bedford for £60. Full R134A refrigerant recharge, leak check, UV dye and performance test. AI Diagnostics Ltd Bedford.",
    about: [
      "Your Air Conditioning system should be checked and re gassed regularly. This will help to avoid premature failure and also ensure maximum cooling in hot weather.",
      "Before re gassing, we always perform a leak check to ensure there is no significant loss point in the system. UV dye is added to make future leak detection quick and straightforward.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Full system leak check before re gassing",
          "Refrigerant evacuation, old gas fully removed",
          "R134A re gas to manufacturer specified charge weight",
          "UV dye added for easy future leak detection",
          "Performance temperature test at vent",
        ],
      },
    ],
    faq: [
      {
        q: "How often does air conditioning need re gassing?",
        a: "Most manufacturers recommend an air con re gas every 2 to 3 years. If you have noticed your air conditioning is not as cold as it used to be, or it is not cooling at all, it is likely time for a re gas.",
      },
    ],
  },

  {
    slug: "brake-fluid-replacement",
    name: "Brake Fluid Replacement",
    tagline: "Fresh brake fluid keeps your stopping power at its best",
    price: "£70",
    isQuote: false,
    metaDescription:
      "Brake fluid replacement in Bedford for £70. Full four corner flush with DOT 4 or DOT 5.1. Brake system inspection included. AI Diagnostics Ltd.",
    about: [
      "The brake reservoir sweats and water gets into the brake fluid. This lowers the boiling point of the fluid which can reduce the efficiency of your brakes. Regular brake fluid replacement is recommended.",
      "Our brake fluid replacement service involves a complete flush of all four corners of the braking system, removing the old degraded fluid and replacing it with fresh DOT 4 or DOT 5.1 fluid as required by your vehicle.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Full flush of all four corners, all old fluid removed",
          "DOT 4 or DOT 5.1 fluid used as required by manufacturer",
          "Bleed nipple condition checked, replaced if seized or corroded",
          "Brake system inspection, lines, hoses and calipers",
        ],
      },
    ],
    faq: [
      {
        q: "How often should brake fluid be replaced?",
        a: "Most manufacturers recommend replacing brake fluid every two years. If you do not know when it was last changed, it is worth replacing it.",
      },
    ],
  },

  {
    slug: "coolant-change",
    name: "Coolant Change",
    tagline: "Prevent overheating and protect your engine year round",
    price: "£60",
    isQuote: false,
    metaDescription:
      "Coolant change in Bedford for £60. Full system flush and refill with manufacturer spec antifreeze. AI Diagnostics Ltd.",
    about: [
      "The Coolant Inhibitor is anti freeze with additives to assist cooling and give added protection to the internal waterways of the engine. It should be replaced regularly to ensure you do not get frost damage, and keeping your cooling system operating efficiently.",
      "Our coolant change service includes a full system flush to remove old degraded coolant and refill with fresh manufacturer specification antifreeze.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Full coolant system flush",
          "Refill with manufacturer specification antifreeze",
          "Coolant system pressure test",
          "Visual inspection of hoses and connections",
        ],
      },
    ],
    faq: [
      {
        q: "How often should coolant be changed?",
        a: "Most manufacturers recommend changing coolant every 2 to 5 years depending on the type of coolant used. Check your vehicle handbook for specific intervals.",
      },
    ],
  },

  {
    slug: "wheel-alignment",
    name: "Front Wheel Alignment",
    tagline: "Correct alignment saves tyres and improves fuel economy",
    price: "£60",
    isQuote: false,
    metaDescription:
      "Front wheel alignment in Bedford for £60. Laser alignment to manufacturer specification. Reduce tyre wear and improve handling. AI Diagnostics Ltd.",
    about: [
      "Front Wheel alignment may often be overlooked or even dismissed, but 9 out of 10 cars suffer from some form of misalignment and 85% suffer from front or steering wheel misalignment. Misalignment can cause costly tyre fatigue.",
      "Our wheel alignment service uses laser equipment to measure and adjust your vehicle's toe, camber and caster angles to manufacturer specification.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Laser alignment measurement",
          "Toe adjustment to manufacturer specification",
          "Before and after printout provided",
          "Visual inspection of suspension components",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know if my wheels need aligning?",
        a: "Common signs include uneven tyre wear, the steering wheel being off center when driving straight, or the car pulling to one side. We recommend checking alignment annually or after hitting a pothole or kerb.",
      },
    ],
  },

  {
    slug: "car-repairs",
    name: "General Car Repairs",
    tagline: "Expert repairs for all makes and models",
    price: "POA",
    isQuote: true,
    metaDescription:
      "Car repairs in Bedford. Expert mechanics for all makes and models. Honest quotes, quality parts, reliable service. AI Diagnostics Ltd.",
    about: [
      "We offer a full range of car repairs for all makes and models. From minor fixes to major mechanical work, our experienced technicians have the skills and equipment to get your vehicle back on the road.",
      "We provide honest quotes before starting any work and use quality parts to ensure lasting repairs. No job is too big or too small.",
    ],
    checklist: [
      {
        category: "Common Repairs",
        items: [
          "Brake repairs and replacements",
          "Suspension repairs",
          "Exhaust repairs and replacements",
          "Engine repairs",
          "Electrical fault finding and repair",
          "Timing belt replacement",
        ],
      },
    ],
    faq: [
      {
        q: "Do you provide quotes before starting work?",
        a: "Yes, we always provide a detailed quote before starting any repair work. You will know exactly what needs doing and how much it will cost before we begin.",
      },
    ],
  },

  {
    slug: "brake-repairs",
    name: "Brake Repairs",
    tagline: "Safe, reliable braking you can trust",
    price: "POA",
    isQuote: true,
    metaDescription:
      "Brake repairs in Bedford. Brake pads, discs, calipers and fluid. Quality parts, expert fitting. AI Diagnostics Ltd.",
    about: [
      "Your brakes are your vehicle's most important safety system. We carry out all types of brake repairs including pads, discs, calipers, brake lines and brake fluid replacement.",
      "We use quality parts and expert fitting to ensure your brakes perform safely and reliably. All brake work includes a road test to confirm proper operation.",
    ],
    checklist: [
      {
        category: "Brake Services",
        items: [
          "Brake pads replacement",
          "Brake discs replacement",
          "Brake caliper repair or replacement",
          "Brake fluid replacement",
          "Brake line repair",
          "Handbrake adjustment",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know if my brakes need replacing?",
        a: "Warning signs include squealing or grinding noises, vibration when braking, the brake pedal feeling spongy or going to the floor, or the brake warning light coming on. If you notice any of these, book a brake check as soon as possible.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
