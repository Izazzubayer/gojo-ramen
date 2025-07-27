# 🚀 Quick Git Commands for Gojo Ramen Website

## Automatic Updates (Recommended)

### Option 1: Auto-watch for changes
```bash
./auto-git.sh
```
- **What it does**: Automatically watches for file changes and commits/pushes them
- **How to use**: Run this script and leave it running while you work
- **Stop watching**: Press `Ctrl+C`

### Option 2: Manual update when needed
```bash
./update-git.sh
```
- **What it does**: Commits and pushes all current changes
- **How to use**: Run this whenever you want to save your changes

## Manual Git Commands

### Check status
```bash
git status
```

### Add all changes
```bash
git add .
```

### Commit changes
```bash
git commit -m "Your commit message here"
```

### Push to GitHub
```bash
git push origin main
```

### All-in-one command
```bash
git add . && git commit -m "Update: $(date)" && git push origin main
```

## Your Website URLs

- **GitHub Repository**: https://github.com/Izazzubayer/gojo-ramen
- **Live Website**: https://izazzubayer.github.io/gojo-ramen

## Quick Tips

1. **Always run `./update-git.sh` after making changes**
2. **Your website updates automatically on GitHub Pages**
3. **Changes take 1-2 minutes to appear live**
4. **Check the live URL to see your updates**

## Troubleshooting

### If scripts don't work:
```bash
chmod +x auto-git.sh
chmod +x update-git.sh
```

### If you get permission errors:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

**Happy coding! 🍜✨** 