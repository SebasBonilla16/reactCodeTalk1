//Q.6  Here’s an example node server that sends a 302 status code for <Redirect>s and regular HTML for other requests Please Explain how  <Redirect> works : 

import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

http
    .createServer((req,res) => {
        // This context object contains the results of the render
        const context = {};
        // Render the React application to a string
        const html = ReactDOMServer.renderToString{
            <StaticRouter location={req.url} context={context}>
            <App />
            </StaticRouter>
        };

        // If a <Redirect> component triggered redirection, context.url will be set
        if (context.url){
            // Send a 302 status code with the new location for redirection
            res.writeHead(302, {
                Location: context.url
            });
            res.end();
        } else {
            // Send the rendered HTML as the response for other requests
            res.write(html);
            res.end();
        }
    })
    .listen(3000);