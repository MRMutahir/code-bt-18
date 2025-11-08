```bash
git config --global user.name "Your Name"
# Example: git config --global user.name "Mutahir Kareem"

git config --global user.email "you@example.com"
# Example: git config --global user.email "mutahir@example.com"

👉 Ye commands aapke naam aur email ko set karte hain, jo har commit ke sath dikhte hain.


next >>>>
echo "# my-project" >> README.md   # ek README file banayi
git init                           # repo initialize
git add apni file ka name ya . k folder m jitni files hen sab add hojy                  # file stage kari
git commit -m "first commit"       # commit create kiya
git branch -M main                 # branch ka naam 'main' rakha
git remote add origin https://github.com/<ap ka github profile ka username>/<ap ka github repo ka name>.git
git push -u origin main            # GitHub pe push kiya


Example:

git remote add origin https://github.com/MRMutahir/code-batch-18.git
git push -u origin main


.gitignore ka example

node_modules/
.env
dist/
.DS_Store