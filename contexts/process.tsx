import processDirectory from "@/utils/processDirectory";
import { createContext, type FC } from "react";

const processContext = createContext({});

const ProcessLoader: FC = () => {
  return (
    <>
      {Object.entries(processDirectory).map(([id, { Component }]) => (
        <Component key={id} />
      ))}
    </>
  );
};
