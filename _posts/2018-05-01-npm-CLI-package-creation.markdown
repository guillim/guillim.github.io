---
layout: default
title:  "npm CLI package creation"
date:   2018-05-01 03:22:48 +0100
categories: npm
---

Feeling inspired to create a NodeJS command-line script to solve a specific issue? Do you want to ship your command-line as an installable package?

You already wrote a nodeJS command-line scripts, and you want to make it a **npm package** ? Here is how to do it. You can also read a more complete explanation [here][tuto]

# Create a package

_Create an empty directory first, then the package_

```bash
mkdir directoryName
npm init
```

A few questions will be prompted, for the **package.json** creation (like name, version ...).   
Please choose **index.js** for the _entry point_ so that the rest of this tutorial works fine.

![package.json](https://ibin.co/40MxxpJBR6AD.png){:class="img-responsive"}  


# NodeJS command-line script

Create a NodeJS script called **index.js** that does what you want, and add this at the top: `#!/usr/bin/env node`

For instance, a script that echoes the first argument passed to you command line:  
![package.json](https://ibin.co/40My2p1qGvCT.png){:class="img-responsive"}  

# Give a CLI name

At the end of your package.json, add the "bin" after the `"license": "ISC"`  (don't forget to add a `,` after `"ISC"`):  
![package.json](https://ibin.co/40N2UCMOqptD){:class="img-responsive"}  

# Test it locally

```bash
chmod +x index.js           # Make the file executable
npm link
```

Then type
```bash
myCommand hello
```
And it should return `hello`

# What now ?

1. Remove the global link using `npm unlink`:
this will keep your environment clean

2. Publish your package on _https://www.npmjs.com_ if your script may be useful for others! Note that once published, you don't have to do
```bash
chmod +x index.js
npm link
```
anylonger since it is part of the npm install !

# Reference:
* [deeper tuto][tuto]
* [more about `#!/usr/bin/env node`][shebang]

[tuto]: https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
[shebang]: https://en.wikipedia.org/wiki/Shebang_%28Unix%29
