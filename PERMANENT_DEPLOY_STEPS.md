# 🚀 Permanent Deployment - Step by Step Guide

Follow these steps to get your portfolio live on the internet FOREVER!

---

## ✅ Step 1: Initialize Git (DONE - I did this for you!)

Git is now initialized in your portfolio folder.

---

## 📝 Step 2: Update Your Links (IMPORTANT!)

Before deploying, update these in `app/page.tsx`:

1. **Resume Link** (around line 177):
   - Find: `href="YOUR_RESUME_LINK_HERE"`
   - Replace with: Your actual resume PDF link (Google Drive, Dropbox, etc.)
   - Example: `href="https://drive.google.com/file/d/YOUR_FILE_ID/view"`

2. **LinkedIn** (around line 183):
   - Find: `href="https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG"`
   - Replace `YOUR-LINKEDIN-SLUG` with your actual LinkedIn username
   - Example: `href="https://www.linkedin.com/in/pracheth-bacholla"`

3. **GitHub Project Links** (lines 11, 21, 29):
   - Find: `link: "#"`
   - Replace with your actual GitHub repository URLs
   - Example: `link: "https://github.com/yourusername/project-name"`

**After updating, save the file!**

---

## 🔵 Step 3: Create GitHub Account

1. Go to: **https://github.com**
2. Click **"Sign up"** (top right)
3. Enter your email, create a password
4. Verify your email
5. Complete the setup

**You now have a GitHub account!** ✅

---

## 📦 Step 4: Create GitHub Repository

1. After signing in to GitHub, click the **"+"** icon (top right)
2. Click **"New repository"**
3. Fill in:
   - **Repository name:** `portfolio` (or `netflix-portfolio`)
   - **Description:** "My Netflix-themed portfolio website"
   - **Visibility:** Choose **Public** (so Vercel can access it)
   - **DON'T** check "Add a README file" (you already have files)
   - **DON'T** add .gitignore or license (you already have them)
4. Click **"Create repository"**

**You now have an empty repository!** ✅

---

## 📤 Step 5: Push Your Code to GitHub

**Open Terminal and run these commands:**

```bash
# Navigate to your portfolio folder
cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio

# Add all files
git add .

# Commit (save) your files
git commit -m "Initial portfolio commit"

# Connect to your GitHub repository
# REPLACE YOUR_USERNAME with your actual GitHub username!
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**When prompted:**
- Enter your GitHub username
- Enter your GitHub password (or use a Personal Access Token)

**Your code is now on GitHub!** ✅

---

## 🌐 Step 6: Deploy to Vercel

1. Go to: **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. After signing in, click **"Add New..."** → **"Project"**
6. You'll see your repositories - find **"portfolio"**
7. Click **"Import"** next to it
8. Vercel will auto-detect Next.js settings (don't change anything!)
9. Click **"Deploy"**
10. Wait 2-3 minutes...

**You'll see:**
- "Building..."
- "Deploying..."
- "Congratulations! Your project has been deployed."

**Your portfolio is now LIVE!** 🎉

---

## 🔗 Step 7: Get Your Public Link

After deployment, you'll see:

**Your site is live at:**
```
https://portfolio-xxxxx.vercel.app
```

**OR you can set a custom domain:**
- Click on your project in Vercel
- Go to "Settings" → "Domains"
- Add a custom domain (if you have one)

**This link works FOREVER and for EVERYONE!** 🌍

---

## 📱 Step 8: Share with Friends!

Copy your Vercel link and share it:
- Text message
- Email
- LinkedIn
- Resume
- Anywhere!

**Example:**
```
Hey! Check out my portfolio: https://portfolio-abc123.vercel.app
```

---

## 🔄 Step 9: Update Your Site (Future Changes)

Whenever you make changes:

1. Edit your files
2. In Terminal:
   ```bash
   cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio
   git add .
   git commit -m "Updated portfolio"
   git push
   ```
3. Vercel will **automatically** update your site! (takes 1-2 minutes)

---

## 🎯 Quick Checklist

Before deploying, make sure:

- [ ] Updated resume link in `app/page.tsx`
- [ ] Updated LinkedIn link in `app/page.tsx`
- [ ] Updated GitHub project links in `app/page.tsx`
- [ ] Created GitHub account
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Got your public link!

---

## 🆘 Need Help?

**If you get stuck:**

1. **Git push errors:** Make sure you're using the correct GitHub username
2. **Vercel can't find repo:** Make sure repository is Public
3. **Build fails:** Check Terminal for error messages
4. **Link doesn't work:** Wait a few minutes, sometimes takes time to propagate

**Or ask me!** I'm here to help! 😊

---

## 🎉 You're Done!

Once deployed, your portfolio will be:
- ✅ Live on the internet
- ✅ Accessible to everyone
- ✅ Free forever
- ✅ Updates automatically
- ✅ Professional and fast

**Congratulations!** 🚀

