import { getDatabase, ref, set } from "firebase/database"
import app from "../../firebaseConfig"

const database = getDatabase(app)

export const createJob = async (
  id: string,
  title: string,
  description: string
) => {
  return set(ref(database, id), {
    id,
    title,
    description,
    descriptionPreview: description,
  })
}
