"use client";

import UploadIcon from '../../../components/icons/UploadIcon';
import Button from '../../../components/common/buttons/Button';
import { useActionState } from 'react';
import { uploadLicense } from '@/actions/authentication/auth';

export default function UploadFile() {
  const [state, action, isPending ] = useActionState(uploadLicense, undefined)

  return (
    <div className="h-[100vh] max-h-[100vh] w-full bg-white flex items-center justify-center">
      <div className="max-w-[518px] w-[518px] max-h-[664px] bg-[#EDF3FC] border-[1px] rounded-lg">
        <header className="mt-8 border-b-[1px] border-[#BABABA] pb-2"> 
          <h2 className="font-bold text-[28px] w-[80%] mx-auto">Add Document</h2>
        </header>

        <div className="w-[80%] mt-9 mx-auto">
          <form action={action}>
            <label htmlFor="title" className="font-medium text-sm text-[#171717]">Title</label>
            <input className="h-10 w-full border-none outline-none px-2 text-xs" type="text" placeholder="PCN license" />

            <label htmlFor='license' className="cursor-pointer flex flex-col items-center justify-center mt-12 w-full h-[200px] border-2 border-dotted text-xs text-center">
              <UploadIcon size="lg" />
              <p className='flex flex-col gap-y-1 mt-6'>
                <span>Drag and Drop here</span>
                <span>or</span>
                <span className='text-blue-normal'>
                  Browse file
                  <input accept=".doc,.pdf,.docx" className='hidden cursor-pointer' id='license' type="file" />
                </span>
              </p>
            </label>

            <p className="mt-2 text-xs text-[#6E6E6E]">Accepted file type:- Doc or Pdf</p>

            <Button className='w-full h-10 rounded-lg my-10 bg-blue-normal text-white text-sm font-bold' text='Upload' disabled={false}/>
          </form>
        </div>
      </div>
    </div>
  );
}