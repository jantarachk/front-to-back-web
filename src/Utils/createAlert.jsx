import Swal from "sweetalert2";
//export front end เขียนแบบนี้นะอย่าสับสนกับ backend
export const createAlert = (icon,text) => {
    return Swal.fire({
            icon: icon || "info",
            text: text || "Something wrong",
            timer: 5000
          })
}