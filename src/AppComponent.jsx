import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Login from "./LoginReducer/Login";
import HomeGame from "./Memory Game/Selected";
import EventList from "./Modal/EventLIst";
// import TripList from "./component/tripList";
// import { Homepage } from "./foodApp/Home";
import Modal from "./Modal/Modal";
const AppComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState([
    {
      id: 1,
      event: "Christmas party at CHristmax villiage",
      date: "13th December, 2021",
    },
    {
      id: 2,
      event: "Xmas Carol at CPM Ojota",
      date: "16th December, 2021",
    },
    {
      id: 3,
      event: "Mama ikokore birthday",
      date: "25th December, 2021",
    },
    {
      id: 4,
      event: "Aunty Edna's house",
      date: "29th December, 2021",
    },
  ]);

  // function to show modal after three seconds of page loads

  const displayModal = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  };

  useEffect(() => {
    displayModal();

    return () => {};
  }, []);
  const handleDelete = (id) => {
    const updateEvent = (prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.id;
      });
    };
    setEvent(updateEvent);
  };

  return (
    <div>
      {/* <h1>Hello world</h1>
      <p>center cold </p>
      {/* To add a button to show the modal */}
      <EventList event={event} deleteEvent={handleDelete} />
      {!showModal && <button onClick={() => setShowModal(true)}>showAd</button>}
      {showModal && (
        <Modal hideShowModal={() => setShowModal(false)}>
          <h1>Buy my React course today reduced at 50%</h1>
          <p>Whata are you waiting for, get now!</p>
        </Modal>
      )}

      <Login />
      <HomeGame />
    </div>
  );
};
export default AppComponent;
