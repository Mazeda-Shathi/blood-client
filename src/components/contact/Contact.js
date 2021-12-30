import React from 'react';
import Navigation from '../Share/Navigation/Navigation';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <h2 className="mt-5 pt-5">Contact us</h2>

            <div className="d-flex justify-content-evenly">
                <div>
                    <strong> Address</strong>
                    <p>
                        <br /> City Office:-House-Khonik
                        <br />Holding-1158,Road-7
                        <br /> Boshundhara R/A.Halishahar
                        <br />Chaittagong</p>
                    <strong> Branch</strong>
                    <p>
                        <br /> Hathazari Office:Marjan villa,Beside Rail station,1no gate, <br />university of chittagong,4331 chittagong,<br />chittagong division,bangladesh
                        <br />Holding-1158,Road-7
                        <br /> Boshundhara R/A.Halishahar
                        <br />Chattogram</p>

                </div>
                <div>
                    <p>
                        <strong> Contact Information</strong><br />
                        Phone:01622-118800 <br />
                        Email:konikadcc@gmail.com
                        <br />Facebook:KANIKA (কণিকা-একটি রক্তদাতা সংগঠন)
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Contact;