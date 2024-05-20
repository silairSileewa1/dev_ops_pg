import * as React from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function SignUp({ user }: { user: any }) {
  const navigate = useNavigate();
  const [isSignUpSuccess, setIsSignUpSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      username: data.get("username"),
      password: data.get("password"),
    };

    try {
      const response = await fetch(
        "https://fictional-space-enigma-rp6qq77vg5jfpq4j-8080.app.github.dev/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      setMessage(result);
      if (result === "Success!") {
        setIsSignUpSuccess(true)
        setTimeout(() => {
          navigate("/login")
        }, 5000)
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  };

  React.useEffect(() => {
    if (user) {
      navigate("/dashboard")
    }
  }, [user]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {isSignUpSuccess && (
          <div style={{ display: "flex", alignItems: "center", gap: "20px",color: "green", borderRadius: "4px", border: "1px solid whitesmoke", backgroundColor: "rgb(40 177 29 / 39%)", padding: "4px 12px", marginTop: "2rem" }}>
            <div><CheckCircleIcon /></div>
            <div><Typography variant="h6">
              Account created successfully!
            </Typography>
            <Typography variant="subtitle1">
              Redirecting to login page...
            </Typography></div>
            
          </div>)}
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="user-name"
                  name="username"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          {message && <div>{message}</div>}
        </Box> 
    </Container>
  );
}
