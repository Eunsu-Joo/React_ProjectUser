const validator = (values) => {
  let formValid = true;
  let errors = {};
  //name
  const { name, username, phone, email, website } = values;
  if (!name) {
    formValid = false;
    errors["name"] = "Cannot be empty";
  }
  if (name) {
    if (!name.match(/^[가-힣]+$/)) {
      formValid = false;
      errors["name"] = "Only Write Korean";
      if (name.length > 10) {
        formValid = false;
        errors["name"] = "Less than 10 characters";
      }
    }
  }
  //username
  if (!username) {
    formValid = false;
    errors["username"] = "Cannot be empty";
  }
  if (username) {
    if (!username.match(/^[a-zA-Z0-9]*$/)) {
      formValid = false;
      errors["username"] = "Input English & Number Form";
      if (username.length > 20) {
        formValid = false;
        errors["username"] = "Less than 20 characters";
      }
    }
  }
  //phone
  if (!phone) {
    formValid = false;
    errors["phone"] = "Cannot be empty";
  }
  if (phone) {
    if (!phone.match(/^010-?([0-9]{3,4})-?([0-9]{4})$/)) {
      formValid = false;
      errors["phone"] = "Input phone Form";
      if (phone.length > 11) {
        formValid = false;
        errors["phone"] = "Less than 11 characters";
      }
    }
  }
  //email
  if (!email) {
    formValid = false;
    errors["email"] = "Cannot be empty";
  }
  if (email) {
    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      formValid = false;
      errors["email"] = "Input email form";
      if (email.length > 50) {
        formValid = false;
        errors["email"] = "Less than 50 characters";
      }
    }
  }
  //website
  if (!website) {
    formValid = false;
    errors["website"] = "Cannot be empty";
  }
  if (website) {
    if (
      !website.match(
        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      )
    ) {
      formValid = false;
      errors["website"] = "Input website form";
    }
  }

  return { formValid, errors };
};
export default validator;
