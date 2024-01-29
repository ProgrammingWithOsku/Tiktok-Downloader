import pyktok as pyk
import requests

# Specify the browser to use with pyktok
# Replace 'chrome' with the browser you have installed
pyk.specify_browser('chrome')


def download_tiktok_video(url):
    """
    Downloads a video from TikTok using pyktok.

    Args:
        url (str): The URL of the TikTok video.

    Returns:
        str: The file path to the downloaded video.
    """
    video_info = pyk.get_video_by_url(url)

    if not video_info:
        raise ValueError("Unable to retrieve video information.")

    video_url = video_info['video_url']
    response = requests.get(video_url)

    if response.status_code != 200:
        raise ValueError("Failed to download the video.")

    file_path = 'downloaded_video.mp4'
    with open(file_path, 'wb') as video_file:
        video_file.write(response.content)

    return file_path
