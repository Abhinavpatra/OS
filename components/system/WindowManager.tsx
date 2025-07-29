"use client";
import { AnimatePresence } from "framer-motion";
import React, { type FC } from "react";
import { useProcesses } from "@/contexts/process";

const WindowManager: FC = () => {
  const { processes = {} } = useProcesses();

  return (
    <AnimatePresence initial={false} presenceAffectsLayout={false}>
      {Object.entries(processes).map(
        ([id, process]) =>
          id &&
          process?.Component &&
          process?.hasWindow && (
            <process.Component key={id} />
          )
      )}
    </AnimatePresence>
  );
};

export default WindowManager;
