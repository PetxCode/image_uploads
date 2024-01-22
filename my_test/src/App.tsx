const App = () => {
  const handleSingleImage = (e: any) => {
    console.log(e);

    const fileData = new FormData();
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-60">
        <div className="flex gap-6">
          <button
            className="text-white bg-blue-950 p-4 rounded-md font-medium"
            onClick={() => {
              // handleSingleImage();
            }}
          >
            Single Upload
          </button>
          <button className="text-white bg-blue-950 p-4 rounded-md font-medium">
            Multiple Upload
          </button>
        </div>
      </div>

      <div className="p-2 mx-4 mt-10">
        <div>Images</div>
        <div className=" border rounded-md">
          <img className="min-w-[250px] h-[230px] rounded-md border m-2 " />
        </div>
      </div>
    </div>
  );
};

export default App;
