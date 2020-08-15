import React, { useState } from "react";
import { withRouter } from "react-router";

import { Jutsu } from "react-jutsu";
import { setBypass } from "../../actions";

import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";

const VideoCalling = ({ history }) => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  const goBack = () => {
    setBypass(false);
    history.push("/");
    console.log("working", history);
  };

  return call ? (
    <Jutsu
      roomName={room}
      displayName={name}
      password={password}
      onMeetingEnd={() => goBack()}
      loadingComponent={<p>loading ...</p>}
      containerStyles={{ width: "100vw", height: "100vh" }}
    />
  ) : (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="blue" textAlign="center">
          <Icon name="video" color="blue" />
          Enter Room Info
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              id="room"
              icon="warehouse"
              iconPosition="left"
              placeholder="Room"
              onChange={(e) => setRoom(e.target.value)}
              value={room}
              type="text"
            />

            <Form.Input
              fluid
              id="name"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
            />

            <Form.Input
              fluid
              id="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password (optional)"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />

            <Button
              color="blue"
              fluid
              size="large"
              onClick={handleClick}
              type="submit"
            >
              Start / Join
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(VideoCalling);
