import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Session } from "../../components/Session";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useEffect, useState } from "react";

export function Home() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    async function fetchPratos() {
      const meal = await api.get("/prato");
      setPratos(meal.data);
    }

    fetchPratos();
  }, []);

  return (
    <Container>
      <Header onclick={onclick} />
      <Banner />
      <Session title="Refeições">
        <div className="carrossel">
          {pratos.map((prato) => {
            if (prato.category == "Refeicao") {
              return (
                <Card
                  key={String(prato.id)}
                  imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                  name={prato.name}
                  price={prato.price}
                />
              );
            }
          })}
        </div>
      </Session>

      <Session title="Pratos Principais">
        <div className="carrossel">
          {pratos.map((prato) => {
            if (prato.category == "Sobremessa") {
              return (
                <Card
                  key={String(prato.id)}
                  imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                  name={prato.name}
                  price={prato.price}
                />
              );
            }
          })}
        </div>
      </Session>
    </Container>
  );
}
