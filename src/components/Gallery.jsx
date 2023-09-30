import { useContext } from 'react';
import { Context } from '../context/Context';
import Card from 'react-bootstrap/Card';
import IconHeart from '../components/IconHeart';

const Gallery = () => {
  const { photos, setPhotos } = useContext(Context)

  const seleccionada = (id) => {
    const photoIndex = photos.findIndex(e => e.id === id);
    photos[photoIndex].liked = !photos[photoIndex].liked;
    setPhotos([...photos]);
  }

  return <div className="gallery grid-columns-5 p-3">

    {photos.map((photo, i) =>
      <Card key={i} className='text-white' onClick={() => seleccionada(photo.id)}>
        <Card.Img src={photo.src.tiny} alt={photo.alt} />
        <Card.ImgOverlay>
          <Card.Title className='text-end'>
            <IconHeart filled={photo.liked} />
          </Card.Title>
          <Card.Footer className='text-white text-start '>
            {photo.alt}
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    )
    }


  </div>
};
export default Gallery;
