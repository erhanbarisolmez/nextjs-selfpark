"use client";
import InputComponent from "@/components/InputComponent";
import { useThemeHook } from "@/hooks/useThemeHook";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Authenticate from "../../../../api/Auth";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getThemeStyles } = useThemeHook();
  const {
    backgroundColor,
    buttonColor,
    textColor,
    linkColor,
    leftColorBg,
    logoColor,
    whiteColor,
  } = getThemeStyles();



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      console.error("email and password are required");
      return;
    }

    const auth = new Authenticate();
    await auth.loginUser(email, password);

  };

  return (
    <Card
      size="lg"
      variant="solid"
      orientation="horizontal"
      sx={{
        textAlign: "center",
        maxWidth: "100%",
        width: 800,
        resize: "vertical",
        overflow: "auto",
        color: textColor,
        backgroundColor: backgroundColor,
      }}
    >
      <CardOverflow
        variant="solid"
        sx={{
          flex: "0 0 200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: "var(--Card-padding)",
          backgroundColor: leftColorBg,
        }}
      >
        <AspectRatio
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
          }}
        >
          <Box>
            <Image
              src="/images/stlogo.png"
              layout="responsive"
              width={300}
              height={300}
              alt="logo"
            />
          </Box>
        </AspectRatio>
        <Typography
          variant="plain"
          level="body-xs"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
            color: whiteColor,
          }}
        >
          Discover Our Digital Intelligence Based Parking Solutions
        </Typography>
      </CardOverflow>

      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <form onSubmit={handleSubmit} method="POST">
          <Grid sx={{ color: logoColor }}>
            LOGIN
            <InputComponent
              name="email"
              value={email}
              variant={"outlined"}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <InputComponent
              name="password"
              value={password}
              variant={"outlined"}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </Grid>

          {/* LOGIN BUTTON */}
          <Button
            type="submit"
            variant="outlined"
            sx={{
              "--variant-borderWidth": "2px",
              borderRadius: 40,
              borderColor: "primary.500",
              mx: "auto",
              color: buttonColor,
              mt:3
            }}
          >
            Login
          </Button>
        </form>

        <CardContent sx={{ color: textColor }}>
          <Typography level="title-lg" color={textColor}>
            Not Registered?
          </Typography>
          <Typography fontSize="sm" sx={{ mt: 0.5, color: textColor }}>
            <Link
              href="dashboard"
              style={{ textDecoration: "none", color: linkColor }}
            >
              Register Now
            </Link>
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
