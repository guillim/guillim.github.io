---
layout: default
title:  "MLR for CSV manipulation"
date:   2018-06-19 03:22:48 +0100
categories: terminal
comments: true
---

Your **CSV** is too big to be opened with Excel, or you need to manipulate your CSV in command line ?  
Using **MILLER**, you can format, manipulate, cut, create columns based on other columns... everything you need to master a CSV.

Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Terminal: iTerm2 & Miller 5.3.0`

# 1.  What is Miller (MLR) ?

If you know JQ, Miller is the same tool but for CSV. Just [read this][jqComparison] for the comparison.  

Otherwise, here is a [Miller][miller] description:  
_Miller is like awk, sed, cut, join, and sort for CSV. You get to work with your data using named fields, without needing to count positional column indices._

# 2.  Main purpose of MLR:  

* handle **very large datasets** : to clean and prepare your data
* quick statistics on your data

# 3.  Biggest pros:  

* **streaming**: most operations need only a single record in memory at a time (unlike Excel for instance). You can operate files larger than your RAM !!!
* pipe-friendly: you can combine actions
* conversion
* sort keep header first
* **performance**: written in C, with zero runtime dependencies


# 4.  Get started in 2 min:

* Install Miller  

``` bash
brew update && brew install miller
```  

Now, use your own csv file, or download [this small csv by clicking here][file] and start using miller !

# 5.  Useful commands

``` bash
#see first 2 rows in the terminal:
mlr --csv head -n 2 sample.csv
```  

Note: replace `head` by `tail` to see le last two lines instead

``` bash
#save the first 2 rows in a new file:
mlr --csv head -n 2 sample.csv > sampleOutput.csv  
```  
Note:  `mlr -I --csv head -n 2 sample.csv` will replace the previous file


``` bash
#get a nice view of your 2 first rows:
mlr --icsv  --opprint head -n 2 sample.csv
```  

``` bash
#format the output as 1 json per row:
mlr --icsv  --ojson head -n 2 sample.csv
```  
Note: use `--ojson --jvstack --jlistwrap` to have an array of json



``` bash
#filter:
mlr --icsv  --opprint filter '$day == 1 && $name == "charles"'  sample.csv
```  


``` bash
#Sort primarily alphabetically on NAME, then secondarily numerically descending on month:
mlr --icsv --opprint sort -f name -nr month sample.csv
```  

``` bash
#select only two columns:
mlr --icsv --opprint cut -f name,week sample.csv
```  
Note: Use `-o` to follow your specified order `name,week`
Use `-x` to delete only specified columns

### Combine several command in one line
``` bash
# pipe (chain in a single line) command, using then
mlr --icsv --opprint cut -f name,week then cut -f name sample.csv
```  



### Manipulate columns

Initilly we had:
![global schema](https://ibin.co/45w24357Vh98.png){:class="img-responsive"}  

And using this command line
``` bash
#add/replace columns which are computed from other columns:
mlr --icsv  --opprint  put '$nextyear = $year + 1; $wtfcolumn = $day . "_" . $year . "_" . ($week + $year); $name_upperclass = toupper($name)'   sample.csv
```  

We now have
![global schema](https://ibin.co/45w1j87zG8MM.png){:class="img-responsive"}  




[miller]: https://johnkerl.org/miller/doc/
[jqComparison]:https://www.quora.com/Is-there-a-tool-like-jq-for-CSV-files
[file]: /assets/files/sample.csv
