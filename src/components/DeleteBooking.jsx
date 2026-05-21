'use client'
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";


const DeleteBooking = ({ booking }) => {
 const router = useRouter();
 const { _id, name } = booking;

 const handleDelete = async (id) => {
  console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-booking/${id}`, {
   method: "DELETE"
  });
  const data = await res.json();

  alert('Booking Deleted Successfully')

  router.refresh();


 }
 return (
  <AlertDialog>
   <Button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition w-full md:w-auto">
    <MdDelete /> Delete
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
        Here is  the <strong>{name}</strong> facility delete confirmation alert !!
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

export default DeleteBooking;