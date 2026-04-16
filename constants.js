export const COLORS = {
    BLUE: "#3b58d9",
    GREEN: "#2ed15c",
    GREY: "#555555",
    LIGHT_BLUE: "#51c6f5",
    ORANGE: "#e6671e",
    PINK: "#d154d1",
    PURPLE: "#8135cc",
    RED: "#e62020",
    WHITE: "#ffffff",
    YELLOW: "#e3cd29"
};

export const RARITIES = {
    COMMON: {
        ID: "COMMON",
        NAME: "Common",
        COLOR: COLORS.GREY,
        VALUE: 0
    },
    UNCOMMON: {
        ID: "UNCOMMON",
        NAME: "Uncommon",
        COLOR: COLORS.GREEN,
        VALUE: 1
    },
    RARE: {
        ID: "RARE",
        NAME: "Rare",
        COLOR: COLORS.BLUE,
        VALUE: 2
    },
    EPIC: {
        ID: "EPIC",
        NAME: "Epic",
        COLOR: COLORS.PURPLE,
        VALUE: 3
    },
    LEGENDARY: {
        ID: "LEGENDARY",
        NAME: "Legendary",
        COLOR: COLORS.ORANGE,
        VALUE: 4
    },
    MYTHIC: {
        ID: "MYTHIC",
        NAME: "Mythic",
        COLOR: COLORS.PINK,
        VALUE: 5
    }
};

export const PROPERTIES = {
    COLD: {
        ID: "COLD",
        NAME: "Cold"
    },
    FRAGILE: {
        ID: "FRAGILE",
        NAME: "Fragile"
    },
    GAS: {
        ID: "GAS",
        NAME: "Gas"
    },
    LIQUID: {
        ID: "LIQUID",
        NAME: "Liquid"
    },
    SOLID: {
        ID: "SOLID",
        NAME: "Solid"
    },
    TRANSPARENT: {
        ID: "TRANSPARENT",
        NAME: "Transparent"
    }
};

export const MATERIALS = {
    ICE: {
        ID: "ICE",
        NAME: "Ice",
        UNIT: "Block",
        UNITS: "Blocks",
        RARITY: RARITIES.COMMON.ID,
        PROPERTIES: [
            PROPERTIES.COLD.ID,
            PROPERTIES.FRAGILE.ID,
            PROPERTIES.SOLID.ID,
            PROPERTIES.TRANSPARENT.ID
        ]
    },
    WATER: {
        ID: "WATER",
        NAME: "Water",
        UNIT: "Gallon",
        UNITS: "Gallons",
        RARITY: RARITIES.COMMON.ID,
        PROPERTIES: [
            PROPERTIES.LIQUID.ID,
            PROPERTIES.TRANSPARENT.ID
        ]
    }
};

export const OPERATIONS = {
    FREEZE: {
        ID: "FREEZE",
        NAME: "Freeze",
        VERB_PAST: "Frozen",
        VERB_PRESENT: "Freeze"
    },
    MELT: {
        ID: "MELT",
        NAME: "Melt",
        VERB_PAST: "Melted",
        VERB_PRESENT: "Melt"
    }
};

export const TRANSMUTATIONS = [
    {
        INPUT: MATERIALS.ICE.ID,
        OPERATION: OPERATIONS.MELT.ID,
        OUTPUT: MATERIALS.WATER.ID
    },
    {
        INPUT: MATERIALS.WATER.ID,
        OPERATION: OPERATIONS.FREEZE.ID,
        OUTPUT: MATERIALS.ICE.ID
    }
];