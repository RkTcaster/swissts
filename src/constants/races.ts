// Based on D&D 3.5 edition

import { AbilityName } from './abilities'
import { SavingThrows } from './saving-throws'
import { Sizes } from './sizes'
import { Skill, SkillName, skills } from './skills'

export const playableRacesOptions = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human'] as const
type PlayableRaces = (typeof playableRacesOptions)[number]

export type Race = {
  name: PlayableRaces
  description: string
  abilityModifiers: { [abilityName in AbilityName]?: number }
  skillsModifiers?: { [abilityName in SkillName]?: { skill: Skill; modifier: number; description: string } }[]
  savingThrowModifier?: SavingThrows & { description: string }
  size: Exclude<Sizes, 'Fine' | 'Diminutive' | 'Tiny' | 'Huge' | 'Gargantuan' | 'Colossal'>
  speed: number
  languages: string[]
  traits: string[]
  link: string
}

export const races: {
  [raceName in PlayableRaces]: Race
} = {
  Dwarf: {
    name: 'Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
    abilityModifiers: {
      Constitution: 2,
      Charisma: -2,
    },
    size: 'Medium',
    speed: 20,
    languages: ['Common', 'Dwarven'],
    traits: [
      'Stonecunning: This ability grants a dwarf a +2 racial bonus on Search checks to notice unusual stonework, such as sliding walls, stonework traps, new construction (even when built to match the old), unsafe stone surfaces, shaky stone ceilings, and the like. Something that isn’t stone but that is disguised as stone also counts as unusual stonework. A dwarf who merely comes within 10 feet of unusual stonework can make a Search check as if he were actively searching, and a dwarf can use the Search skill to find stonework traps as a rogue can. A dwarf can also intuit depth, sensing his approximate depth underground as naturally as a human can sense which way is up.',
      'Weapon Familiarity: Dwarves may treat dwarven waraxes and dwarven urgroshes as martial weapons, rather than exotic weapons.',
      'Stability: A dwarf gains a +4 bonus on ability checks made to resist being bull rushed or tripped when standing on the ground (but not when climbing, flying, riding, or otherwise not standing firmly on the ground).',
      '+2 racial bonus on saving throws against poison.',
      '+2 racial bonus on saving throws against spells and spell-like effects.',
      '+1 racial bonus on attack rolls against orcs and goblinoids.',
      '+4 dodge bonus to Armor Class against monsters of the giant type.',
      '+2 racial bonus on Appraise checks that are related to stone or metal items.',
      '+2 racial bonus on Craft checks that are related to stone or metal.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#dwarves',
  },
  Elf: {
    name: 'Elf',
    description: 'Graceful and intelligent, elves are known for their affinity for magic and nature.',
    abilityModifiers: {
      Dexterity: 2,
      Constitution: -2,
    },
    skillsModifiers: [
      {
        Listen: { skill: skills.Listen, description: 'Elves receive a +2 racial bonus on Listen checks.', modifier: 2 },
      },
      {
        Search: { skill: skills.Search, description: 'Elves receive a +2 racial bonus on Search checks.', modifier: 2 },
      },
      { Spot: { skill: skills.Spot, description: 'Elves receive a +2 racial bonus on Spot checks.', modifier: 2 } },
    ],
    size: 'Medium',
    speed: 30,
    languages: ['Common', 'Elven'],
    traits: [
      'Immunity to magic sleep effects, and a +2 racial saving throw bonus against enchantment spells or effects.',
      'Low-light Vision: An elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. She retains the ability to distinguish color and detail under these conditions.',
      'Automatic Search check if passing within 5 feet of a secret or concealed door.',
      'Weapon Proficiency: Elves receive the Martial Weapon Proficiency feats for the longsword, rapier, longbow (including composite longbow), and shortbow (including composite shortbow) as bonus feats.',
      '+2 racial bonus on Listen, Search, and Spot checks. An elf who merely passes within 5 feet of a secret or concealed door is entitled to a Search check to notice it as if she were actively looking for it.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#elves',
  },
  Human: {
    name: 'Human',
    description: 'Humans are adaptable and ambitious, known for their versatility and innovation.',
    abilityModifiers: {},
    size: 'Medium',
    speed: 30,
    languages: ['Common'],
    traits: [
      '1 extra feat at 1st level.',
      '4 extra skill points at 1st level and 1 extra skill point at each additional level.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#humans',
  },
  Gnome: {
    name: 'Gnome',
    description: 'Gnomes are known for their curious and inventive nature, often dabbling in alchemy and magic.',
    abilityModifiers: {
      Constitution: 2,
      Strength: -2,
    },
    skillsModifiers: [
      {
        Listen: {
          skill: skills.Listen,
          description: 'Gnomes receive a +2 racial bonus on Listen checks.',
          modifier: 2,
        },
      },
    ],
    size: 'Small',
    speed: 20,
    languages: ['Common', 'Gnome'],
    traits: [
      'Low-light Vision: A gnome can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. She retains the ability to distinguish color and detail under these conditions.',
      '+2 racial bonus on saving throws against illusions.',
      '+1 racial bonus on attack rolls against kobolds and goblinoids.',
      '+4 dodge bonus to Armor Class against monsters of the giant type.',
      '+2 racial bonus on Listen checks.',
      '+2 racial bonus on Craft (alchemy) checks.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#gnomes',
  },
  'Half-Elf': {
    name: 'Half-Elf',
    description: 'Half-elves combine the best traits of humans and elves, making them versatile and adaptable.',
    abilityModifiers: {},
    skillsModifiers: [
      {
        Listen: {
          skill: skills.Listen,
          description: 'Half-Elf receive a +1 racial bonus on Listen checks.',
          modifier: 1,
        },
      },
      {
        Search: {
          skill: skills.Search,
          description: 'Half-Elf receive a +1 racial bonus on Search checks.',
          modifier: 1,
        },
      },
      { Spot: { skill: skills.Spot, description: 'Half-Elf receive a +1 racial bonus on Spot checks.', modifier: 1 } },
      {
        Diplomacy: {
          skill: skills.Diplomacy,
          description: 'Half-Elf receive a +1 racial bonus on Diplomacy checks.',
          modifier: 1,
        },
      },
      {
        'Gather Information': {
          skill: skills['Gather Information'],
          description: 'Half-Elf receive a +1 racial bonus on Gather Information checks.',
          modifier: 1,
        },
      },
    ],
    size: 'Medium',
    speed: 30,
    languages: ['Common', 'Elven'],
    traits: [
      'Immunity to sleep spells and similar magical effects, and a +2 racial bonus on saving throws against enchantment spells or effects.',
      'Low-light Vision: A half-elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. She retains the ability to distinguish color and detail under these conditions.',
      '+1 racial bonus on Listen, Search, and Spot checks.',
      '+2 racial bonus on Diplomacy and Gather Information checks.',
      'Elven Blood: For all effects related to race a half-elf is considered an elf.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#halfElves',
  },
  'Half-Orc': {
    name: 'Half-Orc',
    description: 'Half-orcs possess the strength of orcs along with the adaptability of humans.',
    abilityModifiers: {
      Strength: 2,
      Intelligence: -2,
      Charisma: -2,
    },
    skillsModifiers: [
      {
        Intimidate: {
          skill: skills.Intimidate,
          description: 'Half-Orc receive a +2 racial bonus on Intimidate checks.',
          modifier: 2,
        },
      },
      {
        Listen: {
          skill: skills.Listen,
          description: 'Half-Orc receive a +1 racial bonus on Listen checks.',
          modifier: 1,
        },
      },
      { Spot: { skill: skills.Spot, description: 'Half-Orc receive a +1 racial bonus on Spot checks.', modifier: 1 } },
    ],
    size: 'Medium',
    speed: 30,
    languages: ['Common', 'Orc'],
    traits: [
      'Darkvision: Half-orcs can see in the dark up to 60 feet.',
      '+2 racial bonus on Intimidate checks.',
      '+1 racial bonus on Listen and Spot checks.',
      'Orc Blood: For all effects related to race, a half-orc is considered an orc.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#halfOrcs',
  },
  Halfling: {
    name: 'Halfling',
    description: 'Halflings are known for their agility, stealth, and luck.',
    abilityModifiers: {
      Dexterity: 2,
      Strength: -2,
    },
    skillsModifiers: [
      {
        Climb: {
          skill: skills.Climb,
          description: 'Halfling receive a +2 racial bonus on Climb checks.',
          modifier: 2,
        },
      },
      {
        Jump: {
          skill: skills.Jump,
          description: 'Halfling receive a +2 racial bonus on Jump checks.',
          modifier: 2,
        },
      },
      {
        Listen: {
          skill: skills.Listen,
          description: 'Halfling receive a +2 racial bonus on Listen checks.',
          modifier: 2,
        },
      },
      {
        'Move Silently': {
          skill: skills['Move Silently'],
          description: 'Halfling receive a +2 racial bonus on "Move Silently" checks.',
          modifier: 2,
        },
      },
    ],
    savingThrowModifier: {
      Fortitude: 1,
      Reflex: 1,
      Will: 1,
      description: 'Halfling receive a +1 racial bonus on all saving throws.',
    },
    size: 'Small',
    speed: 20,
    languages: ['Common', 'Halfling'],
    traits: [
      '+1 racial bonus on all saving throws.',
      '+2 morale bonus on saving throws against fear: This bonus stacks with the halfling’s +1 bonus on saving throws in general.',
      '+1 racial bonus on attack rolls with thrown weapons and slings.',
      '+2 racial bonus on Climb, Jump, Listen, and Move Silently checks.',
    ],
    link: 'https://www.d20srd.org/srd/races.htm#halflings',
  },
}
