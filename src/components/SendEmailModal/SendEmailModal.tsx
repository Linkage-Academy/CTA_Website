import { Button, Modal, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useSendEmailModalStyles from "./SendEmailModal.styles";
import LogoLightGray from "./assets/LogoLightGray.png";

export interface ISendEmailModalProps {
  opened: boolean;
  close: () => void;
}

function SendEmailModal({ opened, close }: ISendEmailModalProps) {
  const { classes } = useSendEmailModalStyles();
  const form = useForm({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      course: "",
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    await fetch("https://emailweb.onrender.com/send_email", {
      method: "post",
      body: JSON.stringify(values),
    });
    form.reset();
    close();
  });

  return (
    <Modal
      className={classes.modalStyle}
      opened={opened}
      onClose={() => {
        form.reset();
        close();
      }}
      title="Inscripción"
      styles={{
        content: {
          backgroundImage: `url(${LogoLightGray})`,
        },
      }}
    >
      <form method="POST" onSubmit={onSubmit}>
        <Stack>
          <TextInput
            label="Nombre"
            placeholder="John"
            {...form.getInputProps("name")}
            required
          />
          <TextInput
            label="Apellido"
            placeholder="Doe"
            {...form.getInputProps("lastName")}
            required
          />
          <TextInput
            label="Correo"
            placeholder="your@email.com"
            type="email"
            {...form.getInputProps("email")}
            required
          />
          <TextInput
            label="Número Telefónico"
            placeholder="+505 8888 8888"
            {...form.getInputProps("phoneNumber")}
            required
          />
          <Select
            label="Selecciona el curso deseado"
            placeholder="¡Enrolate!"
            data={[
              { value: "CI", label: "Curso Infantil" },
              { value: "CW", label: "Curso Web" },
            ]}
            {...form.getInputProps("course")}
            required
          />
          <Button fullWidth type="submit">
            Inscribete
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}

export default SendEmailModal;
