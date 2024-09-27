const ErrorMsg = ({ todoobj }) => {
  return (
    <>
      {" "}
      {todoobj.length === 0 && (
        <h3 className="text-center py-4 text-success font-weight-bold">
          Work is Done Enjoy your Day{" "}
        </h3>
      )}
    </>
  );
};
export default ErrorMsg;
