import os

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename

# app instance
app = Flask(__name__)
CORS(app) # Enable CORS for all routes

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MEDIA_DIRECTORIES = {
    "images": os.path.join(BASE_DIR, "media", "images"),
    "videos": os.path.join(BASE_DIR, "media", "videos"),
}

PDF_DIR = os.path.join(BASE_DIR, "media", "pdfs")

# /api/home route
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Hello from Python!",
        'people': ['Jack', 'Harry', 'Barry']
    })


@app.route("/api/media/<media_type>/<path:filename>", methods=["GET"])
def serve_media(media_type, filename):
    media_folder = MEDIA_DIRECTORIES.get(media_type)
    if not media_folder:
        return jsonify({
            "error": "Invalid media type. Use 'images' or 'videos'."
        }), 400

    safe_filename = secure_filename(filename)
    if safe_filename != filename:
        return jsonify({"error": "Invalid file name."}), 400

    file_path = os.path.join(media_folder, safe_filename)
    if not os.path.isfile(file_path):
        return jsonify({"error": "File not found."}), 404

    return send_from_directory(media_folder, safe_filename)


@app.route("/api/pdf/<path:filename>", methods=["GET"])
def serve_pdf(filename):
    safe_filename = secure_filename(filename)
    if safe_filename != filename:
        return jsonify({"error": "Invalid file name."}), 400

    file_path = os.path.join(PDF_DIR, safe_filename)
    if not os.path.isfile(file_path):
        return jsonify({"error": "PDF not found."}), 404

    return send_from_directory(PDF_DIR, safe_filename, mimetype="application/pdf")

if __name__ == "__main__":
    app.run(debug=True, port=8080)