import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/auth-store";
import { actionDeleteUser, actionListUsers, actionUpdateRole } from "../../api/user";
import { Trash, Trash2Icon } from "lucide-react";
import { createAlert } from "../../Utils/createAlert";
import Swal from "sweetalert2";

function Manage() {
  const [users, setUsers] = useState([]);

  const token = useAuthStore((state) => state.token);
  console.log(token);

  useEffect(() => {
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role)
    try {
      const res = await actionUpdateRole(token, {id,role})
      createAlert("success", "Update Role Success")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const hdlDeleteUser = async (token, id) => {
    console.log(token, id)
    try {
      Swal.fire({
        icon: "info",
        text: "Are you sure want to Delete?",
        showCancelButton: true
      }).then( async (data)=>{
        console.log(data.isConfirmed)

        if (data.isConfirmed){ 
          const res = await actionDeleteUser(token,id)
          console.log(res)
          createAlert("success", "DeleteSuccess")
          hdlFetchUsers(token)
        }


      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> No. </th>
            <th> Firstname </th>
            <th> Lastname </th>
            <th> Email </th>
            <th> Role </th>
            <th> Action </th>
          </tr>
        </thead>

        <tbody>
          {users.map((item,index) => {
            return (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {item.firstName} </td>
                <td> {item.lastName} </td>
                <td> {item.email} </td>

                <td> 
                    <select
                      onChange={(e)=>hdlUpdateRole(token,item.id,e.target.value)}
                      defaultValue={item.role}
                    >
                      <option> USER </option>
                      <option> ADMIN </option>
                    </select>
                </td>

                <td className="text-red-400"> <Trash onClick={() => hdlDeleteUser(token, item.id)} /> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Manage;
