import { useState, useEffect } from "react";
import axios from "axios";
import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
  IconFidgetSpinner,
} from "@tabler/icons-react";

const ImageSlider = ({ limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const API = `https://picsum.photos/v2/list?page=1&limit=${limit}`;
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API);
        setImages(res.data);
        setIsLoading(false);
      } catch (error) {
        setErrorMsg(error.message);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [limit]);

  if (errorMsg) {
    return <div>Error fetching data! {errorMsg}</div>;
  }

  // functions for changing images
  const nextImage = () =>
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  const prevImage = () =>
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative flex h-96 w-2xl overflow-hidden rounded-md bg-gray-200 select-none">
        {isLoading && (
          <IconFidgetSpinner
            size={45}
            stroke={1.5}
            className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 animate-spin text-gray-700"
          />
        )}
        {errorMsg && <div>Error fetching data! {errorMsg}</div>}
        <IconCircleArrowLeftFilled
          size={35}
          stroke={2}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer fill-white drop-shadow-2xl transition-transform hover:scale-110"
          onClick={prevImage}
        />
        {images.length > 0
          ? images.map((item, idx) => {
              return (
                <img
                  key={item.id}
                  src={item.download_url}
                  alt={item.author}
                  className={`absolute h-full w-full rounded-md object-cover transition-opacity duration-400 ${
                    currentSlide === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
            })
          : null}
        <IconCircleArrowRightFilled
          size={35}
          stroke={2}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer fill-white drop-shadow-2xl transition-transform hover:scale-110"
          onClick={nextImage}
        />

        <span className="absolute z-5 flex h-full w-full items-end justify-center gap-2 pb-3">
          {images && images.length
            ? images.map((item, idx) => {
                return (
                  <button
                    key={item.id}
                    className={`size-2.5 rounded-full ${currentSlide === idx ? "bg-white" : "cursor-pointer bg-gray-400"}`}
                    onClick={() => {
                      setCurrentSlide(idx);
                    }}
                  />
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
