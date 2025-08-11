import React from "react";

const StartTransaction = () => {
  const styles = {
    input: {
      backgroundColor: "red",
    },
    div: {
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <div className="bg-amber-800 min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-lg">
        <div>
          <h2>Sign Up</h2>
        </div>
        <div>
          <form action="" className="">
            <div style={styles.div} className="mb-5">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="name"
                id="nameInput"
                style={styles.input}
                className="w-60"
              />
            </div>

            <div style={styles.div} className="mb-5">
              <label htmlFor="mail">E-mail</label>
              <input
                type="email"
                name="mail"
                id="emailInput"
                style={styles.input}
                className="w-60"
              />
            </div>

            <div style={styles.div} className="mb-5">
              <label htmlFor="security">Password</label>
              <input
                type="password"
                name="security"
                id="passwordInput"
                style={styles.input}
                className="w-60"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartTransaction;
