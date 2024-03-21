import React from "react"

function PersonCard({ className = "" }) {
  return (
    <div
      className={`flex-1 card w-full bg-tan shadow-xl p-10 flex flex-col items-center ${className}`}
    >
      {/* <div className="avatar">
        <div className="w-36 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div> */}
      <div className="avatar placeholder mb-5">
        <div className="bg-neutral text-neutral-content rounded-full w-36">
          <span className="text-5xl">JH</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="card-title">James Hubert</h2>
        <p>Frontend Web Developer</p>
        <p className="text-sm">📍 Playa del Carmen, Mexico</p>
      </div>
    </div>
  )
}

export default PersonCard
