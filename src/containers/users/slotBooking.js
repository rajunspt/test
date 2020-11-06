import React, { useEffect, useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userService } from '../../services/userServices';

function SlotBooking({ match }) {
    //Initial Variables
    const { id } = match.params;
    const localizer = momentLocalizer(moment)

    //State Variables
    const [user, setUser] = useState({});
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        // get user data by Id
        userService.getById(id).then(user => {
            setUser(user);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title) {
            const updatedEventsData = [
                ...eventsData,
                {
                    start,
                    end,
                    title,
                },
            ];
            setEventsData(updatedEventsData);
        }
    }

    const handleSave = () => {
        const postData = {};
        postData.userId = user.id;
        postData.startDate = eventsData[0].start;
        postData.endDate = eventsData[0].end;
        userService.create(postData,id).then(data => {
            toast.success("Record saved successfully", { hideProgressBar: true, autoClose: 2000 });

        });

    }
    console.log(eventsData);
    return (
        <div>
            <ToastContainer />
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label bold">Id : {user.id}</label>
                            <label className="col-sm-3 col-form-label bold">First Name : {user.first_name}</label>
                            <label className="col-sm-3 col-form-label bold">Last Name : {user.last_name}</label>
                            <label className="col-sm-3 col-form-label bold">Email : {user.email}</label>
                        </div>
                    </form>
                </div>
            </div>
            <br></br>
            <div>
                <Calendar
                    selectable
                    localizer={localizer}
                    events={eventsData}
                    defaultView={Views.WEEK}
                    defaultDate={new Date()}
                    onSelectSlot={handleSelect}
                />
            </div>
            <div className="row mt-4 mb-4">
                <div className="col col-md-12 d-flex flex-row-reverse">
                    <button type="button" className="btn btn-secondary btn-sm ml-1 mr-2 width-7">Reset</button>
                    <button type="button" className="btn btn-primary btn-sm ml-2 width-8" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default SlotBooking;