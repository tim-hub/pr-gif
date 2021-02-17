import React, { useState } from 'react';
import './App.css';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Carousel } from "@giphy/react-components";
import { Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function randomInteger(min=0, max=1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// @ts-ignore
function GridDemo() {
  const fetchGifs = (offset: number) =>
    giphyFetch.search("technology xero github git", { offset: randomInteger(offset), limit: 5 });
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <Grid
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
}

function CarouselDemo() {
  const fetchGifs = () =>
    giphyFetch.search("technology xero github git", { offset: randomInteger(), limit: 5 });
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />;
}

function App() {
  return (
    <div className="App">
      <h4>Random PR Gif</h4>
      <GridDemo />
    </div>
  );
}

export default App;
