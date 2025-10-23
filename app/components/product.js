import Image from "next/image";

const ProductCard = ({ id, urlImage }) => {
  return (
    <article className="product-card">
      <figure className="picture-description">
        <Image src={urlImage} alt={`Teléfono ${id}`} fill />
        <figcaption>Teléfono #{id}</figcaption>
      </figure>
      <h2>Modelo {id}</h2>
      <p>Descripción breve del teléfono o specs.</p>
    </article>
  );
};
export default ProductCard;
