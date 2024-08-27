interface skillType {
  name: string
  categoryId: string
}

interface jobProps {
  title: string
  companyImg?: string
  companyName?: string
  skillsList?: skillType[]
}
const JobCard = ({ title, companyImg, companyName, skillsList }: jobProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 space-y-3">
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
    </div>
  )
}

export default JobCard
