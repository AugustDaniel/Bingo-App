import React from "react";

export const DrawContext = React.createContext({});

export const useDrawContext = () => {
    const drawContext = React.useContext(DrawContext);
    if (DrawContext === undefined) {
        throw new Error('Not inside a provider for DrawContext');
    }
    return drawContext;
};