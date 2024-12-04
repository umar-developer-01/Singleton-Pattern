📈 Real-Time Stock Price Updates with Pub/Sub and Singleton Patterns
By combining the Pub/Sub pattern with the Singleton pattern, we efficiently manage stock price subscriptions and updates for a large number of users. 🚀



🌟 Key Features
🧩 Singleton Pattern
Ensures there’s only one instance of the subscription manager in the application.


Provides a centralized, consistent way to manage user subscriptions.


🔔 Pub/Sub Pattern


Enables real-time broadcasting of stock price updates to all interested users.


Perfect for handling dynamic, fast-changing data like stock prices.


🎯 How It Works
User Subscriptions

Users indicate their interest in specific stock prices. 📊
Centralized PubSubManager

The PubSubManager class tracks all user subscriptions. ✅
Ensures only one instance handles the subscriptions (Singleton).
Stock Price Updates

When a stock price changes, the update is published. 🔄
Subscribed users immediately receive updates via WebSocket connections. 🌐
Real-Time Scalability

This design allows handling thousands of users seamlessly, ensuring consistency and performance. 🌟


🖼️ Visual Representation
The attached image illustrates:

How user interests are tracked
How stock price updates flow through the system
How updates are relayed to interested users in real time
🚀 Why This Approach?
Scalable: Handles a large user base effortlessly. 🌍
Efficient: Centralized management avoids redundant subscriptions. ⚙️
Consistent: Guarantees all users receive accurate, up-to-date information. 🔄
🌟 Stay Ahead in Real-Time Stock Updates! 💼
By using this architecture, your application is ready to handle dynamic user demands in a scalable and efficient manner. Let’s make stock price tracking smarter and faster! 🚀

🐳 Setting Up Redis with Docker

Run Redis in Docker

docker run -d -p 6379:6379 redis  

Access the Redis Container

docker exec -it <container_id> /bin/bash  


Open Redis CLI
Inside the container, launch the Redis CLI:

redis-cli  


🛠️ Setting Up the Project
Initialize the Project

npm init -y  


Set Up TypeScript

npx tsc --init  


Install Dependencies

npm install redis  




Here's a beautiful and emoji-rich README file for your project:

🚀 Singleton Pattern and Pub/Sub with Redis
This project demonstrates the Singleton Pattern and Pub/Sub functionality using Redis. Follow the steps below to set up and run the project!

🐳 Setting Up Redis with Docker
Run Redis in Docker

bash
Copy code
docker run -d -p 6379:6379 redis  
Access the Redis Container

bash
Copy code
docker exec -it <container_id> /bin/bash  
Open Redis CLI
Inside the container, launch the Redis CLI:

bash
Copy code
redis-cli  
🛠️ Setting Up the Project

Install Dependencies
npm i 

Running the Project 

tsc -b
node dist/index.js


