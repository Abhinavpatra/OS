// This is for dynamically loading components in a Next.js application

import type { Processes } from "@/types/utils/processDirectory";
import dynamic from "next/dynamic";

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("@/components/apps/HelloWorld")),
    hasWindow: true,
  },
  // DOS:{
  //   Component: dynamic(() => import("@/components/apps/DOS")),
  //   hasWindow: true,
  // }
};

export default processDirectory;
