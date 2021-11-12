export const matchUser = (data, id) => {
  if (typeof data == "object" && id) {
    const user = data.find((user) => user.id === parseInt(id));
    return user;
  }
  return false;
};
