import logo from "./logo.svg";
import "./App.css";

import { Container, Grid, Card, Button } from "@material-ui/core";

function App() {
  // Strips the token ID from the URL after authentication.
  function getToken() {
    try{
    var idtoken = window.location.href;
    var idtoken1 = idtoken.split("=")[1];
    var idtoken2 = idtoken1.split("&")[0];
    var idtoken3 = idtoken2.split("&")[0];

    console.log("idToken1inside", idtoken1);
    console.log("idToken2inside", idtoken2);
    console.log("idToken3inside", idtoken3);

    return idtoken1, idtoken2, idtoken3;
    }
    catch{
      window.location.replace("https://unimelb-workshop.auth.ap-southeast-2.amazoncognito.com/login?client_id=7n23h039l14mpufg6lqch4m14c&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https://dv4qxgcj8blj8.cloudfront.net/");
    }
  }

  let idtoken1,
    idtoken2,
    idtoken3 = getToken();

    console.log('testing');
    console.log("idToken1", idtoken1);
    console.log("idToken2", idtoken2);
    console.log("idToken3", idtoken3);

  return (
    <Container>
      <br />
      <Grid container justifyContent="space-around">
        <Card>
          <Button>get authenticate</Button>
        </Card>
        <Card>
          <Button>after authenticate</Button>
        </Card>
      </Grid>
    </Container>
  );
}

export default App;
