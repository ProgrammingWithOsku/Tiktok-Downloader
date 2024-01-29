from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)

    # Import and register blueprints
    from .routes.downloader import downloader_bp
    app.register_blueprint(downloader_bp)

    return app
