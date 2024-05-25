/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import { AuthorizationForm } from "../../../components/AuthorizationForm/AuthorizationForm";
import { Button } from "../../../components/Buttons/UIButtons/Button";
import { Input } from "../../../components/UiInputs/Input/Input";
import { link_icon } from "../../../app/icons";
import { Link } from "react-router-dom";
import { useFetchRecoveryPasswordMutation } from "../../../redux/api/api";
import { useState } from "react";

export const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [recovery] = useFetchRecoveryPasswordMutation();

  const [notificationText, setNotificationText] = useState<string>("");
  const [isNotification, setIsNotification] = useState<boolean>(false);
  const onSubmit = async (data: any) => {
    try {
      const response = await recovery(data);

      if ("data" in response) {
        if (response.data.result === true) {
          setNotificationText(response.data.data.message);
        }
        setIsNotification(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthorizationForm
      message={notificationText}
      isNotification={isNotification}
      close={setIsNotification}
    >
      <Link to={"/login"} className="form-close">
        <img src={link_icon.close_menu} alt="Закрыть" />
      </Link>
      <div className="authorization__form-head">
        <h2 className="authorization__head-title">Восстановление пароля</h2>
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
          <div className="authorization__form-button">
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Отправить код"}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </AuthorizationForm>
  );
};
