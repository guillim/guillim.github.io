---
layout: default
title:  "Pandas: if else on columns"
date:   2018-10-22 19:22:48 +0100
categories: pandas
comments: true
---

## Why ?

I have a pandas dataframe, with a lot of rows. I want to **create a new column based on the other columns**.

Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Pandas: 0.23.3`  
`Python: 3.0`

## Create the dataframe

We want simple **1 column** dataframe with **1 million rows**.

```Python
import pandas as pd, numpy as np
df = pd.DataFrame(np.random.randint(low=0, high=10, size=(1000000)), columns=['column_1'])
```

# The BAD way

If you develop, you will intuitively use a **row by row** pattern, like this:

```Python
new_results = {}

for index, row in df.iterrows():
    row["column_2"] = 'high' if row["column_1"] > 5 else 'low' if row["column_1"] > 0 else 'null'
    new_results[index] = dict(row)

df = pd.DataFrame.from_dict(new_results, orient='index')
```

it works. but...

### It's so SLOW

The big drawback from this way of doing is the time it takes to execute the loop. Going through every single row takes a long time, simply because there's a lot of rows. This solution is fine for smaller dataframes, but not here.

# The GOOD way

```Python
conditions = [
    (df['column_1'] > 5),
    (df['column_1'] <= 5) & (df['column_1'] > 0),
    (df['column_1'] == 0)]
choices = ['high','low','null']

df['column_2'] = np.select(conditions, choices, default='null')
```

Because Pandas is a vector library, the column computation is 100 times faster !

# Ressources

Original answer from  [stackoverflow][https://stackoverflow.com/questions/19913659/pandas-conditional-creation-of-a-series-dataframe-column]

Create a [dataframe][https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html]

Dig into [Pandas][https://pandas.pydata.org/pandas-docs/stable/cookbook.html]
