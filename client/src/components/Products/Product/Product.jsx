import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({id, data}) => {
    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={() => navigate("/product/" + id)}> 
            {
                data && (
                    <>
                        <div className="thumbnail">
                            {data && data.img && data.img.data && data.img.data[0] && data.img.data[0].attributes && (
                                <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
                            )}
                        </div>
                        <div className="prod-details">
                            <span className="name">{data && data.title}</span>
                            <span className="price">&#8377;{data && data.price}</span>                
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Product;
