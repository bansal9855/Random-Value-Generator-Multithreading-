from flask import Flask, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS
import random
import threading
import time

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  
socketio = SocketIO(app, cors_allowed_origins="http://localhost:5173")

def generate_random_numbers():
    while True:
        data = {
            'boxes': [
                {'value': random.randint(10, 20), 'lb': 10, 'ub': 20, 'refreshTime': 10, 'bgColor': 'bg-red-200'},
                {'value': random.randint(-10, 10), 'lb': -10, 'ub': 10, 'refreshTime': 20, 'bgColor': 'bg-blue-200'},
                {'value': random.randint(-100, 0), 'lb': -100, 'ub': 0, 'refreshTime': 8, 'bgColor': 'bg-green-200'},
                {'value': random.randint(0, 20), 'lb': 0, 'ub': 20, 'refreshTime': 12, 'bgColor': 'bg-yellow-400'},
                {'value': random.randint(-40, 40), 'lb': -40, 'ub': 40, 'refreshTime': 16, 'bgColor': 'bg-blue-400'},
                {'value': random.randint(100, 200), 'lb': 100, 'ub': 200, 'refreshTime': 14, 'bgColor': 'bg-gray-200'}
            ]
        }
        socketio.emit('update', data) 
        time.sleep(5)  

threading.Thread(target=generate_random_numbers).start()

@app.route('/api/boxes', methods=['GET'])
def get_boxes():
    return jsonify({'status': 'API is working!'})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
