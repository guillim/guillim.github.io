---
layout: blog
title: "Datascience with python : useful function"
date: 2019-11-11 19:22:48 +0100
categories: python
comments: true
thumbnail: /assets/img/thumbnails/1.jpg
---

This is a short summary of the most common funciton when starting to analyse a dataset with **python and pandas**. This is a very datascientist function summary. This summary was created following the [kaggle](https://www.kaggle.com/rtatman/data-cleaning-challenge-handling-missing-values)

# 1. Requirements

For Datascience using python, we need 2 basic libraries : numpy and pandas

```python
import pandas as pd
import numpy as np
```

# 2. Look at your data

#### Load your dataset

```python
my_data = pd.read_csv("../my_dataset.csv")
```

#### Look at random rows

```python
# set "seed" first. Allows to reproduce the same random numbers
# This way, running `df.sample(10)` over and over you will get the same sequence
np.random.seed(0)

my_data.sample(2)
```

If you prefer, you can also work on a subset of your data, for instance the 8 first columns

```python
subset_my_data = my_data.loc[:, 'column1':'column8'].head()
```

# 3. Missing data points

There is always missing values. How many in each column ?

```python
missing_values_count = my_data.isnull().sum()
missing_values_count[0:10]

# or in percentage
total_cells = np.product(my_data.shape)
total_missing = missing_values_count.sum()
(total_missing/total_cells) * 100
```

# 4. Think or Drop

Here you have 2 options.

1. no time : drop it
2. think why the data is missing => wasn't recorded or doesn't exist?

##### 1. **DROP** null values

```python
# No time to investigate, so we drop every row where one data is missing
my_data.dropna()
```

If we end up with nothing, it may be smarter to remove the "almost empty" columns first

```python
columns_with_na_dropped = my_data.dropna(axis=1)
```

Note that to know how many columns you cut, you can do

```python
print("Columns before: %d" % my_data.shape[1], " - Columns after: %d" % columns_with_na_dropped.shape[1])
```

##### 2. **THINK** : Fill null values "_imputation_"

```python
# fill with 0
my_data.fillna(0)

# fill with next value in the same column
my_data_partially_filled = my_data.fillna(method = 'bfill', axis=0)
my_data_partially_filled.fillna(0) # fill remaining one with 0
```

# Ressources:

Kaggle original challenge: [notebook](https://www.kaggle.com/rtatman/data-cleaning-challenge-handling-missing-values)  
More on [imputation](https://www.kaggle.com/dansbecker/handling-missing-values)
