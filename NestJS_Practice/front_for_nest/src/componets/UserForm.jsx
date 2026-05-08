import React, { useState } from "react";
import { createUser } from "./../api";

const EMPTY_ERROR = { type: null, message: null };

const validate = ({ name, bio }) => {
  if (!name.trim())
    return { type: "validation", message: "Имя не может быть пустым" };
  if (!bio.trim())
    return { type: "validation", message: "Bio не может быть пустым" };
  return null;
};

function UserForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [createdUser, setCreatedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(EMPTY_ERROR);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate({ name, bio });
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError(EMPTY_ERROR);
    setCreatedUser(null);

    try {
      const newUser = await createUser({ name: name.trim(), bio: bio.trim() });
      setCreatedUser(newUser);
      setName("");
      setBio("");
    } catch (err) {
      setError({
        type: "network",
        message: "Не удалось создать пользователя.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (setter) => ({ target }) => {// Одна функция для двух событий чтобы не писать как ниже
      setter(target.value);                         // setter и есть функция переданная в параметрах
      setError(EMPTY_ERROR);
    };

 /*  function handleChange(setter) {
    return function (event) {
      setter(event.target.value);
    };
  } */
  /* const handleNameChange = (e) => {
    setName(e.target.value);
    setError(EMPTY_ERROR);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
    setError(EMPTY_ERROR);
  }; */

  return (
    <div>
      <h2>Добавить пользователя</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={handleChange(setName)}
          disabled={isLoading}
        />
        <input
          type="text"
          placeholder="Введите bio"
          value={bio}
          onChange={handleChange(setBio)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Создание..." : "Добавить"}
        </button>
      </form>

      {error.message && (
        <p style={{ color: error.type === "network" ? "red" : "orange" }}>
          {error.message}
        </p>
      )}

      {createdUser && (
        <p>
          Пользователь создан: {createdUser.name} (ID: {createdUser.id})
        </p>
      )}
    </div>
  );
}

export default UserForm;
