"use client";

import UploadIcon from '../../../components/icons/UploadFile';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { UploadError } from '@/utils/types';
import { validateFile } from '@/utils/Functions';

interface FileData {
  name: string;
  type: string;
  size: number;
  content: string | ArrayBuffer | null | undefined;
  lastModified: number;
}


export default function UploadFile() {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState<UploadError | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter()

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError(null);
  };

  console.log(error, isSuccess);

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
      setError({ type: 'general', message: 'Error reading file. Please try again.'  });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError({ type: 'general', message: 'Please enter a title' });
      return;
    }

    if (!fileData) {
      setError({ type: 'general', message: 'Please select a file' });
      return;
    }

    try {
      setIsUploading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));  // Simulate upload delay
      window.localStorage.setItem("license", JSON.stringify({ ...fileData, title }));
      setIsSuccess(true);
      setError(null);
      router.push('/signup/supplier');
    } 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (err) {
      setError({ type: 'general', message: 'Failed to save file. Please try again.' });
    } 
    finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="h-[100vh] max-h-[100vh] w-full bg-white flex items-center justify-center">
      <div className="max-w-[518px] w-[518px] max-h-[664px] bg-[#EDF3FC] border-[1px] rounded-lg">
        <header className="mt-8 border-b-[1px] border-[#BABABA] pb-2"> 
          <h2 className="font-bold text-[28px] w-[85%] mx-auto">Add Document</h2>
        </header>

        <div className="w-[85%] mt-9 mx-auto">
          <form onSubmit={handleSubmit }>
            <label htmlFor="title" className="font-medium text-sm text-[#171717]">Title</label>
            <input onChange={handleTitleChange} className="h-10 w-full border-none outline-none px-2 text-xs" type="text" placeholder="PCN license" />

            <div className='mt-10'>
              <label
                htmlFor="license"
                className={`
                  cursor-pointer flex flex-col items-center justify-center
                  h-[200px] border-2 border-dashed rounded-lg
                  ${fileData ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}
                  transition-colors duration-200
                `}
              >
                <div className="space-y-4 text-center flex flex-col items-center">
                  {fileData ? (
                    <>
                      <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                      <div className="text-sm text-gray-600">
                        <p className="font-medium">{fileData.name}</p>
                        <p>{(fileData.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <UploadIcon size="lg" />
                      <div className="flex flex-col gap-y-1 mt-6 text-xs text-center">
                        <p>Drag and drop here</p>
                        <p>or</p>
                        <p className="text-blue-normal font-bold">Browse file</p>
                      </div>
                    </>
                  )}
                  <input
                    onChange={uploadLicense}
                    name="license"
                    accept=".doc,.docx,.pdf"
                    className="hidden"
                    id="license"
                    type="file"
                  />
                </div>
              </label>

              <p className="mt-2 text-xs text-[#6E6E6E]">Accepted file type:- Doc, Docx, Pdf (max 5MB)</p>
            </div>

            {/* {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )} */}

            {/* {isSuccess && (
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>Document uploaded successfully!</AlertDescription>
              </Alert>
            )} */}


            <button
              type="submit"
              disabled={isUploading || !fileData}
              className={`
                my-10 w-full h-10 rounded-lg font-medium text-white transition-colors duration-200
                ${ isUploading || !fileData  ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700' }
              `}
            >
              { isUploading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" /> Uploading...
                </span>
              ) : (
                'Upload'
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}