from flask import Flask
from flask import request
import data

app = Flask('lobster')


def setup():
    data.preprocess()


@app.route('/spamorham', methods=['POST'])
def hello():
    message = request.get_json()
    content = message['content']

    return spam.predict(content)


if __name__ == '__main__':
    setup()
    app.run()
