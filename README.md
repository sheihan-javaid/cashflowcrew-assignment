# 💡 IdeaSpark – Mini Idea Pitching Board

> **Live Demo:** [https://cashflowcrew-assignment.vercel.app](https://cashflowcrew-assignment.vercel.app)

A community-driven idea board where anyone can share, discover, and upvote startup ideas and passion projects — built with Next.js, MongoDB, and Tailwind CSS.

---

## ✨ Features

- 📝 Submit ideas with a title, description, and author name
- 👍 Upvote ideas you love
- 🔍 Search ideas by title or author in real time
- 🔥 Trending ideas board sorted by votes
- ⚡ Instant UI updates after every action
- 📱 Fully responsive on all screen sizes

---

## 🛠 Tech Stack

| Layer | Technology |
|------------|-------------------------------|
| Framework | Next.js 16 (App Router) |
| Frontend | React 19, Tailwind CSS 4 |
| Backend | Next.js API Routes |
| Database | MongoDB Atlas + Mongoose 9 |
| Deployment | Vercel |

---

## 🚀 Live Demo

🔗 **[https://cashflowcrew-assignment.vercel.app](https://cashflowcrew-assignment.vercel.app)**

---

## 📦 Local Setup

Follow these steps to run the project locally on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/sheihan-javaid/cashflowcrew-assignment.git
cd cashflowcrew-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

> You can get your MongoDB connection string from [MongoDB Atlas](https://cloud.mongodb.com) after creating a free cluster.

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

Visit [http://localhost:3000](http://localhost:3000) to see the app running locally.

---

## 📁 Project Structure

```
cashflowcrew-assignment/
├── app/
│   ├── api/
│   │   └── ideas/          # API routes (GET, POST, DELETE, upvote)
│   └── page.jsx            # Main page
├── components/
│   ├── IdeaCard.jsx        # Individual idea card component
│   └── IdeaForm.jsx        # Idea submission form component
├── models/
│   └── Idea.js             # Mongoose schema
├── lib/
│   └── mongodb.js          # MongoDB connection helper
├── .env.local              # Environment variables (not committed)
└── package.json
```

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌍 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

To deploy your own instance:
1. Fork this repository
2. Import it on [vercel.com](https://vercel.com)
3. Add `MONGODB_URI` in **Settings → Environment Variables**
4. Allow all IPs (`0.0.0.0/0`) in **MongoDB Atlas → Network Access**
5. Click **Deploy** 🚀

---

## 👤 Author

**Sheihan Javaid**
- GitHub: [@sheihan-javaid](https://github.com/sheihan-javaid)

---

<!-- ## 📄 License

This project is open source and available under the [MIT License](LICENSE). -->