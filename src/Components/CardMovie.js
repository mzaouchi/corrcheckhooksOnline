import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const CardMovie=({el})=>{
    const [show, setShow] = useState(false)
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.posterURL} style={{width : "287px" , height :'407px'}} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {
                        show  ? el.description : el.description.substring(0,50)
                    }
                    <button className={show ? 'buttShowLess' : 'buttShowMore'} onClick={()=> setShow(!show)}>{show ? "Show less" : "Show more ..."}</button>
                {/* {el.description} */}
                </Card.Text>
                <Rating name="read-only" value={el.rating} readOnly />
            </Card.Body>
        </Card>
    )
}

export default CardMovie