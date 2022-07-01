import axios from "axios";
import Image from "next/image";
import GraphSection from "../components/GraphSection";
import Header from "../components/Header";

const Home = (props) => {
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
        <GraphSection
          title="Casos por estado"
          data={props.data.casos ? props.data.casos.estado : []}
          chartType="bar"
          color="#2EAC59"
        ></GraphSection>
        <GraphSection
          title="Casos por data"
          data={props.data.casos ? props.data.casos.data : []}
          chartType="line"
          color="#1D81A0"
        ></GraphSection>
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
        <GraphSection
          title="Mortes por estado"
          data={props.data.mortes ? props.data.mortes.estado : []}
          chartType="bar"
          color="#2EAC59"
        ></GraphSection>
        <GraphSection
          title="Mortes por data"
          data={props.data.mortes ? props.data.mortes.data : []}
          chartType="line"
          color="#1D81A0"
        ></GraphSection>
      </section>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  let res;
  try {
    res = await axios.get("http://localhost:3000/api/home");
  } catch (err) {
    res = {
      data: {
        casos: {
          estado: [
            { label: "São Paulo", count: 5718492 },
            { label: "Minas Gerais", count: 3621242 },
            { label: "Paraná", count: 2623126 },
            { label: "Rio Grande do Sul", count: 2547247 },
            { label: "Rio de Janeiro", count: 2348485 },
            { label: "Santa Catarina", count: 1794189 },
            { label: "Bahia", count: 1576509 },
            { label: "Goiás", count: 1501978 },
            { label: "Ceará", count: 1266399 },
            { label: "Espírito Santo", count: 1119472 },
            { label: "Pernambuco", count: 976385 },
            { label: "Distrito Federal", count: 805736 },
            { label: "Pará", count: 782892 },
            { label: "Mato Grosso", count: 759541 },
            { label: "Paraíba", count: 618602 },
            { label: "Amazonas", count: 585103 },
            { label: "Mato Grosso do Sul", count: 549847 },
            { label: "Rio Grande do Norte", count: 526479 },
            { label: "Maranhão", count: 443241 },
            { label: "Rondônia", count: 417108 },
            { label: "Piauí", count: 372612 },
            { label: "Sergipe", count: 330327 },
            { label: "Tocantins", count: 320743 },
            { label: "Alagoas", count: 305248 },
            { label: "Amapá", count: 161172 },
            { label: "Roraima", count: 159648 },
            { label: "Acre", count: 126195 },
          ],
          data: [
            { count: 7700578, label: "01/2021" },
            { count: 9229322, label: "02/2021" },
            { count: 10587001, label: "03/2021" },
            { count: 12839844, label: "04/2021" },
            { count: 14725975, label: "05/2021" },
            { count: 16624480, label: "06/2021" },
            { count: 18622304, label: "07/2021" },
            { count: 19938358, label: "08/2021" },
            { count: 20804215, label: "09/2021" },
            { count: 0, label: "10/2021" },
            { count: 21814693, label: "11/2021" },
            { count: 22105872, label: "12/2021" },
          ],
        },
        mortes: {
          estado: [
            { label: "São Paulo", count: 170907 },
            { label: "Minas Gerais", count: 62149 },
            { label: "Paraná", count: 43774 },
            { label: "Rio Grande do Sul", count: 40027 },
            { label: "Rio de Janeiro", count: 74134 },
            { label: "Santa Catarina", count: 22029 },
            { label: "Bahia", count: 30031 },
            { label: "Goiás", count: 26882 },
            { label: "Ceará", count: 27186 },
            { label: "Espírito Santo", count: 14495 },
            { label: "Pernambuco", count: 21867 },
            { label: "Distrito Federal", count: 11759 },
            { label: "Pará", count: 18463 },
            { label: "Mato Grosso", count: 14710 },
            { label: "Paraíba", count: 10254 },
            { label: "Amazonas", count: 14178 },
            { label: "Mato Grosso do Sul", count: 10626 },
            { label: "Rio Grande do Norte", count: 8267 },
            { label: "Maranhão", count: 10896 },
            { label: "Rondônia", count: 7246 },
            { label: "Piauí", count: 7764 },
            { label: "Sergipe", count: 6358 },
            { label: "Tocantins", count: 4164 },
            { label: "Alagoas", count: 6953 },
            { label: "Amapá", count: 2140 },
            { label: "Roraima", count: 2153 },
            { label: "Acre", count: 2004 },
          ],
          data: [
            { count: 195411, label: "01/2021" },
            { count: 225099, label: "02/2021" },
            { count: 255720, label: "03/2021" },
            { count: 325284, label: "04/2021" },
            { count: 406437, label: "05/2021" },
            { count: 465199, label: "06/2021" },
            { count: 520095, label: "07/2021" },
            { count: 556834, label: "08/2021" },
            { count: 581150, label: "09/2021" },
            { count: 0, label: "10/2021" },
            { count: 607922, label: "11/2021" },
            { count: 614964, label: "12/2021" },
          ],
        },
      },
    };
  }
  const data = res.data;
  return {
    props: {
      data,
    },
  };
}
