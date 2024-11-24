import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

export default function VideoCard({ title, description, videoUrl }: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="aspect-video relative bg-gray-100">
        {videoUrl ? (
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <Play className="w-16 h-16 mx-auto text-gray-400" />
              <p className="mt-2 text-gray-500 font-heading">Video Loading...</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading tracking-wider mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}