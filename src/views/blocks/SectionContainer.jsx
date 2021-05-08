import classNames from "classnames";

export const SectionContainer = ({ className, children }) => {
  const classes = classNames("bg-white p-4 rounded-md shadow-sm ", className);
  return (
    <div style={{ minHeight: "4rem" }} className={classes}>
      <div>{children}</div>
    </div>
  );
};
