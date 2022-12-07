import MeetupItem from "./MeetupItem";

function MeetupList(props)
{
    return(
        <ul className="list-group">
            {props.meetups.map(meetup=>
            <MeetupItem 
                key={meetup.id} 
                id={meetup.id} 
                imgsrc={meetup.image} 
                title={meetup.title}
                address={meetup.address} 
                description={meetup.description}
            />)}
        </ul>
    );
}
export default MeetupList;