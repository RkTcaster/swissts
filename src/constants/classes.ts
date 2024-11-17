// Definition of classes and their features for D&D 3.5 edition

import { AbilityType } from './abilities'
import { babByClassNameByLevel } from './bab'
import { SavingThrows, SavingThrowsByLevel, savingThrowsByClassNameByLevel } from './saving-throws'
import { Skill } from './skills'
import { SpellPerDay, spellsSlotsByClassNameByLevel } from './spells'

export const spellcasterClassesOptions = ['Cleric', 'Wizard'] as const
const playableClassesOptions = [...spellcasterClassesOptions, 'Fighter', 'Rogue'] as const

export type SpellcasterClasses = (typeof spellcasterClassesOptions)[number]
type PlayableClasses = (typeof playableClassesOptions)[number]

export class CharacterClass {
  constructor(
    public name: PlayableClasses,
    public hitDice: number,
    public skillPoints: {
      firstLevel: number
      perLevel: number
    },
    public classSkills: Skill[],
    public weaponProficiencies: string,
    public armorProficiencies: string,
    public classFeatures: ClassFeature[]
  ) {}

  getClassSavingThrowsByLevel(level: number): SavingThrows {
    return savingThrowsByClassNameByLevel[this.name][level]
  }

  getClassBaseAttackBonusByLevel(level: number): number[] {
    return babByClassNameByLevel[this.name][level]
  }

  getClassSpellsPerDayByLevel(level: number): SpellPerDay | undefined {
    const thisClassName = this.name as SpellcasterClasses
    if (spellcasterClassesOptions.includes(thisClassName)) {
      return spellsSlotsByClassNameByLevel[thisClassName][level]
    }
  }

  getCurrentClassFeatures(level: number): ClassFeature[] {
    return this.classFeatures.filter((feature) => feature.levelRequirement <= level)
  }
}

const classFeaturesNames = [
  'Fast Movement',
  'Sneak Attack',
  'Trapfinding',
  'Evasion',
  'Trap Sense',
  'Uncanny Dodge',
  'Improved Uncanny Dodge',
  'Aura',
  'Turn or Rebuke Undead',
  'Spells Cleric',
  'Deity, Domains, and Domain Spells',
  'Spontaneous Casting',
  'Chaotic, Evil, Good, and Lawful Spells',
  'Spells Wizard',
  'Summon familiar',
  'Scribe Scroll',
  'Bonus Feats Wizard',
  'Spellbooks',
] as const

type ClassFeaturesNames = (typeof classFeaturesNames)[number]

type ClassFeature = {
  name: string
  levelRequirement: number
  type?: AbilityType
  shortDescription: string
  link: string
}

const classesFeatures: { [name in ClassFeaturesNames]: ClassFeature } = {
  'Fast Movement': {
    name: 'Fast Movement',
    type: 'Extraordinary',
    levelRequirement: 1,
    shortDescription: 'Land speed is faster by +10 feet',
    link: 'https://www.d20srd.org/srd/classes/barbarian.htm#barbarianFastMovement',
  },
  'Sneak Attack': {
    name: 'Sneak Attack',
    levelRequirement: 1,
    shortDescription:
      'Extra damage when an opponent is unable to defend himself effectively from her attack. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter.',
    link: 'https://www.d20srd.org/srd/classes/rogue.htm#sneakAttack',
  },
  Trapfinding: {
    name: 'Trapfinding',
    levelRequirement: 1,
    shortDescription: 'Can use the Search skill to locate traps when the task has a Difficulty Class higher than 20',
    link: 'https://www.d20srd.org/srd/classes/rogue.htm#trapfinding',
  },
  Evasion: {
    name: 'Evasion',
    type: 'Extraordinary',
    levelRequirement: 2,
    shortDescription: 'Can avoid even magical and unusual attacks with great agility',
    link: 'https://www.d20srd.org/srd/classes/rogue.htm#evasion',
  },
  'Trap Sense': {
    name: 'Trap Sense',
    type: 'Extraordinary',
    levelRequirement: 3,
    shortDescription: 'Intuition that alerts to danger from activated traps',
    link: 'https://www.d20srd.org/srd/classes/rogue.htm#trapSense',
  },
  'Uncanny Dodge': {
    name: 'Uncanny Dodge',
    type: 'Extraordinary',
    levelRequirement: 4,
    shortDescription:
      'React to danger before your senses would normally, retain your Dexterity bonus to Armor Class even if caught flat-footed',
    link: 'https://www.d20srd.org/srd/classes/rogue.htm#uncannyDodge',
  },
  'Improved Uncanny Dodge': {
    name: 'Improved Uncanny Dodge',
    type: 'Extraordinary',
    levelRequirement: 8,
    shortDescription: 'Can no longer be flanked',
    link: 'https://www.d20srd.org/srd/classes/rogue.htm#improvedUncannyDodge',
  },
  Aura: {
    name: 'Aura',
    type: 'Extraordinary',
    levelRequirement: 1,
    shortDescription: 'Has a particularly powerful aura corresponding to her alignment',
    link: 'https://www.d20srd.org/srd/classes/cleric.htm#aura',
  },
  'Turn or Rebuke Undead': {
    name: 'Turn or Rebuke Undead',
    type: 'Supernatural',
    levelRequirement: 1,
    shortDescription: 'Has the power to affect undead creatures by channeling the power of his faith',
    link: 'https://www.d20srd.org/srd/classes/cleric.htm#turnorRebukeUndead',
  },
  'Spells Cleric': {
    name: 'Spells Cleric',
    levelRequirement: 1,
    shortDescription: 'Can cast a number of divine spells per day',
    link: 'https://www.d20srd.org/srd/classes/cleric.htm#spells',
  },
  'Deity, Domains, and Domain Spells': {
    name: 'Deity, Domains, and Domain Spells',
    levelRequirement: 1,
    shortDescription: 'Your deity influences your alignment, what magic can perform, values, and how others see you',
    link: 'https://www.d20srd.org/srd/classes/cleric.htm#deityDomainsAndDomainSpells',
  },
  'Spontaneous Casting': {
    name: 'Spontaneous Casting',
    levelRequirement: 1,
    shortDescription:
      'Can “lose” any prepared spell that is not a domain spell in order to cast any cure spell of the same spell level or lower',
    link: 'https://www.d20srd.org/srd/classes/cleric.htm#spontaneousCasting',
  },
  'Chaotic, Evil, Good, and Lawful Spells': {
    name: 'Chaotic, Evil, Good, and Lawful Spells',
    levelRequirement: 1,
    shortDescription: 'Can’t cast spells of an alignment opposed to her own or her deity’s',
    link: 'https://www.d20srd.org/srd/classes/cleric.htm#chaoticEvilGoodAndLawfulSpells',
  },
  'Spells Wizard': {
    name: 'Spells Wizard',
    levelRequirement: 1,
    shortDescription: 'Can cast a number of arcane spells per day',
    link: 'https://www.d20srd.org/srd/classes/sorcererWizard.htm#wizardSpells',
  },
  'Summon familiar': {
    name: 'Summon familiar',
    levelRequirement: 1,
    shortDescription:
      'A familiar is a magical beast that resembles a small animal and is unusually tough and intelligent. The creature serves as a companion and servant',
    link: 'https://www.d20srd.org/srd/classes/sorcererWizard.htm#familiars',
  },
  'Scribe Scroll': {
    name: 'Scribe Scroll',
    levelRequirement: 1,
    shortDescription: 'Can create a scroll of any spell that you know',
    link: 'https://www.d20srd.org/srd/feats.htm#scribeScroll',
  },
  'Bonus Feats Wizard': {
    name: 'Bonus Feats Wizard',
    levelRequirement: 5,
    shortDescription: 'At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat from a list when leveling up',
    link: 'https://www.d20srd.org/srd/classes/sorcererWizard.htm#bonusFeats',
  },
  Spellbooks: {
    name: 'Spellbooks',
    levelRequirement: 1,
    shortDescription: 'A wizard must study her spellbook each day to prepare her spells',
    link: 'https://www.d20srd.org/srd/classes/sorcererWizard.htm#spellbooks',
  },
}