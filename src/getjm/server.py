# server.py
import os
from flask import Flask , request , jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/run-script', methods=['POST'])
def run_script():
    #从前端获取数据
    data = request.get_json()
    
    if not data or 'number' not in data:
        return jsonify({"error": "Missing number parameter"}), 400
    
    input_number = data['number']
    
    script_path = os.path.join(os.path.dirname(__file__), 'getJM.py')  # 确保绝对路径
    if not os.path.exists(script_path):
        return f"Error: Script not found at {script_path}", 404

    try:
        # 添加执行权限（Linux/Mac）
        if not os.access(script_path, os.X_OK):
            os.chmod(script_path, 0o755)
        result = subprocess.run(
            ['python', script_path, str(input_number)]
            # check=True,
            # stdout=subprocess.PIPE,  # 捕获标准输出
            # stderr=subprocess.PIPE,  # 捕获错误输出
            # text=True
            )
        # print("STDOUT:", result.stdout)
        # print("STDERR:", result.stderr)
        return 'Script executed successfully', 200
    except subprocess.CalledProcessError as e:
        return f"Script failed: {e.stderr}", 500

if __name__ == '__main__':
    app.run(port=5000)