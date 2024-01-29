from flask import Blueprint, request, jsonify, send_file
from ..utils.tiktok_downloader import download_tiktok_video
import os

downloader_bp = Blueprint('downloader', __name__)


@downloader_bp.route('/download', methods=['POST'])
def download_video():
    video_file_path = None  # Initialize video_file_path to None

    try:
        data = request.json
        url = data.get('url')

        if not url:
            return jsonify({'error': 'No URL provided'}), 400

        video_file_path = download_tiktok_video(url)
        return send_file(video_file_path, as_attachment=True, attachment_filename='video.mp4')
    except Exception as e:
        # Handle the exception, e.g., log it and return an error response
        return jsonify({'error': str(e)}), 500
    finally:
        if video_file_path and os.path.exists(video_file_path):
            os.remove(video_file_path)  # Clean up the file
