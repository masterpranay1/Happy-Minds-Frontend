import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero flex-1 -mt-8 bg-base-100">

      <div className="hero-content flex-col">

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold decoration-neutral">Sign in to your account</h1>
          <p className="text-sm md:text-base max-w-[30ch] py-6 mx-auto decoration-slate-200">
            Your are just a step away from a awesome 30 days challenge.
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <button className="btn btn-secondary text-base-100">Login</button>
            </div>

            <div className="sign-up-link text-center mt-2">
                <span>Don't have an account. <Link to='/signup' className="link">Sign up</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
