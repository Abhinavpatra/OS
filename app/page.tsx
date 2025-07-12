import React from "react";
import {ProcessProvider} from "@/contexts/process";
import { type ReactElement } from "react";
import WindowManager from "@/components/system/WindowManager";

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
