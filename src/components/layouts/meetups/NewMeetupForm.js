import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react';

function NewMeetupForm(){
    const titleInputRef = useRef();
    const ImageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = ImageInputRef.current.value;
        const enteredaddress = addressInputRef.current.value;
        const entereddescription = descriptionInputRef.current.value;
        const meetupData = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredaddress,
            description:entereddescription,
        };
        console.log(meetupData);

    }
    return  <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required-id='title' ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required-id='image'ref={ImageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup Address</label>
                <input type='text' required-id='address'ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Meetup description</label>
                <textarea required-id='description'ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}
export default NewMeetupForm;