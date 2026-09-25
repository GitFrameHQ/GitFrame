import JSZip from 'jszip';

/**
 * Generates and triggers download of a client-side ZIP archive.
 * For this iteration, the ZIP contains ONLY an empty README.md.
 */
export async function generateGitFrameZip(): Promise<void> {
  const zip = new JSZip();

  // Add empty README.md as specified
  zip.file('README.md', '');

  // Generate blob asynchronously
  const blob = await zip.generateAsync({
    type: 'blob',
    mimeType: 'application/zip',
  });

  // Create temporary URL and trigger browser download
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'gitframe-profile.zip';
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}
