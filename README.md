# Student Pack — Unofficial GitHub Student Developer Pack Guide

> **IMPORTANT DISCLAIMER:**
> This project is an independent open-source community guide and is **NOT affiliated with, endorsed by, sponsored by, or operated by GitHub Inc. or Microsoft Corporation**. GitHub and the GitHub logo are registered trademarks of GitHub, Inc.

An open-source, community-driven web application and comprehensive knowledge base explaining every tool in the GitHub Student Developer Pack: what it actually does, what students can build with it, how long it is free, and verified redemption steps.

---

## 🎯 Key Features

- 🔍 **Verified Offer Directory**: Structured catalog detailing partner benefits, durations, eligibility, and payment requirements.
- 🚀 **What to Claim First**: Strategic recommendations highlighting zero-risk "Duration of Study" offers vs. time-sensitive short trials.
- 🏗️ **Build Your Stack**: Interactive visual recipes connecting frontend, authentication, backend, database, and monitoring tools.
- ⚖️ **Side-by-Side Comparison**: Compare up to 3 tools across key dimensions like card requirements, hosting model, and restrictions.
- 🧭 **9 Career Learning Paths**: Curated roadmaps for Frontend, Backend, Full Stack, AI/ML, DevOps, Data Science, Mobile, Open Source, and Startups.
- 📋 **Local Claim Checklist**: Track claimed, actively used, and expired offers directly in the browser via `localStorage` (no account required).
- ⏳ **Clock & Sunset Awareness**: Transparent alerts on time-sensitive offers and sunset notices (such as DigitalOcean).
- ❓ **Comprehensive Student FAQ**: Answers to common questions regarding credit cards, school emails, graduation rules, and commercial usage.

---

## 🛠️ Data Principles

1. **No Hallucinated Data**: Benefit details, pricing values, and redemption workflows are sourced from official partner pages and GitHub Education documentation.
2. **Transparent Billing Alerts**: Explicit warnings whenever an infrastructure partner requires a credit card or payment method for anti-bot identity verification.
3. **Structured TypeScript Schema**: All offers adhere to the strictly-typed `StudentPackOffer` data model in `src/types/index.ts`.

---

## 💻 Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Iconography**: Lucide React
- **Build Tool**: Vite
- **Storage**: Browser LocalStorage for user checklist persistence

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/example/student-pack.git

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📄 License & Community

This project is released under the [MIT License](./LICENSE). Contributions, error corrections, and partner updates are warmly welcomed! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.
