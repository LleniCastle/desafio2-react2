import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Context } from "../context/Context";

const Favorites = () => {
  const { photos, setPhotos } = useContext(Context);

  const eliminar = (id) => {
    const photoIndex = photos.findIndex((e) => e.id === id);
    photos[photoIndex].liked = !photos[photoIndex].liked;
    setPhotos([...photos]);
  };

  const fotosFavoritas = photos.filter((e) => e.liked);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      {fotosFavoritas.length === 0 && (
        <Badge bg="info" className="badge">No hay fotos favoritas seleccionadas</Badge>
      )}
      <div className="p-3 gallery grid-columns-4">
        {fotosFavoritas.map((photo, i) => (
          <Card key={i} className="text-white" onClick={() => eliminar(photo.id)}>
            <Card.Img src={photo.src.tiny} alt={photo.alt} />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
