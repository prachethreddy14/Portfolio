# 🚀 How to Deploy Your Portfolio (So Friends Can See It!)

## Why localhost:3000 Doesn't Work for Sharing

**localhost** = "this computer only"
- Only YOU can see it
- Your friends can't access it
- It's like a private room in your house

**To share with friends, you need to:**
- Put it on the internet (deploy it)
- Get a public URL (like `yourname.vercel.app`)

---

## Step-by-Step: Deploy to Vercel (FREE!)

### Step 1: Create a GitHub Account (If You Don't Have One)

1. Go to: https://github.com
2. Click "Sign up"
3. Create an account (it's free!)

### Step 2: Create a New Repository

1. After signing in, click the **"+"** icon (top right)
2. Click **"New repository"**
3. Name it: `portfolio` (or `netflix-portfolio`)
4. Make it **Public** (so Vercel can access it)
5. **DON'T** check "Initialize with README" (you already have files)
6. Click **"Create repository"**

### Step 3: Push Your Code to GitHub

**Option A: Using GitHub Desktop (Easier)**

1. Download GitHub Desktop: https://desktop.github.com/
2. Install it
3. Sign in with your GitHub account
4. Click "File" → "Add Local Repository"
5. Navigate to your portfolio folder
6. Click "Publish repository"
7. Done!

**Option B: Using Terminal (More Advanced)**

1. Open Terminal
2. Navigate to your portfolio:
   ```bash
   cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio
   ```

3. Initialize git (if not already done):
   ```bash
   git init
   ```

4. Add all files:
   ```bash
   git add .
   ```

5. Commit:
   ```bash
   git commit -m "Initial portfolio commit"
   ```

6. Add your GitHub repository (replace YOUR_USERNAME):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   ```

7. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 4: Deploy to Vercel

1. Go to: https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Click **"New Project"**
6. Find your `portfolio` repository
7. Click **"Import"**
8. Vercel will auto-detect Next.js settings
9. Click **"Deploy"**
10. Wait 2-3 minutes...

### Step 5: Get Your Public Link!

After deployment:
- You'll see: **"Congratulations!"**
- Your site will be at: `https://portfolio-xxxxx.vercel.app`
- Or you can set a custom domain like: `yourname.vercel.app`

**This link works for EVERYONE!** 🌍

---

## Quick Summary

1. ✅ Create GitHub account
2. ✅ Upload code to GitHub
3. ✅ Sign up for Vercel
4. ✅ Connect GitHub to Vercel
5. ✅ Deploy!
6. ✅ Share your link!

---

## After Deployment

### Update Your Links First!

Before sharing, update these in `app/page.tsx`:
- Resume link
- LinkedIn profile
- GitHub project links

Then push changes:
```bash
git add .
git commit -m "Update links"
git push
```

Vercel will automatically update your site!

---

## Custom Domain (Optional)

Want `yourname.com` instead of `yourname.vercel.app`?

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard, go to your project
3. Click "Settings" → "Domains"
4. Add your domain
5. Follow DNS instructions

---

## Need Help?

- GitHub help: https://docs.github.com
- Vercel docs: https://vercel.com/docs
- Or ask me! 😊

