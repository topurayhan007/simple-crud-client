import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.namee.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // form.reset();
        if (data.modifiedCount > 0) {
          alert("User updated successfully!");
        }
      });
  };

  return (
    <div>
      <h3>Update information of: {loadedUser.name}</h3>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="namee" id="" defaultValue={loadedUser?.name} />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser?.email}
        />
        <br />
        <input type="submit" value="Update" name="name" id="" />
      </form>
    </div>
  );
};

export default Update;
