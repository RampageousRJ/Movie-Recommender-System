import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import pickle

f = open('model/dataframe.pkl','rb')
df = pickle.load(f)
f.close()

vectorizer = TfidfVectorizer(stop_words=stopwords.words('english'),max_features=10000)
numeric_overview = vectorizer.fit_transform(df['Overview_Stemmed']).toarray()
similarity_matrix = cosine_similarity(numeric_overview)

def fetch(movie):
    try:
        index = df[df['Title_Lower']==movie.lower()].index[0]
    except:
        return "Not Available"
    movies = sorted(list(enumerate(similarity_matrix[index])),reverse=True,key=lambda x:x[1])[1:7]
    similar_movies = []
    for movie in movies:
        similar_movies.append(df.iloc[movie[0]])
    return pd.DataFrame(similar_movies).sort_values(by='Popularity',ascending=False).drop(['Title_Lower','Overview_Stemmed'],axis=1).T.to_json()
    
print(fetch('the one'))