import MeetupList from "../components/meetups/MeetupList";
import { useState,useEffect } from "react";

function AllMeetupsPage()
{
  const [isLoading,setIsLoading]=useState(true);
  const [loadedMeetups,setLoadedMeetups]=useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch('https://react-tutorial-szlaci04-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
    .then(response=>{return response.json();})
    .then(data=>{
      const meetups=[];
      console.log(data);
      for(const key in data)
      {
        const meetup={
          id:key,
          ...data[key] 
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
      console.log(meetups)
    });
  },[]);

  if(isLoading)
  {
    return <section><p>Loading...</p></section>
  }

    return <section className="mb-1 w-100">
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>;

}
export default AllMeetupsPage;