/* eslint-disable react/prop-types */

const Wrapper = ({ children, styles }) => {
  return (
    <div className={`max-w-[700px] m-auto w-[92vw] h-full ${styles}`}>
      {children}
    </div>
  );
};

export default Wrapper;
