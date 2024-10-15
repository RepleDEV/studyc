# studyc
My study notes [published](https://repledev.github.io/studyc/).
# Building
```bash
npm run clean # Optional (cleans up files if an error happens or whatever)
npm run build

# Committing
git add public/ -f 
git commit -m "(message)"
git subtree split --prefix=public/ -b (branch)
git push origin (brach)
```