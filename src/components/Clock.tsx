import React from "react";

const Clock = () => {
  const comparativeOffset = 3;
  const currentOffset = new Date().getTimezoneOffset() / 60;
  const time = comparativeOffset - currentOffset;

  return (
    <>
      {time != 0 && (
        <section className="Clock">
          <h1> My timezone </h1>
          <h3>
            {`I am ${Math.abs(time)} hours ${
              comparativeOffset > currentOffset ? " behind " : " ahead of "
            } you`}
          </h3>
          <span className="my-timezone"> BRT Brasília Time : UTC -3 </span>
        </section>
      )}
    </>
  );
};

export default Clock;
