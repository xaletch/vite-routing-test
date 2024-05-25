import { Controller, useForm } from "react-hook-form";
import { AuthorizationForm } from "../../../components/AuthorizationForm/AuthorizationForm";
import { Input } from "../../../components/UiInputs/Input/Input";
import { Button } from "../../../components/Buttons/UIButtons/Button";
import { link_icon } from "../../../app/icons";
import { LoginTypes } from "./types/login.interface";
import { Link, Navigate } from "react-router-dom";
import { useFetchAuthorizationMutation } from "../../../redux/api/api";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const setCookieWithExpiration = (cookieName: string, cookieValue: string) => {
  document.cookie = `${cookieName}=${cookieValue}; path=/;`;
};

export const LogIn = () => {
  const { updateAuthStatus } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>();

  const [logIn] = useFetchAuthorizationMutation();

  const [redirect, setRedirect] = useState<boolean>(false);
  const [isNotification, setIsNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  const onSubmit = async (data: LoginTypes) => {
    try {
      const response = await logIn(data);

      if (response.data) {
        if (response.data.data.token) {
          setCookieWithExpiration("token", response.data.data.token);

          updateAuthStatus();
          setRedirect(true);
        }

        if (response.data.errorMessage) {
          setNotificationMessage(response.data.errorMessage);
        }

        setIsNotification(true);
      }
    } catch (err) {
      console.log("При авторизации произошла ошибка, ", err);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <AuthorizationForm
      isNotification={isNotification}
      close={setIsNotification}
      message={notificationMessage}
    >
      <div className="authorization__form-head">
        <h2 className="authorization__head-title">Вход</h2>
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
              name={"Войти"}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
          <div className="authorization__form-bottom">
            <div className="authorization__bottom-text">
              У вас нет учетной записи?{" "}
              <Link to="/registration">Зарегестрироваться</Link>
            </div>
            <div className="authorization__bottom-text reset-password">
              Забыли пароль?{" "}
              <Link to={"/reset-password"}>Сбросить пароль.</Link>
            </div>
          </div>
        </div>
      </div>
    </AuthorizationForm>
  );
};
