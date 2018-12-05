from sanic import Sanic
from sanic_cors import CORS, cross_origin
from sanic.response import text as stext
import json
import markovify
import re

app = Sanic(__name__)
CORS(app)
app.static('/', './static')

posts = json.load(open('./posts.json'))
text = '\n'.join(posts)
sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|!|\n)\s', text)
sentences = [sentence.strip() for sentence in sentences]
mmodel = markovify.Text('\n'.join(sentences))

@app.route("/generate", methods=['GET', 'OPTIONS'])
def generate(q):
    return stext(mmodel.make_sentence())

app.run(port=6969)