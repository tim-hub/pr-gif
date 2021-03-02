import React, { useState } from 'react';
import './App.css';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";
import { IGif } from '@giphy/js-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function randomInteger(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// @ts-ignore
export const GifGrid = () => {
  const fetchGifs = (offset: number) =>
    giphyFetch.search("technology xero github git", {offset: randomInteger(offset), limit: 5});
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grid
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
        noLink={true}
        borderRadius={2}
        onGifClick={(gif: IGif, e: any) => {
          const theUrl = gif.images.original.url;
          navigator.clipboard.writeText(theUrl);
          toast('🦄 Gif Url Copied!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      />
      <ResizeObserver
        onResize={({width}) => {
          setWidth(width);
        }}
      />
    </>
  );
}
