export const Screen = ({
  styles,
  padding,
  children,
  center,
}: {
  styles?: string;
  padding?: boolean;
  center?: boolean;
  children: JSX.Element;
}) => {
  return (
    <div className={`h-full ${styles} ${padding ? "p-4 md:p-20" : ""}`}>
      <div
        className={`w-11/12 mx-auto lg:w-10/12 ${
          center ? "flex justify-center" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
