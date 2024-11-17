type AlignmentName = (typeof alignmentOptions)[number]

export type Alignment = {
  name: AlignmentName
  abbreviation: string
  description: string
  link: string
}

export const alignmentOptions = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil',
] as const

export const alignments: {[alignment in AlignmentName]: Alignment} = {
  'Lawful Good': {
    name: 'Lawful Good',
    abbreviation: 'LG',
    description:
      'A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly.',
    link: 'https://www.d20srd.org/srd/description.htm#lawfulGood',
  },
  'Neutral Good': {
    name: 'Neutral Good',
    abbreviation: 'NG',
    description: 'A neutral good character does the best that a good person can do. He is devoted to helping others.',
    link: 'https://www.d20srd.org/srd/description.htm#neutralGood',
  },
  'Chaotic Good': {
    name: 'Chaotic Good',
    abbreviation: 'CG',
    description:
      'A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he’s kind and benevolent.',
    link: 'https://www.d20srd.org/srd/description.htm#chaoticGood',
  },
  'Lawful Neutral': {
    name: 'Lawful Neutral',
    abbreviation: 'LN',
    description:
      'A lawful neutral character acts as law, tradition, or a personal code directs her. Order and organization are paramount to her.',
    link: 'https://www.d20srd.org/srd/description.htm#lawfulNeutral',
  },
  Neutral: {
    name: 'Neutral',
    abbreviation: 'N',
    description:
      'A neutral character does what seems to be a good idea. She doesn’t feel strongly one way or the other when it comes to good vs. evil or law vs. chaos.',
    link: 'https://www.d20srd.org/srd/description.htm#neutral',
  },
  'Chaotic Neutral': {
    name: 'Chaotic Neutral',
    abbreviation: 'CN',
    description:
      'A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn’t strive to protect others’ freedom.',
    link: 'https://www.d20srd.org/srd/description.htm#chaoticNeutral',
  },
  'Lawful Evil': {
    name: 'Lawful Evil',
    abbreviation: 'LE',
    description: `A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts.`,
    link: 'https://www.d20srd.org/srd/description.htm#lawfulEvil',
  },
  'Neutral Evil': {
    name: 'Neutral Evil',
    abbreviation: 'NE',
    description: 'A neutral evil villain does whatever she can get away with. She is out for herself, pure and simple.',
    link: 'https://www.d20srd.org/srd/description.htm#neutralEvil',
  },
  'Chaotic Evil': {
    name: 'Chaotic Evil',
    abbreviation: 'CE',
    description:
      'A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable.',
    link: 'https://www.d20srd.org/srd/description.htm#chaoticEvil',
  },
}
