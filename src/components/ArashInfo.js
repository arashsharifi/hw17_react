import "../components/ArashInfo.css";
function ArashInfo(props) {
  return (
    <div className="container-myself">
      <p className="info-txt-myselft">
        hello my name is {props.name} and my lastName is {props.lastName} I live
        in krj city my age is {props.age} My job in the future is {props.job}
      </p>
    </div>
  );
}
export default ArashInfo;
