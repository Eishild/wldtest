import { useState, useEffect } from "react"
import { Form, useActionData } from "react-router-dom"
import Input from "./Input"
import { createJob } from "../utils/action/job"

const Modal = () => {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    title: "",
    description: "",
    id: "",
  })

  const actionData = useActionData() as { success: true }

  useEffect(() => {
    if (actionData?.success) {
      setOpen(false)
      setValues({ title: "", description: "", id: "" })
    }
  }, [actionData])

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <div>
      <button
        className="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 p-2 rounded-lg text-white mb-3 "
        onClick={() => setOpen((state) => !state)}
      >
        Créer un emploi
      </button>

      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-500/25 flex justify-center items-center">
          <div className="bg-white w-1/3 h-1/2 rounded-lg">
            <button
              className="p-4 font-bold"
              onClick={() => handleCloseModal()}
            >
              X
            </button>
            <Form
              method="post"
              action="/jobs"
              className="flex flex-col gap-5 px-10 py-4"
            >
              <Input name={"title"} setValue={setValues} values={values} />
              <Input
                name={"description"}
                setValue={setValues}
                values={values}
              />
              <Input name={"id"} setValue={setValues} values={values} />
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 p-2 rounded-lg text-white mb-3 "
              >
                Ajouter un nouvel emploi
              </button>
            </Form>
          </div>
        </div>
      )}
    </div>
  )
}

export const createJobAction = async ({ request }: { request: Request }) => {
  let formData = await request.formData()

  const title = formData.get("title")
  const description = formData.get("description")
  const id = formData.get("id")

  try {
    if (title && description && id) {
      await createJob(String(id), String(title), String(description))
    }
    return { success: true }
  } catch (error) {
    return error
  }
}

export default Modal
