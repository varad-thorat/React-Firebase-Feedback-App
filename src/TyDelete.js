import { Link } from "react-router-dom";

const TyDelete =()=>{
    return(
        <>
            <h2>Deleted</h2>
            <div className="button">
                <button type="submit"><Link to="/dashboard">Dashboard</Link></button>
            </div>
        </>
    );
}
export default TyDelete;