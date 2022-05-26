import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <section className="flex flex-row bg-no-repeat bg-bottom bg-contain" 
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
      <section className="bg-amber-500 py-60 px-32">
        <p className="text-center text-white font-bold text-7xl text-lato">Aqui você encontra de forma facíl e detalhada, dados a respeito da covid-19,  do seu estado até o Brasil inteiro.</p>
      </section>
    </div>
  );
};

export default Home;
