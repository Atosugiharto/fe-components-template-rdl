import { useState } from "react";
import { Eye, Trash2, Upload } from "lucide-react";
import { cn } from "@/utils/cn";

type FileUploadProps = {
  disabled?: boolean;
}

export default function FileUploadInput({ disabled = false}: FileUploadProps ) {
  const [file, setFile] = useState<File | null>(null);

  const MAX_FILE_SIZE_MB = 5;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      e.target.value = "";
      return;
    }
    setFile(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-2">
        {file ? (
          <div className="flex">
            <div className="bg-gray-100 flex justify-between items-center px-3 gap-3 rounded-lg h-[46px] w-[375px]">
              <p className="text-sm">{file.name}</p>
              <div className="flex justify-center items-center gap-2">
                <Eye
                  className="cursor-pointer text-neutral-9"
                  size={24}
                />
                <div className="bg-neutral-3 w-[1px] h-[46px]"/>
                <Trash2
                  className="cursor-pointer text-red-500"
                  size={24}
                  onClick={handleRemove}
                />
              </div>
            </div>
          </div>
        ) : (
          <label className="flex">
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
              disabled={disabled}
            />
            <div className={
                cn(
                    "flex h-[46px] w-[375px] rounded-lg",
                    disabled? "bg-grey-100" : "bg-neutral-3 cursor-pointer"
                )
              }
            >
              <div className="flex justify-center items-center px-[10px] py[11px] bg-neutral-7 gap-[10px] rounded-l-lg">
                <Upload className="text-white" size={24}/>
                <p className="text-sm font-semibold text-white">Upload File</p>
              </div>
              <div className="flex items-center px-2 py-[13.5px]">
                <p className="text-sm text-neutral-6">Max file size 5Mb</p>
              </div>
            </div>
          </label>
        )}
        <p className="text-sm font-semibold">Format PDF</p>
      </div>
    </div>
  );
}
