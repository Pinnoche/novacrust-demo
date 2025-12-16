# Crypto Conversion UI (Next.js + Tailwind v4)

This project implements a crypto-to-fiat conversion UI using **Next.js (App Router)** and **Tailwind CSS v4**, following a DRY, component-driven approach. The UI is built as a single page with state-driven views, floating dropdowns, and a lightweight design-system setup.

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Pinnoche/novacrust-demo.git
cd novacrust-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🧱 Tech Stack

- **Next.js 13+ (App Router)**
- **React (Client Components where needed)**
- **Tailwind CSS ^v4 (CSS-first theming)**
- **next/font** for optimized font loading
- **Lucide-React** for  icons
- **React Toastify** for notifications

##

---

## 🧠 Key Behaviors

### Floating Dropdowns

- Dropdowns are absolutely positioned overlays
- They do not affect document flow
- Anchored using `relative` parents and `absolute` children

### Click Outside to Close

- `Implemented` OverLay click to remove dropdowns
- Works for mouse and touch events
- Prevents accidental layout or event conflicts

### Input Handling

- Inputs are controlled components
- Validation happens locally
- Conversion logic lives in the parent to avoid coupling and stale state issues

---

## ⚖️ Assumptions & Trade-offs

### Assumptions

- Conversion rates are static placeholders (e.g. `1450`) and would be replaced by API data
- Token and wallet lists are static for demo purposes
- No authentication or persistence is required

### Trade-offs

- **Minimal animations**
  - Focus was on correctness and structure
  - Animations (Framer Motion) can be layered in later

---

## ✅ Future Improvements

- Keyboard navigation for dropdowns
- Debounced search for large token lists
- API-driven conversion rates
- Full dark mode theme
- Accessibility enhancements (ARIA roles)

---

## 📌 Summary

This project prioritizes:

- Clean separation of concerns
- True reusability
- Modern Tailwind v4 patterns
- Production-ready UI behavior



