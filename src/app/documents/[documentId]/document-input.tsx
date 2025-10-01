import { BsCloudCheck } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im"; 
import { Id } from "../../../../convex/_generated/dataModel";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const [value, setValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const updateDoc = useMutation(api.documents.updateById);

  
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleSubmit = async () => {
    if (!value.trim()) {
      setIsEditing(false);
      return;
    }
    try {
      setIsPending(true);
      await updateDoc({ id, title: value.trim() });
    } finally {
      setIsPending(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="relative w-fit max-w-[50ch]"
        >
     
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSubmit}
            disabled={isPending}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate outline-none"
          />
        </form>
      ) : (
        <span
          onClick={() => setIsEditing(true)}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {value}
        </span>
      )}

      
      {isPending ? (
        <ImSpinner2 className="animate-spin text-blue-500" />
      ) : (
        <BsCloudCheck className="text-green-500" />
      )}
    </div>
  );
};
