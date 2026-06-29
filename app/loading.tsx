export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4">
        {/* Brand-colored spinning loader */}
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-[#c26e38]"></div>
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}