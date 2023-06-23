import { Link } from "react-router-dom";

const TyAdd =()=>{
    return(
        <>
            <h2>Thank You</h2>
            <div className="button">
                <button type="submit"><Link to="/dashboard">Dashboard</Link></button>
            </div>
        </>
    );
}
export default TyAdd;