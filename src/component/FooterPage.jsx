import React from "react";
import { MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import 'https://kit.fontawesome.com/a076d05399.js';

const FooterPage = () => {
  return (
    <MDBFooter color="info-color-dark" className="font-small pt-4 mt-4 test">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <p style={{paddingLeft: 5}}>
              Наш проект на <a style={{color: 'white'}} href='https://github.com/VladRyb/LookAtMe' target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;