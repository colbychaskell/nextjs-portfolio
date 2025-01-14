// app/ui/empty-state.tsx

interface EmptyStateProps {
  message: string;
  children: React.ReactNode;
}

function EmptyStateIcon() {
  return (
    <svg
      className="mx-auto h-12 w-12 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

export function EmptyState({ message, children }: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4 border-2 border-dashed border-gray-200 rounded-lg">
      <EmptyStateIcon />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        {message}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        {children}
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
        >
          <svg
            className="mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Return Home
        </a>
      </div>
    </div>
  );
}
