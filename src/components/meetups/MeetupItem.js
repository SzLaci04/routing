import Card from "../ui/Card";

function MeetupItem(props) 
{
    return (
        <Card>
            <li className="list-group-item">
                <div>
                    <img src={props.imgsrc} alt={props.title} className="img-thumbnail w-25"/>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div>
                    <button className="btn btn-primary">To Favorites</button>
                </div>
            </li>
        </Card>
    );
}
export default MeetupItem;