import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import {  useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOFRes, setListOfRes] = useState(resList);

    return listOFRes.length === 0 ?(<Shimmer/>) : (
        <div className="body">
            <div className="button-container">
                <div className='top-rated-res'>
                    <button className="top-rated-res-button"
                        onClick={() => {
                            const filteredRes = listOFRes.filter((res) => parseFloat(res.rating) > 4);
                            console.log(filteredRes);
                            setListOfRes(filteredRes);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="remove-filter">
                    <button className="remove-filter-button" onClick={() => { setListOfRes(resList) }
                    }>All Restaurants</button>
                </div>
            </div>
            <div className='res-container'>
                {
                    listOFRes.map((restaurant) => (
                        <Restaurant key={restaurant.id} resData={restaurant} />))
                }
            </div>
        </div>
    );
};

export default Body;