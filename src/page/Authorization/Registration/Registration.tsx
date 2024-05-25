import { Link, useNavigate } from "react-router-dom";
import { AuthorizationForm } from "../../../components/AuthorizationForm/AuthorizationForm";
import { Button } from "../../../components/Buttons/UIButtons/Button";
import { Input } from "../../../components/UiInputs/Input/Input";
import { link_icon } from "../../../app/icons";
import { Controller, useForm } from "react-hook-form";
import { RegistrationTypes } from "./types/registration.interface";
import { useFetchRegistrationMutation } from "../../../redux/api/api";
import { useState } from "react";

export const Registration = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationTypes>();

  const [isNotification, setIsNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  // API
  const [registration] = useFetchRegistrationMutation();

  const onSubmit = async (data: RegistrationTypes) => {
    try {
      const response = await registration({
        email: data.email,
        password: data.password,
      });

      if ("data" in response) {
        if (response.data.result === true) {
          setNotificationMessage("Успешная регистрация");

          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
        if (response.data.errorMessage) {
          setNotificationMessage(response.data.errorMessage);
        }
        setIsNotification(true);
      }
    } catch (err) {
      console.log("registration err: ", err);
    }
  };

  return (
    <AuthorizationForm
      isNotification={isNotification}
      close={setIsNotification}
      message={notificationMessage}
    >
      <div className="authorization__form-head">
        <h2 className="authorization__head-title">Регистрация</h2>
        <div className="authorization__form-content">
          <Controller
            name="email"
            control={control}
            defaultValue={""}
            rules={{
              required: "Обязательно поле",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный формат email",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                name={"Эл. почта"}
                inputType={"email"}
                value={value}
                setValue={onChange}
                require={true}
                error={errors.email}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue={""}
            rules={{ required: "Обязательно поле" }}
            render={({ field: { onChange, value } }) => (
              <Input
                name={"Пароль"}
                inputType={"password"}
                value={value}
                setValue={onChange}
                passwordIcon={link_icon.eye_password}
                require={true}
                error={errors.password}
              />
            )}
          />
          <div className="authorization__form-button">
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Зарегистрироваться"}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
          <div className="authorization__form-bottom">
            <div className="authorization__bottom-text">
              Уже зарегистрированы? <Link to="/login">Войти.</Link>
            </div>
          </div>
        </div>
      </div>
    </AuthorizationForm>
  );
};
