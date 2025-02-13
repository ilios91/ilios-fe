import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "./Constants";
import { UploadError } from "./types";

  export const validateFile = (file: File): UploadError | null => {
    if (file.size > MAX_FILE_SIZE) {
      return {
        type: 'size',
        message: 'File size exceeds 5MB limit'
      };
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return {
        type: 'type',
        message: 'Only PDF and Word documents are allowed'
      };
    }

    return null;
  };