import { useSearchParams } from "react-router-dom"

interface jobProps {
  title: string
  companyImg?: string
  companyName?: string
  skillsList?: {
    name: string
  }[]
  description: string
  index: string
}
const JobCard = ({
  title,
  companyImg,
  companyName,
  skillsList,
  description,
  index,
}: jobProps) => {
  let [searchParams, setSearchParams] = useSearchParams()

  const handleSetQuery = (index: string) => {
    setSearchParams({ jobId: index })
  }
  return (
    <div
      className="border border-gray-300 rounded-lg p-4 space-y-3 cursor-pointer"
      onClick={() => handleSetQuery(index)}
    >
      <div className="flex items-center gap-2">
        {companyImg && companyName && (
          <div className="flex flex-col justify-center">
            <img
              src={companyImg}
              alt={companyName}
              className="w-16 h-16 border border-gray-200 p-1 rounded-lg object-contain"
            />
            <span className="text-sm text-center">{companyName}</span>
          </div>
        )}
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </div>
      {skillsList && (
        <div className="flex gap-2 max-w-[500px] flex-wrap">
          {skillsList.map((skill, i) => (
            <div key={i} className="p-2 text-sm bg-blue-200 rounded-full">
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      )}
      <div className="mt-2">
        <span className="font-medium">Description :</span>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default JobCard
