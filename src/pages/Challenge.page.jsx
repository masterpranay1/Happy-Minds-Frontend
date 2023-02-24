import { Link } from 'react-router-dom';
import Day from '../components/Day'

const ChallengePage = () => {
    return (
        <div className="ChallengePage h-[300vh]">
            <header className="px-20 py-5 flex flex-row">
                <h1 className="text-xl text-secondary">HAPPY MINDS</h1>
                <Link to='/' className="link ml-auto">Sign Out</Link>
            </header>

            <section className="streak-wrapper flex justify-end mt-5 px-20 items-center gap-10">
                <p className="font-bold text-2xl text-primary">Streak : </p>
                <progress className="progress progress-secondary w-64" value="20" max="100"></progress>
            </section>

            <div className='days_wrapper flex flex-row flex-wrap'>
                <Day active="true" />
                <Day active="false" />
                <Day active="false" />
                <Day active="false" />
                <Day active="false" />
            </div>
        </div>
    )
}

export default ChallengePage;