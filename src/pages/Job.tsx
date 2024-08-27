import { Suspense } from "react"
import JobCard from "../components/JobCard"
import { Await, useLoaderData } from "react-router-dom"
import JobDisplayInfo from "../components/JobDisplayInfo"
import Modal from "../components/Modal"

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
  description: string
}

interface loaderType {
  jobList: jobType[]
  jobData: jobType
}

const Job = () => {
  const { jobList, jobData } = useLoaderData() as loaderType

  return (
    <div>
      <div className="flex w-full ">
        <div className="space-y-4 w-2/5 h-[88vh] overflow-auto">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={jobList}
              children={(jobList) =>
                jobList.map((job: jobType, index: string) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    companyImg={job.smallCompany?.logoImageLink}
                    companyName={job.smallCompany?.companyName}
                    skillsList={job.skillsList}
                    description={job.descriptionPreview}
                    index={index}
                  />
                ))
              }
            />
          </Suspense>
        </div>
        <div className="px-4 relative w-3/5 ">
          <div className="w-full flex justify-end">
            <Modal />
          </div>
          {jobData.id && (
            <div className="border rounded-lg w-full h-[84vh] p-4">
              <Suspense
                fallback={<p className="text-red-700 text-3xl ">Loading...</p>}
              >
                <Await
                  resolve={jobData}
                  errorElement={<div>Job introuvable 😬</div>}
                  children={(job) =>
                    job && (
                      <JobDisplayInfo
                        title={job.title}
                        logoImageLink={job.smallCompany?.logoImageLink}
                        companyName={job.smallCompany?.companyName}
                        description={job.description}
                      />
                    )
                  }
                />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Job
