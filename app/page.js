import Image from "next/image";
import getStripe from "./utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
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
            <button color="inherit">Login </button>
            <button color="inherit">Sign Up </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2">Welcome to Flashcard SaaS </Typography>
        <Typography variant="h5">
          The easiest way to make flashcards from your text
        </Typography>
        <button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </button>
      </Box>
    </Container>
  );
}
