'use client'
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";

const EditModal = ({ details }) => {
 const router = useRouter();
 const { _id } = details;

 const handleEditForm = async (e, onClose) => {
  e.preventDefault();
  const formData = await new FormData(e.target);
  const finalFormData = await Object.fromEntries(formData);

  const res = await fetch(`http://localhost:8001/all-facilities/${_id}`, {
   method: "PATCH",
   headers: {
    "Content-type": "application/json"
   },
   body: JSON.stringify(finalFormData)
  })

  const data = await res.json()

  alert('Facility Updated Successfully')
  router.refresh();
  onClose();


 }


 return (
  <Modal>
   <Button className="px-10 bg-cyan-500  text-white font-semibold rounded-2xl">
    <CiEdit /> Edit
   </Button>

   <Modal.Backdrop>
    <Modal.Container placement="auto">
     <Modal.Dialog className="sm:max-w-md">
      <Modal.CloseTrigger />
      <Modal.Header>
       <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
        <Envelope className="size-5" />
       </Modal.Icon>
       <Modal.Heading className="text-center font-bold text-xl">Edit Facility</Modal.Heading>

      </Modal.Header>
      <Modal.Body className="p-6">
       <Surface variant="default">
        <form
         onSubmit={(e) => handleEditForm(e, onClose)}
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
           placeholder="Facility description..."
           className="w-full border rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
          />
         </div>


         <div className="md:col-span-2">
          <button
           type="submit"
           // disabled={loading}
           className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition"
          >
           {/* {loading ? "Adding..." : "Add Facility"} */} Edit Details

          </button>
         </div>

        </form>
       </Surface>
      </Modal.Body>
      <Modal.Footer>
       <Button type="submit" slot="close">
        Save
       </Button>
      </Modal.Footer>
     </Modal.Dialog>
    </Modal.Container>
   </Modal.Backdrop>
  </Modal >
 );
};

export default EditModal;