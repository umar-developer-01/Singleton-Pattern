🚀 Singleton Pattern and Pub/Sub with Redis
This project demonstrates the Singleton Pattern and Pub/Sub functionality using Redis. Follow the steps below to set up and run the project!

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


📚 About the Singleton Pattern and Pub/Sub
Singleton Pattern ensures that there is only one instance of a class in the entire application lifecycle.
Pub/Sub (Publisher/Subscriber) allows message broadcasting to multiple subscribers, making it ideal for real-time applications like notifications, chat systems, and mo
