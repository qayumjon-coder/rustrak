const Loader = () => {
  return (
    <div className="absolute z-200 h-screen w-full flex items-center justify-center bg-white">
      <div className="w-25 h-25 flex items-center justify-center">
        <div className="loader-item  flex items-center justify-center rounded-full border-10 border-black/10 border-t-yellow">
          <div className="w-15 h-15 bg-white rounded-full">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
