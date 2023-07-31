import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';

export function Grafico() {
  const [data, setData] = React.useState([]);


  useEffect(() => {
    getFaturas();
  }, [data]); 

  const getFaturas = () => {
    // URL do endpoint onde você quer enviar o objeto
  const url = 'http://localhost:3333/grafico';

  //Enviando o objeto usando o método POST do Axios
 axios.get(url)
    .then(response => {
      console.log('Resposta do servidor:', response.data);  
      let resp = response.data;
      let data = [["Mês", "Consumo", "Valor"]];
      resp.forEach(element => {
        data.push([element.mes_referencia, element.energia_eletrica_quantidade, element.valor_total]);        
      });
      setData(data);
         
    }
    )
}

  // const data = [
  //   ["Mês", "Consumo", "Valor"],
  //   ["JAN/2023", 1000, 400],
  //   ["FEV", 1170, 460],
  //   ["MAR", 660, 1120],
  //   ["ABR", 1030, 540],
  // ];
  
  const options = {
    chart: {
      title: "Consumo e Valor por Mês",
      subtitle: "",
    },
  };


  return (
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
     
    {data ?(
    <Chart
      chartType="Bar"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
    ):(
      <div>
        <h1>Carregando...</h1>
      </div>
    )}
   
    </div>   
    </div>
  );
}

export default Grafico;
