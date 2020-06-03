import os
import csv
import pandas as pd
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.model_selection import cross_validate
from sklearn.model_selection import cross_val_score
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
import numpy as np
import pickle
from sklearn.tree import DecisionTreeClassifier, export_graphviz

data = pd.read_csv("Training.csv")
data.head()
data.columns
len(data.columns)
len(data['prognosis'].unique())
df = pd.DataFrame(data)
df.head()
cols = df.columns
cols = cols[:-1]
cols
len(cols)
x = df[cols]
y = df['prognosis']

with open('Training.csv') as f:
    reader = csv.reader(f)
    i = next(reader)
    rest = [row for row in reader]
column_headings = i
for ix in i:
    ix = ix.replace('_',' ')
 
test_data = pd.read_csv("Testing.csv")
test_data.head()
testx = test_data[cols]
testy = test_data['prognosis']

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)
dt = DecisionTreeClassifier()
clf_dt=dt.fit(x_train,y_train)
print ("Acurracy: ", clf_dt.score(x_test,y_test))

scores =cross_val_score(dt, x_test, y_test, cv=3)

print ("Acurracy on the actual test data: ", clf_dt.score(testx,testy))


importances = dt.feature_importances_
indices = np.argsort(importances)[::-1]

features = cols


feature_dict = {}
for i,f in enumerate(features):
    feature_dict[f] = i

sample_x = [i/79 if i==79 else i*0 for i in range(len(features))]
len(sample_x)
sample_x = np.array(sample_x).reshape(1,len(sample_x))



decision_tree_pkl_filename = 'decision_tree_classifier.pickle'

decision_tree_model_pkl = open(decision_tree_pkl_filename, 'wb')
pickle.dump(dt, decision_tree_model_pkl)

decision_tree_model_pkl.close()