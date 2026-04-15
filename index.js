#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

import { COLORS, MATERIALS, PROPERTIES, RARITIES } from './constants.js';

function ColorText(text, color) {
    return chalk.hex(color)(text);
}

function EncloseText(text, color = COLORS.WHITE, margin = 0, padding = 1) {
    let options = {
        padding: padding,
        margin: margin,
        borderStyle: "round",
        borderColor: color
    };

    return boxen(text, options);
}

function Danger(text) {
    console.log(EncloseText(text, COLORS.RED));
}

function Warning(text) {
    console.log(EncloseText(text, COLORS.YELLOW));
}

function Info(text) {
    console.log(EncloseText(text));
}

function GetRarityColor(rarityId) {
    return RARITIES[rarityId].COLOR;
}

Info(`Debug: ${ColorText("RARITIES", COLORS.LIGHT_BLUE)}`);

for (const [key, value] of Object.entries(RARITIES)) {
    console.log(`   ${value.VALUE}: ${ColorText(value.NAME, value.COLOR)}`);
}

Info(`Debug: ${ColorText("MATERIALS", COLORS.LIGHT_BLUE)}`);

for (const [key, value] of Object.entries(MATERIALS)) {
    console.log(`${ColorText(value.NAME, GetRarityColor(value.RARITY))}\n` +
        `   1 ${value.UNIT} of ${value.NAME}, 2 ${value.UNITS} of ${value.NAME}\n` +
        `   Properties: ${value.PROPERTIES.map((property) => PROPERTIES[property].NAME).join(', ')}`);
}

console.log();