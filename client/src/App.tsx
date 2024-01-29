// App.tsx
import Downloader from './components/Downloader';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">TikTok Downloader</h1>
        <Downloader />
      </div>
      <Footer />
    </div>
  );
};

export default App;
