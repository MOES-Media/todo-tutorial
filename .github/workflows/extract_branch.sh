BRANCH="##[set-output name=branch;]$(echo ${GITHUB_REF#refs/heads/})"
echo "${{BRANCH}}"
STR="${BRANCH//feature\//}"
echo "${{STR}"