export interface UploadError {
  message: string;
  type: 'size' | 'type' | 'general';
}