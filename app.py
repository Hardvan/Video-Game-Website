from flask import Flask, render_template, request

# Load the gamesData.json file
import json

with open("gamesData.json", "r") as f:

    # Load the gamesData.json file
    gamesData = json.load(f)

    # Get the games list
    gamesList = gamesData["games"]

    # Close the file
    f.close()


app = Flask(__name__)


@app.route('/')
def index():

    return render_template("index.html", gamesList=gamesList)


if __name__ == "__main__":
    app.run(debug=True)
