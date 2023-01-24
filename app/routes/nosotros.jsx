import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de gutarras, blog de musica",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo
            perferendis fugit id tenetur recusandae distinctio quas numquam
            beatae ut. Alias exercitationem fugit accusamus corrupti nobis
            repellat ea inventore illum?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id
            quae nulla ut, adipisci dolor harum pariatur suscipit odio fugiat
            veritatis doloremque consequatur exercitationem aliquam placeat
            delectus nobis velit officia!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
