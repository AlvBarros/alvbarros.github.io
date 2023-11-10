import React from "react";

const Clock = () => {
  const comparativeOffset = 3;
  const currentOffset = new Date().getTimezoneOffset() / 60;
  const time = comparativeOffset - currentOffset;

  return (
    <section className="clock">
      {time != 0 && (
        <p>
          I am <br />
          <strong>
            {Math.abs(time)} hours
            {comparativeOffset > currentOffset ? " behind" : " ahead of"}
          </strong>
          <br />
          you!
        </p>
      )}
    </section>
  );
};

export default Clock;
