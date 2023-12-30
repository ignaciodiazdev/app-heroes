import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components'

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search)

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-md-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } >
            <input
              type="text"
              placeholder="Busca aquí"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">Buscar</button>
          </form>
        </div>
        <div className="col-md-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Buscar un Héroe</div>
          <div className="alert alert-danger">No hay héroe <b>{ q }</b></div>
          {/* <HeroCard/> */}
        </div>
      </div>
    </>
  );
};
