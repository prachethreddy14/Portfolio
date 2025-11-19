# 👶 Baby Steps Guide - Building Your Portfolio

## What is This?

You asked me to build a **Netflix-themed portfolio website** - a website that shows off your projects, internships, and skills. It looks like Netflix (dark theme, scrolling rows) but it's YOUR portfolio!

## What I've Done For You

I created a folder called `portfolio` with all the code needed for your website. Think of it like I gave you a LEGO set - all the pieces are there, you just need to put it together.

## Step-by-Step Instructions

### STEP 1: Install Node.js (The Engine)

**What is Node.js?**
- It's like the engine that runs your website on your computer
- Without it, your website won't work

**How to Install:**

1. Open your web browser (Chrome, Safari, etc.)
2. Go to this website: **https://nodejs.org/**
3. You'll see a big green button that says "Download Node.js (LTS)"
4. Click that button
5. A file will download (something like `node-v20.x.x.pkg`)
6. Double-click the downloaded file
7. Follow the installation wizard (just keep clicking "Next" or "Continue")
8. When it says "Installation Complete", you're done!

**How to Check if It Worked:**
1. Open your Terminal (search for "Terminal" in Spotlight)
2. Type this and press Enter:
   ```bash
   node --version
   ```
3. If you see something like `v20.x.x`, it worked! ✅
4. Type this and press Enter:
   ```bash
   npm --version
   ```
5. If you see numbers like `10.x.x`, that's good too! ✅

---

### STEP 2: Navigate to Your Portfolio Folder

**What is this?**
- You need to tell your computer WHERE your portfolio code is

**How to Do It:**

1. Open Terminal
2. Type this (copy and paste it):
   ```bash
   cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio
   ```
3. Press Enter
4. You should see your prompt change (it might show "portfolio" somewhere)

**What does `cd` mean?**
- It means "change directory" (go to a folder)
- Like double-clicking a folder on your computer

---

### STEP 3: Install Dependencies (Get the Tools)

**What are dependencies?**
- These are like tools your website needs to work
- Like how you need a hammer, nails, and wood to build a table
- Your website needs React, Next.js, Tailwind, etc.

**How to Do It:**

1. Make sure you're in the portfolio folder (from Step 2)
2. Type this:
   ```bash
   npm install
   ```
3. Press Enter
4. Wait... this might take 2-5 minutes
5. You'll see lots of text scrolling by - that's normal!
6. When it stops and shows your prompt again, it's done ✅

**What does `npm install` do?**
- It reads a file called `package.json` (I created this for you)
- It downloads all the tools your website needs
- It puts them in a folder called `node_modules`

---

### STEP 4: Start Your Website

**What is this?**
- This makes your website "come alive" on your computer
- It's like turning on a light switch

**How to Do It:**

1. Make sure you're still in the portfolio folder
2. Type this:
   ```bash
   npm run dev
   ```
3. Press Enter
4. You'll see something like:
   ```
   ▲ Next.js 14.x.x
   - Local:        http://localhost:3000
   ```
5. **Don't close this Terminal window!** (Leave it running)

**What does `npm run dev` do?**
- It starts a "development server"
- This is like a mini-website running on YOUR computer
- Only YOU can see it (it's not on the internet yet)

---

### STEP 5: View Your Website

**How to See It:**

1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. In the address bar (where you type websites), type:
   ```
   http://localhost:3000
   ```
3. Press Enter
4. **BOOM!** 🎉 Your portfolio should appear!

**What is `localhost:3000`?**
- `localhost` = your own computer
- `3000` = a special number (like a door number)
- Together, they mean "the website running on my computer"

**What You Should See:**
- A dark black background (like Netflix)
- "Now Streaming" text in red
- Your name and title
- Rows of project cards
- Your skills section
- Your contact info

---

### STEP 6: Make Changes (Optional)

**Want to Change Something?**

1. Open the file `portfolio/app/page.tsx` in any text editor
2. Find the text you want to change
3. Edit it
4. Save the file
5. Go back to your browser and **refresh the page** (press F5 or Cmd+R)
6. Your changes will appear!

**Common Things to Change:**
- Your email address
- Project descriptions
- Skills list
- Links to your GitHub projects

---

### STEP 7: Stop the Website (When You're Done)

**How to Stop It:**

1. Go back to your Terminal window
2. Press `Ctrl + C` (hold Control, press C)
3. The website will stop running
4. You can close Terminal if you want

**When to Stop:**
- When you're done viewing/testing your website
- Before you close your computer
- You can always start it again with `npm run dev`

---

## Common Problems & Solutions

### Problem: "command not found: node"
**Solution:** Node.js isn't installed. Go back to Step 1.

### Problem: "npm install" takes forever
**Solution:** This is normal! It's downloading lots of files. Just wait.

### Problem: "Port 3000 is already in use"
**Solution:** Something else is using that port. Try:
```bash
npm run dev -- -p 3001
```
Then go to `http://localhost:3001`

### Problem: Website looks broken
**Solution:** 
1. Make sure `npm install` finished successfully
2. Try stopping (Ctrl+C) and starting again (`npm run dev`)
3. Clear your browser cache (Cmd+Shift+R on Mac)

### Problem: Can't find the portfolio folder
**Solution:** 
1. Open Finder
2. Go to: Downloads → JavaFXPainterApp_Bollareddy → portfolio
3. Right-click the portfolio folder
4. Click "New Terminal at Folder"

---

## What's Next? (After You Get It Working)

### 1. Update Your Links
- Edit `app/page.tsx`
- Replace `YOUR_RESUME_LINK_HERE` with your actual resume link
- Replace `YOUR-LINKEDIN-SLUG` with your LinkedIn profile
- Add your GitHub project links

### 2. Deploy to the Internet (Make It Public)

**What is deploying?**
- Right now, only YOU can see your website
- Deploying puts it on the internet so EVERYONE can see it

**How to Deploy (Using Vercel - It's FREE!):**

1. Create a GitHub account (if you don't have one): https://github.com
2. Create a new repository (like a folder on GitHub)
3. Upload your portfolio code to GitHub
4. Go to https://vercel.com
5. Sign up with your GitHub account
6. Click "New Project"
7. Select your portfolio repository
8. Click "Deploy"
9. Wait 2 minutes
10. **DONE!** You'll get a link like `yourname.vercel.app`

---

## Summary (The Super Simple Version)

1. **Install Node.js** → Download from nodejs.org
2. **Open Terminal** → Type `cd` to go to portfolio folder
3. **Install tools** → Type `npm install`
4. **Start website** → Type `npm run dev`
5. **View website** → Open browser, go to `localhost:3000`
6. **Make changes** → Edit files, refresh browser
7. **Deploy** → Push to GitHub, deploy on Vercel

---

## Need Help?

If you get stuck:
1. Read the error message carefully
2. Check which step you're on
3. Make sure you did each step correctly
4. Try googling the error message

**Remember:** Everyone starts somewhere! Even professional developers had to learn these steps. You've got this! 💪

