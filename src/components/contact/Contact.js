import React from 'react';
import Navigation from '../Share/Navigation/Navigation';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <h2 className="mt-5 pt-5">Contact us</h2>

            <div className="d-flex justify-content-evenly">
                <div>
                    <strong> Physical & Mailing Address</strong>
                    <p>Konika Blood Donation Organization
                        <br /> National Headquarters
                        <br />684-686, Red Crescent Sarak
                        <br /> Bara Maghbazar, Dhaka 1217
                        <br /> Postal Address: G.P.O. Box 579</p>
                </div>
                <div>
                    <p>
                        <strong> Contact Information</strong><br />
                        Tel: (880) +88 02 48310188 / +88 02 48310189; <br />
                        Fax: +88 02 9352303 <br />
                        Email: info@bdrcs.org
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Contact;