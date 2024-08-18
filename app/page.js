import Image from "next/image";
import getStripe from "./utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS </title>
        <meta
          name="description"
          content="create flashcard from your text"
        ></meta>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flashcard SaaS </Typography>
          <SignedOut>
            <button color="inherit" href="/sign-in">
              Login{" "}
            </button>
            <button color="inherit" href="/sign-up">
              Sign Up{" "}
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2">Welcome to Flashcard SaaS </Typography>
        <Typography variant="h5" gutterBottom>
          The easiest way to make flashcards from your text
        </Typography>
        <button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h2" components="h2" gutterBottom>
          Features
        </Typography>
        <Grid spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input{" "}
            </Typography>
            <Typography>
              Simply Input your text and let our app do the rest. Creating
              flashcards has never been easier
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards{" "}
            </Typography>
            <Typography>
              Our Software breaks down your text into concise flashcards,
              perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere{" "}
            </Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Basic{" "}
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month{" "}
              </Typography>

              <Typography>
                Access to basic flashcard features and limited storage.
              </Typography>
              <button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose basic
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Box
            sx={{
              p: 3,
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Pro{" "}
            </Typography>
            <Typography variant="h6" gutterBottom>
              $10 / month{" "}
            </Typography>

            <Typography>
              Unlimited flashcards and storage, with priority support.
            </Typography>
            <button variant="contained" color="primary" sx={{ mt: 2 }}>
              Choose Pro
            </button>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
