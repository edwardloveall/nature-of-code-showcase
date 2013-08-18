rm -rf ./build/
middleman build
rm -rf ./build/stylesheets/bourbon/
mv build /tmp/build
git checkout gh-pages
mv /tmp/build/* ./
git add .
git commit -m "Updated gh-pages"
git push origin gh-pages
git checkout master