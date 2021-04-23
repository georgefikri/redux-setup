import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from './redux/login/actionCreator';

function Login({
  login
}) {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hello world</h1>
      <input
        type='text' 
        value={login}
        onChange={(e)=> dispatch(loginUser(e.target.value))}
        />
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state?.login.username
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginUser: ()=> dispatch(loginUser())
    },
    dispatch
  );
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
