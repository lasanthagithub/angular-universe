rm -rf dist
rm -rf build

NGC="node_modules/.bin/ngc"
ROLLUP="node_modules/.bin/rollup"

$NGC -p tsconfig-build.json
#$ROLLUP dist/angular-universe.js --output.format es -o build/angular-universe.js

#xcopy dist build /r/d/i/s/y/exclude:excludedfileslist.txt 

cp package.json dist/package.json
#cp package.json build/package.json

# cd dist 
# npm pack 

# rm -rf "D:/Developer/Projects/GIT/mydemo/npm"
# mkdir  D:/Developer/Projects/GIT/mydemo/npm
# cp angular-universe-0.0.4.tgz D:/Developer/Projects/GIT/mydemo/npm/angular-universe-0.0.4.tgz

# cd  D:/Developer/Projects/GIT/mydemo/
#  npm uninstall angular-universe --save
#  npm install ./npm/angular-universe-0.0.4.tgz --save
#  npm run start