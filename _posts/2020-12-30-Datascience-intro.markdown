---
layout: default
title: "Datascience intro"
date: 2019-12-30 19:22:48 +0100
categories: python
comments: true
thumbnail: /assets/img/thumbnails/4.jpg
---

This is a simple copy of the exellent tutorial by [Blent.ai](https://blent.ai/) "initiation au machine learning" (all credit to them). You can download the jupyther notebook [here](/assets/files/datascience/intro_abnk_churn.ipynb). You can run it on google collab, or any juyter notebook environment.

# Intro

We are given a dataset of bank clients. Our mission is to investigate the churn rate. To go in detail of this mission, download the [ipynb](/assets/files/datascience/intro_abnk_churn.ipynb) or check out the pdf bellow (it's basically the notebook already executed)

Following, I will sum up the most crucial part.

# Part 1: Data preparation

### Load your CSV

```py
data = pd.read_csv('dataset.csv')
data.head()
```

### Avoid casing in column names

```py
clean_column_name = []
columns = data.columns
for i in range(len(columns)):
    clean_column_name.append(columns[i].lower())
data.columns = clean_column_name

```

### Remove unecessary columns

```py
data = data.drop(["rownumber", "customerid", "surname"], axis=1)
print(data.shape)
data.head()

```

### Make sure no data is missing

```py
np.sum(data.isna())

```

if data is missing, please refer to our previous "Datascience" tutorial from november 2019.

### Cleaning

```py
cleaned_data = data.copy()
cleaned_data = cleaned_data[~((cleaned_data['exited'] == 1) & (cleaned_data['numofproducts'] == 4))]
cleaned_data.shape

```

### Variable quali to quanti

```py
X = cleaned_data.iloc[:, :-1].copy()
y = cleaned_data['exited']
X.head()

```

- Binary (easy)

```py
X['gender'] = data['gender'].apply(lambda x: 1 if x == "Female" else 0)
X.head()
```

- Multi possibilites

```py
X = X.join(pd.get_dummies(data['geography']))
del X['geography']
X.head()
```

# Part 2: Data Visualization

### for 1 variable

```py
sns.distplot(data['balance'])
```

### for 2 variables

```py

sns.distplot(data.loc[data['exited'] == 1, 'age'], label="Churn")
sns.distplot(data.loc[data['exited'] == 0, 'age'], label="Non churn")
plt.legend()

```

### Box plots

```py
sns.boxplot(x='numofproducts', y='age', data=data)

```

### Pie

```py
data['exited'].value_counts().plot.pie(autopct=lambda x: '{:2.1f}%'.format(x), explode=[0, 0.1])


```

# Part 3: Machine Learning

For this example, we choose the _DecisionTreeClassifier_ model.

```py
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

tree = DecisionTreeClassifier(max_depth=6)
tree.fit(X_train, y_train)
# fit is doing the training.
```

### Model Visualization

```py
from sklearn.metrics import accuracy_score

print("Train :", accuracy_score(y_train, tree.predict(X_train)))
print("Test :", accuracy_score(y_test, tree.predict(X_test)))

features_imp = pd.DataFrame(
    data=np.asarray([X.columns, tree.feature_importances_]).transpose(),
    columns=['Variable', 'Importance'])
features_imp

features_imp.set_index("Variable").sort_values(by="Importance").plot.barh(figsize=(14, 9))
for item in ([plt.gca().title, plt.gca().xaxis.label, plt.gca().yaxis.label] +
             plt.gca().get_xticklabels() + plt.gca().get_yticklabels()):
    item.set_fontsize(13)
```

# Results

<object data="/assets/files/datascience/intro_abnk_churn.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="/assets/files/datascience/intro_abnk_churn.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/files/datascience/intro_abnk_churn.pdf">Download PDF</a>.</p>
    </embed>
</object>

# Ressources:

Download the [ipynb](/assets/files/datascience/intro_abnk_churn.ipynb)
