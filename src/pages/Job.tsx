import { get, getDatabase, ref } from "firebase/database"
import app from "../firebaseConfig"
import { useEffect, useState } from "react"

interface jobType {
  title: string
  id: string
}

const Job = () => {
  const [jobList, setJobList] = useState([])

  const database = getDatabase(app)
  const dbRef = ref(database)

  useEffect(() => {
    get(dbRef).then((el) => {
      if (el.exists()) {
        setJobList(el.val())
      }
    })
  }, [])

  return (
    <main className="px-8 py-4">
      <p>Job</p>
      {jobList.map((job: jobType) => (
        <p key={job.id}>{job.title}</p>
      ))}
    </main>
  )
}

export default Job
