import { useState } from "react";

export const useModalProps = <T extends keyof any>(...modalNames: T[]) => {
  const [opens, setOpens] = useState({} as Record<T, boolean>);
  const onOpens = {} as Record<T, () => void>;
  const onCloses = {} as Record<T, () => void>;
  modalNames.forEach((modalName) => {
    onOpens[modalName] = () => {
      if (!opens[modalName]) {
        opens[modalName] = true;
        setOpens({ ...opens });
      }
    };
    onCloses[modalName] = () => {
      if (opens[modalName]) {
        opens[modalName] = false;
        setOpens({ ...opens });
      }
    };
  });
  return { opens, onOpens, onCloses };
};
