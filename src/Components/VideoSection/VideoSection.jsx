import React from "react";

const VideoSection = () => {
  const videos = [
    {
      thumbnail: "/path/to/video1-thumbnail.jpg", // Replace with the actual path
      alt: "Video 1",
    },
    {
      thumbnail: "/path/to/video2-thumbnail.jpg", // Replace with the actual path
      alt: "Video 2",
    },
    {
      thumbnail: "/path/to/video3-thumbnail.jpg", // Replace with the actual path
      alt: "Video 3",
    },
  ];

  return (
    <div className="py-10 bg-pink-800">
      <div className="flex justify-center gap-8 mb-6">
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <img
              src={video.thumbnail}
              alt={video.alt}
              className="rounded-md shadow-md w-72 h-44"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center transition-transform bg-red-600 rounded-full shadow-lg w-14 h-14 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-6 py-2 font-semibold text-white bg-yellow-500 rounded-md shadow-lg hover:bg-yellow-600">
          Download the 2023 Post Show Report
        </button>
      </div>
    </div>
  );
};

export default VideoSection;