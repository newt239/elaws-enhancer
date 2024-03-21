import { useState } from "react";

function IndexPopup() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <p>Toggle the switch to convert the text from old to new</p>
      <input
        type="checkbox"
        onChange={(e) => {
          setChecked(true);
        }}
        checked={checked}
      />
    </div>
  );
}

export default IndexPopup;
