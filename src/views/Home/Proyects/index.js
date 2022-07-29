import React, { useEffect } from "react";
//libreria de animaciones
import ScrollReveal from "scrollreveal";
//estilos
import "./index.css";
//componentes
import { ArrowLeft, ArrowRight } from "../../../components/layouts/Svg";
import { Spin } from "../../../components/common/index";
import { ItemProyect } from "./itemProyect";
//hook de repositorios
import { useRepos } from "../../../hooks/useRepos";
//constantes
import { constans } from "../../../consts/consts";
const { color, fonts, size } = constans();

let rotate = true;

export function Proyects() {
  //estado de repositorios
  const { repos } = useRepos();

  useEffect(() => {
    styleButtonsArrow();
    animations();
  }, []);

  return (
    <div
      className="w-screen min-h-screen bg-slate-200 flex flex-col justify-center pl-10 pr-10 pt-44 pb-44"
      id="proyects-seccion"
    >
      <div className="container-buttons-title-proyects flex flex-row justify-between">
        <h1
          className="text-5xl ml-5 mb-5"
          style={{ fontFamily: fonts.montserrat, fontWeight: "bold" }}
          id="title-seccion-proyects"
        >
          Proyectos
        </h1>
        <div
          className="flex flex-row justify-center items-center gap-4"
          id="box-arrow-buttons"
        >
          <div
            className="arrowDireccion rounded-full p-3 flex flex-row justify-center items-center cursor-pointer"
            id="box-arrow-left"
          >
            <ArrowLeft
              width={size.litle}
              height={size.litle}
              color={color.gray}
              classN="arrowLeft"
            />
          </div>
          <div
            className="arrowDireccion rounded-full p-3 flex flex-row justify-center items-center cursor-pointer"
            id="box-arrow-right"
          >
            <ArrowRight
              width={size.litle}
              height={size.litle}
              color={color.gray}
              classN="arrowRight"
            />
          </div>
        </div>
      </div>
      <ul
        className="w-full p-5 flex gap-5 overflow-x-auto snap-x"
        id="box-list-proyects"
      >
        {!repos ? (
          <Spin />
        ) : (
          repos.map((repo) => {
            //Definir la direccion de la imagen de portada
            const img = `https://raw.githubusercontent.com/Eduardo619123R/${repo.name}/main/info/preview.png`;
            //Direccion de descarga
            const download = `https://github.com/Eduardo619123R/${repo.name}/archive/refs/heads/main.zip`;
            //Filtrar el lenguaje
            const langauge = filterLanguage(repo.language);
            //Cambiar el color de fondo
            if (rotate) {
              rotate = !rotate;
              return (
                <ItemProyect
                  color={color.blue}
                  title={repo.name}
                  language={langauge}
                  key={repo.id}
                  img={img}
                  direccion={repo.html_url}
                  download={download}
                  description={repo.description}
                />
              );
            } else {
              rotate = !rotate;
              return (
                <ItemProyect
                  color={color.gray}
                  title={repo.name}
                  language={langauge}
                  key={repo.id}
                  img={img}
                  direccion={repo.html_url}
                  download={download}
                  description={repo.description}
                />
              );
            }
          })
        )}
      </ul>
    </div>
  );
}

const filterLanguage = (language) => {
  if (language === undefined || language === null || language === "") {
    return "Documento";
  } else {
    return language;
  }
};

const scroll = (position) => {
  const boxProyects = document.getElementById("box-list-proyects");
  if (position === "left") {
    let positionXN = boxProyects.scrollLeft - 600;
    boxProyects.scrollTo({
      behavior: "smooth",
      left: positionXN,
    });
  } else {
    let positionXP = boxProyects.scrollLeft + 600;
    boxProyects.scrollTo({ behavior: "smooth", left: positionXP });
  }
};

const styleButtonsArrow = () => {
  const arrowLeft = document.querySelector(".arrowLeft");
  const arrowRight = document.querySelector(".arrowRight");
  const boxArrowLeft = document.getElementById("box-arrow-left");
  const boxArrowRight = document.getElementById("box-arrow-right");

  boxArrowLeft.addEventListener("click", () => {
    //Colorea el boton para señalar que fue seleccionado
    boxArrowLeft.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
    arrowLeft.style.fill = color.white;
    //Quita el color al segundo botton
    boxArrowRight.style.backgroundColor = "transparent";
    arrowRight.style.fill = color.gray;
    //Movimiento de Scroll
    scroll("left");
    //Regregsa los botones
    setTimeout(() => {
      boxArrowLeft.style.backgroundColor = "transparent";
      arrowLeft.style.fill = color.gray;
    }, 500);
  });
  //Evento del segundo boton
  boxArrowRight.addEventListener("click", () => {
    //Colorea el boton para señalar que fue seleccionado
    boxArrowRight.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
    arrowRight.style.fill = color.white;
    //Quita el color al segundo botton
    boxArrowLeft.style.backgroundColor = "transparent";
    arrowLeft.style.fill = color.gray;
    //Movimiento de Scroll
    scroll("right");
    //Regregsa los botones
    setTimeout(() => {
      boxArrowRight.style.backgroundColor = "transparent";
      arrowRight.style.fill = color.gray;
    }, 500);
  });
};

const animations = () => {
  //Contenedor de proyectos
  ScrollReveal().reveal("#box-list-proyects", {
    delay: 300,
    duration: 900,
    distance: "150%",
    origin: "left",
    reset: true,
    opacity: 0.8,
    scale: 1,
  });
  //Botones flecha
  ScrollReveal().reveal("#box-arrow-buttons", {
    delay: 300,
    duration: 900,
    distance: "150%",
    origin: "right",
    reset: true,
    opacity: 0.8,
    scale: 1,
  });
  //Title seccion
  ScrollReveal().reveal("#title-seccion-proyects", {
    delay: 300,
    duration: 900,
    distance: "150%",
    origin: "left",
    reset: true,
    opacity: 0.8,
    scale: 1,
  });
};
