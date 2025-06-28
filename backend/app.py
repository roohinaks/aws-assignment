from flask import Flask,jsonify

app = Flask('__name__')

@app.route('/')
def home():
    return "Welcome to Backend Flask application"

@app.route('/api')
def data():
    return jsonify({"message": "Hello from Flask"})

if __name__== '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)