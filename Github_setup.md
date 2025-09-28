<!-- Clone github repo on vsCode -->

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

<!-- Push code to github -->

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


