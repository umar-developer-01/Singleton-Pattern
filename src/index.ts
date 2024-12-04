import { PubSubManager } from "./PubSubManager";

setTimeout(() => {
  PubSubManager.getInstance().userSubscribe("1326565", "SAMSUNG");
}, 5000);

setTimeout(() => {
  PubSubManager.getInstance().userUnSubscribe("1326565", "SAMSUNG");
}, 25000);
