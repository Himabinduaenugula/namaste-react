import { CDN_URL } from "../utils/constants"

const Restaurant = (props) => {
    const { resData } = props;
    const {
        resName,
        menu,
        deliverytime,
        rating,
        assetId
    } = resData;
    return (
        <div className="res-card">
            <img
                className="res-image" alt="food"
                src={CDN_URL+assetId}
            />
            <h3 className="res-name">{resName}</h3>
            <h3 className="res-menu">{menu}</h3>
            <h3 className="res-deliverytime">{deliverytime}</h3>
            <h3 className="res-rating">{rating} </h3>
        </div>
    )
};

export default Restaurant;