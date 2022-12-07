import Card from "../ui/Card";
import "./NewMeetupForm.module.css";
import{useRef}from "react";
import MeetupItem from "./MeetupItem";

function NewMeetupForm(props)
{
    const titleRef=useRef();
    const imgRef=useRef();
    const addressRef=useRef();
    const descRef=useRef();

    function sumbitHandler(event)
    {
        event.preventDefault();
        const enteredTitle=titleRef.current.value;
        const enteredImg=imgRef.current.value;
        const enteredAddress=addressRef.current.value;
        const enteredDesc=descRef.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImg,
            address:enteredAddress,
            description:enteredDesc
        };

        props.onAddMeetup(meetupData);
    }

    return(
        <Card>
            <form onSubmit={sumbitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" required id="title" className="form-control" ref={titleRef}/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id="image" className="form-control" ref={imgRef}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" className="form-control" ref={addressRef}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" className="form-control" rows="5" ref={descRef}/>
                </div>
                <div>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;