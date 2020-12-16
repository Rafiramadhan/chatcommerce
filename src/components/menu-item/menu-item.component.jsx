import React from "react";
import { Button, InteractiveCard, Box, Text, Heading } from "@aksara-ui/core";

import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
    {/* <InteractiveCard image={`${imageUrl}`}>
      
      <Box p="lg">
        <Heading scale={400}>{`${title.toUpperCase()}`}</Heading>
      </Box>
      <Box p="lg" pt={0}>
        <Text scale={200} color="grey07">
          A secure runtime for JavaScript and TypeScript
        </Text>
      </Box>
    </InteractiveCard> */}
  </div>
);

export default withRouter(MenuItem);
