export const LinkedInApi = {
  clientId: "77si3kcxh3yyzp",
  redirectUrl: "https://socialcoinproj.herokuapp.com/register",
  oauthUrl:
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code",
  scope: "r_liteprofile%20r_emailaddress",
  state: "123456",
};

//Dump Codes
/*
 
 const onGoogleSignIn = (user) => {
        let userCred = user.credential;
        let payload = jwt_decode(userCred);
        let userData = {
            name: payload.name,
            email: payload.email,
            profilePicture: payload.picture,
            googleId: payload.sub,
        };
        dispatch(login("google", userData));
        toast.success("Logged in successfully.");

    };

    useScript("https://accounts.google.com/gsi/client", () => {
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: onGoogleSignIn,
        });

        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline",
                size: "large",
                shape: "pill",
                text: "signin_with",
                context: "signin",
                width: "100%",
                logo_alignment: "center",
            }
        );

        window.google.accounts.id.prompt();
    });


    
                    <Grid item sx={12} md={12}>
                        <div id="signInDiv" />
                    </Grid>

*/
