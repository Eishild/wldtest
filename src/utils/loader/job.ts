import { get, getDatabase, ref } from "firebase/database"
import app from "../../firebaseConfig"

const database = getDatabase(app)
const dbRef = ref(database)

const getJobList = async () => {
  try {
    const db = await get(dbRef)
    if (db.exists()) {
      return db.val()
    }
    return { sucess: false }
  } catch (error) {
    return error
  }
}

export const jobLoader = async () => {
  try {
    const jobList = await getJobList()

    return jobList
  } catch (error) {
    return error
  }
}
