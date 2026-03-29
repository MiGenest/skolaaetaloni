interface DocumentCardProps {
  title: string
  description?: string
  fileSize?: string
  onDownload?: () => void
}

export default function DocumentCard({ title, description, fileSize, onDownload }: DocumentCardProps) {
  return (
    <div className="p-6 border rounded-lg flex justify-between items-center hover:shadow-lg transition-shadow">
      <div className="flex-1">
        <h3 className="font-semibold mb-1">{title}</h3>
        {description && <p className="text-sm text-gray-600 mb-1">{description}</p>}
        {fileSize && <p className="text-xs text-gray-500">PDF • {fileSize}</p>}
      </div>
      <button
        onClick={onDownload}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
      >
        Download
      </button>
    </div>
  )
}
