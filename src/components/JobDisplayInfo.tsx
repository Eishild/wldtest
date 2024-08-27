interface jobType {
  title: string
  logoImageLink?: string
  companyName?: string
  description: string
}
const JobDisplayInfo = ({
  title,
  logoImageLink,
  companyName,
  description,
}: jobType) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {logoImageLink && (
          <img
            className="w-20 h-20 border border-gray-200 rounded-lg p-2 object-contain"
            src={logoImageLink}
            alt={companyName}
          />
        )}
      </div>
      <div className="mt-10">
        <span className="font-medium ">Description :</span>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default JobDisplayInfo
