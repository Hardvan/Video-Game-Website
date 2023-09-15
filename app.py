from flask import Flask, render_template, request

# Load the gamesData.json file
import json


app = Flask(__name__)


@app.route('/')
def index():

    games_list = []

    with open("./static/json/gamesData.json", "r") as f:

        # Load the gamesData.json file
        games_data = json.load(f)

        # Get the games list
        games_list = games_data["games"]

        # Close the file
        f.close()  # Not necessary (since we are using the with statement) but good practice

    return render_template("index.html", games_list=games_list)


if __name__ == "__main__":
    app.run(debug=True)
