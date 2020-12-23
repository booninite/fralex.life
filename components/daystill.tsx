import Countdown from "react-countdown";

const JustMarried = () => <p>~*~ just married ~*~</p>;

const counter = (unit: number, sUnit: string) =>
  <p>
    {unit} {sUnit} to go!
  </p>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <JustMarried />;
  } else if (days > 1) {
    return counter(days, "days");
  } else if (hours > 1) {
    return counter(hours, "hours");
  } else if (minutes > 1) {
    return counter(minutes, "minutes");
  } else {
    return counter(seconds, "seconds");
  }
};

function DaysTill() {
  return (
    <div>
      <Countdown
        className="countdown"
        renderer={renderer}
        date={new Date("Dec 24, 2020 14:00:00 ET").getTime()}
      />
    </div>
  );
}

export default DaysTill;
