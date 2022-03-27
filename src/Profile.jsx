import React, {useEffect, useState} from 'react';
import instance from "./api";

const Profile = () => {
    const [myProfile,setMyProfile] = useState(null)

    useEffect(()=>{
        instance.get('/auth/me',{ headers: {"x-auth-token": localStorage.getItem('x-auth-token')}})
            .then((res) => {
                setMyProfile(prevState => prevState = res.data)
            })
    },[])

    console.log(myProfile)

    return (
        <div>
            {myProfile &&<div>
                <img src={myProfile.myPhotos[0].photo} />
                <h4><b>FirstName</b> : {myProfile.firstName}</h4>
                <h4><b>LastName</b> : {myProfile.lastName}</h4>
                <h4><b>email</b> : {myProfile.email}</h4>
                <h4><b>city</b> : {myProfile.city}</h4>
                <h4><b>work place</b> : {myProfile.workPlace}</h4>
                <h4><b>aboutMe</b> : {myProfile.aboutMe}</h4>
                <h4><b>aboutMe</b> : {myProfile.aboutMe}</h4>
            </div>}
        </div>
    );
};

export default Profile;