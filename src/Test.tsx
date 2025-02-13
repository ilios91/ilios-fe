return (
  <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
    <div className="max-w-[518px] w-full bg-[#EDF3FC] border rounded-lg shadow-sm">
      <header className="p-6 border-b border-[#BABABA]">
        <h2 className="font-bold text-2xl text-gray-900">Add Document</h2>
      </header>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="title" 
              className="block font-medium text-sm text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="h-10 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 text-sm"
              placeholder="Enter document title"
            />
          </div>

          <div>
            <label
              htmlFor="license"
              className={`
                cursor-pointer flex flex-col items-center justify-center
                p-6 border-2 border-dashed rounded-lg
                ${fileData ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}
                transition-colors duration-200
              `}
            >
              <div className="space-y-4 text-center">
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
                    <div className="mx-auto h-12 w-12 text-gray-400">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Drag and drop here</p>
                      <p>or</p>
                      <p className="text-blue-600">Browse file</p>
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
            <p className="mt-2 text-xs text-gray-500">
              Accepted file types: PDF, DOC, DOCX (max 5MB)
            </p>
          </div>
{/* 
          {error && (
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
              w-full h-10 rounded-lg font-medium text-white
              transition-colors duration-200
              ${isUploading || !fileData 
                ? 'bg-blue-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
              }
            `}
          >
            {isUploading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Uploading...
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