import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';

const Universities = () => {

    const [informations, setInformations] = useState([])
    const [cart, setCart] = useState([]);

    const handleAddToCart = (information) => {
        const newCart = [...cart, information];
        setCart(newCart);
    }; 


    useEffect(() => {
        fetch('./universitiesData.JSON')
            .then(res => res.json())
            .then(data => setInformations(data))

    }, [])

   

    return (
        <div>

            <div className="row">

                <div className="col-md-9">
                    {/* product load */}

                    <div className="row">

                        {
                            informations.map((information) => (<Information
                                 key={information.key}
                                information={information}
                                handleAddToCart={handleAddToCart}
                            />))
                        }

                    </div>


                </div>

                <div className="col-md-3">

                    {/*cart calculation */}

                    <Cart
                        cart={cart}
                    />
                </div>

            </div>

        </div>
    );
};

export default Universities;