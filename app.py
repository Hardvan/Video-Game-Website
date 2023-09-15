from flask import Flask, render_template, request
from gtts import gTTS
# import os
import io
import base64


# Load the gamesData.json file
import json


app = Flask(__name__)


def getSpeech(result_text):

    language = 'en'
    speech = gTTS(text=result_text, lang=language, slow=False)

    # On local machine
    # speech.save("speech.mp3")
    # os.system("start speech.mp3")

    # Save the speech to memory as bytes
    speech_file = io.BytesIO()
    speech.write_to_fp(speech_file)
    speech_bytes = speech_file.getvalue()
    speech_base64 = base64.b64encode(speech_bytes).decode('utf-8')

    return speech_base64


@app.route('/')
def index():

    games_list = []

    # Load the gamesData.json file
    with open("./static/json/gamesData.json", "r") as f:
        games_data = json.load(f)
        games_list = games_data["games"]

    # Add the audio base64 to each game
    for game in games_list:
        game["audio_base64"] = getSpeech(game["name"])

    return render_template("index.html", games_list=games_list)


if __name__ == "__main__":
    app.run(debug=True)
