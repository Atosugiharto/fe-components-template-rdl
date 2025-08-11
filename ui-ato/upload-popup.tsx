import React, { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash, Upload } from "lucide-react";

const UploadPopup: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.toLowerCase().endsWith(".csv")) {
        setFile(selectedFile);
        setError("");
      } else {
        setFile(selectedFile);
        setError("Document Format Not Supported");
      }
    }
  };

  const handleClickDropArea = () => {
    inputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (droppedFile.name.toLowerCase().endsWith(".csv")) {
        setFile(droppedFile);
        setError("");
      } else {
        setFile(droppedFile);
        setError("Document Format Not Supported");
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError("");
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Pop Up Upload File</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-white border-none">
          <DialogHeader>
            <DialogTitle>Upload Document</DialogTitle>
          </DialogHeader>

          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center space-y-2 mt-4 cursor-pointer transition ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-neutral-5"
            }`}
            onClick={handleClickDropArea}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto" />
            <p>Drag & Drop or Select file to upload</p>
            <p className="text-sm text-muted-foreground text-neutral-8">
              CSV Maksimum. 10MB
            </p>

            <input
              type="file"
              accept=".csv,.CSV"
              ref={inputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {file && (
            <div>
              <div className="mt-2 p-2 border-2 py-2 border-neutral-5 rounded flex items-center justify-between">
                <div className="flex gap-2">
                  <img
                    src="/csv-icon.svg"
                    alt="CSV Icon"
                    className="w-15 h-15 p-2"
                  />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground text-neutral-8">
                      {(file.size / 1024 / 1024).toFixed(1)} MB
                    </p>
                  </div>
                </div>
                <Button variant="none" size="iconLg" onClick={handleRemoveFile}>
                  <Trash className="text-red-600 border-none" />
                </Button>
              </div>
              {error && <p className="text-red-600 text-sm mt-2">*{error}</p>}
            </div>
          )}

          <div className="flex justify-between mt-4">
            <Button
              variant="none"
              className="text-red-600 border-none font-semibold"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant={!file || !!error ? "outline" : "gradien"}
              className="text-white disabled:text-black"
              disabled={!file || !!error}
            >
              Upload
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadPopup;
