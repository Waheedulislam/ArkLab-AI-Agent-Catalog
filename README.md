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

## 🧪 How to Run Locally

1. **Clone the repo:**

```bash
git clone https://github.com/Waheedulislam/ArkLab-AI-Agent-Catalog.git
cd arklab-ai-catalog

---



```

Install dependencies:
npm install
Run the development server:
