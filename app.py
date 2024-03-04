from flask import Flask,request,render_template
from wtforms import StringField,SubmitField
from flask_wtf import FlaskForm
import requests
from model.matrix import *

app = Flask(__name__)
app.config['SECRET_KEY']='supersecretspecialkey'

class MovieForm(FlaskForm):
    title = StringField("Enter movie: ")
    submit = SubmitField("Recommend")

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
        form.title.data=""
        return render_template('home.html',movies=movies,form=form)
    return render_template('home.html',form=form)

if __name__=='__main__':
    app.run(debug=1)