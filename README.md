# todo-app-fullstack

## ⚙️ How to Run the Project Locally

1. **Clone the repository**
git clone https://github.com/DeepanshuGupta891/todo-app.git
cd todo-app

2. **Install dependencies**
   npm install

3. **Create a .env file in the root folder with:**
   .env --> folder name
   then add these two lines
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/todoapp

4. **Run the server**
 Using command --->npm run dev

5) **Run the frontend**
   Using command --->npm start


**Fetch all tasks from the database.**
GET ----> http://localhost:5000/api/tasks (Hit on browser or postman to see all tasks)
