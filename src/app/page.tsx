import Navbar from '@/components/Navbar';
import VideoCard from '@/components/VideoCard';

const videos = [
  {
    title: 'Drugačiji Fitnes',
    description: 'Pogledajte našu diskusiju o fitnesu i zdravom načinu života',
    videoUrl: 'https://www.youtube.com/embed/zU96FUjsxJk',
  },
  {
    title: 'Oslobođenje',
    description: 'Ekskluzivni intervju i važne teme iz svijeta sporta',
    videoUrl: 'https://www.youtube.com/embed/lP8VShv57VA',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navbar />
        <h1 className="text-5xl font-heading tracking-wider mb-12 text-center text-gray-800">
          Podkasti
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </main>
  );
}