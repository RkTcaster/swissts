export const genderOptions = ['Male', 'Female', 'Other'] as const
export type Gender = (typeof genderOptions)[number]