import { Suspense } from "react"
import JobCard from "../components/JobCard"
import { Await, useLoaderData } from "react-router-dom"

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
  descriptionPreview: string
}

const Job = () => {
  const jobListData = useLoaderData() as jobType

  return (
    <div className="px-8 py-4">
      <div className="space-y-2 w-2/5">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={jobListData}
            children={(jobList) =>
              jobList.map((job: jobType) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  companyImg={job.smallCompany?.logoImageLink}
                  companyName={job.smallCompany?.companyName}
                  skillsList={job.skillsList}
                  description={job.descriptionPreview}
                />
              ))
            }
          />
        </Suspense>
      </div>
    </div>
  )
}

export default Job
