import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { registerUser as userRegister } from '../services/userService';
import Chat from './Chat';

const StyledErrorMessage = styled.div`
  color: red;
`;

function RegisterUser() {
  const [user, setUser] = useState({ name: '', group: '', loggedIn: false });

  const [validationErrors, setValidationErrors] = useState({
    nameError: '',
    groupError: '',
  });

  const isAlphabetics = (text) => /^[A-Za-z]+$/.test(text);

  const isGroupSelected = (group) => group !== '';

  const handleUserJoin = (name, group) => {
    if (isAlphabetics(name) && isGroupSelected(group)) {
      registerUserData({ name, group });
    }
  };

  const registerUserData = async (user) => {
    try {
      const response = await userRegister(user);

      // Check if the user is already registered with another group
      if (response.data.error) {
        setValidationErrors({
          ...validationErrors,
          groupError: response.data.error,
        });
        return;
      }
      setUser({ ...user, ...response.data, loggedIn: true });
      return;
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleNameBlur = (e) => {
    let error = '';
    if (!isAlphabetics(e.target.value)) {
      error =
        'Name is invalid, It cannot be empty and must be only alphabetic!';
    }
    setValidationErrors({
      ...validationErrors,
      nameError: error,
    });
  };

  const handleGroupBlur = (e) => {
    let error = '';
    if (!isGroupSelected(e.target.value)) {
      error = 'Please select a group!';
    }
    setValidationErrors({
      ...validationErrors,
      groupError: error,
    });
  };
  return (
    <>
      {!user.loggedIn ? (
        <div className="join-form">
          <h2>Join a Group</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              value={user.name}
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, name: e.target.value });
              }}
              onBlur={handleNameBlur}
            />
            {validationErrors.nameError && (
              <StyledErrorMessage>
                {validationErrors.nameError}
              </StyledErrorMessage>
            )}
            <select
              value={user.group}
              onChange={(e) => setUser({ ...user, group: e.target.value })}
              onBlur={handleGroupBlur}
            >
              <option value="">Select a Group</option>
              <option value="IT">IT</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
            </select>
            {validationErrors.groupError && (
              <StyledErrorMessage>
                {validationErrors.groupError}
              </StyledErrorMessage>
            )}
            <button
              type="button"
              onClick={() => handleUserJoin(user.name, user.group)}
            >
              Join
            </button>
          </form>
        </div>
      ) : (
        <Chat user={user} />
      )}
    </>
  );
}

export default RegisterUser;
