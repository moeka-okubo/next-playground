import { memo } from "react";

const CommonStyles = () => {
  return (
    <style jsx global>{`
      .common-style-test {
        color: red;
        font-weight: bold;
        font-size: 20px;
      }
    `}</style>
  );
};

export default memo(CommonStyles);
