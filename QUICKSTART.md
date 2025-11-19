# 🚀 Quick Start Guide

## Step 1: Install Node.js

### Option A: Using Homebrew (Recommended for macOS)
```bash
brew install node
```

### Option B: Direct Download
1. Visit https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Install the downloaded package
4. Restart your terminal

### Verify Installation
```bash
node --version
npm --version
```

## Step 2: Install Dependencies

```bash
cd portfolio
npm install
```

Or use the setup script:
```bash
./setup.sh
```

## Step 3: Run the Portfolio

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

## Step 4: Customize Your Links

Before deploying, update these in `app/page.tsx`:

1. **Resume Link** (line ~177): Replace `YOUR_RESUME_LINK_HERE`
2. **LinkedIn** (line ~183): Replace `YOUR-LINKEDIN-SLUG` 
3. **GitHub Links** (lines 11, 21, 29): Replace `link: "#"` with your repo URLs

## Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

That's it! Your portfolio will be live in minutes. 🎉

