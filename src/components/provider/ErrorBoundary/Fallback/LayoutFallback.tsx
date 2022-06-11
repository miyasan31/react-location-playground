import type { FC } from "react";

// import { useNavigate } from "react-router-dom";
import type { ErrorFallbackProps } from "./ErrorFallbackProps";

export const LayoutFallback: FC<ErrorFallbackProps> = ({ error }) => {
  // const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  return (
    <div role="alert">
      <p>エラーが発生しました。</p>
      <p>{error.message}</p>
      {/* <button onClick={handleGoBack}>戻る</button> */}
    </div>
  );
};
