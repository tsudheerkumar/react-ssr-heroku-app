import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';


import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

// ...

app.get('/', (req, res) => {
      const indexFile = path.resolve('./build/index.html');
      let app = "loading";
      axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        .then((response) => {
            // console.log('the data', JSON.stringify(response.data));
            app = ReactDOMServer.renderToString( < App flights = {
                response.data
              }
              />);
              fs.readFile(indexFile, 'utf8', (err, data) => {
                const position = data.indexOf('<script id="data"></script>');
                data = [data.slice(0, position),`<script id="initial-data">Window=${JSON.stringify({flights:response.data})}</script>` , data.slice(position)].join('');
                return res.send(
                  data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                );
              });
            })
          .catch((error) => {
              console.log(error)
              fs.readFile(indexFile, 'utf8', (err, data) => {
                  if (err) {
                    console.error('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                  }
              });
          });


    });
    app.use(express.static('./build'));

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });