import { useState } from "react";
import "./defaultStyle.js";
import { MentionsInput, Mention } from "react-mentions";
import defaultMentionStyle from "./defaultMentionStyle.js";
import defaultStyle from "./defaultStyle.js";

const users = [
  { id: "hari", display: "Hari" },
  { id: "vani", display: "Vani" },
  { id: "hk", display: "Harikrishna" },
];

function MentionList() {
  const [value, setValue] = useState("");

  return (
    <MentionsInput
      singleLine
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type Message"
      style={defaultStyle}
      a11ySuggestionsListLabel={"Suggested mentions"}
      disableOutline={true}
      disableBorder={true}
    >
      <Mention style={defaultMentionStyle} data={users} />
    </MentionsInput>
  );
}

export default MentionList;
