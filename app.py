from flask import Flask,request,render_template,url_for
from wtforms import StringField,SubmitField
from flask_wtf import FlaskForm
import pandas as pd
import pickle
import requests

app = Flask(__name__)
app.config['SECRET_KEY']='supersecretspecialkey'

f = open('model/dataframe.pkl','rb')
df = pickle.load(f)
f.close()

fm = open('model/matrix.pkl','rb')
similarity_matrix = pickle.load(fm)
fm.close()

class MovieForm(FlaskForm):
    title = StringField("Enter movie: ")
    submit = SubmitField("Recommend")

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

@app.route('/api',methods=['POST'])
def api():
    payload = request.get_json()
    result = fetch(payload['title'])
    return result

@app.route('/',methods=['GET','POST'])
def home():
    movies = []
    form = MovieForm()
    if request.method == 'POST':
        data = {'title':form.title.data}
        response = requests.post("http://127.0.0.1:5000/api",json=data).json()
        for row in response:
            movies.append(response[row])
        return render_template('home.html',movies=movies,form=form)
    return render_template('home.html',form=form)

if __name__=='__main__':
    app.run(debug=1)