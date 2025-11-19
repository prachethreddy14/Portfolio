# 📄 How to Get a Resume Link (3 Easy Methods)

Your resume is on your Desktop. To use it in your portfolio, you need to put it online and get a link.

---

## 🎯 Method 1: Google Drive (Easiest & Recommended)

### Step 1: Upload to Google Drive

1. **Go to:** https://drive.google.com
2. **Sign in** with your Google account (or create one - it's free!)
3. **Click the "+ New" button** (top left)
4. **Click "File upload"**
5. **Find your resume** on your Desktop
6. **Click "Open"** - it will upload

### Step 2: Get the Shareable Link

1. **Right-click** on your uploaded resume file
2. **Click "Share"**
3. **Click "Change"** next to "Restricted"
4. **Select "Anyone with the link"**
5. **Click "Copy link"**
6. **Paste it somewhere** (like Notes app) to save it

### Step 3: Convert to Direct Download Link

The link you copied looks like:
```
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```

**Change it to:**
```
https://drive.google.com/uc?export=download&id=FILE_ID
```

**How to get FILE_ID:**
- The FILE_ID is the long string between `/d/` and `/view`
- Example: If link is `https://drive.google.com/file/d/ABC123XYZ/view`
- FILE_ID is `ABC123XYZ`
- New link: `https://drive.google.com/uc?export=download&id=ABC123XYZ`

**OR use this easier method:**
1. Right-click your file in Google Drive
2. Click "Get link"
3. Make sure it's set to "Anyone with the link"
4. Copy the link
5. Replace `/view?usp=sharing` with `/uc?export=download&id=FILE_ID`
   - Keep the FILE_ID part (the long string)

**✅ You now have a direct download link!**

---

## 🎯 Method 2: Dropbox (Alternative)

### Step 1: Upload to Dropbox

1. **Go to:** https://www.dropbox.com
2. **Sign in** (or create account - free!)
3. **Click "Upload"** button
4. **Select your resume** from Desktop
5. **Wait for upload**

### Step 2: Get Shareable Link

1. **Right-click** your resume file
2. **Click "Share"** → **"Create a link"**
3. **Click "Copy link"**
4. **The link looks like:** `https://www.dropbox.com/s/xxxxx/resume.pdf?dl=0`

### Step 3: Make it Direct Download

**Change the link:**
- Replace `?dl=0` with `?dl=1`
- Example: `https://www.dropbox.com/s/xxxxx/resume.pdf?dl=1`

**✅ You now have a direct download link!**

---

## 🎯 Method 3: GitHub (If You Have GitHub)

### Step 1: Create a Repository

1. **Go to:** https://github.com
2. **Create a new repository** called "resume" (or anything)
3. **Make it Public**

### Step 2: Upload Resume

1. **Click "uploading an existing file"**
2. **Drag your resume** from Desktop
3. **Click "Commit changes"**

### Step 3: Get the Link

1. **Click on your resume file**
2. **Click "Download"** button (top right)
3. **Right-click the download button** → **"Copy link address"**
4. **The link looks like:** `https://github.com/username/resume/raw/main/resume.pdf`

**✅ You now have a direct download link!**

---

## 📝 How to Add It to page.tsx

### Step 1: Open page.tsx

1. **Open Finder**
2. **Go to:** Downloads → JavaFXPainterApp_Bollareddy → portfolio → app
3. **Double-click `page.tsx`**

### Step 2: Find the Resume Link

1. **Press `Cmd + F`** (to search)
2. **Type:** `YOUR_RESUME_LINK_HERE`
3. **Press Enter** - it will find the line

### Step 3: Replace It

**Find this line (around line 175):**
```tsx
href="YOUR_RESUME_LINK_HERE"
```

**Replace with your actual link:**
```tsx
href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
```

**Example:**
```tsx
href="https://drive.google.com/uc?export=download&id=1ABC123XYZ789"
```

### Step 4: Save

- **Press `Cmd + S`** to save
- **Or:** File → Save

**✅ Done!**

---

## 🎯 Quick Summary

1. **Upload resume** to Google Drive (easiest!)
2. **Get shareable link**
3. **Convert to direct download link** (change `/view` to `/uc?export=download&id=FILE_ID`)
4. **Copy the link**
5. **Paste it in page.tsx** (replace `YOUR_RESUME_LINK_HERE`)
6. **Save the file**

---

## 💡 Pro Tips

- **Name your file clearly:** `Pracheth_Bacholla_Resume.pdf`
- **Use PDF format** (not Word doc)
- **Test the link** - open it in a new browser tab to make sure it downloads
- **Keep the link** - save it somewhere so you don't lose it!

---

## 🆘 Troubleshooting

### Problem: Link opens in Google Drive instead of downloading
**Solution:** Make sure you converted it to the direct download format (with `/uc?export=download&id=`)

### Problem: "Access denied" when clicking link
**Solution:** Make sure your file is set to "Anyone with the link can view"

### Problem: File is too large
**Solution:** 
- Compress the PDF
- Or use Dropbox instead

### Problem: Can't find FILE_ID
**Solution:** 
- The FILE_ID is the long random string in the URL
- It's between `/d/` and `/view` in Google Drive links
- Example: `https://drive.google.com/file/d/ABC123XYZ/view`
- FILE_ID = `ABC123XYZ`

---

## ✅ Checklist

- [ ] Resume uploaded to Google Drive/Dropbox/GitHub
- [ ] File is set to "Anyone with the link"
- [ ] Got the shareable link
- [ ] Converted to direct download link
- [ ] Tested the link (opens in new tab and downloads)
- [ ] Added link to page.tsx
- [ ] Saved page.tsx

---

**Need help? Just ask!** 😊

