import React from 'react';

interface DownloadButtonProps {
  onClick: () => void;
  loading: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Download'}
    </button>
  );
};

export default DownloadButton;
