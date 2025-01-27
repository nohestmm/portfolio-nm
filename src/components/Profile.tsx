
const Profile = () => {
  return (
    <div className="flex p-4 @container">
    <div className="flex w-full flex-col gap-4 items-center">
      <div className="flex gap-4 flex-col items-center">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 bg-[url('https://portfolionm-df86e.firebaseapp.com/static/media/photo.601c37ed.jpeg')]"
        ></div>
        <div className="flex flex-col items-center justify-center justify-center">
          <p className="text-[#181116] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Nohemí Martínez</p>
          <p className="text-[#89617f] text-base font-normal leading-normal text-center">
            Front-end Developer specializing in React, TypeScript, and CSS. Previously at Facebook, now building open source tools and writing on my blog.
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f0f3] text-[#181116] text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto"
        >
          <span className="truncate">Follow</span>
        </button>
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f13bc0] text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto"
        >
          <span className="truncate">Message</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Profile