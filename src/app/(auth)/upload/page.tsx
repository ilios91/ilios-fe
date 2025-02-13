"use client";

import UploadIcon from '../../../components/icons/UploadFile';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FileData {
  name: string;
  type: string;
  size: number;
  content: string | ArrayBuffer | null | undefined;
  lastModified: number;
}

interface UploadError {
  message: string;
  type: 'size' | 'type' | 'general';
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];


export default function UploadFile() {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState<UploadError | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateFile = (file: File): UploadError | null => {
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

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError(null);
  };

  const uploadLicense = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);

    if (validationError) {
      setError(validationError);
      setFileData(null);
      return;
    }

    setError(null);
    setIsSuccess(false);

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const license: FileData = {
        name: file.name,
        type: file.type,
        size: file.size,
        content: event.target?.result || null,
        lastModified: file.lastModified
      };
      setFileData(license);
    };

    reader.onerror = () => {
      setError({
        type: 'general',
        message: 'Error reading file. Please try again.'
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError({
        type: 'general',
        message: 'Please enter a title'
      });
      return;
    }

    if (!fileData) {
      setError({
        type: 'general',
        message: 'Please select a file'
      });
      return;
    }

    try {
      setIsUploading(true);
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      window.localStorage.setItem("license", JSON.stringify({
        ...fileData,
        title
      }));
      
      setIsSuccess(true);
      setError(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError({
        type: 'general',
        message: 'Failed to save file. Please try again.'
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="h-[100vh] max-h-[100vh] w-full bg-white flex items-center justify-center">
      <div className="max-w-[518px] w-[518px] max-h-[664px] bg-[#EDF3FC] border-[1px] rounded-lg">
        <header className="mt-8 border-b-[1px] border-[#BABABA] pb-2"> 
          <h2 className="font-bold text-[28px] w-[80%] mx-auto">Add Document</h2>
        </header>

        <div className="w-[80%] mt-9 mx-auto">
          <form onSubmit={handleSubmit }>
            <label htmlFor="title" className="font-medium text-sm text-[#171717]">Title</label>
            <input onChange={handleTitleChange} className="h-10 w-full border-none outline-none px-2 text-xs" type="text" placeholder="PCN license" />

            <label htmlFor='license' className="cursor-pointer flex flex-col items-center justify-center mt-12 w-full h-[200px] border-[#BABABA] border-2 border-dotted text-xs text-center">
              <UploadIcon size="lg" />
              <p className='flex flex-col gap-y-1 mt-6'>
                <span>Drag and Drop here</span>
                <span>or</span>
                <span className='text-blue-normal'>
                  Browse file
                  <input onChange={uploadLicense} name='license' accept=".doc,.pdf,.docx" className='hidden cursor-pointer' id='license' type="file" />
                </span>
              </p>
            </label>

            <p className="mt-2 text-xs text-[#6E6E6E]">Accepted file type:- Doc or Pdf</p>
            <button className='w-full h-10 rounded-lg my-10 bg-blue-normal text-white text-sm font-bold' disabled={false}>Upload</button>

            {/* <Button className='w-full h-10 rounded-lg my-10 bg-blue-normal text-white text-sm font-bold' text='Upload' disabled={false}/> */}
          </form>
        </div>
      </div>
    </div>
  );
}