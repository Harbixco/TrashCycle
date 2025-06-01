import { FileInput, Label } from "flowbite-react";
import { Plus } from "lucide-react";

export default function UploadWaste() {
  return (
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center"
      >
        <span className="rounded-full border p-1 shadow-lg">
          <Plus />
        </span>
        <span className="pt-1 text-base">Upload an Image</span>

        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </div>
  );
}
