# Git Flow Example Workflow

## 1. Start a new branch and switch to it

```sh
git checkout -b feature/some-feature-name
```

## or alternatively

```sh
git branch feature/some-feature-name
git checkout feature/some-feature-name
```

## 2. Follow your usual git workflow within your branch

git add -A
git commit -m "add styles for sidebar"

## ...

## 3. Pushing up your branch

```sh
git push origin feature/some-feature-name
```

## > 4. Create Pull Request on Github, get a team mate to review it

## > 5. Merge to the main branch on Github

## > 6. Delete branch on github after merge. Inform your team mates

## Pulling latest chages on the main branch

## 7. First, switch to the main branch

```sh
git checkout main
```

## 8. Pull latest changes

```sh
git pull origin main
```

## 9. Delete your old feature branch (Github only deletes the remote branch, not the local one)

```sh
git branch -d feature/some-feature-name
```

## Continue from step 1. for new changes!
