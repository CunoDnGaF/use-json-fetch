import Data from './Data/Data';
import Error from './Error/Error';
import Loading from './Loading/Loading';

const UseJsonFetchWidget  = function({ url }) {

  return (
    <div className="widget">
      <Data url={url}/>
      <Error url={url}/>
      <Loading url={url}/>
    </div>
  );
}

export default UseJsonFetchWidget;