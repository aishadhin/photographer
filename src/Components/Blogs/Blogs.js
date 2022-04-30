import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-primary my-3'>Blogs</h2>
            <div>
                <div>
                    <h3 className='text-center'>Quetion: Difference between authorization and authentication.</h3>
                    <p className='text-center'>Authentication is the system of user creation and get access the app. Authorization is the role of an user.</p>

                    <h3 className='text-center'>Quetion: Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='text-center'>We use firebase for manage user account creation, login, app hosting and many more. some other authentication options are Back4App, AWS Amplify, Kuzzle, Flutter and many more.</p>

                    <h3 className='text-center'>Quetion: What other services does firebase provide other than authentication?</h3>
                    <p className='text-center'>Realtime database , storage , hosting etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;