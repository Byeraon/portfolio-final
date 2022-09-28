import React from "react";

export const CursorContext = React.createContext({
  cursorTransition: { x: 0, y: 0 },
});

export const Provider = CursorContext.Provider;
