"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManager_1 = require("./PubSubManager");
setTimeout(() => {
    PubSubManager_1.PubSubManager.getInstance().userSubscribe("1326565", "SAMSUNG");
}, 5000);
setTimeout(() => {
    PubSubManager_1.PubSubManager.getInstance().userUnSubscribe("1326565", "SAMSUNG");
}, 25000);
