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
    <div className="py-10 bg-[]">
      {/* Video Thumbnails Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative group w-72 h-44 sm:w-80 sm:h-48 lg:w-96 lg:h-56"
          >
            <img
              src={video.thumbnail}
              alt={video.alt}
              className="object-cover w-full h-full rounded-md shadow-md"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center transition-transform bg-red-600 rounded-full shadow-lg w-14 h-14 lg:w-16 lg:h-16 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-md shadow-lg hover:bg-yellow-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-2"
          >
            <path d="M5 20h14v-2H5v2zm7-18l-7 7h4v6h6v-6h4l-7-7z" />
          </svg>
          Download the 2023 Post Show Report
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
