# Movie-Recommender-System
Movie Recommender API which makes use of cosine similarity to find movies similar to the one entered employing Flask as backend.

## Working
To use the API, download the pickle file and run the python script to generate a localhost and then send a POST request to the given /api route with a title field. This would return a json response with all necessary fields.

## Pickle Files
[Pickle Files](http://tinyurl.com/pickledFiles)


## API Reference

#### Send a POST request to the local/hosted URL

```
  POST /api
````

Type of input for the API 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | Enter name of the movie|

Processes the movie title and returns result in a json format.

