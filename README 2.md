# BSSRBOT (current)

We want to edit and test in lab, and then merge lab to main!

## Getting started
1. ***git clone*** (ssh link on github): This will pull the repo and automatically put you in main branch
2. ***git pull***: pulls code for main branch
3. ***git switch lab***: connects the existing lab branch
5. ***git pull***: probably not necessary but safe!

Hot Tip: Use ***git checkout <branch>*** to switch between branches!

## How the fuck does it work?
When you make changes and push to github lab, it will automatically deploy to fishy! You can then check fishy to see if its working.
If it is, make a pull request in the GitHub gui into main (lab to main) and once it is merged BSSRBOT will have the changes.

We have set it up so you don't have to worry about Heroku (only for debugging) or facebook for developers! We have a CI/CD (not much CI) pipeline!

## How to push changes
1. ***git add .***
2. ***git commit -m "<message>"***
3. ***git push***