# Gaurav Raj - Modern Developer Portfolio

A fast, minimalist, and responsive developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, matching the terminal/hacker dark aesthetic of [Pushpit Jain's website](https://www.pushpitjain.in/).

---

## ⚡ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom neon accents & dark themes
- **Icons:** Lucide React
- **Typography:** Inter (Sans) & JetBrains Mono (Monospace)
- **Deployment:** Vercel (Automatic CI/CD on every `git push`)

---

## 🚀 Quick Start (Local Development)

To run this website locally on your computer:

```bash
# 1. Navigate to the project directory
cd gauravraj-portfolio

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your live website.

---

## ✏️ How to Customize Your Information

All your personal details, education, internships, projects, skills, and contact details are stored in a single clean configuration file:

📁 **`src/data/portfolioData.ts`**

Whenever you want to add a new project, update your CGPA, or add a new job experience, simply edit that file!

### Replacing Your Resume File
Place your exported PDF resume into:
📁 **`public/resume.pdf`**
The "Download Resume" button on your site will instantly serve this file.

---

## 🌐 Deploy to GitHub & Vercel (Continuous Deployment)

Follow these simple steps once to connect GitHub to Vercel:

### Step 1: Push Code to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. named `portfolio`).
2. Run these commands inside your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Gaurav Raj portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your `portfolio` repository from the list and click **"Import"**.
4. Leave all build settings at their defaults (Vercel automatically detects Next.js).
5. Click **"Deploy"**.

✨ **Done!** Within ~30 seconds, your site will be live at a custom `https://<your-project>.vercel.app` URL.

### 🔄 Automatic Updates
Whenever you make changes to your portfolio:
```bash
git add .
git commit -m "Update portfolio details"
git push
```
Vercel will detect the new commit and automatically rebuild and redeploy your website in seconds!
