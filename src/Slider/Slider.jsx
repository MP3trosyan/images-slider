import React, {useState} from 'react'

const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/234/200/300",
    "https://picsum.photos/id/233/200/300",
    "https://picsum.photos/id/230/200/300",
    "https://picsum.photos/id/223/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/236/200/300",
    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/227/200/300",
    "https://picsum.photos/id/228/200/300",
    "https://picsum.photos/id/225/200/300",
    "https://picsum.photos/id/229/200/300",
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        if (currentIndex + 3 < images.length) {
            setCurrentIndex(currentIndex + 3)
        }
    }

    const prevSlide = () => {
        if (currentIndex - 3 >= 0) {
            setCurrentIndex(currentIndex - 3)
        }
    }

  return (
    <div>
        <button onClick={nextSlide}>Next</button>
        <div id='slides'>
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                <img key={index} src={image} alt="slide" />
            ))}
        </div>
        <button onClick={prevSlide}>Prev</button>
        <input type="range" min={0} max={images.length - 3} step={3} value={currentIndex} onChange={(e) => setCurrentIndex(parseInt(e.target.value, 10))} />
    </div>
  )
}

export default Slider
