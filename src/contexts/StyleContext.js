import React, {createContext} from "react";

const StyleContext = createContext();

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
