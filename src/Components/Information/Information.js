import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Information = (props) => {

  const { name, country, globalScore, ranking, enrollment, applicationFee, img } = props
    .information;

  const cartIcon = <FontAwesomeIcon icon={faUniversity} />




  return (
    <div className="col-md-4 gy-3  ">

      <div className="card" style={{ "width": "18rem" }}>

        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">  Name : {name} </h5>
          <h6 className="card-text"> <b> Country </b>: <i>{country}</i> </h6>
          <p className="card-text"> <b> Golbal Score : </b> <i> {globalScore}</i></p>
          <p className="card-text">  <b>Ranking : </b> <i> {ranking}</i> </p>
          <p className="card-text"><b> Enrollment </b>: <i>{enrollment}</i></p>
          <p className="card-text"><b> Application Fee </b>: <i> ${applicationFee} </i></p>


          <div className="d-grid gap-2 col-6 mx-auto">

            <button 
            onClick={() => {
              
              props.handleAddToCart(props.information);
          }}
            
            className="btn btn-info " type="button"> {cartIcon} Apply </button>
          

          </div>

        </div>

      </div>

    </div>

  );
};

export default Information;