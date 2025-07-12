import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import React, { type FC } from "react";
import { useProcesses } from "@/contexts/process";

const RenderComponent = dynamic(
  () => import("./Apps/RenderComponent")
);

const WindowManager: FC = () => {
  const { processes = {} } = useProcesses();

  return (
    <AnimatePresence initial={false} presenceAffectsLayout={false}>
      {Object.entries(processes).map(
        ([id, process]) =>
          id &&
          process?.Component &&
          process?.hasWindow && (
            <RenderComponent
              key={id}
              Component={process.Component}
              hasWindow={process.hasWindow}
              id={id}
            />
          )
      )}
    </AnimatePresence>
  );
};

export default WindowManager;
