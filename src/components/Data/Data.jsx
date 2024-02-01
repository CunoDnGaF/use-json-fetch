import useJsonFetch from "../hooks/useJsonFetch";

const Data = function({ url }) {
  const {data} = useJsonFetch(`${url}data`);
  
  if(data) {
    return (
      <div className="data">Успешное получение данных, статус: {data.status}</div>
    );
  } else {
    return null;
  }
}

export default Data;