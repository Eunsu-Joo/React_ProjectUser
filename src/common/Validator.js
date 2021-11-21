import { useForm } from "react-hook-form";
const Validator =(username) => {
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
      } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
          name: "",
          username: username,
          phone: "",
          email: "",
          website: "",
        },
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,
      });
      const regExp = {
        korean: /^[가-힣]+$/,
        email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        phone: /^010-?([0-9]{3,4})-?([0-9]{4})$/,
        engNumber: /^[a-zA-Z0-9]*$/,
        url: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      };
      const inputValidator = {
        name: {
          ...register("name", {
            required: {
              value: true,
              message: "Please write your name",
            },
            pattern: {
              value: regExp.korean,
              message: "Input Korean Form",
            },
            maxLength: {
              value: 10,
              message: "Less than 10 characters",
            },
          }),
        },
        username: {
          ...register("username", {
            required: {
              value: true,
              message: "Please write username",
            },
            pattern: {
              value: regExp.engNumber,
              message: "Input English & Number Form",
            },
            maxLength: {
              value: 20,
              message: "Less than 20 characters",
            },
          }),
        },
        phone: {
          ...register("phone", {
            required: {
              value: true,
              message: "Please write phone number",
            },
            pattern: {
              value: regExp.phone,
              message: "Input phone Form",
            },
          }),
          maxLength: {
            value: 12,
            message: "Less than 12 characters",
          },
        },
        email: {
          ...register("email", {
            required: {
              value: true,
              message: "Please write email address",
            },
            pattern: {
              value: regExp.email,
              message: "Input email form",
            },
            maxLength: {
              value: 50,
              message: "Less than 20 characters",
            },
          }),
        },
        website: {
          ...register("website", {
            required: {
              value: true,
              message: "Please write your website",
            },
            pattern: {
              value: regExp.url,
              message: "Input Url form",
            },
          }),
        },
      };
      return {inputValidator,errors,handleSubmit,reset}
}
  export default Validator;
