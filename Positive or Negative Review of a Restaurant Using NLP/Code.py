

#IMPORTING THE LIBRARIES
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd



#IMPORTING THE DATASET
dataset = pd.read_csv('Restaurant_Reviews.tsv', delimiter = '\t', quoting = 3)



#CLEANING THE TEXTS 
import re
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
corpus = []
for i in range(0, 1000):
  #review to remove all punctuations
  review =  re.sub('[^a-zA-Z]', ' ', dataset['Review'][i])
  # to convert the letters into lower case as required for stemming
  review = review.lower()
  #to split each word in the review col as required for stemming
  review = review.split()              
  #To apply stemming
  ps = PorterStemmer()
  #in order to consider 'not'
  all_stopwords = stopwords.words('english')
  all_stopwords.remove('not')
  review = [ps.stem(word) for word in review if not word in set(all_stopwords)]
  review = ' '.join(review)
  corpus.append(review)
  
print(corpus)

# Creating the Bag of Words model

from sklearn.feature_extraction.text import CountVectorizer
#there are a lot of word that do not have relevance therefore the most appeared words in the Review dataset are considered 
cv = CountVectorizer(max_features=1500)
#matrix of features has to be in array
X = cv.fit_transform(corpus).toarray()
y = dataset.iloc[:, -1].values

len(X[0])


#Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20, random_state = 0)


#Training the Naive Bayes model on the Training set(can be done on any model)
from sklearn.naive_bayes import GaussianNB
classifier = GaussianNB()
classifier.fit(X_train, y_train)


#Predicting the Test set results
y_pred = classifier.predict(X_test)
print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.reshape(len(y_test),1)),1))


#Making the Confusion Matrix
from sklearn.metrics import confusion_matrix, accuracy_score
cm = confusion_matrix(y_test, y_pred)
print(cm)
accuracy_score(y_test, y_pred)