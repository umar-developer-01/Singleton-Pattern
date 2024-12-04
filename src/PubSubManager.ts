// Import the necessary module from the 'redis' package
import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;
  private redisClient: RedisClientType;
  private subscriptions: Map<string, string[]>;

  // Private constructor to prevent direct construction calls with the `new` operator
  private constructor() {
    // Create a Redis client and connect to the Redis server
    this.redisClient = createClient();
    this.redisClient.connect();
    this.subscriptions = new Map();
  }

  // The static method that controls the access to the singleton instance
  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  public userSubscribe(userId: string, stock: string) {
    if (!this.subscriptions.has(stock)) {
      this.subscriptions.set(stock, []);
    }
    this.subscriptions.get(stock)?.push(userId);

    if (this.subscriptions.get(stock)?.length === 1) {
      this.redisClient.subscribe(stock, (message) => {
        this.handleMessage(stock, message);
      });
      console.log(`Subscribed to Redis channel: ${stock}`);
    }
  }

  public userUnSubscribe(userId: string, stock: string) {
    this.subscriptions.set(
      stock,
      this.subscriptions.get(stock)?.filter((sub) => sub !== userId) || []
    );

    if (this.subscriptions.get(stock)?.length === 0) {
      this.redisClient.unsubscribe(stock);
      console.log(`UnSubscribed to Redis channel: ${stock}`);
    }
  }

  // Define the method that will be called when a message is published to the subscribed channel
  private handleMessage(stock: string, message: string) {
    console.log(`Message received on channel ${stock}: ${message}`);
    this.subscriptions.get(stock)?.forEach((sub) => {
      console.log(`Sending message to user: ${sub}`);
    });
  }

  // Cleanup on instance destruction
  public async disconnect() {
    await this.redisClient.quit();
  }
}

// The PubSubManager class will manage the subscriptions and notifications for stock price updates.
// It will use Redis for the Pub/Sub mechanism and ensure that there is only one instance of the class (Singleton pattern).
// By using the Pub/Sub pattern along with the Singleton pattern, you can efficiently manage stock price subscriptions and updates for a large number of users. The PubSubManager class ensures that there is only one instance managing the subscriptions, and it relays updates to the appropriate WebSocket connections. This approach ensures scalability and consistency in handling real-time stock price updates. The attached image visually represents the flow of information in this system, showing how user interests are tracked and how updates are relayed to interested users.
