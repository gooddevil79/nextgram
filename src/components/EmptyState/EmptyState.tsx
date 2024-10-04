export const EmptyState = function ({ name }: { name?: string }) {
  return (
    <p className="text-center text-xl text-gray-300">
      No {name || 'data'} to display
    </p>
  );
};
