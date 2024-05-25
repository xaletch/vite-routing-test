export function updateInformation(id: number) {
  // const [mutate] = useUpdateInformationMutation();
  try {
    console.log("обновлена информация карточки: ", id);
  } catch (err) {
    console.log(err);
  }
}
