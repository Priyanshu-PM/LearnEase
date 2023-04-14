export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-gray-600 bg-gray-200 hover:bg-babyPink hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-babyPink mt-10 transition-all"
          onSubmit={handleSubmit}
        >                                                              
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
