import type { FC } from 'react';
import { createContext, useState, useContext } from 'react';
import type { Processes } from '@/types/utils/processDirectory';
import processDirectory from "@/utils/processDirectory"

type ProcessContextState = {
  processes: Partial<Processes>;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const useProcesses = () => useContext(ProcessContext);

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
