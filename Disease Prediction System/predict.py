import train
import pickle

loaded_model = pickle.load(open('decision_tree_classifier.pickle', 'rb'))
x = train.sample_x

print (loaded_model.predict_proba(x))