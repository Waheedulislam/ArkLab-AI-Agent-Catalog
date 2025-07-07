# ArkLab AI Agent Catalog

A responsive and SEO-friendly AI Agent catalog built with **Next.js**, **TypeScript**, **Redux Toolkit**, **Shadcn UI**, and **Framer Motion**.  
This project was built as part of the **ArkLab Frontend Developer Intern - Take-Home Challenge**.

---

## 🔗 Live Demo

🌐 [Click here to view the deployed project](https://ark-lab-ai-agent-catalog-rho.vercel.app/)

---

## 🚀 Features

✅ Server-side rendering (SSR) using App Router  
✅ Dynamic and responsive UI using **Shadcn UI**  
✅ Filtering options: **Status**, **Category**, **Pricing Model**  
✅ Search by **name or description** (with debounce)  
✅ State management with **Redux Toolkit**  
✅ Smooth card animations using **Framer Motion**  
✅ SEO optimized with `<title>` and `<meta>`  
✅ Mobile-first responsive design  
✅ Clear All Filters button  
✅ Accordion-style collapsible filters (Shadcn Accordion)
✅ **Google login authentication using NextAuth.js** 🔐

---

## 🧩 Tech Stack

- **Next.js 14 (App Router + SSR)**
- **TypeScript**
- **Redux Toolkit**
- **Shadcn UI** (based on Radix UI + Tailwind)
- **Tailwind CSS**
- **Framer Motion**
- **Vercel** (for deployment)

---

## 🗂️ Folder Structure

├── app/
│ └── catalog/
│ └── page.tsx
│ └── layout.tsx
├── components/
│ ├── AgentCard.tsx
│ ├── AgentList.tsx
│ ├── FilterSidebar.tsx
│ ├── SearchBar.tsx
│ └── providers.tsx
├── redux/
│ ├── store.ts
│ └── features/
│ └── agentSlice.ts
├── data/
│ └── mock-agents.json

---

## 🎁 Bonus Features

- 🔐 Integrated **Google Authentication** using NextAuth.js
- 👤 Shows user's avatar and name in the Navbar after login
- 🚪 Logout button with session clearing

---

## 🧪 How to Run Locally

To set up the project locally, follow these instructions:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Waheedulislam/ArkLab-AI-Agent-Catalog.git

   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

3. **Add a .env.local file with the following:**:

   ```

   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_random_secret


   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open site **:

```
   Open: http://localhost:3000

```
