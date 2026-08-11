import { useEffect, useState } from "react";
import { ScrollTrigger } from "../lib/gsap";

export function useScrollSpy(ids: string[], resetKey: string) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const triggers = ids
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;

        return ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveId(id),
          onEnterBack: () => setActiveId(id),
        });
      })
      .filter((trigger): trigger is ScrollTrigger => trigger !== null);

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, ids.join(",")]);

  return activeId;
}
