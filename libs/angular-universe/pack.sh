rm -rf dist

NGC="node_modules/.bin/ngc"
ROLLUP="node_modules/.bin/rollup"

#$NGC -p tsconfig-build.json
#$ROLLUP dist/angular-universe.js --output.format es -o build/angular-universe.js

#xcopy dist build /r/d/i/s/y/exclude:excludedfileslist.txt 
npm run package 
#cp package.json dist/package.json
#cp package.json build/package.json




cd dist 
npm pack 

rm -rf "C:/npm/universe/"
mkdir  C:/npm/universe/
cp angular-universe-0.0.6.tgz C:/npm/universe/angular-universe-0.0.6.tgz

cd  D:/Developer/Projects/GIT/mydemo/

npm uninstall angular-universe --save
npm install C:/npm/universe/angular-universe-0.0.6.tgz --save
npm run start