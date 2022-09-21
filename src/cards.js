import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './cards.css'
function Cards() {
  return (
   
<>
    <div className="HotSchool">
    <div className="sTitle">
        <div className="titleBox">
            <div className="dotLeft">
                </div>
                <div className="dotRight">
                    </div>Popular study abroad countries</div>
    </div>
    
   
    
    <CardGroup>
    <Card className="bg-dark text-white">
   
      <Card.Img src="https://media.istockphoto.com/photos/outside-of-logistics-retail-warehouse-with-inventory-manager-using-picture-id1340887706?b=1&k=20&m=1340887706&s=170667a&w=0&h=2ur1-eBZeLkTJzEqwlxVAxKT2cVppfChT7KpMPPgGJ8=" alt="Card image" />
      <Card.ImgOverlay>
       
        <Card.Text>
         flight
        </Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
   
      <Card.Img src="https://media.istockphoto.com/photos/happy-truck-driver-picture-id1272130824?k=20&m=1272130824&s=612x612&w=0&h=lndWXRTjjCnI8dcnyOkQQVeBWerCRB9HmqcVKdZ0dHk=" alt="Card image" />
      <Card.ImgOverlay>
        
        <Card.Text>
          delivery
        </Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white">
   
   <Card.Img src="https://media.istockphoto.com/photos/delivery-biker-arriving-at-destination-motogirl-picture-id1253501430?k=20&m=1253501430&s=612x612&w=0&h=Mo1N5Z7ASyuQwICZG0tH9UJHVoARmhCri3fuqMwqYrU=" alt="Card image" />
   <Card.ImgOverlay>
     
     <Card.Text>
      driving
     </Card.Text>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.ImgOverlay>
 </Card>
 <Card className="bg-dark text-white">
   
   <Card.Img src="https://media.istockphoto.com/photos/black-man-holding-mobile-phone-with-delivery-tracking-app-picture-id1297623001?k=20&m=1297623001&s=612x612&w=0&h=P2jRItS1VU-mElFzR8j_ILLHWo0JO-TYiJNA7Ppfzvs=" alt="Card image" />
   <Card.ImgOverlay>
     
     <Card.Text>
       cargo
     </Card.Text>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.ImgOverlay>
 </Card>
 



</CardGroup>
<div class="HomeButton">
  <a href="/StudyAbroad/">see more</a>
  </div>
  </div>
</> 

  );
}

export default Cards;