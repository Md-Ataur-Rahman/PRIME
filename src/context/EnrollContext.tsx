import { createContext, useContext, useState, type ReactNode } from "react";

type EnrollContextValue = {
  openEnroll: (track?: string) => void;
};

const EnrollContext = createContext<EnrollContextValue>({
  openEnroll: () => {},
});

export function useEnroll() {
  return useContext(EnrollContext);
}

export function EnrollProvider({
  children,
  onOpen,
}: {
  children: ReactNode;
  onOpen: (track?: string) => void;
}) {
  return (
    <EnrollContext.Provider value={{ openEnroll: onOpen }}>{children}</EnrollContext.Provider>
  );
}

export function useEnrollState() {
  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState("Scholar");
  const openEnroll = (next?: string) => {
    if (next) setTrack(next);
    setOpen(true);
  };
  return { open, setOpen, track, setTrack, openEnroll };
}
