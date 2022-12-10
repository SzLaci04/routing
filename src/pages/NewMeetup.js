import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate} from "react-router-dom";

function NewMeetupsPage()
{
    const navigate=useNavigate();
    async function addMeetup(meetupData)
    {
        fetch("https://react-tutorial-szlaci04-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
            method:"POST",
            body:JSON.stringify(meetupData),
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        .then(()=>{
            navigate("/");
        });
        
    }
    return (
        <div>
            <h3>Add New Meetup</h3>
            <NewMeetupForm onAddMeetup={addMeetup}/>
        </div>
    );
}
export default NewMeetupsPage;