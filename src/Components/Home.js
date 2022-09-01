import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config"; // update with your path to firestore config
import { doc, getDoc, updateDoc } from "firebase/firestore";
import profilePic from "./Profile.png";
import DataTable from "./Table";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Home() {
  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState(null);

  const getNote = async (id) => {
    const noteSnapshot = await getDoc(doc(db, "students", id));
    if (noteSnapshot?.exists()) {
      console.log(noteSnapshot.data());
      setUserData(noteSnapshot.data());
      return noteSnapshot.data();
    } else {
      console.log("Note doesn't exist");
    }
  };

  const updateNote = async () => {
    const noteRef = doc(db, "notes", uid);
    await updateDoc(noteRef, {
      description: "New description",
    });
  };
  //   updateNote(note);

  useEffect(() => {
    let userUid = sessionStorage.getItem("uid");

    getNote(userUid);

    setUid(userUid);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", top: "50px" }}>
        <div
          style={{ border: "1px solid black", width: 320 }}
          className="text-center"
        >
          <div>
            <img
              // src={profilePic}
              src={userData?.profilePicUrl}
              alt="profilepic"
              style={{ width: 250, height: 250 }}
            />
          </div>
          <div
            className="text-center"
            style={{
              margin: 10,
              borderBottom: "1px solid black",
              width: 250,
              fontWeight: "bold",
            }}
          >
            {userData?.name}
          </div>
          <div
            className="text-center"
            style={{
              margin: 10,
              borderBottom: "1px solid black",
              width: 250,
            }}
          >
            {userData?.branch}
          </div>
          <div
            className="text-center"
            style={{
              margin: 10,
              borderBottom: "1px solid black",
              width: 250,
            }}
          >
            {userData?.rollNo}
          </div>
          <div
            className="text-center"
            style={{
              margin: 10,
              width: 320,
              position: "relative",
              right: "35px",
            }}
          >
            {userData?.year}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 200, left: 400 }}>
        <DataTable feesDetails={userData?.feesDetails} />
      </div>

      <button
        className="btn"
        onClick={handleLogout}
        style={{
          marginLeft: "120px",
          position: "relative",
          left: "85%",
          bottom: "400px",
          backgroundColor: "#6b0303",
          color: "#fff",
          paddingLeft: "25px",
          paddingRight: "20px",
        }}
      >
        Log out
      </button>

      <Footer />
    </div>
  );
}
