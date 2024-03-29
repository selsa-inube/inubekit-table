import { useState } from "react";
import { MdClose } from "react-icons/md";

import { Blanket } from "@inubekit/blanket";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { titlesMock, actionsMock, breakPointsMock } from "./mocks";
import { props, parameters } from "../props";
import { Table, ITable } from "..";
import { StyledModal } from "./styles";

const story = {
  title: "data/Table",
  component: [Table],
  parameters,
  argTypes: props,
};

const LoremModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Blanket>
      <StyledModal>
        <Stack justifyContent="space-between">
          <Text
            as="h3"
            appearance={"primary"}
            type="title"
            size="large"
            textAlign="start"
          >
            Lorem ipsum
          </Text>
          <MdClose onClick={() => setIsVisible(false)} />
        </Stack>
        <Text textAlign="center" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum.
        </Text>
      </StyledModal>
    </Blanket>
  );
};

const Default = (args: ITable) => <Table {...args} />;
Default.args = {
  id: "tableId",
  titles: titlesMock,
  actions: actionsMock,
  entries: [
    {
      id: "11",
      username: "David Leonardo Garzón",
      code: "LGARZON",
      userID: "1256545",
      position: "Credit Analyst",
    },
    {
      id: "12",
      username: "Angie Pinilla",
      code: "APINILLA",
      userID: "789654",
      position: "Adviser",
    },
    {
      id: "13",
      username: "Cristian Rojas",
      code: "CROJAS",
      userID: "258963",
      position: "Credit Analyst",
    },
    {
      id: "14",
      username: "Johan Nova",
      code: "JNOVA",
      userID: "589647",
      position: "Adviser",
    },
  ],
  filter: "",
  pageLength: 10,
  breakpoints: breakPointsMock,
  modalTitle: "Form",
  infoTitle: "Information",
  content: <LoremModal />,
};

export { Default };
export default story;
