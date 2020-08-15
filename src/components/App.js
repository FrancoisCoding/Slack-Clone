import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";
import { setBypass } from "../actions";

import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import VideoCalling from "./VideoCalling/VideoCalling";

import { Icon, Header } from "semantic-ui-react";

// prettier-ignore
const App = ({ currentUser, currentChannel, isPrivateChannel, userPosts, primaryColor, secondaryColor, history }) => {
    const callRoute = () => {
      setBypass(true);
      history.push("/video");
    };
  return (
  <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
    <ColorPanel
      key={currentUser && currentUser.name}
      currentUser={currentUser}
    />
    <SidePanel
      key={currentUser && currentUser.uid}
      currentUser={currentUser}
      primaryColor={primaryColor}
    />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel
        key={currentChannel && currentChannel.name}
        userPosts={userPosts}
        currentChannel={currentChannel}
        isPrivateChannel={isPrivateChannel}
      />
      <Header as="h2" onClick={callRoute} className='cursor'>
              <Icon name="video" />
              <Header.Content>Video Calling</Header.Content>
      </Header>
    </Grid.Column>
  </Grid>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor,
});

export default connect(mapStateToProps)(App);
