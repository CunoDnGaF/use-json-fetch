import useJsonFetch from "../hooks/useJsonFetch";

const Loading = function({ url }) {
  const {loading} = useJsonFetch(`${url}loading`);
  
  if(loading) {
    return (
      <div className="loading">Загрузка...</div>
    );
  } else {
    return null;
  }
}

export default Loading;