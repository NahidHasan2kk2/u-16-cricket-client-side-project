'use client'

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
 Button,
 Modal,
 Surface,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";

const EditModal = ({ details }) => {

 const router = useRouter();
 const { _id } = details;

 const handleEditForm = async (e) => {

  e.preventDefault();
  const { data: tokenData } = await authClient.token();

  const formData = new FormData(e.target);
  const finalFormData = Object.fromEntries(formData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities/${_id}`, {
   method: "PATCH",
   headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${tokenData?.token}`
   },
   body: JSON.stringify(finalFormData),
  });

  const data = await res.json();

  console.log(data);

  alert("Facility Updated Successfully");

  router.refresh();


 };

 return (
  <Modal>

   <Modal.Trigger>
    <Button className="px-10 bg-cyan-500 text-white font-semibold rounded-2xl">
     <CiEdit /> Edit
    </Button>
   </Modal.Trigger>

   <Modal.Backdrop>
    <Modal.Container placement="auto">



     <Modal.Dialog className="sm:max-w-md">

      <Modal.CloseTrigger />

      <Modal.Header>
       <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
        <Envelope className="size-5" />
       </Modal.Icon>

       <Modal.Heading className="text-center font-bold text-xl">
        Edit Facility
       </Modal.Heading>
      </Modal.Header>

      <Modal.Body className="p-6">

       <Surface variant="default">

        <form
         onSubmit={handleEditForm}
         className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

         <div>
          <label className="block mb-2 font-medium">
           Facility Name
          </label>

          <input
           type="text"
           name="name"
           required
           defaultValue={details?.name}
           placeholder="Facility Name"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div>
          <label className="block mb-2 font-medium">
           Facility Type
          </label>

          <input
           type="text"
           name="type"
           required
           defaultValue={details?.type}
           placeholder="Football / Cricket"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div>
          <label className="block mb-2 font-medium">
           Image URL
          </label>

          <input
           type="text"
           name="image"
           required
           defaultValue={details?.image}
           placeholder="Paste imgbb/postimage URL"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div>
          <label className="block mb-2 font-medium">
           Location
          </label>

          <input
           type="text"
           name="location"
           required
           defaultValue={details?.location}
           placeholder="Dhaka"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div>
          <label className="block mb-2 font-medium">
           Price Per Hour
          </label>

          <input
           type="number"
           name="price"
           required
           defaultValue={details?.price}
           placeholder="150"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div>
          <label className="block mb-2 font-medium">
           Capacity
          </label>

          <input
           type="number"
           name="capacity"
           required
           defaultValue={details?.capacity}
           placeholder="20"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
           Available Time
          </label>

          <input
           type="text"
           name="timeSlots"
           required
           defaultValue={details?.timeSlots}
           placeholder="8AM - 10AM, 4PM - 6PM"
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
           Description
          </label>

          <textarea
           name="description"
           required
           rows={2}
           defaultValue={details?.description}
           placeholder="Facility description..."
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>

         <div className="md:col-span-2">
          <button
           type="submit"
           className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition"
          >
           Edit Details
          </button>
         </div>

        </form>

       </Surface>

      </Modal.Body>

      <Modal.Footer>
       <Button

        slot="close"
        variant="light"
       >
        Cancel
       </Button>
      </Modal.Footer>

     </Modal.Dialog>



    </Modal.Container>
   </Modal.Backdrop>

  </Modal>
 );
};

export default EditModal;