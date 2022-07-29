import React, { useEffect } from "react";
//libreria de animaciones
import ScrollReveal from "scrollreveal";
//estilos
import "./index.css";
//constantes
import { constans } from "../../../consts/consts";
const { backgrounds, color, size, fonts, texts } = constans();

//contadores
let count = 0;

export function AboutMore() {
  useEffect(() => {
    animations();
  }, []);

  return (
    <div
      className="container-info-about min-h-screen w-screen flex bg-cover bg-fixed bg-gray-900 pt-44 pb-44"
      id="seccion-about-more-info"
    >
      <div className="container-img-about w-3/6 min-h-screen flex justify-center items-center">
        <div
          className="w-72 h-72 rounded-xl bg-cover bg-center"
          id="img-about"
          style={{
            backgroundImage: `url(${backgrounds.backAbout})`,
            boxShadow: `0px 0px 20px 6px rgba(0, 0, 0, 0.5), -${
              size.shadow.litle * 3
            }px ${size.shadow.litle * 3}px 0px ${size.shadow.litle}px ${
              color.darkBlue
            }, ${size.shadow.litle * 3}px -${size.shadow.litle * 3}px 0px ${
              size.shadow.litle
            }px ${color.white2}`,
          }}
        ></div>
      </div>
      <div className="container-info-about w-3/6 min-h-screen flex justify-center items-center">
        <div
          className="card-info-about rounded-xl w-5/6 h-4/6 flex flex-col justify-evenly items-center p-5 shadow-2xl shadow-gray-700 gap-7"
          id="card-info-about-more"
        >
          <h2 className="text-4xl" style={{ fontFamily: fonts.montserrat }}>
            Sobre mi
          </h2>
          {texts.about.map((texto) => {
            count = count + 1;
            return (
              <p
                className="text-sm text-center"
                style={{ fontFamily: fonts.montserrat }}
                key={`parrafo-${count}`}
              >
                {texto}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const animations = () => {
  //carta de informacion
  ScrollReveal().reveal("#card-info-about-more", {
    delay: 300,
    duration: 900,
    distance: "150%",
    origin: "right",
    reset: true,
    opacity: 0.8,
    scale: 1,
  });
  //carta de imagen
  ScrollReveal().reveal("#img-about", {
    delay: 300,
    duration: 900,
    distance: "200%",
    origin: "left",
    reset: true,
    opacity: 0.8,
    scale: 1,
  });
};
