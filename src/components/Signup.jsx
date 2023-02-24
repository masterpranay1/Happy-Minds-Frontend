import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const handleSignup = async () => {
    if (emailRef.current.value !== '' && passwordRef.current.value !== '' && confirmPasswordRef.current.value !== '') {
      const response = await fetch('https://happy-minds-backend-production.up.railway.app/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      })
      const data = await response.json();
      console.log(data);
      navigate('/login');
    }
  };
  return (
    <div className="hero flex-1 -mt-8 bg-base-100">

      <div className="hero-content flex-col">

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold decoration-neutral">Sign up to create your account</h1>
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
                placeholder="Enter your email"
                className="input input-bordered"
                ref={emailRef}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                ref={passwordRef}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password to confirm"
                className="input input-bordered"
                ref={confirmPasswordRef}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-secondary text-base-100" onClick={handleSignup}>Sign up</button>
            </div>

            <div className="sign-up-link text-center mt-2">
              <span>Already have an account. <Link to='/signin' className="link">Sign in</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
