import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';

import Image1 from '../images/logo.jpeg';
import Image2 from '../images/logo.jpeg';
import Image3 from '../images/logo.jpeg';


const groupCard = (props) => {
  return (
    <CardGroup>

      <Card>
        <CardImg top width="100%" src={Image1} alt="Card image cap"  style={{ width: '100%', height: '200px' }} />
        <CardBody>
          <CardTitle tag="h5"> Aqui va el titulo </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> Aqui un subtitulo </CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className='btn btn-success' > Ver mas... </Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src={Image2} alt="Card image cap" style={{ width: '100%', height: '200px' }} />
        <CardBody>
          <CardTitle tag="h5"> Aqui va el titulo </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> Aqui un subtitulo </CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button className='btn btn-success' > Ver mas... </Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src={Image3} alt="Card image cap" style={{ width: '100%', height: '200px' }} />
        <CardBody>
          <CardTitle tag="h5"> Aqui va el titulo </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> Aqui un subtitulo </CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className='btn btn-success' > Ver mas... </Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src={Image3} alt="Card image cap" style={{ width: '100%', height: '200px' }} />
        <CardBody>
          <CardTitle tag="h5"> Aqui va el titulo </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> Aqui un subtitulo </CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className='btn btn-success' > Ver mas... </Button>
        </CardBody>
      </Card>

    </CardGroup>
  );
};

export default groupCard;