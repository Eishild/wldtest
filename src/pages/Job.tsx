import { get, getDatabase, ref } from "firebase/database"
import app from "../firebaseConfig"
import { useEffect, useState } from "react"
import JobCard from "../components/JobCard"

interface skillType {
  id: string
  name: string
  categoryId: string
}

interface jobType {
  title: string
  id: string
  smallCompany?: {
    logoImageLink: string
    companyName: string
  }
  skillsList?: skillType[]
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
      <div className="space-y-2">
        {jobList.map((job: jobType, index: number) => (
          <JobCard
            key={job.id}
            title={job.title}
            companyImg={job.smallCompany?.logoImageLink}
            companyName={job.smallCompany?.companyName}
            skillsList={job.skillsList}
          />
        ))}
      </div>
    </main>
  )
}

export default Job
