export const abilitiesOptions = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'] as const
export const abilitiesTypesOptions = ['Extraordinary', 'Supernatural', 'Spell-Like'] as const

export type AbilityName = (typeof abilitiesOptions)[number]
export type AbilityType = (typeof abilitiesTypesOptions)[number]

export const abilitiesDescriptions: { [name in AbilityName]: string } = {
  Strength: `Strength measures muscle and physical power. This ability is especially important for fighters, barbarians, paladins, rangers, and monks because it helps them prevail in combat. Strength also limits the amount of equipment your character can carry.`,
  Dexterity: `Dexterity measures agility, reflexes, and balance. This ability is the most important one for rogues, but it’s also useful for characters who wear light or medium armor or no armor at all. This ability is vital for characters seeking to excel with ranged weapons, such as the bow or sling. A character with a Dexterity score of 0 is incapable of moving and is effectively immobile (but not unconscious).`,
  Constitution: `Constitution represents your character’s health and stamina. A Constitution bonus increases a character’s hit points, so the ability is important for all classes. Some creatures, such as undead and constructs, do not have a Constitution score. Their modifier is +0 for any Constitution-based checks. A character with a Constitution score of 0 is dead.`,
  Intelligence: `Intelligence determines how well your character learns and reasons. This ability is important for wizards because it affects their spellcasting ability in many ways. Creatures of animal-level instinct have Intelligence scores of 1 or 2. Any creature capable of understanding speech has a score of at least 3. A character with an Intelligence score of 0 is comatose. Some creatures do not possess an Intelligence score. Their modifier is +0 for any Intelligence-based skills or checks.`,
  Wisdom: `Wisdom describes a character’s willpower, common sense, awareness, and intuition. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers. If you want your character to have acute senses, put a high score in Wisdom. Every creature has a Wisdom score.`,
  Charisma: `Charisma measures a character’s personality, personal magnetism, ability to lead, and appearance. It is the most important ability for paladins, sorcerers, and bards. It is also important for clerics, since it affects their ability to turn undead. For undead creatures, Charisma is a measure of their unnatural “lifeforce.” Every creature has a Charisma score.`,
}
