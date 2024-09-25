import React from 'react';

interface Props {
  alias: string;
  password: string;
  onAliasChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const AuthenticationFields = ({
    alias: alias,
    password: password,
    onAliasChange: onAliasChange,
    onPasswordChange: onPasswordChange,
    onKeyDown: onKeyDown
  }: Props) => {
  return (
    <>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          size={50}
          id="aliasInput"
          placeholder="Alias"
          value={alias}
          onChange={onAliasChange}
          onKeyDown={onKeyDown}
        />
        <label htmlFor="aliasInput">Alias</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          onKeyDown={onKeyDown}
        />
        <label htmlFor="passwordInput">Password</label>
      </div>
    </>
  );
};

export default AuthenticationFields;
