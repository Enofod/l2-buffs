
export type NewbieGuideBuff = {
    minLevel: number
    maxLevel: number
    name: string
    description: string
    icon: string
}

export const WARRIOR_NEWBIE_GUIDE_BUFFS: NewbieGuideBuff[] = [
    {
        minLevel: 8,
        maxLevel: 24,
        name: 'Wind Walk For Novice',
        description: 'Temporarily increases Speed. Effect 2.',
        icon: 'ww'
    },
    {
        minLevel: 11,
        maxLevel: 23,
        name: 'Shield For Novice',
        description: 'Temporarily increases P. Def. Effect 3.',
        icon: 'shield'
    },
    {
        minLevel: 13,
        maxLevel: 21,
        name: 'Vampiric Rage For Novice',
        description: 'Temporarily restores HP using damage inflicted upon the enemy. Excludes damage inflicted by skill or remote attack. Effect 4.',
        icon: 'vr'
    },
    {
        minLevel: 14,
        maxLevel: 20,
        name: 'Regeneration For Novice',
        description: 'Temporarily increases ability to restore HP. Effect 3',
        icon: 'regeneration'
    },
    {
        minLevel: 15,
        maxLevel: 19,
        name: 'Haste For Novice',
        description: 'Temporarily increases Atk. Spd. Effect 1.',
        icon: 'haste'
    },
    {
        minLevel: 15,
        maxLevel: 19,
        name: 'Life Cubic For Novice',
        description: 'Temporarily increases Atk. Spd. Effect 1.',
        icon: 'lifecubic'
    }
]

export const MAGE_NEWBIE_GUIDE_BUFFS: NewbieGuideBuff[] = [
    {
        minLevel: 8,
        maxLevel: 24,
        name: 'Wind Walk For Novice',
        description: 'Temporarily increases Speed. Effect 2.',
        icon: 'ww'
    },
    {
        minLevel: 11,
        maxLevel: 23,
        name: 'Shield For Novice',
        description: 'Temporarily increases P. Def. Effect 3.',
        icon: 'shield'
    },
    {
        minLevel: 12,
        maxLevel: 22,
        name: 'Bless the Soul For Novice',
        description: 'Temporarily increases maximum MP. Effect 6.',
        icon: 'bts'
    },
    {
        minLevel: 13,
        maxLevel: 21,
        name: 'Acumen For Novice',
        description: 'Temporarily increases ability to restore HP. Effect 3',
        icon: 'acumen'
    },
    {
        minLevel: 14,
        maxLevel: 20,
        name: 'Concentration For Novice',
        description: 'Temporarily increases Atk. Spd. Effect 1.',
        icon: 'concentration'
    },
    {
        minLevel: 15,
        maxLevel: 19,
        name: 'Empower For Novice',
        description: 'Temporarily increases Atk. Spd. Effect 1.',
        icon: 'empower'
    },
    {
        minLevel: 15,
        maxLevel: 19,
        name: 'Life Cubic For Novice',
        description: 'Temporarily increases Atk. Spd. Effect 1.',
        icon: 'lifecubic'
    }
]