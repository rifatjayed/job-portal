function CourseCard({
  image,
  schedule,
  sesssions,
  duration,
  title,
  pricing,
  instructorImage,
  instructorName,
  //   rating,
}) {
  return (
    <div className="card w-[370px] h-[420px] p-6 bg-gray-100 rounded-[8px] flex flex-col gap-4 transition-all hover:text-white hover:bg-blue-600 group">
      <div className="relative">
        <img src={image} alt="" />
        <div className="absolute top-2 left-2 text-white px-3 py-0.5 bg-blue-500 group-hover:text-blue-600 group-hover:bg-white rounded-sm">
          {schedule}
        </div>
        <img className="absolute top-2 right-2" src="/save.svg" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/session.png" alt="" />
          <p>{sesssions} Session</p>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <img src="/clock-circle.png" alt="" />
          {duration}
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-medium line-clamp-2">{title}</h1>
        <p className="text-gray-400 leading-[26px] group-hover:text-white">
          {pricing}
        </p>
      </div>
      <div className="flex items-center">
        <img
          className="w-[26px] h-[26px] object-cover rounded-full"
          src={instructorImage}
          alt=""
        />
        <p className="pl-2">{instructorName}</p>
        <div className="flex ml-auto">
          <img className="w-4 h-4" src="/star.svg" alt="" />
          <img className="w-4 h-4" src="/star.svg" alt="" />
          <img className="w-4 h-4" src="/star.svg" alt="" />
          <img className="w-4 h-4" src="/star.svg" alt="" />
          <img className="w-4 h-4" src="/star.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
