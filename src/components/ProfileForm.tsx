import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setProfile } from "../redux/profileSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const profile = useSelector((state: RootState) => state.profile.data);

  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [age, setAge] = useState(profile?.age?.toString() || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || name.length < 3 || !/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid form. Ensure name must be at least 4 characters and email is valid.");
      return;
    }

    const updatedProfile = {
      name,
      email,
      age: age ? parseInt(age) : undefined,
    };

    dispatch(setProfile(updatedProfile));
    navigate("/profile");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Edit Profile</Typography>
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Save Profile
      </Button>
    </Box>
  );
}
