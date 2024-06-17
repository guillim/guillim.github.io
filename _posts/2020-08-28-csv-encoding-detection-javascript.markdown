---
layout: default
title: "CSV encoding detection in javascript"
date: 2020-08-28 03:22:48 +0100
categories: javascript
comments: true
thumbnail: /assets/img/csv_encoding1.png
---

On your frontend, you let users upload a **CSV**. For some reason, they use different **encoding** than the classic **UTF-8**. Most of the time because they save their CSV using Microsoft Excel, which encodes using **ISO-8859-1** or **windows-1252**. Here, I show what I came up with, with a list of useful references for the diggers.

# The problem

Shit. My users tell me they encounter some weird error when uploading their CSV files on my webapp. The word **Nestlé** gets transformed into **Nestl�** and it's the same for every "weird" letters... Understand weird as non-native english : it's a classic issue of encoding. Many blog will tell you how to convert encodings, using [iconv-lite](https://www.npmjs.com/package/iconv-lite), but few will explain how to auto-detect the encoding, and then convert it, and all happening in the frontend.

# How hard it is to find a solution

When I started searching for answers, none of them was satisfying for my case, and that's the reason I wrote this blogpost. bash and python have some solution, but they are backend languages. Here is a list of Search terms I had to type on google, to make my way through this nightmare :

```
jschardet alternative
detect encoding from arraybuffer
File detect encoding js
File detect encoding csv
File detect encoding
jquery upload csv
jquery how detect encoding csv
jquery csv encoding detect on select
upload csv encoding
how tell encoding from file js
jquery get encoding csv
papaparse encoding
js jquery detect file type encoding character
js jquery detect file type encoding
js jquery detect file type
detect-character-encoding npm
detect encoding of string js
determine csv encoding js
determine csv type js
determine file type js
file type equivalent js
```

I will now go straight to the point.

# The solution

The HTML code for uploading CSV looks like that :

```HTML
<div>
  <h3>
      Upload your CSV
  </h3>
  <div>
    <input type="file" name="" value="">
    <button type="button" name="button">Submit</button>
  </div>
</div>
```

which renders (depending on your CSS):  
![before upload](/assets/img/csv_encoding1.png)

## Step 1. Detect the encoding when we click _Choose file_

This detection has two important stages :

#### Opening the file

Using FileReader, we must use the `readAsBinaryString()` function, otherwise the default `readAsText()` parsing will ruin the detection.

#### Detecting the encoding

We will use the library [jschardet](https://www.npmjs.com/package/jschardet) (the js version of [Chardet: The Universal Character Encoding Detector](https://github.com/chardet/chardet)) to detect the encoding.

#### How to implement it :

We use jQuery for listening to events on the imput element.

```js
var jschardet = require("jschardet");

$("input[type=file]").on("change", function () {
  var file = $(this)[0].files[0];
  reader = new FileReader();
  reader.onload = function (e) {
    let csvResult = e.target.result.split(/\r|\n|\r\n/);
    $(this).attr("encoding", jschardet.detect(csvResult.toString()).encoding);
  };
  reader.readAsBinaryString(file);
});
```

We will use a trick to remember the encoding using jquery : we add an attribute called _"encoding"_ to the input element, and we set its value to the encoding revealed by jschardet.

At this stage, if we inspect the element, we will see the encoding in the HTML code.  
![before upload](/assets/img/csv_encoding2.png)

```HTML
<div>
  <h3>
      Upload your CSV
  </h3>
  <div>
    <input type="file" name="" value="" encoding="ISO-8859-1">
    <button type="button" name="button">Submit</button>
  </div>
</div>
```

## 2. Parse with the proper encoding when submitting the file

When submitting the file, we can parse the CSV properly since we have the encoding. We will use the library [PapaParse](https://www.papaparse.com/), a reference for this task. But you can use any other tool, that allow you to define the encoding.

```js
$("button").on("submit", function () {
  const encoding = $("input[type=file]").attr("encoding");
  $("input[type=file]").parse({
    config: {
      encoding: encoding,
      complete: function (list, file) {
        // do what you want here
        console.log("finished this file", file);
      },
    },
  });
});
```

# Reference

Manual for FileReader : [Mozilla.org](https://developer.mozilla.org/fr/docs/Web/API/FileReader)  
the _file_ command in bash to know the encoding : [file](http://manpages.ubuntu.com/manpages/xenial/man1/file.1.html)  
library PapaParse : [papaparse](https://www.papaparse.com/docs#local-files)  
intersting stackoverflow : [How do I convert special UTF-8 chars to their iso-8859-1 equivalent using javascript?](https://stackoverflow.com/questions/5396560/how-do-i-convert-special-utf-8-chars-to-their-iso-8859-1-equivalent-using-javasc)  
CSV & Excel: escape from the encoding hell in NodeJS : [theodo blog](https://blog.theodo.com/2017/04/csv-excel-escape-from-the-encoding-hell-in-nodejs/)
