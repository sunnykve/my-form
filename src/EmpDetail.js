import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/employee" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>


            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>The Employee firstname is : <b>{empdata.firstname}</b>  ({empdata.id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {empdata.email}</h5>
                            <h5>Phone is : {empdata.phone}</h5>
                            <h5>Address1 is : {empdata.address1}</h5>
                            <h5>Address2 is : {empdata.address2}</h5>
                            <h5>Country is : {empdata.country}</h5>
                            <h5>State is : {empdata.state}</h5>
                            <h5>City is : {empdata.city}</h5>
                            <h5>Zipcode is : {empdata.zipcode}</h5>


                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}

export default EmpDetail;