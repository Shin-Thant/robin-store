import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const breakpoints = createBreakpoints({
    base: "300px",
    sm: "500px",
    middle: "570px",
    md: "650px",
    lg: "860px",
    xlg: "900px",
    xl: "1000px",
    "2xl": "1536px",
});

const theme = extendTheme({
    fonts: {
        barlow: "Barlow Condensed",
    },
    breakpoints,
});

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <ReactQueryDevtools initialIsOpen={true} />
                <App />
            </ChakraProvider>
        </Provider>
    </QueryClientProvider>,
    document.getElementById("root")
);
