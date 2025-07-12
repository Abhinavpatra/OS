import { type FC, ComponentType } from "react";

interface RenderComponentProps {
  Component: ComponentType<any>;
  hasWindow: boolean;
  id: string;
}

const RenderComponent: FC<RenderComponentProps> = ({ Component, hasWindow, id }) => {
  return <Component id={id} hasWindow={hasWindow} />;
};

export default RenderComponent;
