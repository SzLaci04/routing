import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage()
{
    async function addMeetup(meetupData)
    {
        let eredmenyek= await fetch("https://react-tutorial-szlaci04-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
            method:"POST",
            body:JSON.stringify(meetupData),
            headers:
            {
                "Content-Type":"application/json"
            }
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