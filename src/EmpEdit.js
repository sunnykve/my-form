import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Country from "./Components/Country";
import Phone from "./Components/Phone";

const EmpEdit = () => {
    const { empid } = useParams();



    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            firstnamechange(resp.firstname);
            lastnamechange(resp.lastname);
            emailchange(resp.email);
            phonechange(resp.phone)
            address1change(resp.address1);
            address2change(resp.address2);
            countrychange(resp.country);
            zipcodechange(resp.zipcode);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [firstname, firstnamechange] = useState("");
    const [lastname, lastnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address1, address1change] = useState("");
    const [address2, address2change] = useState("");
    const [country, countrychange] = useState("");
    const [zipcode, zipcodechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, firstname, lastname, email, address1, address2, zipcode, active };


        fetch("http://localhost:3000/employee" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input required value={firstname} onMouseDown={e => valchange(true)} onChange={e => firstnamechange(e.target.value)} className="form-control"></input>
                                            {firstname.length === 0 && validation && <span className="text-danger">Enter the firstname</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input value={lastname} onChange={e => lastnamechange(e.target.value)} className="form-control"></input>
                                            {lastname.length === 0 && validation && <span className="text-danger">Enter the last name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            {email.length === 0 && validation && <span className="text-danger">Enter the email</span>}
                                        </div>
                                    </div>


                                    <label>Phone</label>

                                    <Phone />

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Address1</label>
                                            <input value={address1} onChange={e => address1change(e.target.value)} className="form-control"></input>
                                            {address1.length === 0 && validation && <span className="text-danger">Enter the Address1</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Address2</label>
                                            <input value={address2} onChange={e => address2change(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <Country />

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Zip code</label>
                                            <input value={zipcode} onChange={e => zipcodechange(e.target.value)} className="form-control"></input>
                                            {zipcode.length === 0 && validation && <span className="text-danger">Enter the zipcode</span>}

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpEdit;