from flask import Flask, request
from flask_socketio import SocketIO, emit, join_room
from flask_cors import CORS

import psycopg2
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000", async_mode="threading", transport="simple")
app.debug = True


@socketio.on('connect')
def test_connect():
    print('Client connneeeecttiooooon!')


@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')


@socketio.on('message')
def handle_message(message):
    print('Received message:', message)
    emit('message', message, broadcast=True, skip_sid=request.sid)


@socketio.on('message/operator')
def handle_operator_message(message):
    print('Received operator message:', message)
    # Emit to everyone except the sender
    reformatted_message = {
        **message,
        "type": "user",
    }
    print(reformatted_message, "reformatted_message")
    emit('message', reformatted_message)

if __name__ == "__main__":
    socketio.run(app, host="localhost", port=3003)