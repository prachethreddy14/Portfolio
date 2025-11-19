# 👶 Baby Steps: Deploy Your Portfolio (Super Simple!)

I'll walk you through EVERY single step. Just follow along! 😊

---

## 🎯 What We're Doing

We're going to put your portfolio on the internet so your friends can see it!

**Think of it like this:**
- Right now: Your portfolio is in your house (localhost)
- After deployment: Your portfolio is in a public park (the internet)
- Everyone can visit the park! 🌍

---

## 📝 STEP 1: Update Your Links (5 minutes)

### What to do:

1. **Open Finder** (the folder icon in your dock)

2. **Navigate to:**
   - Downloads
   - JavaFXPainterApp_Bollareddy
   - portfolio
   - app
   - **Double-click `page.tsx`** (it will open in a text editor)

3. **Find Line 175** (scroll down or use Cmd+F to search for "YOUR_RESUME_LINK_HERE")

4. **Replace this:**
   ```
   href="YOUR_RESUME_LINK_HERE"
   ```
   **With your actual resume link:**
   ```
   href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
   ```
   *(Or wherever your resume is stored)*

5. **Find Line 183** (search for "YOUR-LINKEDIN-SLUG")

6. **Replace this:**
   ```
   https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG
   ```
   **With your actual LinkedIn:**
   ```
   https://www.linkedin.com/in/pracheth-bacholla
   ```
   *(Use your actual LinkedIn username)*

7. **Find the project links** (around lines 11, 21, 29)
   - Look for: `link: "#"`
   - Replace with: `link: "https://github.com/yourusername/project-name"`
   *(If you don't have GitHub projects yet, leave them as "#" for now)*

8. **Save the file:**
   - Press `Cmd + S` (Mac) or `Ctrl + S` (Windows)
   - Or click File → Save

**✅ Done with Step 1!**

---

## 🔵 STEP 2: Create GitHub Account (3 minutes)

### What is GitHub?
- It's like Google Drive, but for code
- It stores your portfolio files online
- It's FREE!

### How to do it:

1. **Open your web browser** (Chrome, Safari, Firefox, etc.)

2. **Go to:** https://github.com

3. **Click the green button** that says "Sign up" (top right)

4. **Fill in the form:**
   - Email address (use your real email)
   - Password (make it strong!)
   - Username (choose something like "prachethbacholla" or "prachethb")
   - Click "Continue"

5. **Verify your email:**
   - GitHub will send you an email
   - Check your inbox
   - Click the verification link

6. **Complete the setup:**
   - Answer a few questions (or skip them)
   - Click "Complete setup"

**✅ You now have a GitHub account!**

**Write down your username somewhere - you'll need it!**

---

## 📦 STEP 3: Create a Repository (2 minutes)

### What is a repository?
- It's like a folder on GitHub
- It holds all your portfolio files

### How to do it:

1. **You should be logged into GitHub** (from Step 2)

2. **Look at the top right corner** - you'll see a **"+"** icon
   - Click it
   - A menu will drop down

3. **Click "New repository"**

4. **Fill in the form:**
   - **Repository name:** Type `portfolio`
   - **Description:** Type "My Netflix-themed portfolio" (optional)
   - **Visibility:** Click the circle next to **"Public"** (important!)
   - **DON'T check any boxes** (no README, no .gitignore, no license)
   - Leave everything else as is

5. **Click the green "Create repository" button** at the bottom

**✅ You now have an empty repository!**

**You'll see a page with instructions - DON'T follow them yet! We'll do it differently.**

---

## 💻 STEP 4: Open Terminal (1 minute)

### What is Terminal?
- It's a way to talk to your computer using text
- Like texting your computer!

### How to do it:

1. **Press `Cmd + Space`** (Mac) to open Spotlight
   - Or click the magnifying glass icon (top right)

2. **Type:** `Terminal`

3. **Press Enter**

4. **A black window will open** - that's Terminal!

**✅ Terminal is open!**

---

## 📂 STEP 5: Go to Your Portfolio Folder (30 seconds)

### In Terminal, type this EXACTLY:

```bash
cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio
```

### Then press Enter

**What does this do?**
- `cd` = "change directory" (go to a folder)
- It's like double-clicking a folder

**You should see your prompt change** (might show "portfolio" somewhere)

**✅ You're now in the portfolio folder!**

---

## 📤 STEP 6: Add Files to Git (30 seconds)

### In Terminal, type:

```bash
git add .
```

### Press Enter

**What does this do?**
- Tells git: "Hey, I want to save these files!"

**You won't see much output** - that's normal!

**✅ Files are ready to be saved!**

---

## 💾 STEP 7: Save (Commit) Your Files (30 seconds)

### In Terminal, type:

```bash
git commit -m "Initial portfolio commit"
```

### Press Enter

**What does this do?**
- Saves your files with a message
- Like saving a document with a note

**You might see some text** - that's normal!

**✅ Files are saved!**

---

## 🔗 STEP 8: Connect to GitHub (1 minute)

### In Terminal, type this (REPLACE YOUR_USERNAME):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username!

**Example:**
- If your username is `prachethbacholla`, type:
  ```bash
  git remote add origin https://github.com/prachethbacholla/portfolio.git
  ```

### Press Enter

**What does this do?**
- Connects your local folder to your GitHub repository
- Like connecting two phones with a cable

**✅ Connected to GitHub!**

---

## 🌿 STEP 9: Set Main Branch (10 seconds)

### In Terminal, type:

```bash
git branch -M main
```

### Press Enter

**What does this do?**
- Sets the main branch name (GitHub uses "main" now)

**✅ Branch is set!**

---

## 🚀 STEP 10: Push to GitHub (1 minute)

### In Terminal, type:

```bash
git push -u origin main
```

### Press Enter

**What will happen:**
1. It will ask for your **GitHub username** - type it and press Enter
2. It will ask for your **GitHub password** - type it and press Enter
   - (Your password won't show as you type - that's normal!)
3. You'll see text scrolling - that's your files uploading!

**If it asks for a "Personal Access Token" instead of password:**
- Go to: https://github.com/settings/tokens
- Click "Generate new token" → "Generate new token (classic)"
- Give it a name like "portfolio"
- Check the "repo" box
- Click "Generate token"
- Copy the token (it's long!)
- Paste it when Terminal asks for password

**✅ Your code is now on GitHub!**

**Go to your GitHub repository page** (refresh it) - you should see all your files!

---

## 🌐 STEP 11: Sign Up for Vercel (2 minutes)

### What is Vercel?
- It's a service that puts your website on the internet
- It's FREE!
- It's super easy!

### How to do it:

1. **Open a new browser tab**

2. **Go to:** https://vercel.com

3. **Click "Sign Up"** (top right)

4. **Click "Continue with GitHub"**
   - This uses your GitHub account (easier!)

5. **Authorize Vercel:**
   - GitHub will ask: "Authorize Vercel?"
   - Click "Authorize Vercel"
   - You might need to enter your GitHub password again

**✅ You're signed up for Vercel!**

---

## 🎬 STEP 12: Deploy Your Portfolio (2 minutes)

### How to do it:

1. **You should be on the Vercel dashboard**

2. **Click "Add New..."** (top right)
   - A menu will appear

3. **Click "Project"**

4. **You'll see a list of your GitHub repositories**
   - Find **"portfolio"** in the list
   - If you don't see it, click "Adjust GitHub App Permissions" and make sure "portfolio" is selected

5. **Click "Import"** next to "portfolio"

6. **You'll see a configuration page:**
   - **Framework Preset:** Should say "Next.js" (auto-detected!)
   - **Root Directory:** Leave as `./`
   - **Build Command:** Leave as is
   - **Output Directory:** Leave as is
   - **Install Command:** Leave as is
   - **DON'T CHANGE ANYTHING!** Vercel knows what to do!

7. **Click the blue "Deploy" button** at the bottom

8. **Wait 2-3 minutes...**
   - You'll see: "Building..."
   - Then: "Deploying..."
   - Then: "Congratulations!"

**✅ Your portfolio is LIVE!** 🎉

---

## 🔗 STEP 13: Get Your Public Link! (30 seconds)

### After deployment:

1. **You'll see a page that says "Congratulations!"**

2. **Look for a link that says:**
   ```
   https://portfolio-xxxxx.vercel.app
   ```
   (The xxxxx will be random letters/numbers)

3. **Click that link** - your portfolio will open!

4. **Copy that link** - that's your public URL!

**✅ You have your public link!**

---

## 📱 STEP 14: Share with Friends! (1 minute)

### Now you can share:

1. **Copy your Vercel link** (from Step 13)

2. **Share it anywhere:**
   - Text message
   - Email
   - LinkedIn
   - Resume
   - Social media
   - Anywhere!

**Example message:**
```
Hey! Check out my portfolio: https://portfolio-abc123.vercel.app
```

**✅ Your friends can now see your portfolio!** 🌍

---

## 🎉 YOU'RE DONE!

Your portfolio is now:
- ✅ Live on the internet
- ✅ Accessible to everyone
- ✅ Free forever
- ✅ Professional and fast

**Congratulations!** 🚀

---

## 🆘 If Something Goes Wrong

### Problem: "command not found: git"
**Solution:** Git isn't installed. But you're on Mac, so it should be there. Try restarting Terminal.

### Problem: "repository not found"
**Solution:** Check that:
- Your GitHub username is correct
- Your repository is named "portfolio"
- Your repository is Public

### Problem: "Permission denied"
**Solution:** You might need a Personal Access Token instead of password (see Step 10)

### Problem: Vercel can't find my repository
**Solution:** 
- Make sure repository is Public
- Click "Adjust GitHub App Permissions" in Vercel
- Make sure "portfolio" is checked

### Problem: Build failed
**Solution:** 
- Check the error message in Vercel
- Make sure all your files are pushed to GitHub
- Try deploying again

**If you get stuck, tell me what step you're on and what error you see!** 😊

---

## 📋 Quick Checklist

- [ ] Updated links in page.tsx
- [ ] Created GitHub account
- [ ] Created repository
- [ ] Opened Terminal
- [ ] Went to portfolio folder
- [ ] Ran `git add .`
- [ ] Ran `git commit`
- [ ] Connected to GitHub
- [ ] Pushed to GitHub
- [ ] Signed up for Vercel
- [ ] Deployed to Vercel
- [ ] Got public link
- [ ] Shared with friends!

---

## 💡 Remember

- Take your time!
- Read each step carefully
- Don't skip steps
- If confused, re-read the step
- Ask for help if needed!

**You've got this!** 💪

