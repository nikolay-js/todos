set -e

npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:nikolay-js/todos.git master:gh-pages

cd -