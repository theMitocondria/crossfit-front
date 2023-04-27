import Swal from "sweetalert2";

import {useDispatch} from "react-redux"
const ErrorMsg = ({ message }) => {
  const dispatch=useDispatch();
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
//   dispatch(errorResetAction());
};

export default ErrorMsg;