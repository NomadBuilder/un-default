// src/lib/rules.ts
var LANGUAGE_RULES = [
  // ── Racist framing ──────────────────────────────────────────────────
  {
    id: "discover-land",
    pattern: "\\bdiscovered\\b",
    category: "colonial",
    severity: "high",
    label: "Discovery framing",
    why: "\u201CDiscovered\u201D often erases Indigenous presence and agency. Prefer language that names arrival, contact, or colonization.",
    suggestions: [
      "encountered",
      "arrived in",
      "first documented by [who] among [people already living there]"
    ]
  },
  {
    id: "new-world",
    pattern: "\\bnew world\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CNew World\u201D",
    why: "Treats the Americas as empty or newly real only upon European arrival.",
    suggestions: ["the Americas", "Turtle Island (when appropriate)", "Abya Yala"]
  },
  {
    id: "old-world",
    pattern: "\\bold world\\b",
    category: "colonial",
    severity: "medium",
    label: "\u201COld World\u201D",
    why: "Reinforces a Eurocentric map of history as the default timeline.",
    suggestions: ["Europe, Africa, and Asia", "Afro-Eurasia", "name the regions"],
    defaultSoft: true
  },
  {
    id: "third-world",
    pattern: "\\bthird[- ]world\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CThird World\u201D",
    why: "Cold War hierarchy that ranks countries as behind a Western \u201Cfirst.\u201D",
    suggestions: [
      "name the specific countries or regions",
      "countries subjected to colonial extraction (when that relationship is the point)",
      "imperial core / periphery (when using that analytical framework)",
      "low- and middle-income countries (only when income is the measure)"
    ]
  },
  {
    id: "first-world",
    pattern: "\\bfirst[- ]world\\b",
    category: "colonial",
    severity: "medium",
    label: "\u201CFirst World\u201D",
    why: "Implies Western nations are the developmental default.",
    suggestions: [
      "name the specific countries",
      "wealthy former colonial powers (when historically accurate)",
      "imperial core (when using that analytical framework)",
      "high-income countries (only when income is the measure)"
    ]
  },
  {
    id: "developing-country",
    pattern: "\\bdeveloping (?:country|countries|nation|nations|world)\\b",
    category: "colonial",
    severity: "medium",
    label: "\u201CDeveloping\u201D countries",
    why: "Implies a single Western path of \u201Cdevelopment.\u201D Use more precise economic or geographic terms when possible.",
    suggestions: [
      "name the countries and the specific change being discussed",
      "countries shaped by colonial extraction (when relevant)",
      "low- and middle-income countries (only when income is the measure)"
    ]
  },
  {
    id: "underdeveloped",
    pattern: "\\bunderdeveloped\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CUnderdeveloped\u201D",
    why: "Ranks societies against a Western industrial ideal.",
    suggestions: [
      "name the place",
      "describe the specific infrastructure or resource gap",
      "describe the extraction or power relationship when that is the point",
      "low-income (only when income is the measure)"
    ]
  },
  {
    id: "civilized",
    pattern: "\\bcivilized\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CCivilized\u201D",
    why: "Historically used to rank cultures and justify colonization.",
    suggestions: ["complex", "organized", "describe the specific practice or society"]
  },
  {
    id: "uncivilized",
    pattern: "\\buncivilized\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CUncivilized\u201D",
    why: "Dehumanizing colonial hierarchy language.",
    suggestions: ["describe the specific harm or difference without ranking cultures"]
  },
  {
    id: "primitive",
    pattern: "\\bprimitive\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CPrimitive\u201D",
    why: "Positions non-Western or Indigenous societies as less advanced.",
    suggestions: [
      "early",
      "ancestral",
      "foundational",
      "describe the specific technology or practice"
    ]
  },
  {
    id: "savage",
    pattern: "\\bsavages?\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CSavage\u201D",
    why: "Colonial slur used to justify violence against Indigenous and African peoples.",
    suggestions: ["describe the specific behavior without dehumanizing groups"]
  },
  {
    id: "tribe-generic",
    pattern: "\\btribe\\b",
    category: "colonial",
    severity: "medium",
    label: "Generic \u201Ctribe\u201D",
    why: "Often applied loosely to Indigenous or African peoples in ways that flatten political complexity. Prefer the community\u2019s own terms when known.",
    suggestions: ["nation", "people", "community"],
    guidance: ["use the specific nation\u2019s name"],
    examples: ["The marketing tribe owns growth this quarter."],
    counterexamples: [
      "First Nations, Inuit, and M\xE9tis communities",
      "work with the specific tribe or nation named by the family",
      "ask which Nation or tribe the person belongs to"
    ],
    defaultSoft: true
  },
  {
    id: "exotic",
    pattern: "\\bexotic\\b",
    category: "colonial",
    severity: "medium",
    label: "\u201CExotic\u201D",
    why: "Othering framing that treats people or cultures as curiosities relative to a Western norm.",
    suggestions: ["distinctive", "unfamiliar to [audience]", "name the culture or place"],
    defaultSoft: true
  },
  {
    id: "oriental-people",
    pattern: "\\borientals?\\b",
    category: "colonial",
    severity: "high",
    label: "\u201COriental\u201D (for people)",
    why: "Outdated othering term for Asian people; fine for rugs/design in some contexts, not for humans.",
    suggestions: ["Asian", "name the specific ethnicity or country"]
  },
  {
    id: "eskimo",
    pattern: "\\beskimos?\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CEskimo\u201D",
    why: "The Inuit Circumpolar Council asks institutions to use Inuit, but communities are distinct and some people or organizations retain regional usage. Check identity rather than replacing mechanically.",
    suggestions: [
      "Inuit (when referring to Inuit)",
      "Yup\u2019ik / I\xF1upiat / the specific community\u2019s name",
      "ask or follow community self-identification"
    ],
    defaultSoft: true
  },
  {
    id: "pow-wow-metaphor",
    pattern: "\\bpow[- ]?wows?\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CPowwow\u201D as metaphor",
    why: "A powwow is a specific Indigenous gathering; using it for any meeting is appropriation.",
    suggestions: ["meeting", "huddle", "sync", "gathering"]
  },
  {
    id: "spirit-animal",
    pattern: "\\bspirit animals?\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CSpirit animal\u201D",
    why: "Trivializes Indigenous spiritual concepts.",
    suggestions: ["favorite", "kindred vibe", "I\u2019m drawn to"]
  },
  {
    id: "totem-pole",
    pattern: "\\b(low man on the )?totem poles?\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CTotem pole\u201D hierarchy metaphor",
    why: "Misuses sacred Northwest Coast cultural forms as a workplace ranking joke.",
    suggestions: ["lowest priority", "least senior", "bottom of the hierarchy"]
  },
  {
    id: "circle-the-wagons",
    pattern: "\\bcircle the wagons\\b",
    category: "colonial",
    severity: "medium",
    label: "\u201CCircle the wagons\u201D",
    why: "Settler-colonial frontier metaphor that casts outsiders as threat.",
    suggestions: ["rally together", "close ranks", "coordinate a response"]
  },
  {
    id: "indian-giver",
    pattern: "\\bindian giver\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CIndian giver\u201D",
    why: "Racist stereotype about Indigenous people; historically inverted who broke agreements.",
    suggestions: ["took back a gift", "changed the terms"]
  },
  {
    id: "guru",
    pattern: "\\bgurus?\\b",
    category: "colonial",
    severity: "low",
    label: "\u201CGuru\u201D as casual title",
    why: "Guru carries sacred significance in Sikh, Hindu, Buddhist, and Jain traditions, but also has broader teacher/expert usage in Indic contexts. A precision heads-up, not a universal prohibition.",
    suggestions: ["expert", "guide", "specialist", "mentor"],
    defaultSoft: true
  },
  {
    id: "native-speaker-only",
    pattern: "\\bnative (?:english )?speakers?(?: only| required| preferred)\\b",
    category: "colonial",
    severity: "medium",
    label: "Native-speaker gatekeeping",
    why: "Often excludes fluent multilingual people and centers colonial language hierarchies.",
    suggestions: [
      "fluent in English",
      "strong written/spoken English",
      "professional proficiency in\u2026"
    ]
  },
  {
    id: "mother-tongue-gate",
    pattern: "\\bmother tongue (?:must|should) be (?:english|[a-z]+)\\b|\\b(?:english|[a-z]+) (?:as )?(?:a |your )?mother tongue (?:required|preferred|only)\\b|\\bmother[- ]tongue (?:english|[a-z]+) (?:required|preferred|only)\\b",
    category: "colonial",
    severity: "medium",
    label: "Mother-tongue gatekeeping",
    why: "Often used to exclude fluent speakers and privilege a colonial language default.",
    suggestions: [
      "fluent in English",
      "professional proficiency in\u2026",
      "strong written and spoken English"
    ],
    defaultSoft: true
  },
  {
    id: "virgin-land",
    pattern: "\\bvirgin (?:land|territory|wilderness|soil)\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CVirgin land\u201D",
    why: "Settler framing that treats inhabited places as empty and unused before colonization.",
    suggestions: [
      "name who already lived there",
      "uncultivated by settlers",
      "land already stewarded by\u2026"
    ]
  },
  {
    id: "dark-continent",
    pattern: "\\bdark continent\\b",
    category: "colonial",
    severity: "high",
    label: "\u201CDark continent\u201D",
    why: "Colonial nickname for Africa that coded the continent as unknown or inferior.",
    suggestions: ["Africa", "name the country or region"]
  },
  {
    id: "colonize-metaphor",
    pattern: "\\bcoloniz(?:e|ing|ed)\\b",
    category: "colonial",
    severity: "low",
    label: "\u201CColonize\u201D as casual metaphor",
    why: "Using colonization as a cute synonym for \u201Cexpand into\u201D can trivialize historical violence. Keep when discussing actual colonialism.",
    suggestions: ["expand into", "enter", "open in", "build presence in"],
    defaultSoft: true
  },
  // ── Gender ──────────────────────────────────────────────────────────
  {
    id: "guys-generic",
    pattern: "\\bguys\\b",
    category: "gender",
    severity: "medium",
    label: "Generic \u201Cguys\u201D",
    why: "Often used for mixed or unknown groups, centering male as default.",
    suggestions: ["everyone", "folks", "team", "y\u2019all", "friends"]
  },
  {
    id: "mankind",
    pattern: "\\bmankind\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CMankind\u201D",
    why: "Male-default language for all people.",
    suggestions: ["humankind", "humanity", "people"]
  },
  {
    id: "manpower",
    pattern: "\\bmanpower\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CManpower\u201D",
    why: "Male-default framing of labor.",
    suggestions: ["workforce", "staffing", "labor", "people power"]
  },
  {
    id: "man-hours",
    pattern: "\\bman[- ]hours\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CMan-hours\u201D",
    why: "Male-default unit of labor time.",
    suggestions: ["person-hours", "work hours", "staff hours"]
  },
  {
    id: "man-made",
    pattern: "\\bman[- ]made\\b",
    category: "gender",
    severity: "low",
    label: "\u201CMan-made\u201D",
    why: "Male-default for human-created things.",
    suggestions: ["human-made", "synthetic", "artificial", "manufactured"]
  },
  {
    id: "he-she",
    pattern: "\\bhe/she\\b|\\bhe or she\\b|\\bhis/her\\b|\\bhim/her\\b",
    category: "gender",
    severity: "medium",
    label: "Binary he/she pairing",
    why: "Excludes non-binary people; singular \u201Cthey\u201D is widely accepted.",
    suggestions: ["they", "the person", "rewrite to avoid pronouns"]
  },
  {
    id: "ladies-and-gentlemen",
    pattern: "\\bladies and gentlemen\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CLadies and gentlemen\u201D",
    why: "Binary address that excludes non-binary people.",
    suggestions: ["everyone", "honored guests", "friends", "colleagues"]
  },
  {
    id: "both-genders",
    pattern: "\\bboth genders\\b|\\bopposite sex\\b",
    category: "gender",
    severity: "medium",
    label: "Binary gender framing",
    why: "Assumes only two genders or a strict opposite-sex binary.",
    suggestions: ["all genders", "another gender", "people of different genders"]
  },
  {
    id: "chairman",
    pattern: "\\bchair(?:man|woman)\\b",
    category: "gender",
    severity: "low",
    label: "Sexist chair title",
    why: "Prefer gender-neutral role titles when gender is irrelevant.",
    suggestions: ["chair", "chairperson", "chair of the board"]
  },
  {
    id: "policeman",
    pattern: "\\b(?:policeman|policewoman)\\b",
    category: "gender",
    severity: "low",
    label: "Sexist police title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["police officer"]
  },
  {
    id: "fireman",
    pattern: "\\bfireman\\b",
    category: "gender",
    severity: "low",
    label: "Sexist firefighter title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["firefighter"]
  },
  {
    id: "mailman",
    pattern: "\\bmailman\\b",
    category: "gender",
    severity: "low",
    label: "Sexist mail title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["mail carrier", "postal worker"]
  },
  {
    id: "salesman",
    pattern: "\\bsalesman\\b",
    category: "gender",
    severity: "low",
    label: "Sexist sales title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["salesperson", "sales representative"]
  },
  {
    id: "congressman",
    pattern: "\\bcongressman\\b",
    category: "gender",
    severity: "low",
    label: "Sexist Congress title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["member of Congress", "representative", "congressperson"]
  },
  {
    id: "stewardess",
    pattern: "\\bstewardess\\b",
    category: "gender",
    severity: "low",
    label: "Sexist cabin-crew title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["flight attendant"]
  },
  {
    id: "waitress",
    pattern: "\\bwaitress\\b",
    category: "gender",
    severity: "low",
    label: "Sexist server title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["server"]
  },
  {
    id: "businessman",
    pattern: "\\b(?:businessman|businesswoman)\\b",
    category: "gender",
    severity: "low",
    label: "Sexist business title",
    why: "Role titles can be gender-neutral without losing meaning.",
    suggestions: ["businessperson", "executive", "entrepreneur"]
  },
  {
    id: "freshman",
    pattern: "\\bfreshm[ae]n\\b",
    category: "gender",
    severity: "low",
    label: "\u201CFreshman\u201D",
    why: "Male-default academic year label; many schools use first-year.",
    suggestions: ["first-year", "first-year student"]
  },
  {
    id: "pregnant-women-only",
    pattern: "\\bpregnant women\\b",
    category: "gender",
    severity: "low",
    label: "\u201CPregnant women\u201D only",
    why: "Not all pregnant people identify as women. Context matters\u2014use the most accurate group term.",
    suggestions: ["pregnant people", "pregnant patients", "people who are pregnant"]
  },
  {
    id: "you-guys",
    pattern: "\\byou guys\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CYou guys\u201D",
    why: "Common mixed-group address that still centers male as default.",
    suggestions: ["you all", "y\u2019all", "everyone", "folks"]
  },
  // ── Gender: sexist digs / misogynistic framing ──────────────────────
  {
    id: "feminazi",
    pattern: "\\bfeminazis?\\b",
    category: "gender",
    severity: "high",
    label: "\u201CFeminazi\u201D",
    why: "A smear that equates feminism with Nazism. Almost never neutral in product or brand copy.",
    suggestions: [
      "drop the slur",
      "name the specific disagreement",
      "feminist / advocate for gender equity (when accurate)"
    ],
    examples: ["Commenters called her a feminazi for asking about pay."]
  },
  {
    id: "like-a-girl",
    pattern: "\\blike a girl\\b",
    category: "gender",
    severity: "high",
    label: "\u201CLike a girl\u201D as insult",
    why: "Treats femininity as weakness or incompetence. Common in sports, gaming, and \u201Ctough\u201D brand voice.",
    suggestions: [
      "drop the comparison",
      "describe the skill or behavior directly"
    ],
    examples: ["Don\u2019t throw like a girl in the product demo video."]
  },
  {
    id: "man-up",
    pattern: "\\bman up\\b|\\bgrow a pair\\b|\\bbe a man\\b",
    category: "gender",
    severity: "high",
    label: "\u201CMan up\u201D / \u201Cgrow a pair\u201D",
    why: "Equates courage and competence with masculinity; punishes anyone who doesn\u2019t perform it.",
    suggestions: [
      "be direct",
      "take ownership",
      "name the concrete action you want"
    ],
    examples: ["Leadership said he needed to man up before the board review."]
  },
  {
    id: "office-wife",
    pattern: "\\boffice wif(?:e|es)\\b|\\bwork wif(?:e|es)\\b",
    category: "gender",
    severity: "medium",
    label: "\u201COffice wife\u201D / \u201Cwork wife\u201D",
    why: "Sexualizes or domesticates a coworker relationship; often lands especially badly for women.",
    suggestions: [
      "close collaborator",
      "work partner",
      "colleague you pair with often"
    ],
    examples: ["The profile joked that she was the CEO\u2019s office wife."]
  },
  {
    id: "bitch-slur",
    pattern: "\\bbitch(?:es)?\\b|\\bbitchy\\b",
    category: "gender",
    severity: "high",
    label: "\u201CBitch\u201D as dig",
    why: "A sexist insult used to police assertive women. Soft-flagged around animal breeding and quoted lyrics.",
    suggestions: [
      "drop the slur",
      "assertive / direct / firm (when that\u2019s the trait)",
      "name the behavior without the sexist dig"
    ],
    examples: [
      "Don\u2019t be a bitch about the deadline.",
      "Stakeholders called her bitchy for pushing back."
    ],
    counterexamples: [
      "The kennel specializes in breeding bitches for working lines.",
      "Veterinary notes: pregnant bitch, third trimester."
    ],
    defaultSoft: true
  },
  {
    id: "bossy",
    pattern: "\\bbossy\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CBossy\u201D",
    why: "Often applied to women and girls for the same behavior praised as leadership in men. Soft-flagged.",
    suggestions: [
      "decisive",
      "direct",
      "takes charge",
      "name the specific leadership behavior"
    ],
    examples: ["Feedback said she was too bossy in standups."],
    defaultSoft: true
  },
  {
    id: "shrill",
    pattern: "\\bshrill\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CShrill\u201D",
    why: "A classic dig at women who speak up; focuses on tone instead of substance. Soft-flagged for literal sound descriptions.",
    suggestions: [
      "forceful",
      "urgent",
      "pointed",
      "describe the argument, not the voice"
    ],
    examples: ["Reviewers called the founder\u2019s pitch shrill."],
    counterexamples: [
      "A shrill alarm sounded when the sensor tripped."
    ],
    defaultSoft: true
  },
  {
    id: "hysterical",
    pattern: "\\bhysterical\\b|\\bhysteria\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CHysterical\u201D / \u201Chysteria\u201D",
    why: "Historically used to dismiss women\u2019s emotions and authority. Soft-flagged for comedy/medical history uses.",
    suggestions: [
      "upset",
      "alarmed",
      "intense",
      "overwhelmed",
      "name the concrete concern"
    ],
    examples: ["They said she got hysterical in the negotiation."],
    counterexamples: [
      "The film was hysterical \u2014 we laughed the whole way through.",
      "A short history of hysteria as a contested diagnosis."
    ],
    defaultSoft: true
  },
  {
    id: "female-role-prefix",
    pattern: "\\bfemale (?:founders?|ceos?|ctos?|engineers?|developers?|doctors?|lawyers?|pilots?|scientists?|leaders?|executives?|entrepreneurs?)\\b",
    category: "gender",
    severity: "low",
    label: "Unnecessary \u201Cfemale [role]\u201D",
    why: "Marking gender on a role often othering when gender isn\u2019t the point. Soft-flagged \u2014 keep when the topic is specifically women in that field.",
    suggestions: [
      "founder / engineer / doctor (drop \u201Cfemale\u201D when irrelevant)",
      "women founders (when the gender focus is intentional)"
    ],
    examples: ["We\u2019re looking for a female engineer to join the platform team."],
    counterexamples: [
      "The report tracks funding gaps for women founders.",
      "A study of female pilots\u2019 career progression."
    ],
    defaultSoft: true
  },
  {
    id: "girls-for-adults",
    pattern: "\\b(?:the|our|those|these) girls\\b(?=\\s+(?:in|on|from|at)\\s+(?:marketing|sales|design|product|engineering|support|the team|the office|HQ))",
    category: "gender",
    severity: "medium",
    label: "\u201CGirls\u201D for adult coworkers",
    why: "Calling adult women \u201Cgirls\u201D in workplace copy can sound diminishing. Soft-flagged.",
    suggestions: ["the team", "our colleagues", "the women on the team", "everyone in marketing"],
    examples: ["Ask the girls in marketing to update the deck."],
    defaultSoft: true
  },
  {
    id: "high-maintenance",
    pattern: "\\bhigh[- ]maintenance\\b",
    category: "gender",
    severity: "low",
    label: "\u201CHigh-maintenance\u201D",
    why: "Often a sexist dig at women who state needs. Soft-flagged for literal product/ops use.",
    suggestions: [
      "specific about requirements",
      "needs clearer specs",
      "name the actual request or constraint"
    ],
    examples: ["Investors joked that the creator was high-maintenance."],
    counterexamples: [
      "This legacy pipeline is high-maintenance and expensive to keep running."
    ],
    defaultSoft: true
  },
  {
    id: "girlboss",
    pattern: "\\bgirl[- ]?boss(?:es|ing)?\\b",
    category: "gender",
    severity: "low",
    label: "\u201CGirlboss\u201D",
    why: "Often flattens women\u2019s leadership into a trendy brand; many women reject it as patronizing. Soft-flagged.",
    suggestions: [
      "founder",
      "CEO",
      "leader",
      "describe the work without the meme label"
    ],
    examples: ["The newsletter called her a girlboss building the next unicorn."],
    defaultSoft: true
  },
  {
    id: "emotional-stereotype",
    pattern: "\\btoo emotional\\b|\\bwomen are (?:too )?emotional\\b|\\bemotional women\\b",
    category: "gender",
    severity: "high",
    label: "\u201CToo emotional\u201D stereotype",
    why: "A stock way to dismiss women\u2019s judgment. Prefer naming the concrete behavior or disagreement.",
    suggestions: [
      "name the specific concern",
      "strong reaction / upset (if accurate)",
      "drop the sexist stereotype"
    ],
    examples: [
      "They said she was too emotional for the exec role.",
      "The brief claimed women are too emotional for crisis comms."
    ]
  },
  {
    id: "drama-queen",
    pattern: "\\bdrama queens?\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CDrama queen\u201D",
    why: "A sexist way to dismiss someone\u2019s concerns as overblown. Soft-flagged.",
    suggestions: [
      "raising a concern",
      "name the concrete issue",
      "drop the dig"
    ],
    examples: ["Don\u2019t be a drama queen about the launch delay."],
    defaultSoft: true
  },
  {
    id: "gold-digger",
    pattern: "\\bgold[- ]?diggers?\\b",
    category: "gender",
    severity: "medium",
    label: "\u201CGold digger\u201D",
    why: "A misogynistic stereotype about women\u2019s motives in relationships or work. Soft-flagged.",
    suggestions: [
      "drop the stereotype",
      "describe the financial conflict plainly"
    ],
    examples: ["The profile painted her as a gold digger after the funding round."],
    defaultSoft: true
  },
  // ── Ableist ─────────────────────────────────────────────────────────
  {
    id: "crazy",
    pattern: "\\b(?:crazy|insane|psycho|lunatic)\\b",
    category: "ableist",
    severity: "medium",
    label: "Mental-health metaphor",
    why: "Uses psychiatric disability as intensifier or insult.",
    suggestions: ["wild", "intense", "unbelievable", "chaotic", "surprising"]
  },
  {
    id: "lame",
    pattern: "\\blame\\b",
    category: "ableist",
    severity: "medium",
    label: "\u201CLame\u201D",
    why: "Historically tied to physical disability; weak as a synonym for \u201Cbad.\u201D",
    suggestions: ["weak", "uninspired", "disappointing", "flat"]
  },
  {
    id: "dumb",
    pattern: "\\bdumb\\b",
    category: "ableist",
    severity: "medium",
    label: "\u201CDumb\u201D",
    why: "Historically linked to speech disability; often used to demean intelligence.",
    suggestions: ["unhelpful", "ill-considered", "confusing", "not useful"]
  },
  {
    id: "stupid-as-default",
    pattern: "\\bstupid\\b",
    category: "ableist",
    severity: "low",
    label: "\u201CStupid\u201D as dismissive default",
    why: "Often demeans intelligence; can land harder on people with cognitive disabilities. Context matters.",
    suggestions: ["unhelpful", "ill-considered", "poorly designed", "confusing"]
  },
  {
    id: "blind-to",
    pattern: "\\bblind(?:ed)? to\\b|\\bdeaf to\\b|\\bfall on deaf ears\\b",
    category: "ableist",
    severity: "low",
    label: "Sensory metaphor",
    why: "Uses blindness/deafness as metaphors for ignorance.",
    suggestions: ["unaware of", "ignoring", "overlooking", "not listening to", "went unheard"]
  },
  {
    id: "crippled",
    pattern: "\\bcrippled by\\b|\\bcrippling\\b",
    category: "ableist",
    severity: "high",
    label: "\u201CCrippled / crippling\u201D",
    why: "Uses disability as metaphor for damage or severity.",
    suggestions: ["hampered by", "severely limited", "devastating", "severe"]
  },
  {
    id: "wheelchair-bound",
    pattern: "\\bwheelchair[- ]bound\\b|\\bconfined to a wheelchair\\b",
    category: "ableist",
    severity: "high",
    label: "\u201CWheelchair-bound\u201D",
    why: "Frames a mobility aid as confinement rather than access.",
    suggestions: ["wheelchair user", "person who uses a wheelchair"]
  },
  {
    id: "suffers-from",
    pattern: "\\bsuffer(?:s)? from\\b",
    category: "ableist",
    severity: "low",
    label: "\u201CSuffers from\u201D",
    why: "Assumes misery; many prefer neutral \u201Chas\u201D or \u201Clives with.\u201D Keep when someone is describing their own suffering, or when clinical/palliative writing is naming distress.",
    suggestions: ["has", "lives with", "was diagnosed with"],
    examples: ["The campaign says the economy suffers from bad leadership."],
    counterexamples: [
      "Many patients say they suffer from unmanaged pain near the end of life.",
      "Ask whether the person describes themselves as suffering from the illness."
    ],
    defaultSoft: true
  },
  {
    id: "handicap",
    pattern: "\\bhandicapped\\b|\\bthe handicapped\\b",
    category: "ableist",
    severity: "medium",
    label: "\u201CHandicapped\u201D",
    why: "Outdated in many style guides; prefer \u201Cdisabled people\u201D or specific access language.",
    suggestions: ["disabled people", "people with disabilities", "accessible"]
  },
  {
    id: "special-needs",
    pattern: "\\bspecial needs\\b",
    category: "ableist",
    severity: "medium",
    label: "\u201CSpecial needs\u201D",
    why: "Vague and often othering; many prefer naming the disability or support needed.",
    suggestions: ["children with disabilities", "disabled people"],
    guidance: [
      "disabled children / disabled people (when accurate)",
      "name the specific support or disability"
    ],
    examples: ["Our special needs hiring track."]
  },
  {
    id: "retard",
    pattern: "\\b(?:retard|retarded)\\b",
    category: "ableist",
    severity: "high",
    label: "R-slur / \u201Cretarded\u201D",
    why: "Slur against people with intellectual disabilities.",
    suggestions: ["unhelpful", "ill-considered", "describe the specific problem"]
  },
  {
    id: "spaz",
    pattern: "\\b(?:spaz|spastic)\\b",
    category: "ableist",
    severity: "high",
    label: "\u201CSpaz / spastic\u201D",
    why: "Ableist insult rooted in spastic cerebral palsy.",
    suggestions: ["clumsy", "scattered", "overexcited"]
  },
  {
    id: "sanity-check",
    pattern: "\\bsanity checks?\\b",
    category: "ableist",
    severity: "low",
    label: "\u201CSanity check\u201D",
    why: "Uses mental health as a metaphor for correctness.",
    suggestions: ["quick check", "confidence check", "smoke test", "sense check"]
  },
  {
    id: "ocd-metaphor",
    pattern: "\\b(?:so |a bit |kind of |i'?m )?ocd\\b|\\bmy ocd\\b",
    category: "ableist",
    severity: "medium",
    label: "\u201COCD\u201D as personality quirk",
    why: "Trivializes a clinical condition when used for \u201Clikes things tidy.\u201D",
    suggestions: ["particular", "detail-oriented", "I like things organized"]
  },
  {
    id: "bipolar-metaphor",
    pattern: "\\bbipolar(?! disorder)\\b",
    category: "ableist",
    severity: "medium",
    label: "\u201CBipolar\u201D as metaphor",
    why: "Often used for \u201Cmoody\u201D or \u201Cinconsistent,\u201D which stigmatizes bipolar disorder.",
    suggestions: ["inconsistent", "volatile", "unpredictable"]
  },
  // ── Racialized / othering ───────────────────────────────────────────
  {
    id: "whitelist-blacklist",
    pattern: "\\b(?:whitelist|blacklist)(?:ed|ing|s)?\\b",
    category: "racialized",
    severity: "medium",
    label: "Whitelist / blacklist",
    why: "Pairs \u201Cwhite/black\u201D with good/bad. Prefer functional terms.",
    suggestions: ["allowlist / denylist", "permit list / block list"]
  },
  {
    id: "master-slave",
    pattern: "\\bmaster[/\\-]slave\\b",
    category: "racialized",
    severity: "high",
    label: "Master/slave metaphor",
    why: "Evokes slavery; many style guides recommend primary/replica or similar.",
    suggestions: ["primary/replica", "main/secondary", "leader/follower"]
  },
  {
    id: "skin-tone-nude",
    pattern: "\\bnude\\b(?=\\s+(?:color|tone|shade|lipstick|heel|nail))",
    category: "racialized",
    severity: "medium",
    label: "\u201CNude\u201D as default skin tone",
    why: "Often codes light skin as the neutral default.",
    suggestions: ["beige", "taupe", "name the actual shade", "skin-tone inclusive palette"]
  },
  {
    id: "ethnic-food",
    pattern: "\\bethnic (?:food|foods|hairstyle|hairstyles|look|restaurant)s?\\b",
    category: "racialized",
    severity: "medium",
    label: "Vague \u201Cethnic\u201D",
    why: "Treats non-white cultures as a single exotic other.",
    suggestions: ["name the cuisine, culture, or style"]
  },
  {
    id: "illegal-alien",
    pattern: "\\billegal aliens?\\b|\\billegals\\b",
    category: "racialized",
    severity: "high",
    label: "\u201CIllegal alien / illegals\u201D",
    why: "Dehumanizing. People aren\u2019t illegal; status descriptions can stay precise without slur.",
    suggestions: [
      "undocumented immigrant",
      "person without legal status",
      "asylum seeker (when accurate)"
    ]
  },
  {
    id: "ghetto-as-slur",
    pattern: "\\bghetto\\b",
    category: "racialized",
    severity: "high",
    label: "\u201CGhetto\u201D as insult",
    why: "Often used to demean Black and working-class aesthetics or spaces.",
    suggestions: ["under-resourced", "describe the specific condition"]
  },
  {
    id: "grandfathered",
    pattern: "\\bgrandfathered\\b",
    category: "racialized",
    severity: "medium",
    label: "\u201CGrandfathered\u201D",
    why: "Term has roots in Jim Crow voter-suppression \u201Cgrandfather clauses.\u201D",
    suggestions: ["legacy-exempt", "exempt under prior rules", "preexisting exception"]
  },
  {
    id: "colored-people",
    pattern: "\\bcolored (?:people|person|man|woman|folk)\\b|\\bthe colored\\b",
    category: "racialized",
    severity: "high",
    label: "\u201CColored\u201D (for people)",
    why: "Outdated racial label in the US (distinct from South African \u201CColoured\u201D identity).",
    suggestions: ["Black", "people of color (when accurate)", "name the specific group"]
  },
  {
    id: "chinese-wall",
    pattern: "\\bchinese walls?\\b",
    category: "racialized",
    severity: "medium",
    label: "\u201CChinese wall\u201D",
    why: "Finance/legal metaphor that racializes a firewall concept.",
    suggestions: ["ethical wall", "information barrier", "firewall"]
  },
  {
    id: "sold-down-the-river",
    pattern: "\\bsold down the river\\b",
    category: "racialized",
    severity: "high",
    label: "\u201CSold down the river\u201D",
    why: "Alludes to selling enslaved people further into the Deep South.",
    suggestions: ["betrayed", "abandoned", "undermined"]
  },
  {
    id: "peanut-gallery",
    pattern: "\\bpeanut gallery\\b",
    category: "racialized",
    severity: "medium",
    label: "\u201CPeanut gallery\u201D",
    why: "Historically referred to segregated cheap seats; often used to dismiss critics.",
    suggestions: ["critics", "hecklers", "the cheap seats (literal)"]
  },
  {
    id: "uppity",
    pattern: "\\buppity\\b",
    category: "racialized",
    severity: "high",
    label: "\u201CUppity\u201D",
    why: "Historically used to police Black people for not showing deference.",
    suggestions: ["assertive", "confident", "outspoken"]
  },
  {
    id: "thug",
    pattern: "\\bthugs?\\b",
    category: "racialized",
    severity: "medium",
    label: "\u201CThug\u201D",
    why: "Often racially coded when applied to Black people; describe the specific behavior instead.",
    suggestions: ["describe the specific harm or crime"]
  },
  {
    id: "no-can-do",
    pattern: "\\bno can do\\b",
    category: "racialized",
    severity: "low",
    label: "\u201CNo can do\u201D",
    why: "Mocks Chinese Pidgin English stereotypes.",
    suggestions: ["I can\u2019t do that", "that won\u2019t work", "I\u2019m unable to"]
  },
  {
    id: "long-time-no-see",
    pattern: "\\blong time no see\\b",
    category: "racialized",
    severity: "low",
    label: "\u201CLong time no see\u201D",
    why: "Mocks Chinese Pidgin English; many still use it casually\u2014context varies.",
    suggestions: ["it\u2019s been a while", "good to see you again"]
  },
  // ── LGBTQ+ ──────────────────────────────────────────────────────────
  {
    id: "homosexual",
    pattern: "\\bhomosexuals?\\b",
    category: "lgbtq",
    severity: "medium",
    label: "Clinical \u201Chomosexual\u201D",
    why: "Often reads as clinical or pathologizing outside formal/legal contexts.",
    suggestions: ["gay", "lesbian", "queer (if reclaimed/self-ID)", "LGBTQ+ people"]
  },
  {
    id: "sexual-preference",
    pattern: "\\bsexual preferences?\\b",
    category: "lgbtq",
    severity: "medium",
    label: "\u201CSexual preference\u201D",
    why: "Implies orientation is chosen. Prefer \u201Csexual orientation.\u201D",
    suggestions: ["sexual orientation", "orientation"]
  },
  {
    id: "lifestyle",
    pattern: "\\b(?:gay|homosexual|transgender) lifestyle\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CLifestyle\u201D framing",
    why: "Reduces identity to a voluntary lifestyle choice.",
    suggestions: ["lives", "identity", "LGBTQ+ people", "trans people"]
  },
  {
    id: "preferred-pronouns",
    pattern: "\\bpreferred pronouns\\b",
    category: "lgbtq",
    severity: "low",
    label: "\u201CPreferred pronouns\u201D",
    why: "Pronouns aren\u2019t a preference; they are the correct ones to use.",
    suggestions: ["pronouns", "personal pronouns"]
  },
  {
    id: "transgendered",
    pattern: "\\btransgendered\\b|\\ba transgender\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CTransgendered\u201D / \u201Ca transgender\u201D",
    why: "Outdated forms. Use \u201Ctransgender\u201D as an adjective: \u201Ca transgender person.\u201D",
    suggestions: ["transgender", "trans person", "transgender people"]
  },
  {
    id: "born-a-sex",
    pattern: "\\bborn a (?:man|woman|boy|girl)\\b|\\bbiological (?:man|woman|male|female)\\b",
    category: "lgbtq",
    severity: "medium",
    label: "\u201CBorn a\u2026\u201D / \u201Cbiological man/woman\u201D",
    why: "Often used to invalidate trans people. Prefer \u201Cassigned male/female at birth\u201D when medically relevant.",
    suggestions: [
      "assigned male at birth",
      "assigned female at birth",
      "cis man / cis woman (when accurate)"
    ]
  },
  {
    id: "sex-change",
    pattern: "\\bsex changes?\\b",
    category: "lgbtq",
    severity: "medium",
    label: "\u201CSex change\u201D",
    why: "Outdated; gender-affirming care is broader than a single \u201Cchange.\u201D",
    suggestions: [
      "gender-affirming surgery",
      "transition-related care",
      "gender confirmation surgery"
    ]
  },
  {
    id: "tranny-slur",
    pattern: "\\btrann(?:y|ies)\\b",
    category: "lgbtq",
    severity: "high",
    label: "Anti-trans slur",
    why: "Slur against transgender people.",
    suggestions: ["trans person", "transgender person"]
  },
  {
    id: "hermaphrodite",
    pattern: "\\bhermaphrodites?\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CHermaphrodite\u201D",
    why: "Outdated and often offensive; prefer intersex when accurate.",
    suggestions: ["intersex", "intersex person"]
  },
  {
    id: "transwomen-compound",
    pattern: "\\btrans(?:wo)?m[ae]n\\b|\\btrans-(?:wo)?m[ae]n\\b",
    category: "lgbtq",
    severity: "low",
    label: "\u201CTranswomen\u201D / \u201Ctransmen\u201D (closed compound)",
    why: "GLAAD and many style guides prefer \u201Ctrans woman\u201D / \u201Ctrans man\u201D \u2014 \u201Ctrans\u201D as an adjective, not a fused noun. Soft when the closed form is used neutrally.",
    suggestions: ["trans woman", "trans man", "transgender woman / man"],
    defaultSoft: true
  },
  {
    id: "shemale-slur",
    pattern: "\\bshe[- ]?males?\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CShe-male\u201D slur",
    why: "Dehumanizing anti-trans slur; never use it.",
    suggestions: ["trans woman", "transgender woman"]
  },
  {
    id: "trans-identified",
    pattern: "\\btrans[- ]?identified\\b|\\btrans[- ]?identifying\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CTrans-identified\u201D",
    why: "Common in anti-trans rhetoric to deny that someone is a woman or man. Prefer \u201Ctrans woman,\u201D \u201Ctrans man,\u201D or \u201Ctrans person.\u201D",
    suggestions: ["trans woman", "trans man", "trans person", "transgender people"]
  },
  {
    id: "adult-human-female",
    pattern: "\\badult human females?\\b",
    category: "lgbtq",
    severity: "medium",
    label: "\u201CAdult human female\u201D slogan",
    why: "Often used as a campaign slogan to exclude trans women rather than a neutral dictionary gloss. Soft-flagged \u2014 say what policy you mean.",
    suggestions: [
      "women (when that is accurate and inclusive of your intent)",
      "name the specific policy (sports, shelters, healthcare)"
    ],
    defaultSoft: true
  },
  {
    id: "rapid-onset-gd",
    pattern: "\\brapid[- ]onset gender dysphoria\\b|\\brogd\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CRapid-onset gender dysphoria\u201D / ROGD",
    why: "A contested, poorly evidenced framing often used to dismiss trans youth. Prefer clinical language from established medical bodies.",
    suggestions: [
      "gender dysphoria (with clinical sources)",
      "gender-affirming care for youth (if that\u2019s the topic)",
      "cite peer-reviewed guidance, not ROGD blogs"
    ]
  },
  {
    id: "social-contagion-trans",
    pattern: "\\b(?:trans|gender) (?:social )?contagion\\b|\\bsocial contagion\\b(?=.{0,40}\\b(?:trans|gender|dysphoria|pronoun))",
    category: "lgbtq",
    severity: "high",
    label: "\u201CSocial contagion\u201D framing of transition",
    why: "Casts being transgender as a trend or infection. Soft when \u201Csocial contagion\u201D is used in unrelated epidemiology.",
    suggestions: [
      "peer influence / social factors (if studying them carefully)",
      "gender dysphoria with clinical sources",
      "avoid contagion metaphors for identity"
    ],
    defaultSoft: true
  },
  {
    id: "transing-kids",
    pattern: "\\btrans(?:ed|ing)\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CTransing\u201D / \u201Ctransed\u201D",
    why: "Activist slang that frames transition as something done to people (especially kids) rather than care or self-determination.",
    suggestions: [
      "gender-affirming care",
      "transition / social transition",
      "name the specific medical or school policy"
    ]
  },
  {
    id: "mutilation-transition",
    pattern: "\\b(?:genital |chemical )?mutilat(?:e|ion|ing)\\b(?=.{0,50}\\b(?:trans|gender|transition|dysphoria|puberty|blocker))|\\bchemical(?:ly)? castrat(?:e|ion|ing)\\b(?=.{0,50}\\b(?:trans|gender|puberty|blocker|minor|child))",
    category: "lgbtq",
    severity: "high",
    label: "\u201CMutilation\u201D / \u201Cchemical castration\u201D for affirming care",
    why: "Inflammatory framing of gender-affirming care. Soft when discussing documented FGM or court-ordered chemical castration in other contexts.",
    suggestions: [
      "gender-affirming surgery / care",
      "puberty blockers / hormone therapy (clinical terms)",
      "name the specific procedure or medication"
    ],
    defaultSoft: true
  },
  {
    id: "erase-women",
    pattern: "\\beras(?:e|ing|ure) (?:of )?wom(?:an|en)\\b|\\bwom(?:an|en)['\u2019]?s? erasure\\b",
    category: "lgbtq",
    severity: "medium",
    label: "\u201CErasing women\u201D framing",
    why: "Often a campaign slogan casting trans inclusion as elimination of women. Soft \u2014 you can discuss sex discrimination without this frame.",
    suggestions: [
      "name the specific policy conflict",
      "women\u2019s rights and trans rights (both matter)",
      "avoid zero-sum erasure framing"
    ],
    defaultSoft: true
  },
  {
    id: "men-in-dresses",
    pattern: "\\bmen in (?:dresses|skirts|women['\u2019]?s? (?:spaces?|bathrooms?|toilets?|shelters?|sports?))\\b|\\bman in a dress\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CMen in dresses / women\u2019s spaces\u201D smear",
    why: "Reduces trans women to men in costume and frames their presence as threat. Prefer precise policy language if you have a safety concern.",
    suggestions: [
      "trans women",
      "name the facility policy you mean",
      "do not use costume framing for trans people"
    ]
  },
  {
    id: "gender-confused",
    pattern: "\\bgender[- ]confused\\b|\\bconfused about (?:their |his |her )?gender\\b",
    category: "lgbtq",
    severity: "high",
    label: "\u201CGender confused\u201D",
    why: "Dismisses transgender identity as confusion rather than a real identity or clinical diagnosis.",
    suggestions: [
      "trans / transgender",
      "gender dysphoria (clinical, when accurate)",
      "use the person\u2019s stated identity"
    ]
  },
  // ── Class ───────────────────────────────────────────────────────────
  {
    id: "poor-as-insult",
    pattern: "\\b(?:trailer trash|white trash)\\b|\\bthe poor are\\b",
    category: "class",
    severity: "high",
    label: "Classist insult",
    why: "Shames poverty and working-class people.",
    suggestions: ["describe material conditions without contempt"]
  },
  {
    id: "cheap-people",
    pattern: "\\b(?:cheapskate|tightwad)s?\\b",
    category: "class",
    severity: "low",
    label: "Penny-pinching insult",
    why: "Can shame thrift rooted in economic necessity.",
    suggestions: ["frugal", "budget-conscious", "cost-aware"]
  },
  {
    id: "welfare-queen",
    pattern: "\\bwelfare queens?\\b",
    category: "class",
    severity: "high",
    label: "\u201CWelfare queen\u201D",
    why: "Racialized classist stereotype used to shame public assistance.",
    suggestions: ["person receiving benefits", "describe the policy issue"]
  },
  {
    id: "inner-city-coded",
    pattern: "\\binner[- ]city\\b",
    category: "class",
    severity: "low",
    label: "Coded \u201Cinner city\u201D",
    why: "Often a coded stand-in for Black or poor urban communities. Be specific when you can.",
    suggestions: ["name the neighborhood", "under-invested urban area", "specific city district"]
  },
  {
    id: "the-homeless",
    pattern: "\\bthe homeless\\b",
    category: "class",
    severity: "medium",
    label: "\u201CThe homeless\u201D as a monolith",
    why: "Turns a varied group of people into a condition. Preferences differ, so use people-first or community-preferred language.",
    suggestions: [
      "people experiencing homelessness",
      "homeless people (when community-preferred)",
      "people without stable housing"
    ]
  },
  {
    id: "unskilled-labor",
    pattern: "\\bunskilled (?:labou?r|workers?|jobs?)\\b",
    category: "class",
    severity: "medium",
    label: "\u201CUnskilled\u201D labor",
    why: "Work described as unskilled still requires learned abilities and effort. Name the training, wage, or role distinction you mean.",
    suggestions: [
      "entry-level work",
      "lower-wage work (when accurate)",
      "work not requiring formal credentials",
      "name the role"
    ]
  },
  {
    id: "low-skilled-workers",
    pattern: "\\blow[- ]skilled (?:labou?r|workers?|jobs?)\\b",
    category: "class",
    severity: "low",
    label: "\u201CLow-skilled\u201D workers",
    why: "Can flatten workers into a deficit label. Describe the credential or training requirement instead.",
    suggestions: [
      "workers in roles requiring less formal training",
      "entry-level workers",
      "name the occupation"
    ],
    defaultSoft: true
  },
  {
    id: "poverty-stricken",
    pattern: "\\bpoverty[- ]stricken\\b|\\bthe impoverished\\b",
    category: "class",
    severity: "low",
    label: "Dramatic poverty labels",
    why: "Can define people entirely by hardship and invite pity rather than describe material conditions precisely.",
    suggestions: [
      "people living in poverty",
      "low-income households",
      "communities facing economic hardship"
    ],
    defaultSoft: true
  },
  {
    id: "slum-language",
    pattern: "\\bslums?\\b|\\bslum[- ]dwellers?\\b",
    category: "class",
    severity: "low",
    label: "\u201CSlum\u201D as a catch-all",
    why: "Can stigmatize residents and erase the specific housing, infrastructure, or policy conditions involved.",
    suggestions: [
      "informal settlement (when accurate)",
      "under-resourced neighborhood",
      "name the specific housing conditions"
    ],
    defaultSoft: true
  },
  {
    id: "welfare-dependent",
    pattern: "\\bwelfare[- ]dependent\\b|\\bdependent on welfare\\b",
    category: "class",
    severity: "medium",
    label: "\u201CWelfare-dependent\u201D",
    why: "Frames receiving public assistance as a personal failing. Name the program or economic circumstance.",
    suggestions: [
      "receives public assistance",
      "uses [program name]",
      "household receiving benefits"
    ]
  },
  {
    id: "underclass",
    pattern: "\\bthe underclass\\b|\\bunderclass (?:people|communities|families)\\b",
    category: "class",
    severity: "medium",
    label: "\u201CThe underclass\u201D",
    why: "Ranks people beneath an assumed social norm and can carry racialized stereotypes.",
    suggestions: [
      "low-income communities",
      "economically marginalized people",
      "name the specific group or condition"
    ],
    defaultSoft: true
  },
  // ── Age ─────────────────────────────────────────────────────────────
  {
    id: "elderly-as-burden",
    pattern: "\\bthe elderly\\b",
    category: "age",
    severity: "low",
    label: "\u201CThe elderly\u201D",
    why: "Can flatten older adults into a monolith. Prefer \u201Colder adults\u201D when possible. Caregiving and clinical copy often uses this neutrally \u2014 soft-flagged.",
    suggestions: ["older adults", "older people", "elders (community-specific)"],
    examples: [
      "We can\u2019t keep subsidizing the elderly as a burden on taxpayers."
    ],
    counterexamples: [
      "Caregiving tips for families supporting the elderly at home",
      "palliative care resources for the elderly and their caregivers"
    ],
    defaultSoft: true
  },
  {
    id: "boomer-as-insult",
    pattern: "\\bok boomer\\b",
    category: "age",
    severity: "low",
    label: "Age put-down",
    why: "Dismisses people by generation rather than engaging the idea.",
    suggestions: ["I disagree because\u2026", "that framing overlooks\u2026"]
  },
  {
    id: "senile",
    pattern: "\\bsenile\\b",
    category: "age",
    severity: "medium",
    label: "\u201CSenile\u201D",
    why: "Often used as an ageist insult rather than a precise clinical description.",
    suggestions: ["describe the specific cognitive concern", "person with dementia (when accurate)"]
  },
  {
    id: "digital-native",
    pattern: "\\bdigital natives?\\b",
    category: "age",
    severity: "medium",
    label: "\u201CDigital native\u201D",
    why: "Ages people as inherently tech-fluent or obsolete; skills are learned, not born.",
    suggestions: ["experienced with\u2026", "proficient in\u2026", "familiar with digital tools"]
  },
  {
    id: "young-energetic",
    pattern: "\\byoung and energetic\\b|\\byoung,? energetic\\b",
    category: "age",
    severity: "medium",
    label: "\u201CYoung and energetic\u201D hiring filter",
    why: "Often codes age discrimination in job ads. Ask for the actual stamina or schedule needs.",
    suggestions: ["high-energy role", "fast-paced environment", "describe the schedule or physical demands"]
  },
  {
    id: "old-people",
    pattern: "\\bold people\\b|\\bthe old\\b(?!\\s+(?:ways?|days?|world|fashioned|guard|testament|school|country|west|east|north|south|ones?|man|woman|men|women|boy|girl|kids?|timers?))",
    category: "age",
    severity: "low",
    label: "\u201CThe old\u201D / \u201Cold people\u201D",
    why: "Can reduce older adults to age as a defining trait or use age as a dismissive category. Does not flag ordinary phrases like \u201Cthe old ways.\u201D",
    suggestions: ["older adults", "older people"],
    guidance: [
      "people age [range]",
      "name the specific need or role instead of age as a category"
    ],
    examples: [
      "Policymakers keep talking about the old as if they are a cost center.",
      "Old people should just retire already."
    ],
    counterexamples: [
      "Communicating in the old ways",
      "the old days of community visiting",
      "respect for the old world traditions of mourning"
    ],
    defaultSoft: true
  },
  {
    id: "over-the-hill",
    pattern: "\\bover the hill\\b",
    category: "age",
    severity: "medium",
    label: "\u201COver the hill\u201D",
    why: "Frames aging as decline and people past an arbitrary age as no longer capable or relevant.",
    suggestions: [
      "experienced",
      "later in their career",
      "describe the specific concern"
    ]
  },
  {
    id: "too-old-to",
    pattern: "\\btoo old to\\b|\\btoo old for\\b",
    category: "age",
    severity: "low",
    label: "\u201CToo old to\u2026\u201D",
    why: "Often substitutes an age stereotype for an actual requirement or individual preference.",
    suggestions: [
      "name the specific requirement",
      "ask about the person\u2019s preference or ability",
      "remove the age assumption"
    ],
    defaultSoft: true
  },
  {
    id: "geriatric-insult",
    pattern: "\\bgeriatric\\b",
    category: "age",
    severity: "low",
    label: "\u201CGeriatric\u201D outside clinical context",
    why: "A valid medical specialty term that can become demeaning when used as a synonym for obsolete or incapable.",
    suggestions: [
      "older adult",
      "geriatric medicine (in clinical context)",
      "describe what seems outdated"
    ],
    defaultSoft: true
  },
  {
    id: "silver-tsunami",
    pattern: "\\bsilver tsunami\\b|\\bgrey tsunami\\b|\\bgray tsunami\\b",
    category: "age",
    severity: "medium",
    label: "\u201CSilver tsunami\u201D",
    why: "Frames population aging and older people as an overwhelming natural disaster or social burden.",
    suggestions: [
      "population aging",
      "growth in the older-adult population",
      "demographic change"
    ]
  },
  {
    id: "kids-these-days",
    pattern: "\\bkids these days\\b|\\bthese kids today\\b|\\byoung people today\\b",
    category: "age",
    severity: "low",
    label: "Generational dismissal",
    why: "Can dismiss a broad age group instead of naming a specific behavior, trend, or evidence. Supportive uses like \u201Csupporting our young people today\u201D are skipped.",
    suggestions: [],
    guidance: [
      "name the behavior or trend",
      "cite the age group and evidence",
      "avoid generalizing a generation"
    ],
    examples: [
      "Kids these days have no respect for hard work.",
      "Young people today never want to work."
    ],
    counterexamples: [
      "Supporting our young people today",
      "Resources by grieving youth, for grieving youth",
      "Guidance for schools supporting grieving children and youth"
    ],
    defaultSoft: true
  },
  {
    id: "anti-aging",
    pattern: "\\banti[- ]aging\\b|\\bage[- ]defying\\b",
    category: "age",
    severity: "low",
    label: "\u201CAnti-aging\u201D marketing",
    why: "Treats visible aging as a flaw to defeat. Describe the product\u2019s concrete effect without making age the problem.",
    suggestions: [
      "hydrating",
      "supports skin elasticity",
      "reduces the appearance of fine lines",
      "name the specific effect"
    ],
    defaultSoft: true
  },
  // ── Coded / dogwhistle (on by default; many soft — people may not know) ─
  {
    id: "cultural-marxism",
    pattern: "\\bcultural marxism\\b|\\bcultural marxists?\\b|\\bcultural bolshevism\\b",
    category: "coded",
    severity: "high",
    label: "\u201CCultural Marxism\u201D",
    why: "A conspiracy frame that casts social justice and multiculturalism as a secret plot \u2014 often with antisemitic undertones. Prefer naming the specific policy you mean.",
    suggestions: [
      "name the specific policy or critique",
      "describe the concrete disagreement",
      "avoid conspiracy framing"
    ]
  },
  {
    id: "great-replacement",
    pattern: "\\bgreat replacement\\b|\\bthe replacement\\b(?=\\s+(?:theory|myth|of))",
    category: "coded",
    severity: "high",
    label: "\u201CGreat Replacement\u201D",
    why: "A white-nationalist conspiracy theory about demographic change. Demographic data can be discussed without this frame.",
    suggestions: [
      "demographic change",
      "migration trends",
      "cite specific data without conspiracy framing"
    ]
  },
  {
    id: "blood-and-soil",
    pattern: "\\bblood and soil\\b|\\bblut und boden\\b",
    category: "coded",
    severity: "high",
    label: "\u201CBlood and soil\u201D",
    why: "A Nazi slogan tying ethnicity to land. Almost never neutral in public copy.",
    suggestions: [
      "remove the slogan",
      "describe land stewardship without racial purity framing"
    ]
  },
  {
    id: "echo-parentheses",
    pattern: "\\(\\(\\([^\\n)]{1,80}\\)\\)\\)",
    category: "coded",
    severity: "high",
    label: "(((Echo))) markers",
    why: "Triple parentheses are used by white supremacists to mark people or institutions as Jewish. If that isn\u2019t your intent, don\u2019t use the markup.",
    suggestions: [
      "remove the triple parentheses",
      "name the person or organization plainly"
    ]
  },
  {
    id: "fourteen-eighty-eight",
    pattern: "\\b1488\\b|\\b14\\s*/\\s*88\\b|\\b14/88\\b",
    category: "coded",
    severity: "high",
    label: "1488 / 14/88",
    why: "Combines white-supremacist \u201C14 words\u201D and \u201C88\u201D (HH). Numbers alone can be coincidental \u2014 soft-flagged so you can check context.",
    suggestions: [
      "avoid the number combo in usernames and copy if unintended",
      "use a different numeric ID"
    ],
    defaultSoft: true
  },
  {
    id: "globalist-smear",
    pattern: "\\bglobalists?\\b",
    category: "coded",
    severity: "medium",
    label: "\u201CGlobalist\u201D as smear",
    why: "Can mean trade policy \u2014 or a coded antisemitic / nativist smear about \u201Celites.\u201D Soft-flagged: say what you actually mean.",
    suggestions: [
      "multinational corporations",
      "trade policy you oppose",
      "name the institution or practice"
    ],
    defaultSoft: true
  },
  {
    id: "western-values-dogwhistle",
    pattern: "\\bwestern values\\b|\\bwestern culture\\b|\\bdefend(?:ing)? our way of life\\b|\\bprotect(?:ing)? our way of life\\b|\\bthreat(?:ens?|ening)? our way of life\\b",
    category: "coded",
    severity: "low",
    label: "\u201CWestern values / culture\u201D as code",
    why: "Sometimes ordinary geography or history \u2014 sometimes a euphemism for ethnonationalism or anti-Muslim / anti-LGBTQ politics. Soft-flagged so you can be specific. Bare \u201Cour way of life\u201D in cultural or community copy is not flagged.",
    suggestions: [],
    guidance: [
      "name the specific right or tradition (e.g. free press, due process)",
      "democracy and human rights",
      "avoid vague civilizational framing"
    ],
    examples: [
      "They claimed immigration was threatening our way of life and western values.",
      "We must defend western culture from outsiders."
    ],
    counterexamples: [
      "Conversations on care, culture, and spirituality when living with serious illness",
      "Living My Culture shares stories about our way of life",
      "Indigenous Cultural Safety Training helping you provide culturally safer care"
    ],
    defaultSoft: true
  },
  {
    id: "trans-agenda",
    pattern: "\\btrans(?:gender)? agenda\\b|\\bgender ideology\\b|\\bgender critical ideology\\b",
    category: "coded",
    severity: "high",
    label: "\u201CTrans agenda\u201D / \u201Cgender ideology\u201D",
    why: "Conspiracy framing that treats trans people\u2019s rights and existence as a coordinated plot. Prefer concrete policy disagreements.",
    suggestions: [
      "name the specific policy",
      "trans people\u2019s rights",
      "gender-affirming care policy (if that\u2019s the topic)"
    ]
  },
  {
    id: "groomer-smear",
    pattern: "\\bgroomers?\\b",
    category: "coded",
    severity: "high",
    label: "\u201CGroomer\u201D as smear",
    why: "Often used as a false, dangerous smear against LGBTQ+ people and educators. Soft-flagged around literal child-protection language; skipped for pet/salon groomers.",
    suggestions: [
      "do not use as a political smear",
      "name the specific harm or crime if one exists",
      "educator / librarian / advocate (when accurate)"
    ],
    defaultSoft: true
  },
  {
    id: "go-woke-go-broke",
    pattern: "\\bgo(?:t)? woke,? go broke\\b|\\bget woke,? go broke\\b",
    category: "coded",
    severity: "medium",
    label: "\u201CGo woke, go broke\u201D",
    why: "A stock anti-inclusion slogan. Soft-flagged \u2014 you can critique a business decision without the catchphrase.",
    suggestions: [
      "describe the specific business or creative disagreement",
      "avoid the slogan if you don\u2019t mean the culture-war frame"
    ],
    defaultSoft: true
  },
  {
    id: "modern-audience",
    pattern: "\\bmodern audiences?\\b",
    category: "coded",
    severity: "low",
    label: "\u201CModern audience\u201D (anti-inclusion code)",
    why: "In some gaming and media circles, a dogwhistle for resentment of diversity casting or inclusive writing. Soft-flagged \u2014 ordinary marketing use is common.",
    suggestions: [
      "today\u2019s viewers / players",
      "name the specific creative choice",
      "diverse casting (if that\u2019s what you mean positively)"
    ],
    defaultSoft: true
  },
  {
    id: "white-genocide",
    pattern: "\\bwhite genocide\\b",
    category: "coded",
    severity: "high",
    label: "\u201CWhite genocide\u201D",
    why: "White-supremacist conspiracy claim that white people are being deliberately erased. Closely tied to Great Replacement rhetoric.",
    suggestions: [
      "demographic change with cited data",
      "specific policy critique without eliminationist framing"
    ]
  },
  {
    id: "race-realism",
    pattern: "\\brace realism\\b|\\bhuman biodiversity\\b|\\bhbd\\b",
    category: "coded",
    severity: "high",
    label: "\u201CRace realism\u201D / HBD",
    why: "Euphemisms for scientific racism \u2014 fixed racial hierarchies of intelligence or behavior. Soft-flagged for the bare acronym HBD.",
    suggestions: [
      "reject racial hierarchy framing",
      "discuss inequality via history and policy, not racial essentialism"
    ],
    defaultSoft: true
  },
  {
    id: "iotbw",
    pattern: "\\bit['\u2019]?s okay to be white\\b|\\biotbw\\b",
    category: "coded",
    severity: "high",
    label: "\u201CIt\u2019s okay to be white\u201D / IOTBW",
    why: "4chan-origin campaign slogan used to normalize white-identity politics and bait media \u2014 not a generic anti-racism message.",
    suggestions: [
      "oppose racism without the campaign slogan",
      "affirm everyone\u2019s dignity without ethnonational branding"
    ]
  },
  {
    id: "remigration",
    pattern: "\\bremigration\\b|\\bre-?migrat(?:e|ion)\\b",
    category: "coded",
    severity: "high",
    label: "\u201CRemigration\u201D",
    why: "In far-right usage, a euphemism for mass removal of immigrants and often citizens of immigrant background. Soft-flagged when voluntary-return policy is clearly meant.",
    suggestions: [
      "voluntary return / assisted departure (if that\u2019s the policy)",
      "asylum or immigration law specifics",
      "avoid euphemisms for mass ethnic removal"
    ],
    defaultSoft: true
  },
  {
    id: "soy-boy",
    pattern: "\\bsoy[- ]?boys?\\b",
    category: "coded",
    severity: "medium",
    label: "\u201CSoy boy\u201D",
    why: "Misogynistic insult policing masculinity and mocking progressive men via pseudoscience about soy. Soft-flagged.",
    suggestions: [
      "drop the insult",
      "critique ideas without sexist food memes"
    ],
    defaultSoft: true
  },
  {
    id: "kalergi-plan",
    pattern: "\\bkalergi(?:\\s+plan)?\\b|\\bcoudenhove[- ]kalergi\\b",
    category: "coded",
    severity: "high",
    label: "\u201CKalergi plan\u201D",
    why: "Antisemitic conspiracy theory claiming a secret plan to destroy Europe through migration \u2014 related to Great Replacement myths.",
    suggestions: [
      "discuss EU migration policy with primary sources",
      "avoid secret-plot framing"
    ]
  },
  {
    id: "clown-world",
    pattern: "\\bclown world\\b|\\bhonkler\\b|\\bhonk honk\\b",
    category: "coded",
    severity: "medium",
    label: "\u201CClown world\u201D / Honkler",
    why: "Far-right meme framing diversity and LGBTQ+ rights as civilization collapsing into absurdity. Soft-flagged.",
    suggestions: [
      "describe the specific policy failure or news event",
      "avoid the meme branding if you don\u2019t mean that frame"
    ],
    defaultSoft: true
  },
  // ── General inclusion ───────────────────────────────────────────────
  {
    id: "ninja-rockstar",
    pattern: "\\b(?:coding )?ninjas?\\b|\\b(?:marketing )?rockstars?\\b",
    category: "general",
    severity: "low",
    label: "Hyperbolic job titles",
    why: "Can feel exclusionary in hiring copy and often imports cultural metaphors casually. (UI \u201Cwizard\u201D steps are not flagged.)",
    suggestions: ["skilled", "experienced", "strong contributor"]
  },
  {
    id: "culture-fit",
    pattern: "\\bculture fit\\b",
    category: "general",
    severity: "medium",
    label: "\u201CCulture fit\u201D",
    why: "Often codes for hiring people like the existing team and can shut out difference.",
    suggestions: ["values alignment", "ways of working", "collaboration style"]
  },
  {
    id: "master-branch",
    pattern: "\\bmaster branch\\b",
    category: "general",
    severity: "low",
    label: "\u201CMaster\u201D branch",
    why: "Many projects renamed default branches to avoid master/slave echoes. Optional depending on your norms.",
    suggestions: ["main branch", "default branch"]
  },
  {
    id: "diversity-hire",
    pattern: "\\bdiversity hire\\b|\\bdiverse hire\\b|\\bdiversity candidate\\b",
    category: "general",
    severity: "medium",
    label: "\u201CDiversity hire\u201D",
    why: "Can reduce someone to a demographic trait and imply they were hired instead of being qualified.",
    suggestions: [
      "name the person\u2019s role and qualifications",
      "hire from an underrepresented group (when relevant)",
      "remove the tokenizing label"
    ]
  },
  {
    id: "dei-hire",
    pattern: "\\bDEI hire\\b|\\baffirmative[- ]action hire\\b",
    category: "general",
    severity: "high",
    label: "\u201CDEI hire\u201D as a put-down",
    why: "Often questions a person\u2019s competence by attributing their job only to an inclusion policy.",
    suggestions: [
      "name the actual hiring concern and evidence",
      "describe the policy without labeling the person",
      "refer to the person by their role"
    ]
  },
  {
    id: "foreign-sounding",
    pattern: "\\bforeign[- ]sounding (?:name|accent|voice)\\b",
    category: "general",
    severity: "medium",
    label: "\u201CForeign-sounding\u201D",
    why: "Treats one accent or naming tradition as the local default and others as not belonging.",
    suggestions: [
      "name the language or accent when relevant",
      "ask how to pronounce the person\u2019s name",
      "remove the belonging judgment"
    ]
  },
  {
    id: "normal-people",
    pattern: "\\bnormal people\\b|\\bnormal person\\b",
    category: "general",
    severity: "low",
    label: "\u201CNormal people\u201D",
    why: "Can cast disabled, neurodivergent, LGBTQ+, or otherwise marginalized people as abnormal. Name the comparison you mean.",
    suggestions: [
      "most people (if supported)",
      "people without [specific condition]",
      "typical in this sample",
      "name the comparison group"
    ],
    defaultSoft: true
  },
  {
    id: "minorities-noun",
    pattern: "\\bminorities\\b|\\ba minority person\\b",
    category: "general",
    severity: "low",
    label: "\u201CMinorities\u201D as a blanket noun",
    why: "Can flatten distinct communities and define people only by numerical or power status.",
    suggestions: [
      "minoritized communities",
      "underrepresented groups",
      "name the specific communities"
    ],
    defaultSoft: true
  },
  {
    id: "clean-cut-candidate",
    pattern: "\\bclean[- ]cut (?:candidate|applicant|employee|professional|person)\\b",
    category: "general",
    severity: "low",
    label: "\u201CClean-cut\u201D hiring language",
    why: "Can encode narrow cultural expectations around hair, dress, gender expression, tattoos, and class.",
    suggestions: [
      "follows role-specific safety requirements",
      "meets the stated dress policy",
      "remove appearance criteria unrelated to the job"
    ],
    defaultSoft: true
  },
  {
    id: "real-name",
    pattern: "\\b(?:your|their|his|her) real name\\b|\\bwhat(?:'s| is) your real name\\b",
    category: "general",
    severity: "low",
    label: "\u201CReal name\u201D",
    why: "Can invalidate chosen names, anglicized names, stage names, or names used by trans people. Ask for the specific name type needed.",
    suggestions: [
      "legal name (only when required)",
      "name you go by",
      "name on your identification",
      "preferred display name"
    ],
    defaultSoft: true
  }
];

// src/lib/preferences.ts
function resolveRules(preferences) {
  return LANGUAGE_RULES.flatMap((rule) => {
    const pref = preferences?.[rule.id];
    if (pref?.enabled === false) return [];
    return [
      {
        ...rule,
        severity: pref?.severity ?? rule.severity
      }
    ];
  });
}
function defaultPreferences() {
  const prefs = {};
  for (const rule of LANGUAGE_RULES) {
    prefs[rule.id] = { enabled: true, severity: rule.severity };
  }
  return prefs;
}

// src/lib/context.ts
var WINDOW = 90;
var TECH_DISCOVER = /\b(?:a\s+bug|the\s+bug|bugs?\b|issues?\b|vulnerabilit(?:y|ies)|errors?\b|flaws?\b|problems?\b|exploits?\b|leaks?\b|race\s+condition|regression|zero[- ]day|security\s+hole)\b/i;
var PLACE_OR_PEOPLE = /\b(?:land|lands|america|americas|continent|island|islands|country|countries|nation|nations|people|peoples|tribe|tribes|world|africa|asia|australia|india|canada|mexico|brazil|territory|territories|shore|coast|caribbean|pacific|atlantic|indigenous|native|aboriginal|settler|colony|colon(?:y|ies)|voyage|explorer|expedition)\b/i;
var LEGAL_NEAR = /\b(?:pursuant\s+to|hereinafter|whereas|plaintiff|defendant|statute|section\s+\d|u\.?s\.?\s*c\.|cfr|herein|thereof|notwithstanding|exhibit\s+[A-Z]|bill\s+\d+|regulation|ordinance|code\s+of\s+conduct|terms\s+of\s+(?:use|service)|privacy\s+policy)\b/i;
var SELF_DESC_NEAR = /\b(?:i\s+am|i'm|we\s+are|we're|as\s+a|identify\s+as|my\s+pronouns|our\s+pronouns)\b/i;
var FIRST_PERSON_NEAR = /\b(?:i|i'm|i've|i'd|me|my|myself|we|we're|we've|our|ours)\b/i;
var ILLNESS_NEAR = /\b(?:cancer|illness|disease|diagnos(?:is|ed)|depression|anxiety|ptsd|bipolar|schizophrenia|chronic|pain|hospital|symptom|flare|remission|chemotherapy|treatment|disability|disabled|neurodiverg)\w*\b/i;
var ORG_SUFFIX_NEAR = /\b(?:cancer|foundation|society|campaign|organization|organisation|initiative|project|coalition|alliance|network|fund|institute|association|collective)\b/i;
var ABLEIST_METAPHOR_RULES = /* @__PURE__ */ new Set([
  "crazy",
  "lame",
  "dumb",
  "stupid-as-default",
  "blind-to",
  "crippled",
  "suffers-from",
  "spaz",
  "sanity-check",
  "ocd-metaphor",
  "bipolar-metaphor",
  "wheelchair-bound",
  "handicapped",
  "retarded"
]);
function windowAround(text, index, length) {
  const start = Math.max(0, index - WINDOW);
  const end = Math.min(text.length, index + length + WINDOW);
  return text.slice(start, end);
}
function isInsideQuotes(text, index, length) {
  const before = text.slice(Math.max(0, index - 120), index);
  const after = text.slice(index + length, index + length + 120);
  const openStraight = (before.match(/"/g) || []).length;
  const closeStraight = (after.match(/"/g) || []).length;
  if (openStraight % 2 === 1 && closeStraight >= 1) return true;
  const openCurly = (before.match(/[“«]/g) || []).length;
  const closeCurly = (after.match(/[”»]/g) || []).length;
  if (openCurly > closeCurly) return true;
  const openSingle = (before.match(/(?:^|[\s([{])'/g) || []).length;
  const closeSingle = (after.match(/'(?:$|[\s)\]}.,;:!?])/g) || []).length;
  if (openSingle > 0 && closeSingle > 0 && openSingle >= closeSingle) return true;
  return false;
}
function looksLikeOrgOrProperName(text, index, length) {
  const matched = text.slice(index, index + length);
  if (!matched || matched[0] !== matched[0].toUpperCase()) return false;
  const after = text.slice(index + length, index + length + 48);
  const before = text.slice(Math.max(0, index - 48), index);
  const afterWord = after.match(/^\s+([A-Za-z']+)/)?.[1];
  if (afterWord && /^[A-Z]/.test(afterWord) && ORG_SUFFIX_NEAR.test(afterWord)) {
    return true;
  }
  if (/\b(?:called|named|known\s+as)\b/i.test(before) && /^[A-Z]/.test(matched)) {
    return true;
  }
  return false;
}
function hintsForRule(ruleId) {
  if (ruleId === "discover-land") {
    return {
      requireNear: PLACE_OR_PEOPLE,
      excludeNear: TECH_DISCOVER
    };
  }
  if (ruleId === "colonize-metaphor") {
    return {
      softExcludeNear: /\b(?:actual|historical|settler|indigenous|anti[- ]?colonial|decolon)\w*\b/i
    };
  }
  if (ruleId === "primitive") {
    return {
      softExcludeNear: /\b(?:type|data\s+type|int|integer|value|javascript|python|stack)\b/i
    };
  }
  if (ruleId === "tribe-generic") {
    return {
      softExcludeNear: /\b(?:product|engineering|sales|marketing|customer\s+success)\s+tribe\b/i
    };
  }
  if (ruleId === "guru") {
    return {
      softExcludeNear: /\b(?:sikh|hindu|spiritual|religious|ashram|teacher)\b/i
    };
  }
  if (ruleId === "groomer-smear") {
    return {
      excludeNear: /\b(?:dog|cat|pet|horse|animal|hair|nail|salon|spa)\b.{0,20}\bgroomers?\b|\bgroomers?\b.{0,20}\b(?:dog|cat|pet|salon|spa|business)\b/i
    };
  }
  if (ruleId === "globalist-smear") {
    return {
      softExcludeNear: /\b(?:trade|WTO|IMF|World Bank|multilateral|supply chain|offshoring)\b/i
    };
  }
  if (ruleId === "remigration") {
    return {
      softExcludeNear: /\b(?:voluntary|assisted)\s+(?:return|departure|repatriation)\b|\brepatriation\s+program/i
    };
  }
  if (ruleId === "soy-boy") {
    return {
      softExcludeNear: /\b(?:tofu|edamame|soy\s+(?:milk|sauce|protein|beans?))\b/i
    };
  }
  if (ruleId === "mutilation-transition") {
    return {
      softExcludeNear: /\bfemale genital mutilation\b|\bFGM\b|\bcourt[- ]ordered\b|\bchemical castration (?:of|for) (?:sex )?offenders?\b/i
    };
  }
  if (ruleId === "social-contagion-trans") {
    return {
      softExcludeNear: /\b(?:measles|influenza|covid|epidemiolog|virus|infection rate)\b/i
    };
  }
  if (ruleId === "old-people") {
    return {
      // Cultural / idiomatic uses of “the old …” that are not about older adults.
      excludeNear: /\bthe old\s+(?:ways?|days?|world|fashioned|guard|testament|school|country)\b/i
    };
  }
  if (ruleId === "kids-these-days") {
    return {
      // Affirmative community language, not generational sneering.
      excludeNear: /\b(?:support(?:ing|s)?|empower(?:ing|s)?|mentor(?:ing|s)?|serv(?:ing|e|es)|for|with|our|help(?:ing|s)?|invest(?:ing|s)? in)\b.{0,40}\b(?:young people today|kids these days|these kids today)\b|\b(?:young people today|kids these days|these kids today)\b.{0,40}\b(?:deserve|need|matter|future|community|culture|elders?)\b/i
    };
  }
  if (ruleId === "western-values-dogwhistle") {
    return {
      softExcludeNear: /\b(?:first\s+nations?|inuit|m[eé]tis|indigenous|aboriginal|native|culture|cultural|heritage|tradition|traditions|ceremony|elder|elders|community|communities)\b/i
    };
  }
  if (ruleId === "elderly-as-burden") {
    return {
      softExcludeNear: /\b(?:caregiv|hospice|palliative|grief|bereave|illness|dying|end[- ]of[- ]life|nursing|home\s+care)\w*\b/i,
      excludeNear: /\belders?\b/i
    };
  }
  if (ruleId === "suffers-from") {
    return {
      softExcludeNear: /\b(?:pain|symptom|illness|disease|patient|palliative|hospice|grief|bereave|diagnos)\w*\b/i
    };
  }
  return null;
}
function evaluateMatchContext(text, index, length, ruleId, options) {
  const modes = [];
  let skip = false;
  let likelyFalsePositive = false;
  let note;
  const nearby = windowAround(text, index, length);
  const hints = hintsForRule(ruleId);
  const ableistMetaphor = ABLEIST_METAPHOR_RULES.has(ruleId);
  const matched = text.slice(index, index + length);
  if (options?.counterexamples?.length) {
    const haystack = nearby.toLowerCase();
    const hit = options.counterexamples.find((example) => {
      const needle = example.toLowerCase().replace(/\s+/g, " ").trim();
      if (!needle) return false;
      return haystack.includes(needle);
    });
    if (hit) {
      return {
        modes,
        likelyFalsePositive: false,
        skip: true,
        note: `Skipped \u2014 matches a documented counterexample (\u201C${hit}\u201D).`
      };
    }
  }
  if (ruleId === "old-people" && /\bthe old\s+(?:ways?|days?|world|fashioned|guard|testament|school|country)\b/i.test(
    nearby
  )) {
    return {
      modes,
      likelyFalsePositive: false,
      skip: true,
      note: "Skipped \u2014 idiomatic \u201Cthe old \u2026\u201D (not a label for older adults)."
    };
  }
  void matched;
  if (hints?.excludeNear?.test(nearby)) {
    skip = true;
    note = "Skipped \u2014 looks like a non-colonial idiom (e.g. discovered a bug).";
  } else if (hints?.requireNear && !hints.requireNear.test(nearby)) {
    skip = true;
    note = "Skipped \u2014 no place/people context near \u201Cdiscovered.\u201D";
  }
  if (!skip && looksLikeOrgOrProperName(text, index, length)) {
    modes.push("orgName");
    skip = true;
    note = "Skipped \u2014 looks like an organization or proper name.";
  }
  if (!skip && ableistMetaphor && FIRST_PERSON_NEAR.test(nearby) && ILLNESS_NEAR.test(nearby)) {
    modes.push("illnessStory");
    skip = true;
    note = "Skipped \u2014 first-person illness or disability story; not treating lived experience as a metaphor to \u201Cfix.\u201D";
  }
  if (!skip && hints?.softExcludeNear?.test(nearby)) {
    likelyFalsePositive = true;
    note = "Likely fine in this context \u2014 soft-flagged.";
  }
  if (!skip && isInsideQuotes(text, index, length)) {
    modes.push("quote");
    if (ableistMetaphor) {
      skip = true;
      note = "Skipped \u2014 inside quotation marks (cited speech, not author framing).";
    } else {
      likelyFalsePositive = true;
      note = note ?? "Inside quotation marks \u2014 often a cited speaker, not the author\u2019s framing.";
    }
  }
  if (!skip && LEGAL_NEAR.test(nearby)) {
    modes.push("legal");
    if (ableistMetaphor || ruleId === "master-slave" || ruleId === "whitelist-blacklist" || ruleId === "grandfathered") {
      skip = true;
      note = "Skipped \u2014 near legal or policy language; may be a required term of art.";
    } else {
      likelyFalsePositive = true;
      note = note ?? "Near legal or policy boilerplate \u2014 may be a required term of art.";
    }
  }
  if (!skip && SELF_DESC_NEAR.test(nearby)) {
    modes.push("selfDescription");
    if (/^(guys|ladies|homosexual|transgendered|biological-|preferred-pronoun)/.test(
      ruleId
    ) || ruleId.includes("pronoun") || ruleId.includes("guys") || ruleId.includes("ladies")) {
      likelyFalsePositive = true;
      note = note ?? "Near self-description \u2014 the speaker may be naming their own identity.";
    }
  }
  if (hints?.excludeNear && TECH_DISCOVER.test(nearby) && ruleId === "discover-land") {
    modes.push("techIdiom");
  }
  return { modes, likelyFalsePositive, skip, note };
}

// src/lib/suggestions.ts
function inferSuggestionKind(text) {
  const value = text.trim();
  if (!value) return "guidance";
  if (/[\[\]]/.test(value)) return "guidance";
  if (/\b(?:e\.g\.|for example|if that'?s)\b/i.test(value)) return "guidance";
  if (/^(?:name|cite|avoid|ask|describe|remove|do not|don'?t|prefer|use|keep|consider|say what|be specific)\b/i.test(
    value
  )) {
    return "guidance";
  }
  if (value.length > 48 && /\s(?:or|and|instead|when|rather than)\s/i.test(value)) {
    return "guidance";
  }
  return "swap";
}
function normalizeSuggestion(value) {
  if (typeof value === "string") {
    return { text: value, kind: inferSuggestionKind(value) };
  }
  return {
    text: value.text,
    kind: value.kind ?? inferSuggestionKind(value.text)
  };
}
function normalizeSuggestions(rule) {
  const fromSuggestions = rule.suggestions.map(normalizeSuggestion);
  const fromGuidance = (rule.guidance ?? []).map(
    (text) => normalizeSuggestion({ text, kind: "guidance" })
  );
  const all = [...fromSuggestions, ...fromGuidance];
  const swaps = all.filter((s) => s.kind === "swap").map((s) => s.text);
  const guidance = all.filter((s) => s.kind === "guidance").map((s) => s.text);
  return { swaps, guidance, all };
}
function suggestionTexts(rule) {
  const { swaps, guidance } = normalizeSuggestions(rule);
  return [...swaps, ...guidance];
}

// src/lib/analyzer.ts
var CONTEXT_RADIUS = 72;
function buildRegex(pattern, matchWholeWord = false) {
  const body = matchWholeWord ? `\\b(?:${pattern})\\b` : pattern;
  return new RegExp(body, "gi");
}
function snippetAround(text, index, length) {
  const start = Math.max(0, index - CONTEXT_RADIUS);
  const end = Math.min(text.length, index + length + CONTEXT_RADIUS);
  const prefix = start > 0 ? "\u2026" : "";
  const suffix = end < text.length ? "\u2026" : "";
  return `${prefix}${text.slice(start, end).replace(/\s+/g, " ").trim()}${suffix}`;
}
function summarize(findings) {
  const byCategory = {};
  const bySeverity = {};
  for (const finding of findings) {
    byCategory[finding.category] = (byCategory[finding.category] ?? 0) + 1;
    bySeverity[finding.severity] = (bySeverity[finding.severity] ?? 0) + 1;
  }
  return {
    total: findings.length,
    byCategory,
    bySeverity
  };
}
function analyzeText(text, options = {}) {
  const findings = [];
  const normalized = text.replace(/\u00a0/g, " ");
  const rules = resolveRules(options.preferences);
  for (const rule of rules) {
    const regex = buildRegex(rule.pattern, rule.matchWholeWord);
    let match;
    while ((match = regex.exec(normalized)) !== null) {
      const matchedText = match[0];
      const ctx = evaluateMatchContext(
        normalized,
        match.index,
        matchedText.length,
        rule.id,
        { counterexamples: rule.counterexamples }
      );
      if (ctx.skip) {
        if (match.index === regex.lastIndex) {
          regex.lastIndex += 1;
        }
        continue;
      }
      const { swaps, guidance } = normalizeSuggestions(rule);
      findings.push({
        id: `${rule.id}-${match.index}-${findings.length}`,
        ruleId: rule.id,
        match: matchedText,
        category: rule.category,
        severity: rule.severity,
        label: rule.label,
        why: rule.why,
        suggestions: suggestionTexts(rule),
        swaps: swaps.length ? swaps : void 0,
        guidance: guidance.length ? guidance : void 0,
        context: snippetAround(normalized, match.index, matchedText.length),
        index: match.index,
        source: options.sourceTag,
        likelyFalsePositive: ctx.likelyFalsePositive || rule.defaultSoft || void 0,
        contextNote: ctx.note ?? (rule.defaultSoft ? "Coded language often spreads without intent \u2014 a heads-up to check context, not a verdict." : void 0),
        contextModes: ctx.modes.length ? ctx.modes : void 0
      });
      if (match.index === regex.lastIndex) {
        regex.lastIndex += 1;
      }
    }
  }
  findings.sort((a, b) => {
    const severityRank = {
      high: 0,
      medium: 1,
      low: 2
    };
    const severityDiff = severityRank[a.severity] - severityRank[b.severity];
    if (severityDiff !== 0) return severityDiff;
    const fpDiff = Number(Boolean(a.likelyFalsePositive)) - Number(Boolean(b.likelyFalsePositive));
    if (fpDiff !== 0) return fpDiff;
    return a.index - b.index;
  });
  return {
    sourceType: options.sourceType ?? "text",
    sourceLabel: options.sourceLabel ?? "text",
    title: options.title,
    excerptCount: normalized.trim().length,
    findings,
    summary: summarize(findings),
    analyzedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function analyzeSegments(segments, options) {
  const findings = [];
  let totalChars = 0;
  for (const segment of segments) {
    const partial = analyzeText(segment.text, {
      ...options,
      sourceTag: segment.source
    });
    totalChars += segment.text.trim().length;
    findings.push(...partial.findings);
  }
  findings.sort((a, b) => {
    const severityRank = {
      high: 0,
      medium: 1,
      low: 2
    };
    const severityDiff = severityRank[a.severity] - severityRank[b.severity];
    if (severityDiff !== 0) return severityDiff;
    return Number(Boolean(a.likelyFalsePositive)) - Number(Boolean(b.likelyFalsePositive));
  });
  return {
    sourceType: options.sourceType,
    sourceLabel: options.sourceLabel,
    title: options.title,
    excerptCount: totalChars,
    findings,
    summary: summarize(findings),
    analyzedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}

// src/lib/code-scanner.ts
var STRING_LITERAL_RE = /(?<!\\)(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\]|\$\{[^}]*\})*`)/g;
var COMMENT_RE = /\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|#(?!\!)[^\n]*/g;
var JSX_TEXT_RE = />([^<>{][^<>]*)</g;
var PROSE_EXTENSION_RE = /\.(?:md|mdx|txt|rst|adoc)$/i;
function stripQuotes(literal) {
  if (literal.startsWith('"') && literal.endsWith('"') || literal.startsWith("'") && literal.endsWith("'") || literal.startsWith("`") && literal.endsWith("`")) {
    return literal.slice(1, -1);
  }
  return literal;
}
function isLikelyUserFacing(text) {
  const trimmed = text.trim();
  if (trimmed.length < 3) return false;
  if (/^[A-Z0-9_./:-]+$/.test(trimmed) && !/\s/.test(trimmed)) return false;
  if (/^https?:\/\//i.test(trimmed)) return false;
  if (/^[\w.-]+@[\w.-]+$/.test(trimmed)) return false;
  if (/^[.#]?[a-z]+(-[a-z0-9]+)+$/.test(trimmed)) return false;
  if (/^\$\{/.test(trimmed)) return false;
  return /[A-Za-z]/.test(trimmed);
}
function extractReviewableSegments(file) {
  const segments = [];
  const { path, content } = file;
  if (PROSE_EXTENSION_RE.test(path)) {
    let inFence = false;
    for (const [index, line] of content.split(/\r?\n/).entries()) {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        continue;
      }
      const text = line.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      if (!inFence && isLikelyUserFacing(text)) {
        segments.push({ text, source: `${path}:${index + 1}` });
      }
    }
    return segments;
  }
  for (const match of content.matchAll(STRING_LITERAL_RE)) {
    const text = stripQuotes(match[0]).replace(/\\n/g, " ").replace(/\\t/g, " ").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\s+/g, " ").trim();
    if (!isLikelyUserFacing(text)) continue;
    const line = content.slice(0, match.index ?? 0).split("\n").length;
    segments.push({ text, source: `${path}:${line}` });
  }
  for (const match of content.matchAll(COMMENT_RE)) {
    const text = match[0].replace(/^\/\/\s?/, "").replace(/^\/\*+/, "").replace(/\*+\/$/, "").replace(/^<!--/, "").replace(/-->$/, "").replace(/^#\s?/, "").replace(/\s+/g, " ").trim();
    if (!isLikelyUserFacing(text) || text.length < 8) continue;
    const line = content.slice(0, match.index ?? 0).split("\n").length;
    segments.push({ text, source: `${path}:${line} (comment)` });
  }
  if (/\.(tsx|jsx|vue|svelte|html?|cshtml|razor)$/i.test(path)) {
    for (const match of content.matchAll(JSX_TEXT_RE)) {
      const text = (match[1] ?? "").replace(/\s+/g, " ").trim();
      if (!isLikelyUserFacing(text)) continue;
      const line = content.slice(0, match.index ?? 0).split("\n").length;
      segments.push({ text, source: `${path}:${line} (markup)` });
    }
  }
  if (/\.(cshtml|razor)$/i.test(path)) {
    for (const match of content.matchAll(/@\*([\s\S]*?)\*@/g)) {
      const text = (match[1] ?? "").replace(/\s+/g, " ").trim();
      if (!isLikelyUserFacing(text) || text.length < 8) continue;
      const line = content.slice(0, match.index ?? 0).split("\n").length;
      segments.push({ text, source: `${path}:${line} (razor comment)` });
    }
  }
  return segments;
}
function analyzeCodeFiles(files, preferences) {
  const segments = files.flatMap(extractReviewableSegments);
  const label = files.length === 1 ? files[0].path : `${files.length} files`;
  return analyzeSegments(segments, {
    sourceType: "code",
    sourceLabel: label,
    title: "Code language review",
    preferences
  });
}
var CODE_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".cs",
  ".cshtml",
  ".razor",
  ".py",
  ".rb",
  ".go",
  ".java",
  ".kt",
  ".swift",
  ".rs",
  ".php",
  ".vue",
  ".svelte",
  ".html",
  ".htm",
  ".md",
  ".mdx",
  ".txt",
  ".rst",
  ".adoc",
  ".json",
  ".yml",
  ".yaml"
];
function hasSupportedExtension(filename) {
  const lower = filename.toLowerCase();
  return CODE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

// src/lib/storage.ts
function readMigratedStorage(key, legacyKey) {
  if (typeof localStorage === "undefined") return null;
  try {
    const current = localStorage.getItem(key);
    if (current != null) return current;
    const legacy = localStorage.getItem(legacyKey);
    if (legacy == null) return null;
    localStorage.setItem(key, legacy);
    return legacy;
  } catch {
    return null;
  }
}

// src/lib/feedback.ts
function feedbackEventFromFinding(finding, kind, options) {
  return {
    version: 1,
    kind,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    ruleId: finding.ruleId,
    match: finding.match,
    label: finding.label,
    category: finding.category,
    context: finding.context,
    source: finding.source,
    contextModes: finding.contextModes,
    soft: Boolean(finding.likelyFalsePositive),
    note: options?.note,
    sourceKind: options?.sourceKind
  };
}
var ISSUE_NEW = "https://github.com/NomadBuilder/un-default/issues/new";
var FEEDBACK_STORAGE_KEY = "un-default.feedbackEvents.v1";
var LEGACY_FEEDBACK_STORAGE_KEY = "anti-default.feedbackEvents.v1";
function recordFeedbackLocally(event) {
  if (typeof localStorage === "undefined") return;
  try {
    const raw = readMigratedStorage(
      FEEDBACK_STORAGE_KEY,
      LEGACY_FEEDBACK_STORAGE_KEY
    );
    const list = raw ? JSON.parse(raw) : [];
    const next = Array.isArray(list) ? list : [];
    next.push(event);
    localStorage.setItem(
      FEEDBACK_STORAGE_KEY,
      JSON.stringify(next.slice(-200))
    );
  } catch {
  }
}
function fineInContextIssueUrl(event) {
  const title = `[Un-Default] Fine in context: ${event.ruleId} (\u201C${event.match}\u201D)`;
  const body = [
    "## Why this was fine",
    "",
    event.note?.trim() || "<!-- What made this match appropriate here? -->",
    "",
    "## Event (machine-readable)",
    "",
    "```json",
    JSON.stringify(event, null, 2),
    "```",
    "",
    "This helps Un-Default learn safer soft-flags and ignores without guessing.",
    ""
  ].join("\n");
  const params = new URLSearchParams({
    title,
    body,
    labels: "un-default,fine-in-context"
  });
  return `${ISSUE_NEW}?${params.toString()}`;
}

// src/lib/rewrite.ts
function isLexicalSuggestion(suggestion) {
  return inferSuggestionKind(suggestion) === "swap";
}
function swapsFor(finding) {
  if (finding.swaps && finding.swaps.length > 0) return finding.swaps;
  return finding.suggestions.filter(isLexicalSuggestion);
}
function previewRewrite(finding, suggestion) {
  if (!isLexicalSuggestion(suggestion)) return null;
  const before = finding.context;
  const re = new RegExp(
    finding.match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "i"
  );
  const after = before.replace(re, suggestion);
  return { before, after };
}
function applySuggestionToText(source, finding, suggestion) {
  const start = finding.index;
  const end = start + finding.match.length;
  if (start >= 0 && end <= source.length && source.slice(start, end).toLowerCase() === finding.match.toLowerCase()) {
    return source.slice(0, start) + suggestion + source.slice(end);
  }
  const re = new RegExp(
    finding.match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "i"
  );
  return source.replace(re, suggestion);
}
function applyPassageRewrites(source, findings, options) {
  const skipSoft = options?.skipSoft !== false;
  const skipCoded = options?.skipCoded !== false;
  let skippedSoft = 0;
  let skippedCoded = 0;
  let skippedNoSuggestion = 0;
  const actionable = findings.filter((f) => {
    if (skipCoded && f.category === "coded") {
      skippedCoded += 1;
      return false;
    }
    if (skipSoft && f.likelyFalsePositive) {
      skippedSoft += 1;
      return false;
    }
    if (swapsFor(f).length === 0) {
      skippedNoSuggestion += 1;
      return false;
    }
    return true;
  }).slice().sort((a, b) => b.index - a.index);
  let text = source;
  for (const finding of actionable) {
    const suggestion = swapsFor(finding)[0];
    text = applySuggestionToText(text, finding, suggestion);
  }
  return {
    text,
    applied: actionable.length,
    skippedSoft,
    skippedCoded,
    skippedNoSuggestion
  };
}

// src/lib/safe-fix.ts
function preserveCase(original, replacement) {
  if (original === original.toUpperCase() && /[A-Z]/.test(original)) {
    return replacement.toUpperCase();
  }
  if (original[0] === original[0]?.toUpperCase() && original.slice(1) === original.slice(1).toLowerCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}
var SAFE_FIXERS = {
  policeman: (m) => preserveCase(m, "police officer"),
  fireman: (m) => preserveCase(m, "firefighter"),
  mailman: (m) => preserveCase(m, "mail carrier"),
  salesman: (m) => preserveCase(m, "salesperson"),
  stewardess: (m) => preserveCase(m, "flight attendant"),
  waitress: (m) => preserveCase(m, "server"),
  businessman: (m) => preserveCase(m, "business person"),
  mankind: (m) => preserveCase(m, "humankind"),
  manpower: (m) => preserveCase(m, "workforce"),
  chairman: (m) => preserveCase(m, "chair"),
  "you-guys": (m) => preserveCase(m, "you all"),
  "sanity-check": (m) => /checks$/i.test(m) ? preserveCase(m, "quick checks") : preserveCase(m, "quick check"),
  "whitelist-blacklist": (m) => {
    const lower = m.toLowerCase();
    if (lower.startsWith("white")) {
      if (lower.endsWith("ing")) return preserveCase(m, "allowlisting");
      if (lower.endsWith("ed")) return preserveCase(m, "allowlisted");
      if (lower.endsWith("s") && !lower.endsWith("ss")) {
        return preserveCase(m, "allowlists");
      }
      return preserveCase(m, "allowlist");
    }
    if (lower.startsWith("black")) {
      if (lower.endsWith("ing")) return preserveCase(m, "denylisting");
      if (lower.endsWith("ed")) return preserveCase(m, "denylisted");
      if (lower.endsWith("s") && !lower.endsWith("ss")) {
        return preserveCase(m, "denylists");
      }
      return preserveCase(m, "denylist");
    }
    return null;
  },
  "master-slave": (m) => {
    if (/master\s*\/\s*slave/i.test(m)) return preserveCase(m, "primary/replica");
    if (/master-slave/i.test(m)) return preserveCase(m, "primary-replica");
    return null;
  }
};
function isSafeAutofixRule(ruleId) {
  return ruleId in SAFE_FIXERS;
}
function safeReplacementFor(finding) {
  if (finding.category === "coded") return null;
  if (finding.likelyFalsePositive) return null;
  if (finding.contextModes?.length) return null;
  const fixer = SAFE_FIXERS[finding.ruleId];
  if (!fixer) return null;
  return fixer(finding.match);
}
function planSafeFixes(findings) {
  const plans = [];
  let skipped = 0;
  for (const finding of findings) {
    const replacement = safeReplacementFor(finding);
    if (!replacement) {
      skipped += 1;
      continue;
    }
    plans.push({ finding, replacement });
  }
  return { plans, skipped };
}
export {
  CODE_EXTENSIONS,
  FEEDBACK_STORAGE_KEY,
  LANGUAGE_RULES,
  analyzeCodeFiles,
  analyzeSegments,
  analyzeText,
  applyPassageRewrites,
  applySuggestionToText,
  defaultPreferences,
  extractReviewableSegments,
  feedbackEventFromFinding,
  fineInContextIssueUrl,
  hasSupportedExtension,
  inferSuggestionKind,
  isLexicalSuggestion,
  isSafeAutofixRule,
  normalizeSuggestions,
  planSafeFixes,
  preserveCase,
  previewRewrite,
  recordFeedbackLocally,
  safeReplacementFor,
  suggestionTexts
};
//# sourceMappingURL=index.js.map
