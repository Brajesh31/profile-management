import React from "react";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearProfile } from "../redux/profileSlice";

const ProfilePage = () => {
  const profile = useSelector((state: RootState) => state.profile.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete your profile?");
    if (confirmed) {
      dispatch(clearProfile());
    }
  };
  if (!profile) {
    return (
      <Typography variant="h6">
        No profile found. Please create one.
      </Typography>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Profile Details
      </Typography>
      <Typography>Name: {profile.name}</Typography>
      <Typography>Email: {profile.email}</Typography>
      {profile.age && <Typography>Age: {profile.age}</Typography>}

      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/profile-form")}
        >
          Edit Profile
        </Button>
        <Button variant="outlined" sx={{ marginLeft: "8px" }} color="error" onClick={handleDelete}>
        Delete Profile
      </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
