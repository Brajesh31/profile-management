import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { clearProfile } from "../redux/profileSlice";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProfileDisplay() {
  const profile = useSelector((state: RootState) => state.profile.data);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      dispatch(clearProfile());
      navigate("/profile-form");
    }
  };

  if (!profile) {
    return <Typography>No profile found. Please create one.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Profile Details</Typography>
      <Typography>Name: {profile.name}</Typography>
      <Typography>Email: {profile.email}</Typography>
      {profile.age && <Typography>Age: {profile.age}</Typography>}
      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={() => navigate("/profile-form")} sx={{ mr: 2 }}>
          Edit Profile
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete Profile
        </Button>
      </Box>
    </Box>
  );
}
