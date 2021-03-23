import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalVideo = (props) => {

  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle} style={{ color:'black', fontWeight:'bold', }} > {buttonLabel} </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} > Tres dias-Tres noches </ModalHeader>
        <ModalBody>
          
            <div style={{ display:'block', height:'240px'}}>
                <img src="../Images/img1.jpg" style={{ width:"100%", height:"80px", }} />
                <p style={{ width:"100%", height:"130px", margin: '3px' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>

            <div  style={{ width:"460px", height:"250px", }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vvLyTOa5NBg" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
            </div>

        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default ModalVideo;