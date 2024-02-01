import useJsonFetch from "../hooks/useJsonFetch";

const Error = function({ url }) {
  const {error} = useJsonFetch(`${url}error`);
  
  if(error) {
    return (
      <div className="error">Ошибка: {error}</div>
    );
  } else {
    return null;
  } 
}

export default Error;