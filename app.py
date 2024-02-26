from flask import Flask,request
import pandas as pd
import pickle

app = Flask(__name__)
app.config['SECRET_KEY']='supersecretspecialkey'

f = open('model/dataframe.pkl','rb')
df = pickle.load(f)
f.close()

fm = open('model/matrix.pkl','rb')
similarity_matrix = pickle.load(fm)
fm.close()

def fetch(movie):
    try:
        index = df[df['Title_Lower']==movie.lower()].index[0]
    except:
        return "Not Available"
    movies = sorted(list(enumerate(similarity_matrix[index])),reverse=True,key=lambda x:x[1])[1:6]
    similar_movies = []
    for movie in movies:
        similar_movies.append(df.iloc[movie[0]])
    return pd.DataFrame(similar_movies).sort_values(by='Popularity',ascending=False).drop(['Title_Lower','Overview_Stemmed'],axis=1).to_json()

@app.route('/api',methods=['POST'])
def api():
    payload = request.get_json()
    result = fetch(payload['title'])
    print(result)
    return result

if __name__=='__main__':
    app.run(debug=1)