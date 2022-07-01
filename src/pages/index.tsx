import type { NextPage } from "next";
import Image from "next/image";
import GraphSection from "../components/GraphSection";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <section
        className="flex flex-row bg-no-repeat bg-bottom bg-contain"
        style={{
          backgroundImage: `url("/wave-top.svg")`,
        }}
      >
        <div className="w-6/12 h-screen pt-60">
          <Image
            src="/medica-illustation.png"
            layout="responsive"
            alt="ilustração de medica"
            width={500}
            height={350}
          />
        </div>
        <div className="w-6/12 h-screen pt-96 pr-14 pl-20">
          <p className="font-lato text-right font-bold text-7xl text-white">
            Uma analise dos números da covid-19 em diferentes aspectos
          </p>
        </div>
      </section>
      <section className="bg-amber-500  px-32 flex flex-col justify-center">
        <p className="text-center text-white font-bold text-7xl text-lato">
          Aqui você encontra de forma facíl e detalhada, dados a respeito da
          covid-19, do seu estado até o Brasil inteiro.
        </p>
      </section>
      <section
        className="bg-no-repeat bg-top bg-contain flex flex-row justify-evenly"
        style={{
          backgroundImage: `url("/wave-down.svg")`,
        }}
      >
        <div className="w-5/12 h-3/4">
          <Image
            src="/doente-illustration.png"
            layout="responsive"
            alt="ilustração de doente"
            width={290}
            height={350}
          />
        </div>
        <div className="w-5/12 flex flex-col justify-center">
          <p className="text-center text-black  font-bold text-7xl text-lato">
            Casos
            <br /> registrados
          </p>
        </div>
      </section>
      <section className="graphs">
        <GraphSection title="Casos por estado"></GraphSection>
        <GraphSection title="Casos por idade"></GraphSection>
        <GraphSection title="Casos por data"></GraphSection>
      </section>
      <section
        className="flex flex-row bg-no-repeat pt-40 justify-around"
        id="deads"
        style={{
          backgroundImage: `url("/bg-diagonal.png")`,
        }}
      >
        <div className="w-5/12 flex flex-col justify-center">
          <p className="text-center text-white  font-bold text-7xl text-lato">
            Mortes
            <br /> confirmadas
          </p>
        </div>
        <div className="w-5/12 h-3/4">
          <Image
            src="/tumulo.png"
            layout="responsive"
            alt="ilustração de tumulo"
            width={290}
            height={300}
          />
        </div>
      </section>
      <section className="graphs">
        <GraphSection title="Mortes por estado"></GraphSection>
        <GraphSection title="Mortes por idade"></GraphSection>
        <GraphSection title="Mortes por data"></GraphSection>
      </section>
      <section
        className="flex flex-row bg-amber-500 pt-40 justify-around"
        id="deads"
      >
        <div className="w-6/12 h-3/4">
          <Image
            src="/vacina.png"
            layout="responsive"
            alt="ilustração de vacina"
            width={290}
            height={200}
          />
        </div>
        <div className="w-4/12 flex flex-col justify-center">
          <p className="text-center text-white  font-bold text-7xl text-lato">
            Vacinas <br/>aplicadas
          </p>
        </div>
      </section>
      <section>
        <GraphSection title="Vacinas por estado"></GraphSection>
        <GraphSection title="Vacinas por idade"></GraphSection>
        <GraphSection title="Vacinas por data"></GraphSection>
      </section>
    </div>
  );
};

export default Home;

{
  casos:{
      estado:[],
      idade:[],
      data:[],
  },
  mortes:{
    estado:[],
    idade:[],
    data:[],
  },
  vacinas:{
    estado:[],
    idade:[],
    data:[],
  }
}