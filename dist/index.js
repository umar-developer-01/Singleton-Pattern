"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.Games.push({
        id: Math.random().toString(),
        whitePlayerName: "Alice",
        blackPlayerName: "Deniz",
        moves: [],
    });
}, 5000);
