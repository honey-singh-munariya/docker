from flask import Flask, request, jsonify
from business import get_data  # type: ignore[reportMissingImports]
app = Flask(__name__)
@app.route('/')
def hello_world():
    return "honey singh muanriya and his dream to be a DevOps engineer"

@app.route('/api', methods = ['GET'])
def api():
    data = get_data()
    data = {
        'data': data

    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0', debug= True)





















