import logo from './logo.svg';
import './App.css';

import {
	Container,
	Grid,
	Card,Button
} from "@material-ui/core";


function App() {
  return (
    <Container>
      <br/>
      <Grid container justifyContent='space-around'>
        <Card><Button>get authenticate</Button></Card>
          <Card><Button>after authenticate</Button></Card>
      </Grid>
    </Container>
  );
}

export default App;
