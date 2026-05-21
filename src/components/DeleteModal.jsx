'use client'
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

import { MdDelete } from "react-icons/md";

const DeleteModal = ({ details }) => {
 const router = useRouter();
 const { _id, name } = details;

 const handleDelete = async (id) => {
  const { data: tokenData } = await authClient.token();
  console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities/${id}`, {
   method: "DELETE",
   headers: {
    authorization: `Bearer ${tokenData?.token}`
   }
  });
  const data = await res.json();

  alert('Deleted Successfully')
  router.push("/dashboard/all-facilities");
  router.refresh();


 }
 return (
  <AlertDialog>
   <Button className="ml-3 bg-danger text-white font-semibold rounded-2xl">
    <MdDelete />Delete
   </Button>
   <AlertDialog.Backdrop>
    <AlertDialog.Container>
     <AlertDialog.Dialog className="sm:max-w-[400px]">
      <AlertDialog.CloseTrigger />
      <AlertDialog.Header>
       <AlertDialog.Icon status="danger" />
       <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
       <p>
        Here is the <strong>{name}</strong> facility delete confirmation alert !
       </p>
      </AlertDialog.Body>
      <AlertDialog.Footer>
       <Button slot="close" variant="tertiary">
        Cancel
       </Button>
       <Button
        onClick={() => handleDelete(_id)}
        slot="close" variant="danger">
        Confirm Delete
       </Button>
      </AlertDialog.Footer>
     </AlertDialog.Dialog>
    </AlertDialog.Container>
   </AlertDialog.Backdrop>
  </AlertDialog>
 );
};

export default DeleteModal;