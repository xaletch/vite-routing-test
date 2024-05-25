/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { link_icon } from "../../../app/icons";
import { Button } from "../../../components/Buttons/UIButtons/Button";
import "./createClient.css";
import { CreateClientProps } from "./types/createClient.interface";
import { FormBlock } from "../../../components/CreateClient/Client.FormBlock";
import { Input } from "../../../components/UiInputs/Input/Input";
import { ModalPopup } from "../../../components/UiPopups/ModalPopup/ModalPopup";
import { WorkScheme } from "../../../components/Buttons/WorkScheme/WorkScheme";
import { Controller, useForm } from "react-hook-form";

const schemeArr = ["FBS", "FBO"];

export const CreateClient: React.FC<CreateClientProps> = () => {
  const [bankDetails, setBankDetails] = useState<boolean>(false);

  // form
  const [countryOpen, setCountryOpen] = useState<boolean>(false);
  // const [country, setCountry] = useState<string[]>([]);

  //
  const [organizationTypeOpen, setOrganizationTypeOpen] =
    useState<boolean>(false);
  // const [organizationType, setOrganizationType] = useState<string[]>([]);

  // company
  const [companyOpen, setCompanyOpen] = useState<boolean>(false);
  // const [country, setCountry] = useState<string[]>([]);

  // service price
  const [servicePriceOpen, setServicePriceOpen] = useState<boolean>(false);
  // const [servicePrice, setServicePrice] = useState<string[]>([]);
  //
  const [scheme, setScheme] = useState<string[]>([]);

  useEffect(() => {
    if (schemeArr) {
      setScheme(schemeArr);
    }
  }, []);

  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    console.log("СОХРАНЕНО");
  };

  return (
    <div className="create-client">
      <div className="create-client__wrapper">
        <div className="create-client__head wrapper__head">
          <h2 className="page__title">Добавить</h2>
          <div className="create-client__head-control_button wrapper__head-control_button">
            <Button
              name={"Назад"}
              color={"#ffffff"}
              colorText={"#8653d4"}
              href={"/clients"}
              icon={link_icon.back_arrow}
            />
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Сохранить"}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
        <div className="container">
          <form className="create-client__form">
            <div className="create-client__form-wrapper">
              <FormBlock
                title="Данные компании"
                styleClass={"data-company"}
                hasCheckbox={true}
                onCheckboxChange={() => setBankDetails(!bankDetails)}
                checkboxState={bankDetails}
              >
                <>
                  <Controller
                    name="country"
                    control={control}
                    defaultValue={"Выбрать"}
                    rules={{
                      validate: (value) =>
                        value !== "Выбрать" || "Обязательно поле",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <ModalPopup
                        popupName={"Страна"}
                        selectValue={value}
                        setSelectValue={onChange}
                        popupValue={["Россия", "Беларусь", "Казахстан"]}
                        isOpen={countryOpen}
                        handleClick={() => setCountryOpen(!countryOpen)}
                        grid={"1 / 2 span"}
                        errors={errors.country}
                      />
                    )}
                  />
                  <Controller
                    name="iin"
                    control={control}
                    defaultValue={""}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"ИИН"}
                        inputType={"number"}
                        value={value}
                        setValue={onChange}
                        grid={"3 / 2 span"}
                        require={false}
                      />
                    )}
                  />
                  <Controller
                    name="organization_type"
                    control={control}
                    defaultValue={"Выбрать"}
                    rules={{
                      validate: (value) =>
                        value !== "Выбрать" || "Обязательно поле",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <ModalPopup
                        popupName={"Тип организации"}
                        selectValue={value}
                        setSelectValue={onChange}
                        popupValue={[
                          "Корпорации",
                          "Кооперативы",
                          "Индивидуальные предприниматели",
                        ]}
                        isOpen={organizationTypeOpen}
                        handleClick={() =>
                          setOrganizationTypeOpen(!organizationTypeOpen)
                        }
                        grid={"5 / 2 span"}
                        errors={errors.organization_type}
                      />
                    )}
                  />
                  <>
                    <Controller
                      name="designation"
                      control={control}
                      defaultValue={""}
                      rules={{ required: "Обязательно поле" }}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          name={"Наименование"}
                          inputType={"text"}
                          value={value}
                          setValue={onChange}
                          grid={"1 / 2 span"}
                          require={true}
                          error={errors.designation}
                        />
                      )}
                    />
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
                          grid={"3 / 2 span"}
                          require={true}
                          error={errors.email}
                        />
                      )}
                    />
                    <Controller
                      name="address"
                      control={control}
                      defaultValue={""}
                      rules={{ required: "Обязательно поле" }}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          name={"Адрес"}
                          inputType={"text"}
                          value={value}
                          setValue={onChange}
                          grid={"5 / 2 span"}
                          require={true}
                          error={errors.address}
                        />
                      )}
                    />
                  </>
                </>
              </FormBlock>

              <FormBlock title="Данные для авторизации">
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Обязательно поле" }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name={"Номер телефона"}
                      inputType={"number"}
                      value={value}
                      setValue={onChange}
                      grid={"1 / 3 span"}
                      require={true}
                      error={errors.phone}
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
                      grid={"4 / 3 span"}
                      require={true}
                      error={errors.password}
                    />
                  )}
                />
              </FormBlock>

              <FormBlock title="Директор">
                <Controller
                  name="first_name"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Обязательно поле" }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name={"Имя"}
                      inputType={"text"}
                      value={value}
                      setValue={onChange}
                      grid={"1 / 2 span"}
                      require={true}
                      error={errors.first_name}
                    />
                  )}
                />
                <Controller
                  name="last_name"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Обязательно поле" }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name={"Фамилия"}
                      inputType={"text"}
                      value={value}
                      setValue={onChange}
                      grid={"3 / 2 span"}
                      require={true}
                      error={errors.last_name}
                    />
                  )}
                />
                <Controller
                  name="father_name"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Обязательно поле" }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name={"Отчество"}
                      inputType={"text"}
                      value={value}
                      setValue={onChange}
                      grid={"5 / 2 span"}
                      require={true}
                      error={errors.father_name}
                    />
                  )}
                />
              </FormBlock>

              <FormBlock title="Схема работы">
                {scheme.map((item, index) => (
                  <Controller
                    name="work_scheme"
                    control={control}
                    defaultValue={"FBO"}
                    key={index}
                    render={({ field: { onChange, value } }) => (
                      <WorkScheme
                        scheme={item}
                        select={value}
                        handleClick={() => onChange(item)}
                      />
                    )}
                  />
                ))}
              </FormBlock>

              <FormBlock title="Данные для выставления счёта">
                <Controller
                  name="percent_up"
                  control={control}
                  defaultValue={""}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name={"Процент надбавки"}
                      inputType={"number"}
                      value={value}
                      setValue={onChange}
                      grid={"1 / 2 span"}
                      require={false}
                    />
                  )}
                />
                <Controller
                  name="company"
                  control={control}
                  defaultValue={"Выбрать"}
                  rules={{
                    validate: (value) =>
                      value !== "Выбрать" || "Обязательно поле",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <ModalPopup
                      popupName={"Компания"}
                      selectValue={value}
                      setSelectValue={onChange}
                      popupValue={["компания 1", "компания 2", "компания 3"]}
                      isOpen={companyOpen}
                      handleClick={() => setCompanyOpen(!companyOpen)}
                      grid={"3 / 2 span"}
                      errors={errors.company}
                    />
                  )}
                />
                <Controller
                  name="service_price"
                  control={control}
                  defaultValue={"Выбрать"}
                  rules={{
                    validate: (value) =>
                      value !== "Выбрать" || "Обязательно поле",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <ModalPopup
                      popupName={"Стоимость услуги хранения"}
                      selectValue={value}
                      setSelectValue={onChange}
                      popupValue={["1.000 руб.", "5.000 руб.", "10.000 руб."]}
                      isOpen={servicePriceOpen}
                      handleClick={() => setServicePriceOpen(!servicePriceOpen)}
                      grid={"5 / 2 span"}
                      errors={errors.service_price}
                    />
                  )}
                />
              </FormBlock>

              {bankDetails && (
                <FormBlock
                  title="Банковские реквизиты"
                  styleClass={"bank-details"}
                >
                  <Controller
                    name="bank_name"
                    control={control}
                    defaultValue={""}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"Наименование банка"}
                        inputType={"string"}
                        value={value}
                        setValue={onChange}
                        grid={"1 / 2 span"}
                        require={false}
                      />
                    )}
                  />
                  <Controller
                    name="bank_location"
                    control={control}
                    defaultValue={""}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"Расположение банка"}
                        inputType={"string"}
                        value={value}
                        setValue={onChange}
                        grid={"3 / 2 span"}
                        require={false}
                      />
                    )}
                  />
                  <Controller
                    name="bik"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Обязательно поле" }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"БИК банка"}
                        inputType={"number"}
                        value={value}
                        setValue={onChange}
                        grid={"5 / 2 span"}
                        require={true}
                        error={errors.bik}
                      />
                    )}
                  />

                  <Controller
                    name="ogrnip"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Обязательно поле" }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"ОГРНИП"}
                        inputType={"number"}
                        value={value}
                        setValue={onChange}
                        grid={"1 / 2 span"}
                        require={true}
                        error={errors.ogrnip}
                      />
                    )}
                  />

                  <Controller
                    name="bank_account"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Обязательно поле" }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"Расчётный счёт"}
                        inputType={"number"}
                        value={value}
                        setValue={onChange}
                        grid={"3 / 2 span"}
                        require={true}
                        error={errors.bank_account}
                      />
                    )}
                  />

                  <Controller
                    name="corresponding_account"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Обязательно поле" }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        name={"Корреспондентский счет"}
                        inputType={"number"}
                        value={value}
                        setValue={onChange}
                        grid={"5 / 2 span"}
                        require={true}
                        error={errors.corresponding_account}
                      />
                    )}
                  />
                </FormBlock>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
