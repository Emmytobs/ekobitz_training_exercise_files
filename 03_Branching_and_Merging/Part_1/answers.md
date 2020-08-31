1. The **git clean** command removes untracked or unmerged files away from the working directory. It is the equivalent of the **git checkout** command.

2. What do the -d and -f flags for**git clean** do?
- The -d flag also removes untracked folders as well as untracked files from the working directory.
- The -f flag allows untracked folders in a different git repository to be removed from the working directory.

3. The **git checkout** command creates a branch. Using **-b** flag on the command creates the branch and moves you into the branch simultaneously.

4. 
    - Recursive merge:
        This happens when the master branch has had new commits from when a new branch was made to when that branch was merged.
    - Fast-forward merge:
        This is very common. It happens when the master branch has no new commits from when a new branch was made to when that branch was merged

5. The **git checkout NAME_OF_BRANCH** command moves you into another branch. Note: The NAME_OF_BRANCH is a placeholder for your branch you want to move into.

6. The **git diff** command allows you to see the difference between your different commits.


7. To remove files from the staging area, you need to use the **git rm --cached .** command. Alternatively, you can use the **git reset --mixed HEAD .** command.

8. Merge conflicts happen when a branch is merged to another branch and there are conflicted lines of code existing in one or more files in each branch.