export const site = {
  name: "Kaushika Wijerathne",
  shortName: "Kay Wijerathne",
  title: "Kaushika Wijerathne — Accessibility & HCI Research",
  description:
    "Computer science student and accessibility researcher working across human-computer interaction, multimodal AI, spatial audio, and accessible gaming.",
  url: "https://kaywijerathne.com",
  email: "kaywijerathne@gmail.com",
  location: "Morgantown, West Virginia",
  origin: "Sri Lanka",
  affiliation: "West Virginia University",
  degree: "B.S. Computer Science, cybersecurity focus",
  graduation: "Expected May 2027",
};

export const links = {
  email: `mailto:${site.email}`,
  github: "https://github.com/kaushika05",
  linkedin: "https://www.linkedin.com/in/kaushika-wijerathne-b85463212/",
  cv: "/kay-wijerathne-cv.pdf",
  delegate: "https://playdelegate.com",
  liaison: "https://github.com/kaushika05/liaison",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const backgrounds = {
  hero: "/images/sections/hero.webp",
  about: "/images/sections/about.webp",
  research: "/images/sections/research.webp",
  areas: "/images/sections/areas.webp",
  experience: "/images/sections/experience.webp",
  projects: "/images/sections/projects.webp",
  writing: "/images/sections/writing.webp",
  beyond: "/images/sections/beyond.webp",
  contact: "/images/sections/contact.webp",
};

export const about = {
  heading: "Technology should work for more kinds of people.",
  body: [
    "I am a computer science student at West Virginia University studying how people understand, control, and experience intelligent systems. My work is shaped by severe hearing loss and by the everyday gap between technologies that technically function and technologies that are genuinely accessible.",
    "I am especially interested in multimodal AI, spatial audio, accessible gaming, and the future of human-computer interaction as AI moves beyond standalone software and into physical, ambient, and embodied systems.",
  ],
  cards: [
    {
      label: "Accessibility",
      body: "Personal experience with hearing loss motivates research into interfaces that do not assume every user perceives information in the same way.",
    },
    {
      label: "Research",
      body: "Current work examines spatial audio reasoning, multimodal evaluation, calibration, and accessibility in interactive environments.",
    },
    {
      label: "Direction",
      body: "Long-term interests include human-centered AI, intelligent physical systems, accessible interfaces, and HCI research.",
    },
  ],
};

export const featured = {
  title: "ET-AudioBench",
  subtitle: "Evaluating spatial audio reasoning in multimodal AI systems.",
  description:
    "ET-AudioBench is a benchmark and experimental pipeline for studying whether audio-language models can interpret spatial sound in interactive environments. The work translates an accessibility question into five reproducible task families covering direction estimation, event classification, motion and trajectory reasoning, ambiguity, calibration, and real-time control.",
  build:
    "The pilot uses 100 clips, deterministic manifests, structured JSON outputs, specialist baselines, latency logging, and robustness conditions. Live-control scaffolding connects model performance to accessibility and competitive-game fairness for Deaf and hard-of-hearing players.",
  questions: [
    "Can multimodal models reliably determine where a sound originates?",
    "How robust are these systems under noise, ambiguity, and conflicting spatial cues?",
    "Can model outputs support accessible interfaces or intelligent agents in real time?",
  ],
  methods: [
    "Python evaluation pipeline",
    "Stereo spatial audio",
    "Audio-language model evaluation",
    "Specialist baselines",
    "Calibration and uncertainty",
    "Interactive game environments",
  ],
  meta: [
    { key: "Status", value: "Pilot built · paper in progress" },
    { key: "Program", value: "WVU SURE Research Program, 2026" },
    { key: "Advisor", value: "Dr. Anthony Sicilia" },
  ],
  sample: {
    direction: "left",
    event: "footstep",
    confidence: 0.82,
    action: "turn_left",
  },
};

export const researchAreas = [
  {
    title: "Accessible computing",
    body: "How can interfaces account for differences in hearing, perception, attention, and interaction ability from the beginning?",
  },
  {
    title: "Human-centered AI",
    body: "How can people understand what intelligent systems perceive, why they behave as they do, and when their outputs should be trusted?",
  },
  {
    title: "Multimodal and spatial AI",
    body: "How can models reason across sound, vision, space, movement, and uncertainty in dynamic environments?",
  },
  {
    title: "Embodied and ambient interaction",
    body: "As AI enters devices, homes, vehicles, wearables, and physical environments, how should people control and experience it?",
  },
];

export const experience = [
  {
    title: "Undergraduate Student Researcher",
    org: "WVU Statler College",
    period: "Jul 2026 — present",
    body: "Evaluate large multimodal AI across audio, vision, code, and text; design real-time evaluation interfaces, reproducible benchmarks, and tooling for model testing and performance analysis.",
    focus: ["Multimodal evaluation", "Benchmarks", "Real-time interfaces"],
  },
  {
    title: "WVU SURE Program Alum",
    org: "WVU SURE Program",
    period: "May — Jul 2026",
    body: "Designed ET-AudioBench's Python evaluation pipeline and 100-clip pilot for spatial reasoning in audio-language models, advised by Dr. Anthony Sicilia.",
    focus: ["Python", "Spatial audio", "Accessibility"],
  },
  {
    title: "Cyber-Resilience Fellow",
    org: "WVU Cyber-Resilience Resource Center",
    period: "2026 — present",
    body: "Work on applied cybersecurity projects supporting West Virginia organizations, coordinating with students, faculty, and project partners on practical cyber-resilience work.",
    focus: ["Cybersecurity", "Project coordination", "Critical infrastructure"],
  },
  {
    title: "Fitness Technician",
    org: "WVU Campus Recreation",
    period: "Aug 2025 — present",
    body: "Maintain, inspect, and troubleshoot fitness equipment to support a safe, reliable, and accessible recreation environment.",
    focus: ["Maintenance", "Inspections", "Member experience"],
  },
  {
    title: "Researcher and Presenter",
    org: "WVU Eberly College",
    period: "2025",
    body: "Conducted qualitative research on hearing-impaired Sri Lankans, digital networks, representation, and accessibility; received top undergraduate research recognition and a first-place showcase award.",
    focus: ["Qualitative methods", "DHH accessibility", "Representation"],
  },
];

export const projectsIntro =
  "Systems I have designed and built end to end, where the interaction problem — how a person understands, approves, and stays in control of what a machine is doing — is the hard part.";

export const liaison = {
  name: "Liaison",
  eyebrow: "HCI showcase",
  tagline: "An AI phone agent that never hides a decision in audio.",
  description:
    "Liaison is an open-source, self-hosted AI agent that calls customer support for you and reports back entirely in text. You describe the problem in plain language, it hands back an inspectable plan, you approve it, and it makes exactly one call — narrating the whole thing over SMS or a web thread and asking before it does anything that matters.",
  build:
    "The design constraint is accessibility-first: nothing important ever exists only in audio. Every warning, decision, commitment, and state change reaches the person as text they can read, quote, and export — which matters most for people who find calling difficult because of hearing loss, anxiety, a speech difference, or a language barrier.",
  guarantees: [
    "Approval is a cryptographically scoped one-time code bound to a plan version, destination, and call mode. Editing the plan invalidates it.",
    "Autonomy presets change how often the agent asks, never what it is permitted to do. Consequence is scored by deterministic code, not by the model.",
    "Outcome reports must cite an exact quote from the stored transcript, or the field is deleted rather than softened.",
  ],
  tiers: [
    ["Informational", "A one-line update."],
    ["Low consequence", "Reply A / B / C from SMS or the web."],
    ["Sensitive", "Authenticated web review only. Never over SMS."],
    ["Material", "Web review plus explicit confirmation."],
    ["Prohibited", "Refused. There is no path that approves it."],
  ],
  methods: [
    "TypeScript",
    "Fastify and React",
    "SQLite",
    "Twilio ConversationRelay",
    "Deterministic policy engine",
    "Human-in-the-loop AI",
  ],
  note: "Runs entirely on your own machine against your own accounts, and ships with a deterministic simulator so the full workflow runs with no API keys and no phone call.",
};

export const delegate = {
  name: "DELEGATE",
  eyebrow: "Featured project",
  tagline: "The daily General Assembly vote game.",
  description:
    "Predict how five countries voted on three real United Nations General Assembly resolutions. Fifteen votes, one daily score — a compact game about diplomacy, history, and reading the world.",
  features: [
    "Three real resolutions each day",
    "Five countries and fifteen predictions",
    "A daily score designed for quick play",
  ],
};

export const writing = [
  {
    title: "The Reactor Is Not the System",
    subtitle: "What Civilian Nuclear Power Can Learn from the U.S. Nuclear Navy",
    kind: "Technology & institutions",
    date: "August 2026",
    summary:
      "An argument that nuclear safety is produced by institutions, training, accountability, and lifecycle stewardship?not by reactor design alone?and that civilian power should translate the Navy?s reliability principles without importing military secrecy or command structures.",
    href: "/writing/the-reactor-is-not-the-system.pdf",
  },
  {
    title: "Grace",
    subtitle: "The Phenomenology of Unconditional Love",
    kind: "Philosophy & lived experience",
    date: "August 2026",
    summary:
      "A personal essay about the distance between understanding unconditional love as a rational principle and experiencing it as a durable practice, drawing on Sri Lankan ritual, secular ethics, religious traditions, and the embodied work of making grace livable.",
    href: "/writing/grace.pdf",
  },
  {
    title: "The Brick and the Border",
    subtitle: "Blowback, Intervention, and the Politics of Migration",
    kind: "History & public policy",
    date: "August 2026",
    summary:
      "An examination of how U.S. intervention can shape the conflicts and migration later treated as isolated border problems, arguing for a politics that preserves individual responsibility while refusing to erase upstream institutional history.",
    href: "/writing/the-brick-and-the-border.pdf",
  },
];

export const beyond = {
  service: [
    ["West Virginia Women’s Alliance", "Distributed menstrual products and supplies at community events."],
    ["FeederWatch", "Contributed seasonal bird observations to community science."],
    ["U.S. Geological Survey", "Contributed observations to public geological and environmental science."],
  ],
  play: {
    title: "Valorant · Marvel Rivals · Apex Legends",
    body: "Top-ranked across several competitive esports titles. These games make spatial sound consequential, which keeps the accessibility research grounded in real interaction.",
  },
};

export const contact = {
  heading: "Let’s build more accessible systems.",
  body: "I am interested in research collaborations, PhD opportunities, accessibility work, multimodal AI, HCI, and conversations about how intelligent systems should interact with people.",
};
