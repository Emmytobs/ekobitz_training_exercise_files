#### These are the answers to all questions in Part 1 of the "04 advanced git commands" exercise

1. What is the difference between git reset and git revert. When would you use one over the other?
> **Git reset will undo a commit or a couple of commits depending on the SHA-1 hash passed to it in the commit history of a file. This operation makes changes to a file's commit history and could make it hard for collaborators to the file to understand the commit history.**
> **Git reset on the other hand will undo a commit by creating a new commit that comprises the changes made by the action of undoing that commit.**

2. What is the difference between git merge and git rebase. When would you use one over the other?
> **Git merge and git rebase are both ways of combining work done in different branches -- the only difference with the two commands is in the way it is done:**
> **Git merge: This will combine work done in two branches by bringing in commits made (after the branch was created) from the subsidiary branch (say, for example, feature) to the main or base branch (say, for example: master). This results in the creation of a new commit on the base branch called a *merge commit***
> **Git rebase: This also combines the work done in two branches but does not create a new commit on the base branch. Instead the *git rebase* command rewinds the HEAD ref on the subsidiary branch (like feature, for example) and moves the branch forward to the tip of the base branch (typically called "master" branch) and, finally, reapplies the commits in the subsidiary branch to the base branch. This leaves no extra commit on the base branch**

3. What is the difference between git stash pop and git stash apply. When would you use one over the other?
> ***Git stash pop* will apply the changes saved on a stash and remove that stash from the stash list; as a result, running the command *git stash list* will show no output (assuming only one stash was created)**
>***Git stash apply* will apply the changes saved on a stash but will not remove the stash from the stash list; as a result, running the command *git stash list* will still show the stash applied**

4. What kinds of things can you do in interactive mode when rebasing?
> **With interactive mode rebasing, you can make some major changes to commits in a file (or project) by using special keywords like:**
>- **pick: which will not make changes to a commit in the commit history, but will go ahead with the commit**
>- **reword: which will change the commit's message but will still go ahead with the commit**
>- **edit: which will apply desired changes to a commit**
>**squash: which can be used to combine a set of consecutive commits (commits immediately following each other in a commit history) to one commit**
>- **fixup: which will remove the commit message while performing the same operation as "squash" defined above**
>- **exec: which will execute the command in a shell**
>- **drop: which will remove the commit from the commit history**