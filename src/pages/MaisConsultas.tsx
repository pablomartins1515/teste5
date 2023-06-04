
import { BottomStyle } from "../componentes/BottomStyle";
import { Header } from "../componentes/Header";
import Pesquisador from "../componentes/Pesquisador";

import { Rodape } from "../componentes/Rodape";

export function MaisConsultas() {
  
  return (
    <div>
      <Header />

        <div className="py-36">          
          <Pesquisador /> 
        </div>

        <BottomStyle />

      <Rodape />
    </div>
  );
}
