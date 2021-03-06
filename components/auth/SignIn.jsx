const SignIn = ({ setSignIn }) => {
  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        {/* Background overlay, show/hide based on modal state. Entering: "ease-out duration-300" From: "opacity-0" To: "opacity-100" Leaving: "ease-in duration-200" From: "opacity-100" To: "opacity-0" */}
        <div
          className='fixed inset-0 bg-blueGray-400 opacity-95 modal__container'
          aria-hidden='true'
        >
          <div className='inset-0'></div>
        </div>
        {/* This element is to trick the browser into centering the modal contents.  */}
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        {/* Modal panel, show/hide based on modal state. Entering: "ease-out duration-300" From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" To: "opacity-100 translate-y-0 sm:scale-100" Leaving: "ease-in duration-200" From: "opacity-100 translate-y-0 sm:scale-100" To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}
        <div
          className='inline-block overflow-hidden text-right align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='justify-between sm:flex sm:items-start'>
              <div className='self-start block pl-2 text-xl font-semibold text-gray-700'>
                <h2 className='leading-relaxed text-left'>Log In</h2>
                <p className='text-sm font-normal leading-relaxed text-gray-500'>
                  Here, I sign in to add posts into my blog.
                </p>
              </div>
              <div className='flex items-center justify-center flex-shrink-0 rounded-full shadow-md h-14 w-14 bg-blueGray-100'>
                <img src='/logo512.png' width={48} className='' />
              </div>
            </div>
          </div>
          <div className=''>
            {/* input */}
            <div className='max-w-xl'>
              <div class='mb-4 mx-5 relative'>
                <input
                  className='app__input'
                  id='email'
                  type='email'
                  autofocus
                />
                <label for='email' className='app__label'>
                  Email
                </label>
              </div>
            </div>

            <div className='max-w-xl'>
              <div class='mb-4 mx-5 relative'>
                <input
                  className='app__input'
                  id='password'
                  type='password'
                  autofocus
                />
                <label for='password' className='app__label'>
                  Password{' '}
                </label>
              </div>
            </div>

            <div className='justify-between px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse'>
              <button className='btn__primary'>Sign In</button>
              <button
                className='btn__secondary'
                onClick={() => setSignIn(false)}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
