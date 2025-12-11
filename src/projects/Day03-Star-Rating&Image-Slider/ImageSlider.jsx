/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import axios from "axios";
import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const API = "https://picsum.photos/v2/list?page=1&limit=4";

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setImages(res.data);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...please wait!</div>;
  }
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
      <div className="relative flex h-64 w-96 overflow-hidden rounded-md bg-gray-200">
        <IconCircleArrowLeftFilled
          size={23}
          stroke={2}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer fill-white drop-shadow-2xl transition-transform hover:scale-110"
          onClick={() => prevImage}
        />
        {images && images.length
          ? images.map((item, index) => {
              return (
                currentSlide === index && (
                  <img
                    key={item.id}
                    src={item.download_url}
                    alt={item.author}
                    className={
                      currentSlide === index
                        ? "h-full w-full rounded-md object-cover"
                        : "hidden"
                    }
                  />
                )
              );
            })
          : null}
        <IconCircleArrowRightFilled
          size={23}
          stroke={2}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer fill-white drop-shadow-2xl transition-transform hover:scale-110"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
