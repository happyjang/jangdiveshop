import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

const CheckRoster = ({ quantity }) => {
    //const RoomArr = [];
    //const MaxRoom = 9
    const [RoomArr, changeRoomArr] = useState([1, 2, 3]);
    const [MaxRoom, changeMaxRoom] = useState(9);
    const [message, changeMessage] = useState('');

    //console.log("Room array: ", RoomArr.length)
    //console.log("Room Quantity: ", quantity)

    const CheckRoom = () => {
        //console.log("Room array: ", RoomArr.length)
        //console.log("Room Quantity: ", quantity)

        if (quantity <= Number(0)) {
            changeMessage('Please book at least 1 room!')
            return
        }
        let high = Number(RoomArr.length) + Number(quantity)
        //console.log("high: ", high)
        //console.log("MaxRoom: ", MaxRoom)
        console.log(RoomArr.length); //3

        if (high > Number(MaxRoom)) {
            changeMessage('Over limit of our available rooms now!');
        } else {
            changeMessage('Confirmed your booking!');
        }


    }


    return (
        <div className="container">


            <Button variant="contained" onClick={CheckRoom} color="primary">BOOK NOW !!!</Button>

            <br></br>
            <span style={{ color: 'red' }}>{message}</span>
        </div>
    )


}


export default CheckRoster