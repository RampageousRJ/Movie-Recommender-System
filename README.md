# Movie-Recommender-System
Movie Recommender API which makes use of cosine similarity to find movies similar to the one entered employing Flask as backend.

## Run Locally

Clone the project

```bash
  git clone https://github.com/RampageousRJ/Movie-Recommender-System.git
```


Install dependencies and zipped pickle files from [link](http://tinyurl.com/pickledFiles)

```bash
  pip install -r requirements.txt
```

Place the pickle files in model directory and then start the server

```bash
  flask run
```


## API Reference

#### Send a POST request to the local/hosted URL

```
  POST /api
````

Type of input for the API 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | Enter name of the movie|

Processes the movie title and returns result with all the necessary fields in a json format.

