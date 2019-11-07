import React from 'react';
import image from './cree.png';
import image2 from './master.png';

const creditCard = () =>{
    return (
        <div class="credit-card">
            <div className="bank-name">Tunisian Bank</div>
            <img className="puce" src={image}></img>
            <div className="card-number">7253 xxxx xxxx xxxx</div>
            <div className="expiration">
                <span className="valid-thru">Valid Thru</span> <span className="date">'11/50'</span>
               </div>
               
               <img className="master" src={image2}></img>
               
            <div className="name">Mohamed Bader Ben Rejeb</div>


        </div>
    );
}

export default creditCard;