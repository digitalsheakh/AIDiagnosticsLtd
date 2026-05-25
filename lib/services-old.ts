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
      "At AI Diagnostics Ltd, we are a fully DVSA authorised MOT testing station serving Bedford and the surrounding area. Our MOT tests are carried out by trained testers using calibrated equipment, ensuring your vehicle is assessed accurately and fairly. We follow the DVSA standard without cutting corners, you get a clear, honest pass or fail result with a full advisory report you can trust.",
      "We believe in complete transparency. There are no hidden charges, no upselling, and no pressure. If your vehicle fails, we will explain exactly what needs doing and give you a written estimate before any work begins. Many customers choose to combine their MOT with one of our service packages to save money and keep their vehicle in the best possible condition throughout the year.",
    ],
    checklist: [
      {
        category: "Safety Checks",
        items: [
          "Brakes — pedal feel, brake force balance and handbrake",
          "Lights — headlights, brake lights, indicators and fog lights",
          "Steering — column, rack, joints and power steering operation",
          "Tyres — tread depth (minimum 1.6mm), sidewall condition and pressures",
          "Horn — operation and audibility",
          "Wipers — condition, operation and washer function",
        ],
      },
      {
        category: "Emissions & Engine",
        items: [
          "Exhaust — condition, security and emissions levels",
          "Emissions test — petrol or diesel to DVSA limits",
          "Engine mounts — security and condition",
        ],
      },
      {
        category: "Body & Structure",
        items: [
          "Bodywork condition — no sharp edges or structural damage",
          "Doors — open, close and lock correctly",
          "Mirrors — presence, condition and adjustment",
          "Seats — security and adjustment",
          "Seatbelts — operation, condition and anchorage",
        ],
      },
    ],
    bundles: [
      { label: "MOT + Interim Service", price: "£169.57" },
      { label: "MOT + Full Service", price: "£229" },
      { label: "MOT + Major Service", price: "£299" },
    ],
    faq: [
      {
        q: "How long does an MOT take?",
        a: "A standard MOT typically takes 45–60 minutes. If advisories are found and you choose to have them repaired at the same time, allow additional time.",
      },
      {
        q: "What happens if my car fails its MOT?",
        a: "We will give you a full written explanation of every failure item along with a no-obligation repair estimate. You can choose to have the repairs done with us or take your vehicle elsewhere — we will never pressure you.",
      },
      {
        q: "Is a free retest included?",
        a: "Yes. If your vehicle fails and you have the failed items repaired by us, we offer a free partial retest on those specific items within 10 working days.",
      },
      {
        q: "Can I drive my car after a failed MOT?",
        a: "If your current MOT certificate has expired, you must not drive the vehicle on public roads until it passes — except to drive to a pre-booked MOT appointment. If your MOT is still valid (it has not expired yet), you may continue to drive legally until the expiry date, though doing so is not recommended if dangerous faults are present.",
      },
    ],
  },

  {
    slug: "interim-service",
    name: "Interim Service",
    tagline: "Essential oil service every 6 months or 6,000 miles",
    price: "£129.57",
    isQuote: false,
    metaDescription:
      "Interim car service in Bedford — £129.57. Oil & filter change plus a 25-point inspection. Ideal every 6 months or 6,000 miles. AI Diagnostics Ltd.",
    about: [
      "Our Interim Service is designed for drivers who cover higher mileage or want to keep on top of their vehicle's health between annual services. Carried out every 6 months or 6,000 miles, it centres around a quality engine oil and filter change with the correct grade oil for your vehicle, keeping your engine lubricated and running cleanly.",
      "Alongside the oil change, our technicians carry out a thorough 25-point inspection covering safety, fluid levels and general vehicle condition. This gives you peace of mind that the key systems are checked and any emerging issues are flagged early — before they become expensive problems.",
    ],
    checklist: [
      {
        category: "Fluids",
        items: [
          "Engine oil & filter — drained and refilled with correct grade",
          "Screen wash — topped up to full",
          "Brake fluid level — checked and topped up if required",
        ],
      },
      {
        category: "Safety",
        items: [
          "Tyre pressures — checked and corrected to manufacturer spec",
          "Tyre condition — tread depth and sidewall inspection",
          "Lights check — all lights tested front and rear",
          "Brake pad check — visual inspection of remaining pad thickness",
        ],
      },
      {
        category: "General",
        items: [
          "Air filter — visual inspection, replacement advised if needed",
          "Wiper blades — visual condition check",
          "Battery condition — voltage check under load",
        ],
      },
    ],
    bundles: [{ label: "With MOT", price: "£169.57" }],
    faq: [
      {
        q: "How often should I have an interim service?",
        a: "We recommend an interim service every 6 months or 6,000 miles — whichever comes first. It is ideal for drivers who cover more miles than average between their annual full services.",
      },
      {
        q: "What is the difference between an interim and a full service?",
        a: "An interim service focuses on the essentials — primarily the oil and filter change plus a safety inspection. A full service is more comprehensive, covering filters, fluids, brakes, electrical checks, and more, and is typically done annually.",
      },
      {
        q: "Can I combine the interim service with an MOT?",
        a: "Yes — book both together and save. Our MOT + Interim Service bundle costs just £169.57, saving you money compared to booking them separately.",
      },
    ],
  },

  {
    slug: "full-service",
    name: "Full Service",
    tagline: "Comprehensive 40-point annual service for peace of mind",
    price: "£189",
    isQuote: false,
    metaDescription:
      "Full car service in Bedford — £189. Comprehensive 40-point annual service covering fluids, filters, brakes, tyres and electrical systems. AI Diagnostics Ltd.",
    about: [
      "Our Full Service is our most popular annual service, covering 40 inspection and maintenance points to keep your vehicle running at its best. Carried out once a year or every 12,000 miles, it goes well beyond a basic oil change — replacing key filters, checking all fluid levels, inspecting the brakes and tyres in detail, and testing the vehicle's electrical and safety systems.",
      "Using quality OE-specification parts and the correct oil grade for your vehicle, our Full Service helps protect your engine, maintain reliability, and preserve your vehicle's resale value. We provide a full written report of everything checked and any advisories found, so you always know the condition of your car.",
    ],
    checklist: [
      {
        category: "Fluids & Filters",
        items: [
          "Engine oil & filter — drained and replaced with correct grade",
          "Air filter — inspected and replaced",
          "Cabin pollen filter — inspected and replaced",
          "Coolant level — checked and topped up",
          "Brake fluid — level and condition checked",
          "Power steering fluid — level checked and topped up",
        ],
      },
      {
        category: "Brakes & Tyres",
        items: [
          "Brake pads — thickness measured front and rear",
          "Brake discs — condition and wear assessed",
          "Brake fluid condition — moisture content tested",
          "Tyre tread depth — all four corners measured",
          "Tyre pressures — corrected to manufacturer specification",
          "Wheel condition — checked for damage or corrosion",
        ],
      },
      {
        category: "Electrical & Safety",
        items: [
          "Battery health test — load test and voltage check",
          "All lights — headlights, brake lights, indicators and fog lights",
          "Horn — operation confirmed",
          "Wipers — condition and washer function",
          "Seatbelts — retraction, locking and condition",
          "Mirrors — condition and adjustment",
        ],
      },
    ],
    bundles: [{ label: "With MOT", price: "£229" }],
    faq: [
      {
        q: "How often should I have a full service?",
        a: "A full service is recommended once a year or every 12,000 miles — whichever comes first. It is the ideal annual health check for most drivers.",
      },
      {
        q: "Does a full service include a cabin filter?",
        a: "Yes. Unlike an interim service, our full service includes replacement of both the engine air filter and the cabin pollen filter as standard.",
      },
      {
        q: "Can I combine the full service with an MOT?",
        a: "Yes — our MOT + Full Service bundle is £229, saving you money and giving you complete peace of mind in one visit.",
      },
    ],
  },

  {
    slug: "major-service",
    name: "Major Service",
    tagline: "Complete 60-point service — the most thorough care for your vehicle",
    price: "£259",
    isQuote: false,
    metaDescription:
      "Major car service in Bedford — £259. Our most comprehensive 60-point service including coolant flush, brake fluid flush, spark plugs and full suspension checks. AI Diagnostics Ltd.",
    about: [
      "Our Major Service is our most comprehensive service package, covering 60 inspection and maintenance points. Recommended every two years or 24,000 miles, it goes deeper than a standard full service by including a coolant system flush, a brake fluid flush, spark plug replacement (petrol engines), and a detailed suspension and drivetrain inspection. It is the most thorough care you can give your vehicle short of a full mechanical overhaul.",
      "Every major service is carried out by our experienced technicians using quality OE-equivalent parts and manufacturer-approved fluids. You receive a full written report of all work carried out and any items we recommend for future attention. This service is especially recommended before high-mileage road trips, after buying a used vehicle, or when your vehicle has not been serviced for an extended period.",
    ],
    checklist: [
      {
        category: "Filters & Fluids",
        items: [
          "Engine oil & filter — drained and replaced with correct grade",
          "Air filter — replaced",
          "Cabin pollen filter — replaced",
          "Fuel filter — inspected and replaced where applicable",
          "Spark plugs — replaced (petrol engines)",
          "Coolant — full system flush and refill to specification",
          "Brake fluid — full flush and replacement with fresh DOT fluid",
          "Power steering fluid — level and condition checked",
        ],
      },
      {
        category: "Brakes & Suspension",
        items: [
          "Brake pads — thickness measured front and rear",
          "Brake discs — condition and wear assessed",
          "Brake calipers — operation and slide pins checked",
          "Wheel bearings — play and noise check",
          "Suspension arms and bushes — visual and tactile inspection",
          "Shock absorbers — visual check for leaks and condition",
          "Wheel alignment check — toe and tracking assessment",
        ],
      },
      {
        category: "Electrical & Ancillaries",
        items: [
          "Battery load test — full discharge capacity check",
          "Alternator output — charging voltage confirmed",
          "All lights — headlights, brake lights, indicators, fogs",
          "Wipers and washers — condition and operation",
          "Auxiliary belt — condition and tension check",
          "Air conditioning — performance temperature test",
        ],
      },
    ],
    bundles: [{ label: "With MOT", price: "£299" }],
    faq: [
      {
        q: "How often should I have a major service?",
        a: "A major service is typically recommended every two years or 24,000 miles, whichever comes first. Always refer to your vehicle's handbook for manufacturer-specific intervals.",
      },
      {
        q: "Are spark plugs always included?",
        a: "Spark plugs are included for petrol engines as part of the major service. Diesel engines do not have spark plugs, but the glow plugs will be inspected and replacement advised if needed.",
      },
      {
        q: "Can I combine the major service with an MOT?",
        a: "Yes — our MOT + Major Service bundle is just £299, offering excellent value and giving your vehicle the most comprehensive care available in a single visit.",
      },
    ],
  },

  {
    slug: "pre-mot-check",
    name: "Pre-MOT Check",
    tagline: "Catch failures before your official MOT — save money and time",
    price: "£30",
    isQuote: false,
    metaDescription:
      "Pre-MOT check in Bedford — £30. Identify potential MOT failures before your test. Save money by fixing issues in advance. AI Diagnostics Ltd Bedford.",
    about: [
      "A pre-MOT check is a smart investment for any driver who wants to avoid the surprise of a failed MOT. For just £30, our technicians carry out a thorough inspection of your vehicle using the same DVSA standards applied during the official test. Any potential failures or advisories are identified and explained to you before your official appointment.",
      "By knowing about issues in advance, you have the time to decide whether to have them repaired with us, source parts yourself, or simply budget for the work. It can also save you money — fixing a problem before the test costs the same as after, but avoids the inconvenience of a failure certificate and a repeat booking.",
    ],
    checklist: [
      {
        category: "Safety Checks",
        items: [
          "Brakes — pedal feel, brake force and handbrake",
          "Lights — all lights tested front and rear",
          "Steering — column, rack and joint inspection",
          "Tyres — tread depth, sidewall and pressure check",
          "Horn — operation and audibility",
          "Wipers — condition and washer operation",
        ],
      },
      {
        category: "Emissions & Engine",
        items: [
          "Exhaust — condition, security and leak check",
          "Emissions — visual smoke check and system assessment",
          "Engine mounts — security and condition",
        ],
      },
      {
        category: "Body & Structure",
        items: [
          "Bodywork — sharp edges, corrosion and structural condition",
          "Doors — open, close and lock correctly",
          "Mirrors — presence, condition and adjustment",
          "Seats — security and adjustment",
          "Seatbelts — operation, condition and anchorage",
        ],
      },
    ],
    faq: [
      {
        q: "Is a pre-MOT check the same as an MOT?",
        a: "No. A pre-MOT check is a workshop inspection using the same criteria as the official test, but it does not produce a legally valid MOT certificate. It is designed purely to identify potential failures in advance.",
      },
      {
        q: "How much notice do I need to book a pre-MOT check?",
        a: "We usually have slots available at short notice. We recommend booking your pre-MOT check at least a week before your official MOT to allow time for any repairs to be carried out.",
      },
      {
        q: "Will I get a report of any issues found?",
        a: "Yes. We provide a clear written report of everything checked, highlighting any items that would likely fail or receive an advisory on an official MOT, along with a repair estimate for each item.",
      },
    ],
  },

  {
    slug: "diagnostic-check",
    name: "Diagnostic Check",
    tagline: "Pinpoint any fault with dealer-level diagnostic equipment",
    price: "£60",
    isQuote: true,
    metaDescription:
      "Vehicle diagnostic check in Bedford — £60. Dealer-level OBD diagnostics covering engine, ABS, airbag and all ECU systems. Clear jargon-free report. AI Diagnostics Ltd.",
    about: [
      "Modern vehicles are controlled by multiple electronic control units (ECUs) that monitor everything from engine performance to airbag readiness. When a warning light appears on your dashboard, it means one of these systems has logged a fault code. Our diagnostic check uses the same dealer-level equipment used by franchised dealerships to read, interpret, and explain every fault code stored in your vehicle's systems.",
      "Unlike a basic code reader that simply lists codes, our diagnostic service includes a thorough analysis of live data — allowing our technicians to see how your vehicle's systems are performing in real time. You receive a clear, jargon-free written report listing all faults found and an estimated cost to repair before you commit to anything.",
    ],
    checklist: [
      {
        category: "Scan Coverage",
        items: [
          "Engine ECU — fuel, ignition, emissions and sensor faults",
          "Transmission — gear selection, clutch and torque converter",
          "ABS — wheel speed sensors, pump and modulator",
          "Airbag / SRS — crash sensors, squib and control module",
          "Body control module — windows, central locking, lighting",
          "Climate control — compressor, sensors and blend motors",
        ],
      },
      {
        category: "Report Includes",
        items: [
          "All fault codes listed with descriptions",
          "Live data graphs captured if needed for diagnosis",
          "Clear written jargon-free report provided",
          "Estimated repair cost for each fault found",
        ],
      },
    ],
    faq: [
      {
        q: "What is OBD diagnostics?",
        a: "OBD stands for On-Board Diagnostics. All vehicles made after 2001 (petrol) and 2004 (diesel) are required to have an OBD port. Connecting our diagnostic tool to this port allows us to communicate directly with all the electronic control units in your vehicle and read any stored fault codes.",
      },
      {
        q: "Will the diagnostic check fix my fault?",
        a: "The diagnostic check identifies the fault — it does not repair it. Once we know what the fault code relates to, we can give you a clear repair estimate. In many cases, clearing a code is not enough; the underlying issue must be fixed to prevent it returning.",
      },
      {
        q: "Will it work on all cars?",
        a: "Our equipment covers the vast majority of cars, vans and light commercial vehicles. We have specialist software for German brands (BMW, Mercedes, Audi, VW Group) as well as generic OBD coverage for all other makes. If you are unsure, give us a call and we will confirm before you book.",
      },
    ],
  },

  {
    slug: "timing-belt",
    name: "Timing Belt Replacement",
    tagline: "Protect your engine — replace your timing belt before it breaks",
    price: "POA",
    isQuote: true,
    metaDescription:
      "Timing belt replacement in Bedford. OEM-quality parts, tensioners and water pump. Protect your engine from catastrophic failure. Price on application — AI Diagnostics Ltd.",
    about: [
      "The timing belt (also known as a cambelt) is one of the most critical components in your engine. It synchronises the crankshaft and camshaft, ensuring the engine's valves open and close at exactly the right moment. If the timing belt snaps or skips a tooth, the result can be catastrophic — bent valves, damaged pistons, and in many cases a complete engine write-off.",
      "Timing belt replacement intervals vary by manufacturer — typically between 40,000 and 80,000 miles or every 4–5 years. Our technicians work to manufacturer torque specifications using OEM or OE-equivalent parts, ensuring the job is done correctly the first time. We strongly recommend replacing the water pump at the same time, as it is driven by the same belt and adds very little cost compared to a separate later job.",
    ],
    checklist: [
      {
        category: "What's Included",
        items: [
          "Timing belt — new OEM or OE-equivalent belt fitted",
          "Tensioner pulley — replaced as standard",
          "Idler pulley — replaced as standard",
          "Water pump replacement — strongly recommended, quoted separately",
        ],
      },
      {
        category: "Quality",
        items: [
          "OEM or OE-equivalent parts used throughout",
          "All components torqued to manufacturer specification",
          "Service intervals reset and documented",
        ],
      },
    ],
    faq: [
      {
        q: "When should my timing belt be replaced?",
        a: "Replacement intervals vary by manufacturer, but most vehicles require a new timing belt every 40,000–80,000 miles or every 4–5 years, whichever comes first. Always check your vehicle handbook for the exact interval. If you have bought a used vehicle and do not know its service history, replace it as a precaution.",
      },
      {
        q: "What happens if the timing belt snaps?",
        a: "On an interference engine (the majority of modern cars), a snapped timing belt causes the pistons and valves to collide. This typically results in bent valves, damaged pistons and cylinder head damage — often requiring a full engine rebuild or replacement. The repair bill can easily exceed £2,000–£5,000, making a belt change at the correct interval extremely good value.",
      },
      {
        q: "How long does a timing belt replacement take?",
        a: "Timing belt replacement typically takes between 2 and 5 hours depending on the engine layout and whether a water pump is being replaced at the same time. We will give you an accurate time estimate when you book.",
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
      "Clutch replacement in Bedford. Full clutch kit with pressure plate and release bearing. Flywheel inspection included. Price on application — AI Diagnostics Ltd.",
    about: [
      "A worn clutch makes driving uncomfortable and, if left too long, can leave you stranded. Common symptoms include a clutch pedal that feels spongy, slipping when pulling away or under acceleration, difficulty selecting gears, or a burning smell during normal driving. The sooner a worn clutch is replaced, the less risk there is of secondary damage to the flywheel or gearbox.",
      "Our clutch replacements use a matched kit — clutch plate, pressure plate and release bearing from the same manufacturer — to ensure smooth operation and longevity. We always inspect the flywheel during the job and will advise if a skim or replacement is needed. All work is followed by a full road test to ensure the clutch engages correctly and the biting point feels right.",
    ],
    checklist: [
      {
        category: "Kit Includes",
        items: [
          "Clutch plate (friction disc) — new",
          "Pressure plate — new",
          "Release bearing (thrust bearing) — new",
          "Flywheel — inspected and skimmed or replaced if required",
        ],
      },
      {
        category: "Quality",
        items: [
          "Brand-matched clutch kit from a reputable manufacturer",
          "Gearbox re-sealed during removal if required",
          "Full road test on completion",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know my clutch is worn?",
        a: "Key signs of a worn clutch include: the pedal feeling very high or very low before it bites, the engine revving without the car accelerating (slipping), difficulty getting into gear, a burning smell when driving, or a juddering sensation when pulling away. If you notice any of these, book a check as soon as possible.",
      },
      {
        q: "How long does a clutch replacement take?",
        a: "Most clutch replacements take between 3 and 6 hours depending on the vehicle and accessibility of the gearbox. Front-wheel-drive cars with transverse engines are generally quicker; rear-wheel-drive vehicles and those with sub-frames may take longer. We will give you a time estimate when you enquire.",
      },
      {
        q: "Is the flywheel always replaced at the same time?",
        a: "Not always. We inspect the flywheel during every clutch replacement. If the surface is within tolerance and has no hotspots or deep scoring, it can often be skimmed rather than replaced. We will always advise you honestly and only recommend replacement when genuinely necessary.",
      },
    ],
  },

  {
    slug: "german-specialist",
    name: "German Specialist",
    tagline: "Dealer-level expertise for BMW, Mercedes, Audi and VW Group",
    price: "POA",
    isQuote: true,
    metaDescription:
      "German car specialist in Bedford — BMW, Mercedes, Audi, VW, SEAT, Skoda and Porsche. Manufacturer-level diagnostics, coding and OEM parts. AI Diagnostics Ltd.",
    about: [
      "German vehicles — BMW, Mercedes-Benz, Audi, Volkswagen, SEAT, Skoda and Porsche — are precision-engineered machines that benefit enormously from specialist knowledge. Generic garage tools and generic parts are rarely adequate for these vehicles. At AI Diagnostics Ltd, we use manufacturer-level diagnostic software that communicates with every module in your German car, giving us the same depth of access as a franchised dealer.",
      "Whether you need a service, a repair, ECU coding for a new component, or ADAS camera calibration after a windscreen replacement, our team has the equipment and experience to handle it correctly. We source genuine and OE-equivalent parts to ensure quality is never compromised — all at prices significantly below main dealer rates.",
    ],
    checklist: [
      {
        category: "Vehicles Covered",
        items: [
          "BMW — all series including M vehicles",
          "Mercedes-Benz — all classes including AMG",
          "Audi — all models including S and RS",
          "Volkswagen — all models",
          "SEAT — all models",
          "Skoda — all models",
          "Porsche — Cayenne, Macan and Panamera",
        ],
      },
      {
        category: "Capabilities",
        items: [
          "Manufacturer-level diagnostic software for full system access",
          "ECU coding and programming for new or replacement modules",
          "ADAS camera and sensor calibration",
          "Genuine and OEM parts sourced for all models",
        ],
      },
    ],
    faq: [
      {
        q: "Why do German cars need a specialist?",
        a: "German vehicles use proprietary communication protocols and complex software that generic diagnostic tools cannot fully access. Without the correct software, many faults cannot be read, adaptations cannot be reset, and replacement modules cannot be coded — leading to warning lights, incorrect operation or further damage.",
      },
      {
        q: "Can you code a replacement battery or module?",
        a: "Yes. BMW, Mercedes and Audi in particular require battery registration when a new battery is fitted — without this, the charging system does not adapt correctly and battery life is reduced. We also code replacement modules including ECUs, instrument clusters, door control units and more.",
      },
      {
        q: "Will servicing my German car with you affect my warranty?",
        a: "No. Under block exemption regulations, you are entitled to have your vehicle serviced by any VAT-registered garage using manufacturer-specification parts without voiding your warranty. We use the correct oil grades, genuine or OE-quality parts, and record all work on your vehicle's service history.",
      },
    ],
  },

  {
    slug: "air-con-regas",
    name: "Air Con Re-gas",
    tagline: "Restore your air conditioning to ice-cold efficiency",
    price: "£60",
    isQuote: false,
    metaDescription:
      "Air con re-gas in Bedford — £60. Full R134A refrigerant recharge, leak check, UV dye and performance test. AI Diagnostics Ltd Bedford.",
    about: [
      "Air conditioning systems naturally lose refrigerant over time — typically around 10–15% per year — even with no obvious leaks or faults. Once the refrigerant level drops sufficiently, the system stops cooling effectively or switches off entirely. Our air con re-gas service restores your refrigerant to the correct charge, bringing your air conditioning back to full cold performance.",
      "Before re-gassing, we always perform a leak check to ensure there is no significant loss point in the system. Adding refrigerant to a leaking system is a short-term fix that wastes money, so we identify and advise on any leaks first. UV dye is added to make future leak detection quick and straightforward.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Full system leak check before re-gassing",
          "Refrigerant evacuation — old gas fully removed",
          "R134A re-gas to manufacturer-specified charge weight",
          "UV dye added for easy future leak detection",
          "Performance temperature test at vent",
        ],
      },
      {
        category: "Also Checked",
        items: [
          "Cabin pollen filter condition — replacement advised if needed",
          "Compressor operation — clutch engagement confirmed",
          "Condenser — visual inspection for damage or blockage",
        ],
      },
    ],
    faq: [
      {
        q: "How often does air conditioning need re-gassing?",
        a: "Most manufacturers recommend an air con re-gas every 2–3 years. If you have noticed your air conditioning is not as cold as it used to be, or it is not cooling at all, it is likely time for a re-gas.",
      },
      {
        q: "What refrigerant do you use?",
        a: "Most vehicles manufactured before 2017 use R134A refrigerant. Vehicles manufactured from 2017 onwards typically use R1234yf. We will confirm which refrigerant your vehicle requires before the service.",
      },
      {
        q: "Why is my air conditioning not blowing cold?",
        a: "The most common cause is low refrigerant due to normal gradual loss. Other causes include a faulty compressor, a blocked condenser, a leaking seal or hose, or a faulty blend motor. Our re-gas service includes a system check so we can identify the cause and advise accordingly.",
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
      "Brake fluid replacement in Bedford — £70. Full four-corner flush with DOT 4 or DOT 5.1. Brake system inspection included. AI Diagnostics Ltd.",
    about: [
      "Brake fluid is hygroscopic — it absorbs moisture from the air over time. As moisture content increases, the boiling point of the fluid drops significantly, which can cause brake fade under heavy use and, in extreme cases, brake failure. Most manufacturers recommend replacing brake fluid every two years regardless of mileage to maintain safe, consistent braking performance.",
      "Our brake fluid replacement service involves a complete flush of all four corners of the braking system, removing the old degraded fluid and replacing it with fresh DOT 4 or DOT 5.1 fluid as required by your vehicle. We also inspect the brake lines, bleed nipples, and caliper condition during the process, flagging any issues we find.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Full flush of all four corners — all old fluid removed",
          "DOT 4 or DOT 5.1 fluid used as required by manufacturer",
          "Bleed nipple condition checked — replaced if seized or corroded",
          "Brake system inspection — lines, hoses and calipers",
        ],
      },
    ],
    faq: [
      {
        q: "How often should brake fluid be replaced?",
        a: "Most manufacturers recommend replacing brake fluid every two years. Some vehicles have a brake fluid quality sensor that will illuminate a warning light when the moisture content is too high. As a general rule, if you do not know when it was last changed, it is worth replacing it.",
      },
      {
        q: "What is the difference between DOT 4 and DOT 5.1?",
        a: "Both DOT 4 and DOT 5.1 are glycol-based fluids compatible with most vehicles. DOT 5.1 has a higher boiling point and is often specified for performance or high-demand applications. We will always use the grade specified by your vehicle manufacturer.",
      },
      {
        q: "Can old brake fluid cause brake fade?",
        a: "Yes. As brake fluid absorbs moisture, its boiling point decreases. Under heavy or prolonged braking, the fluid can boil, creating gas bubbles in the brake lines. Gas is compressible, which causes the brake pedal to feel spongy and reduces braking force — a phenomenon known as brake fade.",
      },
    ],
  },

  {
    slug: "coolant-change",
    name: "Coolant Change",
    tagline: "Prevent overheating and protect your engine year-round",
    price: "£70",
    isQuote: false,
    metaDescription:
      "Coolant change in Bedford — £70. Full drain, flush and refill to manufacturer specification. Thermostat and hose inspection included. AI Diagnostics Ltd.",
    about: [
      "Engine coolant does more than prevent freezing in winter — it also prevents overheating in summer, protects against internal corrosion, and lubricates the water pump seal. Over time, coolant degrades and becomes acidic, losing its ability to protect the cooling system and potentially causing corrosion in the radiator, cylinder head and water pump passages.",
      "Our coolant change service involves draining the old coolant completely, flushing the system, and refilling with the correct coolant type and concentration for your vehicle. We also carry out a pressure test to check for leaks and inspect the thermostat, radiator hoses and expansion tank for signs of deterioration.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Full coolant drain and flush — old coolant fully removed",
          "New coolant — correct type and concentration to manufacturer specification",
          "Cooling system pressure test — checked for leaks",
          "Thermostat check — operation and temperature response",
          "Hose condition inspection — radiator and heater hoses",
        ],
      },
    ],
    faq: [
      {
        q: "How often should coolant be changed?",
        a: "Most manufacturers recommend changing coolant every 2–5 years depending on the coolant type. Long-life coolant (typically OAT or HOAT-based) can last longer, but should still be tested periodically. Check your vehicle handbook for the specific interval.",
      },
      {
        q: "What happens if coolant is not changed?",
        a: "Degraded coolant becomes acidic and begins to corrode the aluminium components in your cooling system, including the radiator, cylinder head, and water pump. It also loses its antifreeze and anti-boil properties, increasing the risk of both freezing in winter and overheating in summer.",
      },
      {
        q: "Can I mix different types of coolant?",
        a: "No. Different coolant types (OAT, HOAT, IAT) use incompatible inhibitor chemistries that react badly when mixed, causing sludge formation and corrosion. We always use the correct coolant type specified by your vehicle manufacturer and never mix types.",
      },
    ],
  },

  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    tagline: "Correct alignment saves tyres and improves fuel economy",
    price: "£55",
    isQuote: false,
    metaDescription:
      "4-wheel laser alignment in Bedford — £55. Printed before and after report. Reduces tyre wear and improves handling. AI Diagnostics Ltd Bedford.",
    about: [
      "Wheel alignment — also called tracking — refers to the angle and direction at which your tyres make contact with the road. Over time, hitting potholes, kerbs or speed bumps causes the alignment to drift from the manufacturer's specification. Incorrect alignment causes uneven and accelerated tyre wear, pulling to one side, reduced fuel efficiency, and imprecise steering response.",
      "Our 4-wheel laser alignment service measures all four wheels simultaneously and adjusts them to your vehicle manufacturer's exact specification. We provide a printed report showing the before and after measurements so you can see exactly what was corrected. Alignment should be checked at least once a year and always after hitting a significant kerb or pothole, or following suspension work.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "4-wheel laser alignment check — all four wheels measured simultaneously",
          "Printed before and after report — showing exact measurements and corrections",
          "Steering angle sensor reset if required after adjustment",
          "Tyre wear assessment — patterns indicating past misalignment flagged",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know if my wheel alignment is off?",
        a: "Common signs include your vehicle pulling to the left or right when driving straight, uneven tyre wear (one side wearing faster than the other), a steering wheel that is off-centre when driving straight, or a steering wheel that vibrates at motorway speeds.",
      },
      {
        q: "How often should I have the alignment checked?",
        a: "We recommend checking alignment at least once a year, or whenever you notice pulling, uneven tyre wear, or after hitting a significant pothole or kerb. It should also be checked after any suspension or steering component replacement.",
      },
      {
        q: "What is the difference between 2-wheel and 4-wheel alignment?",
        a: "2-wheel alignment (front only) only adjusts the front axle. 4-wheel alignment checks and adjusts all four wheels relative to the vehicle's centre line, which is far more accurate and is essential for vehicles with independent rear suspension — which includes most modern cars.",
      },
    ],
  },

  {
    slug: "brake-pads-discs",
    name: "Brake Pads & Discs",
    tagline: "Quality brakes for safe, confident stopping",
    price: "POA",
    isQuote: true,
    metaDescription:
      "Brake pads and discs replacement in Bedford. OEM or quality aftermarket parts, full road test. Front, rear or all four corners. Price on application — AI Diagnostics Ltd.",
    about: [
      "Your brakes are the single most important safety system on your vehicle. Worn brake pads reduce stopping distances and, if left too long, can damage the brake discs, turning a relatively inexpensive pad replacement into a significantly more costly job. We inspect brake condition as part of every service, but you can also book a dedicated brake inspection at any time.",
      "We offer brake pad replacement alone, pad and disc replacement as a pair (front or rear), or a full four-corner replacement. All work uses OEM or quality aftermarket parts chosen to match your vehicle's specification. Every brake job is followed by a proper bedding-in road test to ensure the brakes are operating correctly before you drive away.",
    ],
    checklist: [
      {
        category: "Options",
        items: [
          "Pads only — front or rear axle",
          "Pads and discs — front axle",
          "Pads and discs — rear axle",
          "Full four-corner pads and discs",
        ],
      },
      {
        category: "Parts",
        items: [
          "OEM or quality aftermarket parts to manufacturer specification",
          "Bedding-in road test carried out on completion",
          "All fixings torqued to specification",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know my brake pads need replacing?",
        a: "Signs of worn brake pads include a squealing or grinding noise when braking, a longer stopping distance than normal, a vibrating or pulsating brake pedal, or a brake warning light on your dashboard. Most pads have a wear indicator that emits a high-pitched squeal when the pad is near minimum thickness.",
      },
      {
        q: "Do discs always need replacing with pads?",
        a: "Not always. If the discs are within minimum thickness, free from deep scoring and not showing signs of cracking or warping, they can often be reused with new pads. However, if the discs are worn, scored or lipped, replacing them with the pads is strongly recommended for optimal braking performance and safety.",
      },
      {
        q: "How long does a brake pad and disc replacement take?",
        a: "Replacing pads and discs on a single axle typically takes 1–1.5 hours. A full four-corner replacement takes around 2.5–3 hours. We will give you an accurate time estimate when you enquire.",
      },
    ],
  },

  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    tagline: "Don't get stranded — we test and replace on the spot",
    price: "POA",
    isQuote: true,
    metaDescription:
      "Car battery replacement in Bedford. Battery load test, correct spec battery sourced, coding for BMW/Mercedes/Audi. Alternator output check. AI Diagnostics Ltd.",
    about: [
      "A failing battery is one of the most common causes of a breakdown, and modern vehicles give very little warning before the battery fails completely. Cold weather, short journeys, and age all accelerate battery degradation. If you notice slow cranking when starting, dimming lights, or your battery warning light is on, it is time to have it tested.",
      "We carry out a full battery health load test to accurately measure the battery's remaining capacity and cold cranking amps. If replacement is required, we source the correct specification battery for your vehicle — the right size, the right CCA rating, and if applicable the right technology (AGM or EFB for stop-start vehicles). For BMW, Mercedes and Audi vehicles, we also carry out the essential battery registration coding to ensure the charging system calibrates correctly to the new battery.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Battery health load test — remaining capacity and CCA measured",
          "Correct specification battery sourced — standard, AGM or EFB as required",
          "Battery registration and coding — BMW, Mercedes and Audi",
          "Alternator output check — charging voltage confirmed",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know my battery needs replacing?",
        a: "Common signs include the engine cranking slowly when starting, warning lights appearing on your dashboard, electrical systems behaving erratically, or a battery that keeps going flat. If your battery is more than 4–5 years old, it is worth having it load tested even if you have not noticed symptoms.",
      },
      {
        q: "What is battery registration and why is it needed?",
        a: "BMW, Mercedes, Audi and some other manufacturers use intelligent charging systems that learn the characteristics of the original battery over time. When a new battery is fitted, the system must be told via diagnostic software so it can recalibrate its charging strategy. Without this, the new battery may be overcharged, undercharged, or deteriorate prematurely.",
      },
      {
        q: "What is an AGM battery?",
        a: "AGM (Absorbent Glass Mat) batteries are required by vehicles with stop-start systems and energy recuperation. They can handle a far greater number of charge and discharge cycles than conventional lead-acid batteries. Fitting a standard battery in place of an AGM-specified one is a false economy — it will fail prematurely.",
      },
    ],
  },

  {
    slug: "oil-filter-change",
    name: "Oil & Filter Change",
    tagline: "Quick engine oil and filter change while you wait",
    price: "£79.57",
    isQuote: false,
    metaDescription:
      "Oil and filter change in Bedford — £79.57. Correct grade engine oil, genuine or OE filter, sump plug washer and dashboard reset. While you wait. AI Diagnostics Ltd.",
    about: [
      "Engine oil is your engine's lifeblood. It lubricates moving parts, carries away heat, suspends contaminants, and prevents corrosion. Over time, oil breaks down and becomes saturated with combustion by-products, losing its ability to protect. Regular oil changes are the single most effective thing you can do to extend your engine's life.",
      "Our oil and filter change service uses the correct grade of engine oil for your specific vehicle — whether that is 0W-20, 5W-30, 5W-40, or another specification — along with a genuine or OE-quality filter. We replace the sump plug washer as a matter of course, check the oil pressure and level after filling, and reset your service interval indicator.",
    ],
    checklist: [
      {
        category: "Service Includes",
        items: [
          "Correct grade engine oil — manufacturer-specification viscosity and standard",
          "Genuine or OE-quality oil filter",
          "Sump plug washer replaced as standard",
          "Oil level and pressure check after filling",
          "Service interval dashboard reset",
        ],
      },
    ],
    faq: [
      {
        q: "How often should I change my oil and filter?",
        a: "Most modern vehicles require an oil change every 10,000–12,000 miles or once a year, whichever comes first. High-performance engines, older vehicles, and those used for short journeys frequently may benefit from more regular changes. Always check your vehicle handbook.",
      },
      {
        q: "Does the oil grade matter?",
        a: "Yes, significantly. Modern engines are designed with very tight tolerances that require a specific oil viscosity. Using the wrong grade can affect fuel economy, increase engine wear, or in some cases cause damage. We always use the grade specified by your vehicle manufacturer — never a generic substitute.",
      },
      {
        q: "Can I wait while the oil and filter change is done?",
        a: "Yes. An oil and filter change typically takes 30–45 minutes. We have a comfortable waiting area, and you are welcome to wait on site while the work is completed.",
      },
    ],
  },

  {
    slug: "vehicle-safety-check",
    name: "Vehicle Safety Check",
    tagline: "A thorough safety inspection — great before a long journey or purchase",
    price: "£30",
    isQuote: false,
    metaDescription:
      "Vehicle safety check in Bedford — £30. Comprehensive inspection of brakes, tyres, lights, steering, suspension and more. Ideal before a long trip or used car purchase. AI Diagnostics Ltd.",
    about: [
      "Our Vehicle Safety Check gives you a thorough assessment of your vehicle's key safety systems for just £30. It is ideal before a long motorway journey, a trip abroad, at the start of a new season, or when buying a used vehicle privately and wanting an independent assessment of its condition. Our technicians check all the components that most affect your safety on the road.",
      "You receive a clear written report listing every item checked, its current condition, and any recommendations. There is no pressure to carry out repairs with us — the report is yours to take away and act on wherever you choose. It is simply an honest assessment you can trust.",
    ],
    checklist: [
      {
        category: "Inspection Points",
        items: [
          "Brakes — pad thickness, disc condition and handbrake",
          "Tyres — tread depth, sidewall condition and pressures",
          "Lights — all lights tested front and rear",
          "Wipers — condition and washer operation",
          "Steering — play, joints and power steering",
          "Suspension — shock absorbers, arms and bushes",
          "Fluid levels — oil, coolant, brake fluid and screen wash",
          "Exhaust — condition, security and emissions visual",
          "Bodywork — structural condition, sharp edges and corrosion",
        ],
      },
    ],
    faq: [
      {
        q: "What is the difference between a safety check and an MOT?",
        a: "An MOT is a legally mandated government test that results in a pass or fail certificate. A vehicle safety check is a workshop inspection carried out to our own standard, providing you with a condition report. It does not produce a legal certificate, but it gives you a thorough, honest picture of your vehicle's safety and condition.",
      },
      {
        q: "Is a safety check useful when buying a used car?",
        a: "Absolutely. A pre-purchase inspection by an independent mechanic can reveal faults, safety issues or signs of poor maintenance that are not visible at a quick viewing. For £30, it could save you from an expensive mistake.",
      },
      {
        q: "How long does the safety check take?",
        a: "A full vehicle safety check typically takes 30–45 minutes. You are welcome to wait on site or drop the vehicle off and collect it once the inspection is complete.",
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
