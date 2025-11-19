#!/bin/bash

echo "🚀 Portfolio Deployment Helper"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Run: git init"
    exit 1
fi

# Check if user has updated links
echo "⚠️  IMPORTANT: Have you updated your links in app/page.tsx?"
echo "   - Resume link"
echo "   - LinkedIn profile"
echo "   - GitHub project links"
echo ""
read -p "Have you updated the links? (y/n): " updated

if [ "$updated" != "y" ] && [ "$updated" != "Y" ]; then
    echo ""
    echo "Please update your links in app/page.tsx first!"
    echo "Then run this script again."
    exit 1
fi

echo ""
echo "📦 Step 1: Adding files to git..."
git add .

echo ""
echo "💾 Step 2: Committing changes..."
git commit -m "Initial portfolio commit" || git commit -m "Update portfolio"

echo ""
echo "✅ Files committed!"
echo ""
echo "📤 Step 3: Push to GitHub"
echo ""
echo "Now you need to:"
echo "1. Create a repository on GitHub (if you haven't)"
echo "2. Run these commands (replace YOUR_USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Then go to https://vercel.com to deploy!"
echo ""
echo "📖 See PERMANENT_DEPLOY_STEPS.md for detailed instructions"

