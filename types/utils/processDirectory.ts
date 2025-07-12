import type { ComponentType } from "react";

export type Process = {
  Component: ComponentType;
  hasWindow: boolean;
  closing?: boolean;
};

export type Processes = {
  [id: string]: Process;
};
