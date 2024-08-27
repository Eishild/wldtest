import { child, get, getDatabase, ref } from "firebase/database"
import app from "../../firebaseConfig"
import { defer } from "react-router-dom"

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

export const getJob = async (URLJobId: string | null) => {
  const job = await get(child(dbRef, `/${URLJobId}`))

  try {
    console.log(job.val())
    if (job.exists()) {
      return job.val()
    }
    return { success: false }
  } catch (error) {
    return error
  }
}

export const jobLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url)
  const URLJobId = url.searchParams.get("jobId")

  try {
    const jobList = await getJobList()
    const jobData = await getJob(URLJobId)

    return defer({ jobList, jobData })
  } catch (error) {
    return error
  }
}
