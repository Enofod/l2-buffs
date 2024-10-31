import { Buff } from "./buffs";

export const DARK_MYSTIC: Buff[] =
[
    {
        "name": "Might",
        "minLevel": 7,
        "buffLevel": 1,
        "icon": "Might"
    },
    {
        "name": "Shield",
        "minLevel": 7,
        "buffLevel": 1,
        "icon": "Shield"
    }
]

export const SHILLEN_ORACLE: Buff[] =
[
    {
        "name": "Might",
        "minLevel": 20,
        "buffLevel": 2,
        "icon": "Might"
    },
    {
        "name": "Wind Walk",
        "minLevel": 20,
        "buffLevel": 1,
        "icon": "Wind Walk"
    },
    {
        "name": "Concentration",
        "minLevel": 20,
        "buffLevel": 1,
        "icon": "Concentration"
    },
    {
        "name": "Kiss of Eva",
        "minLevel": 20,
        "buffLevel": 1,
        "icon": "Kiss of Eva"
    },
    {
        "name": "Shield",
        "minLevel": 25,
        "buffLevel": 2,
        "icon": "Shield"
    },
    {
        "name": "Empower",
        "minLevel": 25,
        "buffLevel": 1,
        "icon": "Empower"
    },
    {
        "name": "Focus",
        "minLevel": 25,
        "buffLevel": 1,
        "icon": "Focus"
    },
    {
        "name": "Mental Shield",
        "minLevel": 25,
        "buffLevel": 1,
        "icon": "Mental Shield"
    },
    {
        "name": "Wind Walk",
        "minLevel": 30,
        "buffLevel": 2,
        "icon": "Wind Walk"
    },
    {
        "name": "Concentration",
        "minLevel": 30,
        "buffLevel": 2,
        "icon": "Concentration"
    },
    {
        "name": "Vampiric Rage",
        "minLevel": 30,
        "buffLevel": 1,
        "icon": "Vampiric Rage"
    },
    {
        "name": "Resist Wind",
        "minLevel": 35,
        "buffLevel": 1,
        "icon": "Resist Wind"
    }
]

export const SHILLEN_ELDER: Buff[] =
[
    {
        "name": "Might",
        "minLevel": 40,
        "buffLevel": 3,
        "icon": "Might"
    },
    {
        "name": "Resist Wind",
        "minLevel": 40,
        "buffLevel": 2,
        "icon": "Resist Wind"
    },
    {
        "name": "Mental Shield",
        "minLevel": 40,
        "buffLevel": 2,
        "icon": "Mental Shield"
    },
    {
        "name": "Guidance",
        "minLevel": 40,
        "buffLevel": 1,
        "icon": "Guidance"
    },
    {
        "name": "Death Whisper",
        "minLevel": 40,
        "buffLevel": 1,
        "icon": "Death Whisper"
    },
    {
        "name": "Resist Wind",
        "minLevel": 44,
        "buffLevel": 3,
        "icon": "Resist Wind"
    },
    {
        "name": "Shield",
        "minLevel": 44,
        "buffLevel": 3,
        "icon": "Shield"
    },
    {
        "name": "Empower",
        "minLevel": 44,
        "buffLevel": 2,
        "icon": "Empower"
    },
    {
        "name": "Focus",
        "minLevel": 44,
        "buffLevel": 2,
        "icon": "Focus"
    },
    {
        "name": "Concentration",
        "minLevel": 44,
        "buffLevel": 3,
        "icon": "Concentration"
    },
    {
        "name": "Vampiric Rage",
        "minLevel": 44,
        "buffLevel": 2,
        "icon": "Vampiric Rage"
    },
    {
        "name": "Guidance",
        "minLevel": 48,
        "buffLevel": 2,
        "icon": "Guidance"
    },
    {
        "name": "Death Whisper",
        "minLevel": 48,
        "buffLevel": 2,
        "icon": "Death Whisper"
    },
    {
        "name": "Mental Shield",
        "minLevel": 48,
        "buffLevel": 3,
        "icon": "Mental Shield"
    },
    {
        "name": "Focus",
        "minLevel": 52,
        "buffLevel": 3,
        "icon": "Focus"
    },
    {
        "name": "Concentration",
        "minLevel": 52,
        "buffLevel": 4,
        "icon": "Concentration"
    },
    {
        "name": "Kiss of Eva",
        "minLevel": 52,
        "buffLevel": 2,
        "icon": "Kiss of Eva"
    },
    {
        "name": "Greater Empower",
        "minLevel": 52,
        "buffLevel": 3,
        "icon": "Greater Empower"
    },
    {
        "name": "Guidance",
        "minLevel": 56,
        "buffLevel": 3,
        "icon": "Guidance"
    },
    {
        "name": "Death Whisper",
        "minLevel": 56,
        "buffLevel": 3,
        "icon": "Death Whisper"
    },
    {
        "name": "Mental Shield",
        "minLevel": 56,
        "buffLevel": 4,
        "icon": "Mental Shield"
    },
    {
        "name": "Vampiric Rage",
        "minLevel": 58,
        "buffLevel": 3,
        "icon": "Vampiric Rage"
    },
    {
        "name": "Concentration",
        "minLevel": 60,
        "buffLevel": 5,
        "icon": "Concentration"
    },
    {
        "name": "Wild Magic",
        "minLevel": 62,
        "buffLevel": 1,
        "icon": "Wild Magic"
    },
    {
        "name": "Concentration",
        "minLevel": 68,
        "buffLevel": 6,
        "icon": "Concentration"
    },
    {
        "name": "Wild Magic",
        "minLevel": 70,
        "buffLevel": 2,
        "icon": "Wild Magic"
    },
    {
        "name": "Vampiric Rage",
        "minLevel": 72,
        "buffLevel": 4,
        "icon": "Vampiric Rage"
    }
]

export const SHILLEN_SAINT: Buff[] =
[
    {
        "name": "Arcane Protection",
        "minLevel": 76,
        "buffLevel": 1,
        "icon": "Arcane Protection"
    },
    {
        "name": "Prophecy of Wind",
        "minLevel": 78,
        "buffLevel": 1,
        "icon": "Prophecy of Wind"
    }
]

export const SE: Buff[] =
[
    ...DARK_MYSTIC,
    ...SHILLEN_ORACLE,
    ...SHILLEN_ELDER,
    ...SHILLEN_SAINT
]
