from flask import Flask, request, jsonify
import os
import subprocess
from datetime import datetime

app = Flask(__name__)

# Database connection configuration
DB_NAME = 'api_requests_db'
DB_USER = 'myuser'
DB_PASS = 'mypassword'
DB_HOST = 'localhost'
DB_PORT = '5432' 

def execute_query(query):
    try:
        cmd = f"PGPASSWORD={DB_PASS} psql -h {DB_HOST} -p {DB_PORT} -d {DB_NAME} -U {DB_USER} -c \"{query}\""
        result = subprocess.run(cmd, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error: {e.stderr.strip()}")
        return str(e)

@app.route('/api/requests', methods=['GET'])
def get_requests():
    query = "SELECT * FROM api_requests;"
    output = execute_query(query)
    return jsonify({"data": output.splitlines()})

@app.route('/api/requests', methods=['POST'])
def create_request():
    data = request.json
    request_id = data.get('request_id')
    request_type = data.get('request_type')
    request_method = data.get('request_method')
    request_time = datetime.now().isoformat()
    payload = data.get('payload')
    content_type = data.get('content_type')
    ip_address = data.get('ip_address')
    os = data.get('os')
    user_agent = data.get('user_agent')

    query = f'''
        INSERT INTO api_requests (request_id, request_type, request_method, request_time, payload, content_type, ip_address, os, user_agent)
        VALUES ('{request_id}', '{request_type}', '{request_method}', '{request_time}', '{payload}', '{content_type}', '{ip_address}', '{os}', '{user_agent}');
    '''
    
    print(f"Executing query: {query}")  # Log the query for debugging
    output = execute_query(query)

    return jsonify({'message': 'Request created successfully', 'output': output}), 201

@app.route('/api/requests/<int:id>', methods=['DELETE'])
def delete_request(id):
    query = f'DELETE FROM api_requests WHERE id = {id};'
    output = execute_query(query)
    
    return jsonify({'message': 'Request deleted successfully', 'output': output}), 204

if __name__ == '__main__':
    app.run(debug=True)
