
# ✅ ToDo_List_App (Vanilla JavaScript)

A simple and interactive **To-Do List web app** built using only **HTML, CSS, and JavaScript**. It allows users to add, check, delete, and store tasks persistently using the browser's **localStorage**. Tasks are saved in a structured JSON format for clean data handling.

---

## 🔧 Features

- ➕ Add new tasks  
- ✔️ Mark tasks as completed  
- ❌ Delete individual tasks  
- 🧹 Delete all tasks with confirmation  
- 💾 Persistent data storage using `localStorage`  
- 📄 Structured JSON format instead of raw HTML

---

## 📦 Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript (ES6)  
- Local Storage API

---

## 📁 How Tasks Are Stored

Tasks are stored as an array of objects in `localStorage`, for example:

json
[
  { "text": "Buy groceries", "checked": false },
  { "text": "Read a book", "checked": true }
]


This makes it easier to maintain, debug, and possibly integrate with backend APIs later.

---

## 🚀 Getting Started

### 1. Clone the repository

bash
git clone [https://github.com/your-username/task-list-app](https://github.com/AbdulRehman-Qasim/ToDo_List_App/).git


### 2. Open the app

Just open the `index.html` file in your browser to use the app.

---

## 🧪 Demo

[Click here to view demo]([#](https://todo-list-app-beige-rho.vercel.app/)) 

---

## 📌 Possible Future Enhancements

* ✏️ Edit tasks
* 🔍 Filter tasks (All / Completed / Pending)
* 📲 Mobile responsiveness improvements
* ☁️ Backend or cloud sync support
* 🟰 Drag-and-drop sorting

---

## 🤝 Contributing

Pull requests and suggestions are welcome. For major changes, please open an issue first to discuss what you'd like to change.


## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

