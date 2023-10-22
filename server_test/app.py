from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/reproducir_sonido/<nombre_sonido>')
def reproducir_sonido(nombre_sonido):
    return jsonify({'message': 'Sonido con exito' })

@app.route('/hola', methods=['GET'])
def get_data():

    try:

        return jsonify({'message': 'Hola desde el servidor' })
    
    except Exception as e:

        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
