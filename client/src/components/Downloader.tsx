// components/Downloader.tsx
import React, { useState } from 'react';
import UrlInput from './UrlInput';
import DownloadButton from './DownloadButton';
import { downloadVideo } from '../api/api';
import { validateTikTokUrl } from '../utils/utils';
import { saveAs } from 'file-saver';
const Downloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setIsValid(true);
  };

  const handleDownloadClick = async () => {
    if (validateTikTokUrl(url)) {
      setLoading(true);
      try {
        const response = await downloadVideo(url);
        if (response.status === 200) {
          // Assuming the backend sends the video file as a blob
          const blob = new Blob([response.data], { type: 'video/mp4' });
          saveAs(blob, 'downloaded-video.mp4'); // This will download the file
        }
      } catch (error) {
        console.error('Error downloading video:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setIsValid(false);
    }
  };


  return (
    <div>
      <UrlInput url={url} isValid={isValid} onChange={handleInputChange} />
      <DownloadButton onClick={handleDownloadClick} loading={loading} />
    </div>
  );
};

export default Downloader;
