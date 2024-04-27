"use client";

import { ReactNode, useEffect, useState } from "react";

interface ClientonlyProps {
  children: ReactNode;
}

function ClientOnly({ children }: ClientonlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div>{children}</div>;
}

export default ClientOnly;
