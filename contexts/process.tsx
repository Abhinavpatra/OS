"use client";
import type { FC } from 'react';
import React from 'react';
import { createContext, useState, useContext } from 'react';
import type { Processes } from '@/types/utils/processDirectory';
import processDirectory from "@/utils/processDirectory"

type ProcessContextState = {
  processes: Partial<Processes>;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const useProcesses = () => useContext(ProcessContext);

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize processes from the processDirectory
  // This allows for dynamic loading of components based on the directory structure
  // and ensures that the processes are available throughout the application.
  // The useState hook is used to manage the state of processes.
  // This is particularly useful for applications that require dynamic imports
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
