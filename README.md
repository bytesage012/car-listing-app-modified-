# 🚗 Car Listing App

A full-stack **Car Listing Application** built with **React + TailwindCSS** on the frontend, **Node.js + Express** on the backend, and **PostgreSQL** as the database.  
It allows users to add, view, and manage car listings with image uploads.

---

## ✨ Features

- 📄 **Car Form** – Add new car listings with fields:
  - Make, Model, Year, Price, Description, and Image (upload supported).
- 🖼 **Image Uploads** – Cars can have images stored locally and served via Express.
- 📋 **Car List** – Displays all submitted cars in reverse chronological order.
- 🗄 **PostgreSQL Database** – Securely stores all car data.
- ⚡ **REST API** – Backend provides JSON endpoints for frontend consumption.
- 🎨 **Modern UI** – Built with React + TailwindCSS 3.4.17 for a clean and responsive design.
- 🚀 **Deployable** – Works on Codespaces, Render, Railway, Vercel, Netlify, or any Node/Postgres setup.

---

## 🛠 Tech Stack

**Frontend**
- React 18
- TailwindCSS 3.4.17
- Heroicons (for UI icons)

**Backend**
- Node.js + Express
- Multer (for file/image uploads)
- pg (PostgreSQL client)
- dotenv (environment variables)

**Database**
- PostgreSQL 15+ (local or cloud-hosted e.g., Supabase, Neon, Railway)

---

## 📂 Project Structure

```
car-listing-app/
├── backend/
│ ├── server.js # Express server
│ ├── db.js # PostgreSQL connection
│ ├── routes/
│ │ └── cars.js # Car API routes
│ └── uploads/ # Uploaded images
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ ├── components/
│ │ │ ├── CarForm.jsx
│ │ │ └── CarList.jsx
│ │ └── pages/
│ │ └── Home.jsx
│ ├── public/
│ └── package.json
├── setup.sh # Setup script for dependencies
├── README.md
```


---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd car-listing-app
```



### 2. Backend Setup
```bash
cd backend
npm install
```


### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=your_pg_username
DB_PASS=your_pg_password
DB_NAME=car_listing
DB_PORT=5432
```

Start the backend:

```bash
node server.js
```

### 3. Database Setup

Inside `psql`:

```sql
CREATE DATABASE car_listing;

\c car_listing

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  make VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  description TEXT,
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint    | Description              |
| ------ | ----------- | ------------------------ |
| GET    | `/api/cars` | Fetch all car listings   |
| POST   | `/api/cars` | Add new car (with image) |

Example POST (with image):

```bash
curl -X POST http://localhost:5000/api/cars \
  -F "make=Toyota" \
  -F "model=Corolla" \
  -F "year=2021" \
  -F "price=15000" \
  -F "description=Clean car" \
  -F "image=@/path/to/image.png"
```

---

## 🚀 Deployment

* **Database**: Use managed PostgreSQL (Supabase, Neon, Railway).
* **Backend**: Deploy Node/Express on Render, Railway, or Heroku.
* **Frontend**: Deploy React on Vercel or Netlify.
* Configure backend URL in frontend (e.g., `REACT_APP_API_URL`).

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit changes

   ```bash
   git commit -m "Added new feature"
   ```
4. Push branch

   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify.
