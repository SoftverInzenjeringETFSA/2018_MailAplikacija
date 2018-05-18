from flask import Flask
from flask import request
import spam

app = Flask('lobster')


def setup():
    classifier = spam.Classifier()


@app.route('/spamorham', methods=['POST'])
def hello():
    message = request.get_json()
    content = message['content']

    return spam.predict(content)


if __name__ == '__main__':
    setup()
    app.run()
