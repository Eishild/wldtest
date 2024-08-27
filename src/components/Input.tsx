interface inputProps {
  name: string
  type?: string
  setValue: (value: { title: string; description: string; id: string }) => void
  values: {
    title: string
    description: string
    id: string
  }
}

const Input = ({ name, type = "text", setValue, values }: inputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="capitalize font-medium text-lg ">{name}</span>
      <input
        type={type}
        name={name}
        className="p-2 border border-gray-200 rounded-lg w-auto"
        onChange={(e) => setValue({ ...values, [name]: e.target.value })}
      />
    </div>
  )
}

export default Input
