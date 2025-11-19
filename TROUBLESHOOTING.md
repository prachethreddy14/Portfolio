# 🔧 Troubleshooting Guide

## Problem: "localhost refused to connect"

### What This Means
The development server isn't running. It's like trying to turn on a TV that isn't plugged in.

### Solution: Start the Server

**Step 1:** Open Terminal

**Step 2:** Navigate to your portfolio folder:
```bash
cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio
```

**Step 3:** Start the server:
```bash
npm run dev
```

**Step 4:** Wait for this message:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
✓ Ready in Xs
```

**Step 5:** Now open your browser and go to `http://localhost:3000`

---

## Common Issues & Fixes

### Issue 1: "command not found: npm"
**Problem:** Node.js isn't installed or not in your PATH
**Fix:** 
1. Install Node.js from https://nodejs.org/
2. Restart Terminal
3. Try again

### Issue 2: "Port 3000 is already in use"
**Problem:** Something else is using port 3000
**Fix:** Use a different port:
```bash
npm run dev -- -p 3001
```
Then go to `http://localhost:3001`

### Issue 3: "Cannot find module"
**Problem:** Dependencies aren't installed
**Fix:** Run this first:
```bash
npm install
```
Then try `npm run dev` again

### Issue 4: Server starts but page is blank/white
**Problem:** Build error or missing files
**Fix:**
1. Stop the server (Ctrl+C)
2. Delete `node_modules` and `.next` folders:
   ```bash
   rm -rf node_modules .next
   ```
3. Reinstall:
   ```bash
   npm install
   npm run dev
   ```

### Issue 5: Changes don't appear
**Problem:** Browser cache
**Fix:** 
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Or clear browser cache

---

## How to Check if Server is Running

**Method 1:** Look at Terminal
- You should see "Ready" message
- Terminal should be showing logs

**Method 2:** Check the port
```bash
lsof -ti:3000
```
If you see a number, the server is running.

**Method 3:** Try accessing it
- Open browser
- Go to `http://localhost:3000`
- If it loads, it's working!

---

## Quick Checklist

Before accessing localhost:3000, make sure:

- [ ] Node.js is installed (`node --version` works)
- [ ] You're in the portfolio folder (`cd portfolio`)
- [ ] Dependencies are installed (`npm install` completed)
- [ ] Server is running (`npm run dev` is running)
- [ ] You see "Ready" message in Terminal
- [ ] You're using the correct URL (`http://localhost:3000`)

---

## Still Not Working?

1. **Stop everything:**
   - Press Ctrl+C in Terminal
   - Close browser

2. **Start fresh:**
   ```bash
   cd /Users/prachethreddybacholla/Downloads/JavaFXPainterApp_Bollareddy/portfolio
   npm install
   npm run dev
   ```

3. **Wait for "Ready" message**

4. **Then open browser to localhost:3000**

If it still doesn't work, share the error message you see!

