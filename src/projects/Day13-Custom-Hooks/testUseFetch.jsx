import useFetch from "./useFetch";
import { IconFidgetSpinner } from "@tabler/icons-react";
import TestOnClickOutside from "./testOnClickOutside";
const TestCustomHook = () => {
  const { fetchedData, isError, isLoading } = useFetch(
    "https://dummyjson.com/products",
    {},
  );
  console.log(fetchedData, isError, isLoading);

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:items-start">
        {/* Use Fetch Hook Section */}
        <div className="flex-1 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 rounded-lg bg-gray-800 px-6 py-3 text-center text-2xl font-medium text-white">
            Use Fetch Hook:
          </h2>
          {isLoading && (
            <div className="flex justify-center py-8">
              <IconFidgetSpinner
                className="animate-spin text-gray-600"
                size={40}
              />
            </div>
          )}
          {isError ? (
            <h2 className="text-center text-red-600">{isError}</h2>
          ) : null}
          {fetchedData &&
          fetchedData.products &&
          fetchedData.products.length ? (
            <div className="grid gap-2">
              {fetchedData.products.map((productItem) => (
                <p
                  key={productItem.id}
                  className="rounded border border-gray-200 bg-gray-50 px-4 py-2"
                >
                  {productItem.title}
                </p>
              ))}
            </div>
          ) : null}
        </div>

        {/* OnClick Outside Section */}
        <div className="lg:w-96">
          <TestOnClickOutside />
        </div>
      </div>
    </div>
  );
};
export default TestCustomHook;
