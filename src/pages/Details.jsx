import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCurrentCountry, selectDetails } from '../store/details/details-selectors';
import { useEffect } from 'react';
import { loadCountyByName } from '../store/details/details-actions';


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentCountry, error, status} = useSelector(selectDetails);

  useEffect(() =>{
    dispatch(loadCountyByName(name))
  },[name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading ...</h2> }
      {error === 'error' && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
