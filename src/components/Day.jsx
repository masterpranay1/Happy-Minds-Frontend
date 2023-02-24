
const Day = ({active}) => {
  console.log(active)
  return (
      active != "true" ? 
      (<section className="w-fit mx-auto p-10 rounded border-2 mt-20">
        <div>Complete Previous task to unlock this</div>
      </section>) :
      <section className="w-fit mx-auto p-10 rounded border-2 mt-20">
        <p className="day text-5xl bg-secondary w-fit p-2 rounded text-base-100">
          1
        </p>
        <h2 className="text-3xl mt-5">Tasks</h2>
        <ul className="mt-5 text-primary list-decimal p-4">
          <li>Read book for half an hour</li>
          <li>Do meditation for half an hour</li>
          <li>Wake up early and go for a walk</li>
        </ul>

        <button className="btn btn-secondary mt-5 text-base-100">Done</button>
      </section>
  )
};

export default Day;