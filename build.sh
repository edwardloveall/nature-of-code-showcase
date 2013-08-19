rm -rf /tmp/build/
middleman build
rm -rf ./build/stylesheets/bourbon/
mv build /tmp/build
git checkout gh-pages
rm -rf ./*
mv -f /tmp/build/* ./
git add .
git commit -m "Updating gh-pages"
git push origin gh-pages
git checkout master