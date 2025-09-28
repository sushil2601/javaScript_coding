1. Clone github repo on vsCode

step1 :- 
        .Copy Repository URL

        .Go to the repository on GitHub.

        .Click the green Code button.

        .Copy the URL (choose HTTPS unless you set up SSH).

step2 :- 
        .Open VS Code.

        .Open the Command Palette (Ctrl + Shift + P).

        .Search for “Git: Clone” and select it.


step3 :-
        .Paste Repo URL

        .Paste the copied GitHub repo URL.

        .VS Code will ask for a folder where to save it.

step4 :-
        .Open the Project

        .Once cloned, VS Code will ask:
                .“Do you want to open the cloned repository?” → Click Open.

step5 :-
        .Verify Git Setup

        .Open VS Code terminal (Ctrl + ~) and check:  git remote -v

            .output :-
                        .origin  https://github.com/username/repository.git (fetch)
                        .origin  https://github.com/username/repository.git (push)

step6 :-
        .Pull Latest Changes (Optional)

        .git pull origin main

2. Push code to github

Steps :-
    .Install Git (check git --version)

    .Configure Git (first time only)
        .git config --global user.name "Your Name"
        .git config --global user.email "youremail@example.com"

    .Open Project in VS Code
    .Initialize Git
        .git init
    .Create a Repository on GitHub
    .Add and Commit Code
        .git add .
        .git commit -m "First commit"
    .Push Code to GitHub
        .git branch -M main
        .git remote add origin https://github.com/username/my-project.git
        .git push -u origin main

3. clone code through terminal
    .create project folder and inside project folder clone repository
    .git clone <repository_url>
    .In case of private route we will use token
        ex:- git clone token@https://github.com/sushil2601/javaScript_coding.git


4. Clone Repo using GitHub Desktop App

    Step :-
        .Install GitHub Desktop
            .Install and sign in with your GitHub account.
        .Copy Repository URL
            .Go to the repository on GitHub.
            .Click the green Code button → Copy the HTTPS (or SSH) link.
        .Open GitHub Desktop
            .Click File → Clone Repository.
            .Go to the URL tab.
            .Paste the repository link.
            .Choose the local path (where you want the project to be saved).
        .Clone the Repo
            .Click Clone.
            .GitHub Desktop will download the repository into the folder you selected.
        .Open in VS Code (Optional)
            .After cloning, you can directly open the repo in VS Code:
            .In GitHub Desktop, click Repository → Open in Visual Studio Code.
            .Or manually open the cloned folder in VS Code.


5. How to Raise a Pull Request (PR)
Steps :-

    1. Push Your Branch to GitHub
        .Make sure your new branch is pushed to GitHub.
        .In GitHub Desktop, click Push origin.
        .Or, in Git Bash / VS Code Terminal:
        .git push origin your-branch-name

    2. Go to Your Repository on GitHub Website
        Open github.com
         → navigate to your repo.
        GitHub will usually show a banner like:

        “Your recently pushed branch had recent pushes less than a minute ago. Compare & pull request.”

        Click Compare & pull request.

       If you don’t see that banner:

       Go to the Pull requests tab → Click New pull request.

    Select:

        Base branch → (where you want to merge, usually main)

        Compare branch → (your feature branch)

    3. Fill Out PR Details

        Add a Title (short description of your changes).

        Add a Description (what/why you changed, any screenshots, issue references like Fixes #12).

        Example:

        Title: Add login feature
        Description:
        - Implemented login UI
        - Integrated API
        - Added validation
        Fixes #10

    4. Create the Pull Request

        Click Create Pull Request button.

        Your PR is now raised 🎉

    5. (Optional) Review & Merge

        If you have write access, you can Merge Pull Request after approval.

        Otherwise, the repo maintainer will review and merge.

    ⚡ In short:
        Push branch → 2. Open GitHub → 3. Compare & pull request → 4. Fill details → 5. Create PR.

    .Using VS Code
        Step 1: Install GitHub Pull Requests Extension

            Open VS Code → Go to Extensions (Ctrl + Shift + X).

            Search for GitHub Pull Requests and Issues → Install.

        Step 2: Sign in to GitHub

            After installation, click Sign in to GitHub in VS Code.

            Authenticate using your GitHub account.

        Step 3: Make Sure Your Branch is Pushed
            git push origin your-branch-name

            Your feature branch must exist on GitHub.

        Step 4: Create Pull Request in VS Code

            Open Source Control panel in VS Code.

            Click the … menu → Create Pull Request.

            Fill in:

            Title

            Description

            Base branch (usually main)

            Click Create.

            ✅ The PR is now created on GitHub without opening the browser.
    
    .Using GitHub Desktop
        Step 1: Push Your Branch

            Make sure your branch is pushed.

            Click Push origin in GitHub Desktop.

        Step 2: Raise PR

            After pushing, GitHub Desktop shows a yellow banner:

            “Create Pull Request”

            Click Create Pull Request → it opens a browser window to fill PR details.

        ⚡ Note: GitHub Desktop itself doesn’t fully create PRs in-app, but it takes you straight to the PR page prefilled, so you don’t have to navigate manually.

6. Create branch
        .Create a New Branch
            git branch new-branch-name
        
        .Switch to a Specific Branch
            git checkout branch-name

        .To check your current branch
            git branch  (The branch with * is your current branch.)

        .Create and Switch in One Command
            git checkout -b new-branch-name

        .List All Local Branches
            git branch    (Shows all branches on your local machine.)

        .List All Remote Branches
            git branch -r

        .List Both Local & Remote Branches
            git branch -a

        .Count Local Branches
            (git branch).Count

        .Count Remote Branches
            (git branch -r).Count

        .Count All Branches (Local + Remote)
            (git branch -a).Count

        .Filter Branches and Count (e.g., feature branches)
            (git branch -a | Select-String "feature").Count

7. show last commit of all branches

        .Show Last Commit for All Local Branches
            git branch -v

        .Show Last Commit for Remote Branches
            git branch -r -v

        .Show Last Commit for All Local + Remote Branches
            git branch -a -v

        .Show Detailed Log for All Branches
            .git log --oneline --all --decorate --graph

    .In VS Code → Source Control → Branches → Right-click branch → View History shows similar info visually.

    .GitHub website → Branches tab → Last commit column shows last commit per branch.

8. Merge
    
    .Using Git Bash / Terminal
---------------------------------

        .Switch to the branch you want to merge into
            git checkout main

        .Merge another branch
            git merge feature-branch

        .Resolve Conflicts (if any)
            If there are conflicts, Git will show which files need manual resolution.
            After resolving, commit the merge:

            git add .
            git commit -m "Resolved merge conflicts"

        .Push the merged branch
            git push origin main


    .Using VS Code
    ----------------

        Step 1: Switch branch
            Open Source Control panel → Click Current Branch dropdown → Select the branch you want to merge into (main).

        Step 2: Merge
            Click … menu → Branch → Merge Branch

            Select the branch you want to merge from (feature-branch).

        Step 3: Resolve Conflicts

            Conflicts appear inline in VS Code.

            Accept changes, save files, then commit.

    .Using GitHub (via Pull Request)
---------------------------------------

            Go to GitHub repository → Pull Requests → New Pull Request.

            Set base branch (e.g., main) and compare branch (e.g., feature-branch).

            Click Create Pull Request → Fill title & description → Create Pull Request.

            Click Merge Pull Request → Confirm Merge.

            Optionally, delete the feature branch.


9. rebase :- 


10.cheripick :-  


