export type Account = {
  id: string
  displayName: string
  name: string
  group: Group
}

export type Group = {
  id: string
  name: string
}

export const accounts: Account[] = [
  {
    id: '476f3d0d-bfa8-467c-aefc-9e8f4cd3fe36',
    name: 'theordinary',
    displayName: 'The Ordinary',
    group: {
      id: '2fda9c44-704d-4794-9813-2a865343206e',
      name: 'Global',
    },
  },
  {
    id: '8507b857-bab8-48be-847c-0f7dcfffb227',
    name: 'guerlain',
    displayName: 'Guerlain',
    group: {
      id: '2fda9c44-704d-4794-9813-2a865343206e',
      name: 'Global',
    },
  },
  {
    id: '90b2514d-8574-43af-b49f-0f023006dfbe',
    name: 'kiehls',
    displayName: "Kiehl's Since 1851",
    group: {
      id: '2fda9c44-704d-4794-9813-2a865343206e',
      name: 'Global',
    },
  },
  {
    id: 'b271907e-3e89-4974-9496-cf4272dd2add',
    name: 'diorbeauty',
    displayName: 'Dior Beauty Official',
    group: {
      id: '2fda9c44-704d-4794-9813-2a865343206e',
      name: 'Global',
    },
  },
  {
    id: 'b5ad011b-5091-495d-a68a-e1e05a8c9583',
    name: 'clinique',
    displayName: 'Clinique',
    group: {
      id: '2fda9c44-704d-4794-9813-2a865343206e',
      name: 'Global',
    },
  },
]

export const accountsForSelect = accounts.map((account) => {
  return {
    id: account.id,
    value: account.name,
    label: account.displayName,
  }
})
