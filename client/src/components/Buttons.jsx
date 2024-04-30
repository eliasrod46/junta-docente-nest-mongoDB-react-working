const MEASURES =
  "px-3 py-1.5 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center me-2 mb-2";

const COLORS = (color) => {
  return `text-${color}-700 hover:text-white border-${color}-700 hover:bg-${color}-800 dark:border-${color}-500 dark:text-${color}-500 dark:hover:text-white dark:hover:bg-${color}-500 dark:focus:ring-${color}-800 focus:ring-${color}-300`;
};

export const InfoButton = ({ children, clickHandler }) => {
  const color = "blue";
  const colors = COLORS(color);
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, clickHandler }) => {
  const color = "gray";
  const colors = COLORS(color);
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const SuccessButton = ({ children, clickHandler }) => {
  const color = "green";
  const colors = COLORS(color);

  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const DangerButton = ({ children, clickHandler }) => {
  const color = "red";
  const colors = COLORS(color);
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const WarningButton = ({ children, clickHandler }) => {
  const color = "yellow";
  const colors = COLORS(color);

  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const PurpleButton = ({ children, clickHandler }) => {
  const color = "purple";
  const colors = COLORS(color);

  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};
